function setCookie(name, value) {
    const d = new Date();
    d.setTime(d.getTime() + 2,592,000,000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";path=/";
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}