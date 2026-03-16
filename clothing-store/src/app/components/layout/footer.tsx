import Image from "next/image";
import { footerData } from "./footer.data";
import FooterColumn from "./footerColumn";

export default function Footer() {
  return (
    //Main footer layout
    <footer className="w-full border-t border-zinc-200 bg-zinc-100">
      <div className="mx-auto w-full max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr] lg:gap-16">
          {/* Company section */}
          <div className="space-y-5">
            <h1 className="text-4xl font-black tracking-tight">
              {footerData.brand.name}
            </h1>
            <p className="max-w-xs text-lg leading-8 text-zinc-600">
              {footerData.brand.description}
            </p>
            <div className="flex items-center gap-3">
              {footerData.brand.socials.map((social) => (
                <Image
                  src={`/logo-${social}.png`}
                  alt={social}
                  key={social}
                  width={15}
                  height={15}
                />
              ))}
            </div>
          </div>

          {/* Columns */}

          <div className="grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {footerData.columns.map((column) => (
              <FooterColumn
                key={column.title}
                title={column.title}
                links={column.links}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
