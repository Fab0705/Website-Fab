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
                contentIdat.classList.add('active');
                contentUsil.classList.remove('active');
            } else {
                contentUsil.classList.add('active');
                contentIdat.classList.remove('active');
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
