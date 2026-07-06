import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  Home,
  FolderGit2,
  User,
  FileText,
  Mail,
  Github,
  Linkedin,
  Copy,
  Download,
} from "lucide-react";
import { EMAIL, GITHUB_URL, LINKEDIN_URL, RESUME_URL, RESUME_FILENAME } from "@/lib/site";

export const OPEN_CMDK_EVENT = "open-cmdk";

const ROUTES = [
  { to: "/", label: "Home", icon: Home },
  { to: "/projects", label: "Work / Projects", icon: FolderGit2 },
  { to: "/about", label: "About", icon: User },
  { to: "/resume", label: "Resume", icon: FileText },
  { to: "/contact", label: "Contact", icon: Mail },
] as const;

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    const onOpen = () => setOpen(true);
    document.addEventListener("keydown", onKey);
    window.addEventListener(OPEN_CMDK_EVENT, onOpen);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener(OPEN_CMDK_EVENT, onOpen);
    };
  }, []);

  const run = (fn: () => void) => {
    setOpen(false);
    fn();
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Jump to a page or action…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Pages">
          {ROUTES.map((r) => (
            <CommandItem key={r.to} onSelect={() => run(() => navigate({ to: r.to }))}>
              <r.icon className="mr-2 h-4 w-4" />
              {r.label}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Actions">
          <CommandItem
            onSelect={() =>
              run(() => {
                const a = document.createElement("a");
                a.href = RESUME_URL;
                a.download = RESUME_FILENAME;
                a.click();
              })
            }
          >
            <Download className="mr-2 h-4 w-4" />
            Download resume
          </CommandItem>
          <CommandItem onSelect={() => run(() => navigator.clipboard?.writeText(EMAIL))}>
            <Copy className="mr-2 h-4 w-4" />
            Copy email address
            <CommandShortcut>{EMAIL}</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Elsewhere">
          <CommandItem onSelect={() => run(() => window.open(GITHUB_URL, "_blank", "noopener"))}>
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </CommandItem>
          <CommandItem onSelect={() => run(() => window.open(LINKEDIN_URL, "_blank", "noopener"))}>
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
