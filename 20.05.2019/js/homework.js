var titles = document.querySelectorAll(".title");

// console.log(titles)

for (var i = 0; i < titles.length; i++) {
    titles[i].addEventListener("click", function () {

        
    //    console.log(this.nextElementSibling);
    this.classList.toggle("active");
    // console.log(this)
    


    // console.log(content)

    if(this.children[1].className=="fas fa-plus"){

        this.children[1].classList.replace("fa-plus","fa-minus");

    }
    else{
        this.children[1].classList.replace("fa-minus","fa-plus");

    }
  
  

    })
}