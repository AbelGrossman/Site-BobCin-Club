
function switchToImage(id) {
    document.getElementById("imgtext").style.display="none";
    if (document.getElementById(id).className != "visible") {
        document.getElementById("imgtext").style.display="block";
        document.getElementById(id).className = "visible";
    }
}
