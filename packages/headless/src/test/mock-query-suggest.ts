import {QuerySuggestState} from '../features/query-suggest/query-suggest-state';

export function buildMockQuerySuggest(
  config: Partial<QuerySuggestState> = {}
): QuerySuggestState {
  return {
    id: '',
    count: 0,
    currentRequestId: '',
    q: '',
    completions: [],
    responseId: '',
    error: null,
    partialQueries: [],
    isLoading: false,
    ...config,
  };
}
