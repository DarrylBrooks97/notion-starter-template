import { isFullPage } from "@notionhq/client";
import { db } from "~/clients/drizzle";
import { redirect } from "next/navigation";
import { getClient } from "~/clients/notion";
import { users } from "~/schema";
import { SearchResults } from "~/types/notion.type";
import { cookies } from "next/headers";
import { eq } from "drizzle-orm";

type TransformedPage = {
  id: string;
  name: string;
  icon: string;
  url: string;
};

export const formatPages = (page: SearchResults) => {
  let transformedPage: TransformedPage[] = [];

  for (const p of page) {
    if (p.object === "page" && isFullPage(p)) {
      const segment = p.url.split("/").pop();
      const name = segment.split("-").slice(0, -1).join(" ");
      const icon = p.icon?.type === "emoji" ? p.icon.emoji : "📄";

      transformedPage.push({
        id: p.id,
        url: p.url,
        name: name.length ? name : "Untitled page",
        icon,
      });
    } else {
      console.log("Not a page", p);
    }
  }

  return transformedPage;
};

export const getNotionPages = async () => {
  try {
    const userCookies = cookies();
    const { value: userId } = userCookies.get("userId");

    if (!userId) {
      console.log("No user id found");
      redirect("/");
    }

    const user = await db.select().from(users).where(eq(users.id, userId));

    if (!user.length) {
      console.log("No user found");
      redirect("/");
    }

    const { accessToken } = user[0];

    if (!accessToken) {
      console.log("No access token found");
      redirect("/");
    }

    const notion = getClient(accessToken);

    let cursor: string | undefined = undefined;
    let pages = [];

    do {
      const searchResults = await notion.search({
        filter: {
          property: "object",
          value: "page",
        },
        page_size: 10,
        query: "",
        start_cursor: cursor,
      });

      pages.push(...searchResults.results);
      cursor = searchResults.next_cursor;
    } while (cursor);

    return formatPages(pages);
  } catch (e: unknown) {
    console.log((e as Error).message);
    return null;
  }
};
