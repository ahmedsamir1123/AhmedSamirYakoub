const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { resolve } = require('path');

const sitemap = new SitemapStream({ hostname: 'https://ahmed-samir-yakoub-portfolio.vercel.app/' });

// روابط أقسام الصفحة الواحدة
const routes = [
  '/',
  '/#Stats',
  '/#process',
  '/#portfolio',
  '/#cta',
  '/#contact',
];

(async () => {
  const writeStream = createWriteStream(resolve(__dirname, '../public/sitemap.xml'));

  sitemap.pipe(writeStream);

  routes.forEach((route) => {
    sitemap.write({
      url: route,
      changefreq: 'monthly',
      priority: route === '/' ? 1.0 : 0.6,
      lastmod: new Date().toISOString(),
    });
  });

  sitemap.end();

  await streamToPromise(sitemap);

  console.log('✅ Sitemap generated at public/sitemap.xml');
})();
