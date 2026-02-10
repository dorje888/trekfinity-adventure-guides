export type DestinationSlug = 'kathmandu' | 'pokhara' | 'lumbini' | 'chitwan';

export interface Destination {
  slug: DestinationSlug;
  name: string;
  subtitle?: string;
  heroLocal?: string; // optional if using bundled imports per page
  heroRemote?: string | null;
}

export interface Attraction {
  id: string;
  destinationSlug: DestinationSlug;
  name: string;
  description: string;
  imageLocal: string;
  imageRemote?: string | null;
  sortOrder?: number;
}
