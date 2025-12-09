import Link from 'next/link';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-emerald-950 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-2xl font-serif font-bold mb-6">Wonder Travel</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Turismo de aventura en Latinoamérica. Descubre destinos remotos y viaja como local.
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="col-span-1 md:col-span-1">
                        <h4 className="font-bold text-lg mb-6 text-orange-400">Contacto</h4>
                        <ul className="space-y-4 text-gray-300 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0" />
                                <span>Calle 98 # 10 - 32<br />Bogotá, Colombia</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                                <span>+57 311 515 0177</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                                <span>info@wondertravel.co</span>
                            </li>
                        </ul>
                    </div>

                    {/* Links */}
                    <div className="col-span-1 md:col-span-1">
                        <h4 className="font-bold text-lg mb-6 text-orange-400">Legal</h4>
                        <ul className="space-y-3 text-gray-300 text-sm">
                            <li><Link href="#" className="hover:text-white transition-colors">Términos y Condiciones</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Política de Datos</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Sostenibilidad</Link></li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div className="col-span-1 md:col-span-1">
                        <h4 className="font-bold text-lg mb-6 text-orange-400">Síguenos</h4>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Wonder Travel. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
