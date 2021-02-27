module.exports = (pageId, componentQueries) => `query {
    page(id: "${pageId}") {
      contentCollection(limit: 10) {
        items {
          __typename
          ${componentQueries}
        }
      }
    }
  }`;
  