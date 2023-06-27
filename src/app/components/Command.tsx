"use client";

import { Command } from "cmdk";
import { useEffect, useMemo, useState } from "react";
import { cn } from "~/lib/utils";

const sportsCommands = [
  {
    icon: "🏀",
    name: "Basketball",
  },
  {
    icon: "⚽️",
    name: "Football",
  },
  {
    icon: "⚾️",
    name: "Baseball",
  },
];

const fruitsCommands = [
  {
    icon: "🍎",
    name: "Apple",
  },
  {
    icon: "🍌",
    name: "Banana",
  },
  {
    icon: "🍊",
    name: "Orange",
  },
];

const commands = [
  {
    name: "sports",
    commands: sportsCommands,
  },
  {
    name: "fruits",
    commands: fruitsCommands,
  },
];

export default function CommandInput() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const commandsLength = useMemo(() => {
    return commands.map(({ commands }) => commands.length).reduce((a, b) => a + b, 0);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey && e.key === "k") {
        setIsOpen((prev) => !prev);
      } else if (e.key === "ArrowDown") {
        setActiveIndex((prev) => (prev === commandsLength ? 0 : prev + 1));
      } else if (e.key === "ArrowUp") {
        setActiveIndex((prev) => (prev < 0 ? commandsLength - 1 : prev - 1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [commandsLength]);

  if (!mounted) return;

  return (
    <Command.Dialog
      open={true}
      onOpenChange={setIsOpen}
      className=" absolute inset-0 mx-auto my-auto h-full max-h-[300px] max-w-[400px] overflow-y-scroll rounded-md bg-[#FCFCFC]"
      suppressHydrationWarning
    >
      <Command.Input
        className="border-b-slate w-full rounded-t-md border border-opacity-80 p-2"
        suppressHydrationWarning
      />
      <Command.Empty className="w-full p-2 text-center text-[#6F6F6F]">
        No results found 🫤
      </Command.Empty>
      <Command.List>
        {commands.map(({ name, commands }, parentIndex) => (
          <Command.Group
            key={name}
            heading={name[0].toUpperCase() + name.slice(1, name.length)}
            className="p-2"
          >
            {commands.map(({ icon, name }, index) => (
              <Command.Item key={index}>
                <div
                  className={cn(
                    "flex items-center justify-between ",
                    5 - index + parentIndex === activeIndex ? "bg-[#F5F5F5]" : "",
                  )}
                >
                  <div className="flex items-center">
                    <div className="mr-2 text-2xl">{icon}</div>
                    <div>{name}</div>
                  </div>
                </div>
              </Command.Item>
            ))}
          </Command.Group>
        ))}
      </Command.List>
    </Command.Dialog>
  );
}

// 0 -> 2 | 3 -> 5 parentIndex = 0 -> 1, children -> 0 -> 2
