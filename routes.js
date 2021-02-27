const { getAllPages } = require('./static/adapters/contentful.adapter');

module.exports = async () => {
    const routes = {};

    const allPages = await getAllPages();
    allPages.forEach((page) => {
        const query = {
            pageId: page.sys.id,
            slug: page.seoHead.slug,
        };

        routes[page.seoHead.slug] = { page: '/page', query };
    });

    return routes;
};
