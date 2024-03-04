//Form selection and display
document.addEventListener("DOMContentLoaded", function () {
    const catGIF = document.getElementById("cat");
    const dogGIF = document.getElementById("dog");
    const catForm = document.getElementById("sec2");
    const dogForm = document.getElementById("sec3");

    function getBorderColor(image) {
        return window.getComputedStyle(image).borderColor;}

    function changeBorderColor(image) {
        image.style.border = "5px solid #a3c3aa";}

    catGIF.addEventListener("click", function () {
        if (getBorderColor(catGIF) === "rgb(163, 195, 170)") {
            catGIF.style.border = "5px solid #d18585"; //revert to unselected
            catForm.classList.add("hidden");
        } else {
            changeBorderColor(catGIF);
            catForm.classList.remove("hidden");
        }
    });

    dogGIF.addEventListener("click", function () {
        if (getBorderColor(dogGIF) === "rgb(163, 195, 170)") {
            dogGIF.style.border = "5px solid #d18585";//revert to unselected
            dogForm.style.display="none";
        } else {
            changeBorderColor(dogGIF);
            dogForm.style.display="block";
        }
    });
});
