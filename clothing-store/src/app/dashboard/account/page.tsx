import { getCurrentUser } from "@/lib/auth";
import Image from "next/image";
import { ReactNode } from "react";
import {
  CalendarDays,
  CircleUserRound,
  Globe,
  LucideIcon,
  Mail,
  Phone,
  VenusAndMars,
} from "lucide-react";

export const dynamic = "force-dynamic";

function formatBirthDate(value: Date | null | undefined) {
  if (!value) return "Not specified";

  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(value);
}

function formatGender(value: string | null | undefined) {
  if (!value) return "Not specified";

  return value
    .toLowerCase()
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function countryCodeToFlag(code: string) {
  const normalizedCode = code
    .toUpperCase()
    .replace(/[^A-Z]/g, "")
    .slice(0, 2);
  if (normalizedCode.length !== 2) return null;

  return {
    code: normalizedCode,
    imageUrl: `https://flagcdn.com/24x18/${normalizedCode.toLowerCase()}.png`,
  };
}

function formatCountry(value: string | null | undefined): ReactNode {
  if (!value) return "Not specified";

  const country = countryCodeToFlag(value);
  if (!country) return value.toUpperCase();

  return (
    <span className="inline-flex items-center gap-2">
      <span>{country.code}</span>
      <Image
        src={country.imageUrl}
        alt={`${country.code} flag`}
        width={24}
        height={18}
        className="h-4.5 w-6 rounded-xs object-cover"
      />
    </span>
  );
}

type InfoCardProps = {
  title: string;
  value: ReactNode;
  icon: LucideIcon;
};

function InfoCard({ title, value, icon: Icon }: InfoCardProps) {
  return (
    <article className="flex min-h-28 items-start justify-between rounded-3xl border border-zinc-200 bg-white px-6 py-5 shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
      <div className="pr-4">
        <h2 className="text-2xl font-semibold leading-none tracking-[-0.02em] text-zinc-900 sm:text-[32px]">
          {title}
        </h2>
        <p className="mt-3 text-xl font-normal leading-none text-zinc-600 sm:text-2xl">
          {value}
        </p>
      </div>

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-orange-300 bg-orange-50/40 text-orange-500">
        <Icon size={18} strokeWidth={1.8} />
      </div>
    </article>
  );
}

export default async function DashboardAccountPage() {
  const user = await getCurrentUser();

  const cards = [
    {
      title: "Full name",
      value: user?.name || "Not specified",
      icon: CircleUserRound,
    },
    {
      title: "Email",
      value: user?.email || "Not specified",
      icon: Mail,
    },
    {
      title: "Phone number",
      value: user?.profile?.phone || "Not specified",
      icon: Phone,
    },
    {
      title: "Date of birth",
      value: formatBirthDate(user?.profile?.birthDate),
      icon: CalendarDays,
    },
    {
      title: "Gender",
      value: formatGender(user?.profile?.gender),
      icon: VenusAndMars,
    },
    {
      title: "Country",
      value: formatCountry(user?.profile?.countryCode),
      icon: Globe,
    },
  ];

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-zinc-200 bg-white px-7 py-7 shadow-[0_1px_4px_rgba(0,0,0,0.06)] sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-zinc-500">
          Dashboard
        </p>
        <h1 className="mt-3 text-4xl font-bold leading-none tracking-[-0.03em] text-zinc-900 sm:text-5xl">
          Personal account
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-snug text-zinc-600 sm:text-xl">
          Manage your personal information, including your email and phone
          number where you can be contacted.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {cards.map((card) => (
          <InfoCard
            key={card.title}
            title={card.title}
            value={card.value}
            icon={card.icon}
          />
        ))}
      </div>
    </section>
  );
}
