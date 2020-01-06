const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');
const gradients = ["linear-gradient(to right, #4A00E0, #8E2DE2)", "linear-gradient(to right, #240b36, #c31432)", "linear-gradient(to right, #ffdde1, #ee9ca7)"];

const options = {
    threshold: 0.7
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(enteries) {
    enteries.forEach(entry=>{
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const gradientIndex = entry.target.getAttribute('data-index');
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
            height:coords.height,
            width:coords.width,
            top:coords.top,
            left:coords.left
        };
        if(entry.isIntersecting) {
            bubble.style.setProperty('left',`${directions.left}px`);
            bubble.style.setProperty('top',`${directions.top}px`);
            bubble.style.setProperty('height',`${directions.height}px`);
            bubble.style.setProperty('width',`${directions.width}px`);
            bubble.style.background=gradients[gradientIndex];
        }

    })
}

sections.forEach(section=>{
    observer.observe(section);
})