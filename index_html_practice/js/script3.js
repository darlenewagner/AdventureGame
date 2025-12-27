// Testing Array Operations
const cyborgs = {
    "borg": [{ 
      "borgId": 101,
      "borgJob": "Communications"
    },
    {
      "borgId": 102,
      "borgJob": "Weapons"
    },
    {
       "borgId": 103,
       "borgJob": "Assimilations"
    }],

    "tasks": [{
        "taskId": 1,
        "taskTitle": "Connect",
        "borgId": 101
    },
    {
        "taskId": 2,
        "taskTitle": "Neutralize",
        "borgId": 102
    },
    {
        "taskId": 3,
        "taskTitle": "Assimilate",
        "borgId": 103
    }]

};


Object.entries(cyborgs).forEach(([key, value]) => {
 if(key === "borg"){
    console.log(key);
 
    if (Array.isArray(value)){
    value.forEach((item, index) => {
        console.log(`${item.borgId} does ${item.borgJob}`);
      });
    }
  }
});

const drones = Object.entries(cyborgs);

const droneArray = drones.filter(([key, value]) => key === "tasks").map(([key, value]) => value);
//.filter(([key, value]) => Array.isArray(value));

console.log(droneArray);