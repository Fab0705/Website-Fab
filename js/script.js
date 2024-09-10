document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtns = document.querySelectorAll('.dropdown-btn');
    const contentUsil = document.querySelector('.content-usil');
    const contentIdat = document.querySelector('.content-idat');
    const dropdownContent = document.querySelector('.dropdown-content');
    const closeBtns = document.querySelectorAll('.close-btn');
    const dropdownBtnContact = document.querySelector('.dropdown-contact');
    const dropdownContentContact = document.querySelector('.content-contact');
    
    dropdownBtns.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            dropdownContent.classList.add('active');
            
            if (index == 0) {
                contentUsil.classList.add('active');
                contentIdat.classList.remove('active');
            } else {
                contentIdat.classList.add('active');
                contentUsil.classList.remove('active');
            }
        });
    });

    // Cerrar al hacer clic en el botón "Close"
    closeBtns.forEach((btn) => {
        btn.addEventListener('click', function() {
            dropdownContent.classList.remove('active');
            contentUsil.classList.remove('active');
            contentIdat.classList.remove('active');
        });
    });

    dropdownBtnContact.addEventListener('click', function() {
        dropdownContentContact.style.display = dropdownContentContact.style.display === 'block' ? 'none' : 'block';
    });

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