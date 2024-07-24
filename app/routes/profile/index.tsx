import {Link} from "@remix-run/react";

import imageProfile from "~/images/avatar-delfin.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faCode} from "@fortawesome/free-solid-svg-icons";

export default function Profile() {
	return (
		<main className="bg-gray-900 min-h-screen flex items-center justify-center">
			<article className="bg-gray-800 p-8 rounded-lg shadow-md max-w-sm w-full">
				<figure className="relative mb-4">
					<img
						src={imageProfile}
						alt="Delfin Fernandez"
						className="w-20 h-20 rounded-full mx-auto mb-4"
						width={128}
						height={128}
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
				<p className="text-gray-300 text-center italic mb-8">
				JAVA, React Remix, React, Node.js, Angular, AWS, SEO - Web Marketing
				</p>

				<ul className="space-y-2">
					<li>
						<Link
							target="_blank"
							to="https://www.linkedin.com/in/delfinjfb/"
							className="bg-[#0A66C2] text-white text-center py-2 px-4 rounded-md block font-semibold hover:bg-lime-500 transition duration-200"
							rel="noreferrer"
						>
							<FontAwesomeIcon icon={faLinkedin} className="pe-2" />
							LinkedIn
						</Link>
					</li>
					<li>
						<Link
							target="_blank"
							to="https://www.frontendmentor.io/profile/delfinjfb" // Replace with your Frontend Mentor profile URL
							className="bg-white text-[#333] text-center py-2 px-4 rounded-md block font-semibold border border-[#333]  hover:bg-lime-500 transition duration-200"
							rel="noreferrer"
						>
							{" "}
							<FontAwesomeIcon icon={faCode} className="pe-2" />
							Frontend Mentor
						</Link>
					</li>
					<li>
						<Link
							target="_blank"
							to="https://github.com/delfinjfb" // Replace with your actual GitHub profile URL
							className="bg-[#171515]  text-white text-center py-2 px-4 rounded-md block font-semibold  hover:bg-lime-500 transition duration-200"
							rel="noreferrer"
						>
							<FontAwesomeIcon icon={faGithub} className="pe-2" />
							GitHub
						</Link>
					</li>
					<li>
						<Link
							target="_blank"
							to="https://twitter.com/delfinfb" // Replace with your actual Twitter profile URL
							className="bg-[#1DA1F2] text-white text-center py-2 px-4 rounded-md block font-semibold  hover:bg-lime-500 transition duration-200"
							rel="noreferrer"
						>
							<FontAwesomeIcon icon={faTwitter} className="pe-2" />
							Twitter
						</Link>
					</li>
				</ul>
			</article>
		</main>
	);
}
