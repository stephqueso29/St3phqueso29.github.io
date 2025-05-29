<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Sanrio Character Quiz</title>
  <style>
    body {
      font-family: 'Comic Sans MS', cursive, sans-serif;
      background-color: #E1EEBC;
      color: #333;
      padding: 20px;
    }
    .quiz-container {
      max-width: 600px;
      margin: 0 auto;
      background: white;
      border-radius: 10px;
      padding: 20px;
      box-shadow: 0 0 10px #ccc;
    }
    h1 {
      text-align: center;
      color: #ff66b2;
    }
    .question {
      margin-bottom: 15px;
    }
    button {
      background-color: #E1EEBC;
      border: none;
      padding: 10px 20px;
      cursor: pointer;
      font-size: 16px;
      border-radius: 5px;
      margin-top: 10px; 
    }
    button:hover {
      background-color: #ff99cc;
    }
    .result {
      font-weight: bold;
      color: green;
      margin-top: 15px;
    }
    img {
      max-width: 300px;
      border-radius: 100px;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  </style>
</head>
<body>
  <div class="quiz-container">
    <h1>Sanrio Character Quiz</h1>
    <img src="https://images.surferseo.art/046af0ab-6e03-4ccf-916e-7f1c376627b2.png" alt="Sanrio Characters">

    <div class="question">
      <p>1. Which Sanrio character was in the boy cried wolf?</p>
      <input type="radio" name="q1" value="My Melody" /> My Melody<br />
      <input type="radio" name="q1" value="Badtz-maru" /> Badtz-maru<br />
      <input type="radio" name="q1" value="Hello Kitty" /> Hello Kitty<br />
    </div>

    <div class="question">
      <p>2. Which Sanrio character is black and has a blue collar?</p>
      <input type="radio" name="q2" value="Pompompurin" /> Pompompurin<br />
      <input type="radio" name="q2" value="Chococat" /> Chococat<br />
      <input type="radio" name="q2" value="Keroppi" /> Keroppi<br />
    </div>

    <div class="question">
      <p>3. Which Sanrio character is a mischievous rival of My Melody?</p>
      <input type="radio" name="q3" value="Kuromi" /> Kuromi<br />
      <input type="radio" name="q3" value="Chococat" /> Chococat<br />
      <input type="radio" name="q3" value="Badtz-Maru" /> Badtz-Maru<br />
    </div>

    <button onclick="checkAnswers()">Submit Answers</button>
    <div class="result" id="result"></div>
  </div>

  <script> 
    function checkAnswers() {
      let score = 0;
      const answers = {
        q1: "Badtz-maru",
        q2: "Chococat",
        q3: "Kuromi"
      };

      for (let q in answers) {
        let selected = document.querySelector(`input[name="${q}"]:checked`);
        if (selected && selected.value === answers[q]) {
          score++;
        }
      }

      const result = document.getElementById("result");
      result.innerText = `You got ${score} out of 3 correct!`;
    }
  </script>
</body>
</html>

