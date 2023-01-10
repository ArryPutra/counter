let min = document.getElementById("min");
let plus = document.getElementById("plus");
let number = document.getElementById("number");

counter = 0;
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

// restartButton
let restartBtn = document.getElementById("restartBtn");

restartBtn.addEventListener("click", function() {
    let notice = document.querySelector(".notice");
    notice.style.top = 5 + "vh";

    let tidak = document.getElementById("tidak");
    tidak.onclick = function() {
        notice.style.top = -50 + "vh";
    }

    let iya = document.getElementById("iya");
    iya.onclick = function() {
        localStorage.clear("numberIncrement");
        counter = 0;
        number.textContent = "0";
        number.style.color = "#21D4FD";
        notice.style.top = -50 + "vh";
    }
})

if(localStorage.getItem("numberIncrement") == null) {
    number.textContent = "0";
    number.style.color = "#21D4FD";
}
