const buildComponentsQuery = (contentTypes) => {
    let componentQuery = '';

    contentTypes.forEach((contentType) => {
        try {
            const fileContent = require(`../src/components/${contentType.__typename}/${contentType.__typename}.query.js`);
            componentQuery += fileContent;
        } catch {
            console.warn(`${contentTypes.__typename} component doesn't exist`);
        }
    });

    return componentQuery;
};

export default buildComponentsQuery;
