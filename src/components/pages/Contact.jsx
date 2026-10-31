import Header from '../common/Header'
import Footer from '../common/Footer'
const contactOptions = [
    {
        label: 'Email us',
        value: 'hello@goodthings.example',
        detail: 'For order questions and general help',
        href: 'mailto:hello@goodthings.example',
    },
    {
        label: 'Call us',
        value: '+1 (555) 014-2020',
        detail: 'Monday to Friday, 9am–5pm',
        href: 'tel:+15550142020',
    },
    {
        label: 'Visit us',
        value: '24 Market Street, Portland, OR',
        detail: 'Our little team is based in Portland',
        href: 'https://maps.google.com/?q=24+Market+Street+Portland+OR',
    },
]

const faqs = [
    {
        question: 'When will my order ship?',
        answer: 'Orders are usually prepared within 1–2 business days. You will receive a tracking email as soon as your package is on its way.',
    },
    {
        question: 'Can I return an item?',
        answer: 'Unused items can be returned within 30 days of delivery. Contact us with your order number and we will help with the next steps.',
    },
    {
        question: 'How can I check my order?',
        answer: 'The tracking link in your shipping confirmation has the latest delivery information. If you need a hand, send us your order number.',
    },
]

function Contact() {
    return (
        <>
            <Header/>
                <main className="bg-stone-50 text-stone-900">
                    <section className="bg-[#f5eee4] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
                        <div className="mx-auto max-w-7xl">
                            <p className="text-xs font-bold uppercase tracking-[0.24em] text-orange-700">
                                We are here to help
                            </p>
                            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                                Have a question?
                                <span className="font-serif italic text-orange-700"> Let’s talk.</span>
                            </h1>
                            <p className="mt-5 max-w-2xl text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">
                                Need help with an order, have a product question, or just want to say hello?
                                Send us a note and our friendly team will be glad to help.
                            </p>
                        </div>
                    </section>

                    <section className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-10">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.24em] text-orange-700">Get in touch</p>
                            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                                We would love to hear from you.
                            </h2>
                            <p className="mt-4 text-sm leading-6 text-stone-600">
                                Our customer care team typically replies within one business day.
                            </p>

                            <div className="mt-8 space-y-4">
                                {contactOptions.map((option) => (
                                    <a
                                        key={option.label}
                                        href={option.href}
                                        target={option.label === 'Visit us' ? '_blank' : undefined}
                                        rel={option.label === 'Visit us' ? 'noreferrer' : undefined}
                                        className="block rounded-2xl border border-stone-200 bg-white p-5 transition hover:border-orange-300 hover:shadow-sm"
                                    >
                                        <p className="text-xs font-semibold uppercase tracking-wide text-orange-700">{option.label}</p>
                                        <p className="mt-2 font-semibold text-stone-900">{option.value}</p>
                                        <p className="mt-1 text-sm text-stone-600">{option.detail}</p>
                                    </a>
                                ))}
                            </div>

                            <div className="mt-6 rounded-2xl bg-stone-900 p-5 text-white">
                                <p className="font-semibold">Customer care hours</p>
                                <div className="mt-3 flex justify-between gap-4 text-sm text-stone-300">
                                    <span>Monday – Friday</span>
                                    <span>9:00am – 5:00pm</span>
                                </div>
                                <div className="mt-2 flex justify-between gap-4 text-sm text-stone-300">
                                    <span>Saturday – Sunday</span>
                                    <span>Closed</span>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
                            <h2 className="text-2xl font-semibold tracking-tight">Send us a message</h2>
                            <p className="mt-2 text-sm leading-6 text-stone-600">
                                Fill out the details below and include your order number if your question is about a purchase.
                            </p>
                            <form className="mt-7 space-y-5">
                                <div className="grid gap-5 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-stone-800">
                                            Your name
                                        </label>
                                        <input
                                            id="contact-name"
                                            name="name"
                                            type="text"
                                            autoComplete="name"
                                            placeholder="Jane Smith"
                                            className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm outline-none transition placeholder:text-stone-400 focus:border-orange-600 focus:ring-2 focus:ring-orange-100"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-stone-800">
                                            Email address
                                        </label>
                                        <input
                                            id="contact-email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            placeholder="jane@example.com"
                                            className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm outline-none transition placeholder:text-stone-400 focus:border-orange-600 focus:ring-2 focus:ring-orange-100"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="contact-order" className="mb-2 block text-sm font-medium text-stone-800">
                                        Order number <span className="font-normal text-stone-500">(optional)</span>
                                    </label>
                                    <input
                                        id="contact-order"
                                        name="orderNumber"
                                        type="text"
                                        placeholder="e.g. GT-1024"
                                        className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm outline-none transition placeholder:text-stone-400 focus:border-orange-600 focus:ring-2 focus:ring-orange-100"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="contact-subject" className="mb-2 block text-sm font-medium text-stone-800">
                                        What can we help with?
                                    </label>
                                    <select
                                        id="contact-subject"
                                        name="subject"
                                        defaultValue=""
                                        className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm text-stone-700 outline-none transition focus:border-orange-600 focus:ring-2 focus:ring-orange-100"
                                    >
                                        <option value="" disabled>Select a topic</option>
                                        <option value="order">An existing order</option>
                                        <option value="product">A product question</option>
                                        <option value="return">Returns and exchanges</option>
                                        <option value="other">Something else</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-stone-800">
                                        Your message
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        rows="5"
                                        placeholder="Tell us a little more..."
                                        className="w-full resize-y rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm outline-none transition placeholder:text-stone-400 focus:border-orange-600 focus:ring-2 focus:ring-orange-100"
                                    />
                                </div>
                                <button
                                    type="button"
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 sm:w-auto"
                                >
                                    Send message <span aria-hidden="true">→</span>
                                </button>
                                <p className="text-xs leading-5 text-stone-500">
                                    This is a demo contact form. Connect it to your email or support service to receive messages.
                                </p>
                            </form>
                        </div>
                    </section>

                    <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
                        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.24em] text-orange-700">Quick answers</p>
                                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                                    Frequently asked questions
                                </h2>
                                <p className="mt-4 text-sm leading-6 text-stone-600">
                                    Looking for a quick answer? Start here, or get in touch and we will help you out.
                                </p>
                            </div>
                            <div className="divide-y divide-stone-200">
                                {faqs.map((faq) => (
                                    <article key={faq.question} className="py-5 first:pt-0 last:pb-0">
                                        <h3 className="font-semibold text-stone-900">{faq.question}</h3>
                                        <p className="mt-2 text-sm leading-6 text-stone-600">{faq.answer}</p>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>
                </main>
            <Footer/>
        </>
    )
}

export default Contact