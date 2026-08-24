export function ArchiveHeader() {
  return (
    <header className="flex flex-wrap items-center gap-6 border-b border-archive-line px-5 py-3.5">
      <div className="flex flex-wrap items-center gap-5">
        <div className="font-display leading-[0.92]">
          <p className="text-archive-2xl font-semibold tracking-archive-snug">RICK &amp; MORTY</p>
          <h1 className="text-archive-5xl font-bold tracking-archive-tight">FIELD ARCHIVE</h1>
        </div>
        <div aria-hidden="true" className="hidden h-9 w-px self-stretch bg-archive-line sm:block" />
        <p className="font-mono text-archive-base leading-normal tracking-archive-wide">
          INTERDIMENSIONAL
          <br />
          OBSERVATION DATABASE
        </p>
      </div>

      <div className="flex items-center gap-6 font-mono text-archive-sm tracking-archive-wider sm:ml-auto">
        <p className="flex items-center gap-2 text-archive-neutral">
          <span>ARCHIVE STATUS:</span>
          <span aria-hidden="true" className="inline-block size-1.75 rounded-full bg-status-alive" />
          <span className="text-status-alive">ONLINE</span>
        </p>
        <p className="border border-archive-line px-2.5 py-1.5">VERSION 1.7.2</p>
      </div>
    </header>
  );
}
