// code your solution here
function saturdayFun (activity = `roller-skate`){
    
    return `This Saturday, I want to ${activity}!`
}
saturdayFun()

function mondayWork (work = `go to the office`){
    return `This Monday, I will ${work}.`
}
mondayWork()

function wrapAdjective(asterisk = "*") {
    // Inner function (wrap) is returned
    return function(adjective = " special") {
        return `You are ${asterisk}${adjective}${asterisk}!`;
    };
}
wrapAdjective ()("a hard worker")
wrapAdjective("||")("a dedicated programmer")
console.log(wrapAdjective()("a hard worker"));
console.log(wrapAdjective("||")("a dedicated programmer"));