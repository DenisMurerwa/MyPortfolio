var typed = new Typed(".text", {
    strings: ["Frontend Developer" , "Web Developer" , "Computer Technician"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
document.querySelectorAll('.radial-bar').forEach(function(bar) {
    let percentage = bar.getAttribute('data-percentage');
    let path = bar.querySelector('.path');
    let offset = (502 - (502 * percentage) / 100);
     path.style.strokeDashoffset = offset;
});
