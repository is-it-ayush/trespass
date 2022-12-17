import { type EnvToLogger } from "./server";

export const envToLogger: EnvToLogger = {
    development: {
        transport: {
            target: 'pino-pretty',
            options: {
                translateTime: 'HH:MM:ss Z',
                ignore: 'pid,hostname',

            },
        },
    },
    production: true,
    test: false,
};