/* ISH Info — inline SVG icon sprite. Injected at the point this script tag sits
   (must be placed as the first element inside <body>) so <use> references
   resolve before the rest of the page paints. */
(function () {
  var ICONS = {
    "menu": '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>',
    "x": '<line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/>',
    "chevron-down": '<polyline points="6 9 12 15 18 9"/>',
    "arrow-right": '<line x1="4" y1="12" x2="20" y2="12"/><polyline points="14 6 20 12 14 18"/>',
    "play": '<circle cx="12" cy="12" r="9"/><polygon points="10 8 16 12 10 16"/>',
    "download": '<path d="M12 3v12"/><polyline points="7 11 12 16 17 11"/><path d="M5 19h14"/>',
    "check": '<polyline points="5 13 10 18 19 7"/>',
    "check-circle": '<circle cx="12" cy="12" r="9"/><polyline points="8 12.5 11 15.5 16 9"/>',
    "shield-check": '<path d="M12 3l7 3v6c0 5-3.2 7.8-7 9-3.8-1.2-7-4-7-9V6l7-3z"/><polyline points="9 12 11.5 14.5 15.5 10"/>',
    "zap": '<polygon points="13 2 4 14 11 14 10 22 20 9 13 9 13 2"/>',
    "layers": '<polygon points="12 3 21 8 12 13 3 8 12 3"/><polyline points="3 13 12 18 21 13"/><polyline points="3 17.5 12 22 21 17.5"/>',
    "users": '<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.6"/><path d="M15.5 14c2.6.4 4.5 2.6 4.5 5.4"/>',
    "user": '<circle cx="12" cy="8" r="3.6"/><path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7"/>',
    "bar-chart": '<line x1="5" y1="20" x2="5" y2="11"/><line x1="12" y1="20" x2="12" y2="6"/><line x1="19" y1="20" x2="19" y2="14"/>',
    "clock": '<circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 16 14"/>',
    "credit-card": '<rect x="3" y="6" width="18" height="13" rx="2"/><line x1="3" y1="10.5" x2="21" y2="10.5"/><line x1="6.5" y1="15" x2="10" y2="15"/>',
    "globe": '<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><line x1="3" y1="12" x2="21" y2="12"/>',
    "calendar": '<rect x="3.5" y="5" width="17" height="16" rx="2"/><line x1="3.5" y1="10" x2="20.5" y2="10"/><line x1="8" y1="3" x2="8" y2="7"/><line x1="16" y1="3" x2="16" y2="7"/>',
    "book-open": '<path d="M12 6c-2-1.5-5-2-8-1v13c3-1 6-.5 8 1 2-1.5 5-2 8-1V5c-3-1-6-.5-8 1z"/><line x1="12" y1="6" x2="12" y2="19"/>',
    "briefcase": '<rect x="3" y="8" width="18" height="12" rx="2"/><path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="3" y1="13" x2="21" y2="13"/>',
    "clipboard-check": '<rect x="6" y="4" width="12" height="17" rx="2"/><rect x="9" y="2.3" width="6" height="3.4" rx="1"/><polyline points="9 13 11 15 15.5 10"/>',
    "clipboard-list": '<rect x="6" y="4" width="12" height="17" rx="2"/><rect x="9" y="2.3" width="6" height="3.4" rx="1"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="15" y2="16"/>',
    "target": '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.6"/>',
    "award": '<circle cx="12" cy="9" r="5.5"/><polyline points="8.5 13.8 7 21 12 18.5 17 21 15.5 13.8"/>',
    "building": '<rect x="5" y="3" width="14" height="18" rx="1"/><line x1="8.5" y1="7" x2="8.5" y2="7.01"/><line x1="12" y1="7" x2="12" y2="7.01"/><line x1="15.5" y1="7" x2="15.5" y2="7.01"/><line x1="8.5" y1="11" x2="8.5" y2="11.01"/><line x1="12" y1="11" x2="12" y2="11.01"/><line x1="15.5" y1="11" x2="15.5" y2="11.01"/><line x1="8.5" y1="15" x2="8.5" y2="15.01"/><line x1="15.5" y1="15" x2="15.5" y2="15.01"/><path d="M10 21v-3.5a2 2 0 0 1 4 0V21"/>',
    "map-pin": '<path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21z"/><circle cx="12" cy="9.3" r="2.3"/>',
    "mail": '<rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="3.5 6 12 13 20.5 6"/>',
    "phone": '<path d="M6.5 3.5l3 3-1.8 3.2a13 13 0 0 0 6.6 6.6l3.2-1.8 3 3-1.3 2.6a2.5 2.5 0 0 1-2.7 1.3C10.8 20.3 3.7 13.2 2.6 7.5a2.5 2.5 0 0 1 1.3-2.7z"/>',
    "graduation-cap": '<path d="M2 9l10-4.5L22 9l-10 4.5L2 9z"/><path d="M6 11.5v4.5c0 1.5 3 3 6 3s6-1.5 6-3v-4.5"/><line x1="22" y1="9" x2="22" y2="15.5"/>',
    "file-text": '<path d="M7 3h7l4 4v14H7z"/><polyline points="14 3 14 7 18 7"/><line x1="9.5" y1="12" x2="14.5" y2="12"/><line x1="9.5" y1="15.5" x2="14.5" y2="15.5"/>',
    "settings": '<circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.15-1.4l2-1.6-2-3.4-2.4.9a7 7 0 0 0-2.4-1.4L13.6 3h-3.2l-.4 2.5a7 7 0 0 0-2.4 1.4l-2.4-.9-2 3.4 2 1.6a7 7 0 0 0 0 2.8l-2 1.6 2 3.4 2.4-.9a7 7 0 0 0 2.4 1.4l.4 2.5h3.2l.4-2.5a7 7 0 0 0 2.4-1.4l2.4.9 2-3.4-2-1.6c.1-.4.15-.9.15-1.4z"/>',
    "trending-up": '<polyline points="3 16 10 9 14 13 21 5"/><polyline points="15 5 21 5 21 11"/>',
    "database": '<ellipse cx="12" cy="5.5" rx="8" ry="3"/><path d="M4 5.5v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/><path d="M4 11.5v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
    "handshake": '<path d="M2 13l4.5-4.5L9 11l3-3 3 3 2.5-2.5L22 13"/><path d="M9 11l2 2-2 2"/><path d="M15 11l-2 2 2 2"/>',
    "search": '<circle cx="10.5" cy="10.5" r="6.5"/><line x1="15.5" y1="15.5" x2="21" y2="21"/>',
    "message-square": '<path d="M4 4h16v12H8l-4 4V4z"/>',
    "headset": '<path d="M4 13v-1a8 8 0 0 1 16 0v1"/><rect x="3" y="13" width="4" height="6" rx="1.5"/><rect x="17" y="13" width="4" height="6" rx="1.5"/><path d="M19 19v1a3 3 0 0 1-3 3h-3"/>',
    "monitor": '<rect x="3" y="4" width="18" height="12" rx="1.5"/><line x1="8" y1="20" x2="16" y2="20"/><line x1="12" y1="16" x2="12" y2="20"/>',
    "star": '<polygon points="12 2.5 15 9 22 9.8 17 14.5 18.3 21.5 12 18 5.7 21.5 7 14.5 2 9.8 9 9 12 2.5"/>',
    "lock": '<rect x="5" y="10.5" width="14" height="10" rx="2"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/>',
    "linkedin": '<rect x="3" y="3" width="18" height="18" rx="3"/><line x1="7.5" y1="10" x2="7.5" y2="17"/><circle cx="7.5" cy="6.8" r="1.3"/><path d="M11 17v-7"/><path d="M11 12.8c0-1.5 1.2-2.8 2.8-2.8s2.7 1.2 2.7 2.8V17"/>',
    "twitter": '<path d="M21 5.5c-.7.4-1.5.6-2.3.8a3.6 3.6 0 0 0-6.1 3.3A10.2 10.2 0 0 1 5 4.9a3.6 3.6 0 0 0 1.1 4.8 3.5 3.5 0 0 1-1.6-.4v.1a3.6 3.6 0 0 0 2.9 3.5c-.5.1-1 .2-1.6.1a3.6 3.6 0 0 0 3.4 2.5A7.3 7.3 0 0 1 3 16.9a10.3 10.3 0 0 0 5.5 1.6c6.6 0 10.2-5.5 10.2-10.2v-.5c.7-.5 1.3-1.1 1.8-1.8-.6.3-1.3.5-2 .6.7-.4 1.3-1.1 1.5-2z"/>',
    "rocket": '<path d="M14 3c3 0 6 3 6 6-3 1-6 4-7 7l-4-4c3-1 6-4 5-9z"/><path d="M9 15l-4.5 1.5L6 12"/><circle cx="15" cy="8" r="1.4"/><path d="M7 17c-1.5 0-3 1.5-3 3 1.5 0 3-1.5 3-3z"/>',
    "filter": '<polygon points="4 4 20 4 14 12.5 14 19 10 21 10 12.5 4 4"/>',
    "pie-chart": '<circle cx="12" cy="12" r="9"/><path d="M12 3v9l7.8-4.5A9 9 0 0 0 12 3z"/>',
    "image": '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9.5" r="1.6"/><path d="M21 15.5l-5.5-5.5L4 20.5"/>',
    "shuffle": '<polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/>'
  };

  var symbols = "";
  for (var key in ICONS) {
    symbols += '<symbol id="i-' + key + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + ICONS[key] + "</symbol>";
  }
  var wrap = document.createElement("div");
  wrap.innerHTML = '<svg style="position:absolute;width:0;height:0;overflow:hidden" aria-hidden="true">' + symbols + "</svg>";
  var script = document.currentScript;
  script.parentNode.insertBefore(wrap.firstChild, script.nextSibling);
})();
