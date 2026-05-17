import {
  LineChart,
  Bitcoin,
  Repeat,
  CircleDollarSign,
  Crown,
  Clock,
  AlertTriangle,
  Users,
  TrendingUp,
  ShieldCheck,
  Sparkles,
  Star,
  ArrowRight,
  Check,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  LineChart,
  Bitcoin,
  Repeat,
  CircleDollarSign,
  Crown,
  Clock,
  AlertTriangle,
  Users,
  TrendingUp,
  ShieldCheck,
  Sparkles,
  Star,
  ArrowRight,
  Check,
};

export function Icon({
  name,
  className,
  size,
}: {
  name: string;
  className?: string;
  size?: number;
}) {
  const Comp = map[name] ?? Sparkles;
  return <Comp className={className} size={size} aria-hidden />;
}
