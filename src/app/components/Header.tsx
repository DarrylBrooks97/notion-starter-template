import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Header() {
  return (
    <header className="flex w-full items-end p-2 text-white">
      <a
        className="flex w-full items-center duration-100 ease-in-out hover:text-slate-400"
        href="https://github.com/DarrylBrooks97/notion-starter-template"
        target="_blank"
        referrerPolicy="no-referrer"
      >
        <GitHubLogoIcon />
        <p className="ml-2">Github</p>
      </a>
    </header>
  );
}
