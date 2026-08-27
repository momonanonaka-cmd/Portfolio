import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-hairline px-6 py-10 sm:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-xs text-graphite sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <a href="#top" className="hover-underline">
          Back to top
        </a>
      </div>
    </footer>
  );
}
