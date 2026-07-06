import { useState } from 'react';
import { HOTEL_NAME, HOTEL_WHATSAPP_NUMBER } from '../data/hotelData';

export function useHotelInquiry() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);

  const openInquiry = ({ roomName = null } = {}) => {
    const lines = [
      `Hello ${HOTEL_NAME}, I'd like to enquire about a booking.`,
      roomName ? `Room: ${roomName}` : null,
      checkIn ? `Check-in: ${checkIn}` : null,
      checkOut ? `Check-out: ${checkOut}` : null,
      guests ? `Guests: ${guests}` : null,
      'Please could you confirm availability and rates? Thank you.',
    ].filter(Boolean);

    const message = lines.join('\n');
    const url = `https://wa.me/${HOTEL_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    if (typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return {
    checkIn,
    checkOut,
    guests,
    setCheckIn,
    setCheckOut,
    setGuests,
    openInquiry,
  };
}
