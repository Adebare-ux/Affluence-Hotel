import { Sparkles } from "lucide-react";
import { AMENITIES } from "../../data/hotelData";
import { WeaveStrips } from "../layout/WeaveStrips";

export function AmenitiesSection() {
  return (
    <section
      id="amenities"
      className="relative overflow-hidden bg-stone-950 py-20 sm:py-24"
    >
      <div className="absolute inset-0 opacity-100">
        <WeaveStrips tone="dark" className="h-full" />
      </div>
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-12">
          <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-amber-500">
            <Sparkles size={13} /> Why stay here
          </span>
          <h2 className="mt-2 font-display text-3xl text-stone-50 sm:text-4xl">
            Built around what actually matters
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-5 sm:gap-6 md:grid-cols-4">
          {AMENITIES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col gap-4 rounded-sm border border-stone-800 bg-stone-900 p-5 sm:p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-amber-500/30 bg-amber-500/10 text-amber-400">
                <Icon size={20} />
              </div>
              <h3 className="font-display text-base leading-snug text-stone-50 sm:text-lg">
                {title}
              </h3>
              <p className="text-xs leading-relaxed text-stone-400 sm:text-sm">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
