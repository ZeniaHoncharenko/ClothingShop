import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="grid items-center grid-cols-[0.6fr_0.8fr_1fr_0.1fr] gap-2 px-11 py-5.5">
        <div className="text-2xl font-bold pl-2">
          <h1>SHOP.CO</h1>
        </div>
        <div className="">
          <nav>
            <ul className="grid items-center grid-cols-4 gap-0.5">
              <li className="p-0.5">Shop</li>
              <li className="p-0.5">On Sale</li>
              <li className="p-0.5">New Arrivals</li>
              <li className="p-0.5">Brands</li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center bg-gray-200 rounded-4xl px-4 h-10 gap-2">
          <span className="flex items-center justify-center shrink-0">
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
            className="flex-1 bg-transparent outline-none placeholder:text-gray-500"
          />
        </div>
        <div className="grid items-center grid-cols-2 gap-0.5 px-2">
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
              <Link href="/signin">
                <Image
                  src="/user_account_icon.png"
                  alt="User Account"
                  width={20}
                  height={20}
                />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
