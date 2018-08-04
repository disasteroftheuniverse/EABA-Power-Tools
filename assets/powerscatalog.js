//Not stored as a JSON because apparently Chrome won't read local JSON files from disk
//Update this to XML sooner or later. Probably later.

var modifiers = [
    {
        "name": "mobility: primary natural", 
        "cost": "-4", 
        "tag": "mobility", 
        "color": "GreenYellow", 
        "icon": "&#xe800;", 
        "tooltip": "Running, Walking, etc", 
        "defaultcost": "-4", 
        "notes": "",
        "priority": 1
    }, 
    {
        "name": "mobility: secondary natural", 
        "cost": "-2", 
        "tag": "mobility", 
        "color": "LightSkyBlue", 
        "icon": "&#xe800;", 
        "tooltip": "Swimming, Climbing", 
        "defaultcost": "-2", 
        "notes": "",
        "priority": 1
    }, 
    {
        "name": "mobility: tertiary natural", 
        "cost": "0", 
        "tag": "mobility", 
        "color": "LightSkyBlue", 
        "icon": "&#xe800;", 
        "tooltip": "Digging", 
        "defaultcost": "0", 
        "notes": "",
        "priority": 1
    }, 
    {
        "name": "mobility: artificial", 
        "cost": "-1", 
        "tag": "mobility", 
        "color": "GreenYellow", 
        "icon": "&#xe800;", 
        "tooltip": "This is a type of movement that is possible by natural means, but the special effect used by the power is not natural", 
        "defaultcost": "-1", 
        "notes": "",
        "priority": 1
    }, 
    {
        "name": "information: store", 
        "cost": "-1", 
        "tag": "information", 
        "color": "GreenYellow", 
        "icon": "&#xe800;", 
        "tooltip": "The effect of the power is to hold And retreive information.", 
        "defaultcost": "-1", 
        "notes": "",
        "priority": 1
    }, 
    {
        "name": "information: receive", 
        "cost": "-2", 
        "tag": "information", 
        "color": "LightSkyBlue", 
        "icon": "&#xe800;", 
        "tooltip": "", 
        "defaultcost": "-2", 
        "notes": "",
        "priority": 1
    }, 
    {
        "name": "information: jam", 
        "cost": "-3", 
        "tag": "information", 
        "color": "LightSkyBlue", 
        "icon": "&#xe800;", 
        "tooltip": "", 
        "defaultcost": "-3", 
        "notes": "",
        "priority": 1
    }, 
    {
        "name": "information: transmit", 
        "cost": "2", 
        "tag": "information", 
        "color": "LightSkyBlue", 
        "icon": "&#xe800;", 
        "tooltip": "", 
        "defaultcost": "2", 
        "notes": "",
        "priority": 1
    }, 
    {
        "name": "power duration: time level", 
        "cost": "varies", 
        "tag": "powerduration", 
        "color": "LightSkyBlue", 
        "icon": "&#xe800;", 
        "tooltip": "", 
        "varies": "select", 
        "defaultcost": "0", 
        "notes": "", 
        "select": {
			"1 second" : 0,
			"1 minute" : -1,
			"1 hour" : 2,
			"instant" : -3
		},
		"active":"0",
        "priority": 4
    }, 
    {"name":"off: acts as lethal dmg","cost":"0","defaultcost":"0","tag":"offense","color":"GreenYellow","icon":"&#xe800","notes":"","tooltip":"acts as lethal damage","priority": 1}, 
    {"name":"off: acts as stunning dmg","cost":"2","defaultcost":"2","tag":"offense","color":"LightSkyBlue","icon":"&#xe800","notes":"","tooltip":"acts as stunning damage","priority": 1}, 
    {"name":"off: acts as lethal melee","cost":"2","defaultcost":"2","tag":"offense","color":"GreenYellow","icon":"&#xe800","notes":"","tooltip":"acts as lethal melee","priority": 1}, 
    {"name":"off: acts as stunning melee","cost":"4","defaultcost":"4","tag":"offense","color":"GreenYellow","icon":"&#xe800","notes":"","tooltip":"acts as stunning melee damage","priority": 1}, 
    {"name":"off: affect very broad power","cost":"-10","defaultcost":"-10","tag":"offense","color":"red","icon":"&#xe800","notes":"","tooltip":"","priority": 1}, 
    {"name":"off: affect broad power","cost":"-6","defaultcost":"-6","tag":"offense","color":"LightSkyBlue","icon":"&#xe800","notes":"","tooltip":"","priority": 1}, 
    {"name":"off: affect average power","cost":"-4","defaultcost":"-4","tag":"offense","color":"GreenYellow","icon":"&#xe800","notes":"","tooltip":"","priority": 1}, 
    {"name": "off: affect narrow power","cost":"-2","defaultcost":"-2","tag":"offense","color":"GreenYellow","icon":"&#xe800","notes":"","tooltip":"","priority": 1}, 
    {
        "name": "def: affect very broad power",
        "cost": "-4",
        "defaultcost": "-4",
        "tag": "defense",
        "color": "red",
        "icon": "&#xe800",
        "notes": "",
        "tooltip": "second & third items",
        "priority": 1
    }, 
    {
        "name": "def: affect broad power",
        "cost": "0",
        "defaultcost": "0",
        "tag": "defense",
        "color": "LightSkyBlue",
        "icon": "&#xe800",
        "notes": "",
        "tooltip": "first & second, or first & third items",
        "priority": 1
    }, 
    {
        "name": "def: affect average power",
        "cost": "2",
        "defaultcost": "2",
        "tag": "defense",
        "color": "GreenYellow",
        "icon": "&#xe800",
        "notes": "",
        "tooltip": "first, second & third items",
        "priority": 1
    }, 
    {
        "name": "def: affect narrow power",
        "cost": "4",
        "defaultcost": "4",
        "tag": "defense",
        "color": "GreenYellow",
        "icon": "&#xe800",
        "notes": "",
        "tooltip": "all of first, second & third items",
        "priority": 1
    }, 
    {
        "name": "def: protect vs. lethal",
        "cost": "-4",
        "defaultcost": "-4",
        "tag": "defense",
        "color": "GreenYellow",
        "icon": "&#xe800",
        "notes": "",
        "tooltip": "protects against lethal dmg",
        "priority": 1
    }, 
    {
        "name": "def: protect vs. a power cat.",
        "cost": 0,
        "defaultcost": 0,
        "tag": "defense",
        "color": "LightSkyBlue",
        "icon": "&#xe800",
        "notes": "",
        "tooltip": "",
        "priority": 1
    }, 
    {
        "name": "def: protects as armor",
        "cost": 0,
        "defaultcost": 0,
        "tag": "offense",
        "color": "GreenYellow",
        "icon": "&#xe800",
        "notes": "",
        "tooltip": "",
        "priority": 1
    }, 
    {
        "name": "def: protects as rigid armor",
        "cost": 2,
        "defaultcost": 2,
        "tag": "defense",
        "color": "GreenYellow",
        "icon": "&#xe800",
        "notes": "",
        "tooltip": "",
        "priority": 1
    }, 
    {
        "name": "def:protects as flex. armor",
        "cost": 4,
        "defaultcost": 4,
        "tag": "defense",
        "color": "GreenYellow",
        "icon": "&#xe800",
        "notes": "",
        "tooltip": "",
        "priority": 1
    }, 
    {
        "name": "ctrl: control is objective",
        "cost": 0,
        "defaultcost": 0,
        "tag": "control",
        "color": "GreenYellow",
        "icon": "&#xe800",
        "notes": "",
        "tooltip": "",
        "priority": 1
    }, 
    {
        "name": "ctrl: control is subjective",
        "cost": 3,
        "defaultcost": 3,
        "tag": "control",
        "color": "GreenYellow",
        "icon": "&#xe800",
        "notes": "",
        "tooltip": "",
        "priority": 1
    }, 
    {
        "name": "ctrl target: control over animate",
        "cost": 2,
        "defaultcost": 2,
        "tag": "control",
        "color": "GreenYellow",
        "icon": "&#xe800",
        "notes": "",
        "tooltip": "",
        "priority": 2
    }, 
    {
        "name": "ctrl target: control over inanimate",
        "cost": 0,
        "defaultcost": 0,
        "tag": "control",
        "color": "GreenYellow",
        "icon": "&#xe800",
        "notes": "",
        "tooltip": "",
        "priority": 2
    }, 
    {
        "name": "ctrl target: control over sentient",
        "cost": -2,
        "defaultcost": -2,
        "tag": "control",
        "color": "GreenYellow",
        "icon": "&#xe800",
        "notes": "",
        "tooltip": "",
        "priority": 2
    }, 
    {
        "name": "ctrl target: control over abstract",
        "cost": 3,
        "defaultcost": 3,
        "tag": "control",
        "color": "red",
        "icon": "&#xe800",
        "notes": "",
        "tooltip": "",
        "priority": 2
    }, 
    {
        "name": "ctrl target: control over broad type",
        "cost": 0,
        "defaultcost": 0,
        "tag": "control",
        "color": "GreenYellow",
        "icon": "&#xe800",
        "notes": "",
        "tooltip": "",
        "priority": 2
    }, 
    {
        "name": "ctrl target: control over single type",
        "cost": 2,
        "defaultcost": 2,
        "tag": "control",
        "color": "GreenYellow",
        "icon": "&#xe800",
        "notes": "",
        "tooltip": "",
        "priority": 2
    }, 
    {
        "name": "ctrl target: control over unique",
        "cost": 4,
        "defaultcost": 4,
        "tag": "control",
        "color": "GreenYellow",
        "icon": "&#xe800",
        "notes": "",
        "tooltip": "",
        "priority": 2
    }, 
    {
        "name": "alter: restore",
        "cost": -6,
        "defaultcost": -6,
        "tag": "alter",
        "color": "red",
        "icon": "&#xe800",
        "notes": "",
        "tooltip": "This aspect of alteration means that you can take a target that has been reduced in some way and bring it back towards its normal or natural level. This is what you would use for healing or repair powers. A restore effect cannot improve a reduced target to more than its natural or intact level.",
        "priority": 1
    }, 
    {
        "name": "alter: increase",
        "cost": -1,
        "defaultcost": -1,
        "tag": "alter",
        "color": "GreenYellow",
        "icon": "&#xe800",
        "notes": "",
        "tooltip": "",
        "priority": 1
    }, 
    {
        "name": "alter: reduce",
        "cost": 0,
        "defaultcost": 0,
        "tag": "alter",
        "color": "GreenYellow",
        "icon": "&#xe800",
        "notes": "",
        "tooltip": "",
        "priority": 1
    }, 
    {
        "name": "alter: expand",
        "cost": 0,
        "defaultcost": 0,
        "tag": "alter",
        "color": "GreenYellow",
        "icon": "&#xe800",
        "notes": "",
        "tooltip": "",
        "priority": 1
    }, 
    {
        "name": "alter: limit",
        "cost": 2,
        "defaultcost": 2,
        "tag": "alter",
        "color": "LightSkyBlue",
        "icon": "&#xe800",
        "notes": "",
        "tooltip": "",
        "priority": 1
    }, 
    {
        "name": "alter: morph",
        "cost": 0,
        "defaultcost": 0,
        "tag": "alter",
        "color": "LightSkyBlue",
        "icon": "&#xe800",
        "notes": "",
        "tooltip": "",
        "priority": 1
    }, 
    {
        "name": "alter: transfer",
        "cost": -6,
        "defaultcost": -6,
        "tag": "alter",
        "color": "red",
        "icon": "&#xe800",
        "notes": "",
        "tooltip": "",
        "priority": 1
    }, 
    {
        "name": "alter: indirect transfer",
        "cost": -2,
        "defaultcost": -2,
        "tag": "alter",
        "color": "red",
        "icon": "&#xe800",
        "notes": "",
        "tooltip": "",
        "priority": 1
    }, 
    {
        "name": "alter target: physical attribute",
        "cost": -2,
        "defaultcost": -2,
        "tag": "alter",
        "color": "GreenYellow",
        "icon": "&#xe800",
        "notes": "",
        "tooltip": "",
        "priority": 2
    }, 
    {
        "name": "alter target: mental attribute",
        "cost": -3,
        "defaultcost": -3,
        "tag": "alter",
        "color": "GreenYellow",
        "icon": "&#xe800",
        "notes": "",
        "tooltip": "",
        "priority": 2
    }, 
    {
        "name": "alter target: meta attribute",
        "cost": -4,
        "defaultcost": -4,
        "tag": "alter",
        "color": "GreenYellow",
        "icon": "&#xe800",
        "notes": "",
        "tooltip": "",
        "priority": 2
    }, 
    {
        "name": "alter target: affect very broad power",
        "cost": -10,
        "defaultcost": -10,
        "tag": "alter",
        "color": "red",
        "icon": "&#xe800",
        "notes": "",
        "tooltip": "",
        "priority": 2
    }, 
    {
        "name": "alter target: affect broad power",
        "cost": -6,
        "defaultcost": -6,
        "tag": "alter",
        "color": "LightSkyBlue",
        "icon": "&#xe800",
        "notes": "",
        "tooltip": "",
        "priority": 2
    }, 
    {
        "name": "alter target: affect average power",
        "cost": -4,
        "defaultcost": -4,
        "tag": "alter",
        "color": "GreenYellow",
        "icon": "&#xe800",
        "notes": "",
        "tooltip": "",
        "priority": 2
    }, 
    {
        "name": "alter target: affect narrow power",
        "cost": -2,
        "defaultcost": -2,
        "tag": "alter",
        "color": "GreenYellow",
        "icon": "&#xe800",
        "notes": "",
        "tooltip": "",
        "priority": 2
    }, 
    {
        "name": "alter target: multiple targets",
        "cost": -2,
        "defaultcost": -2,
        "tag": "alter",
        "color": "GreenYellow",
        "icon": "&#xe800",
        "notes": "",
        "tooltip": "",
        "priority": 2
    }, 
    {
        "name": "range: self-only",
        "cost": 4,
        "defaultcost": 4,
        "tag": "range",
        "color": "GreenYellow",
        "icon": "&#x2295",
        "notes": "",
        "tooltip": "",
        "priority": 3
    }, 
    {
        "name": "range: aura",
        "cost": 2,
        "defaultcost": 2,
        "tag": "range",
        "color": "GreenYellow",
        "icon": "&#x2295",
        "notes": "",
        "tooltip": "",
        "priority": 3
    }, 
    {
        "name": "range: touch",
        "cost": 0,
        "defaultcost": 0,
        "tag": "range",
        "color": "GreenYellow",
        "icon": "&#x2295",
        "notes": "",
        "tooltip": "",
        "priority": 3
    }, 
    {
        "name": "range: melee",
        "cost": -1,
        "defaultcost": -1,
        "tag": "range",
        "color": "GreenYellow",
        "icon": "&#x2295",
        "notes": "",
        "tooltip": "",
        "priority": 3
    }, 
    {
        "name": "range: thrown",
        "cost": -1,
        "defaultcost": -1,
        "tag": "range",
        "color": "GreenYellow",
        "icon": "&#x2295",
        "notes": "",
        "tooltip": "",
        "priority": 3
    }, 
    {
        "name": "range: very short",
        "cost": -1,
        "defaultcost": -1,
        "tag": "range",
        "color": "GreenYellow",
        "icon": "&#x2295",
        "notes": "",
        "tooltip": "",
        "priority": 3
    }, 
    {
        "name": "range: short",
        "cost": -3,
        "defaultcost": -3,
        "tag": "range",
        "color": "GreenYellow",
        "icon": "&#x2295",
        "notes": "",
        "tooltip": "",
        "priority": 3
    }, 
    {
        "name": "range: medium",
        "cost": -5,
        "defaultcost": -5,
        "tag": "range",
        "color": "GreenYellow",
        "icon": "&#x2295",
        "notes": "",
        "tooltip": "",
        "priority": 3
    }, 
    {
        "name": "range: long",
        "cost": -7,
        "defaultcost": -7,
        "tag": "range",
        "color": "GreenYellow",
        "icon": "&#x2295",
        "notes": "",
        "tooltip": "",
        "priority": 3
    }, 
    {
        "name": "range: very long",
        "cost": -9,
        "defaultcost": -9,
        "tag": "range",
        "color": "LightSkyBlue",
        "icon": "&#x2295",
        "notes": "",
        "tooltip": "",
        "priority": 3
    }, 
    {
        "name": "range: extended range",
        "cost": -2,
        "defaultcost": -2,
        "tag": "range",
        "color": "LightSkyBlue",
        "icon": "&#x2295",
        "notes": "",
        "tooltip": "",
        "priority": 3
    }, 
    {
        "name": "range: declining range",
        "cost": -1,
        "defaultcost": -1,
        "tag": "range",
        "color": "LightSkyBlue",
        "icon": "&#x2295",
        "notes": "",
        "tooltip": "",
        "priority": 3
    }, 
    {
        "name": "range: minimum range",
        "cost": 1,
        "defaultcost": 1,
        "tag": "range",
        "color": "GreenYellow",
        "icon": "&#x2295",
        "notes": "",
        "tooltip": "",
        "priority": 3
    }
]


