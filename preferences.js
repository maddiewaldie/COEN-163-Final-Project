//Form selection and display
document.addEventListener("DOMContentLoaded", function () {
    const catGIF = document.getElementById("cat");
    const dogGIF = document.getElementById("dog");
    const catForm = document.getElementById("sec2");
    const dogForm = document.getElementById("sec3");

    function getBorderColor(image) {
        return window.getComputedStyle(image).borderColor;}

    function changeBorderColor(image) {
        image.style.border = "5px solid #ffae00";}

    catGIF.addEventListener("click", function () {
        if (getBorderColor(catGIF) === "rgb(255, 174, 0)") {
            catGIF.style.border = "5px solid #794424"; //revert to unselected
            catForm.classList.add("hidden");
        } else {
            changeBorderColor(catGIF);
            catForm.classList.remove("hidden");
        }
    });

    dogGIF.addEventListener("click", function () {
        if (getBorderColor(dogGIF) === "rgb(255, 174, 0)") {
            dogGIF.style.border = "5px solid #794424";//revert to unselected
            dogForm.style.display="none";
        } else {
            changeBorderColor(dogGIF);
            dogForm.style.display="block";
        }
    });
});
