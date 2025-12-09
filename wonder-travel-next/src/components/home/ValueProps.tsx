import { Map, HeartHandshake, Sparkles } from 'lucide-react';

const VALUES = [
    {
        icon: Map,
        title: "Viajes a tu Medida",
        description: "Imagina tu viaje soñado y permítenos darle vida. Diseñamos itinerarios personalizados que se adaptan a tus ritmos y preferencias."
    },
    {
        icon: HeartHandshake,
        title: "Impacto Local Real",
        description: "Trabajamos directamente con familias anfitrionas. Tu viaje apoya la economía local y garantiza un intercambio cultural auténtico."
    },
    {
        icon: Sparkles,
        title: "Experiencias Únicas",
        description: "Accede a destinos remotos y actividades exclusivas que no encontrarás en las guías turísticas tradicionales."
    }
];

export function ValueProps() {
    return (
        <section className="py-24 bg-emerald-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('/assets/brand/pattern-web-2.svg')] bg-cover bg-center" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-emerald-400 font-bold tracking-widest uppercase text-sm">Nuestra Filosofía</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-3 font-serif">La Diferencia Wonder</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {VALUES.map((value, index) => (
                        <div key={index} className="text-center group">
                            <div className="w-20 h-20 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors duration-300">
                                <value.icon className="w-10 h-10 text-emerald-400 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 font-serif">{value.title}</h3>
                            <p className="text-gray-300 leading-relaxed">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
