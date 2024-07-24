export function loader() {
	const robotsTxtContent = `
    User-agent: *
    Allow: /
  `;

	return new Response(robotsTxtContent, {
		headers: {
			"Content-Type": "text/plain"
		}
	});
}
