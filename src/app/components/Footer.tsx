import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <div className="-mt-3 flex w-full justify-start p-3 text-white md:w-full md:max-w-5xl">
      <a
        className="flex w-full items-center duration-100 ease-in-out hover:text-slate-400"
        href="https://github.com/DarrylBrooks97/notion-starter-template"
        target="_blank"
        referrerPolicy="no-referrer"
      >
        <GitHubLogoIcon />
        <p className="ml-2">Github</p>
      </a>
    </div>
  );
}
