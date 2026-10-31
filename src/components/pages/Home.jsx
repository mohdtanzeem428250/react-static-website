import Header from '../common/Header'
import Footer from '../common/Footer'
const categories = [
    {
        name: 'Everyday carry',
        description: 'Thoughtful essentials for wherever you go.',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85',
        imageAlt: 'Everyday backpack ready for a trip',
    },
    {
        name: 'Home comforts',
        description: 'Small details that make a space feel yours.',
        image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85',
        imageAlt: 'Warm and minimal living room',
    },
    {
        name: 'Tech essentials',
        description: 'Useful upgrades for work and downtime.',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85',
        imageAlt: 'Over-ear headphones',
    },
]

const products = [
    {
        name: 'Everyday Backpack',
        category: 'Accessories',
        price: '$64.00',
        badge: 'Bestseller',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85',
        imageAlt: 'Black everyday backpack',
    },
    {
        name: 'Classic Leather Watch',
        category: 'Accessories',
        price: '$129.00',
        badge: 'Popular',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85',
        imageAlt: 'Minimal wristwatch with a dark face',
    },
    {
        name: 'Studio Headphones',
        category: 'Electronics',
        price: '$89.00',
        badge: '',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85',
        imageAlt: 'Over-ear headphones',
    },
    {
        name: 'Everyday Sneakers',
        category: 'Footwear',
        price: '$78.00',
        badge: 'New',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85',
        imageAlt: 'Red athletic sneaker',
    },
]

const benefits = [
    {
        title: 'Quality that lasts',
        description: 'Reliable materials and considered details, made for everyday use.',
    },
    {
        title: 'Free shipping',
        description: 'Complimentary delivery on orders over $75.',
    },
    {
        title: 'Easy returns',
        description: 'Changed your mind? Send it back within 30 days.',
    },
]

function Home() {
    return (
        <>
        <Header/>
            <main className="bg-stone-50 text-stone-900">
                <section className="overflow-hidden bg-[#f5eee4]">
                    <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-14 lg:px-10 lg:py-24">
                        <div className="max-w-xl">
                            <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-orange-700">
                                Good things, chosen with care
                            </p>
                            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                                Make room for
                                <br />
                                <span className="font-serif italic text-orange-700">better things.</span>
                            </h1>
                            <p className="mt-6 max-w-lg text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">
                                Meet the everyday essentials you will reach for again and again. Thoughtfully
                                picked for good design, dependable quality, and life as it really happens.
                            </p>
                            <div className="mt-8 flex flex-wrap items-center gap-4">
                                <a
                                    href="#featured"
                                    className="inline-flex items-center gap-3 rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2"
                                >
                                    Shop the collection
                                    <span aria-hidden="true">→</span>
                                </a>
                                <a
                                    href="#categories"
                                    className="rounded-full px-4 py-3 text-sm font-semibold text-stone-700 transition hover:text-orange-700"
                                >
                                    Explore categories
                                </a>
                            </div>
                            <div className="mt-10 flex items-center gap-3 text-sm text-stone-600">
                                <div className="flex -space-x-2" aria-hidden="true">
                                    <span className="grid size-8 place-items-center rounded-full border-2 border-[#f5eee4] bg-orange-200 text-xs font-semibold text-orange-900">J</span>
                                    <span className="grid size-8 place-items-center rounded-full border-2 border-[#f5eee4] bg-stone-300 text-xs font-semibold text-stone-800">M</span>
                                    <span className="grid size-8 place-items-center rounded-full border-2 border-[#f5eee4] bg-amber-200 text-xs font-semibold text-amber-900">A</span>
                                </div>
                                <p><span className="font-semibold text-stone-900">Loved by 2,000+</span> thoughtful shoppers</p>
                            </div>
                        </div>
                        <div className="relative mx-auto w-full max-w-xl">
                            <div className="absolute -right-4 -top-4 h-full w-full rounded-[2rem] border border-orange-900/20 sm:-right-5 sm:-top-5" />
                            <img
                                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85"
                                alt="A thoughtfully styled selection of everyday clothing and accessories"
                                className="relative aspect-[5/4] w-full rounded-[2rem] object-cover shadow-xl"
                            />
                            <div className="absolute -bottom-5 left-4 rounded-2xl bg-white px-5 py-4 shadow-lg sm:-left-5 sm:px-6">
                                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">The good things edit</p>
                                <p className="mt-1 font-serif text-xl font-semibold text-stone-900">A little better, every day.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="categories" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
                    <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.24em] text-orange-700">Find your kind of good</p>
                            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Shop by category</h2>
                        </div>
                        <p className="max-w-md text-sm leading-6 text-stone-600">
                            A considered collection for the places you go and the moments in between.
                        </p>
                    </div>
                    <div className="grid gap-5 md:grid-cols-3">
                        {categories.map((category) => (
                            <a
                                key={category.name}
                                href="#featured"
                                className="group relative isolate min-h-72 overflow-hidden rounded-2xl bg-stone-200"
                            >
                                <img
                                    src={category.image}
                                    alt={category.imageAlt}
                                    className="absolute inset-0 -z-10 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-stone-950/80 via-stone-950/10 to-transparent" />
                                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                                    <h3 className="text-xl font-semibold">{category.name}</h3>
                                    <p className="mt-1 text-sm text-white/80">{category.description}</p>
                                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">
                                        Explore <span aria-hidden="true">→</span>
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

                <section id="featured" className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.24em] text-orange-700">Good picks, lately</p>
                                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">A few customer favorites</h2>
                                <p className="mt-2 text-sm leading-6 text-stone-600">Useful, well-made, and ready to become part of your everyday.</p>
                            </div>
                            <a href="#categories" className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-stone-800 transition hover:text-orange-700">
                                Browse the collection <span aria-hidden="true">→</span>
                            </a>
                        </div>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {products.map((product) => (
                                <article
                                    key={product.name}
                                    className="group overflow-hidden rounded-2xl border border-stone-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                                >
                                    <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                                        <img
                                            src={product.image}
                                            alt={product.imageAlt}
                                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                        />
                                        {product.badge && (
                                            <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-stone-800 shadow-sm">
                                                {product.badge}
                                            </span>
                                        )}
                                    </div>
                                    <div className="p-4">
                                        <p className="text-xs font-medium uppercase tracking-wide text-stone-500">{product.category}</p>
                                        <div className="mt-1 flex items-start justify-between gap-3">
                                            <h3 className="font-semibold text-stone-900">{product.name}</h3>
                                            <p className="shrink-0 font-semibold text-stone-900">{product.price}</p>
                                        </div>
                                        <a
                                            href="#categories"
                                            className="mt-4 inline-flex w-full justify-center rounded-lg bg-stone-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                                        >
                                            Discover more
                                        </a>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-3 lg:px-10">
                    {benefits.map((benefit, index) => (
                        <article key={benefit.title} className="flex gap-4">
                            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-orange-100 font-serif text-lg font-semibold text-orange-800">
                                0{index + 1}
                            </span>
                            <div>
                                <h2 className="font-semibold">{benefit.title}</h2>
                                <p className="mt-1 text-sm leading-6 text-stone-600">{benefit.description}</p>
                            </div>
                        </article>
                    ))}
                </section>

                <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10">
                    <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-3xl bg-stone-900 px-7 py-10 text-white sm:px-10 sm:py-12 lg:flex-row lg:items-center">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.24em] text-orange-300">Your next favorite is waiting</p>
                            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Make everyday a little more thoughtful.</h2>
                        </div>
                        <a
                            href="#featured"
                            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-stone-900 transition hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-stone-900"
                        >
                            Find your good thing <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </section>
            </main>
        <Footer/>
        </>
    )
}

export default Home
