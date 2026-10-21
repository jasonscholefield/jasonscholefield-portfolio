import type { CollectionEntry } from 'astro:content';

// Personal projects have no client name worth showing, so they get a display name.
const displayNames: Record<string, string> = {
  'arizona-ballot-guide': 'Arizona Ballot Guide',
  'battlefield-40000': 'Battlefield 40,000',
  'escape-from-tarkov': 'Escape from Tarkov concept',
};

export const isPersonal = (entry: CollectionEntry<'work'>): boolean => entry.data.client.startsWith('Personal');

export const displayName = (entry: CollectionEntry<'work'>): string => displayNames[entry.id] ?? entry.data.client;

/** The small "year · kind" line shown on cards, the work list and the hero tray. */
export const kicker = (entry: CollectionEntry<'work'>): string =>
  `${entry.data.year} · ${isPersonal(entry) ? 'Personal project' : entry.data.category}`;
