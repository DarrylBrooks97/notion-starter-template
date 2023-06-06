import { db } from "~/clients/drizzle";
import { users } from "~/schema";
import { cookies } from "next/headers";
import ConnectButton from "./components/ConnectButton";
import ViewPagesButton from "./components/ViewPagesButton";
import { eq } from "drizzle-orm";

export const dynamic = "force-dynamic";

export default async function Home() {
  const userCookies = cookies();
  const userId = userCookies.get("userId")?.value;
  let user;

  if (userId) {
    user = await db.select().from(users).where(eq(users.id, userId));
  }

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center space-y-2">
      <h1 className="text-center text-4xl">Notion Template</h1>
      {user ? <ViewPagesButton /> : <ConnectButton />}
    </div>
  );
}
