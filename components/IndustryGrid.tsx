import {
  BadgePoundSterling,
  Banknote,
  BriefcaseBusiness,
  Building2,
  Calculator,
  CalendarDays,
  Camera,
  Car,
  Cpu,
  Dumbbell,
  Factory,
  Film,
  GraduationCap,
  Hammer,
  HeartPulse,
  Hotel,
  Landmark,
  Leaf,
  Megaphone,
  Monitor,
  Paintbrush,
  Plane,
  Radio,
  Scale,
  ShieldCheck,
  Shirt,
  ShoppingCart,
  Smile,
  Sparkles,
  Store,
  Trees,
  Trophy,
  Truck,
  Utensils,
  Wrench,
  Home,
  Package,
  PiggyBank,
  Ship,
} from "lucide-react";

import { industries } from "@/data/industries";

const iconMap: Record<string, any> = {
  Accountant: Calculator,
  Architect: Building2,
  Automotive: Car,
  Aviation: Plane,
  B2B: BriefcaseBusiness,
  Bank: Landmark,
  Chiropractor: HeartPulse,
  "Cleaning Services": Sparkles,
  Construction: Hammer,
  Cybersecurity: ShieldCheck,
  Dentist: Smile,
  Ecommerce: ShoppingCart,
  Education: GraduationCap,
  Electrician: Wrench,
  Energy: Leaf,
  Entertainment: Film,
  Events: CalendarDays,
  Fashion: Shirt,
  Finance: Banknote,
  "Financial Advisor": BadgePoundSterling,
  "Fitness & Nutrition": Dumbbell,
  Food: Utensils,
  Healthcare: HeartPulse,
  Hotel: Hotel,
  HVAC: Wrench,
  Insurance: ShieldCheck,
  "Interior Design": Paintbrush,
  Landscaping: Trees,
  Law: Scale,
  Logistics: Truck,
  Luxury: Sparkles,
  Manufacturing: Factory,
  "Mortgage Broker": Home,
  "Moving Company": Package,
  Photography: Camera,
  Plumbing: Wrench,
  "Real Estate": Building2,
  Recruitment: BriefcaseBusiness,
  Retail: Store,
  Roofing: Home,
  SaaS: Monitor,
  "Small Business": Store,
  Sports: Trophy,
  Technology: Cpu,
  Telecom: Radio,
  Therapist: HeartPulse,
  Tourism: Plane,
  "Wealth Management": PiggyBank,
  Yachting: Ship,
};

type IndustryGridProps = {
  limit?: number;
};

export function IndustryGrid({ limit }: IndustryGridProps) {
  const visibleIndustries =
    typeof limit === "number" ? industries.slice(0, limit) : industries;

  return (
    <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {visibleIndustries.map((industry) => {
        const Icon = iconMap[industry] || Megaphone;

        return (
          <div
            key={industry}
            className="group flex items-center gap-4 text-white/90"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-yelden-yellow/30 bg-yelden-yellow/5 transition duration-300 group-hover:border-yelden-yellow group-hover:bg-yelden-yellow/10">
              <Icon
                size={26}
                strokeWidth={1.7}
                className="text-yelden-yellow transition duration-300 group-hover:scale-110"
              />
            </div>

            <span className="text-sm font-black leading-tight sm:text-base">
              {industry} Digital Marketing
            </span>
          </div>
        );
      })}
    </div>
  );
}