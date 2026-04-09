// Navigation types
export interface NavSubItem {
  label: string;
  href: string;
}

export interface NavColumn {
  heading?: string;
  items: NavSubItem[];
}

export interface NavItem {
  label: string;
  href: string;
  columns?: NavColumn[];
}

export interface UtilityLink {
  label: string;
  href: string;
}

// Content types
export interface Stat {
  value: string;
  label: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  href: string;
  image?: string;
  icon?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  services: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  rating: number;
}

export interface Provider {
  id: string;
  name: string;
  title: string;
  specialty: string;
  location: string;
  image: string;
  href: string;
}

export interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  phone: string;
  hours: string;
}

export interface TickerItem {
  text: string;
}
