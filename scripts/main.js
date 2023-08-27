const level = sessionStorage.getItem('level');
const problemCount = sessionStorage.getItem('problemCount');

let ans = 0;

// スタートボタンを押したら、ランダムな数字を表示するメソッド
document.getElementById("startBtn").addEventListener("click", function () {
    const dispNum = document.getElementById("dispNum");
    const inputNum = document.getElementById("inputNum");
    const result = document.getElementById("result");
    dispNum.innerHTML = "";
    result.innerHTML = "";
    ans = 0;
    let range = 10;
    let speed = 400;
    if (level == "easy") {
        range = 10;
        speed = 500;
    }
    if (level == "normal") {
        range = 100;
        speed = 300;
    }
    if (level == "hard") {
        range = 1000;
        speed = 200;
    }


    inputNum.value = "";

    let spanedSec = 0;

    const id = setInterval(function () {
        spanedSec++;

        if (spanedSec > problemCount) {
            clearInterval(id);
            dispNum.innerHTML = "";
            return;
        }

        const randNum = Math.floor(Math.random() * range);
        ans += randNum;

        dispNum.innerHTML = `${randNum}`;
    }, speed);
});

// 答え合わせボタンを押したら、入力された数字と答えを比較するメソッド
document.getElementById("ansBtn").addEventListener("click", function () {
    const inputNum = document.getElementById("inputNum");
    const result = document.getElementById("result");

    if (inputNum.value == ans && ans > 0) {
        result.innerHTML = "Correct!";
    } else {
        result.innerHTML = "Wrong!";
    }

    console.log("Ans is " + ans);
});

document.getElementById("finishBtn").addEventListener("click", function () {
    event.preventDefault();
    window.location.href = 'start.html';
});