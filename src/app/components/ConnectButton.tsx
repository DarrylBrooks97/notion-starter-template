"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

export default function ConnectButton() {
  const code = useSearchParams().get("code");
  const error = useSearchParams().get("error");

  const page = useRouter();

  useEffect(() => {
    const exchangeCodeForToken = async () => {
      const tokenPromise = fetch("/api/notion", {
        method: "POST",
        body: JSON.stringify({ code }),
      });

      toast.promise(tokenPromise, {
        loading: "Connecting to Notion...",
        success() {
          page.refresh();
          return "Connected!";
        },
        error: "Failed to connect to Notion",
      });
    };

    if (code) {
      exchangeCodeForToken();
    }
  }, [code, page]);

  if (error) {
    toast.success(error);
  }

  return (
    <div className="rounded-md border border-gray-400 px-3 py-1">
      <a href={process.env.NOTION_REDIRECT_URI} suppressHydrationWarning>
        Connect to Notion
      </a>
    </div>
  );
}
