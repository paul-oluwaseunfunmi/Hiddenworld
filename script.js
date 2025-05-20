window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const header = document.querySelector('h1');
    
    if (width < 600) {
        header.textContent = "Explore Hidden Mysteries!";
    } else {
        header.textContent = "Hidden World";
    }
});
