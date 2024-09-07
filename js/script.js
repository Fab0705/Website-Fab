document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtnContact = document.querySelector('.dropdown-contact');
    const dropdownContentContact = document.querySelector('.content-contact');

    dropdownBtnContact.addEventListener('click', function() {
        // Alterna la visibilidad del contenido de contacto
        dropdownContentContact.style.display = dropdownContentContact.style.display === 'block' ? 'none' : 'block';
    });

    // Cierra el desplegable si se hace clic en cualquier otro lugar de la página
    window.addEventListener('click', function(e) {
        if (!dropdownBtnContact.contains(e.target) && !dropdownContentContact.contains(e.target)) {
            dropdownContentContact.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtns = document.querySelectorAll('.dropdown-btn');
    const contentUsil = document.querySelector('.content-usil');
    const contentIdat = document.querySelector('.content-idat');
    const dropdownContent = document.querySelector('.dropdown-content');
    const closeBtns = document.querySelectorAll('.close-btn');

    dropdownBtns.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            // Muestra el contenido debajo de los botones
            dropdownContent.classList.add('active');
            
            // Muestra el contenido correspondiente según el botón que se ha clicado
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
});