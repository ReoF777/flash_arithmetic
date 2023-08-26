
document.getElementById("ansBtn").addEventListener("click", function () {
    console.log("ansBtn clicked");
    const ansBtn = document.getElementById("ansBtn");
    const dispNum = document.getElementById("dispNum");
    dispNum.insertAdjacentHTML("beforebegin", "1");

    var spanedSec = 0;

    var id = setInterval(function () {
        spanedSec++;

        if (spanedSec > 10) {
            clearInterval(id);
        }

        dispNum.insertAdjacentHTML("beforebegin", "1");
    }, 1000);


});