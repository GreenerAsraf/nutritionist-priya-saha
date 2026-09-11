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
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
      <Icon size={22} strokeWidth={1.75} />
    </div>
  );
}
