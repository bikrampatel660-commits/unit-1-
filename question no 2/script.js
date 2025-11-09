// javascript

document.getElementById('calcBtn').onclick = () => {
  const name = document.getElementById('name').value.trim();
  const marks = document.querySelectorAll('.marks');
  let total = 0, count = 0;
  for (let m of marks) {
    let val = +m.value;
    if (val >= 0 && val <= 100) { total += val; count++; }
  }
  if (count !== marks.length) return alert("Enter valid marks 0–100");
  const avg = total / count;
  let grade = avg >= 90 ? 'A+' : avg >= 80 ? 'A' : avg >= 70 ? 'B' : avg >= 60 ? 'C' : avg >= 50 ? 'D' : 'F';
  const res = document.getElementById('result');
  res.innerHTML = `<p>${name || "Student"} - Avg: ${avg.toFixed(2)} | Grade: ${grade}</p>`;
  res.style.display = 'block';
};
