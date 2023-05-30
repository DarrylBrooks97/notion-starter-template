"use client";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { CONSTANTS } from "../constants";
import { useEffect } from "react";

export default function ConnectButton() {
  const code = useSearchParams().get("code");
  const error = useSearchParams().get("error");

  useEffect(() => {
    if (code) {
      toast.success(code);
    }
  }, [code]);

  if (error) {
    toast.success(error);
  }

  return (
    <div>
      <p>{code}</p>
    </div>
  );
}

// {hasNotion ? (
//   <>Connected!</>
// ) : (
//   <a
//     href={CONSTANTS.NOTION_REDIRECT_URI}
//     className="w-max rounded-md border border-slate-500 px-3 py-1 text-xl"
//   >
//     Connect to Notion
//   </a>
// )}
