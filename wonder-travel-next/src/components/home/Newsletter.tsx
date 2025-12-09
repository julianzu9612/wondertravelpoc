import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Newsletter() {
    return (
        <section className="py-24 bg-orange-600 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('/assets/brand/pattern-web-2.svg')] bg-cover bg-center" />

            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif">Únete a la Aventura</h2>
                <p className="text-orange-100 text-lg mb-10 max-w-2xl mx-auto">
                    Recibe inspiración mensual, guías de viaje exclusivas y ofertas especiales directamente en tu correo.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                    <Input
                        type="email"
                        placeholder="Tu correo electrónico"
                        className="bg-white/10 border-orange-400 text-white placeholder:text-orange-200 h-12"
                    />
                    <Button className="bg-white text-orange-600 hover:bg-orange-50 font-bold h-12 px-8">
                        Suscribirse
                    </Button>
                </div>
                <p className="text-xs text-orange-200 mt-4">
                    Respetamos tu privacidad. Cero spam.
                </p>
            </div>
        </section>
    );
}
