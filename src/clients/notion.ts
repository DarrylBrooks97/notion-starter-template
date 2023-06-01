import { Client } from "@notionhq/client";

export const notion = new Client({
  auth: process.env.NOTION_CLIENT_SECRET,
});

export const getClient = (authToken: string) => new Client({ auth: authToken });
