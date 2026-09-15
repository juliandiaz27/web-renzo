(function () {
  document.querySelectorAll("[data-site-nav-toggle]").forEach(function (btn) {
    var id = btn.getAttribute("aria-controls");
    var panel = id ? document.getElementById(id) : null;
    if (!panel) return;

    var iconMenu = btn.querySelector("[data-nav-icon-menu]");
    var iconClose = btn.querySelector("[data-nav-icon-close]");

    function setOpen(open) {
      panel.classList.toggle("hidden", !open);
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      if (iconMenu && iconClose) {
        iconMenu.classList.toggle("hidden", open);
        iconClose.classList.toggle("hidden", !open);
      }
      document.body.classList.toggle("site-nav-open", open);
    }

    btn.addEventListener("click", function () {
      setOpen(panel.classList.contains("hidden"));
    });

    panel.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setOpen(false);
      });
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    document.querySelectorAll("[data-site-nav-toggle]").forEach(function (btn) {
      var panel = document.getElementById(btn.getAttribute("aria-controls"));
      if (panel && !panel.classList.contains("hidden")) {
        panel.classList.add("hidden");
        btn.setAttribute("aria-expanded", "false");
        var iconMenu = btn.querySelector("[data-nav-icon-menu]");
        var iconClose = btn.querySelector("[data-nav-icon-close]");
        if (iconMenu && iconClose) {
          iconMenu.classList.remove("hidden");
          iconClose.classList.add("hidden");
        }
        document.body.classList.remove("site-nav-open");
      }
    });
  });
})();
