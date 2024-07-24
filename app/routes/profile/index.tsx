
import {Link} from "@remix-run/react";

export default function Profile() {
	return (
		<main className="bg-gray-900 min-h-screen flex items-center justify-center">
			<article className="bg-gray-800 p-8 rounded-lg shadow-md max-w-sm w-full">
				<figure className="relative mb-4">
					<img
						src="app/images/avatar-delfin.jpg"
						alt="Delfin Fernandez"
						className="w-32 h-32 rounded-full mx-auto mb-4"
					/>
				</figure>
				<header>
					<h1 className="text-white text-2xl font-semibold text-center">
						Delfin FERNANDEZ
					</h1>
					<p className="text-gray-400 text-center mb-6">
						<span className="text-lime-500">Lyon, France</span>
					</p>
				</header>
				<p className="text-gray-300 text-center italic mb-8">
					&ldquo;Full Stack Developer and avid reader.&ldquo;
				</p>

				<ul className="space-y-2">
					<li>
						<Link
							to="https://www.linkedin.com/"
							className="bg-[#0A66C2] hover:bg-[#171515] text-white text-center py-2 px-4 rounded-md block font-semibold"
						>
							LinkedIn
						</Link>
					</li>
					<li>
						<Link
							to="https://www.frontendmentor.io/profile/yourusername" // Replace with your Frontend Mentor profile URL
							className="bg-white hover:bg-gray-100 text-[#333] text-center py-2 px-4 rounded-md block font-semibold border border-[#333]"
						>
							Frontend Mentor
						</Link>
					</li>
					<li>
						<Link
							to="https://github.com/yourusername" // Replace with your actual GitHub profile URL
							className="bg-[#171515] hover:bg-[#333] text-white text-center py-2 px-4 rounded-md block font-semibold"
						>
							GitHub
						</Link>
					</li>
					<li>
						<Link
							to="https://twitter.com/yourusername" // Replace with your actual Twitter profile URL
							className="bg-[#1DA1F2] hover:bg-[#1a91da] text-white text-center py-2 px-4 rounded-md block font-semibold"
						>
							Twitter
						</Link>
					</li>
				</ul>
			</article>
		</main>
	);
}
