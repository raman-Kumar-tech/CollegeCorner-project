// ======================================
// COLLEGE CORNER
// JAVASCRIPT
// ======================================


// ================= STUDENT DATA =================

const student = {

    name: "Raman Kumar",

    registration: "KUK/CSE/202/001",

    roll: 4623010,

    course: "B.Tech CSE",

    year: "4th Year",

    semester: "7th Semester",

    session: "2024-2028",

    email: "student@example.com",

    phone: "9876543210"

};


// ================= ATTENDANCE DATA =================

const attendance = [

    {
        subject: "DBMS",
        present: 42,
        total: 48
    },

    {
        subject: "Computer Networks",
        present: 39,
        total: 46
    },

    {
        subject: "Compiler Design",
        present: 40,
        total: 45
    },

    {
        subject: "JavaScript",
        present: 44,
        total: 48
    },

    {
        subject: "Software Engineering",
        present: 38,
        total: 44
    },

    {
        subject: "Web Development Lab",
        present: 29,
        total: 30
    }

];


// ================= STUDY MATERIAL =================

const materials = [

    {
        title: "DBMS Notes",
        subject: "Database Management System",
        icon: "🗄️"
    },

    {
        title: "Computer Networks",
        subject: "CN Unit-wise Notes",
        icon: "🌐"
    },

    {
        title: "Compiler Design",
        subject: "Compiler Design Notes",
        icon: "⚙️"
    },

    {
        title: "JavaScript",
        subject: "JavaScript Study Material",
        icon: "🟨"
    },

    {
        title: "Software Engineering",
        subject: "SE Important Questions",
        icon: "💻"
    },

    {
        title: "Previous Papers",
        subject: "Previous Year Question Papers",
        icon: "📄"
    }

];


// ================= NOTIFICATIONS =================

const notifications = [

    {
        title: "Internal Assessment",

        message:
        "Internal assessment starts from Monday. Please prepare according to the syllabus.",

        time: "Today",

        read: false
    },

    {
        title: "Assignment Submission",

        message:
        "Submit your Web Development assignment before 10 October.",

        time: "Yesterday",

        read: false
    },

    {
        title: "College Holiday",

        message:
        "College will remain closed on the upcoming holiday.",

        time: "2 days ago",

        read: true
    },

    {
        title: "Library Update",

        message:
        "Library timings have been updated.",

        time: "4 days ago",

        read: true
    }

];


// ================= EVENTS =================

const events = [

    {
        date: "10 OCT",

        title: "Assignment Submission",

        description:
        "Last date for Web Development assignment."
    },

    {
        date: "15 OCT",

        title: "Internal Assessment",

        description:
        "Internal assessment examinations begin."
    },

    {
        date: "20 OCT",

        title: "Coding Competition",

        description:
        "Inter-department coding competition."
    },

    {
        date: "24 OCT",

        title: "Cultural Event",

        description:
        "College cultural program for students."
    },

    {
        date: "02 NOV",

        title: "Sports Day",

        description:
        "Annual college sports activities."
    },

    {
        date: "15 NOV",

        title: "Project Review",

        description:
        "Final project progress review."
    }

];


// ================= DOM ELEMENTS =================

const loginPage =
    document.querySelector("#loginPage");

const app =
    document.querySelector("#app");

const loginForm =
    document.querySelector("#loginForm");

const logoutBtn =
    document.querySelector("#logoutBtn");

const navButtons =
    document.querySelectorAll(".nav-btn");

const sections =
    document.querySelectorAll(".section");

const pageTitle =
    document.querySelector("#pageTitle");


// ================= LOGIN =================

loginForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        const username =
            document.querySelector("#username")
            .value.trim();

        const password =
            document.querySelector("#password")
            .value.trim();


        if(username !== "" && password !== "") {

            loginPage.classList.add("hidden");

            app.classList.remove("hidden");

            document.querySelector(
                "#loggedUsername"
            ).innerText = username;


            loadEverything();

        }

        else {

            document.querySelector(
                "#loginMessage"
            ).innerText =
                "Please enter username and password.";

        }

    }
);


// ================= LOGOUT =================

logoutBtn.addEventListener(
    "click",
    function() {

        app.classList.add("hidden");

        loginPage.classList.remove("hidden");

        loginForm.reset();

    }
);


// ================= NAVIGATION =================

navButtons.forEach(
    function(button) {

        button.addEventListener(
            "click",
            function() {

                const sectionId =
                    button.dataset.section;

                showSection(sectionId);

            }
        );

    }
);


// Buttons like View Profile / View Notifications

document.querySelectorAll("[data-go]")
.forEach(
    function(button) {

        button.addEventListener(
            "click",
            function() {

                showSection(
                    button.dataset.go
                );

            }
        );

    }
);


function showSection(sectionId) {

    sections.forEach(
        function(section) {

            section.classList.remove(
                "active"
            );

        }
    );


    navButtons.forEach(
        function(button) {

            button.classList.remove(
                "active"
            );

        }
    );


    const section =
        document.querySelector(
            "#" + sectionId
        );


    const button =
        document.querySelector(
            `[data-section="${sectionId}"]`
        );


    if(section) {

        section.classList.add("active");

    }


    if(button) {

        button.classList.add("active");

    }


    const titles = {

        dashboard: "Dashboard",

        student: "Student Details",

        attendance: "Attendance",

        materials: "Study Material",

        notifications: "Notifications",

        events: "Events & Holidays"

    };


    pageTitle.innerText =
        titles[sectionId];

}


// ================= LOAD EVERYTHING =================

function loadEverything() {

    renderStudent();

    renderAttendance();

    renderMaterials(materials);

    renderNotifications();

    renderEvents();

    updateDashboard();

}


// ================= DASHBOARD =================

function updateDashboard() {

    const overall =
        calculateAttendance();


    document.querySelector(
        "#overallAttendance"
    ).innerText =
        overall + "%";


    document.querySelector(
        "#materialCount"
    ).innerText =
        materials.length;


    document.querySelector(
        "#newNotificationCount"
    ).innerText =
        getUnreadCount();


    document.querySelector(
        "#eventCount"
    ).innerText =
        events.length;


    document.querySelector(
        "#dashboardName"
    ).innerText =
        student.name;


    document.querySelector(
        "#dashboardCourse"
    ).innerText =
        student.course;


    document.querySelector(
        "#dashboardSemester"
    ).innerText =
        student.semester;


    document.querySelector(
        "#dashboardRoll"
    ).innerText =
        student.roll;


    const latest =
        notifications[0];


    document.querySelector(
        "#latestNotification"
    ).innerHTML = `

        <strong>
            ${latest.title}
        </strong>

        <p>
            ${latest.message}
        </p>

        <small>
            ${latest.time}
        </small>

    `;

}


// ================= STUDENT =================

function renderStudent() {

    document.querySelector(
        "#studentName"
    ).innerText =
        student.name;


    document.querySelector(
        "#studentCourse"
    ).innerText =
        student.course;


    document.querySelector(
        "#studentRegistration"
    ).innerText =
        student.registration;


    document.querySelector(
        "#studentRoll"
    ).innerText =
        student.roll;


    document.querySelector(
        "#studentCourse2"
    ).innerText =
        student.course;


    document.querySelector(
        "#studentYear"
    ).innerText =
        student.year;


    document.querySelector(
        "#studentSemester"
    ).innerText =
        student.semester;


    document.querySelector(
        "#studentSession"
    ).innerText =
        student.session;


    document.querySelector(
        "#studentEmail"
    ).innerText =
        student.email;


    document.querySelector(
        "#studentPhone"
    ).innerText =
        student.phone;

}


// ================= ATTENDANCE =================

function calculateAttendance() {

    let present = 0;

    let total = 0;


    attendance.forEach(
        function(item) {

            present += item.present;

            total += item.total;

        }
    );


    return Math.round(
        (present / total) * 100
    );

}


function renderAttendance() {

    const table =
        document.querySelector(
            "#attendanceTable"
        );


    table.innerHTML = "";


    attendance.forEach(
        function(item) {

            const percentage =
                Math.round(
                    (item.present /
                     item.total) * 100
                );


            let status;

            let statusClass;


            if(percentage >= 75) {

                status = "Good";

                statusClass = "good";

            }

            else {

                status = "Low";

                statusClass = "low";

            }


            table.innerHTML += `

                <tr>

                    <td>
                        ${item.subject}
                    </td>

                    <td>
                        ${item.present}
                    </td>

                    <td>
                        ${item.total}
                    </td>

                    <td>
                        ${percentage}%
                    </td>

                    <td>

                        <span
                            class="status ${statusClass}"
                        >

                            ${status}

                        </span>

                    </td>

                </tr>

            `;

        }
    );


    const overall =
        calculateAttendance();


    document.querySelector(
        "#attendancePercentage"
    ).innerText =
        overall + "%";


    document.querySelector(
        "#progressBar"
    ).style.width =
        overall + "%";

}


// ================= STUDY MATERIAL =================

function renderMaterials(list) {

    const grid =
        document.querySelector(
            "#materialGrid"
        );


    grid.innerHTML = "";


    if(list.length === 0) {

        grid.innerHTML =
            "<p>No material found.</p>";

        return;

    }


    list.forEach(
        function(material) {

            grid.innerHTML += `

                <div class="material-card">

                    <div class="material-icon">

                        ${material.icon}

                    </div>

                    <h3>
                        ${material.title}
                    </h3>

                    <p>
                        ${material.subject}
                    </p>

                    <button
                        class="secondary-btn"
                    >

                        Open Material

                    </button>

                </div>

            `;

        }
    );

}


// ================= SEARCH =================

document.querySelector(
    "#searchMaterial"
)
.addEventListener(
    "input",
    function() {

        const value =
            this.value.toLowerCase();


        const filtered =
            materials.filter(
                function(material) {

                    return (

                        material.title
                        .toLowerCase()
                        .includes(value)

                        ||

                        material.subject
                        .toLowerCase()
                        .includes(value)

                    );

                }
            );


        renderMaterials(filtered);

    }
);


// ================= NOTIFICATIONS =================

function getUnreadCount() {

    return notifications.filter(
        function(notification) {

            return !notification.read;

        }
    ).length;

}


function renderNotifications() {

    const list =
        document.querySelector(
            "#notificationList"
        );


    list.innerHTML = "";


    notifications.forEach(
        function(notification) {

            list.innerHTML += `

                <div
                    class="
                        notification-item
                        ${notification.read
                            ? "read"
                            : ""}
                    "
                >

                    <div>

                        <h3>

                            ${
                                notification.read
                                ? "✓"
                                : "🔔"
                            }

                            ${notification.title}

                        </h3>

                        <p>
                            ${notification.message}
                        </p>

                    </div>


                    <span class="notification-time">

                        ${notification.time}

                    </span>

                </div>

            `;

        }
    );


    updateNotificationBadge();

}


function updateNotificationBadge() {

    const count =
        getUnreadCount();


    document.querySelector(
        "#notificationBadge"
    ).innerText =
        count;


    document.querySelector(
        "#bellBadge"
    ).innerText =
        count;

}


// ================= MARK NOTIFICATIONS READ =================

document.querySelector(
    "#markRead"
)
.addEventListener(
    "click",
    function() {

        notifications.forEach(
            function(notification) {

                notification.read = true;

            }
        );


        renderNotifications();

        updateDashboard();

    }
);


// ================= NOTIFICATION BUTTON =================

document.querySelector(
    "#notificationButton"
)
.addEventListener(
    "click",
    function() {

        showSection(
            "notifications"
        );

    }
);


// ================= EVENTS =================

function renderEvents() {

    const grid =
        document.querySelector(
            "#eventGrid"
        );


    grid.innerHTML = "";


    events.forEach(
        function(event) {

            grid.innerHTML += `

                <div class="event-card">

                    <span class="event-date">

                        ${event.date}

                    </span>

                    <h3>
                        ${event.title}
                    </h3>

                    <p>
                        ${event.description}
                    </p>

                </div>

            `;

        }
    );

}


// ================= EDIT STUDENT =================

const modal =
    document.querySelector("#modal");


document.querySelector(
    "#editStudent"
)
.addEventListener(
    "click",
    function() {

        document.querySelector(
            "#formName"
        ).value =
            student.name;


        document.querySelector(
            "#formRegistration"
        ).value =
            student.registration;


        document.querySelector(
            "#formRoll"
        ).value =
            student.roll;


        document.querySelector(
            "#formCourse"
        ).value =
            student.course;


        document.querySelector(
            "#formYear"
        ).value =
            student.year;


        document.querySelector(
            "#formSemester"
        ).value =
            student.semester;


        document.querySelector(
            "#formEmail"
        ).value =
            student.email;


        document.querySelector(
            "#formPhone"
        ).value =
            student.phone;


        modal.classList.remove(
            "hidden"
        );

    }
);


// ================= CLOSE MODAL =================

document.querySelector(
    "#closeModal"
)
.addEventListener(
    "click",
    function() {

        modal.classList.add(
            "hidden"
        );

    }
);


// ================= SAVE STUDENT =================

document.querySelector(
    "#studentForm"
)
.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        student.name =
            document.querySelector(
                "#formName"
            ).value;


        student.registration =
            document.querySelector(
                "#formRegistration"
            ).value;


        student.roll =
            document.querySelector(
                "#formRoll"
            ).value;


        student.course =
            document.querySelector(
                "#formCourse"
            ).value;


        student.year =
            document.querySelector(
                "#formYear"
            ).value;


        student.semester =
            document.querySelector(
                "#formSemester"
            ).value;


        student.email =
            document.querySelector(
                "#formEmail"
            ).value;


        student.phone =
            document.querySelector(
                "#formPhone"
            ).value;


        renderStudent();

        updateDashboard();


        modal.classList.add(
            "hidden"
        );

    }
);