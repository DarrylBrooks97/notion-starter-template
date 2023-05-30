import { pgTable, serial, date, varchar, uniqueIndex } from "drizzle-orm/pg-core";

export const users = pgTable(
  "users",
  {
    id: serial("id").primaryKey(),
    accessToken: varchar("accessToken", { length: 256 }),
    workspaceId: varchar("workspaceId", { length: 256 }),
    workspaceName: varchar("workspaceName", { length: 256 }),
    workspaceIcon: varchar("workspaceIcon", { length: 256 }),
    createdAt: date("createdAt"),
  },
  (users) => {
    return {
      uniqueIdx: uniqueIndex("unique_idx").on(users.id),
    };
  },
);
