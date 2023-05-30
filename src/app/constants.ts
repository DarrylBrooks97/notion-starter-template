import { z } from "zod";

const envSchema = z.object({
  NOTION_CLIENT_ID: z.string().nonempty(),
  NOTION_CLIENT_SECRET: z.string().nonempty(),
  NOTION_REDIRECT_URI: z.string().nonempty(),
});

export const CONSTANTS = envSchema.parse(process.env);
