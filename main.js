"use strict";
let toggle = document.getElementById('toggle-btn');
let currentIndex = -1;
toggle.addEventListener('click', function () {
    const sections = document.querySelectorAll('main > section');
    // Remove highlight from the current section
    if (currentIndex >= 0) {
        sections[currentIndex].style.backgroundColor = '';
    }
    // Update the index to the next section
    currentIndex = (currentIndex + 1) % sections.length;
    // Highlight the new section
    sections[currentIndex].style.backgroundColor = 'lightblue';
});
