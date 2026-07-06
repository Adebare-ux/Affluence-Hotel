import { BedDouble, MessageCircle } from "lucide-react";
import { ROOMS } from "../../data/hotelData";
import { Tag } from "../ui/Tag";

export function RoomsSection({ onBook }) {
  return (
    <section
      id="rooms"
      className="mx-auto max-w-6xl px-5 pb-20 pt-24 sm:px-8 sm:pt-28"
    >
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-amber-600">
            Accommodation
          </span>
          <h2 className="mt-2 font-display text-3xl text-stone-900 sm:text-4xl">
            Rooms &amp; Suites
          </h2>
        </div>
        <p className="max-w-xs text-sm text-stone-500">
          Every rate includes breakfast, Wi-Fi, and full backup power.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {ROOMS.map((room) => (
          <article
            key={room.id}
            className="flex flex-col overflow-hidden rounded-sm border border-stone-200 bg-white group"
          >
            <div className="relative h-52 overflow-hidden">
              <img
                src={room.image}
                alt={room.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute right-3 top-3 rounded-sm bg-stone-950/90 px-2.5 py-1 font-mono text-xs text-amber-400">
                ₦{room.price.toLocaleString()} / night
              </div>
            </div>

            <div className="flex flex-1 flex-col p-5">
              <div className="mb-1 flex items-center gap-2 text-stone-400">
                <BedDouble size={14} />
                <span className="font-mono text-xs uppercase tracking-wide">
                  Room
                </span>
              </div>
              <h3 className="mb-2 font-display text-xl text-stone-900">
                {room.name}
              </h3>
              <p className="mb-4 flex-1 text-sm text-stone-500">{room.blurb}</p>

              <div className="mb-5 flex flex-wrap gap-2">
                {room.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>

              <button
                onClick={() => onBook(room.name)}
                className="flex items-center justify-center gap-2 rounded-sm bg-stone-950 py-2.5 text-sm font-semibold text-amber-400 transition-colors duration-200 hover:bg-amber-500 hover:text-stone-950"
              >
                <MessageCircle size={16} />
                Book via WhatsApp
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
