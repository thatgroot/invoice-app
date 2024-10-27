import { integer, pgTable, serial, timestamp, text, pgEnum } from "drizzle-orm/pg-core";

export const statusEnum = pgEnum("status", ['open', "paid", "void", "unpaid"])
export const Invoices = pgTable("invoices", {
    id: serial("id").primaryKey().notNull(),
    createdAt: timestamp("createdAt").notNull(),
    value: integer("value").notNull(),
    description: text("description").notNull(),
    status: statusEnum('status').notNull()
})
