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

  // Add custom feedback based on score
  if (score === 3) {
    result.style.color = "green";
    result.innerText += " Great job! You're a true Sanrio fan!";
  } else if (score === 2) {
    result.style.color = "orange";
    result.innerText += " Not bad! You're almost there!";
  } else {
    result.style.color = "red";
    result.innerText += " Keep trying! You can do it!";
  }
}
