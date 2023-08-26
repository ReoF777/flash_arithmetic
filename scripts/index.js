let ans = 0;

// スタートボタンを押したら、ランダムな数字を表示するメソッド
document.getElementById("startBtn").addEventListener("click", function () {
    console.log("startBtn clicked");
    const dispNum = document.getElementById("dispNum");
    const inputNum = document.getElementById("inputNum");
    let ans = 0;

    inputNum.value = "";

    let spanedSec = 0;

    const id = setInterval(function () {
        spanedSec++;

        if (spanedSec > 5) {
            clearInterval(id);
            dispNum.innerHTML = "終了";
            return;
        }

        const randNum = Math.floor(Math.random() * 10);
        ans += randNum;

        dispNum.innerHTML = `${randNum}`;
    }, 700);
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