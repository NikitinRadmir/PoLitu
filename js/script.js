document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const slideMenu = document.getElementById('slide-menu');
    const overlay = document.getElementById('overlay');

    menuToggle.addEventListener('click', function () {
        slideMenu.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', function () {
        slideMenu.classList.remove('active');
        overlay.classList.remove('active');
    });

    function setupHoverText(elementId, newText) {
        const element = document.getElementById(elementId);
        const originalText = element.textContent;

        element.addEventListener('mouseover', function() {
            element.style.opacity = '0';
            setTimeout(() => {
                element.textContent = newText;
                element.style.fontSize = '40px'; 
                element.style.opacity = '1';
            }, 500); 
        });

        element.addEventListener('mouseout', function() {
            element.style.opacity = '0';
            setTimeout(() => {
                element.textContent = originalText;
                element.style.fontSize = ''; 
                element.style.opacity = '1';
            }, 500); 
        });
    }

    setupHoverText('imij-title', 'Яркое видео, которое подчеркнёт ключевые преимущества продукта или компании');
    setupHoverText('klips-title', 'Короткое видео, сопровождающее музыкальное произведение и отражающее его атмосферу');
    setupHoverText('reports-title', 'Запись события с акцентом на ключевые моменты и эмоции участников');
    setupHoverText('photo-title', 'Запечатление мгновений и эмоций через визуальные образы');
    setupHoverText('social-title', 'Создадим уникальный видеоконтент, который привлечет внимание!');
});