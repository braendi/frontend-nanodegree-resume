var bio = {
    name: "Stefan Brandenberger",
    role: "Software architect",
    welcome: "Weclome on my resumée",
    contacts: {
        email: "stefan.braendi@gmail.com",
        mobile: " +41 79 501 50 25",
        github: "https://github.com/braendi",
        location: "Kleinandelfingen"
    },
    skills: ["Java", "Xtext", "GWT", "mGWT", "Spring", "HTML/CSS"],
    pictureURL: "/Users/braendi/Desktop/donzère-2010-07-18-2878.png"
};

var education = {
    schools: [
        {
            name: "NCR",
            location: "Wallisellen",
            degree: "None",
            majors: ["Programmer"],
            dates: "1983-86",
            url: "www.ncr.ch"
        },
        {
            name: "AKAD",
            location: "Zürich",
            degree: "HF",
            majors: ["FA Wirtschaftsinformatiker", "Dipl. Wirtschaftsinformatiker"],
            dates: "1990-92",
            url: "www.akad.ch"
        }
    ],
    onlinecourses: [
        {
            title: "Front end web developer",
            school: "Udacity",
            dates: "2015",
            url: "www.udacity.com"
        }
    ]
};

var work = {
    jobs: [
        {
            employer: "NCR",
            title: "Programmer",
            location: "Wallisellen",
            dates: "1983-88",
            description: "Developing stuff"
        },
        {
            employer: "Soreco",
            title: "Projectleader/Teamleader",
            location: "Wallisellen",
            dates: "1983-88",
            description: "Developing more stuff"
        }
        ]
};

var projects = {
    projects: [
        {
            title: "Handel/400",
            dates: "1988-90",
            description: "Blablablalbl",
            images: [
                "/Users/braendi/Desktop/donzère-2010-07-18-2855.png",
                "/Users/braendi/Desktop/donzère-2010-07-18-2865.png"
                ]
        }
        ],
    display: function() {
        for (project in this.projects) {
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", this.projects[project].title));
            $(".project-entry:last").append(HTMLprojectDates.replace("%data%", this.projects[project].dates));
            $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", this.projects[project].description));
            for (image in this.projects[project].images) {
                $(".project-entry:last").append(HTMLprojectImage.replace("%data%", this.projects[project].images[image]));
            }
        }
    }
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMail = HTMLcontactGeneric.replace("%contact%", "e-Mail:").replace("%data%", bio.contacts.email);
var formattedPhone = HTMLcontactGeneric.replace("%contact%", "phone:").replace("%data%", bio.contacts.mobile);
var formattedGit = HTMLcontactGeneric.replace("%contact%", "gitHub:").replace("%data%", bio.contacts.github);
var formattedPictureUrl = HTMLbioPic.replace("%data%", bio.pictureURL);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);

$("#header").prepend(formattedPictureUrl);
$("#header").prepend(formattedWelcome);
$("#header").prepend(formattedGit);
$("#header").prepend(formattedPhone);
$("#header").prepend(formattedMail);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
    }
}

var displayWork = function () {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var fmtEmp = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var fmtTit = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var fmtLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var fmtDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var fmtDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(fmtEmp + fmtTit).append(fmtLocation).append(fmtDates).append(fmtDescription);
    }
}

displayWork();

projects.display();

