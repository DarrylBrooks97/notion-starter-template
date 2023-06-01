import { db } from "~/clients/drizzle";
import { users } from "~/schema";
import ConnectButton from "./components/ConnectButton";
import ViewPagesButton from "./components/ViewPagesButton";

export const dynamic = "force-dynamic";

export default async function Home() {
  const user = await db.select().from(users);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center space-y-2">
      <h1 className="text-center text-4xl">Notion Template</h1>
      {user.length ? <ViewPagesButton /> : <ConnectButton />}
    </div>
  );
}
