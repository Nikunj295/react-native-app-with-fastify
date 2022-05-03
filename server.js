const Fastify = require("fastify");
const MFA = require("mangadex-full-api");

// let mangaInstance;
const initialize = async () => {
	await MFA.login("", "", "./");
};
initialize();

const fastify = Fastify({
	logger: true,
});

fastify.get("/:title", async (request, reply) => {
	if (!request.params?.title) {
		return reply.send({ code: "400", msg: "Need title", data: {} });
	}
	const mangaList = await MFA.Manga.search({
		title: request.params?.title,
		limit: 10, // API Max is 100 per request, but this function accepts more
	});
	const manga = await MFA.Manga.get("90043ed2-87d7-4a4c-b9a6-272445afe6af");
	let chapters = await manga.getFeed({ translatedLanguage: ["en"] }, true);
	// True means that related objects are returned with the base request
	let chapter = chapters[0];
	let pages = await chapter.getReadablePages();

	reply.send({ hello: "world", pages });
});

// Run the server!
fastify.listen(3000, "0.0.0.0", async (err, address) => {
	if (err) {
		fastify.log.error(err);
		process.exit(1);
	}
	console.log(`Server is now listening on ${address}`);
});
