function log(m) {
    console.log(m);
}

function timeNow() {
    return performance.now();
}

function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

function logReplaced(symbol, replacement_str, message) {
    return message.replace(symbol, replacement_str);
}

function displayToggledTime(classname, seconds) {
    switch(classname) {
        case "toggled":
            return logReplaced("%s", seconds, "It took %s seconds to open the side nav");
            break;
        case "":
             return logReplaced("%s", seconds, "It took %s seconds to close the side nav");
            break;
        default:
            return "exit status: classname not valid"
    }

    return "switch didn't execute";
}


