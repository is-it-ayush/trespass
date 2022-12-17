import createServer from "./utils/createServer";

async function main() {
    const app = createServer();
    const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;

    try {
        const url = await app.listen(
            {
                port: port,
                host: process.env.HOST || "0.0.0.0",
            },
        );
    }
    catch (e) {
        app.log.error(e);
        process.exit(1);
    }
}


main();