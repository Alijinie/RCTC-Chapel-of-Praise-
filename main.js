// RCBC Chapel of Praise - Vanilla JavaScript Application Logic
// Single Page Application (SPA) Controller

// --- DATA STORE ---
export const CHURCH_DATA = {
  name: "RCBC Chapel of Praise",
  subtitle: "Main Campus · Redemption City",
  motto: "Raising Christ's Ambassadors",
  location: "Christ's Ambassadors Road, RCBC Main Campus, Redemption City, Ogun State",
  services: [
    { name: "Sunday Celebration Service", time: "8:00 AM - 10:30 AM", day: "Every Sunday", location: "Main Sanctuary & Youth Church" },
    { name: "Tuesday Digging Deep", time: "6:00 PM - 7:30 PM", day: "Every Tuesday", location: "Main Sanctuary" },
    { name: "Thursday Faith Clinic", time: "6:00 PM - 7:30 PM", day: "Every Thursday", location: "Main Sanctuary" }
  ],
  congregations: {
    sanctuary: {
      id: "sanctuary",
      name: "Main Sanctuary",
      badge: "CONSECRATION & WORD",
      time: "Sundays · 8:00 AM",
      venue: "Chapel of Praise Main Auditorium",
      description: "The primary worship gathering of RCBC faculty, student ministers, campus residents, and visiting families. Rooted in deep reverent praise, biblical exposition, and corporate prayer.",
      features: ["Traditional & contemporary hymns", "Expository biblical teaching", "Holy Communion first Sundays", "Infant dedication & family blessing"]
    },
    youth: {
      id: "youth",
      name: "Youth Church (Ignite & Deploy)",
      badge: "FIRE & MISSIONS",
      time: "Sundays · 8:00 AM",
      venue: "RCBC Youth Arena (Hall B)",
      description: "A vibrant, spirit-led atmosphere engineered for young professionals, undergraduate Bible college scholars, and youths across Redemption City.",
      features: ["Contemporary high-energy worship", "Real-world ministry leadership", "Discussions on career, marriage & calling", "Campus outreaches & creative media"]
    },
    teens: {
      id: "teens",
      name: "Teenagers Church (The Overflow)",
      badge: "FOUNDATIONS & PURPOSE",
      time: "Sundays · 8:00 AM",
      venue: "Junior Chapel Pavilion",
      description: "Specially curated for teenagers aged 13 to 19 to establish unshakable biblical roots before stepping out into higher education and the global arena.",
      features: ["Interactive Q&A scripture breakdown", "Peer discipleship & mentorship", "Academic excellence workshops", "Talent development in drama & music"]
    }
  },
  sermons: [
    {
      id: "sermon-1",
      title: "Ambassadors of Another Kingdom",
      preacher: "The Chaplain",
      scripture: "2 Corinthians 5:17-21",
      duration: "48 min",
      category: "Sanctuary",
      date: "Sunday, 30 Aug",
      summary: "Understanding our supernatural diplomatic immunity and heaven's authority as believers deployed into academia, marketplace, and ministry."
    },
    {
      id: "sermon-2",
      title: "Arise and Shine: Consecrated Youth",
      preacher: "Pastor Emmanuel O.",
      scripture: "Isaiah 60:1-3",
      duration: "42 min",
      category: "Youth",
      date: "Sunday, 23 Aug",
      summary: "A clarion call to student ministers and young believers to radiate divine light amid dark worldly compromises."
    },
    {
      id: "sermon-3",
      title: "Rooted in Sound Doctrine",
      preacher: "Prof. Adebayo",
      scripture: "1 Timothy 4:12-16",
      duration: "54 min",
      category: "Sanctuary",
      date: "Tuesday, 18 Aug",
      summary: "An in-depth Digging Deep exposition on preserving the apostolic foundations in contemporary culture."
    },
    {
      id: "sermon-4",
      title: "Guarding Your Youthful Vessel",
      preacher: "Sister Grace K.",
      scripture: "Psalm 119:9-11",
      duration: "36 min",
      category: "Teens",
      date: "Sunday, 16 Aug",
      summary: "Practical tools for teenagers to navigate social pressure, digital distractions, and moral purity with God's Word."
    },
    {
      id: "sermon-5",
      title: "The Holy Spirit in Field Evangelism",
      preacher: "Student Minister David",
      scripture: "Acts 1:8",
      duration: "39 min",
      category: "Student ministers",
      date: "Thursday, 13 Aug",
      summary: "Field testimonies and spiritual mechanics of power-evangelism during campus missionary deployments."
    }
  ],
  events: [
    {
      id: "event-1",
      month: "SEP",
      day: "04",
      dayName: "FRI",
      title: "Holy Ghost Service",
      time: "7:00 PM (All Night)",
      location: "Redemption City Arena & Global Broadcast",
      category: "Global RCCG",
      description: "Monthly spiritual convergence of millions of believers across the globe led by Pastor E.A. Adeboye. RCBC campus buses depart 5:00 PM."
    },
    {
      id: "event-2",
      month: "SEP",
      day: "06",
      dayName: "SUN",
      title: "Sunday Celebration & Youth Expression",
      time: "8:00 AM - 10:30 AM",
      location: "Main Sanctuary & Youth Church",
      category: "Sanctuary",
      description: "First Sunday of the month Thanksgiving and communion service. Come and praise the God of all grace."
    },
    {
      id: "event-3",
      month: "SEP",
      day: "08",
      dayName: "TUE",
      title: "Midweek Digging Deep: Systematic Exposition",
      time: "6:00 PM - 7:30 PM",
      location: "Main Sanctuary",
      category: "Sanctuary",
      description: "Verse-by-verse scriptural discipleship and interactive question time for faculty, students, and neighbours."
    },
    {
      id: "event-4",
      month: "SEP",
      day: "10",
      dayName: "THU",
      title: "Faith Clinic & Healing Streams",
      time: "6:00 PM - 7:30 PM",
      location: "Main Sanctuary",
      category: "Sanctuary",
      description: "Focused prayer altar for divine healing, deliverance, supernatural fruitfulness, and breakthrough."
    },
    {
      id: "event-5",
      month: "SEP",
      day: "12",
      dayName: "SAT",
      title: "RCBC Youth Evangelism & Community Care",
      time: "9:00 AM - 1:00 PM",
      location: "Meeting Point: Chapel Forecourt",
      category: "Youth",
      description: "Youth Church street evangelism, welfare distribution, and prayer walk around neighbouring campus environs."
    },
    {
      id: "event-6",
      month: "SEP",
      day: "13",
      dayName: "SUN",
      title: "Teens Academic & Purpose Colloquium",
      time: "11:00 AM - 1:00 PM",
      location: "Junior Chapel Pavilion",
      category: "Teens",
      description: "Interactive session equipping teenagers with examination confidence, career purpose, and spiritual disciplines."
    }
  ]
};

// --- APP STATE ---
let currentTab = 'home';
let activeMediaFilter = 'All';
let activeEventFilter = 'All';
let activeCongregation = 'sanctuary';
let isAudioPlaying = false;
let currentPlayingSermon = null;
let audioProgress = 0;
let audioTimer = null;
let leafletMapInstance = null;

// --- TOAST NOTIFICATIONS ---
export function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'pointer-events-auto bg-[#1c1917] text-white px-4 py-3 rounded-2xl shadow-xl border border-stone-700 flex items-center gap-2.5 text-xs sm:text-sm animate-fadeIn max-w-sm transition-all duration-300';
  
  const icon = type === 'success' 
    ? `<svg class="w-4 h-4 text-emerald-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>`
    : `<svg class="w-4 h-4 text-rose-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;

  toast.innerHTML = `
    ${icon}
    <span class="flex-1">${message}</span>
    <button class="text-stone-400 hover:text-white ml-2 text-base leading-none">&times;</button>
  `;

  toast.querySelector('button').onclick = () => {
    toast.remove();
  };

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// --- TAB SWITCHING ---
export function switchTab(tabId) {
  currentTab = tabId;

  // 1. Hide all tab contents, show active
  const tabs = document.querySelectorAll('.tab-view');
  tabs.forEach(t => {
    if (t.id === `tab-${tabId}`) {
      t.classList.remove('hidden');
    } else {
      t.classList.add('hidden');
    }
  });

  // 2. Update Top Desktop Nav Links
  const navLinks = document.querySelectorAll('[data-nav-tab]');
  navLinks.forEach(link => {
    const target = link.getAttribute('data-nav-tab');
    if (target === tabId) {
      link.className = "text-[#80182a] font-bold border-b-2 border-[#80182a] pb-0.5 px-2 transition-colors cursor-pointer text-xs";
    } else {
      link.className = "text-stone-600 hover:text-stone-900 font-medium px-2 transition-colors cursor-pointer text-xs";
    }
  });

  // 3. Update Mobile Bottom Dock
  const dockButtons = document.querySelectorAll('[data-dock-tab]');
  dockButtons.forEach(btn => {
    const target = btn.getAttribute('data-dock-tab');
    const label = btn.querySelector('.dock-label');
    const icon = btn.querySelector('.dock-icon');

    if (target === tabId) {
      btn.className = "dock-btn px-3 py-1.5 rounded-full bg-stone-800 text-white flex items-center gap-1.5 transition-all text-xs font-semibold shadow-inner";
      if (label) label.classList.remove('hidden');
      if (icon) icon.className = "dock-icon w-4 h-4 text-rose-300";
    } else {
      btn.className = "dock-btn p-2 rounded-full text-stone-400 hover:text-stone-200 transition-all text-xs";
      if (label) label.classList.add('hidden');
      if (icon) icon.className = "dock-icon w-4 h-4 text-stone-400";
    }
  });

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // If switched to visit tab, trigger Leaflet map resize
  if (tabId === 'visit') {
    setTimeout(initOrResizeMap, 150);
  }
}

// --- COUNTDOWN TIMER (NEXT SUNDAY 8:00 AM) ---
function startSundayCountdown() {
  function getNextSunday8AM() {
    const now = new Date();
    const result = new Date(now);
    const dayOfWeek = now.getDay(); // 0 = Sunday
    let daysUntilSunday = (7 - dayOfWeek) % 7;
    
    // If today is Sunday, check if 8:00 AM has passed
    if (dayOfWeek === 0) {
      const sunday8am = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 8, 0, 0);
      if (now.getTime() >= sunday8am.getTime()) {
        daysUntilSunday = 7;
      }
    }

    result.setDate(now.getDate() + daysUntilSunday);
    result.setHours(8, 0, 0, 0);
    return result;
  }

  const targetDate = getNextSunday8AM();

  function update() {
    const now = new Date().getTime();
    const diff = targetDate.getTime() - now;

    if (diff <= 0) {
      const countdownElem = document.getElementById('sunday-countdown-text');
      if (countdownElem) countdownElem.innerText = "Service in Progress!";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const pad = (n) => String(n).padStart(2, '0');
    const formatted = `${pad(days)}d ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`;

    const countdownElem = document.getElementById('sunday-countdown-text');
    if (countdownElem) {
      countdownElem.innerText = formatted;
    }
  }

  update();
  setInterval(update, 1000);
}

// --- CONGREGATION SWITCHER (MINISTRIES TAB) ---
export function switchCongregation(congId) {
  activeCongregation = congId;
  const data = CHURCH_DATA.congregations[congId];
  if (!data) return;

  // Update pills
  const pills = document.querySelectorAll('[data-cong-pill]');
  pills.forEach(p => {
    const pid = p.getAttribute('data-cong-pill');
    if (pid === congId) {
      p.className = "px-4 py-2 rounded-full text-xs font-bold transition-all bg-[#80182a] text-white shadow-sm";
    } else {
      p.className = "px-4 py-2 rounded-full text-xs font-bold transition-all bg-[#f8f6f0] text-stone-600 hover:bg-stone-200";
    }
  });

  // Update card content
  const badgeElem = document.getElementById('cong-badge');
  const titleElem = document.getElementById('cong-title');
  const timeElem = document.getElementById('cong-time');
  const venueElem = document.getElementById('cong-venue');
  const descElem = document.getElementById('cong-desc');
  const featuresList = document.getElementById('cong-features');

  if (badgeElem) badgeElem.innerText = data.badge;
  if (titleElem) titleElem.innerText = data.name;
  if (timeElem) timeElem.innerText = data.time;
  if (venueElem) venueElem.innerText = data.venue;
  if (descElem) descElem.innerText = data.description;

  if (featuresList) {
    featuresList.innerHTML = data.features.map(f => `
      <li class="flex items-center gap-2 text-xs text-stone-700">
        <svg class="w-3.5 h-3.5 text-[#80182a] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
        <span>${f}</span>
      </li>
    `).join('');
  }
}

// --- MEDIA TAB LOGIC ---
export function filterMedia(category) {
  activeMediaFilter = category;
  
  // Update category buttons
  const buttons = document.querySelectorAll('[data-media-filter]');
  buttons.forEach(btn => {
    const cat = btn.getAttribute('data-media-filter');
    if (cat === category) {
      btn.className = "px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#80182a] text-white shadow-sm transition-all";
    } else {
      btn.className = "px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white border border-stone-200 text-stone-600 hover:bg-stone-100 transition-all";
    }
  });

  // Filter cards
  const cards = document.querySelectorAll('.sermon-card');
  cards.forEach(card => {
    const cardCat = card.getAttribute('data-sermon-cat');
    if (category === 'All' || cardCat === category) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

// Audio Player Simulation
export function playSermon(sermonId) {
  const sermon = CHURCH_DATA.sermons.find(s => s.id === sermonId);
  if (!sermon) return;

  currentPlayingSermon = sermon;
  isAudioPlaying = true;
  audioProgress = 0;

  const playerElem = document.getElementById('floating-audio-player');
  if (playerElem) {
    playerElem.classList.remove('hidden');
    playerElem.querySelector('#audio-title').innerText = sermon.title;
    playerElem.querySelector('#audio-speaker').innerText = `${sermon.preacher} · ${sermon.duration}`;
  }

  showToast(`Now Playing: "${sermon.title}" (${sermon.duration})`, 'success');

  if (audioTimer) clearInterval(audioTimer);
  audioTimer = setInterval(() => {
    if (isAudioPlaying) {
      audioProgress = (audioProgress + 1) % 100;
      const bar = document.getElementById('audio-progress-bar');
      if (bar) bar.style.width = `${audioProgress}%`;
    }
  }, 1000);
}

export function togglePlayPause() {
  isAudioPlaying = !isAudioPlaying;
  const toggleBtn = document.getElementById('audio-play-toggle');
  if (toggleBtn) {
    toggleBtn.innerHTML = isAudioPlaying 
      ? `<svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>`
      : `<svg class="w-5 h-5 text-white ml-0.5" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>`;
  }
}

export function closeAudioPlayer() {
  isAudioPlaying = false;
  currentPlayingSermon = null;
  if (audioTimer) clearInterval(audioTimer);
  const playerElem = document.getElementById('floating-audio-player');
  if (playerElem) playerElem.classList.add('hidden');
}

// --- EVENTS TAB LOGIC ---
export function filterEvents(category) {
  activeEventFilter = category;

  const buttons = document.querySelectorAll('[data-event-filter]');
  buttons.forEach(btn => {
    const cat = btn.getAttribute('data-event-filter');
    if (cat === category) {
      btn.className = "px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#80182a] text-white shadow-sm transition-all";
    } else {
      btn.className = "px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white border border-stone-200 text-stone-600 hover:bg-stone-100 transition-all";
    }
  });

  const cards = document.querySelectorAll('.event-card');
  cards.forEach(card => {
    const cardCat = card.getAttribute('data-event-cat');
    if (category === 'All' || cardCat === category) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

// Download iCalendar .ics file
export function downloadEventReminder(eventId) {
  const evt = CHURCH_DATA.events.find(e => e.id === eventId);
  if (!evt) return;

  const title = `RCBC Chapel of Praise: ${evt.title}`;
  const description = `${evt.description}\nLocation: ${evt.location}`;
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//RCBC Chapel of Praise//Events//EN',
    'BEGIN:VEVENT',
    `SUMMARY:${title}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${evt.location}`,
    `DTSTART:202609${evt.day}T080000Z`,
    `DTEND:202609${evt.day}T110000Z`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `RCBC-${evt.title.replace(/\s+/g, '-').toLowerCase()}.ics`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast(`Reminder saved: "${evt.title}". Calendar file downloaded!`, 'success');
}

// --- VISIT MAP (LEAFLET) ---
function initOrResizeMap() {
  const container = document.getElementById('visit-map-container');
  if (!container) return;

  if (leafletMapInstance) {
    leafletMapInstance.invalidateSize();
    return;
  }

  if (typeof window.L === 'undefined') {
    // Leaflet script loading fallback
    return;
  }

  try {
    const rcbcCoords = [6.8833, 3.4500]; // Redemption City Coordinates

    const map = window.L.map('visit-map-container', {
      center: rcbcCoords,
      zoom: 15,
      zoomControl: false,
    });

    window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    window.L.control.zoom({ position: 'bottomright' }).addTo(map);

    const customIcon = window.L.divIcon({
      className: 'custom-chapel-pin',
      html: `
        <div style="
          background-color: #80182a;
          color: white;
          width: 38px;
          height: 38px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          border: 2px solid white;
        ">
          <svg style="width: 20px; height: 20px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 3v4m-2-2h4" stroke-linecap="round"/>
            <path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9z"/>
          </svg>
        </div>
      `,
      iconSize: [38, 38],
      iconAnchor: [19, 19],
    });

    const marker = window.L.marker(rcbcCoords, { icon: customIcon }).addTo(map);
    marker.bindPopup(`
      <div style="font-family: 'Newsreader', Georgia, serif; font-size: 15px; font-weight: bold; color: #1c1917; padding: 2px;">
        RCBC Chapel of Praise
      </div>
      <div style="font-size: 12px; color: #666; font-family: sans-serif; margin-top: 2px;">
        Christ's Ambassadors Road<br/>Redemption City, Ogun State
      </div>
    `);

    leafletMapInstance = map;
  } catch (err) {
    console.warn("Leaflet map initialization warning:", err);
  }
}

// --- MODALS ---
export function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

export function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

export function copyServiceNotes() {
  const text = `RCBC Chapel of Praise - Holy Ghost Service Notes\nTheme: Raising Christ's Ambassadors\nScripture: 2 Corinthians 5:20, Isaiah 60:1\nLocation: Redemption City, Ogun State\n\nKey Exhortations:\n1. The Altar must remain ablaze through personal study and prayer.\n2. Doctrinal integrity in an evolving global culture.\n3. Every student-minister is sent as an ambassador to the nations.`;
  navigator.clipboard.writeText(text);
  showToast('Holy Ghost Service notes copied to clipboard!', 'success');
}

// Export single self-contained HTML file
export function exportSingleHtml() {
  const clone = document.documentElement.cloneNode(true);
  
  // Remove temporary toast messages from clone
  const cloneToasts = clone.querySelector('#toast-container');
  if (cloneToasts) cloneToasts.innerHTML = '';

  const htmlString = "<!DOCTYPE html>\n" + clone.outerHTML;
  const blob = new Blob([htmlString], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'RCBC_Chapel_of_Praise_Single_Page.html';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast('Single HTML File downloaded successfully!', 'success');
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  // Start dynamic countdown
  startSundayCountdown();

  // Tab buttons click listeners
  document.querySelectorAll('[data-nav-tab]').forEach(elem => {
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      const tab = elem.getAttribute('data-nav-tab');
      switchTab(tab);
    });
  });

  document.querySelectorAll('[data-dock-tab]').forEach(elem => {
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      const tab = elem.getAttribute('data-dock-tab');
      switchTab(tab);
    });
  });

  // Congregation pill listeners
  document.querySelectorAll('[data-cong-pill]').forEach(elem => {
    elem.addEventListener('click', () => {
      const congId = elem.getAttribute('data-cong-pill');
      switchCongregation(congId);
    });
  });

  // Media filter listeners
  document.querySelectorAll('[data-media-filter]').forEach(elem => {
    elem.addEventListener('click', () => {
      const cat = elem.getAttribute('data-media-filter');
      filterMedia(cat);
    });
  });

  // Event filter listeners
  document.querySelectorAll('[data-event-filter]').forEach(elem => {
    elem.addEventListener('click', () => {
      const cat = elem.getAttribute('data-event-filter');
      filterEvents(cat);
    });
  });

  // Modal triggers
  document.querySelectorAll('[data-open-modal]').forEach(elem => {
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = elem.getAttribute('data-open-modal');
      openModal(modalId);
    });
  });

  document.querySelectorAll('[data-close-modal]').forEach(elem => {
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = elem.getAttribute('data-close-modal');
      closeModal(modalId);
    });
  });

  // Close modals on backdrop click
  document.querySelectorAll('.modal-backdrop').forEach(elem => {
    elem.addEventListener('click', (e) => {
      if (e.target === elem) {
        elem.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });
  });

  // Form Submissions
  const planVisitForm = document.getElementById('form-plan-visit');
  if (planVisitForm) {
    planVisitForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = planVisitForm.querySelector('input[type="text"]').value;
      closeModal('modal-plan-visit');
      showToast(`Thank you, ${name || 'Beloved'}! We look forward to welcoming you this Sunday at Chapel of Praise.`, 'success');
      planVisitForm.reset();
    });
  }

  const visitTabForm = document.getElementById('form-visit-tab');
  if (visitTabForm) {
    visitTabForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = visitTabForm.querySelector('input[type="text"]').value;
      showToast(`Registration received, ${name || 'Beloved'}! Our protocol team will welcome you.`, 'success');
      visitTabForm.reset();
    });
  }

  const prayerForm = document.getElementById('form-prayer-desk');
  if (prayerForm) {
    prayerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      closeModal('modal-prayer-request');
      showToast("Your prayer request has been submitted to the Chaplain's intercession team. God answers by fire!", 'success');
      prayerForm.reset();
    });
  }

  const serveForm = document.getElementById('form-serve-signup');
  if (serveForm) {
    serveForm.addEventListener('submit', (e) => {
      e.preventDefault();
      closeModal('modal-serve-signup');
      showToast('Thank you for volunteering! The department lead will reach out to you shortly.', 'success');
      serveForm.reset();
    });
  }

  // Window exposure for inline onclick handlers if needed
  window.switchTab = switchTab;
  window.openModal = openModal;
  window.closeModal = closeModal;
  window.switchCongregation = switchCongregation;
  window.filterMedia = filterMedia;
  window.filterEvents = filterEvents;
  window.playSermon = playSermon;
  window.togglePlayPause = togglePlayPause;
  window.closeAudioPlayer = closeAudioPlayer;
  window.downloadEventReminder = downloadEventReminder;
  window.copyServiceNotes = copyServiceNotes;
  window.exportSingleHtml = exportSingleHtml;
  window.showToast = showToast;
});
