export function NavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-sm font-body text-stone-300 transition-colors duration-200 hover:text-amber-400"
    >
      {children}
    </a>
  );
}
