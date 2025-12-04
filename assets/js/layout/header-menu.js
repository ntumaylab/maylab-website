(function () {
  const BREAKPOINT = 850;
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const dropdown = document.querySelector('.dropdown');
  const dropbtn = dropdown ? dropdown.querySelector('.dropbtn') : null;
  const dropdownContent = dropdown ? dropdown.querySelector('.dropdown-content') : null;

  const isDesktop = () => window.innerWidth > BREAKPOINT;

  function closeMobileMenu() {
    navLinks?.classList.remove('show');
    dropdownContent?.classList.remove('show');
  }

  function closeDesktopDropdown() {
    dropdown?.classList.remove('is-open');
  }

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  if (dropbtn && dropdownContent) {
    // Mobile toggle
    dropbtn.addEventListener('click', (event) => {
      if (isDesktop()) {
        return; // Desktop 交給 hover 處理
      }
      event.preventDefault();
      dropdownContent.classList.toggle('show');
    });
  }

  if (dropdown && dropdownContent) {
    dropdown.addEventListener('mouseenter', () => {
      if (isDesktop()) {
        dropdown.classList.add('is-open');
      }
    });

    dropdown.addEventListener('mouseleave', () => {
      if (isDesktop()) {
        closeDesktopDropdown();
      }
    });
  }

  document.addEventListener('click', (event) => {
    if (!dropdown) return;

    if (isDesktop()) {
      if (!dropdown.contains(event.target)) {
        closeDesktopDropdown();
      }
    } else {
      if (!dropdown.contains(event.target)) {
        dropdownContent?.classList.remove('show');
      }
    }
  });

  window.addEventListener('resize', () => {
    if (isDesktop()) {
      dropdownContent?.classList.remove('show');
      closeDesktopDropdown();
    } else {
      closeMobileMenu();
    }
  });
})();

