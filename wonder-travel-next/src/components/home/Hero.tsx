'use client';
import { useRef } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion, useScroll, useTransform } from 'framer-motion';

export function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <div ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Parallax Video Background */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 w-full h-full z-0"
            >
                <div className="absolute inset-0 bg-black/40 z-10" /> {/* Dark Overlay */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    poster="/assets/images/banner-expedition.png" // Fallback image
                >
                    <source src="/assets/video-hero.mp4" type="video/mp4" />
                </video>
            </motion.div>

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl font-serif">
                        Descubre lo <span className="italic text-orange-500">Inexplorado</span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-gray-100 mb-12 max-w-2xl font-light tracking-wide drop-shadow-lg"
                >
                    Experiencias de lujo y aventura en los rincones más mágicos de Colombia.
                </motion.p>

                {/* Glassmorphism Search Box */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="w-full max-w-3xl bg-white/10 backdrop-blur-xl p-2 rounded-full border border-white/20 flex items-center gap-2 shadow-2xl"
                >
                    <div className="flex-grow pl-4">
                        <Input
                            type="text"
                            placeholder="¿Cuál es tu próximo destino?"
                            className="bg-transparent border-none text-white placeholder:text-gray-300 focus-visible:ring-0 h-14 text-lg"
                        />
                    </div>
                    <Button size="lg" className="rounded-full bg-orange-600 hover:bg-orange-500 text-white px-8 h-14 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-orange-500/50">
                        <Search className="mr-2 h-5 w-5" />
                        Explorar
                    </Button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce text-white/70"
            >
                <ChevronDown className="w-10 h-10" />
            </motion.div>
        </div>
    );
}
