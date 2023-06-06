## Notion Starter Template 📝

A simple Notion template showcasing how to fetch user's notion pages on their behalf

## What's inside?

- Zod
- Drizzle ORM
- Vercel Postgres

## The setup

1. Clone repo
2. Create a public [Notion integration](https://www.notion.so/help/create-integrations-with-the-notion-api#create-an-internal-integration)
3. Update `.env.example` with your Notion keys
4. Create a [Vercel Postgres Database](https://vercel.com/docs/storage/vercel-postgres/quickstart) (or any db of your choice)

   4.1 Create your pgTable with the following schema:
   ```postgres
   create table users (
      id uuid primary key,
      accessToken varchar,
      workspaceId varchar,
      workspaceName varchar,
      workspaceIcon varchar,
      createdAt timestamp default now()
   )
   ```
5. Update `.env.example` with your auto generated pgTable keys
6. Setup Drizzle with Vercel's [helpful docs](https://vercel.com/docs/storage/vercel-postgres/using-an-orm#drizzle)
7. Run [npm/yarn/pnpm] dev
