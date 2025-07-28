export interface User {
	login: string;
	avatar_url: string;
	html_url: string;

	company?: string;
	blog?: string;
	location?: string;
	email?: string;
	bio?: string;
	twitter_username?: string;

	public_repos: number;
	public_gists: number;

	followers: number;
	following: number;
	created_at: string;
}

export interface Repo {
	id: number;
	name: string;
	html_url: string;
	description?: string;
	language: string;
	default_branch: string;
}
