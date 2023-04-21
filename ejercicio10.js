function showStaircase(number){
    let staircaseComplete = "";

    for(let level = 1;  level <= number; level++){

        let staircase = "";

        for(let steps = 1; steps <= level; steps++){
            staircase += "[-]";
        }
        staircaseComplete += staircase + "\n";
        //console.log("Level: ", level, staircase);
    
    }
    return staircaseComplete;
    
}
console.log(
    showStaircase(10)
);


