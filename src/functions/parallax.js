// provides parallax effect on homepage speed of different elements with respect to mouse movement can be adjusted by data-speed attribute
const parallax = document.addEventListener('mousemove', function(e){
    this.querySelectorAll('.parallax').forEach(layer => {
        const speed = layer.getAttribute("data-speed");
        const x = (window.innerWidth - e.pageX*speed)/100;
        const y = (window.innerHeight - e.pageY*speed)/100;
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    })
});

export default parallax;