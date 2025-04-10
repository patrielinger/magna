document.addEventListener('DOMContentLoaded', () => {
    const imgContainers = document.querySelectorAll('.img-container');

    imgContainers.forEach((imgContainer) => {
        const images = imgContainer.querySelectorAll('.carousel-image');
        const leftArrow = imgContainer.querySelector('.left-arrow');
        const rightArrow = imgContainer.querySelector('.right-arrow');
        let currentIndex = 0;

        const updateCarousel = () => {
            images.forEach((img, index) => {
                img.classList.toggle('active', index === currentIndex);
            });
        };

        leftArrow.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateCarousel();
        });

        rightArrow.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            updateCarousel();
        });

        updateCarousel(); // Initialize the carousel
    });

    const textos = [
        "Bienvenido a Magna Importaciones",
        "Tu tienda de confianza",
        "Ofrecemos productos de calidad",
        "Envíos rápidos y seguros",
        "Atención al cliente excepcional",
        "Compra fácil y rápido",
        "Tu satisfacción es nuestra prioridad",
        "Productos seleccionados para ti",
        "Calidad y precio en un solo lugar",
        "Tu tienda online de confianza",
    ];

    let index = 0;
    const textElement = document.getElementById("text");

    function cambiarTexto() {
        // Cambiar el texto
        textElement.textContent = textos[index];

        // Incrementar el índice y reiniciarlo si llega al final
        index = (index + 1) % textos.length;
    }

    // Cambiar el texto cada 3 segundos (sincronizado con la animación CSS)
    cambiarTexto(); // Mostrar el primer texto inmediatamente
    setInterval(cambiarTexto, 3000);

    const modal = document.getElementById('modal');
    const btnDescripcion = document.querySelector('.btn-descripcion');
    const closeModal = document.querySelector('.modal .close');

    // Abrir el modal al hacer clic en el botón
    btnDescripcion.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    // Cerrar el modal al hacer clic en la "X"
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Cerrar el modal al hacer clic fuera del contenido
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
