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

document.addEventListener("click", function(e){
    let panel = document.getElementById("accessibilityPanel");
    let wrapper = document.querySelector(".accessibility-wrapper");

    if(!wrapper.contains(e.target)){
        panel.classList.remove("show");
    }
});

function toggleMenu(){
    document.getElementById("mainNav").classList.toggle("show");
}


function toggleSearch(){
    document.getElementById("searchOverlay").classList.toggle("show");
}

function performPortalSearch(){
    let query = document.getElementById("portalSearchInput").value.trim();
    if(query === ""){
        alert("Please enter a search keyword.");
        return;
    }
    window.open("https://www.telangana.gov.in/?s=" + encodeURIComponent(query), "_blank");
}

function updateLiveClock(){
    let now = new Date();
    document.getElementById("liveClock").innerText = "⏱️ Live System Time: " + now.toLocaleString();
}
setInterval(updateLiveClock, 1000);
updateLiveClock();


/* MAIN HERO PHOTO SLIDER */
let mainHeroIndex = 0;

let mainHeroCaptions = [
    {
        title: "Charminar",
        text: "Discover Telangana’s heritage, culture, architecture, tourism and public services."
    },
    {
        title: "Golconda Fort",
        text: "Explore the historic forts and monuments that showcase Telangana’s glorious past."
    },
    {
        title: "Assembly Building",
        text: "Stay connected with official government updates, departments and citizen services."
    },
    {
        title: "Warangal Gate",
        text: "Experience iconic landmarks and cultural richness across the state."
    },
    {
        title: "Ramappa Temple",
        text: "Visit UNESCO heritage sites, temples, lakes and traditional destinations."
    },
    {
        title: "Yadadri Temple",
        text: "Explore spiritual tourism, development initiatives and public information."
    }
];

function showMainHeroSlide(position){
    let slides = document.querySelectorAll(".mainHeroSlide");
    let dots = document.querySelectorAll(".mainHeroDot");
    let links = document.querySelectorAll(".mainHeroLink");

    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));
    links.forEach(link => link.classList.remove("active"));

    mainHeroIndex = position;

    slides[mainHeroIndex].classList.add("active");
    dots[mainHeroIndex].classList.add("active");
    links[mainHeroIndex].classList.add("active");

    document.getElementById("mainHeroCaption").innerText = mainHeroCaptions[mainHeroIndex].title;
    document.getElementById("mainHeroText").innerText = mainHeroCaptions[mainHeroIndex].text;
}

setInterval(() => {
    let slides = document.querySelectorAll(".mainHeroSlide");
    mainHeroIndex = (mainHeroIndex + 1) % slides.length;
    showMainHeroSlide(mainHeroIndex);
}, 4500);


/* ABOUT DATA */
const aboutData = {
    telangana: {
        title: "About Telangana",
        images: ["a4 (1).png","a4 (2).png","a4 (3).png","a4 (4).png"],
        text: `Telangana, as a geographical and political entity was born on June 2, 2014 as the 29th and the youngest state in Union of India.`,
        linkText: "Read More ↗",
        link: "https://www.telangana.gov.in/about/state-profile/",
        websiteText: "Visit Website",
        website: "https://www.telangana.gov.in/",
        extraText: "",
        extraLink: ""
    },

    citizen: {
        title: "Citizen Services",
        text: `Citizen Services provide online government services such as certificates, applications, payments and public welfare services.

“Meeseva” in Telugu means, ‘At your service’, i.e. service to citizens. It is a good governance initiative for the entire range of G2C and G2B services.

The objective of MeeSeva is to provide smart, citizen-centric, ethical, efficient, and effective governance facilitated by technology.`,
        linkText: "Read More ↗",
        link: "https://www.telangana.gov.in/services/meeseva-services/",
        websiteText: "Visit Website",
        website: "https://ts.meeseva.telangana.gov.in/",
        extraText: "",
        extraLink: ""
    },

    invest: {
        title: "Invest in Telangana",
        text: `Telangana has been at the forefront of development with innovative policy initiatives to encourage the establishment of business ventures and investment.

Since 2016 Telangana has consistently been amongst the top states for Ease of Doing Business.`,
        linkText: "Read More ↗",
        link: "https://www.telangana.gov.in/invest-in-telangana/",
        websiteText: "Visit Website",
        website: "https://invest.telangana.gov.in/#",
        extraText: "",
        extraLink: ""
    },

    working: {
        title: "Working in Telangana",
        text: `Telangana is a booming place for people looking for work opportunities in various fields like IT, Pharma & Life Sciences, public sector, innovation and entrepreneurship.

With employment opportunities and strong connectivity, the state is becoming a preferred place for working professionals.`,
        linkText: "Read More ↗",
        link: "https://www.telangana.gov.in/working-in-telangana/",
        websiteText: "Visit Website",
        website: "https://www.tgiic.telangana.gov.in/",
        extraText: "",
        extraLink: ""
    },

    learning: {
        title: "Learning in Telangana",
        text: `Telangana has world class educational institutions that provide quality education in a variety of disciplines.

Students are equipped with skills required to get into any field of their choice.`,
        linkText: "Read More ↗",
        link: "https://www.telangana.gov.in/learning-in-telangana/",
        websiteText: "Visit Website",
        website: "https://www.telangana.gov.in/learning-in-telangana/",
        extraText: "",
        extraLink: ""
    },

    living: {
        title: "Living in Telangana",
        text: `Telangana is a rapidly developing state and economy.

With quality infrastructure in transportation, energy, communications, water supply, sanitation, affordable living and increasing green cover, Telangana is becoming a sought-after state to live in.`,
        linkText: "Read More ↗",
        link: "https://www.telangana.gov.in/living-in-telangana/",
        websiteText: "Visit Website",
        website: "https://www.telangana.gov.in/living-in-telangana/",
        extraText: "",
        extraLink: ""
    },

    visiting: {
        title: "Visiting Telangana",
        text: `Telangana’s rich cultural heritage, history and topography have endowed the state with a variety of tourist destinations, from waterfalls and hills to temples and forts.

With affordable travel and stay, unique cuisine, lakes, historical attractions and medical tourism, Telangana has something for every visitor.`,
        linkText: "Watch Video",
        link: "https://www.youtube.com/watch?v=MLjS2XU9w9A&feature=youtu.be",
        websiteText: "Visit Page",
        website: "https://www.telangana.gov.in/telangana-tourism/",
        extraText: "Wild-Life-Telangana",
        extraLink: "#"
    }
};

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

    let imageBox = document.querySelector(".about-images");

    if(section === "telangana"){
        imageBox.style.display = "grid";
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


/* INTERACTIVE DISTRICT MAP - ALL 33 DISTRICTS */
const districtData = {
    adilabad: {
        name: "Adilabad",
        desc: "Adilabad is known for forests, waterfalls, tribal culture and scenic natural destinations.",
        known: "Kuntala Waterfalls, Tribal Heritage",
        sector: "Tourism & Forests",
        tourism: "Kuntala Waterfalls, Kawal Tiger Reserve",
        link: "https://adilabad.telangana.gov.in/"
    },
    bhadradri: {
        name: "Bhadradri Kothagudem",
        desc: "Bhadradri Kothagudem is known for the temple town of Bhadrachalam, forests and the Godavari river belt.",
        known: "Bhadrachalam Temple, Godavari River",
        sector: "Pilgrimage, Power & Forests",
        tourism: "Bhadrachalam, Parnasala, Kinnerasani Wildlife Sanctuary",
        link: "https://kothagudem.telangana.gov.in/"
    },
    hanumakonda: {
        name: "Hanumakonda",
        desc: "Hanumakonda is a historic and educational district in Telangana, famous for Kakatiya heritage and urban development around Warangal city.",
        known: "Thousand Pillar Temple, Kakatiya Heritage",
        sector: "Education, Heritage & Urban Services",
        tourism: "Thousand Pillar Temple, Bhadrakali Temple, Padmakshi Temple",
        link: "https://hanumakonda.telangana.gov.in/"
    },
    hyderabad: {
        name: "Hyderabad",
        desc: "Hyderabad is the capital city and a major hub for IT, pharmaceuticals, education, culture and administration.",
        known: "Charminar, HITEC City, Heritage Monuments",
        sector: "IT, Pharma & Administration",
        tourism: "Charminar, Golconda Fort, Hussain Sagar, Salar Jung Museum",
        link: "https://hyderabad.telangana.gov.in/"
    },
    jagtial: {
        name: "Jagtial",
        desc: "Jagtial is known for agriculture, historic forts and growing civic development in northern Telangana.",
        known: "Jagtial Fort, Agriculture",
        sector: "Agriculture & Trade",
        tourism: "Jagtial Fort, Dharmapuri Temple",
        link: "https://jagtial.telangana.gov.in/"
    },
    jangaon: {
        name: "Jangaon",
        desc: "Jangaon is known for temples, agriculture and its location between Hyderabad and Warangal.",
        known: "Temples, Agriculture",
        sector: "Agriculture & Local Trade",
        tourism: "Pembarthi Handicrafts, Kolanupaka Jain Temple nearby",
        link: "https://jangaon.telangana.gov.in/"
    },
    jayashankar: {
        name: "Jayashankar Bhupalpally",
        desc: "Jayashankar Bhupalpally is rich in forests, minerals, tribal culture and historic sites.",
        known: "Forests, Mining, Kaleshwaram Region",
        sector: "Mining, Irrigation & Forests",
        tourism: "Kaleshwaram Temple, Pandavula Guttalu",
        link: "https://bhupalpally.telangana.gov.in/"
    },
    jogulamba: {
        name: "Jogulamba Gadwal",
        desc: "Jogulamba Gadwal is famous for temples, handloom sarees and cultural heritage.",
        known: "Jogulamba Temple, Gadwal Sarees",
        sector: "Handlooms & Pilgrimage",
        tourism: "Alampur Jogulamba Temple, Gadwal Fort",
        link: "https://gadwal.telangana.gov.in/"
    },
    kamareddy: {
        name: "Kamareddy",
        desc: "Kamareddy is an agricultural district known for paddy, sugarcane and growing connectivity.",
        known: "Agriculture, Nizamsagar Area",
        sector: "Agriculture & Irrigation",
        tourism: "Nizamsagar Project, Pocharam Reservoir",
        link: "https://kamareddy.telangana.gov.in/"
    },
    karimnagar: {
        name: "Karimnagar",
        desc: "Karimnagar is known for granite, agriculture, education and historic cultural sites.",
        known: "Granite Industry, Lower Manair Dam",
        sector: "Granite, Agriculture & Education",
        tourism: "Lower Manair Dam, Elgandal Fort",
        link: "https://karimnagar.telangana.gov.in/"
    },
    khammam: {
        name: "Khammam",
        desc: "Khammam is known for agriculture, forests, coal belt connectivity and historic fort areas.",
        known: "Khammam Fort, Agriculture",
        sector: "Agriculture & Trade",
        tourism: "Khammam Fort, Lakaram Lake",
        link: "https://khammam.telangana.gov.in/"
    },
    kumuram: {
        name: "Kumuram Bheem Asifabad",
        desc: "Kumuram Bheem Asifabad is known for forests, tribal heritage and natural beauty.",
        known: "Tribal Heritage, Forests",
        sector: "Forests & Tribal Welfare",
        tourism: "Kawal Tiger Reserve region, Jodeghat",
        link: "https://kumurambheem.telangana.gov.in/"
    },
    mahabubabad: {
        name: "Mahabubabad",
        desc: "Mahabubabad is known for tribal culture, agriculture and forest resources.",
        known: "Tribal Culture, Forests",
        sector: "Agriculture & Tribal Welfare",
        tourism: "Bayyaram Lake, Kuravi Veerabhadra Swamy Temple",
        link: "https://mahabubabad.telangana.gov.in/"
    },
    mahbubnagar: {
        name: "Mahabubnagar",
        desc: "Mahabubnagar is a historic district known for agriculture, temples and connectivity to southern Telangana.",
        known: "Pillalamarri, Agriculture",
        sector: "Agriculture & Education",
        tourism: "Pillalamarri Banyan Tree, Koilsagar Project",
        link: "https://mahabubnagar.telangana.gov.in/"
    },
    mancherial: {
        name: "Mancherial",
        desc: "Mancherial is known for coal belt industries, forests and the Godavari river area.",
        known: "Coal Belt, Godavari River",
        sector: "Coal, Industry & Forests",
        tourism: "Gandhari Khilla, Godavari riverfront areas",
        link: "https://mancherial.telangana.gov.in/"
    },
    medak: {
        name: "Medak",
        desc: "Medak is famous for its historic cathedral, fort, wildlife sanctuary and agriculture.",
        known: "Medak Cathedral, Medak Fort",
        sector: "Agriculture & Tourism",
        tourism: "Medak Cathedral, Medak Fort, Pocharam Wildlife Sanctuary",
        link: "https://medak.telangana.gov.in/"
    },
    medchal: {
        name: "Medchal-Malkajgiri",
        desc: "Medchal-Malkajgiri is an urban district near Hyderabad with residential, industrial and educational growth.",
        known: "Urban Growth, IT Corridor Connectivity",
        sector: "Urban Services, Industry & Education",
        tourism: "Shamirpet Lake, urban recreation areas",
        link: "https://medchal-malkajgiri.telangana.gov.in/"
    },
    mulugu: {
        name: "Mulugu",
        desc: "Mulugu is known for forests, tribal culture, UNESCO heritage and natural tourism.",
        known: "Ramappa Temple, Forest Tourism",
        sector: "Tourism, Forests & Tribal Welfare",
        tourism: "Ramappa Temple, Laknavaram Lake, Bogatha Waterfalls, Medaram",
        link: "https://mulugu.telangana.gov.in/"
    },
    nagarkurnool: {
        name: "Nagarkurnool",
        desc: "Nagarkurnool is known for temples, agriculture and Nallamala forest region access.",
        known: "Nallamala Forest, Temples",
        sector: "Agriculture & Tourism",
        tourism: "Uma Maheshwaram, Somasila, Nallamala region",
        link: "https://nagarkurnool.telangana.gov.in/"
    },
    nalgonda: {
        name: "Nalgonda",
        desc: "Nalgonda is known for agriculture, irrigation projects, historic forts and Buddhist heritage sites.",
        known: "Nagarjuna Sagar, Historic Sites",
        sector: "Agriculture, Irrigation & Cement",
        tourism: "Nagarjuna Sagar, Deverakonda Fort, Panagal temples",
        link: "https://nalgonda.telangana.gov.in/"
    },
    narayanpet: {
        name: "Narayanpet",
        desc: "Narayanpet is known for handloom sarees, agriculture and cultural traditions.",
        known: "Narayanpet Handlooms",
        sector: "Handlooms & Agriculture",
        tourism: "Narayanpet handloom clusters, local temples",
        link: "https://narayanpet.telangana.gov.in/"
    },
    nirmal: {
        name: "Nirmal",
        desc: "Nirmal is famous for wooden toys, paintings, forts and natural attractions.",
        known: "Nirmal Toys, Paintings",
        sector: "Handicrafts & Tourism",
        tourism: "Nirmal Fort, Kuntala Waterfalls nearby, Kadam Dam",
        link: "https://nirmal.telangana.gov.in/"
    },
    nizamabad: {
        name: "Nizamabad",
        desc: "Nizamabad is known for agriculture, turmeric trade, temples and historic sites.",
        known: "Turmeric, Agriculture",
        sector: "Agriculture & Trade",
        tourism: "Nizamabad Fort, Dichpally Ramalayam, Ali Sagar",
        link: "https://nizamabad.telangana.gov.in/"
    },
    peddapalli: {
        name: "Peddapalli",
        desc: "Peddapalli is known for coal belt activity, power generation and agriculture.",
        known: "Ramagundam, Coal & Power",
        sector: "Power, Coal & Industry",
        tourism: "Ramagundam area, local temples",
        link: "https://peddapalli.telangana.gov.in/"
    },
    rajanna: {
        name: "Rajanna Sircilla",
        desc: "Rajanna Sircilla is known for textile weaving, temples and agriculture.",
        known: "Sircilla Textiles, Vemulawada Temple",
        sector: "Textiles, Handlooms & Pilgrimage",
        tourism: "Vemulawada Rajarajeshwara Temple, Manair River area",
        link: "https://rajannasircilla.telangana.gov.in/"
    },
    rangareddy: {
        name: "Ranga Reddy",
        desc: "Ranga Reddy surrounds Hyderabad and is known for IT expansion, industries, education and real estate growth.",
        known: "IT Growth, Industries, Hyderabad Surroundings",
        sector: "IT, Industry & Urban Development",
        tourism: "Ananthagiri Hills nearby, Osman Sagar surroundings",
        link: "https://rangareddy.telangana.gov.in/"
    },
    sangareddy: {
        name: "Sangareddy",
        desc: "Sangareddy is known for industries, educational institutions, agriculture and heritage sites.",
        known: "Industrial Growth, IIT Hyderabad",
        sector: "Industry, Education & Agriculture",
        tourism: "Manjeera Dam, Sangareddy Jail Museum",
        link: "https://sangareddy.telangana.gov.in/"
    },
    siddipet: {
        name: "Siddipet",
        desc: "Siddipet is known for agriculture, irrigation development and civic infrastructure.",
        known: "Irrigation Projects, Komati Cheruvu",
        sector: "Agriculture, Irrigation & Civic Development",
        tourism: "Komati Cheruvu, local temples",
        link: "https://siddipet.telangana.gov.in/"
    },
    suryapet: {
        name: "Suryapet",
        desc: "Suryapet is an important transport and agricultural district connecting Hyderabad and Vijayawada routes.",
        known: "Transport Connectivity, Agriculture",
        sector: "Agriculture, Trade & Transport",
        tourism: "Pillalamarri temples, local lakes",
        link: "https://suryapet.telangana.gov.in/"
    },
    vikarabad: {
        name: "Vikarabad",
        desc: "Vikarabad is known for Ananthagiri Hills, forests, cool climate and weekend tourism.",
        known: "Ananthagiri Hills, Forest Tourism",
        sector: "Tourism, Forests & Agriculture",
        tourism: "Ananthagiri Hills, Kotepally Reservoir",
        link: "https://vikarabad.telangana.gov.in/"
    },
    wanaparthy: {
        name: "Wanaparthy",
        desc: "Wanaparthy is known for palaces, agriculture, irrigation tanks and cultural heritage.",
        known: "Wanaparthy Palace, Agriculture",
        sector: "Agriculture & Heritage",
        tourism: "Wanaparthy Palace, Srirangapur Temple",
        link: "https://wanaparthy.telangana.gov.in/"
    },
    warangal: {
        name: "Warangal",
        desc: "Warangal is famous for Kakatiya history, forts, temples and educational importance.",
        known: "Warangal Fort, Kakatiya Heritage",
        sector: "Heritage, Education & Tourism",
        tourism: "Warangal Fort, Kakatiya Kala Thoranam, Bhadrakali Temple",
        link: "https://warangal.telangana.gov.in/"
    },
    yadadri: {
        name: "Yadadri Bhuvanagiri",
        desc: "Yadadri Bhuvanagiri is known for the famous Yadadri temple, forts and pilgrimage tourism.",
        known: "Yadadri Temple, Bhongir Fort",
        sector: "Pilgrimage & Tourism",
        tourism: "Yadadri Temple, Bhongir Fort, Kolanupaka Temple",
        link: "https://yadadri.telangana.gov.in/"
    }
};

function showDistrict(districtKey, clickedButton){
    const data = districtData[districtKey];

    if(!data){
        alert("District information not found.");
        return;
    }

    document.getElementById("districtName").innerText = data.name;
    document.getElementById("districtDesc").innerText = data.desc;
    document.getElementById("districtKnown").innerText = data.known;
    document.getElementById("districtSector").innerText = data.sector;
    document.getElementById("districtTourism").innerText = data.tourism;
    document.getElementById("districtLink").href = data.link;

    document.querySelectorAll(".district-btn").forEach(btn => btn.classList.remove("active"));
    clickedButton.classList.add("active");
}