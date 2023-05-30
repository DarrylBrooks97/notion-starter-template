import { db } from "~/clients/drizzle";
import ConnectButton from "./components/ConnectButton";
import ViewPagesButton from "./components/ViewPagesButton";
import { users } from "~/schema";

export default async function Home() {
  const user = await db.select().from(users);

  return (
    <div className="text-white">
      <div className="flex flex-col items-center space-y-2">
        <h1 className="text-4xl">Notion Starter Template</h1>
        {user.length ? <ViewPagesButton /> : <ConnectButton />}
      </div>
    </div>
  );
}
