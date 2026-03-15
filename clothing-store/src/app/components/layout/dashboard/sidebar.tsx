import Link from "next/link";

export default function DashboardSidebar() {
  return (
    <div className="sidebar-container">
      <h1>SHOP.CO</h1>
      <div className="sidebar-user-details">
        <ul>
          <li>
            <Link href="">Personal Account</Link>
          </li>
          <li>
            <Link href="">Orders</Link>
          </li>
          <li>
            <Link href="">Liked items</Link>
          </li>
          <li>
            <Link href="">Shipping details</Link>
          </li>
        </ul>
      </div>

      <div className="sidebar-admin-details">
        <ul>
          <li>
            <Link href="">Add new product</Link>
          </li>
          <li>
            <Link href="">Edit product details</Link>
          </li>
          <li>
            <Link href="">Liked items</Link>
          </li>
          <li>
            <Link href="">Shipping details</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
