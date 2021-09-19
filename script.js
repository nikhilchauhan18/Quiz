    const data = [{
            question: "What is the most used programming language in 2019?",
            a: "Java",
            b: "C",
            c: "Python",
            d: "JavaScript",
            correct: "d",
        },
        {
            question: "Whats so great about XML?",
            a: "Easy data exchange",
            b: "High speed on network",
            c: "Nothing",
            d: "Both A & B",
            correct: "d",
        },
        {
            question: "What does HTML stand for?",
            a: "Hypertext Markup Language",
            b: "Cascading Style Sheet",
            c: "Jason Object Notation",
            d: "Helicopters Terminals Motorboats Lamborginis",
            correct: "a",
        },
        {
            question: "What year was JavaScript launched?",
            a: "1996",
            b: "1995",
            c: "1994",
            d: "none of the above",
            correct: "b",
        },
    ];

    const a = document.getElementById("atext");
    const b = document.getElementById("btext");
    const c = document.getElementById("ctext");
    const d = document.getElementById("dtext");
    const question = document.getElementById("question");
    const submit = document.getElementById("submit");

    let curques = 0;
    let score = 0;

    const ans = document.querySelectorAll(".answer");

    function loadquiz() {
        const current = data[curques];

        question.innerText = current.question;
        atext.innerText = current.a;
        btext.innerText = current.b;
        ctext.innerText = current.c;
        dtext.innerText = current.d;
    }

    loadquiz();

    function getSelected() {
        let inputans = undefined;
        ans.forEach((i) => {
            if (i.checked) {
                inputans = i.id;
                i.checked = false;
            }
        });

        return inputans;
    }

    submit.addEventListener("click", () => {
        const answer = getSelected();
        console.log(answer);
        if (answer) {
            if (answer === data[curques].correct) {
                score++;
                console.log(score);
            }

            curques++;

            if (curques < data.length) {
                loadquiz();
            } else {
                document.querySelector(".quiz").innerHTML = `<h2>You Score is ${score}/${data.length}.</h2>
                <button onclick="location.reload()">Reload</button>
            `;
            }
        } else {
            alert('Please choose an answer');
        }

    });