var bio = {
    "name":"eslam adel",
    "role":"front-end web developer",
    "contacts":{
        "mobile":"010-186-80-71",
        "email":"eslamm3d@gmail.com",
        "github":"eslamsezar",
        "twitter":"@eslamsezar0",
        "location":"giza, egypt"
    },
    "welcomeMessage":"Hey I'm eslam adel, this is my resume.",
    "skills":["HTML5","CSS3","JavaScript","Bootstrap","jQuery"],
    "biopic":"images/eslam.jpg"
};


var education = {
    "schools":[
        {
            "name":"Culture & Science City",
            "location":" 6th OF OCTOBER",
            "degree":"Bachelors Of Computer Science&Information System",
            "dates":"2015",
            "majors":["Information System"]
        }
    ],
    "onlinecourses" : [
        {
            "title" : "Front-End Nanodegree",
            "school" : "Udacity",
            "dates" : "still studying",
            "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
        ]
};

var work ={
    "jobs" : [
        {
        "employer":"front-end developer",
        "title":"web Ui",
        "location":"Al Haram, egypt",
        "dates":"2018",
        "description":"web Ui&Ux",
        }
    ]
};

var projects = {
    "projects":[
        {
            "title":"portfolio",
            "dates":"2017",
            "description":"first project portfolio",
            "images":["images/portfolio.png"],
            "link":"https://github.com/eslamsezar/portfolio"
        }
    ]
};

bio.display = function() {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedName);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts, #footerContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts, #footerContacts").append(formattedEmail);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts, #footerContacts").append(formattedGithub);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#topContacts, #footerContacts").append(formattedTwitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts, #footerContacts").append(formattedLocation);

    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedBiopic);
    var formattedWellcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedWellcomeMsg);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        for(i = 0; i < bio.skills.length;i++) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkills);
        }
    }
}
bio.display();

work.display = function() {
    work.jobs.forEach(function(job) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
    $(".work-entry:last").append(formattedLocation);
    var formattedDates = HTMLworkDates.replace("%data%", job.dates);
    $(".work-entry:last").append(formattedDates);
    var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
    $(".work-entry:last").append(formattedDescription);
    });
};
work.display();

projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%",project.title).replace("#", project.link);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%",project.dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%",project.description);
        $(".project-entry:last").append(formattedDescription);

        if (project.images.length > 0) {
            project.images.forEach(function(image) {
                var formattedImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(formattedImage);
            });
        }
    });
};
projects.display();

education.display = function() {
    education.schools.forEach(function(school) {
    $("#education").append(HTMLschoolStart);

    var formattedName = HTMLschoolName.replace("%data%",school.name);
    var formattedDegree = HTMLschoolDegree.replace("%data%",school.degree);
    var formattedNameDegree = formattedName + formattedDegree;
    $(".education-entry:last").append(formattedNameDegree);
    var formattedDates = HTMLschoolDates.replace("%data%",school.dates);
    $(".education-entry:last").append(formattedDates);
    var formattedLocation = HTMLschoolLocation.replace("%data%",school.location);
    $(".education-entry:last").append(formattedLocation);
    var formattedMajors = HTMLschoolMajor.replace("%data%",school.majors);
    $(".education-entry:last").append(formattedMajors);
});


    education.onlinecourses.forEach(function(online) {
        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLschoolStart);

        var formattedTitle = HTMLonlineTitle.replace("%data%",online.title);
        var formattedSchool = HTMLonlineSchool.replace("%data%",online.school);
        var formattedTitleSchool = formattedTitle + formattedSchool;
        $(".education-entry:last").append(formattedTitleSchool);
        var formattedDates = HTMLonlineDates.replace("%data%",online.dates);
        $(".education-entry:last").append(formattedDates);
        var formattedUrl = HTMLonlineURL.replace("%data%",online.url).replace("#",online.url);
        $(".education-entry:last").append(formattedUrl);
    });
};
education.display();

$("#mapDiv").append(googleMap);