const SitemapPlugin = require('sitemap-webpack-plugin').default;
const paths = [
    {
        path: '/',
        lastmod: new Date().toISOString().slice(0,10),
        priority: '0.8',
        changefreq: 'hourly'
    },
    {
      path: '/abonnementen',
      lastmod: new Date().toISOString().slice(0,10),
      priority: '0.8',
      changefreq: 'hourly'
    },
    {
      path: '/shop/taarten',
      lastmod: new Date().toISOString().slice(0,10),
      priority: '0.8',
      changefreq: 'hourly'
    },
    {
      path: '/shop/overige',
      lastmod: new Date().toISOString().slice(0,10),
      priority: '0.8',
      changefreq: 'hourly'
    },
    {
      path: '/shop/maaltijden',
      lastmod: new Date().toISOString().slice(0,10),
      priority: '0.8',
      changefreq: 'hourly'
    },
    {
      path: '/shop/maaltijden/volgende-week',
      lastmod: new Date().toISOString().slice(0,10),
      priority: '0.8',
      changefreq: 'hourly'
    },
    {
      path: '/over-ons',
      lastmod: new Date().toISOString().slice(0,10),
      priority: '0.8',
      changefreq: 'hourly'
    },
    {
      path: '/hoe-wij-rollen',
      lastmod: new Date().toISOString().slice(0,10),
      priority: '0.8',
      changefreq: 'hourly'
    },
    {
      path: '/faq',
      lastmod: new Date().toISOString().slice(0,10),
      priority: '0.8',
      changefreq: 'hourly'
    },
    {
      path: '/catering',
      lastmod: new Date().toISOString().slice(0,10),
      priority: '0.8',
      changefreq: 'hourly'
    },
    {
      path: '/contact',
      lastmod: new Date().toISOString().slice(0,10),
      priority: '0.8',
      changefreq: 'hourly'
    },
    {
      path: '/algemenevoorwaarden',
      lastmod: new Date().toISOString().slice(0,10),
      priority: '0.8',
      changefreq: 'hourly'
    },
    {
      path: '/privacyverklaring',
      lastmod: new Date().toISOString().slice(0,10),
      priority: '0.8',
      changefreq: 'hourly'
    }
];

module.exports = {
  configureWebpack: {
    //optimization: {
    //  splitChunks: false
    //},
    plugins: [
      new SitemapPlugin('https://peasandpeppers.nl', paths, {
          filename: 'sitemap.xml',
          lastmod: true,
          changefreq: 'hourly',
          priority: '0.8'
      })
    ]
  },
}