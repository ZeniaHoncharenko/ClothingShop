import Image from "next/image";
import "./header.css";

export default function Header() {
  return (
    <header>
      <div className="header">
        <div className="main-site-logo">
          <h1>SHOP.CO</h1>
        </div>
        <div className="navigation">
          <nav>
            <ul className="nav-links">
              <li>Shop</li>
              <li>On Sale</li>
              <li>New Arrivals</li>
              <li>Brands</li>
            </ul>
          </nav>
        </div>
        <div className="search-bar">
          <span className="search-icon">
            <Image
              src="/search_bar_icon.png"
              alt="Search"
              width={20}
              height={20}
            />
          </span>
          <input
            type="text"
            placeholder="Search for products..."
            className="search-input"
          />
        </div>
        <div className="nav-logos">
          <div className="shopping-cart-short">
            <span className="cart-icon">
              <Image
                src="/shopping_cart_icon.png"
                alt="Shopping Cart"
                width={20}
                height={20}
              />
            </span>
          </div>
          <div className="user-account-short">
            <span className="user-icon">
              <Image
                src="/user_account_icon.png"
                alt="User Account"
                width={20}
                height={20}
              />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
