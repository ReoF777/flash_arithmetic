document.getElementById("startBtn").addEventListener("click", function () {
    event.preventDefault();
    const level = document.getElementById("level").value;
    const problemCount = document.getElementById("problemCount").value;
    sessionStorage.setItem('level', level);
    sessionStorage.setItem('problemCount', problemCount);
    console.log(problemCount);
    window.location.href = 'main.html';

});