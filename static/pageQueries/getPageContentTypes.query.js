module.exports = pageId =>  `query {
    page(id: "${pageId}") {
        contentCollection {
        items {
            __typename
        }
        }
    }
}`