import { Building2, MessageCircle, Users } from "lucide-react";
import { EVENT_HALLS } from "../../data/hotelData";
import { Tag } from "../ui/Tag";

export function EventsSection({ onBook }) {
  return (
    <section id="events" className="border-t border-stone-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-amber-600">
              Weddings, conferences &amp; celebrations
            </span>
            <h2 className="mt-2 font-display text-3xl text-stone-900 sm:text-4xl">
              Event Halls
            </h2>
          </div>
          <p className="max-w-xs text-sm text-stone-500">
            Two halls on-site, sized for anything from a small gathering to a
            full owambe.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {EVENT_HALLS.map((hall) => (
            <article
              key={hall.id}
              className="flex flex-col overflow-hidden rounded-sm border border-stone-200 bg-stone-50 group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={hall.image}
                  alt={hall.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-sm bg-stone-950/90 px-2.5 py-1 font-mono text-xs text-amber-400">
                  <Users size={12} />
                  {hall.capacity}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="mb-1 flex items-center gap-2 text-stone-400">
                  <Building2 size={14} />
                  <span className="font-mono text-xs uppercase tracking-wide">
                    Event Hall
                  </span>
                </div>
                <h3 className="mb-2 font-display text-xl text-stone-900">
                  {hall.name}
                </h3>
                <p className="mb-4 flex-1 text-sm text-stone-500">
                  {hall.blurb}
                </p>

                <div className="mb-5 flex flex-wrap gap-2">
                  {hall.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>

                <button
                  onClick={() => onBook({ hallName: hall.name })}
                  className="flex items-center justify-center gap-2 rounded-sm bg-stone-950 py-2.5 font-semibold text-amber-400 transition-colors duration-200 hover:bg-amber-500 hover:text-stone-950"
                >
                  <MessageCircle size={16} />
                  Enquire via WhatsApp
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
