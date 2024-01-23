import { drizzle, PostgresJsDatabase } from "drizzle-orm/postgres-js";

import postgres from "postgres";
import * as schema from "./schema";
import { eq } from "drizzle-orm";

const client = postgres();
const db: PostgresJsDatabase = drizzle(client, { schema });

const main = async () => {
  console.log("running...");

  //   const result = await db.insert(user).values([
  //     {
  //       name: "John Doe",
  //     },
  //     {
  //       name: "Jane Doe",
  //     },
  //     {
  //       name: "John Smith",
  //     },
  //   ]).returning();

  //   const result = await db.select().from(user);
  //   console.log(result);

  // await db.insert(todo).values([
  //     { title: "Buy milk", userId: result[0].id, description: "Buy milk from the store" },
  //     { title: "Buy eggs", userId: result[0].id, description: "Buy eggs from the store" },
  //     { title: "Buy bread", userId: result[0].id, description: "Buy bread from the store" },
  // ]);

  //   const u = await db
  //     .select()
  //     .from(user)
  //     .where(eq(user.id, 19))
  //     .leftJoin(todo, eq(todo.userId, user.id));

  const u = await db.query.user.findFirst({
    with: { tasks: true },
    where: eq(schema.user.id, 19),
  });
  console.log("xxx", u);
};

main();
