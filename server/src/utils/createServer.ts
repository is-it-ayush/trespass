import fastify from "fastify";
import { envToLogger } from "./logger";

function createServer() {

    const env = process.env.NODE_ENV || 'development';

    const app = fastify({
        logger: envToLogger[env],
    });

    return app;
}

export default createServer;