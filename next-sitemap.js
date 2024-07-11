/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://jobhq.cloud',
    generateRobotsTxt: true, // Generate robots.txt file
    changefreq: 'daily', // Frequency of site changes
    priority: 0.7, // Default priority of the pages
    sitemapSize: 5000, // Max number of URLs per sitemap file
    outDir: './public', // Output directory for the sitemaps and robots.txt
    exclude: ['/admin/**', '/api/**', '/secret-page', '/private/*'], // Exclude specific pages or paths

    // Alternate language references for multi-language sites
    alternateRefs: [
        {
            hrefLang: 'en',
            href: 'https://jobhq.cloud/en',
        },
        // {
        //     hrefLang: 'es',
        //     href: 'https://jobhq.cloud/es',
        // },
        // {
        //     hrefLang: 'fr',
        //     href: 'https://jobhq.cloud/fr',
        // },
        // {
        //     hrefLang: 'de',
        //     href: 'https://jobhq.cloud/de',
        // },
    ],

    // Additional paths to be added to the sitemap
    additionalPaths: async (config) => [
        await config.transform(config, '/additional-page'),
        await config.transform(config, '/extra-page'),
    ],

    // Transform function to customize sitemap fields
    transform: async (config, path) => {
        return {
            loc: path, // URL location
            changefreq: path.includes('jobs') ? 'weekly' : config.changefreq,
            priority: path.includes('jobs') ? 0.5 : config.priority,
            lastmod: new Date().toISOString(),
            alternateRefs: config.alternateRefs ?? [],
        };
    },

    // Additional options for robots.txt
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/admin', '/secret-page', '/private/*'],
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
                disallow: '/admin',
            },
        ],
        additionalSitemaps: [
            'https://jobhq.cloud/sitemap-0.xml',
            'https://jobhq.cloud/sitemap-1.xml',
            'https://jobhq.cloud/my-custom-sitemap-1.xml',
            'https://jobhq.cloud/my-custom-sitemap-2.xml',
        ],
    },

    autoLastmod: true, // Automatically add lastmod property

    // Configurations for next.js images
    images: {
        domains: ['jobhq.cloud', 'example.com'], // List of allowed domains for images
        formats: ['image/avif', 'image/webp'],
    },
};
