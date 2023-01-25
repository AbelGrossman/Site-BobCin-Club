
function switchToImage(id) {
    document.getElementById("imgtext").style.display="none";
    if (document.getElementById(id).style.display=="none"){
        document.getElementById("imgtext").style.display="block";
        document.getElementById(id).style.display="block";
    }
}
