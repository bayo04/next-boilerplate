import React from 'react';

const ComponentsMapper = (props) => {
    let Component;

    try {
        Component = require(`../src/components/${props.__typename}/${props.__typename}`).default;
        return <Component {...props} />;
    } catch {
        return null;
    }
};

export default ComponentsMapper;
