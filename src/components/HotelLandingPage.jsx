import { useMemo, useState } from "react";
import { Menu, MessageCircle, Star, X } from "lucide-react";
import { FontLoader } from "../components/ui/FontLoader";
import { NavLink } from "../components/ui/NavLink";
import { WeaveStrips } from "../components/layout/WeaveStrips";
import { InquiryBar } from "../components/sections/InquiryBar";
import { RoomsSection } from "../components/sections/RoomsSection";
import { EventsSection } from "../components/sections/EventsSection";
import { AmenitiesSection } from "../components/sections/AmenitiesSection";
import { ContactFooter } from "../components/sections/ContactFooter";
import {
  HOTEL_CHECKIN_TIME,
  HOTEL_NAME,
  HOTEL_RATING,
  HOTEL_REVIEW_COUNT,
} from "../data/hotelData";
import { useHotelInquiry } from "../hooks/useHotelInquiry";

export function HotelLandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const {
    checkIn,
    checkOut,
    guests,
    setCheckIn,
    setCheckOut,
    setGuests,
    openInquiry,
  } = useHotelInquiry();

  const inquiryValues = useMemo(
    () => ({ checkIn, checkOut, guests }),
    [checkIn, checkOut, guests],
  );

  const handleInquiryChange = (key, value) => {
    if (key === "checkIn") setCheckIn(value);
    if (key === "checkOut") setCheckOut(value);
    if (key === "guests") setGuests(Number(value));
  };

  const scrollTo = (id) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const handleBook = (roomName = null) => {
    openInquiry({ roomName });
  };

  return (
    <div className="min-h-screen bg-stone-50 font-body text-stone-900">
      <FontLoader />

      <header className="sticky top-0 z-40 border-b border-stone-800 bg-stone-950/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-2.5"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-amber-500 font-display text-sm text-amber-500">
              AO
            </span>
            <span className="hidden font-display text-lg tracking-wide text-stone-50 sm:block">
              {HOTEL_NAME}
            </span>
          </button>

          <nav className="hidden items-center gap-8 md:flex">
            <NavLink href="#rooms">Rooms</NavLink>
            <NavLink href="#events">Events</NavLink>
            <NavLink href="#amenities">Amenities</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleBook()}
              className="hidden items-center gap-2 rounded-sm bg-amber-500 px-4 py-2 text-sm font-semibold text-stone-950 transition-colors duration-200 hover:bg-amber-400 sm:inline-flex"
            >
              Book Now
            </button>
            <button
              className="text-stone-100 md:hidden"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="flex flex-col gap-4 border-t border-stone-800 bg-stone-950 px-5 py-4 md:hidden">
            <NavLink href="#rooms" onClick={() => scrollTo("rooms")}>
              Rooms
            </NavLink>
            <NavLink href="#events" onClick={() => scrollTo("events")}>
              Events
            </NavLink>
            <NavLink href="#amenities" onClick={() => scrollTo("amenities")}>
              Amenities
            </NavLink>
            <NavLink href="#contact" onClick={() => scrollTo("contact")}>
              Contact
            </NavLink>
            <button
              onClick={() => handleBook()}
              className="rounded-sm bg-amber-500 px-4 py-2 text-center text-sm font-semibold text-stone-950"
            >
              Book Now
            </button>
          </div>
        )}
      </header>

      <section id="home" className="relative overflow-hidden bg-stone-950">
        <div className="absolute inset-0 opacity-70">
          <WeaveStrips tone="light" className="h-full" />
        </div>

        <div className="relative mx-auto max-w-6xl px-5 pb-28 pt-16 sm:px-8 sm:pb-32 sm:pt-24">
          <div className="mb-5 flex items-center gap-2 text-amber-500">
            <Star size={14} fill="currentColor" />
            <span className="font-mono text-xs text-stone-300">
              {HOTEL_RATING.toFixed(1)}
            </span>
            <span className="font-mono text-xs text-stone-500">
              ({HOTEL_REVIEW_COUNT} reviews)
            </span>
            <span className="ml-2 font-mono text-xs tracking-widest text-stone-400">
              OKUTAPEMO, ISEYIN
            </span>
          </div>

          <h1 className="max-w-2xl font-display text-4xl leading-[1.05] text-stone-50 sm:text-6xl">
            A quiet, well-kept stay in the heart of Iseyin.
          </h1>

          <p className="mt-6 max-w-lg text-base text-stone-400 sm:text-lg">
            Air-conditioned rooms, an in-house restaurant and bar, and free
            parking — the fundamentals done properly, so your stay never has to
            think about them. Check-in from {HOTEL_CHECKIN_TIME}.
          </p>
        </div>

        <InquiryBar
          values={inquiryValues}
          onChange={handleInquiryChange}
          onSubmit={() => handleBook()}
        />
      </section>

      <RoomsSection onBook={handleBook} />
      <EventsSection onBook={handleBook} />
      <AmenitiesSection />
      <ContactFooter onBook={() => handleBook()} />

      <button
        onClick={() => handleBook()}
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-green-400"
      >
        <MessageCircle size={26} className="text-white" />
      </button>
    </div>
  );
}
