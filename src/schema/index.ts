import { pgTable, date, varchar, uniqueIndex, uuid } from "drizzle-orm/pg-core";

export const users = pgTable(
  "users",
  {
    id: uuid("id").primaryKey(),
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
