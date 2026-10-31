import Header from '../common/Header'
import Footer from '../common/Footer'
import { Link } from 'react-router-dom';
export const products = [
    {
        id: 1,
        name: 'Everyday Backpack',
        category: 'Accessories',
        price: '$64.00',
        rating: '4.8',
        reviews: '124',
        badge: 'Bestseller',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85',
        imageAlt: 'Black everyday backpack',
    },
    {
        id: 2,
        name: 'Classic Leather Watch',
        category: 'Accessories',
        price: '$129.00',
        rating: '4.9',
        reviews: '86',
        badge: 'Popular',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85',
        imageAlt: 'Minimal wristwatch with a dark face',
    },
    {
        id: 3,
        name: 'Studio Headphones',
        category: 'Electronics',
        price: '$89.00',
        rating: '4.7',
        reviews: '203',
        badge: '',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85',
        imageAlt: 'Over-ear headphones',
    },
    {
        id: 4,
        name: 'Everyday Sneakers',
        category: 'Footwear',
        price: '$78.00',
        rating: '4.8',
        reviews: '157',
        badge: 'New',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85',
        imageAlt: 'Red athletic sneaker',
    },
    {
        id: 5,    
        name: 'Ceramic Pour-Over Set',
        category: 'Home',
        price: '$42.00',
        rating: '4.9',
        reviews: '92',
        badge: '',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85',
        imageAlt: 'Freshly brewed coffee in a ceramic cup',
    },
    {
        id: 6,
        name: 'Canvas Weekend Tote',
        category: 'Accessories',
        price: '$38.00',
        rating: '4.6',
        reviews: '74',
        badge: 'Bestseller',
        image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85',
        imageAlt: 'Neutral canvas shoulder bag',
    },
    {
        id: 7,
        name: 'Wireless Speaker',
        category: 'Electronics',
        price: '$56.00',
        rating: '4.7',
        reviews: '118',
        badge: '',
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85',
        imageAlt: 'Compact wireless speaker',
    },
    {
        id: 8,
        name: 'Linen Everyday Shirt',
        category: 'Clothing',
        price: '$54.00',
        rating: '4.8',
        reviews: '63',
        badge: 'New',
        image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=900&q=85',
        imageAlt: 'Lightweight linen shirt',
    },
    {
        id: 9,
        name: 'Scented Soy Candle',
        category: 'Home',
        price: '$24.00',
        rating: '4.9',
        reviews: '145',
        badge: '',
        image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=900&q=85',
        imageAlt: 'Hand-poured candle in a glass jar',
    },
    {
        id: 10,
        name: 'Everyday Sunglasses',
        category: 'Accessories',
        price: '$46.00',
        rating: '4.6',
        reviews: '51',
        badge: 'Popular',
        image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85',
        imageAlt: 'Classic sunglasses with dark lenses',
    },
    {
        id: 11,
        name: 'Soft Knit Throw',
        category: 'Home',
        price: '$72.00',
        rating: '4.8',
        reviews: '89',
        badge: '',
        image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85',
        imageAlt: 'Soft throw blanket in a calm living room',
    },
    {
        id: 12,
        name: 'Travel Water Bottle',
        category: 'Everyday',
        price: '$32.00',
        rating: '4.7',
        reviews: '107',
        badge: 'Good pick',
        image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=85',
        imageAlt: 'Reusable water bottle for everyday use',
    },
]

function Product() {
    return (
        <>
            <Header/>
                <main className="min-h-screen bg-stone-50 px-4 py-14 text-stone-900 sm:px-6 lg:px-8">
                    <section className="mx-auto max-w-7xl">
                        <div className="mb-8 flex flex-col gap-4 border-b border-stone-200 pb-8 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
                                    Made for everyday
                                </p>
                                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                    The good things shop
                                </h1>
                                <p className="mt-2 max-w-xl text-sm leading-6 text-stone-600 sm:text-base">
                                    Thoughtful essentials, picked to make your day a little better.
                                </p>
                            </div>
                            <p className="text-sm font-medium text-stone-500">
                                Showing <span className="text-stone-900">{products.length} handpicked favorites</span>
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {products.map((product) => (
                                <article
                                    key={product.name}
                                    className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                                >
                                    <Link to={'/product-details/'+product.id}>
                                        <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                                            <img
                                                src={product.image}
                                                alt={product.imageAlt}
                                                loading="lazy"
                                                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                            />
                                            {product.badge && (
                                                <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-stone-800 shadow-sm">
                                                    {product.badge}
                                                </span>
                                            )}
                                        </div>
                                    </Link>
                                    <div className="p-4">
                                        <p className="text-xs font-medium uppercase tracking-wide text-stone-500">
                                            {product.category}
                                        </p>
                                        <div className="mt-1 flex items-start justify-between gap-3">
                                            <h2 className="font-semibold text-stone-900">{product.name}</h2>
                                            <p className="shrink-0 font-semibold text-stone-900">{product.price}</p>
                                        </div>
                                        <div className="mt-3 flex items-center gap-1.5 text-sm">
                                            <span className="text-amber-500" aria-hidden="true">★</span>
                                            <span className="font-medium text-stone-800">{product.rating}</span>
                                            <span className="text-stone-500">({product.reviews} reviews)</span>
                                        </div>
                                        <button
                                            type="button"
                                            className="mt-4 w-full rounded-lg bg-stone-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                                        >
                                            Add to cart
                                        </button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>
                </main>
            <Footer/>   
        </>
    )
}

export default Product
