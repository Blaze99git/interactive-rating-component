const numbers = document.querySelectorAll(".number")
const ratingCard = document.querySelector(".rating-card")
const thankyouCard = document.querySelector(".thankyou-card")
const selectedNum = document.querySelector("#selected-num")


numbers.forEach(rate => {
    rate.addEventListener("click", (e) => {
        selectedNum.innerHTML = rate.innerText
    })
});

document.querySelector("#submit").addEventListener("click", (e) => {
    if (selectedNum.innerHTML !== "") {
        ratingCard.classList.add("hidden")
        thankyouCard.classList.remove("hidden")
    }
})
