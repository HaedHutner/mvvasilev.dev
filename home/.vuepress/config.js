module.exports = {
    locales: {
        '/': {
            lang: "en-US",
            title: "Miroslav Vasilev",
            description: "Personal website and virtual resume"
        },
        '/bg/': {
            lang: "bg-BG",
            title: "Мирослав Василев",
            description: "Личен сайт и виртуално резюме"
        }
    },
    themeConfig: {
        displayAllHeaders: true,
        sidebarDepth: 2,
        locales: {
            '/': {
                selectText: "Language",
                label: "English",
                nav: [],
                sidebar: [
                    "/biography",
                    "/technologies",
                    "/education",
                    "/projects"
                ]
            },
            '/bg/': {
                selectText: "Език",
                label: "Български",
                nav: [],
                sidebar: [
                    "/bg/biography",
                    "/bg/technologies",
                    "/bg/education"
                ]
            }
        }
    }
}