
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

