import path from "path";

export default {
    name: "default",
    type: "postgres",
    host: "ep-long-night-a47uad9o-pooler.us-east-1.aws.neon.tech",
    port: "5432",
    username: "default",
    password: "yhnBti36arbS",
    database: "verceldb",
    synchronize: true,
    logging: false,
    entities: [
        path.join(__dirname, "..", "entities", "**", "*.*"),
        path.join(__dirname, "..", "entities", "*.*"),
    ],
    cli: {
        entitiesDir: "src/entities",
    },
    ssl: process.env.SSL === "true",
};
