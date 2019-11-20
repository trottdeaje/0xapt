// page loads
// call function to check for cookie
// check for cookie function returns true or false
// if you have the cookie $("#splashscreen").removeClass("preload")
// if you dont have the cookie  $("#splashscreen").addClass("preload")

// if function checkCookie is true remove class preload and empty splashscreen id, div. else create a cookie
if (checkCookie()) {
    $("#splashscreen").removeClass("preload")
    $("#splashscreen").empty()
} else {
    $("#splashscreen").addClass("preload")
    setCookie("splash", "screen", 1)

}

// document.cookie = "splash_user=yes"
// let cookieValue = document.cookie
// console.log(cookieValue)

// showSplash = () => {

//     if (cookieValue)
// }

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var splash = getCookie("splash");
    if (splash !== "") {
        return true
    } else {
        return false
    }
}