const quiz = [
  {q:"JS is a ___ language?", o:["Markup","Programming","Database"], a:"Programming"},
  {q:"Keyword to declare variable?", o:["var","let","const","All"], a:"All"},
  {q:"Symbol to end statement?", o:[";",":",".","!"], a:";"},
  {q:"Who developed JS?", o:["Google","Netscape","Microsoft"], a:"Netscape"}
];

let i = 0, score = 0;
const q = document.getElementById("question"),
      o = document.getElementById("options"),
      r = document.getElementById("result"),
      n = document.getElementById("nextBtn");

function load() {
  q.textContent = quiz[i].q;
  o.innerHTML = "";
  quiz[i].o.forEach(opt => {
    let div = document.createElement("div");
    div.textContent = opt;
    div.className = "option";
    div.onclick = () => check(opt, div);
    o.appendChild(div);
  });
  r.textContent = "";
}

function check(opt, el) {
  const correct = quiz[i].a;
  if (opt === correct) {
    score++;
    el.style.background = "#22c55e";
  } else {
    el.style.background = "#ef4444";
  }
  setTimeout(() => {
    i++;
    i < quiz.length ? load() : end();
  }, 600);
}

function end() {
  q.textContent = "🎉 Quiz Completed!";
  o.innerHTML = "";
  r.innerHTML = `Your Score: <strong>${score}/${quiz.length}</strong>`;
  n.style.display = "none";
}

n.onclick = () => i < quiz.length ? load() : end();
load();
