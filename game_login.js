function updateScore()
{
    score = score + 1;
    document.getElementById("score").innerHTML="Score: "+score;
}
function saveScore()
{
    localStorage.setItem("score", score);
}
function nextPage()
{
    window.location ="activity_2.html";
}
function add_user()
{
    number1 = document.getElementById("number1").value;
    numder2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(numder2);
}