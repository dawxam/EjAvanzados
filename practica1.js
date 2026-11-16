function getCookie(nombre) {
    const name = nombre + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
    }
    return null;
}

function setCookie(nombre, valor, dias) {
    const d = new Date();
    d.setTime(d.getTime() + (dias * 24 * 60 * 60 * 1000));
    document.cookie = nombre + "=" + valor + ";expires=" + d.toUTCString() + ";path=/";
}

function borrarCookie(nombre) {
    document.cookie = nombre + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
}

let visitas = parseInt(getCookie("visitas")) || 0;
visitas++;

if (visitas > 10) {
    visitas = 0;
    borrarCookie("visitas");
} else {
    setCookie("visitas", visitas, 30);
}

document.getElementById("contador").textContent = visitas;