/* ● Border:
● red value
● green value
● blue value
● width
● Background color:
● red value
● green value
● blue value */

function applyColors() {
    let bRed = getBorderRed();
    let bGreen = getBorderGreen();
    let bBlue = getBorderBlue();
    let bWidth = getBorderWidth();
    let bgRed = getBackgroundRed();
    let bgGreen = getBackgroundGreen();
    let bgBlue = getBackgroundBlue();

    document.getElementById("paragraph").style.border = bWidth + "px solid";
    document.getElementById("paragraph").style.borderColor = 'rgb(' + bRed + ',' + bGreen + ',' + bBlue + ')';
    document.getElementById("paragraph").style.backgroundColor = 'rgb(' + bgRed + ',' + bgGreen + ',' + bgBlue + ')';
}

function getBorderRed() {
    let r = document.getElementById("bRedValue").value;
    r = parseInt(r);
    if (!isNaN(r)) {
        if (r >= 0 && r <= 255) {
            return r;
        } else {
            alert("Please put in a number value between 0-255 for Border Red! Defaulting to 0.")
        }
    } else {
        alert("Please put in a number value for Border Red Value! Defaulting to 0.");
    }
    return 0;
}

function getBorderGreen() {
    let g = document.getElementById("bGreenValue").value;
    g = parseInt(g);
    if (!isNaN(g)) {
        if (g >= 0 && g <= 255) {
            return g;
        } else {
            alert("Please put in a number value between 0-255 for Border Green! Defaulting to 0.")
        }
    } else {
        alert("Please put in a number value for Border Green Value! Defaulting to 0.");
    }
    return 0;
}

function getBorderBlue() {
    let b = document.getElementById("bBlueValue").value;
    b = parseInt(b);
    if (!isNaN(b)) {
        if (b >= 0 && b <= 255) {
            return b;
        } else {
            alert("Please put in a number value between 0-255 for Border Blue! Defaulting to 0.")
        }
    } else {
        alert("Please put in a number value for Border Blue Value! Defaulting to 0.");
    }
    return 0;
}

function getBorderWidth() {
    let w = document.getElementById("bWidthValue").value;
    w = parseInt(w);
    if (w) {
        if (w >= 1 && w <= 25) {
            return w;
        } else {
            alert("Please put in a number value between 1-25 for Border Width! Defaulting to 1.")
        }
    } else {
        alert("Please put in a number value for Border Width Value! Defaulting to 1.");
    }
    return 1;
}

function getBackgroundRed() {
    let r = document.getElementById("bgRedValue").value;
    r = parseInt(r);
    if (!isNaN(r)) {
        if (r >= 0 && r <= 255) {
            return r;
        } else {
            alert("Please put in a number value between 0-255 for Background Red! Defaulting to 0.")
        }
    } else {
        alert("Please put in a number value for Background Red Value! Defaulting to 0.");
    }
    return 0;
}

function getBackgroundGreen() {
    let g = document.getElementById("bgGreenValue").value;
    g = parseInt(g);
    if (!isNaN(g)) {
        if (g >= 0 && g <= 255) {
            return g;
        } else {
            alert("Please put in a number value between 0-255 for Background Green! Defaulting to 0.")
        }
    } else {
        alert("Please put in a number value for Background Green Value! Defaulting to 0.");
    }
    return 0;
}

function getBackgroundBlue() {
    let b = document.getElementById("bgBlueValue").value;
    b = parseInt(b);
    if (!isNaN(b)) {
        if (b >= 0 && b <= 255) {
            return b;
        } else {
            alert("Please put in a number value between 0-255 for Border Blue! Defaulting to 0.")
        }
    } else {
        alert("Please put in a number value for Border Blue Value! Defaulting to 0.");
    }
    return 0;
}