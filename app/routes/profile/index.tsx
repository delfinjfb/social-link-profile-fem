import {Link} from "@remix-run/react";

import imageProfile from "~/images/avatar-delfin.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faLinkedin,
	faXTwitter
} from "@fortawesome/free-brands-svg-icons";
import {faCode} from "@fortawesome/free-solid-svg-icons";

const socialLinks = [
	{
		name: "LinkedIn",
		url: "https://www.linkedin.com/in/delfinjfb/",
		icon: faLinkedin,
		class:
			"bg-[#0A66C2] text-white text-center py-2 px-4 rounded-md block font-semibold hover:bg-lime-500 transition duration-200"
	},
	{
		name: "Frontend Mentor",
		url: "https://www.frontendmentor.io/profile/delfinjfb",
		icon: faCode,
		class:
			"bg-white text-[#333] text-center py-2 px-4 rounded-md block font-semibold border border-[#333]  hover:bg-lime-500 transition duration-200"
	},
	{
		name: "GitHub",
		url: "https://github.com/delfinjfb",
		icon: faGithub,
		class:
			"bg-[#171515]  text-white text-center py-2 px-4 rounded-md block font-semibold  hover:bg-lime-500 transition duration-200"
	},
	{
		name: "Twitter X",
		url: "https://twitter.com/delfinfb",
		icon: faXTwitter,
		class:
			"bg-[#00acee]  text-black text-center py-2 px-4 rounded-md block font-semibold  hover:bg-lime-500 transition duration-200"
	}
];

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
				<p className="text-gray-300 text-center italic mb-2">
					&ldquo;Full Stack Developer and avid reader.&ldquo;
				</p>
				<p className="text-gray-300 text-center italic mb-8">
					JAVA, React Remix, React, Node.js, Angular, AWS, SEO - Web Marketing
				</p>

				<ul className="space-y-2">
					{socialLinks.map(link => (
						<li key={link.name}>
							<Link
								target="_blank"
								to={link.url}
								className={`${link.class} `}
								rel="noreferrer"
							>
								<FontAwesomeIcon icon={link.icon} className="pe-2" />
								{link.name}
							</Link>
						</li>
					))}
				</ul>
			</article>
		</main>
	);
}
