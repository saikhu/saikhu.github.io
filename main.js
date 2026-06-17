/* =========================================================================
   Usman Asim Saikhu — Personal Portfolio
   Theme toggle · scrollspy · scroll-reveal
   ========================================================================= */
(function () {
  'use strict';

  var root = document.documentElement;
  var THEME_KEY = 'uas-theme';
  var prefersReduced = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ----------------------------- Theme toggle ----------------------------- */
  var toggle = document.querySelector('.theme-toggle');
  var glyph = toggle ? toggle.querySelector('.theme-glyph') : null;

  function syncGlyph() {
    if (!glyph) return;
    var dark = root.classList.contains('theme-dark');
    glyph.textContent = dark ? '☀' : '☾'; // ☀ / ☾
    if (toggle) {
      toggle.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    }
  }

  syncGlyph();

  if (toggle) {
    toggle.addEventListener('click', function () {
      var dark = root.classList.toggle('theme-dark');
      try {
        localStorage.setItem(THEME_KEY, dark ? 'dark' : 'light');
      } catch (e) {}
      syncGlyph();
    });
  }

  /* --------------------------- Scroll progress bar ------------------------- */
  var progress = document.querySelector('.scroll-progress');
  if (progress) {
    var progressTicking = false;
    var updateProgress = function () {
      var doc = root;
      var scrollable = (doc.scrollHeight - doc.clientHeight) || 1;
      var ratio = Math.min(1, Math.max(0, window.scrollY / scrollable));
      progress.style.transform = 'scaleX(' + ratio + ')';
      progressTicking = false;
    };
    window.addEventListener('scroll', function () {
      if (!progressTicking) {
        window.requestAnimationFrame(updateProgress);
        progressTicking = true;
      }
    }, { passive: true });
    window.addEventListener('resize', updateProgress);
    updateProgress();
  }

  /* ----------------------------- Scroll reveal ---------------------------- */
  var reveals = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));

  function show(el) {
    var delay = parseInt(el.getAttribute('data-reveal-delay') || '0', 10);
    if (delay > 0 && !prefersReduced) {
      el.style.transitionDelay = delay + 'ms';
      // Clear the delay once the entrance has played so it never affects later transitions.
      window.setTimeout(function () {
        el.style.transitionDelay = '';
      }, delay + 850);
    }
    el.classList.add('is-visible');
  }

  if (prefersReduced) {
    // CSS already shows everything; nothing to animate.
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var inViewport = function (el) {
      var r = el.getBoundingClientRect();
      var vh = window.innerHeight || root.clientHeight;
      return r.top < vh * 0.93 && r.bottom > 0;
    };

    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            show(entry.target);
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -7% 0px' });
      reveals.forEach(function (el) { io.observe(el); });
    }

    // Immediate pass: reveal anything already on screen at load.
    var immediatePass = function () {
      reveals.forEach(function (el) {
        if (!el.classList.contains('is-visible') && inViewport(el)) show(el);
      });
    };
    immediatePass();

    // Scroll-listener fallback for environments where IO is unreliable.
    var onScroll = function () {
      var pending = false;
      reveals.forEach(function (el) {
        if (!el.classList.contains('is-visible')) {
          if (inViewport(el)) show(el);
          else pending = true;
        }
      });
      if (!pending) {
        window.removeEventListener('scroll', scrollHandler);
        window.removeEventListener('resize', scrollHandler);
      }
    };
    var scrollHandler = function () { window.requestAnimationFrame(onScroll); };
    window.addEventListener('scroll', scrollHandler, { passive: true });
    window.addEventListener('resize', scrollHandler);

    // Safety net: force everything visible after ~1.8s.
    window.setTimeout(function () {
      reveals.forEach(function (el) { el.classList.add('is-visible'); });
    }, 1800);
  }

  /* ------------------------------- Scrollspy ------------------------------ */
  var navLinks = {};
  document.querySelectorAll('.nav-link[data-nav]').forEach(function (link) {
    navLinks[link.getAttribute('data-nav')] = link;
  });

  // Map each watched section id to the nav link that should light up.
  var spyMap = {
    experience: 'experience',
    publications: 'publications'
  };
  var watched = Object.keys(spyMap)
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);

  function setActive(navKey) {
    Object.keys(navLinks).forEach(function (key) {
      navLinks[key].classList.toggle('is-active', key === navKey);
    });
  }

  if ('IntersectionObserver' in window && watched.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var navKey = spyMap[entry.target.id];
          if (navKey) setActive(navKey);
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    watched.forEach(function (sec) { spy.observe(sec); });
  }
})();
