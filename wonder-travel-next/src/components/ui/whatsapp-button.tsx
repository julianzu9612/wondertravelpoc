import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
    tripTitle: string;
    className?: string;
}

export function WhatsAppButton({ tripTitle, className }: WhatsAppButtonProps) {
    const phoneNumber = '573124501242'; // Replace with real number
    const message = encodeURIComponent(`Hola, me interesa el viaje *${tripTitle}*. ¿Me podrían dar más información?`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={className}>
            <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-6 text-lg shadow-lg hover:shadow-xl transition-all">
                <MessageCircle className="mr-2 h-6 w-6" />
                Consultar en WhatsApp
            </Button>
        </a>
    );
}
