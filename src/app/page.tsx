import ConnectButton from "./components/ConnectButton";

export default function Home() {
  return (
    <div className="text-white">
      <div className="flex flex-col items-center space-y-2">
        <h1 className="text-4xl">Notion Starter Template</h1>
        <ConnectButton />
      </div>
    </div>
  );
}
