let ans = 0;

// スタートボタンを押したら、ランダムな数字を表示するメソッド
document.getElementById("startBtn").addEventListener("click", function () {
    const dispNum = document.getElementById("dispNum");
    const inputNum = document.getElementById("inputNum");
    const level = document.getElementById("level");
    let ans = 0;
    let range = 10;
    let speed = 400;

    if (level.value == "easy") {
        range = 10;
        speed = 400;
    }
    if (level.value == "normal") {
        range = 100;
        speed = 300;
    }
    if (level.value == "hard") {
        range = 1000;
        speed = 200;
    }


    inputNum.value = "";

    let spanedSec = 0;

    const id = setInterval(function () {
        spanedSec++;

        if (spanedSec > 9) {
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
    console.log("ansBtn clicked");
    const inputNum = document.getElementById("inputNum");
    const result = document.getElementById("result");

    if (inputNum.value == ans) {
        result.innerHTML = "Correct!";
    } else {
        result.innerHTML = "Wrong!";
    }
});