let ans = 0;


document.getElementById("startBtn").addEventListener("click", function () {
    console.log("startBtn clicked");
    const dispNum = document.getElementById("dispNum");
    const inputNum = document.getElementById("inputNum");
    ans = 0;

    inputNum.value = "";

    var spanedSec = 0;

    var id = setInterval(function () {
        spanedSec++;
        var randNum = Math.floor(Math.random() * 10);

        if (spanedSec > 5) {
            dispNum.innerHTML = "";
            clearInterval(id);
        }

        ans += randNum;

        dispNum.innerHTML = `${randNum}`;
    }, 700);

    dispNum.innerHTML = "";
});

document.getElementById("ansBtn").addEventListener("click", function () {
    console.log("ansBtn clicked");
    const inputNum = document.getElementById("inputNum");
    const result = document.getElementById("result");

    if (inputNum.value == ans) {
        result.innerHTML = "Correct!";
    } else {
        result.innerHTML = "Wrong!";
    }
});