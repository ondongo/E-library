import algoliasearch from 'algoliasearch/lite';

export const indexName = 'books_index';
const ALGOLIA_CLIENT = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APPID!,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCHKEY!
);

export const SEARCH_CLIENT = {
  ...ALGOLIA_CLIENT,
  search(requests: any) {
    if (requests.every(({ params }: { params: any }) => !params.query)) {
      return Promise.resolve({
        results: requests.map(() => ({
          hits: [],
          nbHits: 0,
          nbPages: 0,
          page: 0,
          processingTimeMS: 0,
          hitsPerPage: 0,
          exhaustiveNbHits: false,
          query: '',
          params: '',
        })),
      });
    }
    return ALGOLIA_CLIENT.search(requests);
  },
};
