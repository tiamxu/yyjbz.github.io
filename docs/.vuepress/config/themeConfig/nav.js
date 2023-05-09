// nav
module.exports = [
  { text: '首页', link: '/' },
  { text: '运维',link: '/ops/',
    items: [
      { text: 'Nginx', link: '/nginx/'},
      { text: 'Kafka', link: '/kafka/'},
    ]
  },
  { text: '数据库', link: '/database' ,
    items: [
      {
        text: 'SQL 数据库',
        items: [
          { text: 'MySQL', link: '/mysql/'},
          { text: 'PostgreSQL', link: '/pgsql/'},
        ]
      },
      {
        text: 'NoSQL 数据库',
        items: [
          { text: 'Clickhouse', link: '/ck/'},
          { text: 'Elasticsearch', link: '/es/'},
        ]
      },
    ]
  },
  { text: '专题',link: '/topic/',
    items: [
      { text: '个人博客', link: '/blog/'},
    ]
  },
  { text: '编程',link: '/code/',
  //   items: [
  //     { text: 'Shell', link: '/shell/'},
  //     { text: '前端实践', link: '/front-code/'},
  //     { text: 'Vue学习笔记', link: '/vue-learn/'},
  //     { text: 'Golang学习笔记', link: '/go-learn/'},
  //     { text: 'Golang编程技巧', link: '/go-code/'},
  //   ]
  },
  { text: '关于', link: '/about/' }
  // { text: '友链', link: '/friends/' },
  // {
  //   text: '页面',
  //   link: '/nav/',
  //   items: [
  //     {
  //       text: '本站索引',
  //       items: [
  //         { text: '分类', link: '/categories/' },
  //         { text: '标签', link: '/tags/' },
  //         { text: '归档', link: '/archives/' },
  //       ],
  //     },
  //     {
  //       text: '本站页面',
  //       items: [
  //         { text: '导航', link: '/nav/' },
  //         { text: '打赏', link: '/reward/' },
  //       ]
  //     }
  //     // {
  //     //   text: '我的工具',
  //     //   items: [
  //     //     { text: '备忘录清单', link: 'https://ref.gopron.online' },
  //     //     { text: '网站状态', link: 'http://uptime.gopron.online/dashboard' },
  //     //     { text: 'json2go', link: 'http://public.gopron.online/json2go' },
  //     //     { text: '微信MD编辑', link: 'http://public.gopron.online/mdnice' },
  //     //     { text: '国内镜像', link: 'http://public.gopron.online/mirror' },
  //     //     { text: '出口IP查询', link: 'http://ip.gopron.online' },
  //     //     { text: '代码高亮工具', link: 'http://public.gopron.online/highlight/' },
  //     //   ]
  //     // },
  //   //  {
  //   //     text: '外站页面',
  //   //     items: [
  //   //       { text: '开往', link: 'https://www.travellings.cn/go.html' },
  //   //       { text: 'ldapdoc', link: 'http://ldapdoc.gopron.online' },
  //   //       { text: 'HowToStartOpenSource', link: 'https://eryajf.github.io/HowToStartOpenSource' },
  //   //       { text: 'vdoing-template', link: 'https://eryajf.github.io/vdoing-template/' },
  //   //     ]
  //   //   }
  //   ],
  // },
  // { text: '开往', link: 'https://travellings.link' },
]