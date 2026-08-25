import { Users, type LucideIcon } from "lucide-react";

interface NavItem {
  label: string;
  icon: LucideIcon;
  current: boolean;
}

const NAV_ITEMS: NavItem[] = [{ label: "PERSONAGENS", icon: Users, current: true }];

export function ArchiveSidebar() {
  return (
    <nav
      aria-label="Archive sections"
      className="hidden flex-col justify-between gap-8 overflow-y-auto border-archive-line py-5.5 lg:flex lg:h-full lg:border-r"
    >
      <ul className="flex flex-col gap-6.5">
        {NAV_ITEMS.map((item) => (
          <li
            key={item.label}
            aria-current={item.current ? "page" : undefined}
            className={`flex flex-col gap-1.5 px-4 py-0.5 ${
              item.current ? "border-l-[3px] border-archive-accent pl-3.5" : ""
            }`}
          >
            <item.icon
              aria-hidden="true"
              size={18}
              strokeWidth={1.5}
              className={item.current ? "text-archive-accent" : "text-archive-muted"}
            />
            <span
              className={`font-display text-archive-base tracking-archive-wider ${
                item.current ? "text-archive-accent" : "text-archive-muted"
              }`}
            >
              {item.label}
            </span>
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-8 px-4">
        <p className="flex items-center gap-3.5 font-mono text-archive-xs tracking-archive-wider text-archive-neutral">
          <span className="flex items-center gap-1.5">
            <span aria-hidden="true" className="inline-block size-1.5 rounded-full bg-archive-muted" />
            LOG
          </span>
        </p>
        <p className="border border-dashed border-archive-line px-2 py-3 text-center font-display text-archive-md leading-relaxed tracking-archive-wide">
          UNIVERSE
          <br />
          C-137
        </p>
      </div>
    </nav>
  );
}
