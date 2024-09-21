const sideMenu = document.getElementById('side-menu');
const menuBtn = document.getElementById('menu-btn');
const menuDiv = document.getElementById('menu-div');
const sideMenuLi = document.querySelectorAll('#side-menu li');
const switchBtn = document.getElementById('switch-btn');
const readMoreLinks = document.querySelectorAll('.read-more-link');

const openMenu = () => {
    sideMenu.style.transform = 'translateX(-16rem)';
}

const closeMenu = () => {
    sideMenu.style.transform = 'translateX(16rem)';
}

menuBtn.addEventListener('click', openMenu);
menuDiv.addEventListener('click', closeMenu);
sideMenuLi.forEach(li => li.addEventListener('click', closeMenu));

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav');

    if (window.scrollY > 50) {
        navbar.classList.add('bg-gray-200', 'shadow-md', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        navbar.classList.remove('bg-transparent');
    } else {
        navbar.classList.add('bg-transparent');
        navbar.classList.remove('bg-gray-200', 'shadow-md', 'dark:bg-darkTheme', 'dark:shadow-white/20');
    }
});

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');

    if (document.documentElement.classList.contains('dark')) {
        localStorage.theme = 'dark';
    } else {
        localStorage.theme = 'light';
    }
}

switchBtn.addEventListener('click', toggleTheme);

readMoreLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const textP = link.previousElementSibling;
        textP.classList.toggle('hidden');

        if (textP.classList.contains('hidden')) {
            link.querySelector('span').textContent = 'Read more'; 
        } else {
            link.querySelector('span').textContent = 'Close'; 
        }
    });
});