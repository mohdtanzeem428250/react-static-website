import Header from '../common/Header'
import Footer from '../common/Footer'
const values = [
    {
        number: '01',
        title: 'Made to last',
        description:
            'We choose dependable materials and thoughtful details, so the things you bring home are made for more than one season.',
    },
    {
        number: '02',
        title: 'Less, but better',
        description:
            'A considered collection beats an endless catalog. Every product earns its place through usefulness, quality, and good design.',
    },
    {
        number: '03',
        title: 'People come first',
        description:
            'From the makers behind each piece to the people who use them every day, better shopping starts with care.',
    },
]

function About() {
    return (
        <>
        <Header/>
            <main className="bg-stone-50 text-stone-900">
                <section className="overflow-hidden bg-[#f5eee4]">
                    <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-14 lg:px-10 lg:py-24">
                        <div className="max-w-xl">
                            <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-orange-700">
                                A little about us
                            </p>
                            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                                Good things,
                                <br />
                                chosen <span className="font-serif italic text-orange-700">with care.</span>
                            </h1>
                            <p className="mt-6 max-w-lg text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">
                                We believe the everyday deserves a little more thought. That is why we bring
                                together useful, well-made things that feel good to own and are easy to love.
                            </p>
                            <a
                                href="#our-story"
                                className="mt-8 inline-flex items-center gap-3 rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-[#f5eee4]"
                            >
                                Get to know us
                                <span aria-hidden="true">↓</span>
                            </a>
                        </div>
                        <div className="relative mx-auto w-full max-w-xl">
                            <div className="absolute -right-4 -top-4 h-full w-full rounded-[2rem] border border-orange-900/20 sm:-right-5 sm:-top-5" />
                            <img
                                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85"
                                alt="Warm, thoughtfully arranged shop interior"
                                className="relative aspect-[5/4] w-full rounded-[2rem] object-cover shadow-xl"
                            />
                            <div className="absolute -bottom-5 left-4 rounded-2xl bg-white px-5 py-4 shadow-lg sm:-left-5 sm:px-6">
                                <p className="font-serif text-2xl font-semibold text-orange-700">Since 2020</p>
                                <p className="mt-1 text-xs font-medium text-stone-500">Thoughtful shopping, always</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    id="our-story"
                    className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-10"
                >
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.24em] text-orange-700">Our story</p>
                        <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                            Shopping should feel
                            <span className="font-serif italic text-orange-700"> more human.</span>
                        </h2>
                    </div>
                    <div className="space-y-5 text-base leading-7 text-stone-600">
                        <p>
                            We started with a simple question: what if finding the things you need felt
                            less overwhelming and more personal? We built a small collection around that
                            idea—useful essentials, honest quality, and design that fits real life.
                        </p>
                        <p>
                            Today, we work with makers and brands who share our belief that everyday
                            products should be thoughtfully made. We keep our collection focused, our
                            standards high, and our promise simple: help you find something you will be
                            glad to use.
                        </p>
                        <p className="font-medium text-stone-900">
                            Not more stuff. Just better things, chosen with care.
                        </p>
                    </div>
                </section>

                <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
                    <div className="mx-auto max-w-7xl">
                        <div className="max-w-2xl">
                            <p className="text-xs font-bold uppercase tracking-[0.24em] text-orange-700">
                                What matters to us
                            </p>
                            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                                The little things make the difference.
                            </h2>
                        </div>
                        <div className="mt-10 grid gap-5 md:grid-cols-3">
                            {values.map((value) => (
                                <article
                                    key={value.number}
                                    className="rounded-2xl border border-stone-200 bg-stone-50 p-6 sm:p-7"
                                >
                                    <p className="font-serif text-3xl italic text-orange-700">{value.number}</p>
                                    <h3 className="mt-5 text-lg font-semibold">{value.title}</h3>
                                    <p className="mt-3 text-sm leading-6 text-stone-600">{value.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-16 lg:px-10">
                    <div className="overflow-hidden rounded-3xl bg-stone-200">
                        <img
                            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85"
                            alt="Small team sharing ideas around a table"
                            className="aspect-[4/3] h-full w-full object-cover"
                        />
                    </div>
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.24em] text-orange-700">A thoughtful way to shop</p>
                        <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                            Curated with purpose.
                            <span className="font-serif italic text-orange-700"> Picked for real life.</span>
                        </h2>
                        <p className="mt-5 text-base leading-7 text-stone-600">
                            We look beyond what is new to find products that are useful, well-made, and
                            bring a little joy to everyday routines. Each piece is selected with care, so
                            you can spend less time searching and more time enjoying what you choose.
                        </p>
                        <div className="mt-8 grid grid-cols-2 gap-5 border-t border-stone-200 pt-6">
                            <div>
                                <p className="font-serif text-3xl font-semibold text-orange-700">2,000+</p>
                                <p className="mt-1 text-sm text-stone-600">happy customers</p>
                            </div>
                            <div>
                                <p className="font-serif text-3xl font-semibold text-orange-700">30 days</p>
                                <p className="mt-1 text-sm text-stone-600">easy returns</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10">
                    <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-3xl bg-stone-900 px-7 py-10 text-white sm:px-10 sm:py-12 lg:flex-row lg:items-center">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.24em] text-orange-300">
                                Find your everyday favorite
                            </p>
                            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                                Thoughtful picks, all in one place.
                            </h2>
                        </div>
                        <a
                            href="/products"
                            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-stone-900 transition hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-stone-900"
                        >
                            Shop the collection
                            <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </section>
            </main>
        <Footer/>
        </>
    )
}

export default About
