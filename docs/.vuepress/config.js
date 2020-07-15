module.exports = {
    title: '一条放了盐的鱼',
    description: '大前端笔记|前端博客|静态博客网站',
    head: [
        ['link', { rel: 'icon', href: 'http://k3867d.coding-pages.com/fish.ico' }]
    ],
    themeConfig: {
        lastUpdated: '上次更新',
        nav: [
            { text: '主页', link: '/' },
            {
                text: '分类',
                items: [
                    // {
                    //     text: '前端', items: [
                    //         { text: 'react', link: '/react/' },
                    //         { text: 'vue', link: '1' }
                    //     ]
                    // },
                    // {
                    //     text: '后端', items: [
                    //         { text: 'node', link: '1' },
                    //         { text: 'koa', link: '1' }
                    //     ]
                    // },
                    {text: '待完善', link: '/wait'}
                ]
            },
            {
              text: '前端书籍笔记',
              items: [
                  {text: 'js高级程序设计(第三版)', link: '/books/Professional-JavaScript/01/01'}
              ]
          },
            { text: '有道云笔记', link: '/youdaoNotes/' },
            { text: '更新日志', link: '/logs/' },
            { text: '我的博客', link: 'http://chenchunyang.site/' },
            { text: 'Github', link: 'https://github.com/chenchunyang123' },
        ],
        sidebar: {
            '/react/': [
                '开始',
                'aa'
            ],
            '/youdaoNotes/': [
                {
                    title: 'html',   // 必要的
                    collapsable: true, // 可选的, 默认值是 true,
                    children: [
                        'html/01',
                        'html/02',
                    ]
                },
                {
                    title: 'css',
                    children: [
                        'css/01',
                        'css/02',
                        'css/03',
                        'css/04',
                        'css/05',
                        'css/06',
                        'css/07',
                    ]
                },
                {
                    title: 'html5',
                    children: [
                        'html5/01',
                        'html5/02',
                        'html5/03',
                        'html5/04',
                        'html5/05',
                        'html5/06',
                        'html5/07',
                    ]
                },
                {
                    title: '布局模型',
                    children: [
                        'models/01',
                        'models/02',
                        'models/03',
                        'models/04',
                        'models/05',
                    ]
                },
                {
                    title: 'js基础',
                    children: [
                        'js-basic/01',
                        'js-basic/02',
                        'js-basic/03',
                        'js-basic/04',
                        'js-basic/05',
                        'js-basic/06',
                        'js-basic/07',
                        'js-basic/08',
                        'js-basic/09',
                        'js-basic/10',
                        'js-basic/11',
                        'js-basic/12',
                        'js-basic/13',
                        'js-basic/14',
                    ]
                },
                {
                    title: 'jq',
                    children: [
                        'jq/01',
                        'jq/02',
                        'jq/03',
                        'jq/04',
                        'jq/05',
                        'jq/06',
                        'jq/07',
                        'jq/08',
                        'jq/09',
                        'jq/10',
                    ]
                },
                {
                    title: 'js进阶',
                    children: [
                        'js-advanced/01',
                        'js-advanced/02',
                        'js-advanced/03',
                        'js-advanced/04',
                        'js-advanced/05',
                        'js-advanced/06',
                        'js-advanced/07',
                        'js-advanced/08',
                        'js-advanced/09',
                        'js-advanced/10',
                        'js-advanced/11',
                    ]
                },
                {
                    title: 'es5',
                    children: [
                        'es5/01',
                        'es5/02',
                        'es5/03',
                        'es5/04',
                        'es5/05',
                    ]
                },
                {
                    title: '模块化',
                    children: [
                        'modular/01',
                        'modular/02',
                    ]
                },
                {
                    title: '设计模式',
                    children: [
                        'js-design/01',
                        'js-design/02',
                        'js-design/03',
                    ]
                },
                {
                    title: 'nodejs',
                    children: [
                        'nodejs/01',
                        'nodejs/02',
                        'nodejs/03',
                        'nodejs/04',
                        'nodejs/05',
                        'nodejs/06',
                        'nodejs/07',
                        'nodejs/08',
                        'nodejs/09',
                    ]
                },
                {
                    title: 'gulp',
                    children: [
                        'gulp/01',
                        'gulp/02',
                    ]
                },
                {
                    title: 'webpack',
                    children: [
                        'webpack/01',
                        'webpack/02',
                    ]
                },
                {
                    title: 'es6',
                    children: [
                        'es6/01',
                        'es6/02',
                        'es6/03',
                        'es6/04',
                    ]
                },
                {
                    title: 'koa',
                    children: [
                        'koa/01'
                    ]
                },
                {
                    title: 'css预编译语言',
                    children: [
                        'pre-compiled-language/01',
                        'pre-compiled-language/02',
                    ]
                },
                {
                    title: '微信小程序',
                    children: [
                        'wechat/01',
                        'wechat/02',
                        'wechat/03',
                        'wechat/04',
                    ]
                },
                {
                    title: 'vue',
                    children: [
                        'vue/01',
                        'vue/02',
                        'vue/03',
                        'vue/04',
                        'vue/05',
                        'vue/06',
                    ]
                },
                {
                    title: 'react',
                    children: [
                        'react/01',
                        'react/02',
                        'react/03',
                        'react/04',
                        'react/05',
                    ]
                },
                {
                    title: 'typescript',
                    children: [
                        'ts/01.md'
                    ]
                },
                {
                    title: '移动端',
                    children: [
                        'mobile/01'
                    ]
                },
            ],
            '/books/Professional-JavaScript/': [
              {
                title: '一、js简介',   // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                children: [
                    '01/01',
                ]
              },  
              {
                title: '二、在HTMl中使用js',
                children: [
                    '02/01',
                    '02/02',
                    '02/03'
                ]
              },
              {
                title: '三、基本概念',
                children: [
                    '03/01',
                    '03/02',
                    '03/03',
                    '03/04',
                    '03/05',
                    '03/06',
                    '03/07',
                ]
              },
              {
                title: '四、变量、作用域和内存',
                children: [
                    'html/01',
                    'html/02',
                ]
              },
              // {
              //   title: '五、引用类型',
              //   children: [
              //       'html/01',
              //       'html/02',
              //   ]
              // },
              // {
              //   title: '六、面向对象的程序设计',
              //   children: [
              //       'html/01',
              //       'html/02',
              //   ]
              // },
              // {
              //   title: '七、函数表达式',
              //   children: [
              //       'html/01',
              //       'html/02',
              //   ]
              // },
              // {
              //   title: '八、BOM',
              //   children: [
              //       'html/01',
              //       'html/02',
              //   ]
              // },
              // {
              //   title: '九、客户端检测',
              //   children: [
              //       'html/01',
              //       'html/02',
              //   ]
              // },
              // {
              //   title: '十、DOM',
              //   children: [
              //       'html/01',
              //       'html/02',
              //   ]
              // },
              // {
              //   title: '十一、DOM扩展',
              //   children: [
              //       'html/01',
              //       'html/02',
              //   ]
              // },
              // {
              //   title: '十二、DOM2和DOM3',
              //   children: [
              //       'html/01',
              //       'html/02',
              //   ]
              // },
              // {
              //   title: '十三、事件',
              //   children: [
              //       'html/01',
              //       'html/02',
              //   ]
              // },
              // {
              //   title: '十四、表单脚本',
              //   children: [
              //       'html/01',
              //       'html/02',
              //   ]
              // },
              // {
              //   title: '十五、使用canvas绘图',
              //   children: [
              //       'html/01',
              //       'html/02',
              //   ]
              // },
              // {
              //   title: '十六、HTML5脚本编程',
              //   children: [
              //       'html/01',
              //       'html/02',
              //   ]
              // },
              // {
              //   title: '十七、错误处理与调试',
              //   children: [
              //       'html/01',
              //       'html/02',
              //   ]
              // },
              // {
              //   title: '十八、JS和XML',
              //   children: [
              //       'html/01',
              //       'html/02',
              //   ]
              // },
              // {
              //   title: '十九、E4X',
              //   children: [
              //       'html/01',
              //       'html/02',
              //   ]
              // },
              // {
              //   title: '二十、JSON',
              //   children: [
              //       'html/01',
              //       'html/02',
              //   ]
              // },
              // {
              //   title: '二十一、Ajax和Comet',
              //   children: [
              //       'html/01',
              //       'html/02',
              //   ]
              // },
              // {
              //   title: '二十二、高级技巧',
              //   children: [
              //       'html/01',
              //       'html/02',
              //   ]
              // },
              // {
              //   title: '二十三、离线应用与客户端存储',
              //   children: [
              //       'html/01',
              //       'html/02',
              //   ]
              // },
              // {
              //   title: '二十四、最佳实践',
              //   children: [
              //       'html/01',
              //       'html/02',
              //   ]
              // },
              // {
              //   title: '二十五、新兴的API',
              //   children: [
              //       'html/01',
              //       'html/02',
              //   ]
              // }
            ]
        }
    },
    base: '/dist/',
    dest: './dist', // 输出目录
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