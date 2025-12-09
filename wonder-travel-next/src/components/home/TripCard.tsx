'use client';

import Link from 'next/link';
import { Trip } from '@/types/trip';
import { Clock, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

interface TripCardProps {
    trip: Trip;
}

export function TripCard({ trip }: TripCardProps) {
    return (
        <Link href={`/trips/${trip.slug}`}>
            <motion.div
                whileHover={{ y: -10 }}
                className="group relative h-[500px] w-full overflow-hidden rounded-3xl cursor-pointer"
            >
                {/* Background Image */}
                <div className="absolute inset-0">
                    {trip.images[0] ? (
                        <img
                            src={trip.images[0]}
                            alt={trip.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    ) : (
                        <div className="w-full h-full bg-gray-200" />
                    )}
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                    {/* Top Badge */}
                    <div className="absolute top-6 right-6">
                        <Badge className="bg-white/20 backdrop-blur-md text-white border-none hover:bg-white/30 px-4 py-2 text-sm uppercase tracking-wider">
                            {trip.difficulty}
                        </Badge>
                    </div>

                    <motion.div
                        initial={{ y: 20, opacity: 0.9 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex items-center gap-2 text-orange-400 mb-2 font-medium tracking-wide text-sm">
                            <Clock className="w-4 h-4" />
                            <span>{trip.duration}</span>
                        </div>

                        <h3 className="text-3xl font-bold mb-3 font-serif leading-tight">
                            {trip.title}
                        </h3>

                        <p className="text-gray-300 line-clamp-2 mb-6 font-light text-lg">
                            {trip.shortDescription}
                        </p>

                        <div className="flex items-center justify-between border-t border-white/20 pt-6">
                            <div>
                                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Desde</p>
                                <p className="text-2xl font-bold text-orange-400">
                                    ${trip.price.toLocaleString('es-CO')}
                                </p>
                            </div>

                            <div className="bg-white/10 p-3 rounded-full group-hover:bg-orange-500 group-hover:text-white transition-colors">
                                <ArrowUpRight className="w-6 h-6" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </Link>
    );
}
