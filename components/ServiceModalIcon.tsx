import {
  Activity,
  Baby,
  Brain,
  Droplets,
  FlaskConical,
  Heart,
  Leaf,
  Shield,
  Sun,
  Users,
  UtensilsCrossed,
  Zap,
  Sparkles,
} from "lucide-react";
import type { IconKey } from "@/lib/services-data";

const icons: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  heart: Heart,
  leaf: Leaf,
  baby: Baby,
  activity: Activity,
  users: Users,
  utensils: UtensilsCrossed,
  shield: Shield,
  brain: Brain,
  droplets: Droplets,
  sun: Sun,
  zap: Zap,
  flask: FlaskConical,
  sparkles: Sparkles,
};

export default function ServiceModalIcon({ name }: { name: IconKey | string }) {
  const Icon = icons[name] || Heart;
  return <Icon size={20} strokeWidth={1.8} />;
}
