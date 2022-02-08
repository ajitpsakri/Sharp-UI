const clickForPrimary = document.querySelector(".click-primary");
const toastPrimary = document.querySelector(".toast-primary");
const toastAll = document.querySelectorAll(".toast");
const btnAll = document.querySelectorAll(".btn");

const clearAllToast = () => {
    toastAll.forEach(ele => {
        ele.style.display = "none"
    })
}
clearAllToast();
btnAll.forEach(btn => {
    btn.addEventListener("click", function () {
        clearAllToast();
        [...toastAll].map(toast => {
            toast.classList.forEach(className => {
                if (className == btn.value) {
                    toast.style.display = "block"
                    setTimeout(() => toast.style.display = "none", 1000)
                }
            })
        })
    })
})
