const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const imageFilenames = ["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg","pic5.jpg"];

/* Declaring the alternative text for each image file */
const altText =  {
    "pic1.jpg" : "eye",
    "pic2.jpg" : "rock",
    "pic3.jpg" : "pansies",
    "pic4.jpg" : "tomb",
    "pic1.jpg" : "moth and leaf"
}

/* Looping through images */

for (const image of imageFilenames){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'imageFilenames/${image}');
    newImage.setAttribute('alt', altText[image]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener("click", ()=>{
    const buttonClass = btn.getAttribute("class");
    if (buttonClass === "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.background = "rgba(0,0,0,0.5)";
    }
    else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.background = "rgba(0,0,0,0)";
    }
});