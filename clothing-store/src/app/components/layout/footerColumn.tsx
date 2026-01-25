import Link from "next/link";

interface LinkItem {
  label: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: LinkItem[];
}

export default function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="footer-column">
      <h4>{title}</h4>
      <ul>
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
