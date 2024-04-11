let form = document.querySelector("#form");
let allInput = document.querySelectorAll("input");
let selectInput = document.querySelector("select");
let allTooltip = document.querySelectorAll(".display-none");
let resultDiv = document.querySelector(".result-div")

form.onsubmit = (e) => {
    e.preventDefault()
    let annualIncome = allInput[0].value;
    let extraIncome = allInput[1].value;
    let ageGroup = selectInput.value;
    let deduction = allInput[2].value
    // console.log(annualIncome, extraIncome, ageGroup, deduction)

    let resultAnnulaIncome = /^[0-9]*$/.test(annualIncome);
    let resultextraIncome = /^[0-9]*$/.test(extraIncome);
    let resuldeduction = /^[0-9]*$/.test(deduction);

    if (resultAnnulaIncome == false) {
        console.log(allTooltip)
        allTooltip[0].classList.remove("display-none")
    } else if (resultextraIncome == false) {
        allTooltip[1].classList.remove("display-none")
    } else if (resuldeduction == false) {
        allTooltip[2].classList.remove("display-none")
    }

    if (resultAnnulaIncome == true) {
        allTooltip[0].classList.add("display-none")
    } else if (resultextraIncome == true) {
        allTooltip[1].classList.add("display-none")
    } else if (resuldeduction == true) {
        allTooltip[2].classList.add("display-none")
    }

    for (let i = 0; i < allInput.length; i++) {
        if (allInput[i].value == "") {
            alert("please fill all field")
            return
        }
    }

    if (resultAnnulaIncome == true && resultextraIncome == true && resuldeduction == true) {
        let overAllIncome = Number(annualIncome) + Number(extraIncome) - Number(deduction)
        let resultIncome = document.querySelector(".result-income");
        resultDiv.classList.remove("close-div")

        if (overAllIncome > 800000) {
            if (ageGroup == 1) {
                resultIncome.innerHTML = overAllIncome - (overAllIncome - 800000) * .3
            } else if (ageGroup == 2) {
                resultIncome.innerHTML = overAllIncome - (overAllIncome - 800000) * .4
            } else if (ageGroup == 3) {
                resultIncome.innerHTML = overAllIncome - (overAllIncome - 800000) * .1
            }
        } else {
            resultIncome.innerHTML = overAllIncome
        }
    }


}
let closeBtn = document.querySelector(".btn-close");

closeBtn.onclick = () => {
    resultDiv.classList.add("close-div")
}