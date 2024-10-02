const toggleBtn = document.getElementById('toggle-btn') as HTMLButtonElement;
let currentIndex = 0; // Start with the "Objective" section

toggleBtn.addEventListener('click', () => {
    const sections = document.querySelectorAll('main > section') as NodeListOf<HTMLElement>;

    // Reset the background color of the previous section
    sections.forEach(section => section.style.backgroundColor = '');

    // Highlight the current section
    sections[currentIndex].style.backgroundColor = 'rgba(217, 255, 0, 0.3)';

    // Move to the next section (loop back if at the end)
    currentIndex = (currentIndex + 1) % sections.length;
});

let objBtn:any = document.getElementById('objBtn');
let workBtn:any = document.getElementById('workBtn');
let eduBtn:any = document.getElementById('eduBtn');
let achBtn:any = document.getElementById('achBtn');
let skillBtn:any = document.getElementById('skillBtn');
let downloadBtn:any = document.getElementById('downloadBtn');


let objSec:any = document.getElementById('objective');
let workSec:any = document.getElementById('work-experience');
let eduSec:any = document.getElementById('education');
let achSec:any = document.getElementById('achievements');
let skillSec:any = document.getElementById('skills');


objBtn.addEventListener('click', () => {
    
    if(objSec.style.display == 'block'){
        objSec.style.display = 'none';
    }
    else{
        objSec.style.display = 'block';
    }
})

workBtn.addEventListener('click', () => {
    if(workSec.style.display == 'block'){
        workSec.style.display = 'none';
    }
    else{
        workSec.style.display = 'block';
    }
})

eduBtn.addEventListener('click', () => {
    if(eduSec.style.display == 'block'){
        eduSec.style.display = 'none';
    }
    else{
        eduSec.style.display = 'block';
    }
})
achBtn.addEventListener('click', () => {
    if(achSec.style.display == 'block'){
        achSec.style.display = 'none';
    }
    else{
        achSec.style.display = 'block';
    }
})
skillBtn.addEventListener('click', () => {
    if(skillSec.style.display == 'block'){
        skillSec.style.display = 'none';
    }
    else{
        skillSec.style.display = 'block';
    }
})

downloadBtn.addEventListener('click',() =>{
    window.print();

})