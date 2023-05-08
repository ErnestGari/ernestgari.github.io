const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');    
        } else {
            entry.target.classList.remove('show');
        }

    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

var cursor = document.getElementById("cursor");
document.body.addEventListener("mousemove", function(e) {
  cursor.style.left = e.clientX + "px",
    cursor.style.top = e.clientY + "px";
});

function lightMode() {
    var element = document.body;
    element.classList.toggle("light-mode");
    element.classList.toggle("light");
}

if (history.back == element.classList("light-mode")){
    var element = document.body;
    element.classList.toggle("light-mode");
    element.classList.toggle("light");
}
