import { MapPin, MessageCircle, Phone } from "lucide-react";
import {
  HOTEL_ADDRESS,
  HOTEL_NAME,
  HOTEL_PHONE_DISPLAY,
  HOTEL_PHONE_TEL,
} from "../../data/hotelData";

export function ContactFooter({ onBook }) {
  return (
    <footer id="contact" className="border-t border-stone-200 bg-stone-50">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 py-16 md:grid-cols-3 sm:px-8">
        <div>
          <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-sm border border-amber-600 font-display text-sm text-amber-600">
            IG
          </span>
          <h3 className="mb-2 font-display text-xl text-stone-900">
            {HOTEL_NAME}
          </h3>
          <p className="max-w-xs text-sm text-stone-500">
            A dependable place to rest in Iseyin — quiet rooms, honest rates,
            and staff who pick up the phone.
          </p>
        </div>

        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-stone-400">
            Reach us
          </span>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={`tel:${HOTEL_PHONE_TEL}`}
              className="flex items-center gap-2.5 text-sm text-stone-800 transition-colors hover:text-amber-600"
            >
              <Phone size={16} className="text-amber-600" />
              {HOTEL_PHONE_DISPLAY}
            </a>
            <button
              onClick={onBook}
              className="flex items-center gap-2.5 text-left text-sm text-stone-800 transition-colors hover:text-amber-600"
            >
              <MessageCircle size={16} className="text-amber-600" />
              Chat on WhatsApp
            </button>
          </div>
        </div>

        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-stone-400">
            Address
          </span>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(HOTEL_ADDRESS)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex max-w-xs items-start gap-2.5 text-sm text-stone-800 transition-colors hover:text-amber-600"
          >
            <MapPin size={16} className="mt-0.5 flex-shrink-0 text-amber-600" />
            <span>{HOTEL_ADDRESS}</span>
          </a>
        </div>
      </div>

      <div className="border-t border-stone-200">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-5 sm:flex-row sm:px-8">
          <p className="font-mono text-xs text-stone-400">
            © {new Date().getFullYear()} {HOTEL_NAME}. All rights reserved.
          </p>
          <p className="font-mono text-xs text-stone-400">
            Iseyin, Oyo State, Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}
