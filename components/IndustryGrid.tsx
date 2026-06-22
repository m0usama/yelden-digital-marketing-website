import { industries } from "@/data/industries";
import { Sparkles } from "lucide-react";

type IndustryGridProps = {
  limit?: number;
};

export function IndustryGrid({ limit }: IndustryGridProps) {
  const visibleIndustries = typeof limit === "number" ? industries.slice(0, limit) : industries;

  return (
    <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {visibleIndustries.map((industry) => (
        <div key={industry} className="group flex items-center gap-3 font-extrabold text-white/88">
          <Sparkles size={21} className="shrink-0 text-yelden-yellow transition group-hover:rotate-12" />
          <span>{industry} Digital Marketing</span>
        </div>
      ))}
    </div>
  );
}
