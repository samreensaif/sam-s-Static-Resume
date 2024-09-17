"use strict";
const toggleBtn = document.getElementById('toggle-btn');
let currentIndex = 0; // Start with the "Objective" section
toggleBtn.addEventListener('click', () => {
    const sections = document.querySelectorAll('main > section');
    // Reset the background color of the previous section
    sections.forEach(section => section.style.backgroundColor = '');
    // Highlight the current section
    sections[currentIndex].style.backgroundColor = 'rgba(217, 255, 0, 0.3)';
    // Move to the next section (loop back if at the end)
    currentIndex = (currentIndex + 1) % sections.length;
});
