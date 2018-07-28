//Not stored as a JSON because apparently Chrome won't read local JSON files from disk
//Update this to XML sooner or later. Probably later.

var modifiers = [
    {
        "name": "mobility: primary natural", 
        "cost": "-4", 
        "tag": "mobility", 
        "color": "green", 
        "icon": "", 
        "tooltip": "Running, Walking, etc", 
        "defaultcost": "-4", 
        "notes": ""
    }, 
    {
        "name": "mobility: secondary natural", 
        "cost": "-2", 
        "tag": "mobility", 
        "color": "#4286f4", 
        "icon": "", 
        "tooltip": "Swimming, Climbing", 
        "defaultcost": "-2", 
        "notes": ""
    }, 
    {
        "name": "mobility: tertiary natural", 
        "cost": "0", 
        "tag": "mobility", 
        "color": "#4286f4", 
        "icon": "", 
        "tooltip": "Digging", 
        "defaultcost": "0", 
        "notes": ""
    }, 
    {
        "name": "mobility: artificial", 
        "cost": "-1", 
        "tag": "mobility", 
        "color": "green", 
        "icon": "", 
        "tooltip": "This is a type of movement that is possible by natural means, but the special effect used by the power is not natural", 
        "defaultcost": "-1", 
        "notes": ""
    }, 
    {
        "name": "information: store", 
        "cost": "-1", 
        "tag": "information", 
        "color": "green", 
        "icon": "", 
        "tooltip": "The effect of the power is to hold And retreive information.", 
        "defaultcost": "-1", 
        "notes": ""
    }, 
    {
        "name": "information: receive", 
        "cost": "-2", 
        "tag": "information", 
        "color": "#4286f4", 
        "icon": "", 
        "tooltip": "", 
        "defaultcost": "-2", 
        "notes": ""
    }, 
    {
        "name": "information: jam", 
        "cost": "-3", 
        "tag": "information", 
        "color": "#4286f4", 
        "icon": "", 
        "tooltip": "", 
        "defaultcost": "-3", 
        "notes": ""
    }, 
    {
        "name": "information: transmit", 
        "cost": "2", 
        "tag": "information", 
        "color": "#4286f4", 
        "icon": "", 
        "tooltip": "", 
        "defaultcost": "2", 
        "notes": ""
    }, 
    {
        "name": "power duration: time level", 
        "cost": "varies", 
        "tag": "duration", 
        "color": "#4286f4", 
        "icon": "", 
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
		"active":"0"
    }
]


