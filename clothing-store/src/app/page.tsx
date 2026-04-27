import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Link from "next/link";
import { getAvailableProducts } from "@/lib/product";

function formatPrice(value: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(Number(value));
}

function ProductGridCard({
  title,
  description,
  imageUrl,
  price,
  categoryName,
}: {
  title: string;
  description: string;
  imageUrl: string | null;
  price: string;
  categoryName: string;
}) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-[0_1px_4px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)]">
      <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-zinc-100 via-white to-orange-50">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-end justify-between p-5">
            <div className="h-20 w-20 rounded-full bg-orange-200/70 blur-2xl" />
            <div className="h-28 w-28 rounded-full bg-zinc-300/60 blur-3xl" />
          </div>
        )}
        <div className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-700 backdrop-blur">
          {categoryName}
        </div>
      </div>

      <div className="space-y-3 p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold leading-tight text-zinc-900">
            {title}
          </h3>
          <div className="shrink-0 rounded-full bg-zinc-900 px-3 py-1 text-sm font-semibold text-white">
            {formatPrice(price)}
          </div>
        </div>
        <p className="line-clamp-3 text-sm leading-6 text-zinc-600">
          {description}
        </p>
      </div>
    </article>
  );
}

export default async function Home() {
  const products = await getAvailableProducts();
  const heroCount = products.length;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-[radial-gradient(circle_at_top,_rgba(255,240,230,0.85),_transparent_38%),linear-gradient(180deg,_#fafafa_0%,_#ffffff_56%,_#f8f8f6_100%)]">
        <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pt-12">
          <div className="overflow-hidden rounded-[34px] border border-zinc-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:p-10">
              <div className="flex flex-col justify-between gap-8">
                <div className="space-y-5">
                  <div className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-orange-700">
                    New season catalog
                  </div>
                  <div className="space-y-4">
                    <h1 className="max-w-2xl text-4xl font-black tracking-[-0.05em] text-zinc-950 sm:text-5xl lg:text-6xl">
                      All available products in one clean storefront.
                    </h1>
                    <p className="max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
                      Browse the live catalog below. Fresh products from the
                      dashboard appear here automatically, with a simple layout
                      that keeps the focus on the items.
                    </p>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-3xl bg-zinc-950 p-4 text-white">
                    <div className="text-xs uppercase tracking-[0.22em] text-zinc-400">
                      Products
                    </div>
                    <div className="mt-2 text-3xl font-bold">{heroCount}</div>
                  </div>
                  <div className="rounded-3xl bg-orange-50 p-4 text-zinc-900">
                    <div className="text-xs uppercase tracking-[0.22em] text-orange-700">
                      Fresh look
                    </div>
                    <div className="mt-2 text-lg font-semibold leading-6">
                      Cards, spacing, and contrast tuned for catalog browsing.
                    </div>
                  </div>
                  <div className="rounded-3xl bg-zinc-100 p-4 text-zinc-900">
                    <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                      Availability
                    </div>
                    <div className="mt-2 text-lg font-semibold leading-6">
                      Only active items from your product database.
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-end rounded-[28px] bg-linear-to-br from-zinc-950 via-zinc-900 to-orange-900 p-6 text-white sm:p-8">
                <div className="max-w-sm space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-200">
                    Featured storefront
                  </p>
                  <h2 className="text-2xl font-bold tracking-[-0.03em] sm:text-3xl">
                    Show your catalog with a premium first impression.
                  </h2>
                  <p className="text-sm leading-6 text-zinc-200">
                    The homepage now acts like a product showcase instead of an
                    empty shell, so visitors immediately see what is available.
                  </p>
                  <Link
                    href="/signin"
                    className="inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:-translate-y-0.5"
                  >
                    Sign in to manage products
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <section className="space-y-6">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
                  Catalog
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-[-0.04em] text-zinc-950 sm:text-4xl">
                  Available products
                </h2>
              </div>
              <p className="hidden max-w-md text-sm leading-6 text-zinc-500 md:block">
                The latest items from the store database are displayed here.
              </p>
            </div>

            {products.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {products.map((product) => (
                  <ProductGridCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <div className="rounded-[28px] border border-dashed border-zinc-300 bg-white p-10 text-center">
                <h3 className="text-2xl font-bold text-zinc-900">
                  No products yet
                </h3>
                <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-zinc-600">
                  Add the first product from the dashboard and it will appear
                  here automatically.
                </p>
              </div>
            )}
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
}
