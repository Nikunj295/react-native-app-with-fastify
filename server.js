const Fastify = require("fastify");
const MFA = require("mangadex-full-api");
require("dotenv").config();

// let mangaInstance;
const initialize = async () => {
	await MFA.login("", process.env.PASSWORD, "./");
};
initialize();

const fastify = Fastify({
	logger: true,
});

fastify.get("/:title", async (request, reply) => {
	reply.send({ hello: "world", manga });
});

// Run the server!
fastify.listen(3000, "0.0.0.0", async (err, address) => {
	if (err) {
		fastify.log.error(err);
		process.exit(1);
	}
	console.log(`Server is now listening on ${address}`);
});
