const themeSelector = document.getElementById('theme-selector');

if (localStorage.getItem('theme')) {
    const savedTheme = localStorage.getItem('theme');
    applyTheme(savedTheme);
    themeSelector.value = savedTheme;
}

themeSelector.addEventListener('change', function() {
    const selectedTheme = this.value;
    applyTheme(selectedTheme);
    localStorage.setItem('theme', selectedTheme);
});

function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
}
