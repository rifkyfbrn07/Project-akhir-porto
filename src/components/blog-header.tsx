import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

export default function BlogHeader() {
  return (
    <header className="mb-16 flex items-center justify-between border-b border-slate-200 pb-4 dark:border-slate-700">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 transition-colors hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-slate-200"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Portfolio
      </Link>
      <ModeToggle />
    </header>
  );
}
