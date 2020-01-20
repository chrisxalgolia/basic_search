/* global algoliasearch instantsearch */

const searchClient = algoliasearch(
  '0GFB0QH4BF',
  'beec47efc2b906ae1cc912724fe565ff'
);

const search = instantsearch({
  indexName: 'movies',
  searchClient,
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  instantsearch.widgets.currentRefinements({
    container: '#current-refinements',
  }),

  instantsearch.widgets.refinementList({
    operator: 'and',
    showMore: true,
    container: '#genre-list',
    attribute: 'genre',
  }),
  instantsearch.widgets.hits({

    container: '#hits',
    templates: {
      item: `
        <div>
          <img src="{{image}}" align="left" alt="{{name}}" />
          <div class="hit-name">
            {{#helpers.highlight}}{ "attribute": "title" }{{/helpers.highlight}}
          </div>
          <div class="hit-description">
            {{#helpers.highlight}}{ "attribute": "year" }{{/helpers.highlight}}
          </div>

          <div class="hit-score">
          Score:
          {{#helpers.highlight}}{ "attribute": "score" }{{/helpers.highlight}}
          </div>
        </div>
      `,
    },
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
]);

search.start();
