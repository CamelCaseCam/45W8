const SecurityLevels = {
    "TESTTEST": "1"
}


function AddSecurityLevel(sourceID, levels) {
    //Get the source element and use it as an index into levels
    var source = document.getElementById(sourceID);
    if (source == null || !(source.value in levels)) {
        console.log(levels)
        console.log(source.value)
        return;
    }
    var level = levels[source.value];

    //Add level as a cookie
    var date = new Date();
    date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
    var expires = "expires=" + date.toUTCString();
    document.cookie = "seclevel_" + level + "=true;" + expires + ";path=/";
    console.log("added security level " + level);
}

function OpenIfSecLevel(level, link)
{
    //Check if the level is set
    var cookie = document.cookie;
    var cookies = cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].split('=');
        if ((cookie[0].trim() == "seclevel_" + level && cookie[1].trim() == "true")) {
            //Set this window with the link
            window.open(link, "_self")
            return;
        }
    }

    //If not, alert
    alert("You do not have the required security level to view this page");
}