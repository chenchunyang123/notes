module.exports = {
    title: '一条放了盐的鱼',
    description: '大前端笔记|前端博客|静态博客网站',
    head: [
        ['link', { rel: 'icon', href: 'http://chenchunyang123.coding.me/ico/fish.ico' }]
    ],
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            {
                text: '我的笔记',
                ariaLabel: '我的笔记',
                items: [
                    {
                        text: '前端', items: [
                            { text: 'react', link: '/react/' },
                            { text: 'vue', link: '1' }
                        ]
                    },
                    {
                        text: '后端', items: [
                            { text: 'node', link: '1' },
                            { text: 'koa', link: '1' }
                        ]
                    },
                ]
            },
            { text: '我的博客', link: 'http://chenchunyang.site/' },
            { text: 'Github', link: 'https://github.com/chenchunyang123' },
        ],
        sidebar: {
            '/react/': [
                '开始',
                'aa'
            ],
        }
    },
    base: '/notes/dist/',
    dest: './dist',
    configureWebpack: {
        resolve: {
            alias: {
                '@': 'public'
            }
        }
    },
    plugins: [
        '@vuepress/back-to-top',
        'vuepress-plugin-smooth-scroll'
    ]
}