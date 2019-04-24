function resizeHeight() {
    var height = getViewPortHeight();

    var changeTel = document.getElementById("changeTel");
    var password = document.getElementById("password")
        // var listr = document.getElementById("listr")

    changeTel.style.height = height - 77 + "px"
    password.style.height = height - 77 + "px"
        // listr.style.height = height - 210 + "px"

    function getViewPortHeight() {
        return document.documentElement.clientHeight || document.body.clientHeight;
    }
}
window.onresize = resizeHeight
window.onload = resizeHeight