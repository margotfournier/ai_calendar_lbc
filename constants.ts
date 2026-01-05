
import { DayData } from './types';

export const COLORS = {
  HE_BLUE: '#004F9F',
  HE_YELLOW: '#FFD100',
  SOFT_BLUE: '#F0F9FF',
  ICE_WHITE: 'rgba(255, 255, 255, 0.8)',
  TEXT_DARK: '#1d1d1f',
  TEXT_SECONDARY: '#86868b'
};

const AI_FEATURE_TIPS = [
  "Launch: basics and security reassurance",
  "Enterprise search",
  "Research mode",
  "AI meeting notes",
  "Example - Research mode on a product feature",
  "Ask AI in a paragraph",
  "AI copilot agent",
  "AI block",
  "Research mode example - PRD",
  "Databases: Create & Query",
  "Databases: Update & practical tips",
  "Customize your AI copilot",
  "How to choose the right model?",
  "AI copilot UC 1: organize pages",
  "AI copilot personalization 1",
  "AI keyboard shortcut",
  "AI copilot UC 2: generate product epics",
  "Document reading (connectors, PDF, images)",
  "Translate a page",
  "AI copilot personalization 2",
  "Wrap up: AI tools at HE"
];

// TARGET_YEAR and TARGET_MONTH are now provided via `public/days.yml`.
// Defaults are handled in `App.tsx` if the YAML is not present.

export const CALENDAR_DAYS: DayData[] = Array.from({ length: 31 }, (_, i) => ({
  day: i + 1,
  title: AI_FEATURE_TIPS[i] || "AI feature tip",
  description: "Advanced AI techniques for the modern LeBonCoiner.",
  notionUrl: "",
  isUnlocked: false,
  type: 'tip'
}));

export const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
// Les métadonnées musicales et les URLs par weekday ont été retirées.
// Utilisez `public/days.yml` pour mapper chaque jour (id) -> { title, url }.

export const HOLIDAYS: { month: number; day: number; label?: string }[] = [
  { month: 0, day: 1, label: "New Year's Day" },
  { month: 11, day: 25, label: "Christmas Day" }
];

export const isWeekendOrHoliday = (year: number, month: number, day: number) => {
  const isHoliday = HOLIDAYS.some(holiday => holiday.month === month && holiday.day === day);
  if (isHoliday) return true;
  
  const date = new Date(year, month, day);
  const dayOfWeek = date.getDay(); 
  return dayOfWeek === 0 || dayOfWeek === 6; // 0 Sun, 6 Sat
};
