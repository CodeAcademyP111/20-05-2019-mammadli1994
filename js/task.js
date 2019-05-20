var allLi = document.querySelectorAll("ul li");
// console.log(allLi);

for (var i = 0; i < allLi.length; i++) {
    allLi[i].addEventListener("click", function() {
        var act = document.querySelector(".active");
        // console.log(act)
        this.classList.add("active");
        act.classList.remove("active");
    })
}