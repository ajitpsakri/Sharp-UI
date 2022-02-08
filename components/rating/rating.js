const gold = "#FFD700";
const black = "#000000";
const starsAll = document.querySelectorAll('.rating-star')
let rating = 0;
const applyColorToGivenElement = (ele, color) => {
    ele.style.color = color;
}
const applyGoldToIcon = (iconEle) => {
    iconEle.classList.replace("far", "fas");
    applyColorToGivenElement(iconEle, gold);
}
const resetIcon = (iconEle) => {
    iconEle.classList.replace("fas", "far");
    applyColorToGivenElement(iconEle, black);
}
const resetAll = () => {
    starsAll.forEach(star => {
        resetIcon(star)
    })
}

starsAll.forEach((star, index) => {
    star.addEventListener('click', function () {
        resetAll();
        rating = index + 1; //you can use this to display rating 
        debugger
        for (let i = 0; i <= index; i++) {
            applyGoldToIcon(starsAll[i]);
        }
    })
    star.addEventListener('dblclick', function () {
        resetAll();
    })
})
