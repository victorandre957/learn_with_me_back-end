"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    connection: {
        client: 'postgres',
        connection: {
            host: env('DATABASE_HOST', '127.0.0.1'),
            port: env.int('DATABASE_PORT', 5432),
            database: env('DATABASE_NAME', 'learn-with-me'),
            user: env('DATABASE_USERNAME', 'strapi-learn-with-me'),
            password: env('DATABASE_PASSWORD', '123456'),
            ssl: env.bool('DATABASE_SSL', false),
        },
    },
});
