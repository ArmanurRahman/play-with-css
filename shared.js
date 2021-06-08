var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var selectedPlanButtons = document.querySelectorAll(".plan button");
var modalCancelButton = document.querySelector(".modal button");

selectedPlanButtons.forEach((item) => {
    item.addEventListener("click", () => {
        backdrop.style.display = "block";
        modal.style.display = "block";
    });
});

modalCancelButton.addEventListener("click", () => {
    backdrop.style.display = "none";
    modal.style.display = "none";
});

backdrop.addEventListener("click", () => {
    backdrop.style.display = "none";
    modal.style.display = "none";
});
