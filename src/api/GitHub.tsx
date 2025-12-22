import { Octokit } from '@octokit/core';

const octokit = new Octokit({
	auth: import.meta.env.GITHUB_API_KEY
});

export async function getLatestCommit() {
	const res = await octokit.request(
		"GET /repos/junyali/bricklayer-ysws/commits",
		{
			headers: {
				"X-GitHub-Api-Version": "2022-11-28",
			},
		}
	);

	const commitDate = new Date(res.data[0].commit.author.date);
	const dateFormat: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
	return {
		hash: res.data[0].sha.slice(0, 7),
		html_url: res.data[0].html_url,
		date: commitDate.toLocaleDateString("en-GB", dateFormat),
	}
}
