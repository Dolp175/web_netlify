document.addEventListener('DOMContentLoaded', (event) => {
    if (!getCookie("cookiesAccepted")) {
        document.getElementById('cookieBanner').style.cssText = "display: flex !important;";
    }
    console.log(document.getElementById('cookieBanner').style.display);
});

function acceptCookies() {
    setCookie("cookiesAccepted", "yes", 365);
    document.getElementById('cookieBanner').style.cssText = "display: none !important;";
    console.log(document.getElementById('cookieBanner').style.display);
}

function declineCookies() {
    setCookie("cookiesAccepted", "no", 365);
    document.getElementById('cookieBanner').style.cssText = "display: none !important;";
    console.log(document.getElementById('cookieBanner').style.display);
}

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}