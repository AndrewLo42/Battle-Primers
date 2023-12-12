import Fuse from "fuse.js";
import { useState } from "react";
// import "../css/styles.css";


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
		<div>
			<label htmlFor="search" className="mb-2 text-teal-700 text-2xl">Search for your deck/commander</label>
			<div className="mt-4 relative">
				<input 
					type="text"
					id="search"
					value={query} 
					onChange={handleOnSearch}
					className="p-2 block w-full text-sm
					text-gray-900 
					border border-gray-300
					rounded-lg bg-gray-50
					focus:outline-none
					focus:ring-blue-500
					focus:border-blue-500"
					placeholder="Search posts" />
			</div>
			{query.length > 1 && (
				<p>
					Found {posts.length} {posts.length === 1 ? 'result' : 'results'} for '{query}'
				</p>
			)}
			<ul className="list-none">
				{posts &&
					posts.map((post) => (
						<li className="my-4 py-2 rounded border-solid border-black border w-100
							hover:bg-teal-300
							transition duration-300
						">
							<a className="p-2 block hover:underline underline-offset-2 transition duration-300" href={`/${post.frontmatter.slug}`}>
								<h1 className="text-lg">
									{post.frontmatter.title}
									<span className="ml-2 text-purple-500">&rarr;</span>
								</h1>
								<p>
									{post.frontmatter.description}
								</p>
							</a>
						</li>						
					))}
			</ul>
		</div>
	);
}

export default SearchBar;