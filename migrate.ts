import { drizzle, PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";

import postgres from "postgres";

const client = postgres();
const db: PostgresJsDatabase = drizzle(client);

const main = async () => {
  console.log("migrating...");
  await migrate(db, { migrationsFolder: "drizzle" });
  console.log("migrate complete!");

};

main();
