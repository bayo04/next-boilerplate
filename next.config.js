const getRoutes = require('./routes');

module.exports = {
    exportPathMap: getRoutes,
    webpack: (config, { defaultLoaders, dev }) => {
        config.module.rules.push({
            test: /\.s?css$/,
            use: [
                defaultLoaders.babel,
                {
                    loader: require('styled-jsx/webpack').loader,
                },
            ],
        });

        return {
            ...config,
            devtool: dev ? 'source-map' : '',
        };
    },
};
