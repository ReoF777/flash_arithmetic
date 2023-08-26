let ans = 0;


document.getElementById("ansBtn").addEventListener("click", function () {
    console.log("ansBtn clicked");
    const ansBtn = document.getElementById("ansBtn");
    const dispNum = document.getElementById("dispNum");
    const inputNum = document.getElementById("inputNum");

    //inputNum.value = 0;

    var spanedSec = 0;

    var id = setInterval(function () {
        spanedSec++;
        var randNum = Math.floor(Math.random() * 10);

        if (spanedSec > 5) {
            clearInterval(id);
        }

        ans += randNum;

        dispNum.innerHTML = `${randNum}`;
    }, 700);

    dispNum.innerHTML = null;


});