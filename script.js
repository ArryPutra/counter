let min = document.getElementById("min");
let plus = document.getElementById("plus");
let number = document.getElementById("number");
let restartButton = document.getElementById("restartButton");

let notice = document.querySelector(".notice");

if (localStorage.getItem("numberIncrement") == null) {
    localStorage.setItem("numberIncrement", 0);
}

counter = localStorage.getItem("numberIncrement");
number.textContent = localStorage.getItem("numberIncrement");

if (counter <= -1) {
    number.style.color = "crimson";
} else if (counter == 0) {
    number.style.color = "#1aa7ec";
}
else {
    number.style.color = "#44D62C";
}

plus.addEventListener("click", function () {
    counter++;
    number.textContent = counter;
    localStorage.setItem("numberIncrement", counter);

    if (counter <= -1) {
        number.style.color = "crimson";
    } else if (counter == 0) {
        number.style.color = "#1aa7ec";
    }
    else {
        number.style.color = "#44D62C";
    }
});
min.addEventListener("click", function () {
    counter--;
    number.textContent = counter;
    localStorage.setItem("numberIncrement", counter);

    if (counter <= -1) {
        number.style.color = "crimson";
    } else if (counter == 0) {
        number.style.color = "#1aa7ec";
    }
    else {
        number.style.color = "#44D62C";
    }
});
//restartButton
restartButton.addEventListener("click", function () {
    notice.style.top = 10 + "vh";
});
iyaButton = function() {
    notice.style.top = -50 + "vh";
    counter = 0;
    localStorage.setItem("numberIncrement", counter);
    number.textContent = localStorage.getItem("numberIncrement");
    number.style.color = "#1aa7ec";
}
tidakButton = function() {
    notice.style.top = -50 + "vh";
}

//stopWatch