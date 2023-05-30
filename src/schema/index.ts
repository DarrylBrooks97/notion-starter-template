import { pgTable, serial, date, varchar, uniqueIndex } from "drizzle-orm/pg-core";

export const users = pgTable(
  "users",
  {
    id: serial("id").primaryKey(),
    accessToken: varchar("accesstoken"),
    workspaceId: varchar("workspaceid", { length: 256 }),
    workspaceName: varchar("workspacename", { length: 256 }),
    workspaceIcon: varchar("workspaceicon", { length: 256 }),
    createdAt: date("createdat"),
  },
  (users) => {
    return {
      uniqueIdx: uniqueIndex("unique_idx").on(users.id),
    };
  },
);
