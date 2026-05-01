/* ============================
   script.js
   Ayam Geprek Super Crispy
   ============================ */

/* ----------------------------
   1. JAM & TANGGAL REAL-TIME
   Format: DD/MM/YYYY, HH.MM.SS
   ---------------------------- */
function updateDateTime() {
  const now = new Date();

  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  const dateTimeString = `${day}/${month}/${year}, ${hours}.${minutes}.${seconds}`;

  document.getElementById("datetime").textContent = dateTimeString;
}

setInterval(updateDateTime, 1000);
updateDateTime(); // Panggil langsung agar tidak ada jeda 1 detik saat load

/* ----------------------------
   2. SMOOTH SCROLL
   Untuk semua link internal (#)
   ---------------------------- */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
