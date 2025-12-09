import { Search, PenTool, Plane } from 'lucide-react';

const STEPS = [
    {
        icon: Search,
        title: "Explora",
        description: "Navega por nuestra colección curada de destinos únicos en Colombia."
    },
    {
        icon: PenTool,
        title: "Personaliza",
        description: "Ajustamos el itinerario a tu ritmo, preferencias y presupuesto."
    },
    {
        icon: Plane,
        title: "Viaja",
        description: "Vive la experiencia con el respaldo y seguridad de Wonder Travel."
    }
];

export function HowItWorks() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-orange-600 font-bold tracking-widest uppercase text-sm">El Proceso</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 font-serif">Tu Viaje en 3 Pasos</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (Desktop only) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-orange-100 -z-10" />

                    {STEPS.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center bg-white p-4">
                            <div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-sm">
                                <step.icon className="w-10 h-10 text-orange-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 font-serif">{step.title}</h3>
                            <p className="text-gray-500 max-w-xs mx-auto">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
