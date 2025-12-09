import { Quote } from 'lucide-react';

const TESTIMONIALS = [
    {
        quote: "I had the best time in Colombia! I was so impressed by the attention to detail from Wonder Travel. All the staff were friendly and so helpful throughout. 11/10!",
        author: "Amanda Nwosu",
        trip: "Classic Colombia"
    },
    {
        quote: "Una experiencia transformadora. Conocer el Amazonas de la mano de comunidades locales cambió mi forma de ver el mundo.",
        author: "Carlos Méndez",
        trip: "Amazonas Mágico"
    }
];

export function Testimonials() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-5xl mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">Testimonios</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 font-serif">Voces de Viajeros</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {TESTIMONIALS.map((t, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative">
                            <Quote className="w-10 h-10 text-emerald-200 absolute top-6 left-6" />
                            <p className="text-gray-600 text-lg italic mb-6 relative z-10 pt-8">
                                "{t.quote}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xl font-bold text-gray-500">
                                    {t.author[0]}
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">{t.author}</p>
                                    <p className="text-sm text-emerald-600">{t.trip}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
