document.addEventListener("DOMContentLoaded", function() {
    var header = document.getElementById("#head");

    window.addEventListener("scroll", function() {
        if(this.window.scrollY > 100) {
            header.classList.add("scolled");
        } else {
            header.classList.remove("scolled");
        }
    });
});