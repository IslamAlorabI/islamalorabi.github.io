document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    const nav = document.querySelector('nav');
    const html = document.documentElement;
    const langToggle = document.getElementById('langToggle');

    const translations = {
        en: {
            'nav.about': 'About',
            'nav.apps': 'Apps',
            'nav.contact': 'Contact',
            'hero.greeting': "Hi, I'm",
            'hero.subtitle': 'Android Developer • macOS Developer • Linux Enthusiast',
            'hero.tagline': 'Building apps that make a difference',
            'hero.cta.work': 'View My Work',
            'hero.cta.contact': 'Get In Touch',
            'about.title': 'About Me',
            'about.subtitle': 'Passionate about creating meaningful applications',
            'about.p1': "I'm a passionate developer specializing in Android and macOS applications. I love working with Linux, open-source technologies, and building tools that make life easier for users around the world.",
            'about.p2': "My focus is on creating clean, efficient, and user-friendly applications that solve real problems. I'm particularly interested in Islamic apps that help Muslims in their daily worship and spiritual journey.",
            'about.role': 'Developer & Creator',
            'skills.android': 'Android',
            'skills.swift': 'Swift/SwiftUI',
            'skills.linux': 'Linux',
            'skills.python': 'Python',
            'skills.kotlin': 'Kotlin',
            'skills.web': 'Web Development',
            'skills.telegram': 'Telegram Bots',
            'skills.mobile': 'Mobile Apps',
            'apps.title': 'My Apps',
            'apps.subtitle': 'Applications available for download',
            'apps.shafeezekr.name': 'ShafeeZekr',
            'apps.shafeezekr.desc': 'ShafeeZekr (Praising the Intercessor) An Islamic Dhikr reminder app that helps Muslims maintain their daily remembrance of Allah with customizable reminders and beautiful interface.',
            'apps.salattimes.name': 'Salat Times',
            'apps.salattimes.desc': 'A lightweight and elegant Prayer Times app for macOS, built natively using Swift and SwiftUI for a smooth macOS experience.',
            'apps.playstore': 'Get on Play Store',
            'apps.github': 'Download from GitHub',
            'contact.title': 'Get In Touch',
            'contact.subtitle': "Let's connect and build something great together",
            'footer.copyright': '© 2025 Islam AlorabI. All rights reserved.',
            'name': 'Islam',
            'name.last': 'AlorabI',
            'hero.name': 'Islam AlorabI',
            'about.name': 'Islam AlorabI'
        },
        ar: {
            'nav.about': 'نبذة عني',
            'nav.apps': 'تطبيقاتي',
            'nav.contact': 'تواصل معي',
            'hero.greeting': 'مرحباً، أنا',
            'hero.subtitle': 'مطور أندرويد • مطور macOS • متحمس للينكس',
            'hero.tagline': 'أبني تطبيقات تحدث فرقاً',
            'hero.cta.work': 'شاهد أعمالي',
            'hero.cta.contact': 'تواصل معي',
            'about.title': 'نبذة عني',
            'about.subtitle': 'شغوف بإنشاء تطبيقات ذات معنى',
            'about.p1': 'أنا مطور شغوف متخصص في تطبيقات أندرويد و macOS. أحب العمل مع لينكس والتقنيات مفتوحة المصدر وبناء أدوات تجعل الحياة أسهل للمستخدمين في جميع أنحاء العالم.',
            'about.p2': 'تركيزي على إنشاء تطبيقات نظيفة وفعالة وسهلة الاستخدام تحل مشاكل حقيقية. أنا مهتم بشكل خاص بالتطبيقات الإسلامية التي تساعد المسلمين في عبادتهم اليومية ورحلتهم الروحية.',
            'about.role': 'مطور ومبدع',
            'skills.android': 'أندرويد',
            'skills.swift': 'Swift/SwiftUI',
            'skills.linux': 'لينكس',
            'skills.python': 'بايثون',
            'skills.kotlin': 'كوتلن',
            'skills.web': 'تطوير الويب',
            'skills.telegram': 'بوتات تيليجرام',
            'skills.mobile': 'تطبيقات الجوال',
            'apps.title': 'تطبيقاتي',
            'apps.subtitle': 'تطبيقات متاحة للتحميل',
            'apps.shafeezekr.name': 'ذكرُ الشفيع',
            'apps.shafeezekr.desc': 'تطبيق تذكير بالأذكار الإسلامية يساعد المسلمين في الحفاظ على أذكارهم اليومية مع تذكيرات قابلة للتخصيص وواجهة جميلة.',
            'apps.salattimes.name': 'مواقيت الصلاة',
            'apps.salattimes.desc': 'تطبيق أنيق وخفيف لمواقيت الصلاة لنظام macOS، مبني بشكل أصلي باستخدام Swift و SwiftUI لتجربة سلسة.',
            'apps.playstore': 'احصل عليه من متجر Play',
            'apps.github': 'تحميل من GitHub',
            'contact.title': 'تواصل معي',
            'contact.subtitle': 'لنتواصل ونبني شيئاً رائعاً معاً',
            'footer.copyright': '© 2025 إسلام العرابي. جميع الحقوق محفوظة.',
            'name': 'إسلام',
            'name.last': 'العرابي',
            'hero.name': 'إسلام العرابي',
            'about.name': 'إسلام العرابي'
        }
    };

    function updateLanguage(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        if (lang === 'ar') {
            html.setAttribute('dir', 'rtl');
            html.setAttribute('lang', 'ar');
            langToggle.textContent = 'EN';
        } else {
            html.setAttribute('dir', 'ltr');
            html.setAttribute('lang', 'en');
            langToggle.textContent = 'عربي';
        }

        localStorage.setItem('lang', lang);
    }

    const savedLang = localStorage.getItem('lang') || 'en';
    updateLanguage(savedLang);

    langToggle.addEventListener('click', () => {
        const currentLang = html.getAttribute('lang') || 'en';
        const newLang = currentLang === 'en' ? 'ar' : 'en';
        updateLanguage(newLang);

        langToggle.style.transform = 'scale(1.1)';
        setTimeout(() => {
            langToggle.style.transform = '';
        }, 200);
    });

    const savedTheme = localStorage.getItem('theme') || 'dark';

    html.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);

        themeToggle.style.transform = 'rotate(360deg) scale(1.1)';
        setTimeout(() => {
            themeToggle.style.transform = '';
        }, 400);
    });

    function updateThemeIcon(theme) {
        themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    }

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn.textContent = '☰';
        });
    });

    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';

                const cards = entry.target.querySelectorAll('.app-card, .about-card, .skill-tag');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(section);
    });

    document.querySelectorAll('.app-card, .about-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease, box-shadow 0.4s ease, border-color 0.4s ease';
    });

    document.querySelectorAll('.skill-tag').forEach((tag, index) => {
        tag.style.opacity = '0';
        tag.style.transform = 'translateY(20px)';
        tag.style.transition = `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s, box-shadow 0.3s ease, border-color 0.3s ease`;
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = nav.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    let lastScroll = 0;
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const currentScroll = window.pageYOffset;

                if (currentScroll > 50) {
                    nav.classList.add('scrolled');
                } else {
                    nav.classList.remove('scrolled');
                }

                lastScroll = currentScroll;
                ticking = false;
            });
            ticking = true;
        }
    });

    document.querySelectorAll('.btn, .store-btn, .social-link').forEach(btn => {
        btn.addEventListener('mouseenter', function (e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            this.style.setProperty('--mouse-x', `${x}px`);
            this.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(40px)';

        setTimeout(() => {
            heroContent.style.transition = 'opacity 1s cubic-bezier(0.4, 0, 0.2, 1), transform 1s cubic-bezier(0.4, 0, 0.2, 1)';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 200);
    }

    document.querySelectorAll('.app-card').forEach(card => {
        card.addEventListener('mousemove', function (e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });

    const socialPreview = document.getElementById('socialPreview');
    const socialLinks = document.querySelectorAll('.social-link[data-preview-title]');

    const iconSVGs = {
        github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
        telegram: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>',
        'telegram-group': '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>',
        email: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>'
    };

    if (socialPreview && socialLinks.length > 0) {
        const previewIcon = socialPreview.querySelector('.social-preview-icon');
        const previewTitle = socialPreview.querySelector('.social-preview-title');
        const previewDesc = socialPreview.querySelector('.social-preview-desc');

        socialLinks.forEach(link => {
            link.addEventListener('mouseenter', function () {
                const title = this.dataset.previewTitle;
                const desc = this.dataset.previewDesc;
                const iconType = this.dataset.previewIcon;

                previewTitle.textContent = title;
                previewDesc.textContent = desc;
                previewIcon.className = 'social-preview-icon ' + iconType;
                previewIcon.innerHTML = iconSVGs[iconType] || '';

                socialPreview.classList.add('active');
            });

            link.addEventListener('mouseleave', function () {
                socialPreview.classList.remove('active');
            });
        });
    }
});
