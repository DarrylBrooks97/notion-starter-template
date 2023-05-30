import Link from "next/link";

export default function ViewPagesButton() {
  return (
    <Link className="rounded-md border border-gray-400 px-3 py-1" href="/pages">
      View your pages
    </Link>
  );
}
