document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.querySelector(".start-button");
    const questionDiv = document.querySelector(".quiz-question");
    const questionText = document.getElementById("question-text");
    const trueButton = document.getElementById("true");
    const falseButton = document.getElementById("false");
    const resultMessage = document.getElementById("result-message");
    const nextButton = document.querySelector(".next-question");
    // const previousButton = document.querySelector(".previous-question");
    const finalResult = document.getElementById("final-result");
    const resultsDiv = document.querySelector(".quiz-results");
    const explanation = document.getElementById("explanation"); // 해설 요소
    const introElements = document.querySelector(".quiz-header"); // 헤더 요소 선택
    const risingText = document.querySelector(".rising-text"); // 라이징 텍스트 요소 선택
    const subHeader = document.querySelector(".sub-header");
    const learnMoreButton = document.getElementById('learn-more-button');
    const viewResultsButton = document.querySelector('.view-results');
    const quoteElement = document.querySelector(".quote");
    const socialLinks = document.querySelector(".social-media-links");

    const questions = [
        { question: "1. 유니버설 디자인이란 장애를 가진 이용자를 위해 문제 해결을 도모하는 디자인이다?", answer: "X", explanation: "유니버설 디자인은 '모든사람을 위한 디자인' 혹은 '보편적 디자인'으로 불리며, 연령, 성별, 국적, 장애의 유무 등과 관계없이 누구나 편안하게 이용할 수 있도록 건축, 환경,  서비스 등을 계획하고 설계하는 디자인이다." },
        { question: "2. 베리어 프리란 장애인 등의 일상 생활에서 부딪히는 장애물을 없애기 위해 특별한 디자인을 내놓는 것이다.", answer: "O", explanation: "베리어 프리란 고령자나 장애인들이 겪고 있는 물리적, 제도적 장벽을 허물자라는 뜻이다." },
        { question: "3. 유니버설 디자인 원칙에는 동등한 사용, 사용상의 유연성, 단순하고 직관적인 이용법, 정보이용의 용이, 오류에 대한 포용력, 최소의 물리적 노력, 접근과 사용을 위한 충분한 공간의 7원칙이 있다.", answer: "O", explanation: "동등한 사용, 사용상의 유연성, 단순하고 직관적인 이용법, 정보이용의 용이, 오류에 대한 포용력, 최소의 물리적 노력, 접근과 사용을 위한 충분한 공간, 모두 유니버설 디자인 원칙이다." },
        { question: "4. 학관에 위치한 무인결제 시스템은 유니버설 디자인이다.", answer: "X", explanation: "무인 결제 기계의 높이가 높아 휠체어를 이용하거나 키가 작은 사람, 어린이 등은 이용하기가 어렵다. 더불어 음성 안내가 없기에 시각장애인을 경험하는 사람의 경우 이용함에 어려움이 있다." },
        { question: "5. 돌리는 손잡이와 내리는 손잡이 중 유니버설 디자인은 내리는 손잡이이다.", answer: "O", explanation: "돌리는 손잡이는 손으로 문고리를 잡고 힘을 줘서 돌려야합니다. 상대적으로 힘이 약한 노약자와 어린이에게는 내리는 손잡이가 더 편리하다." },
        { question: "6. 시각장애를 경험하는 사람은 오석관 계단을 이용하여 몇 층 인지 정확하게 확인하고 이동할 수 있다.", answer: "X", explanation: "계단 손잡이에 점자로 된 층별 안내지가 부착되어 있지 않다. 따라서 점자 안내지를 부착할 필요가 있다.",  },
        { question: "7. 교내 보도블록은 휠체어 사용자가 이동함에 어려움이 없다.", answer: "X", explanation: "올라가는 길에는 경사로가 없고 턱이 있다. 따라서 휠체어 사용자에게 무리가 될 수 있으므로 경사로를 만들 필요가 있어 보인다." },
        { question: "8. 해당 건물의 출입구는 경사로가 만들어져 있어 휠체어 사용자가 쉽게 이용할 수 있다.", answer: "X", explanation: "경사로가 만들어져 있지만, 꺾어지는 부분의 폭이 좁은 편이라 휠체어 사용자가 불편을 겪을 수 있다." },
        { question: "9. 휠체어를 탄 사람은 효암채플의 입구를 통해 쉽게 들어갈 수 있다.", answer: "X", explanation: "이 통로에는 나무로 만들어진 문턱이 있어서 휠체어를 이용하는 사람들의 이동권을 방해하고 있다. 실례로 '사랑의 마라톤' 행사 때, 휠체어를 이용하는 장애인이 이 문으로 이동할 때 주변 사람들의 도움을 받아 한 바퀴씩 들어 이동한 사례가 있었다." },
        { question: "10. 학관에 위치한 무인 결제 시스템은 높이가 높아 휠체어를 이용하는 사람, 키가 작은 사람, 어린이 등이 쉽게 이용하기 어렵다.", answer: "O", explanation: "무인 결제 기계의 터치하는 부근의 디자인을 낮은 곳에서도 이용이 가능 할 수 있게 바꾸어야 할 필요가 있으며, 점자와 음성 안내로 누구나 식당을 편리하게 이용할 수 있도록 할 필요가 있다." },
        // 추가 문제들을 이 배열에 넣으세요.
    ];
    let currentQuestionIndex = 0;
    let correctCount = 0; // 정답을 맞춘 횟수를 저장하는 변수

    startButton.addEventListener("click", function() {
        startButton.style.display = "none";
        introElements.style.display = "none"; // 헤더 숨기기
        risingText.style.display = "none"; // 라이징 텍스트 숨기기
        subHeader.style.display = "none";
        quoteElement.style.display = 'none';
        socialLinks.style.display = 'none';
        showQuestion(currentQuestionIndex);
    });

    trueButton.addEventListener("click", function() {
        checkAnswer("O");
    });

    falseButton.addEventListener("click", function() {
        checkAnswer("X");
    });

    nextButton.addEventListener("click", function() {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            explanation.style.display = "none"; // 해설 숨기기 추가
            showQuestion(currentQuestionIndex);
        } else {
            nextButton.style.display = "none"; // 다음 문제 버튼 숨기기
            viewResultsButton.style.display = "block"; // 결과 보기 버튼 표시
        }
    });

    viewResultsButton.addEventListener('click', function() {
        finishQuiz();
    });

    // previousButton.addEventListener("click", function() {
    //     if (currentQuestionIndex > 0) {
    //         currentQuestionIndex--;
    //         showQuestion(currentQuestionIndex);
    //         correctCount--;
    //     }
    // });

    learnMoreButton.addEventListener('click', function() {
        event.preventDefault();
        window.location.href = 'https://seesunrising.imweb.me/'; // 원하는 URL로 변경
    });

    function showQuestion(index) {
        questionDiv.style.display = "block";
        questionText.textContent = questions[index].question;
        // explanations.style.display = "none";
        explanation.textContent = questions[index].explanation;
        resultMessage.style.display = "none";
        // previousButton.style.display = index > 0 ? "block" : "none";
        nextButton.style.display = "none";
        
        

        document.querySelectorAll("#question-images img").forEach(img => {
            img.style.display = "none";
        });

        // 현재 질문에 해당하는 이미지를 표시합니다.
        const imageId = `image${index+1}`; // 이미지 ID는 문제 번호에 따라 결정됩니다. 예시에서는 6번째 문제부터 이미지가 시작됨을 가정합니다.
        const currentImage = document.getElementById(imageId);
        if (currentImage) {
            currentImage.style.display = "block";
        }

        trueButton.style.display = "block";
        falseButton.style.display = "block";

        // 문제 번호가 6 이상일 때 #content-div에 특정 스타일 적용
    const contentDiv = document.getElementById("content-div");
    if (index >= 5) { // 6번째 문제부터 index는 5부터 시작
        contentDiv.style.position = 'absolute';
        contentDiv.style.top = '300px';
        contentDiv.style.width = '320px';
        contentDiv.style.flex = '1 1 auto';
        contentDiv.style.display = 'flex';
        contentDiv.style.flexDirection = 'column';
        contentDiv.style.alignItems = 'center';
        contentDiv.style.justifyContent = 'end';
        contentDiv.style.height = '35%';
    } else {
        // 다른 문제에서는 기본 스타일 적용
        contentDiv.style.position = 'absolute';
        contentDiv.style.top = '60px';
        contentDiv.style.width = '320px';
        contentDiv.style.flex = '1 1 auto';
        contentDiv.style.display = 'flex';
        contentDiv.style.flexDirection = 'column';
        contentDiv.style.alignItems = 'center';
        contentDiv.style.justifyContent = 'center';
        contentDiv.style.height = '80%';
    }

        // if (index < questions.length - 1) {
        //     nextButton.style.display = "block"; // 다음 문제로 넘어갈 수 있게 다음 버튼 표시
        // } else {
        //     viewResultsButton.style.display = "block"; // 마지막 문제에서는 결과 보기 버튼 표시
        // }
        
        
    }
    function checkAnswer(answer) {
        const correct = questions[currentQuestionIndex].answer === answer;
        const bigResult = document.getElementById("big-result");
        
        if (correct) {
            bigResult.textContent = "O"; // 정답일 때
            bigResult.style.color = "green"; // 정답인 경우 녹색으로 표시
            resultMessage.textContent = "정답입니다!";
        resultMessage.style.backgroundColor = "rgba(49, 130, 206, 0.8)";
            correctCount++; // 정답 수 증가
        } else {
            bigResult.textContent = "X"; // 오답일 때
            bigResult.style.color = "red"; // 오답인 경우 빨간색으로 표시
            resultMessage.textContent = "오답입니다!";
            resultMessage.style.backgroundColor = "rgba(229, 62, 62, 0.8)";
        }
    
        bigResult.style.display = "block"; // 결과 표시
        setTimeout(function() { // 몇 초 후에 결과 숨기기
            bigResult.style.display = "none";
        }, 2000); // 2초 후에 결과를 숨깁니다.
    
        // resultMessage.textContent = correct ? "정답입니다!" : "오답입니다!";
        explanation.textContent = questions[currentQuestionIndex].explanation;
        resultMessage.style.display = "block";
        explanation.style.display = "block";

        trueButton.style.display = "none";
        falseButton.style.display = "none";

        if (currentQuestionIndex < questions.length - 1) {
            nextButton.style.display = "block"; // 다음 문제로 넘어갈 수 있게 다음 버튼 표시
        } else {
            viewResultsButton.style.display = "block"; // 마지막 문제에서는 결과 보기 버튼 표시
        }
    }

    function finishQuiz() {
        questionDiv.style.display = "none";
        resultsDiv.style.display = "block";
        finalResult.textContent = `퀴즈가 끝났습니다. 총 맞춘 문제 수: ${correctCount}개`;
        resultMessage.style.display = "none";
        viewResultsButton.style.display = "none"; // 결과 보기 버튼 숨기기
    }
    
});
