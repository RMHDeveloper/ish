document.addEventListener("DOMContentLoaded", function () {
  /* ---------- Mobile nav toggle ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  var scrim = document.querySelector(".nav-scrim");
  var closeBtn = document.querySelector(".nav-close");

  function openNav() {
    nav.classList.add("open");
    scrim.classList.add("show");
    toggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }
  function closeNav() {
    nav.classList.remove("open");
    scrim.classList.remove("show");
    toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
    document.querySelectorAll(".nav-item-dropdown.open").forEach(function (el) {
      el.classList.remove("open");
    });
  }
  if (toggle && nav && scrim) {
    toggle.addEventListener("click", function () {
      nav.classList.contains("open") ? closeNav() : openNav();
    });
    scrim.addEventListener("click", closeNav);
  }
  if (closeBtn) closeBtn.addEventListener("click", closeNav);

  /* ---------- Dropdown (Solutions) — click toggle for touch/mobile, hover handled by CSS on desktop ---------- */
  document.querySelectorAll(".nav-item-dropdown > .nav-link").forEach(function (link) {
    link.addEventListener("click", function (e) {
      var isMobile = window.matchMedia("(max-width: 980px)").matches;
      var parent = link.parentElement;
      if (isMobile) {
        e.preventDefault();
        var wasOpen = parent.classList.contains("open");
        document.querySelectorAll(".nav-item-dropdown.open").forEach(function (el) {
          el.classList.remove("open");
        });
        if (!wasOpen) parent.classList.add("open");
      }
    });
  });

  /* Close any open dropdown on outside click, Escape, or scroll (prevents a stuck-open panel) */
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".nav-item-dropdown")) {
      document.querySelectorAll(".nav-item-dropdown.open").forEach(function (el) {
        el.classList.remove("open");
      });
    }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      document.querySelectorAll(".nav-item-dropdown.open").forEach(function (el) {
        el.classList.remove("open");
      });
    }
  });

  /* Close mobile nav when a real link is followed */
  document.querySelectorAll(".main-nav a:not(.nav-item-dropdown > .nav-link)").forEach(function (a) {
    a.addEventListener("click", function () {
      if (window.matchMedia("(max-width: 980px)").matches) closeNav();
    });
  });

  /* ---------- Active nav link by current page ---------- */
  var path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link[data-page]").forEach(function (a) {
    if (a.getAttribute("data-page") === path) a.classList.add("active");
  });

  /* ---------- Image fallback ---------- */
  document.querySelectorAll(".media-frame img").forEach(function (img) {
    img.addEventListener("error", function () {
      img.closest(".media-frame").classList.add("img-broken");
    });
  });

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- Footer year ---------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- Contact / demo request form -> mailto ---------- */
  var form = document.getElementById("demo-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      var data = new FormData(form);
      var interests = data.getAll("interest").join(", ") || "Not specified";
      var lines = [
        "Name: " + (data.get("name") || ""),
        "Designation: " + (data.get("designation") || ""),
        "Institution: " + (data.get("institution") || ""),
        "Institution Type: " + (data.get("institution_type") || ""),
        "Enrollment Size: " + (data.get("enrollment_size") || ""),
        "Mobile: " + (data.get("mobile") || ""),
        "Email: " + (data.get("email") || ""),
        "City & State: " + (data.get("city_state") || ""),
        "Looking for: " + interests,
        "",
        "Message:",
        data.get("message") || "(none)"
      ];
      var subject = encodeURIComponent("Demo Request — " + (data.get("institution") || (data.get("name") || "New Enquiry")));
      var body = encodeURIComponent(lines.join("\n"));
      window.location.href = "mailto:ish@ishinfo.com?subject=" + subject + "&body=" + body;

      var success = document.getElementById("form-success");
      if (success) success.classList.add("show");
      form.reset();
    });
  }
});
