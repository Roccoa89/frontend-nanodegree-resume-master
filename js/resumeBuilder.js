$("#main").append(internationalizeButton);

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x, y);
});

var bio = {
	"name" : "George Abreu",
	"role" : "Web Developer",
	"contacts" : {
		"mobile": "561-313-3152",
		"email": "roccoa89hub@gmail.com",
		"github": "roccoa89",
		"twitter": "@roccoa89",
		"location": "West Palm Beach"
	},
	"welcomeMessage" : "Hello and Welcome",
	"skills" : [
		"Fluent in Javascript", "awesomeness", "somemore stuff"
		],
	"bioPic": "images/fry.jpg",

	display: function(){

		var formattedName = HTMLheaderName.replace("%data%", bio.name);

		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);

		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);

		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);

		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

		var formattedBiopic = HTMLbioPic.replace("%data%", "http://oyster.ignimgs.com/mediawiki/apis.ign.com/futurama/1/11/Fry.jpg");// here is where you put a link for your actual pic

		var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

		$("#header").prepend(formattedName+formattedRole);
		$("#header").append(formattedBiopic);
		$("#header").append(formattedWelcomeMessage);
		$("#topContacts").append(formattedMobile+formattedEmail+formattedGithub+formattedLocation);
		$("#footerContacts").prepend(formattedMobile+formattedEmail+formattedGithub+formattedLocation);
		$("#header").append(HTMLskillsStart);
/*
if(bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill); this is replaced with the for (var e)*/

		for (var e in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[e]);
			$("#skills").append(formattedSkill);
		}
	}
};


var education = {
	"schools": [
		{
			"name": "FAU",
			"city": "Boca Raton",
			"degree": "Bachelor's",
			"major": "Computer Science",
			"dates": "2014-2015"
		},
		{
			"name": "Keiser",
			"city": "West Palm Beach",
			"degree": "Associate in Arts",
			"major": "Criminal Justice",
			"dates": "2012-2014"
		}
	],
	"onlineCourses": [
		{
			"title": "Javascript Crash Course",
			"school": "Udacity",
			"dates": "2015-2016",
			"url": "https://www.udacity.com/"
		}
	],

	display: function() {
	for (var school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoolDate = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedSchoolCity = HTMLschoolLocation.replace("%data%", education.schools[school].city);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

		var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;// combined so both name and degree are highlighted

		$(".education-entry:last").append(formattedSchoolNameDegree);
		$(".education-entry:last").append(formattedSchoolDate);
		$(".education-entry:last").append(formattedSchoolCity);
		$(".education-entry:last").append(formattedSchoolMajor);

	}

	for (var online in education.onlineCourses) {

		$("#education").append(HTMLonlineClasses);
		$("#education").append(HTMLschoolStart);

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
		var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
		var formattedNewOnline = formattedOnlineTitle + formattedOnlineSchool;// put them together so both are highlighted

		$(".education-entry:last").append(formattedNewOnline);
		$(".education-entry:last").append(formattedOnlineDates);
		$(".education-entry:last").append(formattedOnlineUrl);
	}
	}
};

var work = {
	"jobs": [
		{
		"employerName": "The World Corp",
		"employer": "Planet Express",
		"title": "Delivery Boy",
		"position": "Main Person",
		"location": "Everywhere",
		"dates": "July 2007 - July 2012",
		"description": "Navy Stuff, lots and lots of navy stuff"
		}
	],

display: function() {
for (var job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
		}
	}
};

var projects = {
	"projects1": [
	{
		"title": "Sample Project 1",
		"dates": "2014",
		"description": "jdf shfwhf sjfihsfn d dk dk fjojjsuwjf gevl",
		"images": [
		"http://i.imgur.com/kKBcq92.jpg",
		"https://i.imgur.com/ZG4Q4Bs.jpg"// find out how to link these directly to the .append
		]
	}
	],

	display: function() {
	for (var pro in projects.projects1) {

		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects1[pro].title);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects1[pro].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects1[pro].description);
		var formattedProjectImages = HTMLprojectImage.replace("%data%", "data:image/jpeg;base64,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");

		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDates);
		$(".project-entry:last").append(formattedProjectDescription);
		$(".project-entry:last").append(formattedProjectImages);
		}
	}
};

bio.display();
education.display();
work.display();
projects.display();

$("#mapDiv").append(googleMap);



