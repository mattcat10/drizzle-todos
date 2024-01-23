import {
  pgTable,
  serial,
  varchar,
  timestamp,
  integer,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const user = pgTable("user", {
  id: serial("id").primaryKey().notNull(),
  name: varchar("name", { length: 30 }).notNull(),
  createdAt: timestamp("createdAt", {
    mode: "string",
  }).defaultNow(),
});

export const usersRelations = relations(user, ({ many }) => ({
  tasks: many(todo),
}));

export const todo = pgTable("todo", {
  id: serial("id").primaryKey().notNull(),
  title: varchar("title", { length: 50 }).notNull(),
  description: varchar("description", { length: 50 }),
  createdAt: timestamp("createdAt", {
    mode: "string",
  }).defaultNow(),
  userId: integer("userId").references(() => user.id),
});

export const todoRelations = relations(todo, ({ one }) => ({
  author: one(user, {
    fields: [todo.userId],
    references: [user.id],
  }),
}));
