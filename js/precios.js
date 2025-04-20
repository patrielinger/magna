document.addEventListener("DOMContentLoaded", () => {
    const modalButtons = document.querySelectorAll(".open-modal");
  
    modalButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-target");
        const modal = document.getElementById(targetId);
        if (modal) {
          modal.style.display = "block";
        }
      });
    });
  
    const closeButtons = document.querySelectorAll(".close2");
    closeButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.closest(".modal2").style.display = "none";
      });
    });
  
    window.addEventListener("click", (e) => {
      const modals = document.querySelectorAll(".modal2");
      modals.forEach((modal) => {
        if (e.target === modal) {
          modal.style.display = "none";
        }
      });
    });
  });
  