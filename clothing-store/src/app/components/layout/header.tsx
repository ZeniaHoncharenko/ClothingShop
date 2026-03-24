import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="grid grid-cols-[1fr_auto] items-center gap-3 px-4 py-4 md:grid-cols-[0.6fr_0.8fr_1fr_0.1fr] md:gap-2 md:px-11 md:py-5.5">
        <div className="pl-1 text-xl font-bold md:pl-2 md:text-2xl">
          <h1>SHOP.CO</h1>
        </div>
        <div className="hidden md:block">
          <nav>
            <ul className="grid items-center grid-cols-4 gap-0.5">
              <li className="p-0.5">Shop</li>
              <li className="p-0.5">On Sale</li>
              <li className="p-0.5">New Arrivals</li>
              <li className="p-0.5">Brands</li>
            </ul>
          </nav>
        </div>
        <div className="order-3 col-span-2 flex h-10 items-center gap-2 rounded-4xl bg-gray-200 px-4 md:order-0 md:col-span-1">
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
        <div className="grid grid-cols-2 items-center gap-1 px-1 md:gap-0.5 md:px-2">
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
