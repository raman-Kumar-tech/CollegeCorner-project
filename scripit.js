/* ====================================================
   DATA COLLECTIONS
==================================================== */
const eventsData = [
  {
    id: 1,
    title: "TechVerve 2026: National Hackathon",
    category: "Technical",
    date: "Oct 28, 2026",
    time: "09:00 AM - 06:00 PM",
    venue: "Auditorium & Innovation Labs",
    description: "36-hour code sprint focusing on Generative AI, IoT, and Cloud Computing with prizes worth ₹2,50,000.",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-200"
  },
  {
    id: 2,
    title: "Tarang: Annual Cultural Carnival",
    category: "Cultural",
    date: "Nov 14, 2026",
    time: "04:30 PM Onwards",
    venue: "Main Campus Open Grounds",
    description: "Battle of the bands, classical dances, drama showcases, and celebrity musical night.",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-200"
  },
  {
    id: 3,
    title: "Inter-College Sports Olympiad",
    category: "Sports",
    date: "Nov 22, 2026",
    time: "08:00 AM - 05:00 PM",
    venue: "University Sports Complex",
    description: "Football tournament, Cricket tournament, Badminton doubles, and track & field athletics.",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200"
  },
  {
    id: 4,
    title: "Workshop on Next-Gen Cloud Architecture",
    category: "Academic",
    date: "Dec 02, 2026",
    time: "10:30 AM - 01:30 PM",
    venue: "Seminar Hall 2",
    description: "Hands-on session on Kubernetes orchestration and serverless microservices delivered by industry architects.",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200"
  },
  {
    id: 5,
    title: "RoboWars: Combat Robotics Championship",
    category: "Technical",
    date: "Dec 10, 2026",
    time: "11:00 AM - 04:00 PM",
    venue: "Mechanical Workshop Arena",
    description: "Custom-built 15kg and 30kg remote combat robots battle in an armored arena.",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-200"
  },
  {
    id: 6,
    title: "Research Paper Publishing Seminar",
    category: "Academic",
    date: "Dec 18, 2026",
    time: "02:00 PM - 04:00 PM",
    venue: "Library Conference Room",
    description: "Guidance on IEEE / Springer index formatting, peer-review process, and indexing ethics for undergrads.",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200"
  }
];

const holidaysData = [
  { date: "Oct 02, 2026", day: "Friday", occasion: "Mahatma Gandhi Jayanti", type: "Gazetted", duration: "1 Day" },
  { date: "Oct 20, 2026", day: "Tuesday", occasion: "Dussehra (Vijay Dashami)", type: "Gazetted", duration: "1 Day" },
  { date: "Nov 01, 2026", day: "Sunday", occasion: "Diwali (Deepavali Break)", type: "Gazetted", duration: "3 Days" },
  { date: "Nov 15, 2026", day: "Sunday", occasion: "Guru Nanak Jayanti", type: "Gazetted", duration: "1 Day" },
  { date: "Dec 25, 2026", day: "Friday", occasion: "Christmas Day", type: "Gazetted", duration: "1 Day" },
  { date: "Jan 01, 2027", day: "Friday", occasion: "New Year's Day", type: "Restricted", duration: "1 Day" },
  { date: "Jan 26, 2027", day: "Tuesday", occasion: "Republic Day", type: "Gazetted", duration: "1 Day" },
  { date: "Mar 25, 2027", day: "Thursday", occasion: "Holi (Festival of Colors)", type: "Gazetted", duration: "2 Days" }
];

const studyMaterialsData = [
  {
    id: 101,
    title: "Data Structures & Algorithms Comprehensive Lecture Notes",
    course: "B.Tech CSE",
    semester: "Semester 3",
    subject: "Data Structures & Algorithms",
    faculty: "Dr. Arvind Rao",
    size: "14.2 MB",
    type: "PDF Slides & Notes",
    downloads: "1,240"
  },
  {
    id: 102,
    title: "Operating Systems: Process Synchronization & Memory Paging",
    course: "B.Tech CSE",
    semester: "Semester 4",
    subject: "Operating Systems",
    faculty: "Prof. S. Meenakshi",
    size: "8.5 MB",
    type: "Handwritten Notes",
    downloads: "890"
  },
  {
    id: 103,
    title: "Relational Database Management (SQL & Normalization Handbook)",
    course: "BCA",
    semester: "Semester 3",
    subject: "Database Management (DBMS)",
    faculty: "Er. Rohit Verma",
    size: "19.1 MB",
    type: "eBook & Lab Manual",
    downloads: "1,610"
  },
  {
    id: 104,
    title: "Modern Web Technologies: HTML5, Tailwind & React Core",
    course: "BCA",
    semester: "Semester 4",
    subject: "Web Technologies",
    faculty: "Ms. Neha Gupta",
    size: "11.3 MB",
    type: "Source Code & PPTs",
    downloads: "950"
  },
  {
    id: 105,
    title: "Computer Networks: OSI, TCP/IP & Socket Programming",
    course: "B.Tech CSE",
    semester: "Semester 5",
    subject: "Computer Networks",
    faculty: "Dr. K. N. Swamy",
    size: "16.4 MB",
    type: "Full Syllabus Bundle",
    downloads: "780"
  },
  {
    id: 106,
    title: "Digital Electronics & Logic Gates Circuit Design",
    course: "B.Tech ECE",
    semester: "Semester 3",
    subject: "Digital Electronics",
    faculty: "Prof. Priya Nair",
    size: "12.0 MB",
    type: "Lab Handbook",
    downloads: "620"
  }
];

const pyqData = [
  {
    id: 201,
    title: "Data Structures & Algorithms - End-Term Paper",
    code: "CS-301",
    course: "B.Tech CSE",
    semester: "Semester 3",
    examType: "End-Term",
    year: "2025",
    pages: "6 Pages",
    size: "1.4 MB"
  },
  {
    id: 202,
    title: "Operating Systems Concepts - Mid-Term Exam",
    code: "CS-402",
    course: "B.Tech CSE",
    semester: "Semester 4",
    examType: "Mid-Term",
    year: "2024",
    pages: "4 Pages",
    size: "950 KB"
  },
  {
    id: 203,
    title: "Database Management Systems (DBMS) - Final University Exam",
    code: "BCA-303",
    course: "BCA",
    semester: "Semester 3",
    examType: "End-Term",
    year: "2024",
    pages: "8 Pages",
    size: "2.1 MB"
  },
  {
    id: 204,
    title: "Computer Networks & Security - Unit Test 1",
    code: "CS-501",
    course: "B.Tech CSE",
    semester: "Semester 5",
    examType: "Unit Test",
    year: "2025",
    pages: "3 Pages",
    size: "620 KB"
  },
  {
    id: 205,
    title: "Digital Logic Design & Integrated Circuits",
    code: "EC-302",
    course: "B.Tech ECE",
    semester: "Semester 3",
    examType: "End-Term",
    year: "2023",
    pages: "5 Pages",
    size: "1.1 MB"
  },
  {
    id: 206,
    title: "Web Technologies & Web Services Final Paper",
    code: "BCA-401",
    course: "BCA",
    semester: "Semester 4",
    examType: "End-Term",
    year: "2023",
    pages: "6 Pages",
    size: "1.3 MB"
  }
];

const studentsDatabase = {
  "4623010": {
    name: "Raman Kumar",
    roll: "4623010",
    course: "B.Tech Computer Science & Engineering",
    semester: "Semester 7",
    avatar: "RK",
    subjects: [
      { name: "Cloud Computing & DevOps", attended: 37, total: 42 },
      { name: "Advanced Machine Learning", attended: 35, total: 40 },
      { name: "Information Security & Cyber Law", attended: 34, total: 38 },
      { name: "Distributed Systems & Parallel Computing", attended: 38, total: 42 },
      { name: "Major Project Phase - I", attended: 22, total: 24 }
    ]
  },
  "22BCSE101": {
    name: "Rahul Sharma",
    roll: "22BCSE101",
    course: "B.Tech Computer Science (CSE)",
    semester: "Semester 5",
    avatar: "RS",
    subjects: [
      { name: "Computer Networks", attended: 36, total: 40 },
      { name: "Design & Analysis of Algorithms", attended: 34, total: 38 },
      { name: "Theory of Computation", attended: 32, total: 40 },
      { name: "Software Engineering", attended: 30, total: 36 },
      { name: "Network Security Lab", attended: 28, total: 36 }
    ]
  }
};

/* ====================================================
   GLOBAL HELPERS & WINDOW-SCOPED HANDLERS
==================================================== */
window.showToast = function(message, type = "success") {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  const icons = {
    success: 'fa-circle-check text-emerald-500',
    info: 'fa-circle-info text-brand-500',
    warning: 'fa-triangle-exclamation text-amber-500',
    error: 'fa-circle-xmark text-red-500'
  };

  toast.className = 'pointer-events-auto flex items-center gap-3 px-4 py-3 bg-slate-900 text-white text-xs font-semibold rounded-2xl shadow-xl border border-slate-700/80 transition-all duration-300 transform translate-y-3 opacity-0';
  toast.innerHTML = `
    <i class="fa-solid ${icons[type] || icons.info} text-base shrink-0"></i>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-3', 'opacity-0');
  });

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
};

window.openModal = function(title, subtitle, bodyHtml) {
  const modal = document.getElementById('action-modal');
  if (!modal) return;
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-subtitle').textContent = subtitle;
  document.getElementById('modal-body').innerHTML = bodyHtml;
  modal.classList.remove('hidden');
};

window.closeModal = function() {
  const modal = document.getElementById('action-modal');
  if (modal) modal.classList.add('hidden');
};

window.triggerSimulatedDownload = function() {
  window.closeModal();
  window.showToast('Preparing PDF package... Download will start automatically!', 'info');
};

window.registerEvent = function(title) {
  window.showToast(`Registration request received for "${title}"! Check your college email.`, 'success');
};

window.setRoll = function(roll) {
  const input = document.getElementById('roll-input');
  if (input) {
    input.value = roll;
    handleAttendanceLookup(roll);
  }
};

/* ====================================================
   RENDER ROUTINES
==================================================== */
function renderEvents(filter = "all") {
  const grid = document.getElementById('events-grid');
  if (!grid) return;

  const filtered = filter === "all"
    ? eventsData
    : eventsData.filter(e => e.category.toLowerCase() === filter.toLowerCase());

  grid.innerHTML = filtered.map(item => `
    <div class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-4">
          <span class="px-3 py-1 rounded-full text-[11px] font-bold border ${item.badgeColor}">
            ${item.category}
          </span>
          <span class="text-xs font-semibold text-slate-500 flex items-center gap-1">
            <i class="fa-regular fa-calendar text-brand-600"></i> ${item.date}
          </span>
        </div>
        <h3 class="text-base font-bold text-slate-900 mb-2 leading-snug">${item.title}</h3>
        <p class="text-xs text-slate-600 mb-4 line-clamp-3 leading-relaxed">${item.description}</p>
        <div class="space-y-1.5 text-xs text-slate-500 pt-2 border-t border-slate-100">
          <div class="flex items-center gap-2">
            <i class="fa-regular fa-clock w-4 text-slate-400"></i>
            <span>${item.time}</span>
          </div>
          <div class="flex items-center gap-2">
            <i class="fa-solid fa-location-dot w-4 text-slate-400"></i>
            <span class="truncate">${item.venue}</span>
          </div>
        </div>
      </div>
      <div class="pt-5 mt-4 border-t border-slate-100 flex items-center gap-2">
        <button type="button" onclick="window.registerEvent('${item.title}')" class="flex-1 py-2.5 rounded-xl bg-slate-900 hover:bg-brand-600 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2">
          <i class="fa-solid fa-ticket"></i> RSVP / Register
        </button>
        <button type="button" onclick="window.openModal('${item.title}', 'Event Information', 'Venue: ${item.venue}<br>Date: ${item.date} (${item.time})<br><br>Description: ${item.description}')" class="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs transition" title="View details">
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </button>
      </div>
    </div>
  `).join('');
}

function renderHolidays(filterType = "all") {
  const tbody = document.getElementById('holidays-table-body');
  const badge = document.getElementById('holidays-count-badge');
  if (!tbody) return;

  const filtered = filterType === "all"
    ? holidaysData
    : holidaysData.filter(h => h.type.toLowerCase() === filterType.toLowerCase());

  if (badge) badge.textContent = `Showing ${filtered.length} holidays`;

  tbody.innerHTML = filtered.map(item => `
    <tr class="hover:bg-slate-50/80 transition-colors">
      <td class="py-4 px-6 font-semibold text-slate-900 whitespace-nowrap">
        <div class="flex items-center gap-2">
          <i class="fa-regular fa-calendar-check text-brand-600"></i>
          ${item.date}
        </div>
      </td>
      <td class="py-4 px-6 text-slate-600 font-medium">${item.day}</td>
      <td class="py-4 px-6 font-bold text-slate-800">${item.occasion}</td>
      <td class="py-4 px-6">
        <span class="px-2.5 py-1 rounded-full text-[11px] font-bold ${
          item.type === 'Gazetted'
            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
            : 'bg-amber-50 text-amber-700 border border-amber-200'
        }">
          ${item.type}
        </span>
      </td>
      <td class="py-4 px-6 text-right font-medium text-slate-600">${item.duration}</td>
    </tr>
  `).join('');
}

function renderStudyMaterials() {
  const courseEl = document.getElementById('study-course');
  const semEl = document.getElementById('study-semester');
  const subjEl = document.getElementById('study-subject');
  const grid = document.getElementById('study-materials-grid');
  const empty = document.getElementById('study-empty-state');
  if (!grid || !courseEl || !semEl || !subjEl) return;

  const courseVal = courseEl.value;
  const semVal = semEl.value;
  const subjVal = subjEl.value;

  const filtered = studyMaterialsData.filter(item => {
    const matchCourse = (courseVal === 'all' || item.course === courseVal);
    const matchSem = (semVal === 'all' || item.semester === semVal);
    const matchSubj = (subjVal === 'all' || item.subject === subjVal);
    return matchCourse && matchSem && matchSubj;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '';
    if (empty) empty.classList.remove('hidden');
    return;
  }

  if (empty) empty.classList.add('hidden');
  grid.innerHTML = filtered.map(item => `
    <div class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
      <div>
        <div class="flex items-start justify-between gap-3 mb-3">
          <span class="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-indigo-50 text-indigo-700">
            ${item.course}
          </span>
          <span class="text-[11px] font-medium text-slate-500">${item.semester}</span>
        </div>
        <h3 class="font-bold text-slate-900 text-sm mb-2 leading-snug">${item.title}</h3>
        <div class="space-y-1.5 text-xs text-slate-500 mt-4 mb-5">
          <div class="flex items-center gap-2">
            <i class="fa-solid fa-chalkboard-user text-slate-400 w-4"></i>
            <span>${item.faculty}</span>
          </div>
          <div class="flex items-center gap-2">
            <i class="fa-solid fa-file-lines text-slate-400 w-4"></i>
            <span>${item.type} • ${item.size}</span>
          </div>
          <div class="flex items-center gap-2">
            <i class="fa-solid fa-download text-slate-400 w-4"></i>
            <span>${item.downloads} downloads</span>
          </div>
        </div>
      </div>
      <div class="flex items-center gap-2 pt-4 border-t border-slate-100">
        <button type="button" onclick="window.openModal('${item.title}', '${item.course} • ${item.semester}', 'Subject: ${item.subject}<br>Author: ${item.faculty}<br>File Type: ${item.type}<br>Size: ${item.size}')" class="flex-1 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs transition flex items-center justify-center gap-2">
          <i class="fa-solid fa-download"></i> Get Notes
        </button>
        <button type="button" onclick="window.showToast('Bookmark added to your profile!', 'info')" class="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs transition" title="Save">
          <i class="fa-regular fa-bookmark"></i>
        </button>
      </div>
    </div>
  `).join('');
}

function renderPYQs() {
  const courseEl = document.getElementById('pyq-course');
  const semEl = document.getElementById('pyq-sem');
  const examTypeEl = document.getElementById('pyq-type');
  const yearEl = document.getElementById('pyq-year');
  const tbody = document.getElementById('pyq-table-body');
  const empty = document.getElementById('pyq-empty-state');
  if (!tbody || !courseEl || !semEl || !examTypeEl || !yearEl) return;

  const course = courseEl.value;
  const sem = semEl.value;
  const examType = examTypeEl.value;
  const year = yearEl.value;

  const filtered = pyqData.filter(item => {
    const matchCourse = (course === 'all' || item.course === course);
    const matchSem = (sem === 'all' || item.semester === sem);
    const matchType = (examType === 'all' || item.examType === examType);
    const matchYear = (year === 'all' || item.year === year);
    return matchCourse && matchSem && matchType && matchYear;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = '';
    if (empty) empty.classList.remove('hidden');
    return;
  }

  if (empty) empty.classList.add('hidden');
  tbody.innerHTML = filtered.map(item => `
    <tr class="hover:bg-slate-50 transition-colors">
      <td class="py-4 px-6">
        <div class="font-bold text-slate-900">${item.title}</div>
        <div class="text-[11px] font-mono text-slate-500">Subject Code: ${item.code} • ${item.pages}</div>
      </td>
      <td class="py-4 px-6">
        <div class="text-xs font-semibold text-slate-700">${item.course}</div>
        <div class="text-[11px] text-slate-500">${item.semester}</div>
      </td>
      <td class="py-4 px-6">
        <span class="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-700">
          ${item.examType}
        </span>
      </td>
      <td class="py-4 px-6 font-bold text-slate-800 text-xs">${item.year}</td>
      <td class="py-4 px-6 text-center">
        <button type="button" onclick="window.openModal('${item.title} (${item.year})', 'Exam Paper Code: ${item.code}', 'Format: Official University Endorsed PDF<br>Pages: ${item.pages}<br>Size: ${item.size}')" class="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-brand-600 text-white text-xs font-semibold transition inline-flex items-center gap-1.5 shadow-sm">
          <i class="fa-solid fa-file-arrow-down"></i> PDF
        </button>
      </td>
    </tr>
  `).join('');
}

function handleAttendanceLookup(rollNo) {
  const cleanRoll = rollNo.trim().toUpperCase();
  const student = studentsDatabase[cleanRoll];

  if (!student) {
    window.showToast(`Roll Number "${cleanRoll}" not found. Try sample roll 4623010`, 'warning');
    return;
  }

  document.getElementById('res-name').textContent = student.name;
  document.getElementById('res-roll').textContent = student.roll;
  document.getElementById('res-course').textContent = student.course;
  document.getElementById('res-sem').textContent = student.semester;
  document.getElementById('res-avatar').textContent = student.avatar;

  let totalHeld = 0;
  let totalAttended = 0;
  student.subjects.forEach(s => {
    totalHeld += s.total;
    totalAttended += s.attended;
  });

  const aggregate = ((totalAttended / totalHeld) * 100).toFixed(1);
  document.getElementById('res-percent').textContent = `${aggregate}%`;
  document.getElementById('res-attended-ratio').textContent = `${totalAttended} / ${totalHeld}`;

  const statusBadge = document.getElementById('res-status-badge');
  const alertBox = document.getElementById('attendance-alert-box');

  if (aggregate >= 75) {
    statusBadge.className = 'px-3 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30';
    statusBadge.textContent = 'Eligible for Exams';
    alertBox.innerHTML = `
      <i class="fa-solid fa-circle-check text-emerald-400 text-base"></i>
      <span>Great attendance record! Your score exceeds the university minimum standard of 75%.</span>
    `;
  } else {
    statusBadge.className = 'px-3 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30';
    statusBadge.textContent = 'Low Attendance Warning';
    const needed = Math.max(0, Math.ceil((0.75 * totalHeld - totalAttended) / 0.25));
    alertBox.innerHTML = `
      <i class="fa-solid fa-triangle-exclamation text-amber-400 text-base"></i>
      <span><strong>Action Required:</strong> Attendance is under 75%. You need to attend the next <strong>${needed} consecutive classes</strong> to regain eligibility.</span>
    `;
  }

  const tbody = document.getElementById('attendance-breakdown-body');
  tbody.innerHTML = student.subjects.map(subj => {
    const subPct = ((subj.attended / subj.total) * 100).toFixed(1);
    const isOk = subPct >= 75;
    return `
      <tr class="hover:bg-slate-50/70 transition-colors">
        <td class="py-3 px-6 font-semibold text-slate-800">${subj.name}</td>
        <td class="py-3 px-6 text-slate-600 font-mono font-medium">${subj.attended}</td>
        <td class="py-3 px-6 text-slate-600 font-mono font-medium">${subj.total}</td>
        <td class="py-3 px-6">
          <div class="flex items-center gap-2">
            <span class="font-bold text-xs ${isOk ? 'text-emerald-600' : 'text-amber-600'}">${subPct}%</span>
            <div class="w-16 bg-slate-200 h-1.5 rounded-full overflow-hidden">
              <div class="h-full ${isOk ? 'bg-emerald-500' : 'bg-amber-500'}" style="width: ${subPct}%"></div>
            </div>
          </div>
        </td>
        <td class="py-3 px-6">
          <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${isOk ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}">
            ${isOk ? 'Good' : 'Defaulter'}
          </span>
        </td>
        <td class="py-3 px-6 text-right text-xs font-medium text-slate-500">
          ${isOk ? 'Regular' : 'Needs attention'}
        </td>
      </tr>
    `;
  }).join('');

  const resultEl = document.getElementById('attendance-result');
  resultEl.classList.remove('hidden');
  resultEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  window.showToast(`Loaded records for ${student.name}`, 'success');
}

/* ====================================================
   DELEGATED EVENT ATTACHMENTS
==================================================== */
function initEventListeners() {
  // 1. Mobile Menu Toggle
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileMenu.classList.toggle('hidden');
      if (menuIcon) {
        menuIcon.className = mobileMenu.classList.contains('hidden')
          ? 'fa-solid fa-bars text-xl'
          : 'fa-solid fa-xmark text-xl';
      }
    });
  }

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu) mobileMenu.classList.add('hidden');
      if (menuIcon) menuIcon.className = 'fa-solid fa-bars text-xl';
    });
  });

  // 2. Events Filter Delegation
  const eventFilters = document.getElementById('event-filters');
  if (eventFilters) {
    eventFilters.addEventListener('click', (e) => {
      const btn = e.target.closest('.event-filter-btn');
      if (!btn) return;
      eventFilters.querySelectorAll('.event-filter-btn').forEach(b => {
        b.classList.remove('bg-brand-600', 'text-white');
        b.classList.add('bg-slate-100', 'text-slate-600');
      });
      btn.classList.add('bg-brand-600', 'text-white');
      btn.classList.remove('bg-slate-100', 'text-slate-600');
      renderEvents(btn.dataset.filter);
    });
  }

  // 3. Holidays Filter Delegation
  const holidayFilters = document.getElementById('holiday-filter-group');
  if (holidayFilters) {
    holidayFilters.addEventListener('click', (e) => {
      const btn = e.target.closest('.holiday-filter-btn');
      if (!btn) return;
      holidayFilters.querySelectorAll('.holiday-filter-btn').forEach(b => {
        b.classList.remove('bg-brand-600', 'text-white');
        b.classList.add('text-slate-600');
      });
      btn.classList.add('bg-brand-600', 'text-white');
      btn.classList.remove('text-slate-600');
      renderHolidays(btn.dataset.type);
    });
  }

  // 4. Study Material Dropdowns
  ['study-course', 'study-semester', 'study-subject'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('change', renderStudyMaterials);
      el.addEventListener('input', renderStudyMaterials);
    }
  });

  // 5. PYQ Dropdowns
  ['pyq-course', 'pyq-sem', 'pyq-type', 'pyq-year'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('change', renderPYQs);
      el.addEventListener('input', renderPYQs);
    }
  });

  // 6. Attendance Form Submission
  const attendanceForm = document.getElementById('attendance-form');
  if (attendanceForm) {
    attendanceForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const rollInput = document.getElementById('roll-input');
      if (rollInput) handleAttendanceLookup(rollInput.value);
    });
  }

  // 7. Modal Backdrop Click
  const actionModal = document.getElementById('action-modal');
  if (actionModal) {
    actionModal.addEventListener('click', (e) => {
      if (e.target.id === 'action-modal') {
        window.closeModal();
      }
    });
  }
}

// Ensure execution whether loaded asynchronously, deferred, or via DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    renderEvents('all');
    renderHolidays('all');
    renderStudyMaterials();
    renderPYQs();
    initEventListeners();
  });
} else {
  renderEvents('all');
  renderHolidays('all');
  renderStudyMaterials();
  renderPYQs();
  initEventListeners();
}