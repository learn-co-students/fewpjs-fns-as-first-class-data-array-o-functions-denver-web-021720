function wakeDog(dogName, dogBreed) {
    let wakeUp = `Wake ${dogName} the ${dogBreed}`;
    console.log(wakeUp);
    return wakeUp;
}

function leashDog(dogName, dogBreed) {
    let leash = `Leash ${dogName} the ${dogBreed}`;
    console.log(leash);
    return leash;
}

function walkToPark(dogName, dogBreed) {
    let thing = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(thing);
    return thing;
}

function throwFrisbee(dogName, dogBreed) {
    let thing = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(thing);
    return thing;
}

function walkHome(dogName, dogBreed) {
    let thing = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(thing);
    return thing;
}

function unleashDog(dogName, dogBreed) {
    let thing = `Unleash ${dogName} the ${dogBreed}`;
    console.log(thing);
    return thing;
}

const routine = [wakeDog, leashDog, walkToPark,
           throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
    let finishedRout = [];
    for (let i = 0; i < routine.length; i++) {
        finishedRout.push(routine[i](dogName, dogBreed));
    }
    return finishedRout;
}