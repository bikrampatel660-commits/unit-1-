// javascript

const btn = document.getElementById("regBtn");
btn.onclick = () => {
  const n = name.value.trim(), e = email.value.trim(), ev = event.value;
  if (!n || !e || !ev) return alert("⚠️ Fill all fields!");
  if (!confirm(`Register ${n} for ${ev}?`)) return;
  list.innerHTML += `<li>${n} (${ev})</li>`;
  alert("✅ Registered!");
  if (confirm("Visit fest website?")) location.href = "https://www.example.com";
  name.value = email.value = event.value = "";
};
