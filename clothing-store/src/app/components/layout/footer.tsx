import Image from "next/image";
import { footerData } from "./footer.data";
import FooterColumn from "./footerColumn";

export default function Footer() {
  return (
    //Main footer layout
    <footer>
      <div className="footer">
        {/* Company section */}
        <div className="company">
          <h1>{footerData.brand.name}</h1>
          <p>{footerData.brand.description}</p>
          <div className="company-socials">
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

        <div className="footer-columns">
          {footerData.columns.map((column) => (
            <FooterColumn
              key={column.title}
              title={column.title}
              links={column.links}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}
