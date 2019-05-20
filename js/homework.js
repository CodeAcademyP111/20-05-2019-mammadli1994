//tabs

var allLi = document.querySelectorAll("#tabs ul li");
// console.log(allLi)

for (var i = 0; i < allLi.length; i++) {
    allLi[i].addEventListener("click", function() {
        // menu
        var active_menu = document.querySelector(".active_menu");
        // console.log(this);
        this.classList.add("active_menu");
        active_menu.classList.remove("active_menu");

        // console.log(this.classList.item(0))
        var id = this.classList.item(0);
        var active_contain = document.querySelector(".active_contain");
        document.getElementById(id).classList.add("active_contain");
        active_contain.classList.remove("active_contain");
    })
}