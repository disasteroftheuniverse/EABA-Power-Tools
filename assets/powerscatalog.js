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
        "tag": "duration", 
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
        "priority": 3
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
    }
]


