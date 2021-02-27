const compress = require('graphql-query-compress'); // TODO find about what this does
const axios = require('axios'); // Read documentation
const getPageContetTypesQuery = require('../pageQueries/getPageContentTypes.query');
const getSinglePageQuery = require('../pageQueries/getSinglePage.query');
const getAllPagesQuery = require('../pageQueries/getAllPages.query');

const baseApiUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.ENV}`;

const buildOptions = query => ({
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`,
    },
    body: JSON.stringify({query}),
});

const getPageContentTypes = (pageId) => {
    const options = buildOptions(compress(getPageContetTypesQuery(pageId)));

    return axios.post(baseApiUrl, options.body, { headers: options.headers })
        .then(res => res.data.data.page.contentCollection.items)
        .catch((e) => console.log('error fetching pageContentType in file contentful.adapters method "pageContentTypes"'));
};

const getPage = (pageId, componentsQuery) => {
    const options = buildOptions(compress(getSinglePageQuery(pageId, componentsQuery)));

    return axios.post(baseApiUrl, options.body, { headers: options.headers })
        .then(res => res.data.data.page)
        .catch(() => console.warn('Error fetching page in file contentful.adapters method "getPage" '));
};

const getAllPages = () => {
    const options = buildOptions(getAllPagesQuery);

    return axios.post(baseApiUrl, options.body, { headers: options.headers })
        .then(res => res.data.data.pageCollection.items)
        .catch(() => console.warn('Error fetching slugs in file contentful.adapters method "getAllPages"'));
};

module.exports = {
    getPageContentTypes,
    getPage,
    getAllPages
}