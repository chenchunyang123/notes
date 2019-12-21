module.exports = {
    title: '一条放了盐的鱼',
    description: '前端笔记|前端博客|静态博客网站',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            {
                text: '我的笔记',
                items: [
                    { text: 'React', link: '/react/开始' },
                    // { text: '微信小程序', link: '/miniprogram/' },
                    // { text: 'Vue', link: '/vue/' },
                    // { text: 'Webpack', link: '/webpack/' },
                    // { text: 'Node', link: '/node/' },
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
    base: './',
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