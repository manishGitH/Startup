document.addEventListener("DOMContentLoaded", function() {
    let n = document.getElementById("navbarTogglerDemo02");
    document.getElementsByClassName("navbar-toggler")[0].onclick = function() {
        this.classList.contains("collapsed") ? (n.classList.remove("collapse"),
        this.classList.remove("collapsed")) : (n.classList.add("collapse"),
        this.classList.add("collapsed"))
    }
});