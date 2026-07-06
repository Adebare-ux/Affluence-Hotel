import { Search } from "lucide-react";
import { HERO_FIELDS } from "../../data/hotelData";

export function InquiryBar({ values, onChange, onSubmit }) {
  return (
    <div className="relative mx-auto max-w-5xl px-5 pb-0 sm:-mt-12 sm:px-8">
      <div className="grid grid-cols-1 gap-4 border border-stone-200 bg-stone-50 p-5 shadow-xl sm:grid-cols-[1fr_1fr_1fr_auto] sm:items-end sm:gap-3 sm:p-6">
        {HERO_FIELDS.map(({ key, label, icon: Icon, type }) => (
          <label key={key} className="flex flex-col gap-1.5">
            <span className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-stone-500">
              <Icon size={13} /> {label}
            </span>
            <input
              type={type}
              min={type === "number" ? 1 : undefined}
              max={type === "number" ? 12 : undefined}
              value={values[key]}
              onChange={(event) => onChange(key, event.target.value)}
              className="rounded-sm border border-stone-300 px-3 py-2 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </label>
        ))}

        <button
          onClick={onSubmit}
          className="flex h-[42px] items-center justify-center gap-2 rounded-sm bg-stone-950 px-6 py-2.5 text-sm font-semibold text-amber-500 transition-colors duration-200 hover:bg-stone-800"
        >
          <Search size={16} />
          Check Availability
        </button>
      </div>
    </div>
  );
}
