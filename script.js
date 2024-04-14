document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.querySelector(".start-button");
    const questionDiv = document.querySelector(".quiz-question");
    const questionText = document.getElementById("question-text");
    const trueButton = document.getElementById("true");
    const falseButton = document.getElementById("false");
    const resultMessage = document.getElementById("result-message");
    const nextButton = document.querySelector(".next-question");
    const previousButton = document.querySelector(".previous-question");
    const finalResult = document.getElementById("final-result");
    const resultsDiv = document.querySelector(".quiz-results");
    const explanation = document.getElementById("explanation"); // 해설 요소

    const questions = [
        { question: "지구는 평평하다: O/X?", answer: "X", explanation: "지구는 평평하지 않고 구형입니다." },
        { question: "지구는 평평하다: O/X?", answer: "X", explanation: "지구는 평평하지 않고 구형입니다." },
        { question: "지구는 평평하다: O/X?", answer: "X", explanation: "지구는 평평하지 않고 구형입니다." },
        { question: "지구는 평평하다: O/X?", answer: "X", explanation: "지구는 평평하지 않고 구형입니다." },
        // 추가 문제들을 이 배열에 넣으세요.
    ];
    let currentQuestionIndex = 0;
    let correctCount = 0; // 정답을 맞춘 횟수를 저장하는 변수

    startButton.addEventListener("click", function() {
        startButton.style.display = "none";
        showQuestion(currentQuestionIndex);
    });

    trueButton.addEventListener("click", function() {
        checkAnswer("O");
    });

    falseButton.addEventListener("click", function() {
        checkAnswer("X");
    });

    nextButton.addEventListener("click", function() {
        explanation.style.display = "none"; // 해설 숨기기
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            showQuestion(currentQuestionIndex);
        } else {
            finishQuiz();
        }
    });

    previousButton.addEventListener("click", function() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            showQuestion(currentQuestionIndex);
            correctCount--;
        }
    });

    function showQuestion(index) {
        questionDiv.style.display = "block";
        questionText.textContent = questions[index].question;
        trueButton.style.display = "block";
        falseButton.style.display = "block";
        nextButton.style.display = "none";
        resultMessage.style.display = "none";
        previousButton.style.display = index > 0 ? "block" : "none";
    }

    function checkAnswer(answer) {
        const correct = questions[currentQuestionIndex].answer === answer;
        if (correct) {
            correctCount++; // 정답 수 증가
        }
        resultMessage.textContent = correct ? "정답입니다!" : "오답입니다!";
        explanation.textContent = questions[currentQuestionIndex].explanation;
        resultMessage.style.display = "block";
        explanation.style.display = "block"; // 해설 표시
        nextButton.style.display = "block";
        trueButton.style.display = "none";
        falseButton.style.display = "none";
    }

    function finishQuiz() {
        questionDiv.style.display = "none";
        resultsDiv.style.display = "block";
        finalResult.textContent = `퀴즈가 끝났습니다. 총 맞춘 문제 수: ${correctCount}개`;
        // document.querySelector('.start-button').style.display = "block";
        resultMessage.style.display = "none";
    }
});
