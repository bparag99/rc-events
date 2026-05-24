import { useState } from 'react';
import { Search, Filter, UserPlus, Calendar, Users as UsersIcon } from 'lucide-react';
import { ContactCard, Contact } from './ContactCard';
import { ActionButton } from './ActionButton';
import { StatusBadge } from './StatusBadge';

// Sample data - this would come from your backend
const sampleContacts: Contact[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Lead Wedding Planner',
    eventPart: 'Overall Event Coordination',
    phone: '+1 (555) 123-4567',
    email: 'sarah.chen@rcevents.com',
    status: 'success',
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    role: 'Catering Manager',
    eventPart: 'Mehndi & Reception - Food & Beverage',
    phone: '+1 (555) 234-5678',
    email: 'michael.r@deluxecatering.com',
    status: 'success',
  },
  {
    id: '3',
    name: 'Priya Sharma',
    role: 'Decor Designer',
    eventPart: 'Sangeet & Wedding - Decoration & Setup',
    phone: '+1 (555) 345-6789',
    email: 'priya@elegantdecor.com',
    status: 'success',
  },
  {
    id: '4',
    name: 'James Wilson',
    role: 'DJ & Entertainment',
    eventPart: 'Sangeet & Reception - Music & Entertainment',
    phone: '+1 (555) 456-7890',
    email: 'james@soundwavesentertainment.com',
    status: 'warning',
  },
  {
    id: '5',
    name: 'Aisha Patel',
    role: 'Photographer',
    eventPart: 'All Events - Photography & Videography',
    phone: '+1 (555) 567-8901',
    email: 'aisha@memorylensphoto.com',
    status: 'success',
  },
  {
    id: '6',
    name: 'David Kim',
    role: 'Venue Coordinator',
    eventPart: 'Grand Palace Hotel - Venue Management',
    phone: '+1 (555) 678-9012',
    email: 'david.kim@grandpalace.com',
    status: 'success',
  },
  {
    id: '7',
    name: 'Lisa Thompson',
    role: 'Florist',
    eventPart: 'Wedding Ceremony - Floral Arrangements',
    phone: '+1 (555) 789-0123',
    email: 'lisa@petalsperfection.com',
    status: 'success',
  },
  {
    id: '8',
    name: 'Raj Malhotra',
    role: 'Transportation Coordinator',
    eventPart: 'All Events - Guest Transportation',
    phone: '+1 (555) 890-1234',
    email: 'raj@luxuryrides.com',
    status: 'info',
  },
  {
    id: '9',
    name: 'Emily Martinez',
    role: 'Makeup Artist',
    eventPart: 'Mehndi, Sangeet & Wedding - Bridal Makeup',
    phone: '+1 (555) 901-2345',
    email: 'emily@glamstudio.com',
    status: 'success',
  },
  {
    id: '10',
    name: 'Kevin O\'Brien',
    role: 'Event Security',
    eventPart: 'All Events - Security & Safety',
    phone: '+1 (555) 012-3456',
    email: 'kevin@secureevent.com',
    status: 'success',
  },
];

const eventParts = [
  'All',
  'Overall Event Coordination',
  'Mehndi',
  'Sangeet',
  'Wedding Ceremony',
  'Reception',
  'Venue Management',
  'All Events',
];

export function ContactsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEventPart, setSelectedEventPart] = useState('All');
  const [contacts] = useState<Contact[]>(sampleContacts);

  // Filter contacts based on search and event part
  const filteredContacts = contacts.filter((contact) => {
    const matchesSearch =
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.eventPart.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesEventPart =
      selectedEventPart === 'All' ||
      contact.eventPart.toLowerCase().includes(selectedEventPart.toLowerCase());

    return matchesSearch && matchesEventPart;
  });

  // Group contacts by event part
  const groupedContacts = filteredContacts.reduce((acc, contact) => {
    const parts = contact.eventPart.split(' - ');
    const mainPart = parts[0];
    if (!acc[mainPart]) {
      acc[mainPart] = [];
    }
    acc[mainPart].push(contact);
    return acc;
  }, {} as Record<string, Contact[]>);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border sticky top-0 z-10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-semibold flex items-center gap-2">
                <UsersIcon size={28} className="text-brand-primary" />
                Event Contacts
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                {filteredContacts.length} contact{filteredContacts.length !== 1 ? 's' : ''} for this event
              </p>
            </div>
            <ActionButton variant="primary" icon={<UserPlus size={16} />}>
              Add Contact
            </ActionButton>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-3">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by name, role, or event part..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            {/* Event Part Filter */}
            <div className="flex items-center gap-2">
              <Filter size={18} className="text-muted-foreground" />
              <select
                value={selectedEventPart}
                onChange={(e) => setSelectedEventPart(e.target.value)}
                className="px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring min-w-[200px]"
              >
                {eventParts.map((part) => (
                  <option key={part} value={part}>
                    {part === 'All' ? 'All Event Parts' : part}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-card border border-border rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Contacts</p>
                <p className="text-2xl font-semibold">{contacts.length}</p>
              </div>
              <UsersIcon size={32} className="text-brand-primary" />
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Confirmed Vendors</p>
                <p className="text-2xl font-semibold">
                  {contacts.filter((c) => c.status === 'success').length}
                </p>
              </div>
              <Calendar size={32} className="text-status-success" />
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pending Confirmations</p>
                <p className="text-2xl font-semibold">
                  {contacts.filter((c) => c.status === 'warning').length}
                </p>
              </div>
              <Calendar size={32} className="text-status-warning" />
            </div>
          </div>
        </div>

        {/* Contacts List */}
        {selectedEventPart === 'All' ? (
          // Grouped by event part
          <div className="space-y-8">
            {Object.entries(groupedContacts).map(([eventPart, partContacts]) => (
              <div key={eventPart}>
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-lg font-semibold">{eventPart}</h2>
                  <StatusBadge variant="info" showIcon={false}>
                    {partContacts.length} {partContacts.length === 1 ? 'Contact' : 'Contacts'}
                  </StatusBadge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {partContacts.map((contact) => (
                    <ContactCard key={contact.id} contact={contact} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Filtered list
          <div>
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-lg font-semibold">
                {selectedEventPart === 'All' ? 'All Contacts' : selectedEventPart}
              </h2>
              <StatusBadge variant="info" showIcon={false}>
                {filteredContacts.length} {filteredContacts.length === 1 ? 'Contact' : 'Contacts'}
              </StatusBadge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredContacts.map((contact) => (
                <ContactCard key={contact.id} contact={contact} />
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredContacts.length === 0 && (
          <div className="text-center py-12">
            <UsersIcon size={48} className="mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-2">No contacts found</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Try adjusting your search or filters
            </p>
            <ActionButton variant="secondary" onClick={() => { setSearchQuery(''); setSelectedEventPart('All'); }}>
              Clear Filters
            </ActionButton>
          </div>
        )}
      </div>
    </div>
  );
}
