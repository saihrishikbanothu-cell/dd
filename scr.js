/* ACCESSIBILITY TOOL */

let fontStep = 0;

function toggleAccessibility(){
    document.getElementById("accessibilityPanel").classList.toggle("show");
}

function increaseFont(){
    document.body.classList.remove("big-font", "bigger-font");

    if(fontStep < 2){
        fontStep++;
    }

    if(fontStep === 1){
        document.body.classList.add("big-font");
    }

    if(fontStep === 2){
        document.body.classList.add("bigger-font");
    }
}

function decreaseFont(){
    document.body.classList.remove("big-font", "bigger-font");

    if(fontStep > 0){
        fontStep--;
    }

    if(fontStep === 1){
        document.body.classList.add("big-font");
    }
}

function toggleContrast(){
    document.body.classList.toggle("high-contrast");
}

function toggleGrayscale(){
    document.body.classList.toggle("grayscale");
}

function toggleUnderline(){
    document.body.classList.toggle("underline-links");
}

function togglePauseAnimations(){
    document.body.classList.toggle("pause-animations");
}

function resetAccessibility(){
    fontStep = 0;

    document.body.classList.remove(
        "big-font",
        "bigger-font",
        "high-contrast",
        "grayscale",
        "underline-links",
        "pause-animations"
    );

    document.getElementById("accessibilityPanel").classList.remove("show");
}


/* HERO IMAGE SLIDER */

let images = [
"Screenshot 2026-05-15 180344.png",
"Screenshot 2026-05-15 180350.png",
"gg.png",
"Screenshot 2026-05-15 180401.png",
"Screenshot 2026-05-15 180408.png",
"Screenshot 2026-05-15 180242.png"
];

let index = 0;

let img = document.getElementById("sliderImage");

setInterval(() => {

img.style.opacity = 0;

setTimeout(() => {

index = (index + 1) % images.length;

img.src = images[index];

img.style.opacity = 1;

},500);

},5000);


/* ABOUT DATA */

const aboutData = {

telangana: {
title: "About Telangana",
images: ["a4 (1).png","a4 (2).png","a4 (3).png","a4 (4).png"],

text: `Telangana, as a geographical and political entity was born on June 2, 2014 as the 29th and the youngest state in Union of India.`,

linkText: "Read More ↗",
link: "https://www.telangana.gov.in/services/meeseva-services/",
websiteText: "Visit Website",
website: "#",


extraText: "",
extraLink: ""
},

citizen: {
title: "Citizen Services",

text: `Citizen Services provide online government services such as certificates, applications, payments and public welfare services.
“Meeseva” in Telugu means, ‘At your service’, i.e. service to citizens. It is a good governance initiative that for the entire range of G2C& G2B services.
 The objective of MeeSeva is to provide smart, citizen-centric, ethical, efficient, and effective governance facilitated by technology.`,

linkText: "Read More ↗",
link: "#",

websiteText: "Visit Website",
website: "#",

extraText: "",
extraLink: ""
},

invest: {
title: "Invest in Telangana",

text: `Telangana has been at the forefront of development with innovative policy initiatives to encourage the establishment of business ventures and investment. Since 2016 Telangana has consistently been amongst the top-3 states for ‘Ease of Doing Business.’ 
Telangana is the fastest growing State in India recording 14.9% Gross State Domestic Product (GSDP) growth in 2018-19. `,

linkText: "Read More ↗",
link: "https://www.telangana.gov.in/invest-in-telangana/",

websiteText: "Visit Website",
website: "https://invest.telangana.gov.in/#",

extraText: "",
extraLink: ""
},

working: {
title: "Working in Telangana",

text: `Telangana is a booming place for people looking for work opportunities in various fields like IT, Pharma & Life Sciences, public sector, innovation & entrepreneurship, among others.

Over 22.5 lakh jobs have been created in the state in 14 priority sectors in the past 9 years.

According to the household survey of the Centre for Monitoring Indian Economy (CMIE) in April, 2023, Telangana was the only major State in the country to record a Labour Participation Rate of more than 52.43 per cent.

With the employment rate being on the surge and unemployment on a declining trajectory, the state with its promising work culture, affordable travel and connectivity is haven to people looking for work opportunities.`,

linkText: "Read More ↗",
link: "https://www.telangana.gov.in/working-in-telangana/",

websiteText: "Visit Website",
website: "https://www.tgiic.telangana.gov.in/",

extraText: "",
extraLink: ""
},

learning: {
title: "Learning in Telangana",

text: `Telangana has world class educational institutions that provide quality education in a variety of disciplines and has opportunities in different sectors that one can enter after their education.

Students after receiving quality education, are equipped with all the skills required to get into any field of their choice.

Telangana has seen an exponential increase in the number of students from the state receiving admissions in numerous reputed institutions across the globe.`,

linkText: "Read More ↗",
link: "https://www.telangana.gov.in/learning-in-telangana/",

websiteText: "Visit Website",
website: "#",

extraText: "",
extraLink: ""
},

living: {
title: "Living in Telangana",

text: `Telangana is a rapidly developing state and economy.

With quality infrastructure in Transportation, Energy, Communications, Water supply, and Sanitation, affordable living, increasing green cover and pleasant climate, Telangana is rapidly becoming the most accessible and sought after state to live in.`,

linkText: "Read More ↗",
link: "https://www.telangana.gov.in/living-in-telangana/",

websiteText: "Visit Website",
website: "#",
extraText: "",
extraLink: ""
},

visiting: {
title: "Visiting Telangana",

text: `Telangana’s rich cultural heritage, history and topography have endowed the state with a variety of tourist destinations, from waterfalls and hills to temples and forts.

With affordable travel and stay, a unique albeit delicious blend of South-indian and Nizami cuisines, Telangana has a little something for every visitor.`,

linkText: "Watch Video",
link: "https://www.youtube.com/watch?v=MLjS2XU9w9A&feature=youtu.be",

websiteText: "Visit Page",
website: "https://www.telangana.gov.in/telangana-tourism/",

extraText: "Wild-Life-Telangana",
extraLink: "#"
}

};


/* CHANGE FUNCTION */

function changeAbout(section, button){

let data = aboutData[section];

document.getElementById("aboutTitle").innerText = data.title;

document.getElementById("aboutText").innerText = data.text;

document.getElementById("aboutLink").innerText = data.linkText;
document.getElementById("aboutLink").href = data.link;

document.getElementById("aboutWebsite").innerText = data.websiteText;
document.getElementById("aboutWebsite").href = data.website;

let extraBtn = document.getElementById("aboutExtra");

if(data.extraText !== ""){

extraBtn.innerText = data.extraText;
extraBtn.href = data.extraLink;
extraBtn.style.display = "inline-block";

}else{

extraBtn.style.display = "none";

}

/* SHOW IMAGES ONLY FOR TELANGANA */

let imageBox = document.querySelector(".about-images");

if(section === "telangana"){

imageBox.style.display = "flex";

document.getElementById("aboutImg1").src = data.images[0];
document.getElementById("aboutImg2").src = data.images[1];
document.getElementById("aboutImg3").src = data.images[2];
document.getElementById("aboutImg4").src = data.images[3];

}else{

imageBox.style.display = "none";

}

let buttons = document.querySelectorAll(".about-btn");

buttons.forEach(btn => btn.classList.remove("active-btn"));

button.classList.add("active-btn");

}
