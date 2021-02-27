import React from 'react';
import ComponentsMapper from '../static/helpers/components-mapper';
import queries from '../static/adapters/contentful.adapter';
import buildPageQuery from '../static/pageQueries/buildPageQuery';

const PageComponents = ({ data }) => data.map((props, index) => <ComponentsMapper {...props} key={index} />);
const Page = (props) => {
    const { content } = props;
    return (
        <div>
            <PageComponents data={content} />
        </div>
    );
};

Page.getInitialProps = async ({ query }) => {
    const pageId = query.pageId;
    const pageContentTypes = await queries.getPageContentTypes(pageId);
    const pageComponentsQuery = buildPageQuery(pageContentTypes);

    const page = await queries.getPage(pageId, pageComponentsQuery);
    const content = page.contentCollection.items || [];


    return {
        content
    };
};

export default Page;
