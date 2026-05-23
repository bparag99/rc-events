import { Phone, MessageCircle, Mail, User } from 'lucide-react';
import { StatusBadge, BadgeVariant } from './StatusBadge';

export interface Contact {
  id: string;
  name: string;
  role: string;
  eventPart: string;
  phone: string;
  email?: string;
  status?: BadgeVariant;
  avatar?: string;
}

interface ContactCardProps {
  contact: Contact;
}

export function ContactCard({ contact }: ContactCardProps) {
  const handleCall = () => {
    window.location.href = `tel:${contact.phone}`;
  };

  const handleWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${contact.phone.replace(/\D/g, '')}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmail = () => {
    if (contact.email) {
      window.location.href = `mailto:${contact.email}`;
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-brand-primary/10 border-2 border-brand-primary flex items-center justify-center">
            {contact.avatar ? (
              <img src={contact.avatar} alt={contact.name} className="w-full h-full rounded-full object-cover" />
            ) : (
              <User size={24} className="text-brand-primary" />
            )}
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="font-semibold text-base truncate">{contact.name}</h3>
            {contact.status && (
              <StatusBadge variant={contact.status} showIcon={false}>
                {contact.status === 'success' ? 'Confirmed' : contact.status === 'warning' ? 'Pending' : 'Active'}
              </StatusBadge>
            )}
          </div>

          <p className="text-sm font-medium text-brand-primary mb-1">{contact.role}</p>
          <p className="text-xs text-muted-foreground mb-3">{contact.eventPart}</p>

          <div className="space-y-1 mb-3">
            <div className="flex items-center gap-2 text-sm">
              <Phone size={14} className="text-muted-foreground" />
              <span className="text-muted-foreground">{contact.phone}</span>
            </div>
            {contact.email && (
              <div className="flex items-center gap-2 text-sm">
                <Mail size={14} className="text-muted-foreground" />
                <span className="text-muted-foreground truncate">{contact.email}</span>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <button
              onClick={handleCall}
              className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 bg-status-success text-white rounded-md text-sm font-medium hover:bg-status-success/90 active:scale-[0.98] transition-all"
            >
              <Phone size={16} />
              Call
            </button>
            <button
              onClick={handleWhatsApp}
              className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 bg-[#25D366] text-white rounded-md text-sm font-medium hover:bg-[#20BA5A] active:scale-[0.98] transition-all"
            >
              <MessageCircle size={16} />
              WhatsApp
            </button>
            {contact.email && (
              <button
                onClick={handleEmail}
                className="inline-flex items-center justify-center p-2 border border-border rounded-md text-sm font-medium hover:bg-accent active:scale-[0.98] transition-all"
              >
                <Mail size={16} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
