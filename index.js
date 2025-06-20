const questionSet = {
    gk: [
        {
            question: "What is the capital of France?",
            options: ["London", "Berlin", "Paris", "Madrid"],
            correct: 2
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            correct: 1
        },
        {
            question: "What is the largest mammal in the world?",
            options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
            correct: 1
        },
        {
            question: "In which year did World War II end?",
            options: ["1944", "1945", "1946", "1947"],
            correct: 1
        },
        {
            question: "What is the chemical symbol for gold?",
            options: ["Go", "Gd", "Au", "Ag"],
            correct: 2
        },
        {
            question: "Which ocean is the largest?",
            options: ["Atlantic", "Indian", "Arctic", "Pacific"],
            correct: 3
        },
        {
            question: "Who painted the Mona Lisa?",
            options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
            correct: 1
        },
        {
            question: "What is the fastest land animal?",
            options: ["Lion", "Cheetah", "Leopard", "Tiger"],
            correct: 1
        },
        {
            question: "How many continents are there?",
            options: ["5", "6", "7", "8"],
            correct: 2
        },
        {
            question: "What is the smallest country in the world?",
            options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
            correct: 1
        },
        {
            question: "Which country is home to the kangaroo?",
            options: ["New Zealand", "Australia", "South Africa", "India"],
            correct: 1
        },
        {
            question: "What is the largest desert in the world?",
            options: ["Sahara", "Arabian", "Gobi", "Antarctic"],
            correct: 0
        },
        {
            question: "Who wrote 'Romeo and Juliet'?",
            options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
            correct: 1
        },
        {
            question: "What is the currency of Japan?",
            options: ["Yuan", "Won", "Yen", "Ringgit"],
            correct: 2
        },
        {
            question: "Which element has the chemical symbol 'O'?",
            options: ["Osmium", "Oxygen", "Oganesson", "Osmium"],
            correct: 1
        },
        {
            question: "What is the tallest mountain in the world?",
            options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
            correct: 1
        },
        {
            question: "Which country is known as the Land of the Rising Sun?",
            options: ["China", "Japan", "Korea", "Thailand"],
            correct: 1
        },
        {
            question: "What is the main component of the sun?",
            options: ["Liquid lava", "Molten iron", "Hot gases", "Solid rock"],
            correct: 2
        },
        {
            question: "Who discovered penicillin?",
            options: ["Alexander Fleming", "Louis Pasteur", "Robert Koch", "Joseph Lister"],
            correct: 0
        },
        {
            question: "What is the largest organ in the human body?",
            options: ["Heart", "Brain", "Liver", "Skin"],
            correct: 3
        }
    ],
    dsa: [
        {
            question: "What is the time complexity of binary search?",
            options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
            correct: 1
        },
        {
            question: "Which data structure uses FIFO order?",
            options: ["Stack", "Queue", "Tree", "Graph"],
            correct: 1
        },
        {
            question: "Which sorting algorithm is NOT comparison-based?",
            options: ["Merge Sort", "Quick Sort", "Counting Sort", "Heap Sort"],
            correct: 2
        },
        {
            question: "What is the worst-case time complexity of Quick Sort?",
            options: ["O(n^2)", "O(n log n)", "O(log n)", "O(n)"],
            correct: 0
        },
        {
            question: "Which data structure is used for recursion?",
            options: ["Queue", "Stack", "Heap", "Tree"],
            correct: 1
        },
        {
            question: "Which of the following is a self-balancing binary search tree?",
            options: ["AVL Tree", "Binary Heap", "Trie", "B-Tree"],
            correct: 0
        },
        {
            question: "What is the space complexity of Merge Sort?",
            options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
            correct: 2
        },
        {
            question: "Which algorithm is used to find the shortest path in a weighted graph?",
            options: ["DFS", "BFS", "Dijkstra's Algorithm", "Prim's Algorithm"],
            correct: 2
        },
        {
            question: "Which of the following is NOT a linear data structure?",
            options: ["Array", "Linked List", "Tree", "Queue"],
            correct: 2
        },
        {
            question: "Which operation is performed in O(1) time in a hash table (on average)?",
            options: ["Search", "Insert", "Delete", "All of the above"],
            correct: 3
        },
        {
            question: "What is the time complexity of inserting an element at the end of an array?",
            options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
            correct: 0
        },
        {
            question: "Which data structure is best for implementing a priority queue?",
            options: ["Array", "Linked List", "Heap", "Stack"],
            correct: 2
        },
        {
            question: "What is the time complexity of bubble sort?",
            options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
            correct: 2
        },
        {
            question: "Which algorithm uses divide and conquer strategy?",
            options: ["Bubble Sort", "Merge Sort", "Selection Sort", "Insertion Sort"],
            correct: 1
        },
        {
            question: "What is the maximum number of children a binary tree node can have?",
            options: ["1", "2", "3", "4"],
            correct: 1
        },
        {
            question: "Which data structure is used in breadth-first search?",
            options: ["Stack", "Queue", "Heap", "Tree"],
            correct: 1
        },
        {
            question: "What is the time complexity of linear search?",
            options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
            correct: 2
        },
        {
            question: "Which sorting algorithm has the best average-case time complexity?",
            options: ["Bubble Sort", "Quick Sort", "Selection Sort", "Insertion Sort"],
            correct: 1
        },
        {
            question: "What is the space complexity of a recursive function?",
            options: ["O(1)", "O(n)", "O(log n)", "Depends on the function"],
            correct: 3
        },
        {
            question: "Which data structure is used to implement a stack?",
            options: ["Array or Linked List", "Tree", "Graph", "Heap"],
            correct: 0
        }
    ],
    physics: [
        { question: "What is the SI unit of force?", options: ["Newton", "Joule", "Watt", "Pascal"], correct: 0 },
        { question: "Who is known as the father of modern physics?", options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"], correct: 1 },
        { question: "What is the speed of light in vacuum?", options: ["3x10^8 m/s", "3x10^6 m/s", "3x10^5 m/s", "3x10^7 m/s"], correct: 0 },
        { question: "Which law states that for every action there is an equal and opposite reaction?", options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Gravitation"], correct: 2 },
        { question: "What is the acceleration due to gravity on Earth?", options: ["8.9 m/s²", "9.8 m/s²", "10.8 m/s²", "7.8 m/s²"], correct: 1 },
        { question: "Which particle has a negative charge?", options: ["Proton", "Neutron", "Electron", "Photon"], correct: 2 },
        { question: "What is the formula for kinetic energy?", options: ["mv", "1/2 mv^2", "mg", "mgh"], correct: 1 },
        { question: "Which phenomenon explains the blue color of the sky?", options: ["Reflection", "Refraction", "Dispersion", "Scattering"], correct: 3 },
        { question: "What is measured in Ohms?", options: ["Current", "Voltage", "Resistance", "Power"], correct: 2 },
        { question: "Who discovered X-rays?", options: ["Marie Curie", "Wilhelm Röntgen", "James Chadwick", "Ernest Rutherford"], correct: 1 },
        { question: "What is the SI unit of power?", options: ["Joule", "Watt", "Newton", "Pascal"], correct: 1 },
        { question: "Which wave can travel through vacuum?", options: ["Sound waves", "Light waves", "Water waves", "Seismic waves"], correct: 1 },
        { question: "What is the principle of conservation of energy?", options: ["Energy can be created", "Energy can be destroyed", "Energy cannot be created or destroyed", "Energy can be converted"], correct: 2 },
        { question: "Which color has the longest wavelength?", options: ["Red", "Blue", "Green", "Violet"], correct: 0 },
        { question: "What is the unit of frequency?", options: ["Meter", "Second", "Hertz", "Watt"], correct: 2 },
        { question: "Which force is responsible for keeping planets in orbit?", options: ["Magnetic force", "Gravitational force", "Nuclear force", "Frictional force"], correct: 1 },
        { question: "What is the formula for density?", options: ["mass/volume", "volume/mass", "mass × volume", "mass + volume"], correct: 0 },
        { question: "Which mirror forms a virtual image?", options: ["Concave mirror", "Convex mirror", "Plane mirror", "All of the above"], correct: 2 },
        { question: "What is the SI unit of temperature?", options: ["Fahrenheit", "Celsius", "Kelvin", "Rankine"], correct: 2 },
        { question: "Which law relates pressure and volume of a gas?", options: ["Boyle's Law", "Charles's Law", "Gay-Lussac's Law", "Avogadro's Law"], correct: 0 }
    ],
    chemistry: [
        { question: "What is the chemical symbol for Sodium?", options: ["Na", "S", "So", "N"], correct: 0 },
        { question: "Who is known as the father of modern chemistry?", options: ["John Dalton", "Dmitri Mendeleev", "Antoine Lavoisier", "Marie Curie"], correct: 2 },
        { question: "What is H2SO4 commonly known as?", options: ["Hydrochloric Acid", "Sulfuric Acid", "Nitric Acid", "Acetic Acid"], correct: 1 },
        { question: "Which gas is known as laughing gas?", options: ["CO2", "N2O", "NO2", "SO2"], correct: 1 },
        { question: "What is the pH of pure water?", options: ["5", "7", "9", "1"], correct: 1 },
        { question: "Which element has the atomic number 1?", options: ["Oxygen", "Hydrogen", "Helium", "Carbon"], correct: 1 },
        { question: "What is the main gas found in the air we breathe?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], correct: 1 },
        { question: "What is the chemical formula for table salt?", options: ["NaCl", "KCl", "Na2CO3", "CaCl2"], correct: 0 },
        { question: "Which acid is present in vinegar?", options: ["Citric Acid", "Acetic Acid", "Lactic Acid", "Sulfuric Acid"], correct: 1 },
        { question: "Who developed the periodic table?", options: ["John Dalton", "Dmitri Mendeleev", "Antoine Lavoisier", "Henry Moseley"], correct: 1 },
        { question: "What is the chemical symbol for Iron?", options: ["Fe", "Ir", "In", "I"], correct: 0 },
        { question: "Which gas is essential for photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], correct: 1 },
        { question: "What is the atomic number of Carbon?", options: ["4", "6", "8", "12"], correct: 1 },
        { question: "Which metal is liquid at room temperature?", options: ["Mercury", "Gallium", "Cesium", "Francium"], correct: 0 },
        { question: "What is the chemical formula for water?", options: ["H2O", "CO2", "O2", "N2"], correct: 0 },
        { question: "Which gas causes acid rain?", options: ["CO2", "SO2", "NO2", "O2"], correct: 1 },
        { question: "What is the most abundant metal in Earth's crust?", options: ["Iron", "Aluminum", "Copper", "Zinc"], correct: 1 },
        { question: "Which element is known as the building block of life?", options: ["Oxygen", "Carbon", "Nitrogen", "Hydrogen"], correct: 1 },
        { question: "What is the chemical symbol for Gold?", options: ["Go", "Gd", "Au", "Ag"], correct: 2 },
        { question: "Which gas is called the silent killer?", options: ["CO2", "CO", "NO2", "SO2"], correct: 1 }
    ],
    mathematics: [
        { question: "What is the value of π (pi) to two decimal places?", options: ["3.12", "3.14", "3.16", "3.18"], correct: 1 },
        { question: "What is 7 x 8?", options: ["54", "56", "58", "60"], correct: 1 },
        { question: "What is the square root of 81?", options: ["7", "8", "9", "10"], correct: 2 },
        { question: "What is the next prime number after 7?", options: ["9", "10", "11", "13"], correct: 2 },
        { question: "What is 15% of 200?", options: ["20", "25", "30", "35"], correct: 2 },
        { question: "What is the formula for the area of a circle?", options: ["πr^2", "2πr", "πd", "r^2"], correct: 0 },
        { question: "What is 12 squared?", options: ["124", "122", "144", "142"], correct: 2 },
        { question: "What is the value of 0 factorial (0!)?", options: ["0", "1", "Undefined", "Infinity"], correct: 1 },
        { question: "What is the sum of angles in a triangle?", options: ["90°", "180°", "270°", "360°"], correct: 1 },
        { question: "What is the cube root of 27?", options: ["2", "3", "4", "5"], correct: 1 },
        { question: "What is 25% of 80?", options: ["15", "20", "25", "30"], correct: 1 },
        { question: "What is the perimeter of a square with side length 5?", options: ["15", "20", "25", "30"], correct: 1 },
        { question: "What is 3 to the power of 4?", options: ["12", "27", "64", "81"], correct: 3 },
        { question: "What is the greatest common factor of 12 and 18?", options: ["3", "6", "9", "12"], correct: 1 },
        { question: "What is the least common multiple of 4 and 6?", options: ["12", "18", "24", "30"], correct: 0 },
        { question: "What is the slope of a horizontal line?", options: ["0", "1", "Undefined", "Infinity"], correct: 0 },
        { question: "What is the formula for the volume of a sphere?", options: ["4/3πr^3", "πr^2h", "4πr^2", "2πr"], correct: 0 },
        { question: "What is the square root of 144?", options: ["10", "11", "12", "13"], correct: 2 },
        { question: "What is 1/2 + 1/3?", options: ["2/5", "3/6", "5/6", "6/5"], correct: 2 },
        { question: "What is the value of 2^5?", options: ["16", "32", "64", "128"], correct: 1 }
    ]
};

let currentSection = null;
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let timer = 30;
let timerInterval;
let currentUser = null;
let users = {}; // In-memory user storage
let currentDifficulty = null;

function showLogin() {
  document.getElementById('loginForm').style.display = 'block';
  document.getElementById('signupForm').style.display = 'none';
  clearAuthMessage();
}

function showSignup() {
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('signupForm').style.display = 'block';
  clearAuthMessage();
}

function login() {
  const username = document.getElementById('loginUsername').value.trim();
  const password = document.getElementById('loginPassword').value;

  if (!username || !password) {
      showAuthMessage('Please fill in all fields', 'error');
      return;
  }

  // Check if user exists and password matches
  if (users[username] && users[username].password === password) {
      currentUser = users[username];
      showAuthMessage('Login successful!', 'success');
      setTimeout(() => {
          showMainScreen();
      }, 1000);
  } else {
      showAuthMessage('Invalid username or password', 'error');
  }
}

function signup() {
  const username = document.getElementById('signupUsername').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const password = document.getElementById('signupPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Validation
  if (!username || !email || !password || !confirmPassword) {
      showAuthMessage('Please fill in all fields', 'error');
      return;
  }

  if (username.length < 3) {
      showAuthMessage('Username must be at least 3 characters long', 'error');
      return;
  }

  if (password.length < 6) {
      showAuthMessage('Password must be at least 6 characters long', 'error');
      return;
  }

  if (password !== confirmPassword) {
      showAuthMessage('Passwords do not match', 'error');
      return;
  }

  if (!isValidEmail(email)) {
      showAuthMessage('Please enter a valid email address', 'error');
      return;
  }

  // Check if username already exists
  if (users[username]) {
      showAuthMessage('Username already exists', 'error');
      return;
  }

  // Create new user
  users[username] = {
      username: username,
      email: email,
      password: password,
      highScore: 0,
      gamesPlayed: 0
  };

  showAuthMessage('Account created successfully! Please login.', 'success');
  setTimeout(() => {
      showLogin();
      clearAuthMessage();
  }, 1500);
}

function logout() {
  currentUser = null;
  showScreen('authScreen');
  clearForms();
  clearAuthMessage();
  document.getElementById('globalLogoutBtn').style.display = 'none';
}

function showMainScreen() {
  document.getElementById('welcomeMessageSection').textContent = `Welcome back, ${currentUser.username}! 🎯`;
  showScreen('sectionScreen');
  clearForms();
  document.getElementById('globalLogoutBtn').style.display = 'block';
}

function showAuthMessage(message, type) {
  const authMessage = document.getElementById('authMessage');
  authMessage.innerHTML = `<div class="${type}-message">${message}</div>`;
}

function clearAuthMessage() {
  document.getElementById('authMessage').innerHTML = '';
}

function clearForms() {
  document.getElementById('loginUsername').value = '';
  document.getElementById('loginPassword').value = '';
  document.getElementById('signupUsername').value = '';
  document.getElementById('signupEmail').value = '';
  document.getElementById('signupPassword').value = '';
  document.getElementById('confirmPassword').value = '';
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Initialize with demo account
function initializeDemoAccount() {
  users['demo'] = {
      username: 'demo',
      email: 'demo@quizmaster.com',
      password: 'demo123',
      highScore: 70,
      gamesPlayed: 5
  };
}

function createParticles() {
  const particlesContainer = document.getElementById('particles');
  for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 6 + 's';
      particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
      particlesContainer.appendChild(particle);
  }
}

function showScreen(screenId) {
  document.querySelectorAll('.game-screen').forEach(screen => {
      screen.classList.remove('active');
  });
  document.getElementById(screenId).classList.add('active');
  // Show logout button on any screen except auth
  if (screenId === 'authScreen') {
    document.getElementById('globalLogoutBtn').style.display = 'none';
  } else if (currentUser) {
    document.getElementById('globalLogoutBtn').style.display = 'block';
  }
}

function selectSection(section) {
    currentSection = section;
    const sectionNames = {
        'dsa': 'DSA Quiz',
        'gk': 'General Knowledge Quiz',
        'physics': 'Physics Quiz',
        'chemistry': 'Chemistry Quiz',
        'mathematics': 'Mathematics Quiz'
    };
    document.getElementById('difficultyTitle').textContent = sectionNames[section];
    showScreen('difficultyScreen');
}

function selectDifficulty(difficulty) {
    currentDifficulty = difficulty;
    // Set timer based on difficulty
    switch(difficulty) {
        case 'beginner':
            timer = 30;
            break;
        case 'medium':
            timer = 25;
            break;
        case 'hard':
            timer = 20;
            break;
    }
    startQuiz();
}

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;
    showScreen('quizScreen');
    displayQuestion();
    startTimer();
}

function displayQuestion() {
    const questions = questionSet[currentSection];
    const question = questions[currentQuestion];
    document.getElementById('questionText').textContent = question.question;
    document.getElementById('questionNumber').textContent = `${currentQuestion + 1}/10`;
    document.getElementById('currentScore').textContent = score;
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.onclick = () => selectAnswer(index);
        optionsContainer.appendChild(optionElement);
    });
    document.getElementById('nextBtn').style.display = 'none';
    updateProgressBar();
    resetTimer();
}

function selectAnswer(answerIndex) {
    if (selectedAnswer !== null) return;
    selectedAnswer = answerIndex;
    const questions = questionSet[currentSection];
    const options = document.querySelectorAll('.option');
    const correctAnswer = questions[currentQuestion].correct;
    clearInterval(timerInterval);
    if (answerIndex >= 0) options[answerIndex].classList.add('selected');
    setTimeout(() => {
        options[correctAnswer].classList.add('correct');
        if (answerIndex !== correctAnswer) {
            if (answerIndex >= 0) options[answerIndex].classList.add('incorrect');
        } else {
            score += 10;
            document.getElementById('currentScore').textContent = score;
        }
        document.getElementById('nextBtn').style.display = 'block';
    }, 500);
}

function nextQuestion() {
    currentQuestion++;
    selectedAnswer = null;
    const questions = questionSet[currentSection];
    if (currentQuestion < questions.length) {
        displayQuestion();
        startTimer();
    } else {
        showResults();
    }
}

function startTimer() {
    timer = 30;
    document.getElementById('timer').textContent = timer;
    timerInterval = setInterval(() => {
        timer--;
        document.getElementById('timer').textContent = timer;
        if (timer <= 0) {
            clearInterval(timerInterval);
            if (selectedAnswer === null) {
                selectAnswer(-1); // Auto-select wrong answer when time runs out
            }
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    timer = 30;
    document.getElementById('timer').textContent = timer;
}

function updateProgressBar() {
    const questions = questionSet[currentSection];
    const progress = ((currentQuestion) / questions.length) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
}

function showResults() {
    showScreen('resultScreen');
    document.getElementById('finalScore').textContent = `${score}/100`;
    if (currentUser) {
        currentUser.gamesPlayed++;
        if (score > currentUser.highScore) {
            currentUser.highScore = score;
        }
    }
    let message = '';
    let details = '';
    if (score >= 80) {
        message = "🏆 Outstanding! You're a Quiz Master!";
        details = "Incredible knowledge! You got most questions right!";
    } else if (score >= 60) {
        message = "🎉 Great Job! Well Done!";
        details = "Good performance! Keep up the great work!";
    } else if (score >= 40) {
        message = "👍 Not Bad! Room for Improvement";
        details = "You're getting there! Practice makes perfect!";
    } else {
        message = "📚 Keep Learning! You Can Do Better!";
        details = "Don't give up! Every expert was once a beginner!";
    }
    document.getElementById('resultMessage').textContent = message;
    document.getElementById('resultDetails').textContent = details;
}

function restartQuiz() {
    showScreen('sectionScreen');
    clearInterval(timerInterval);
}

function goBackToSections() {
    // Clear the current quiz state
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;
    currentDifficulty = null;
    clearInterval(timerInterval);
    
    // Show the section selection screen
    showScreen('sectionScreen');
}

// Initialize the app
function initializeApp() {
  initializeDemoAccount();
  createParticles();
  
  // Add enter key support for forms
  document.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
          const activeScreen = document.querySelector('.game-screen.active');
          if (activeScreen.id === 'authScreen') {
              const loginVisible = document.getElementById('loginForm').style.display !== 'none';
              if (loginVisible) {
                  login();
              } else {
                  signup();
              }
          }
      }
  });
}

// Initialize on page load
initializeApp();