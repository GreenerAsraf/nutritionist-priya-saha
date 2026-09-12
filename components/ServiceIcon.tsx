import {
  Activity,
  Baby,
  Heart,
  Leaf,
  Users,
  UtensilsCrossed,
} from "lucide-react";

const icons = {
  leaf: Leaf,
  heart: Heart,
  baby: Baby,
  utensils: UtensilsCrossed,
  activity: Activity,
  users: Users,
} as const;

type IconKey = keyof typeof icons;

export default function ServiceIcon({ name }: { name: IconKey }) {
  const Icon = icons[name];
  return (
    <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-100 via-teal-50 to-amber-100/60 text-emerald-700 ring-1 ring-emerald-200/80 shadow-xs transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-emerald-600 group-hover:to-teal-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-emerald-500/30">
      <Icon size={24} strokeWidth={1.8} />
    </div>
  );
}
