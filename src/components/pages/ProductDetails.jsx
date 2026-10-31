import Header from '../common/Header'
import Footer from '../common/Footer'
import { Link, useParams } from 'react-router-dom'
import { products } from './Product'

function ProductDetails() {
  const { pid } = useParams()
  const product = products.find((item) => item.id === Number(pid))

  if (!product) {
    return (
      <>
        <Header />
        <main className="flex min-h-[60vh] flex-col items-center justify-center bg-stone-50 px-4 py-16 text-center text-stone-900">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">Product not found</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight">This item isn't in our collection.</h1>
          <p className="mt-3 max-w-md text-stone-600">The product link may be incorrect or the item may no longer be available.</p>
          <Link
            to="/products"
            className="mt-7 rounded-lg bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            Browse all products
          </Link>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-50 px-4 py-10 text-stone-900 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-stone-500">
            <Link to="/" className="transition hover:text-orange-600">Home</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <Link to="/products" className="transition hover:text-orange-600">Products</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-stone-900" aria-current="page">{product.name}</span>
          </nav>

          <section className="grid gap-8 overflow-hidden rounded-3xl border border-stone-200 bg-white p-4 shadow-sm sm:p-6 lg:grid-cols-2 lg:gap-12 lg:p-10">
            <div className="relative overflow-hidden rounded-2xl bg-stone-100">
              <img
                src={product.image}
                alt={product.imageAlt}
                className="aspect-square h-full w-full object-cover"
              />
              {product.badge && (
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-stone-800 shadow-sm">
                  {product.badge}
                </span>
              )}
            </div>

            <div className="flex flex-col justify-center py-2 sm:py-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">{product.category}</p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{product.name}</h1>

              <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
                <span className="text-amber-500" aria-hidden="true">★</span>
                <span className="font-semibold text-stone-800">{product.rating}</span>
                <span className="text-stone-500">({product.reviews} reviews)</span>
              </div>

              <p className="mt-6 text-3xl font-bold text-stone-900">{product.price}</p>
              <p className="mt-5 max-w-xl leading-7 text-stone-600">
                A thoughtful everyday essential, selected for its quality, useful design, and lasting style.
                Add a little something special to your daily routine with this {product.name.toLowerCase()}.
              </p>

              <div className="mt-7 rounded-xl bg-stone-50 p-4">
                <p className="font-semibold text-stone-900">A good choice, every day</p>
                <p className="mt-1 text-sm leading-6 text-stone-600">
                  Carefully picked from our collection of practical favorites.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  className="rounded-lg bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  Add to cart
                </button>
                <Link
                  to="/products"
                  className="rounded-lg border border-stone-300 px-6 py-3 text-center text-sm font-semibold text-stone-800 transition hover:border-stone-900 hover:bg-stone-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  Continue shopping
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default ProductDetails;