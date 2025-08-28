// Load saved sessions from localStorage
document.addEventListener("DOMContentLoaded", loadSessions);

const form = document.getElementById("session-form");
const sessionList = document.getElementById("session-list");

// Handle form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const spot = document.getElementById("spot").value;
  const date = document.getElementById("date").value;
  const waveHeight = document.getElementById("waveHeight").value;
  const conditions = document.getElementById("conditions").value;
  const notes = document.getElementById("notes").value;

  const session = { spot, date, waveHeight, conditions, notes };

  saveSession(session);
  displaySession(session);

  form.reset();
});

// Save session to localStorage
function saveSession(session) {
  let sessions = JSON.parse(localStorage.getItem("sessions")) || [];
  sessions.push(session);
  localStorage.setItem("sessions", JSON.stringify(sessions));
}

// Display sessions on page
function displaySession(session) {
  const li = document.createElement("li");
  li.classList.add("session-item");
  li.innerHTML = `
    <strong>${session.spot}</strong> - ${session.date} <br>
    🌊 ${session.waveHeight} ft | ${session.conditions} <br>
    📝 ${session.notes}
  `;
  sessionList.appendChild(li);
}

// Load sessions from storage when page loads
function loadSessions() {
  let sessions = JSON.parse(localStorage.getItem("sessions")) || [];
  sessions.forEach(displaySession);
}
