"use client";

import { addNewProduct } from "@/lib/product";
import { toast } from "sonner";

export default function AddProductPage() {
  async function handleNewProduct(formData: FormData) {
    const res = await addNewProduct(formData);
    if (res.success) {
      toast.success(res.message || "New product added succesfully");
    } else {
      toast.error(res.message || "Something went wrong", {
        description: "New product was not created",
      });
    }
  }

  const categories = [
    { id: 1, title: "T-Shirts" },
    { id: 2, title: "Hoodies" },
    { id: 3, title: "Jeans" },
    { id: 4, title: "Accessories" },
  ];

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-zinc-200 bg-white px-7 py-7 shadow-[0_1px_4px_rgba(0,0,0,0.06)] sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-zinc-500">
          Dashboard
        </p>
        <h1 className="mt-3 text-4xl font-bold leading-none tracking-[-0.03em] text-zinc-900 sm:text-5xl">
          Add a product
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-snug text-zinc-600 sm:text-xl">
          Create a new item in the store catalog with a clean, consistent
          dashboard form.
        </p>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
        <form
          action={handleNewProduct}
          className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-[0_1px_4px_rgba(0,0,0,0.06)] sm:p-8"
        >
          <div className="grid gap-5">
            <div className="grid gap-2">
              <label
                htmlFor="title"
                className="text-sm font-semibold text-zinc-700"
              >
                Product name
              </label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Oversized Cotton T-Shirt"
                className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-orange-300 focus:bg-white focus:ring-4 focus:ring-orange-100"
                required
              />
            </div>

            <div className="grid gap-2">
              <label
                htmlFor="description"
                className="text-sm font-semibold text-zinc-700"
              >
                Description
              </label>
              <textarea
                name="description"
                id="description"
                rows={5}
                placeholder="Short product description for the catalog and product page."
                className="w-full resize-none rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-orange-300 focus:bg-white focus:ring-4 focus:ring-orange-100"
                required
              />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="grid gap-2">
                <label
                  htmlFor="image_link"
                  className="text-sm font-semibold text-zinc-700"
                >
                  Image link
                </label>
                <input
                  type="url"
                  name="image_link"
                  id="image_link"
                  placeholder="https://..."
                  className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-orange-300 focus:bg-white focus:ring-4 focus:ring-orange-100"
                  required
                />
              </div>

              <div className="grid gap-2">
                <label
                  htmlFor="price"
                  className="text-sm font-semibold text-zinc-700"
                >
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  min="0"
                  step="0.01"
                  placeholder="49.99"
                  className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-orange-300 focus:bg-white focus:ring-4 focus:ring-orange-100"
                  required
                />
              </div>
            </div>

            <div className="grid gap-2">
              <label
                htmlFor="category_id"
                className="text-sm font-semibold text-zinc-700"
              >
                Category
              </label>
              <select
                name="category_id"
                id="category_id"
                className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-zinc-900 outline-none transition focus:border-orange-300 focus:bg-white focus:ring-4 focus:ring-orange-100"
              >
                <option value="">Please select</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.title}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex h-12 items-center justify-center rounded-2xl bg-zinc-900 px-5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(0,0,0,0.12)] transition hover:-translate-y-0.5 hover:bg-black focus:outline-none focus:ring-4 focus:ring-zinc-300"
            >
              Submit product
            </button>
          </div>
        </form>

        <aside className="rounded-3xl border border-zinc-200 bg-linear-to-br from-white to-zinc-50 p-6 shadow-[0_1px_4px_rgba(0,0,0,0.06)] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-zinc-500">
            Tips
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-zinc-900">
            Keep the catalog consistent
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-6 text-zinc-600">
            <p>
              Use clear product names and short descriptions so the catalog
              stays easy to scan.
            </p>
            <p>
              Prefer square-ish product images with a clean background for the
              best fit in the store.
            </p>
            <p>Keep the price in a simple decimal format like 49.99.</p>
          </div>

          <div className="mt-8 rounded-2xl border border-orange-200 bg-orange-50/60 p-4 text-sm text-zinc-700">
            The color treatment matches the dashboard cards and sidebar accent
            used across the site.
          </div>
        </aside>
      </div>
    </section>
  );
}
