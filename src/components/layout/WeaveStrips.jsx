export function WeaveStrips({ className = "", tone = "light" }) {
  const widths = [3, 1, 2, 5, 1, 3, 1, 4, 2, 1, 3, 6, 1, 2, 1, 4, 1, 3, 2, 1];
  const color = tone === "light" ? "bg-amber-500" : "bg-stone-800";

  return (
    <div className={`flex h-full w-full ${className}`} aria-hidden="true">
      {widths.map((width, index) => (
        <div
          key={`${width}-${index}`}
          className={color}
          style={{
            width: `${width * 4}px`,
            opacity: tone === "light" ? 0.06 + (index % 4) * 0.03 : 0.5,
            marginRight: "3px",
          }}
        />
      ))}
    </div>
  );
}
