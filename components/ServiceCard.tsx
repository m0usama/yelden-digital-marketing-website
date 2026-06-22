import { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
};

export function ServiceCard({ title, description, icon: Icon, index }: ServiceCardProps) {
  return (
    <article className="card group min-h-[270px] p-7 transition duration-300 hover:-translate-y-2 hover:border-yelden-yellow/70">
      <div className="mb-8 flex items-center justify-between">
        <span className="text-sm font-black text-yelden-yellow">{String(index).padStart(2, "0")}</span>
        <Icon className="text-yelden-yellow transition duration-300 group-hover:scale-110" size={34} />
      </div>
      <h3 className="mb-4 text-2xl font-black leading-tight">{title}</h3>
      <p className="text-white/68">{description}</p>
    </article>
  );
}
