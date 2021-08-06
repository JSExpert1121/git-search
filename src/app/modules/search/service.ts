import { RestClient } from "app/shared/services"
import { SearchParam, SearchResult } from "./types"

const BASE_URL = 'https://api.github.com/search/repositories'
type GitSearchRepo = (param: SearchParam) => Promise<SearchResult>
export const searchGit: GitSearchRepo = async (param: SearchParam) => {
	if (!param.query) {
		return {} as SearchResult
	}
	const params: any = {
		q: param.query,
		page: param.page,
		per_page: param.pageSize
	}
	if (param.sort) {
		params.sort = param.sort
		params.order = param.order
	}
	return await RestClient.get(
		BASE_URL,
		{
			params: {
				q: param.query,
				sort: param.sort,
				order: param.order,
				page: param.page,
				per_page: param.pageSize
			}
		}
	).then(data => data as unknown as SearchResult)
}