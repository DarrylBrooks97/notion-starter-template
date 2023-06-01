import { redirect } from "next/navigation";
import { getNotionPages } from "~/lib/notion";

export const dynamic = "force-dynamic";

export default async function NotionPages() {
  const pages = await getNotionPages();

  if (!pages) {
    redirect("/");
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center space-y-3   text-white">
      <h1 className="text-3xl">Your pages</h1>
      <div className="max-w-screen flex w-full overflow-x-scroll md:grid md:grid-cols-3 md:gap-3 md:overflow-x-auto">
        {pages.map((page) => (
          <div
            key={page.id}
            className="flex h-[200px] w-[200px] flex-col items-center justify-center space-x-12 rounded-md border border-gray-400 border-opacity-50 p-1 px-3 text-center md:w-full"
          >
            <div className="flex h-1/2 w-1/2 flex-col items-center space-y-3">
              <p className="truncate px-3 text-xl">
                {page.icon} {page.name}
              </p>
              <a
                href={page.url}
                referrerPolicy="no-referrer"
                target="_blank"
                className="w-1/2 rounded-md bg-white px-3 py-1 text-center text-black duration-100 ease-in-out hover:bg-slate-200"
              >
                View
              </a>
            </div>
          </div>
        ))}
      </div>
      <p className="block md:hidden">View all 👉🏾</p>
    </div>
  );
}
