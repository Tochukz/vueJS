const canDrive = (age) => new Promise((resolve, reject) => {
     if(age > 18){
       resolve({result: "Can drive"})
     } else {
       reject({error: "Under age"})
     }
});

canDrive(16).then(data => console.log(data.result))
            .catch(err => console.error(err.error));

canDrive(14).then(data => console.log(data.result))
            .fail(err => consoole.error(err.error));
