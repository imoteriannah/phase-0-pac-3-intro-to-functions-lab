function shout(name) {
    return name.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}

function logShout(string){
    console.log(string.toUpperCase());
}

function logWhisper(string){
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string){
    if(string==string.toLowerCase()){
        return "I can\'t hear you!";
    }
    if(string=="Let's have dinner together!"){
        return "I would love to!";
    }
    if(string==string.toUpperCase()){
        return "YES INDEED!";
    }
}
