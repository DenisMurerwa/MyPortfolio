// Typing Animation for the header text
var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Developer", "Computer Technician", "Mobile Developer"], 
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Radial Bar Animation
document.querySelectorAll('.radial-bar').forEach(function(bar) {
    let percentage = bar.getAttribute('data-percentage');
    if (percentage !== null) {
        let path = bar.querySelector('.path');
        let offset = (502 - (502 * percentage) / 100);
        if (path) {
            path.style.strokeDashoffset = offset;
        }
    }
});

// Function to display images based on the selected project type (Android or Web)
function showImages(projectType) {
    let imageContainer = document.querySelector('.portfolio-content');
    if (imageContainer) {
        imageContainer.innerHTML = ''; // Clear current content

        if (projectType === 'android') {
            for (let i = 1; i <= 11; i++) {
                let imgElement = document.createElement('img');
                imgElement.src = `1.jpg`; // Assuming all Android images are named 1.jpg to 11.jpg
                imageContainer.appendChild(imgElement);
            }
        } else if (projectType === 'web') {
            let img1 = document.createElement('img');
            img1.src = 'w1.png'; // Web Development images
            let img2 = document.createElement('img');
            img2.src = 'w2.png';
            imageContainer.appendChild(img1);
            imageContainer.appendChild(img2);
        }
    }
}
