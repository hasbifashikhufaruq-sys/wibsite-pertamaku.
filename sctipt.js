conts tombolWarna = document.getElementById("tombolWarna");
conts pesan = document.getElementById("pesan")
conts daftarWarna = ["#ffe5e5", "#e5f0ff", "#e5ffe9", "#fff6e5", "#f3e5ff"];
let index = 0;
tombolWarna.addEventListener("click", function () {
  index = (index + 1) % daftarWarna.length;
  document.body.style.background = daftarWarna[index];
  pesan.textContent = "Tombol sudah diketik " + (index + 1) + "kali.";
});
