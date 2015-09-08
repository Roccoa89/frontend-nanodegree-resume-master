var realRole = "Web Developer";
var firstName = "George Abreu";

var formattedName = HTMLheaderName.replace("%data%", firstName);
var formattedRole = HTMLheaderRole.replace("%data%", realRole);
$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#main").append(internationalizeButton);

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x, y);
});
/*
var formattedBiopic = HTMLbioPic.replace("%data%", "http://oyster.ignimgs.com/mediawiki/apis.ign.com/futurama/1/11/Fry.jpg");// here is where you put a link for your actual pic

$("#header").append(formattedBiopic);
*/
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
	"bioPic": "images/fry.jpg"
};

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

$("#header").append(formattedMobile);
$("#header").append(formattedEmail);
$("#header").append(formattedGithub);
$("#header").append(formattedLocation);

var formattedBiopic = HTMLbioPic.replace("%data%", "http://oyster.ignimgs.com/mediawiki/apis.ign.com/futurama/1/11/Fry.jpg");// here is where you put a link for your actual pic

$("#header").append(formattedBiopic);

if(bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
}

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
			"dates": "2015-2016"
		}
	]
}

for (school in education.schools) {
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

for (online in education.onlineCourses) {
	$("#education").append(HTMLonlineClasses);

	var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
	var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
	var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
	var formattedNewOnline = formattedOnlineTitle + formattedOnlineSchool;// put them together so both are highlighted

	$(".education-entry:last").append(formattedNewOnline);
	$(".education-entry:last").append(formattedOnlineDates);
}

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
	]
};

for (job in work.jobs) {
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

var projects = {
	"projects": [
	{
		"title": "Sample Project 1",
		"dates": "2014",
		"description": "jdf shfwhf sjfihsfn d dk dk fjojjsuwjf gevl",
		"images": [
		"https://lh3.ggpht.com/23-sq0p0gqF06YX3BwIPIXLX_Ma_clLXySKEHlphqlxr21-PPbC80U8SjDi96KTWbnjKfY2Pdq_gyFK9A=s300#w=1757&h=1080",
		"https://lh3.ggpht.com/23-sq0p0gqF06YX3BwIPIXLX_Ma_clLXySKEHlphqlxr21-PPbC80U8SjDi96KTWbnjKfY2Pdq_gyFK9A=s300#w=1757&h=1080"
		]
	}
	]
}

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectTitle);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectsDates.replace("%data", projects.projects[project].dates);
		$(".projects-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}


/*
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

$("#header").append(formattedMobile);
$("#header").append(formattedEmail);
$("#header").append(formattedGithub);
$("#header").append(formattedLocation);

var formattedBiopic = HTMLbioPic.replace("%data%", "http://oyster.ignimgs.com/mediawiki/apis.ign.com/futurama/1/11/Fry.jpg");// here is where you put a link for your actual pic

$("#header").append(formattedBiopic);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

$("#header").append(formattedMobile);
$("#header").append(formattedEmail);
$("#header").append(formattedGithub);
$("#header").append(formattedLocation);
*/

$("#mapDiv").append(googleMap);



