const menuBtn = document.querySelector("#menu-btn i");
const navLinks = document.querySelector("#nav-links ");

menuBtn.addEventListener("click", (e) => {
  // navlinks 'e open class ekle çıkar
  navLinks.classList.toggle("open");
  // eğer open classı eklendiyse closeBtn e çevir

  const isOpen = navLinks.classList.contains("open");

  // MenuBtn içeriği belirle
  menuBtn.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});
