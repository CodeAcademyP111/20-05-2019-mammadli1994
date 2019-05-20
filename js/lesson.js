// var ul = document.querySelector("#ul");

// console.log(ul.parentNode.parentNode.parentNode.parentNode.parentNode)
// console.log(ul.children[0])
// console.log(ul.children[0].previousElementSibling)

// for (var i = 0; i < ul.childElementCount; i++) {
//     ul.children[i].addEventListener("click", function() {
//         if (this.children[1].classList.contains("fa-times")) {
//             this.children[1].classList.replace("fa-times", "fa-check");
//         } else {
//             this.children[1].classList.replace("fa-check", "fa-times");
//         }
//     })
// }

// slider

var slider = document.querySelector("#slider");
var right = document.querySelector(".right");
var left = document.querySelector(".left");

right.addEventListener("click", function() {
    // console.log(slider.children[0])
    var active = document.querySelector(".active");
    if (active.nextElementSibling != null) {
        active.nextElementSibling.classList.add("active");
        active.classList.remove("active");
    } else {
        slider.children[0].children[0].classList.add("active");
        active.classList.remove("active");
    }

})

left.addEventListener("click", function() {
    // console.log(slider.children[0])
    var active = document.querySelector(".active");
    if (active.previousElementSibling != null) {
        active.previousElementSibling.classList.add("active");
        active.classList.remove("active");
    } else {
        var count = slider.children[0].childElementCount;
        slider.children[0].children[count - 1].classList.add("active");
        active.classList.remove("active");
    }

})