/* global algoliasearch instantsearch */

const searchClient = algoliasearch(
  '0GFB0QH4BF',
  'beec47efc2b906ae1cc912724fe565ff'
);

const search = instantsearch({
  indexName: 'movies_1',
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

  instantsearch.widgets.sortBy({
  container: '#sort-by',
  items: [
    { label: 'Rating', value: 'movies_1' },
    { label: 'Year (asc)', value: 'instant_search_year_asc_1' },
    { label: 'Year (desc)', value: 'instant_search_year_desc_1' },
  ],
}),

instantsearch.widgets.rangeSlider({
  container: '#range-slider',
  attribute: 'year'
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
          <div class="hit-year">
            {{#helpers.highlight}}{ "attribute": "year" }{{/helpers.highlight}}
          </div>

          <div class="hit-score">
          Score: {{score}}

          </div>

      `,
    },
  }),

  instantsearch.widgets.pagination({
    container: '#pagination',
  }),

]);

search.start();
