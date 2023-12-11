import Fuse from "fuse.js";
import { useState } from "react";
import Card from "./Card.astro";
import styles from "../css/styles.css";

const options = {
    keys: ['frontmatter.title', 'frontmatter.description', 'frontmatter.slug'],
    includeMatches: true,
    minMatchCharacterLength: 2,
    threshold: 0.5
}

function SearchBar({ searchList }) {
	// User's input
	const [query, setQuery] = useState('');

	const fuse = new Fuse(searchList, options);

	// Set a limit to the posts: 5
	const posts = fuse
		.search(query)
		.map((result) => result.item)
		.slice(0, 5);

	function handleOnSearch({ target = {} }) {
		const { value } = target;
		setQuery(value);
	}

	return (
		<>
			<label>Search</label>
			<input type="text" value={query} onChange={handleOnSearch} placeholder="Search posts" />
			{query.length > 1 && (
				<p>
					Found {posts.length} {posts.length === 1 ? 'result' : 'results'} for '{query}'
				</p>
			)}
			<ul>
				{posts &&
					posts.map((post) => (
						// <li>
						// 	<a href={`/${post.frontmatter.slug}`}>{post.frontmatter.title}</a>
						// 	{post.frontmatter.description}
						// </li>
						// <ul role="list" class="link-card-grid">
						// 	<Card href={`/${post.frontmatter.slug}`}
						// 	title={post.frontmatter.title}
						// 	body={post.frontmatter.description}>
						// 	</Card>
						// </ul>
						<li class="link-card">
							<a href={`/${post.frontmatter.slug}`}>
								<h2>
									{post.frontmatter.title}
									<span>&rarr;</span>
								</h2>
								<p>
									{post.frontmatter.description}
								</p>
							</a>
						</li>						
					))}
			</ul>
		</>
	);
}

export default SearchBar;