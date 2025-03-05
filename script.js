// questions.js - Separating the questions data for better organization
const questions = [    
    {
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

// script.js - Lógica de la aplicación
class PoliticalQuiz {
    constructor(questions) {
        // Configuración del test
        this.questions = questions;
        this.currentQuestionIndex = 0;
        this.selectedOptionIndex = null;
        this.results = { comunismo: 0, socialismo: 0, liberalismo: 0, conservadurismo: 0 };
        this.colors = {
            comunismo: '#e74c3c',
            socialismo: '#3498db',
            liberalismo: '#9b59b6',
            conservadurismo: '#f1c40f'
        };
        
        // Elementos DOM
        this.elements = {
            questionContainer: document.querySelector('.question-container'),
            progressBar: document.getElementById('progress-bar'),
            nextButton: document.getElementById('next-button'),
            retryButton: document.getElementById('retry'),
            questionnaireSection: document.getElementById('questionnaire'),
            resultSection: document.getElementById('result'),
            resultChart: document.getElementById('result-chart')
        };
        
        // Inicialización
        this.init();
    }
    
    init() {
        // Bindear métodos al contexto actual
        this.displayQuestion = this.displayQuestion.bind(this);
        this.selectOption = this.selectOption.bind(this);
        this.goToNextQuestion = this.goToNextQuestion.bind(this);
        this.resetQuiz = this.resetQuiz.bind(this);
        this.shareResults = this.shareResults.bind(this);
        
        // Event listeners
        this.elements.nextButton.addEventListener('click', this.goToNextQuestion);
        this.elements.retryButton.addEventListener('click', this.resetQuiz);
        
        // Iniciar test
        this.resetState();
        this.displayQuestion(0);
        this.updateProgressBar();
    }
    
    resetState() {
        this.currentQuestionIndex = 0;
        this.selectedOptionIndex = null;
        
        // Reiniciar resultados
        Object.keys(this.results).forEach(ideology => {
            this.results[ideology] = 0;
        });
    }
    
    displayQuestion(index) {
        const question = this.questions[index];
        this.selectedOptionIndex = null;
        
        // Crear elemento de pregunta
        this.elements.questionContainer.innerHTML = `
            <h2 class="question-number">Pregunta ${index + 1} de ${this.questions.length}</h2>
            <h3 class="question-text">${question.text}</h3>
            <div class="options-container"></div>
        `;
        
        const optionsContainer = this.elements.questionContainer.querySelector('.options-container');
        
        // Crear opciones
        question.options.forEach((option, i) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.textContent = option.label;
            optionElement.dataset.index = i;
            optionElement.addEventListener('click', () => this.selectOption(i, optionElement));
            optionsContainer.appendChild(optionElement);
        });
        
        // Deshabilitar botón hasta que se seleccione una opción
        this.elements.nextButton.disabled = true;
    }
    
    selectOption(index, optionElement) {
        // Eliminar selección de todas las opciones
        document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
        
        // Agregar selección a la opción clicada
        optionElement.classList.add('selected');
        
        // Almacenar índice de opción seleccionada
        this.selectedOptionIndex = index;
        
        // Habilitar botón siguiente
        this.elements.nextButton.disabled = false;
    }
    
    goToNextQuestion() {
        if (this.selectedOptionIndex === null) {
            alert('Por favor, selecciona una opción antes de continuar.');
            return;
        }
        
        // Registrar puntajes para la pregunta actual
        const question = this.questions[this.currentQuestionIndex];
        const selectedOption = question.options[this.selectedOptionIndex];
        
        // Registrar puntos para cada ideología
        Object.keys(this.results).forEach(ideology => {
            if (ideology in selectedOption) {
                this.results[ideology] += selectedOption[ideology];
            }
        });
        
        // Avanzar a siguiente pregunta o mostrar resultados
        this.currentQuestionIndex++;
        
        if (this.currentQuestionIndex < this.questions.length) {
            this.displayQuestion(this.currentQuestionIndex);
            this.updateProgressBar();
        } else {
            this.showResults();
        }
    }
    
    updateProgressBar() {
        const percentage = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        this.elements.progressBar.style.width = `${percentage}%`;
        this.elements.progressBar.setAttribute('aria-valuenow', percentage);
    }
    
    // Calcular porcentajes normalizados de manera más precisa
    calculatePercentages() {
        // Calcular el puntaje máximo posible para cada ideología
        const maxPossibleScores = {};
        
        // Inicializar puntajes máximos
        Object.keys(this.results).forEach(ideology => {
            maxPossibleScores[ideology] = 0;
        });
        
        // Calcular el puntaje máximo posible para cada ideología
        this.questions.forEach(question => {
            question.options.forEach(option => {
                Object.keys(this.results).forEach(ideology => {
                    if (ideology in option) {
                        // Buscar el puntaje máximo para esta ideología en esta pregunta
                        const optionScores = question.options.map(o => o[ideology] || 0);
                        const maxScore = Math.max(...optionScores);
                        maxPossibleScores[ideology] += maxScore;
                    }
                });
            });
        });
        
        // Calcular porcentajes basados en puntajes máximos posibles
        const percentages = {};
        Object.keys(this.results).forEach(ideology => {
            // Evitar división por cero
            if (maxPossibleScores[ideology] > 0) {
                percentages[ideology] = (this.results[ideology] / maxPossibleScores[ideology]) * 100;
            } else {
                percentages[ideology] = 0;
            }
        });
        
        return percentages;
    }
    
    findDominantIdeology() {
        let dominant = Object.keys(this.results)[0];
        let maxScore = this.results[dominant];
        
        Object.entries(this.results).forEach(([ideology, score]) => {
            if (score > maxScore) {
                maxScore = score;
                dominant = ideology;
            }
        });
        
        return dominant;
    }
    
    getIdeologyDescription(ideology) {
        const descriptions = {
            comunismo: "Tu orientación política se alinea más con ideas comunistas. Tiendes a favorecer un alto nivel de control estatal sobre la economía y consideras la redistribución de la riqueza como una prioridad.",
            socialismo: "Tus respuestas indican una orientación socialista. Valoras la intervención del Estado para garantizar una distribución más equitativa de los recursos y los derechos colectivos.",
            liberalismo: "Tu perspectiva política se alinea más con el liberalismo. Tiendes a valorar las libertades individuales, el libre mercado y una limitada intervención estatal.",
            conservadurismo: "Tus respuestas sugieren una orientación conservadora. Valoras la tradición, la estabilidad social y los valores familiares en la formulación de políticas."
        };
        
        return descriptions[ideology] || "No se pudo determinar una orientación política predominante.";
    }
    
    showResults() {
        this.elements.questionnaireSection.classList.add('hidden');
        this.elements.resultSection.classList.remove('hidden');
        
        const percentages = this.calculatePercentages();
        const dominantIdeology = this.findDominantIdeology();
        
        // Eliminar detalles de resultados anteriores
        const existingResultDetails = document.querySelector('.result-details');
        if (existingResultDetails) {
            existingResultDetails.remove();
        }
        
        // Eliminar botón de compartir existente
        const existingShareButton = document.getElementById('share-results');
        if (existingShareButton) {
            existingShareButton.remove();
        }
        
        // Crear sección de resultados detallados
        const resultDetails = document.createElement('div');
        resultDetails.className = 'result-details';
        resultDetails.innerHTML = `
            <h3>Tu orientación política predominante:</h3>
            <h2 class="dominant-ideology">${this.capitalizeFirstLetter(dominantIdeology)}</h2>
            <p class="ideology-description">${this.getIdeologyDescription(dominantIdeology)}</p>
        `;
        
        this.elements.resultSection.insertBefore(resultDetails, document.querySelector('.buttons-container'));
        
        // Crear y renderizar gráfico
        const ctx = this.elements.resultChart.getContext('2d');
        
        // Verificar si ya existe un gráfico y destruirlo
        if (window.resultChart) {
            window.resultChart.destroy();
        }
        
        // Ordenar ideologías por puntuación (de mayor a menor)
        const sortedIdeologies = Object.keys(percentages).sort((a, b) => percentages[b] - percentages[a]);
        
        window.resultChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: sortedIdeologies.map(this.capitalizeFirstLetter),
                datasets: [{
                    label: 'Puntaje (%)',
                    data: sortedIdeologies.map(ideology => Math.round(percentages[ideology])),
                    backgroundColor: sortedIdeologies.map(ideology => this.colors[ideology]),
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.parsed.y}%`;
                            }
                        }
                    }
                }
            }
        });
        
        // Botón para compartir resultados
        const shareButton = document.createElement('button');
        shareButton.id = 'share-results';
        shareButton.textContent = 'Compartir Resultados';
        shareButton.addEventListener('click', this.shareResults);
        document.querySelector('.buttons-container').appendChild(shareButton);
    }
    
    shareResults() {
        const dominantIdeology = this.findDominantIdeology();
        const text = `¡Mi orientación política principal es ${this.capitalizeFirstLetter(dominantIdeology)}! Descubre la tuya en este test de orientación política.`;
        
        if (navigator.share) {
            navigator.share({
                title: 'Mi Orientación Política',
                text: text,
                url: window.location.href
            })
            .catch(console.error);
        } else {
            // Fallback para navegadores que no soportan Web Share API
            prompt('Copia este texto para compartir tus resultados:', text);
        }
    }
    
    resetQuiz() {
        // Reiniciar estado y comenzar test de nuevo
        this.resetState();
        this.displayQuestion(0);
        this.updateProgressBar();
        
        // Mostrar cuestionario, ocultar resultados
        this.elements.questionnaireSection.classList.remove('hidden');
        this.elements.resultSection.classList.add('hidden');
    }
    
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}

// Inicializar la aplicación cuando el DOM está listo
document.addEventListener('DOMContentLoaded', () => {
    const quiz = new PoliticalQuiz(questions);
});
