import { db } from "~/clients/drizzle";
import ConnectButton from "./components/ConnectButton";
import ViewPagesButton from "./components/ViewPagesButton";
import { users } from "~/schema";

export default async function Home() {
  const user = await db.select().from(users);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center space-y-2">
      <h1 className="text-center text-4xl">Notion Template</h1>
      {user.length ? <ViewPagesButton /> : <ConnectButton />}
    </div>
  );
}
