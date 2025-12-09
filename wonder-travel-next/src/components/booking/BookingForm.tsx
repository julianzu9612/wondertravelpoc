'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Calendar } from 'lucide-react';

interface BookingFormProps {
    tripTitle: string;
    basePrice: number;
}

export function BookingForm({ tripTitle, basePrice }: BookingFormProps) {
    const [step, setStep] = useState<'details' | 'success'>('details');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // MOCK SUBMISSION - SAFETY FIRST
        console.log('[MOCK BOOKING] Submitting booking for:', tripTitle);
        console.log('[MOCK BOOKING] Payload:', {
            trip: tripTitle,
            price: basePrice,
            timestamp: new Date().toISOString()
        });

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        setLoading(false);
        setStep('success');
    };

    if (step === 'success') {
        return (
            <Card className="w-full max-w-md mx-auto bg-emerald-50 border-emerald-200">
                <CardContent className="pt-6 text-center">
                    <div className="mb-4 flex justify-center">
                        <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center">
                            <span className="text-2xl">🎉</span>
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-emerald-800 mb-2">Booking Requested!</h3>
                    <p className="text-emerald-600 mb-4">
                        This is a mock confirmation. No real booking was made.
                    </p>
                    <Button
                        onClick={() => setStep('details')}
                        variant="outline"
                        className="border-emerald-600 text-emerald-600 hover:bg-emerald-100"
                    >
                        Book Another
                    </Button>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle>Book your Trip</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="date">Select Date</Label>
                        <div className="relative">
                            <Input type="date" id="date" required className="pl-10" />
                            <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="travelers">Travelers</Label>
                        <Input type="number" id="travelers" min="1" defaultValue="1" required />
                    </div>

                    <div className="pt-4 border-t">
                        <div className="flex justify-between mb-4 font-semibold">
                            <span>Total Estimate</span>
                            <span>${basePrice} USD</span>
                        </div>

                        <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700" disabled={loading}>
                            {loading ? 'Processing...' : 'Request Booking'}
                        </Button>
                        <p className="text-xs text-gray-400 text-center mt-2">
                            * This is a demo. No payment will be processed.
                        </p>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}
