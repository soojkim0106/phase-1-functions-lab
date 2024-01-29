// Code your solution in this file!

function distanceFromHqInBlocks(pickUpLocation){
    const Hq = 42;
    return Math.abs(pickUpLocation - Hq);
}

function distanceFromHqInFeet(pickUpLocation){
    return distanceFromHqInBlocks(pickUpLocation) * 264;
}

function distanceTravelledInFeet(start, destination){
    return Math.abs((destination - start) * 264);
}

function calculatesFarePrice(start, destination){
    let feetTravelled = distanceTravelledInFeet(start, destination);

    if(feetTravelled <= 400){
        return 0;
    }
    else if(feetTravelled > 400 && feetTravelled <= 2000){
        return Math.abs(feetTravelled - 400)* .02;
    }
    else if(feetTravelled > 2000 && feetTravelled < 2500){
        return 25;
    }
    else if(feetTravelled > 2500){
        return 'cannot travel that far';
    }
}