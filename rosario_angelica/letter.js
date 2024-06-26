document.addEventListener('DOMContentLoaded', function() {
    const welcomeMessage = document.getElementById('welcome-message');
    const mainContent = document.getElementById('main-content');

    const sections = document.querySelectorAll('.content-section');

    function showMainContent() {
        welcomeMessage.style.animation = 'fadeOut 2s ease-in-out';
        welcomeMessage.addEventListener('animationend', () => {
            welcomeMessage.style.display = 'none';
            mainContent.classList.remove('hidden');
            mainContent.style.opacity = '1';
            document.querySelector('.content-section').classList.add('active');
        });
    }

    setTimeout(showMainContent, 3000); 

    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            dots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');

            const targetSectionId = dot.getAttribute('data-section');

            sections.forEach(section => section.classList.remove('active'));

            if (targetSectionId) {
                document.getElementById(targetSectionId).classList.add('active');
            }
        });
    });

    dots[0].classList.add('active');
    sections[0].classList.add('active');
});
