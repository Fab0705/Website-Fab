document.addEventListener('DOMContentLoaded', function() {
    //Circle level language

    const circles = document.querySelectorAll('.circle');

    circles.forEach(circle => {
        const percent = circle.getAttribute('data-percent');
        
        circle.style.background = `conic-gradient(#fdc12d ${percent * 3.6}deg, #3b3b47 0deg)`;
    });
});

document.querySelectorAll('#see-more').forEach(button => {
    button.addEventListener('click', () => {
        const target = document.querySelector(button.getAttribute('data-target'));
        if (target) {
            target.classList.add('show');
            target.classList.remove('fade');
        }
    });
});

document.querySelectorAll('#closeModalFooter').forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        if (modal) {
            modal.classList.remove('show');
            modal.classList.add('fade');
        }
    });
});
document.querySelectorAll('#closeModal').forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        if (modal) {
            modal.classList.remove('show');
            modal.classList.add('fade');
        }
    });
});

window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('show');
        event.target.classList.add('fade');
    }
});

const toggleButton = document.querySelector('.toggle-button');
const mobileAside = document.querySelector('#mobile-aside');
const overlay = document.querySelector('#overlay');

const toggleMenu = () => {
    const isActive = mobileAside.classList.contains('active');
    
    if (isActive) {
        mobileAside.classList.remove('active');
        overlay.classList.remove('active');
        mobileAside.style.display = 'none';
        overlay.style.display = 'none';
    } else {
        mobileAside.style.display = 'block';
        overlay.style.display = 'block';
        setTimeout(() => {
            mobileAside.classList.add('active');
            overlay.classList.add('active');
        }, 10);
    }
};

toggleButton.addEventListener('click', toggleMenu);

const checkWindowSize = () => {
    if (window.innerWidth > 1000) {
        mobileAside.style.display = 'none';
        overlay.style.display = 'none';
        mobileAside.classList.remove('active');
        overlay.classList.remove('active');
    } else {
        mobileAside.style.display = '';
        overlay.style.display = '';
    }
};

window.addEventListener('resize', checkWindowSize);

checkWindowSize();


const flagsElement = document.getElementById("flags");

const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async language=>{
    const requestJson = await fetch(`./languages/${language}.json`);
    const texts = await requestJson.json();

    for (const textToChange of textsToChange)
    {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML = texts[section][value];
    }
};

flagsElement.addEventListener("click", (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
});