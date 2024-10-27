import { defineConfig } from "drizzle-kit";

import * as dotenv from "dotenv";

dotenv.config({
    path: "./.env.local"
})

if (!process.env.XATA_DATABASE_URL && typeof process.env.XATA_DATABASE_URL !== "string") {
    throw Error("Please check your environment variables for the database uri/url")
}

export default defineConfig({
    dialect: "postgresql",
    schema: "./src/db/schema.ts",
    out: "./drizzle",
    dbCredentials: {
        url: String(process.env.XATA_DATABASE_URL),
    }
})
