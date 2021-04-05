const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Updating the Links
  
const links = document.querySelectorAll("nav a")
links[0].textContent = siteContent["nav"]["nav-item-1"]
links[1].textContent = siteContent["nav"]["nav-item-2"]
links[2].textContent = siteContent["nav"]["nav-item-3"]
links[3].textContent = siteContent["nav"]["nav-item-4"]
links[4].textContent = siteContent["nav"]["nav-item-5"]
links[5].textContent = siteContent["nav"]["nav-item-6"]
console.log(links);

//Updating the Header
const header = document.querySelectorAll('.cta_text')
document.querySelector('h1').textContent = siteContent["cta"]["h1"]

//Updating the Button
const headerButton = document.querySelector('.cta_text')
document.querySelector('button').textContent = siteContent["cta"]["button"]

//Updating the Image
const headerImg = document.querySelector('#cta-img')
headerImg.src = siteContent["cta"]["img-src"]

//Updating the Body
const bodyMain = document.querySelector('.top-content')
const bodyHeader = bodyMain.querySelectorAll('h4')
const bodyText = bodyMain.querySelectorAll('p')
bodyHeader[0].textContent = siteContent["main-content"]["features-h4"]
bodyHeader[1].textContent = siteContent["main-content"]["about-h4"]
bodyText[0].textContent = siteContent["main-content"]["features-content"]
bodyText[1].textContent = siteContent["main-content"]["about-content"]

//Updating the Body Image
const bodyImg = document.querySelector('.middle-img')
bodyImg.src = siteContent["main-content"]["middle-img-src"]

//Updating the Body Bottom
const bottomMain = document.querySelector('.bottom-content')
const bottomHeader = bottomMain.querySelectorAll('h4')
const bottomText = bottomMain.querySelectorAll('p')
bottomHeader[0].textContent = siteContent["main-content"]["services-h4"]
bottomHeader[1].textContent = siteContent["main-content"]["product-h4"]
bottomHeader[2].textContent = siteContent["main-content"]["vision-h4"]
bottomText[0].textContent = siteContent["main-content"]["services-content"]
bottomText[1].textContent = siteContent["main-content"]["product-content"]
bottomText[2].textContent = siteContent["main-content"]["vision-content"]