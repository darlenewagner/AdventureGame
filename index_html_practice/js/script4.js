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
        "taskTitle": "Stun",
        "borgId": 102
    },
    {
        "taskId": 3,
        "taskTitle": "Vaporize",
        "borgId": 102
    },
    {
        "taskId": 4,
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

// const droneArray = drones.filter(([key, value]) => key === "tasks").map(([key, value]) => value);
const droneArray = drones.filter(([key, value]) => key === "tasks").forEach(([key, value]) => {
  if (Array.isArray(value)){
    value.forEach((item, index) => {
      if(item.borgId === 102) {
        console.log(item.taskTitle);
      }
    });
  }
});

const droneArray1 = drones.filter(([key, value]) => key === "borg").map(([key, value]) => {
  return {...value};
});

console.log(droneArray);

console.log(droneArray1);
