document.addEventListener('DOMContentLoaded', function () {

  /* Navbar: Schatten/Rand sobald gescrollt wird */
  const nav = document.getElementById('mainNav');
  const onScroll = () => {
    if (window.scrollY > 8) {
      nav.classList.add('is-scrolled');
    } else {
      nav.classList.remove('is-scrolled');
    }
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* Kontakt: Dropdown schaltet zwischen den Panels um */
  const dropdownItems = document.querySelectorAll('#kontaktDropdown ~ .dropdown-menu .dropdown-item');
  const dropdownLabel = document.getElementById('kontaktDropdownLabel');
  const panels = document.querySelectorAll('.kontakt-panel');

  dropdownItems.forEach((item) => {
    item.addEventListener('click', () => {
      const target = item.getAttribute('data-panel');

      panels.forEach((panel) => {
        panel.classList.toggle('active', panel.getAttribute('data-panel') === target);
      });

      dropdownLabel.textContent = item.textContent;
    });
  });

  /* Footer: aktuelles Jahr */
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});