export const keyForSearch = (param: {[key: string]: string}) => {
	const args: string[] = Object.keys(param).map(key => `${key}=${param[key]}`)
	return `git-repo-search:${args.join('&')}`
}