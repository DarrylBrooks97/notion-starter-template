import { CONSTANTS } from "./constants";

export default function Home() {
  return (
    <div className="text-white">
      <div className="flex flex-col items-center space-y-2">
        <h1 className="text-4xl">Notion Starter Template</h1>
        <a
          href={CONSTANTS.NOTION_REDIRECT_URI}
          className="w-max rounded-md border border-slate-500 px-3 py-1 text-xl"
        >
          Connect to Notion
        </a>
      </div>
    </div>
  );
}
