/*$("#main").append("George Abreu");*/
var realRole = "Web Developer";
var firstName = "George Abreu";
//var awesomeThoughts = "I am George and I am AWESOME";
//console.log(firstName);
//console.log(awesomeThoughts);
//var funThoughts = awesomeThoughts.replace("AWESOME", "fun");
//$("#main").append(funThoughts);
var formattedName = HTMLheaderName.replace("%data%", firstName);
var formattedRole = HTMLheaderRole.replace("%data%", realRole);
$("#header").append(firstName);
/*
if(bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
}
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

var work = {
	"jobs": [
		{
		"employer": "Planet Express",
		"title": "Delivery Boy",
		"dates": "July 2007 - July 2012",
		"description": "Navy Stuff"
		}
	]
};


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
};
/*
for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	$(".work-entry:last").append(formattedEmployerTitle);
}
*/