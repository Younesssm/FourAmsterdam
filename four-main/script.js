document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const modeToggle = document.getElementById('modeToggle');

    modeToggle.addEventListener('click', function () {
        body.classList.toggle('light-mode');
        body.classList.toggle('dark-mode');
    });
});
