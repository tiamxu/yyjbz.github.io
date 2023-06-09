// head
module.exports = [
  // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  // ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
  ['meta',{name: 'keywords',content: 'Linux,DevOps,linux运维,jenkins,go,golang,kubernetes,大数据,'}],
  // ['meta', { name: 'baidu-site-verification', content: 'code-LTKHwOecxI' }], // 百度统计的站长验证
  ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],  // 解决 Chrome 网站统计不准确问题
  ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
  ['link', { rel: 'stylesheet', href: 'https://at.alicdn.com/t/font_3114978_qe0b39no76.css' }], // 阿里云在线矢量库,字数和访客数图标使用
  // 搜索框添加快捷键
  // ["script", {"language": "javascript", "type": "text/javascript", "src": "/js/pgmanor-self.js"}]
  // Twikoo 评论系统
  ['script', { src: 'https://cdn.staticfile.org/twikoo/1.6.7/twikoo.all.min.js' }]
  // [
  //   'script',
  //   {
  //     'data-ad-client': 'ca-pub-7828333725993554',
  //     async: 'async',
  //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
  //   },
  // ], // 网站关联Google AdSense 与 html格式广告支持
]