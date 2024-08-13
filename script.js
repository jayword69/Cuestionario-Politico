const questions = [    {
        text: "¿Qué tan de acuerdo estás con la idea de que el Estado debe intervenir en la economía para reducir las desigualdades?",
        options: [
            { label: "Totalmente en desacuerdo", comunismo: 1, socialismo: 2, liberalismo: 1, conservadurismo: 2 },
            { label: "En desacuerdo", comunismo: 2, socialismo: 3, liberalismo: 2, conservadurismo: 3 },
            { label: "Neutral", comunismo: 3, socialismo: 3, liberalismo: 3, conservadurismo: 3 },
            { label: "De acuerdo", comunismo: 4, socialismo: 4, liberalismo: 4, conservadurismo: 3 },
            { label: "Totalmente de acuerdo", comunismo: 5, socialismo: 5, liberalismo: 2, conservadurismo: 2 }
        ]
    },
    {
        text: "¿Estás de acuerdo en que la propiedad privada es un derecho fundamental que debe ser protegido a toda costa?",
        options: [
            { label: "Totalmente en desacuerdo", comunismo: 5, socialismo: 4, liberalismo: 1, conservadurismo: 2 },
            { label: "En desacuerdo", comunismo: 4, socialismo: 3, liberalismo: 2, conservadurismo: 3 },
            { label: "Neutral", comunismo: 3, socialismo: 3, liberalismo: 3, conservadurismo: 4 },
            { label: "De acuerdo", comunismo: 2, socialismo: 2, liberalismo: 4, conservadurismo: 4 },
            { label: "Totalmente de acuerdo", comunismo: 1, socialismo: 1, liberalismo: 5, conservadurismo: 5 }
        ]
    },
    {
        text: "¿Qué opinas sobre la redistribución de la riqueza para asegurar que todos tengan acceso a servicios básicos como salud y educación?",
        options: [
            { label: "Totalmente en desacuerdo", comunismo: 1, socialismo: 2, liberalismo: 2, conservadurismo: 2 },
            { label: "En desacuerdo", comunismo: 2, socialismo: 3, liberalismo: 3, conservadurismo: 3 },
            { label: "Neutral", comunismo: 3, socialismo: 3, liberalismo: 3, conservadurismo: 3 },
            { label: "De acuerdo", comunismo: 4, socialismo: 4, liberalismo: 4, conservadurismo: 4 },
            { label: "Totalmente de acuerdo", comunismo: 5, socialismo: 5, liberalismo: 2, conservadurismo: 2 }
        ]
    },
    {
        text: "¿Cómo ves la intervención del Estado en la regulación del mercado laboral para proteger los derechos de los trabajadores?",
        options: [
            { label: "Totalmente en desacuerdo", comunismo: 1, socialismo: 2, liberalismo: 1, conservadurismo: 2 },
            { label: "En desacuerdo", comunismo: 2, socialismo: 3, liberalismo: 2, conservadurismo: 3 },
            { label: "Neutral", comunismo: 3, socialismo: 3, liberalismo: 3, conservadurismo: 3 },
            { label: "De acuerdo", comunismo: 4, socialismo: 4, liberalismo: 4, conservadurismo: 4 },
            { label: "Totalmente de acuerdo", comunismo: 5, socialismo: 5, liberalismo: 2, conservadurismo: 2 }
        ]
    },
    {
        text: "¿Qué tan importante es para ti la libertad individual sobre las regulaciones sociales y económicas impuestas por el Estado?",
        options: [
            { label: "Totalmente en desacuerdo", comunismo: 2, socialismo: 3, liberalismo: 5, conservadurismo: 4 },
            { label: "En desacuerdo", comunismo: 3, socialismo: 3, liberalismo: 4, conservadurismo: 3 },
            { label: "Neutral", comunismo: 3, socialismo: 3, liberalismo: 3, conservadurismo: 3 },
            { label: "De acuerdo", comunismo: 4, socialismo: 4, liberalismo: 2, conservadurismo: 3 },
            { label: "Totalmente de acuerdo", comunismo: 5, socialismo: 4, liberalismo: 1, conservadurismo: 4 }
        ]
    },
    {
        text: "¿Qué nivel de apoyo tienes para políticas que fomenten el emprendimiento privado y reduzcan las barreras para los negocios?",
        options: [
            { label: "Totalmente en desacuerdo", comunismo: 1, socialismo: 2, liberalismo: 5, conservadurismo: 4 },
            { label: "En desacuerdo", comunismo: 2, socialismo: 3, liberalismo: 4, conservadurismo: 3 },
            { label: "Neutral", comunismo: 3, socialismo: 3, liberalismo: 3, conservadurismo: 3 },
            { label: "De acuerdo", comunismo: 4, socialismo: 3, liberalismo: 2, conservadurismo: 4 },
            { label: "Totalmente de acuerdo", comunismo: 5, socialismo: 2, liberalismo: 1, conservadurismo: 5 }
        ]
    },
    {
        text: "¿Cómo te sientes acerca del papel de los sindicatos en la protección de los derechos laborales y la negociación colectiva?",
        options: [
            { label: "Totalmente en desacuerdo", comunismo: 1, socialismo: 2, liberalismo: 2, conservadurismo: 3 },
            { label: "En desacuerdo", comunismo: 2, socialismo: 3, liberalismo: 3, conservadurismo: 3 },
            { label: "Neutral", comunismo: 3, socialismo: 3, liberalismo: 3, conservadurismo: 3 },
            { label: "De acuerdo", comunismo: 4, socialismo: 4, liberalismo: 2, conservadurismo: 4 },
            { label: "Totalmente de acuerdo", comunismo: 5, socialismo: 5, liberalismo: 1, conservadurismo: 3 }
        ]
    },
    {
        text: "¿Qué tan necesario consideras que es el control estatal sobre los recursos naturales y la industria para asegurar su uso equitativo?",
        options: [
            { label: "Totalmente en desacuerdo", comunismo: 1, socialismo: 2, liberalismo: 2, conservadurismo: 2 },
            { label: "En desacuerdo", comunismo: 2, socialismo: 3, liberalismo: 3, conservadurismo: 3 },
            { label: "Neutral", comunismo: 3, socialismo: 3, liberalismo: 3, conservadurismo: 3 },
            { label: "De acuerdo", comunismo: 4, socialismo: 4, liberalismo: 4, conservadurismo: 3 },
            { label: "Totalmente de acuerdo", comunismo: 5, socialismo: 5, liberalismo: 2, conservadurismo: 2 }
        ]
    },
    {
        text: "¿Qué opinas sobre la reducción de impuestos a las empresas para fomentar la inversión y el crecimiento económico?",
        options: [
            { label: "Totalmente en desacuerdo", comunismo: 1, socialismo: 2, liberalismo: 5, conservadurismo: 4 },
            { label: "En desacuerdo", comunismo: 2, socialismo: 3, liberalismo: 4, conservadurismo: 3 },
            { label: "Neutral", comunismo: 3, socialismo: 3, liberalismo: 3, conservadurismo: 3 },
            { label: "De acuerdo", comunismo: 4, socialismo: 3, liberalismo: 2, conservadurismo: 4 },
            { label: "Totalmente de acuerdo", comunismo: 5, socialismo: 2, liberalismo: 1, conservadurismo: 5 }
        ]
    },
    {
        text: "¿Qué tan importante es para ti la tradición y los valores familiares en la formulación de políticas públicas?",
        options: [
            { label: "Totalmente en desacuerdo", comunismo: 1, socialismo: 2, liberalismo: 3, conservadurismo: 5 },
            { label: "En desacuerdo", comunismo: 2, socialismo: 2, liberalismo: 3, conservadurismo: 4 },
            { label: "Neutral", comunismo: 3, socialismo: 3, liberalismo: 3, conservadurismo: 3 },
            { label: "De acuerdo", comunismo: 4, socialismo: 3, liberalismo: 3, conservadurismo: 4 },
            { label: "Totalmente de acuerdo", comunismo: 5, socialismo: 2, liberalismo: 2, conservadurismo: 5 }
        ]
    },
    {
        text: "¿Qué piensas sobre la importancia de mantener un equilibrio entre el poder del Estado y la autonomía local en la toma de decisiones?",
        options: [
            { label: "Totalmente en desacuerdo", comunismo: 3, socialismo: 3, liberalismo: 4, conservadurismo: 3 },
            { label: "En desacuerdo", comunismo: 4, socialismo: 3, liberalismo: 3, conservadurismo: 3 },
            { label: "Neutral", comunismo: 3, socialismo: 3, liberalismo: 3, conservadurismo: 3 },
            { label: "De acuerdo", comunismo: 4, socialismo: 4, liberalismo: 4, conservadurismo: 3 },
            { label: "Totalmente de acuerdo", comunismo: 5, socialismo: 4, liberalismo: 3, conservadurismo: 3 }
        ]
    },
    {
        text: "¿Qué nivel de apoyo tienes para la implementación de políticas que promuevan la igualdad de género y la diversidad en el lugar de trabajo?",
        options: [
            { label: "Totalmente en desacuerdo", comunismo: 4, socialismo: 5, liberalismo: 4, conservadurismo: 2 },
            { label: "En desacuerdo", comunismo: 3, socialismo: 4, liberalismo: 3, conservadurismo: 3 },
            { label: "Neutral", comunismo: 3, socialismo: 3, liberalismo: 3, conservadurismo: 3 },
            { label: "De acuerdo", comunismo: 4, socialismo: 4, liberalismo: 4, conservadurismo: 3 },
            { label: "Totalmente de acuerdo", comunismo: 5, socialismo: 5, liberalismo: 2, conservadurismo: 2 }
        ]
    },
    {
        text: "¿Cómo ves la relación entre el Estado y la religión en la sociedad moderna?",
        options: [
            { label: "Totalmente en desacuerdo", comunismo: 3, socialismo: 3, liberalismo: 5, conservadurismo: 4 },
            { label: "En desacuerdo", comunismo: 3, socialismo: 3, liberalismo: 4, conservadurismo: 4 },
            { label: "Neutral", comunismo: 3, socialismo: 3, liberalismo: 3, conservadurismo: 3 },
            { label: "De acuerdo", comunismo: 4, socialismo: 4, liberalismo: 2, conservadurismo: 3 },
            { label: "Totalmente de acuerdo", comunismo: 5, socialismo: 2, liberalismo: 1, conservadurismo: 4 }
        ]
    },
    {
        text: "¿Qué tan relevante es para ti el impacto ambiental en la formulación de políticas económicas?",
        options: [
            { label: "Totalmente en desacuerdo", comunismo: 2, socialismo: 3, liberalismo: 3, conservadurismo: 2 },
            { label: "En desacuerdo", comunismo: 3, socialismo: 4, liberalismo: 3, conservadurismo: 3 },
            { label: "Neutral", comunismo: 3, socialismo: 3, liberalismo: 3, conservadurismo: 3 },
            { label: "De acuerdo", comunismo: 4, socialismo: 4, liberalismo: 4, conservadurismo: 4 },
            { label: "Totalmente de acuerdo", comunismo: 5, socialismo: 5, liberalismo: 2, conservadurismo: 2 }
        ]
    },
    {
        text: "¿Qué piensas sobre el aumento de la inversión pública en infraestructura para mejorar la calidad de vida y el desarrollo regional?",
        options: [
            { label: "Totalmente en desacuerdo", comunismo: 4, socialismo: 5, liberalismo: 3, conservadurismo: 3 },
            { label: "En desacuerdo", comunismo: 3, socialismo: 4, liberalismo: 3, conservadurismo: 3 },
            { label: "Neutral", comunismo: 3, socialismo: 3, liberalismo: 3, conservadurismo: 3 },
            { label: "De acuerdo", comunismo: 4, socialismo: 4, liberalismo: 3, conservadurismo: 4 },
            { label: "Totalmente de acuerdo", comunismo: 5, socialismo: 2, liberalismo: 2, conservadurismo: 4 }
        ]
    },
    {
        text: "¿Qué nivel de apoyo tienes para políticas que promuevan la igualdad de oportunidades sin intervención estatal en el mercado?",
        options: [
            { label: "Totalmente en desacuerdo", comunismo: 2, socialismo: 3, liberalismo: 5, conservadurismo: 4 },
            { label: "En desacuerdo", comunismo: 3, socialismo: 3, liberalismo: 4, conservadurismo: 3 },
            { label: "Neutral", comunismo: 3, socialismo: 3, liberalismo: 3, conservadurismo: 3 },
            { label: "De acuerdo", comunismo: 4, socialismo: 4, liberalismo: 2, conservadurismo: 4 },
            { label: "Totalmente de acuerdo", comunismo: 5, socialismo: 2, liberalismo: 1, conservadurismo: 5 }
        ]
    },
    {
        text: "¿Cómo ves la participación del Estado en la regulación de precios para asegurar la accesibilidad a productos básicos?",
        options: [
            { label: "Totalmente en desacuerdo", comunismo: 1, socialismo: 2, liberalismo: 2, conservadurismo: 3 },
            { label: "En desacuerdo", comunismo: 2, socialismo: 3, liberalismo: 3, conservadurismo: 3 },
            { label: "Neutral", comunismo: 3, socialismo: 3, liberalismo: 3, conservadurismo: 3 },
            { label: "De acuerdo", comunismo: 4, socialismo: 4, liberalismo: 2, conservadurismo: 4 },
            { label: "Totalmente de acuerdo", comunismo: 5, socialismo: 5, liberalismo: 1, conservadurismo: 3 }
        ]
    },
    {
        text: "¿Qué tan importante es para ti la estabilidad económica frente a la flexibilidad en las políticas fiscales y monetarias?",
        options: [
            { label: "Totalmente en desacuerdo", comunismo: 3, socialismo: 4, liberalismo: 4, conservadurismo: 5 },
            { label: "En desacuerdo", comunismo: 3, socialismo: 4, liberalismo: 4, conservadurismo: 4 },
            { label: "Neutral", comunismo: 3, socialismo: 3, liberalismo: 3, conservadurismo: 3 },
            { label: "De acuerdo", comunismo: 4, socialismo: 3, liberalismo: 3, conservadurismo: 3 },
            { label: "Totalmente de acuerdo", comunismo: 5, socialismo: 2, liberalismo: 2, conservadurismo: 1 }
        ]
    },
    {
        text: "¿Qué opinas sobre el papel del Estado en la promoción de la cultura y las artes?",
        options: [
            { label: "Totalmente en desacuerdo", comunismo: 2, socialismo: 2, liberalismo: 3, conservadurismo: 2 },
            { label: "En desacuerdo", comunismo: 3, socialismo: 3, liberalismo: 3, conservadurismo: 3 },
            { label: "Neutral", comunismo: 3, socialismo: 3, liberalismo: 3, conservadurismo: 3 },
            { label: "De acuerdo", comunismo: 4, socialismo: 4, liberalismo: 4, conservadurismo: 3 },
            { label: "Totalmente de acuerdo", comunismo: 5, socialismo: 5, liberalismo: 2, conservadurismo: 2 }
        ]
    },
    {
        text: "¿Qué tan necesario es para ti el mantenimiento de una política de seguridad nacional fuerte y centralizada?",
        options: [
            { label: "Totalmente en desacuerdo", comunismo: 3, socialismo: 3, liberalismo: 4, conservadurismo: 5 },
            { label: "En desacuerdo", comunismo: 3, socialismo: 3, liberalismo: 3, conservadurismo: 4 },
            { label: "Neutral", comunismo: 3, socialismo: 3, liberalismo: 3, conservadurismo: 3 },
            { label: "De acuerdo", comunismo: 4, socialismo: 4, liberalismo: 3, conservadurismo: 3 },
            { label: "Totalmente de acuerdo", comunismo: 5, socialismo: 2, liberalismo: 2, conservadurismo: 2 }
        ]
    }
];
let currentQuestionIndex = 0;
const results = { comunismo: 0, socialismo: 0, liberalismo: 0, conservadurismo: 0 };

function displayQuestion(index) {
    const question = questions[index];
    const questionContainer = document.querySelector('.question-container');
    
    questionContainer.innerHTML = `<h2>${question.text}</h2>`;
    
    question.options.forEach((option, i) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option.label;
        optionElement.dataset.index = i;
        optionElement.addEventListener('click', selectOption);
        questionContainer.appendChild(optionElement);
    });
}

function selectOption(event) {
    const selectedOption = event.target;
    const index = selectedOption.dataset.index;
    const question = questions[currentQuestionIndex];
    const option = question.options[index];
    
    // Remove the 'selected' class from all options
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    
    // Add the 'selected' class to the clicked option
    selectedOption.classList.add('selected');
    
    // Store the scores
    for (let ideology in option) {
        if (ideology !== 'label') {
            results[ideology] += option[ideology];
        }
    }
}

function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion(currentQuestionIndex);
        updateProgressBar();
    } else {
        showResults();
    }
}

function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const percentage = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${percentage}%`;
}

function showResults() {
    document.getElementById('questionnaire').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
    
    const ctx = document.getElementById('result-chart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Comunismo', 'Socialismo', 'Liberalismo', 'Conservadurismo'],
            datasets: [{
                label: 'Puntaje',
                data: [results.comunismo, results.socialismo, results.liberalismo, results.conservadurismo],
                backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56']
            }]
        }
    });
}

function retryQuiz() {
    currentQuestionIndex = 0;
    results.comunismo = 0;
    results.socialismo = 0;
    results.liberalismo = 0;
    results.conservadurismo = 0;
    
    document.getElementById('questionnaire').classList.remove('hidden');
    document.getElementById('result').classList.add('hidden');
    
    displayQuestion(currentQuestionIndex);
    updateProgressBar();
}

document.getElementById('next-button').addEventListener('click', showNextQuestion);
document.getElementById('retry').addEventListener('click', retryQuiz);

// Initialize the first question
displayQuestion(currentQuestionIndex);
