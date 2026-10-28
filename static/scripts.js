// MARK: google tag
window.dataLayer = window.dataLayer || [];
function gtag() {
    window.dataLayer.push(arguments);
}

gtag('consent', 'default', {
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'ad_storage': 'denied',
    'analytics_storage': 'denied',
    'wait_for_update': 500,
});
gtag('js', new Date());
gtag('config', 'G-0JXMBSC6CT');

// MARK: docsify config
window.$docsify = {
    name: 'A digital garden of math, computer science, 3D modeling, electronics, and curious ideas',
    repo: '',
    loadSidebar: true,
    loadNavbar: true,
    auto2top: true,
    maxLevel: 3,
    subMaxLevel: 2,
    logo: "../docs/_media/icon.png"
};

window.addEventListener('DOMContentLoaded', () => {
    // MARK: cookie banner
    const cookieBanner = document.getElementById('cookie-banner');
    const consent = localStorage.getItem('cookie_consent');
    const updateCookieBannerSpace = () => {
        if (cookieBanner.style.display === 'flex') {
            document.body.style.paddingBottom = `${cookieBanner.offsetHeight}px`;
        }
    };

    const hideCookieBanner = () => {
        cookieBanner.style.display = 'none';
        document.body.style.paddingBottom = '';
    };

    document.getElementById('accept-cookies').addEventListener('click', () => {
        gtag('consent', 'update', {
            'analytics_storage': 'granted',
            'ad_storage': 'granted',
            'ad_user_data': 'granted',
            'ad_personalization': 'granted'
        });
        localStorage.setItem('cookie_consent', 'accepted');
        hideCookieBanner();
    });

    document.getElementById('reject-cookies').addEventListener('click', () => {
        localStorage.setItem('cookie_consent', 'rejected');
        hideCookieBanner();
    });

    if (consent === 'accepted') {
        document.getElementById('accept-cookies').click();
    } else if (!consent) {
        cookieBanner.style.display = 'flex';
        updateCookieBannerSpace();
    }

    window.addEventListener('resize', updateCookieBannerSpace);

    // MARK: change theme
    const theme_stylesheet = document.getElementById('theme-stylesheet');
    const theme_icon = document.getElementById('theme-icon');
    let is_dark_theme = localStorage.getItem('is_dark_theme') === 'true';

    const updateTheme = () => {
        if (is_dark_theme) {
            theme_stylesheet.media = '(prefers-color-scheme: dark)';
            theme_icon.textContent = 'light_mode';
        } else {
            theme_stylesheet.media = '(prefers-color-scheme: light)';
            theme_icon.textContent = 'dark_mode';
        }
    };

    updateTheme();

    document.getElementById('change-theme').addEventListener('click', () => {
        is_dark_theme = !is_dark_theme;
        localStorage.setItem('is_dark_theme', is_dark_theme);
        updateTheme();
    });
});
