const button = document.getElementById("button");
const topNav = document.getElementById("topNav");
const aboutNav = document.getElementById("aboutNav");
const aboutContent = document.getElementById("aboutContent");
const addNav = document.getElementById("addNav");
const addContent = document.getElementById("addContent");
const toolsNav = document.getElementById("toolsNav");
const toolsContent = document.getElementById("toolsContent");
const indexNav = document.getElementById("indexNav");
const indexContent = document.getElementById("indexContent");

let aboutOn = false;
let addOn = false;
let toolsOn = false;
let indexOn = false;

let isColorBlind = false;

const images = document.querySelectorAll('#startingAccept, #startingUnknown, #startingNotAccept');
const waveAnimationTime = 1; // Duration of the wave animation in seconds
const waveAnimationDelayIncrement = 0.2; // Delay increment for each image
let maxDelay = 0;

images.forEach((image, index) => {
  const delay = waveAnimationDelayIncrement * index;
  image.style.animationDelay = `${delay}s`;
  maxDelay = delay; // Keep track of the maximum delay
});

// Calculate the total time to wait before starting the moveUpAndHide animation
const totalWaveAnimationDuration = waveAnimationTime + maxDelay;

// After the wave animations, move the container up and hide
setTimeout(() => {
  const splash = document.getElementById('startingSplash');
  splash.style.animation = 'moveUpAndHide 1s ease-in-out forwards';
  
  // Set another timeout to add the 'hidden' class after the moveUpAndHide animation completes
  setTimeout(() => {
    splash.classList.add('hidden');
  }, 1000); // This should match the duration of the moveUpAndHide animation
}, totalWaveAnimationDuration * 1200);

// On HAMBURGER Nav Click
button.onclick = () => {
    button.classList.toggle("toggled");
    if (button.classList.contains("toggled")){
        topNav.style.display = "flex";
    } 
    if (!button.classList.contains("toggled")){
        topNav.style.display = "none";
        removeNavClasses();
        isNavClosed();
    }
};

// On ABOUT Nav Click
aboutNav.onclick = () => {
    aboutNav.classList.toggle("toggledAbout");
    checkActiveNav();
    if (aboutNav.classList.contains("toggledAbout")){
        aboutNav.style.color = "#29b895";
        aboutContent.style.display = "flex";
        aboutOn = true;
    }
    if (!aboutNav.classList.contains("toggledAbout")){
        aboutNav.style.color = "black";
        aboutContent.style.display = "none";
        aboutOn = false;
    }
};

// on ADD Nav Click
addNav.onclick = () => {
    addNav.classList.toggle("toggledAdd");
    checkActiveNav();
    if (addNav.classList.contains("toggledAdd")){
        addNav.style.color = "#29b895";
        addContent.style.display = "block";
        addOn = true;
    }
    if (!addNav.classList.contains("toggledAdd")){
        addNav.style.color = "black";
        addContent.style.display = "none";
        addOn = false;
    }
};

// On ACCESS TOOLS Click
toolsNav.onclick = () => {
    toolsNav.classList.toggle("toggledTools");
    checkActiveNav();
    if (toolsNav.classList.contains("toggledTools")){
        toolsNav.style.color = "#29b895";
        toolsContent.style.display = "flex";
        toolsOn = true;
    }
    if (!toolsNav.classList.contains("toggledTools")){
        toolsNav.style.color = "black";
        toolsContent.style.display = "none";
        toolsOn = false;
    }
};


// On INDEX Click
indexNav.onclick = () => {
    indexNav.classList.toggle("toggledIndex");
    checkActiveNav();
    if (indexNav.classList.contains("toggledIndex")){
        indexNav.style.color = "#29b895";
        indexContent.style.display = "flex";
        indexOn = true;
    }
    if (!indexNav.classList.contains("toggledIndex")){
        indexNav.style.color = "black";
        indexContent.style.display = "none";
        indexOn = false;
    }
};

// Remove Nav Classes on navigation close
function removeNavClasses() {
    aboutNav.classList.remove("toggledAbout");
    addNav.classList.remove("toggledAdd");
    toolsNav.classList.remove("toggledTools");
    indexNav.classList.remove("toggledIndex");
}

// is NAV CLOSED?
function isNavClosed() {
    if (!aboutNav.classList.contains("toggledAbout")){
        aboutNav.style.color = "black";
        aboutContent.style.display = "none";
        aboutOn = false;
    }
    if (!addNav.classList.contains("toggledAdd")){
        addNav.style.color = "black";
        addContent.style.display = "none";
        addOn = false;
    }
    if (!toolsNav.classList.contains("toggledTools")){
        toolsNav.style.color = "black";
        toolsContent.style.display = "none";
        toolsOn = false;
    }
    if (!indexNav.classList.contains("toggledIndex")){
        indexNav.style.color = "black";
        indexContent.style.display = "none";
        indexOn = false;
    }
}

//Check for SWAPPING between nav selectors
function checkActiveNav() {
    if (aboutOn && toolsNav.classList.contains("toggledTools") || aboutOn && indexNav.classList.contains("toggledIndex") || aboutOn && addNav.classList.contains("toggledAdd")) {
        aboutNav.classList.remove("toggledAbout");
        isNavClosed();
    }
    if (addOn && toolsNav.classList.contains("toggledTools") || addOn && indexNav.classList.contains("toggledIndex") || addOn && aboutNav.classList.contains("toggledAbout")) {
        addNav.classList.remove("toggledAdd");
        isNavClosed();
    }
    if (toolsOn && aboutNav.classList.contains("toggledAbout") || toolsOn && indexNav.classList.contains("toggledIndex") || toolsOn && addNav.classList.contains("toggledAdd")) {
        toolsNav.classList.remove("toggledTools");
        isNavClosed();
    }
    if (indexOn &&  aboutNav.classList.contains("toggledAbout") || indexOn && toolsNav.classList.contains("toggledTools") || indexOn && addNav.classList.contains("toggledAdd")) {
        indexNav.classList.remove("toggledIndex");
        isNavClosed();
    }
}


function changeColorBlindColors() {
    // lol code this taylor
}