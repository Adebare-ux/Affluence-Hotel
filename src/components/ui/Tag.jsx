export function Tag({ children }) {
  return (
    <span className="rounded-full border border-stone-200 bg-stone-100 px-2.5 py-1 font-mono text-xs uppercase tracking-wide text-stone-600">
      {children}
    </span>
  );
}
