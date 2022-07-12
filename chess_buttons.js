function createMatch() {
    document.getElementById("background").removeAttribute("hidden");
    document.getElementById("prompt").removeAttribute("hidden");
}
function cancelMatch() {
    document.getElementById("background").setAttribute("hidden", true);
    document.getElementById("prompt").setAttribute("hidden", true);
}

function side(color1, color2) {
    var val = document.getElementById(color1).getAttribute("selected-side")
    if (!val)
        document.getElementById(color1).setAttribute("selected-side", true);
    else
        document.getElementById(color1).removeAttribute("selected-side");

    if (document.getElementById(color2).getAttribute("selected-side"))
        document.getElementById(color2).removeAttribute("selected-side");
}
