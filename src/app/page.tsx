import { db } from "~/clients/drizzle";
import ConnectButton from "./components/ConnectButton";
import { users } from "~/schema";

export default async function Home() {
  const _user = await db.select().from(users);

  return (
    <div className="text-white">
      <div className="flex flex-col items-center space-y-2">
        <h1 className="text-4xl">Notion Starter Template</h1>
        <ConnectButton />
      </div>
    </div>
  );
}
