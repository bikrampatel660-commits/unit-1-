const fields = ["kine","email","pos","about"];
fields.forEach(id => document.getElementById(id).oninput = show);

function show(){
  const kine = document.getElementById("kine").value || "-";
  const email = document.getElementById("email").value || "-";
  const pos = document.getElementById("pos").value || "-";
  const about = document.getElementById("about").value || "-";
  document.getElementById("preview").innerHTML =
    `<p><b>Name:</b> ${kine}</p>
     <p><b>Email:</b> ${email}</p>
     <p><b>Position:</b> ${pos}</p>
     <p><b>About:</b> ${about}</p>`;
}

document.getElementById("submitBtn").onclick = () => {
  for (let id of fields) {
    if (!document.getElementById(id).value.trim()) {
      return alert(`⚠️ Fill ${id}!`);
    }
  }
  alert("✅ Application Submitted!");
  fields.forEach(id => document.getElementById(id).value = "");
  document.getElementById("preview").innerHTML = "Fill details to preview...";
};
