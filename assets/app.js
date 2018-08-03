var power = { //object of the total power
	mods: [], //array holds modifiers from the EABA core rules
	total: function () { //gets the sum of all mods, regardless of special rules
		return Number(_.reduce(_.pluck(this.mods, "cost"), function (memo, num) { return Number(memo) + Number(num); }, 0));
	},
	name : "my power",
	setName : function (n) {
		this.name = n;
	},
	base: 0, //integer holds base power level
	checkInformation: function () { //eliminates fake news
		var foo = _.sortBy(_.compact(_.map(this.mods, function (value, key) {
			if (value.tag == "information") { return value };
		})), "cost");

	}
};

function listModifiers(list) { //this function pulls in a sorted list of available mods from JSON

	//if something falsy is passed to listModifiers, use full list
	if (_.isEmpty(list)) {
		powerlist = modifiers;
	} else {
		powerlist = list;
	};

	var i = 0; //bean counter
	var obj;
	var col1; var col2; var col3; var col4;
	var line = "";
	for (i = 0; i < powerlist.length; i++) { //generate table
		obj = JSON.stringify(powerlist[i]);
		col1 = "<td class='icon-main powercolor' style='color:" + powerlist[i].color + ";'>" + powerlist[i].icon + "</td>";
		col2 = "<td class='powername powercolor'><span class='tooltip'>" + powerlist[i].name + "<span class='tooltiptext'>" + powerlist[i].tooltip + "</span></span></td>";
		line = line + "<tr class='modrow'>" + col1 + col2 + "<td class='powercost'>" + powerlist[i].cost + "</td><td><button onclick='addPower(" + obj + ")'>+</button></td></tr>";
	}

	$(document).ready(function () {
		$("tr").remove(".modrow"); //clear old table
		$(".availablemods").after(line);
	});
}

function sortModifiers() {
	var sortList = $("input", function () { //query input boxes
		sortList = _.object(_.map(_.flatten(sortList), function (num, key) { return [$(num).attr('id').replace("filter_", ""), $(num).prop("checked")]; }));
		var tags = [];
		_.map(sortList, function (num, key) { if (num == true) { tags.push(key); }; });
		var modComp = [];
		_.each(modifiers, function (num, key) {
			_.each(tags, function (a, b) {
				//logMe(a);
				if (num.tag == a) {
					//logMe(a);
					modComp.push(num);
				};
			});
		});
		//logDir(modComp);
		listModifiers(modComp);
	});



}
//adds new mod entries into power.mod array
function addPower(obj) {
	power.mods.push(obj);
	//logDir(power.mods);
	updatePower();
}

function changeNote(key) {
	var id = String("input#note_" + key);
	var text = new String;
	$(function () {

		text = $(id).val();
		logMe(text);
		power.mods[key].notes = text;

	});
};

var changeData = function (key, method, active) {
	var id = String("#data_" + key);
	var text = new String;
	var index = 0;
	if (power.mods[key].cost == 'varies') { power.mods[key].cost = '0' };
	$(function () { //warning, async
		text = $(id).val();
		logMe(text);
		power.mods[key].cost = Number(text);

		if (active) {
			index = ($(id).prop("selectedIndex"));
			power.mods[key].active = index;
		}

		updatePower();
	});
};

function removePower(index) { //pulls  mod entries from power.mod array
	power.mods.splice(index, 1);
	updatePower();
};

function movePowerUp(index) { //moves selected mod up in list
	if (index != 0) {
		var oldMod = power.mods[index];
		var newMod = power.mods[index - 1];
		power.mods[index] = newMod;
		power.mods[index - 1] = oldMod;
		updatePower();
	}
};

function movePowerDn(index) { //pulls  mod entries from power.mod array
	var n = 0;
	
	n = Number(power.mods.length) - 1;
	console.log(n);
	if (index != n) {
		var oldMod = power.mods[index];
		var newMod = power.mods[index + 1];
		power.mods[index] = newMod;
		power.mods[index + 1] = oldMod;
		updatePower();
	}
};

function organizePower(){
	power.mods = _.sortBy(power.mods,'priority');
	updatePower();
}

function clearPower () {
	power.name = "";
	power.mods =[];
	updatePower();
}
function updatePower() { //updates user interface
	var i = 0; //bean counter

	logDir(power.mods);
	var output = "";
	output = String(_.reduce(power.mods, function (modTable, newRow, key) {
		//logDir(newRow);
		var cell = ["", "", "", "", "", ""];
		cell[0] = String("<td class='icon-main powercolor' style='color:" + newRow.color + ";'>" + newRow.icon + "</td>");
		cell[1] = "<td class='powername'>" + newRow.name + "</td>";
		var noteInput = "<input type='text' class='notearea' id='note_" + key + "' onchange='changeNote(" + key + ")' value='" + newRow.notes + "'></input>";
		cell[2] = "<td>" + noteInput + "</td>";
		var man = "";
		if (power.mods[key].cost == 'varies') { power.mods[key].cost = '0' };
		if (newRow.varies) {

			switch (newRow.varies) {
				case "input":
					man = "<input style='width: 40px;' type='number' id='data_'" + key + "/>";
					break;
				case "select":
					man = createSelect(newRow.select, key, newRow.active);
					break;
				default:
					man = "none";
			}
		} else { man = "none" };

		cell[3] = "<td class='' >" + man + "</td>";
		cell[4] = "<td class='powercost' >" + newRow.cost + "</td>";
		cell[5] = "<td><button onclick='removePower(" + key + ")'>-</button></td>";
		cell[6] = "<td><button onclick='movePowerUp("+key+")'>&#9650;</button><button onclick='movePowerDn("+key+")'>&#9660;</button></td>";
		var row = String("<tr class='powerrow'>" + cell[0] + cell[1] + cell[2] + cell[3] + cell[4] + cell[5] + cell[6] + "</tr>" + "\n");
		//logMe(row);
		return modTable + row;
	}, ""));


	$(document).ready(function () { //warning, async
		power.name = $("#power_name").val();
		$("tr").remove(".powerrow"); //clear old table
		$(".powertotals").before(output);
		$("SPAN#powertotal").text(power.total()); //display current power total
		$("#power_name").val(power.name);
		logMe(power.name);

	});

};

function createSelect(obj, id, selected) {
	var select = new String;
	var index = 0;
	select = _.reduce(obj, function (memo, val, key) {
		if (index == selected) { val = val + "' selected='selected" };
		var option = "<option data-index='" + index + "' value='" + val + "'>" + key + "</option>" + "\n";
		index++;
		return memo + option;
	}, "");
	return "<select id='data_" + id + "' onchange='changeData(" + id + ",0,1)'>" + select + "</select>";
};


//-------------------------------Read/Write---------------------------------
function saveToLocal() {
	updatePower();
	var temp = power.mods.slice(0); 
	temp.push({"name" : power.name});
	//logDir(temp);
	var data = LZString.compressToEncodedURIComponent(JSON.stringify(temp));
	//logMe(data);
	var blob = new Blob([data], { type: "text/plain;charset=utf-8" });
	var filetitle=power.name;
	saveAs(blob, filetitle+".eaba");

}

function openLocal() {
	$(function () {
		var file = new FileReader;
		logDir($("#openlocal").files);
	});
}

var readTextFile = function() {
	var file = document.querySelector('input[type=file]').files[0];

	var reader = new FileReader();

	var out;
	var importedPowers;
	reader.addEventListener("load", function () {
		out=reader.result;
		var deflated = new String;
		deflated = LZString.decompressFromEncodedURIComponent(out);
		importedPowers = JSON.parse(deflated);
		logMe(importedPowers[importedPowers.length-1].name);
		importedPowers.pop();
		logMe(out);
		logMe(deflated);
		power.mods=[];
		power.mods=importedPowers;
		updatePower();
	}, false);
	if (file) {
		reader.readAsText(file);
	}
}

function uploader() {
	power.mods=[];
	updatePower();
	var openme = document.getElementById("uploader").value;
	var showme = readTextFile();//openme);
	//logDir(showme);
}

//-------------Console tools------------------
var isDebug = 1; //are we debug?
var consolePrefix = "Power Creator: ";
//if (isDebug!=0){};
function logMe(m) { if (isDebug != 0) { console.log(consolePrefix + m) } }; //Log Single value
function logMinJSON(m) { if (isDebug != 0) { console.log(consolePrefix + JSON.stringify(m)) } }; //Log Minified JSON
function logJSON(m) { if (isDebug != 0) { console.log(consolePrefix + JSON.stringify(m, null, "\t")) } }; //Log Tabbed JSON
function logHR() {
	if (isDebug != 0) { //add pretty line break
		console.log(consolePrefix + "------------------------------------");
	}
};
function logDir(obj) { console.dir(obj) };



