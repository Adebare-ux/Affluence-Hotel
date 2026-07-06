import {
  Calendar,
  Users,
  Search,
  MapPin,
  Phone,
  Zap,
  Wifi,
  UtensilsCrossed,
  Car,
  MessageCircle,
  Star,
  BedDouble,
  Sparkles,
  Building2,
} from 'lucide-react';

export const HOTEL_NAME = 'Affluence Oba-B Hotel';
export const HOTEL_PHONE_DISPLAY = '+234 903 896 4622';
export const HOTEL_PHONE_TEL = '+234 903 896 4622';
export const HOTEL_WHATSAPP_NUMBER = '234 903 896 4622';
export const HOTEL_ADDRESS = 'Okutapemo Area, Iseyin 202101, Oyo State, Nigeria';
export const HOTEL_RATING = 4.0;
export const HOTEL_REVIEW_COUNT = 192;
export const HOTEL_CHECKIN_TIME = '2:00 PM';

export const ROOMS = [
  {
    id: 'standard',
    name: 'Standard Room',
    price: 12000,
    image:
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80',
    tags: ['AC', 'Wi-Fi', 'Room service'],
    blurb: "A quiet, well-kept room for travelers who just need a solid night's rest.",
  },
  {
    id: 'deluxe',
    name: 'Deluxe Room',
    price: 20000,
    image:
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80',
    tags: ['AC', 'Wi-Fi', 'Work desk', 'Room service'],
    blurb: 'Extra space and a proper desk for guests staying longer.',
  },
  {
    id: 'executive',
    name: 'Executive Suite',
    price: 32000,
    image:
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80',
    tags: ['AC', 'Wi-Fi', 'Sitting area', 'Room service'],
    blurb: 'A separate sitting area and the best finishes in the house.',
  },
];

export const EVENT_HALLS = [
  {
    id: 'grand-hall',
    name: 'Grand Event Hall',
    capacity: 'Up to 300 guests',
    image:
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=80',
    tags: ['Weddings', 'Conferences', 'Owambe'],
    blurb:
      'The hotel\'s larger hall — suited to weddings, conferences, and big owambe-style events.',
  },
  {
    id: 'small-hall',
    name: 'Standard Event Hall',
    capacity: 'Up to 120 guests',
    image:
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80',
    tags: ['Meetings', 'Birthdays', 'Small ceremonies'],
    blurb:
      'A more intimate hall for meetings, birthdays, and smaller family ceremonies.',
  },
];

export const AMENITIES = [
  {
    icon: Zap,
    title: 'Backup Power',
    desc: 'Generator support to keep the lights, AC, and Wi-Fi running through outages.',
  },
  {
    icon: Wifi,
    title: 'Wi-Fi Throughout',
    desc: 'Complimentary wireless internet across guest rooms and common areas.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurant, Bar & Room Service',
    desc: "An in-house restaurant and bar, with room service for guests who'd rather stay in.",
  },
  {
    icon: Car,
    title: 'Free Parking & Laundry',
    desc: 'Complimentary on-site parking and full-service laundry for every stay.',
  },
];

export const HERO_FIELDS = [
  { key: 'checkIn', label: 'Check-in', icon: Calendar, type: 'date' },
  { key: 'checkOut', label: 'Check-out', icon: Calendar, type: 'date' },
  { key: 'guests', label: 'Guests', icon: Users, type: 'number' },
];

export const SECTION_ICONS = {
  star: Star,
  bed: BedDouble,
  sparkles: Sparkles,
  message: MessageCircle,
  search: Search,
  mapPin: MapPin,
  phone: Phone,
};
