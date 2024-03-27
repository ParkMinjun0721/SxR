document.getElementById('true').addEventListener('click', function() {
    displayResult(true);
});

document.getElementById('false').addEventListener('click', function() {
    displayResult(false);
});

function displayResult(answer) {
    let resultText = answer ? "정답입니다!" : "틀렸습니다.";
    document.getElementById('result').textContent = resultText;
}
