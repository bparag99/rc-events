# Contacts Page - RC Events

## Overview

The Contacts Page displays all contact persons associated with an event, organized by their roles and event parts. Each contact includes quick action buttons for calling and WhatsApp messaging.

## Features

### 1. Contact Information Display
Each contact card shows:
- **Name** - Full name of the contact person
- **Role** - Their professional role (e.g., Wedding Planner, Photographer)
- **Event Part** - Which part of the event they're responsible for (e.g., "Mehndi & Reception - Food & Beverage")
- **Phone Number** - Contact phone number
- **Email** - Email address (optional)
- **Status Badge** - Visual indicator of their confirmation status
- **Avatar** - Profile picture or initials placeholder

### 2. Quick Actions
Each contact card includes three action buttons:

#### Call Button (Green)
- **Icon**: Phone icon
- **Color**: Success green (#10B981)
- **Action**: Opens the phone dialer with the contact's number
- **URL Format**: `tel:+1234567890`

#### WhatsApp Button (Green)
- **Icon**: MessageCircle icon
- **Color**: WhatsApp green (#25D366)
- **Action**: Opens WhatsApp chat with the contact
- **URL Format**: `https://wa.me/1234567890`
- **Note**: Removes all non-digit characters from phone number

#### Email Button (Optional, Ghost)
- **Icon**: Mail icon
- **Style**: Outlined/ghost button
- **Action**: Opens default email client
- **URL Format**: `mailto:email@example.com`

### 3. Search & Filter

#### Search Bar
- Search by name, role, or event part
- Real-time filtering as you type
- Magnifying glass icon on the left

#### Event Part Filter
- Dropdown to filter contacts by event part
- Options include:
  - All Event Parts (default)
  - Overall Event Coordination
  - Mehndi
  - Sangeet
  - Wedding Ceremony
  - Reception
  - Venue Management
  - All Events

### 4. Statistics Dashboard
Three stat cards at the top:
- **Total Contacts** - Count of all contacts
- **Confirmed Vendors** - Contacts with "success" status
- **Pending Confirmations** - Contacts with "warning" status

### 5. Grouped Display
When "All Event Parts" is selected, contacts are grouped by their event part with section headers showing the count of contacts in each group.

### 6. Status Indicators
Contact cards can display status badges:
- **Success (Green)** - Confirmed vendors
- **Warning (Amber)** - Pending confirmations
- **Info (Blue)** - Active/in-progress
- **Error (Red)** - Issues or blocked

## Component Structure

```tsx
import { ContactsPage } from './components/ContactsPage';
import { ContactCard } from './components/ContactCard';

// Use the full page component
<ContactsPage />

// Or use individual contact cards
<ContactCard contact={{
  id: '1',
  name: 'Sarah Chen',
  role: 'Lead Wedding Planner',
  eventPart: 'Overall Event Coordination',
  phone: '+1 (555) 123-4567',
  email: 'sarah@example.com',
  status: 'success',
}} />
```

## Contact Data Model

```typescript
interface Contact {
  id: string;              // Unique identifier
  name: string;            // Full name
  role: string;            // Professional role/title
  eventPart: string;       // Event part they're responsible for
  phone: string;           // Phone number (any format)
  email?: string;          // Optional email
  status?: BadgeVariant;   // 'success' | 'warning' | 'error' | 'info' | 'pending'
  avatar?: string;         // Optional avatar image URL
}
```

## Usage Examples

### Adding a New Contact

```tsx
const newContact: Contact = {
  id: '11',
  name: 'John Doe',
  role: 'Sound Engineer',
  eventPart: 'Reception - Audio & Sound',
  phone: '+1 (555) 111-2222',
  email: 'john@soundpro.com',
  status: 'pending',
};
```

### Handling Contact Actions

The ContactCard component handles all actions automatically:

```tsx
// Call action
const handleCall = () => {
  window.location.href = `tel:${contact.phone}`;
};

// WhatsApp action
const handleWhatsApp = () => {
  const cleanPhone = contact.phone.replace(/\D/g, ''); // Remove non-digits
  const whatsappUrl = `https://wa.me/${cleanPhone}`;
  window.open(whatsappUrl, '_blank');
};

// Email action
const handleEmail = () => {
  if (contact.email) {
    window.location.href = `mailto:${contact.email}`;
  }
};
```

## Responsive Design

### Mobile (< 768px)
- Single column layout
- Stacked stat cards
- Full-width contact cards
- Touch-friendly button sizes (minimum 44x44px)

### Tablet (768px - 1024px)
- 2-column grid for contacts
- 3-column grid for stats

### Desktop (> 1024px)
- 3-column grid for contacts
- 3-column grid for stats
- Enhanced hover states

## Customization

### Colors
The WhatsApp button uses the official WhatsApp brand color:
```css
--whatsapp-green: #25D366;
--whatsapp-green-hover: #20BA5A;
```

### Event Parts
Update the `eventParts` array in ContactsPage.tsx to customize event categories:

```tsx
const eventParts = [
  'All',
  'Your Custom Event Part',
  'Another Event Type',
  // ... more event parts
];
```

## Integration with Backend

To connect to a real backend:

1. Replace the `sampleContacts` data with an API call:

```tsx
const [contacts, setContacts] = useState<Contact[]>([]);

useEffect(() => {
  async function fetchContacts() {
    const response = await fetch('/api/events/:eventId/contacts');
    const data = await response.json();
    setContacts(data);
  }
  fetchContacts();
}, [eventId]);
```

2. Add contact creation handler:

```tsx
const handleAddContact = async (newContact: Contact) => {
  await fetch('/api/contacts', {
    method: 'POST',
    body: JSON.stringify(newContact),
  });
  // Refresh contacts list
};
```

## Accessibility

- All buttons have proper ARIA labels
- Keyboard navigation supported
- Focus indicators visible
- Screen reader friendly
- Sufficient color contrast (WCAG AA compliant)

## Future Enhancements

Potential features to add:
- Export contacts to CSV/VCard
- Bulk actions (select multiple contacts)
- Contact notes and history
- Favorite/starred contacts
- Contact groups/teams
- Availability calendar
- Automated SMS/WhatsApp messaging
- Contact performance ratings
- Last contacted timestamp

## Best Practices

1. **Phone Number Format**: Store phone numbers with country code
2. **Status Updates**: Keep status badges current
3. **Search Performance**: Debounce search for large contact lists
4. **Error Handling**: Handle WhatsApp/phone apps not installed
5. **Privacy**: Only show contact info to authorized users

## Example Event Parts

Common event parts for wedding planning:
- Overall Event Coordination
- Venue Management
- Food & Beverage / Catering
- Decoration & Setup
- Music & Entertainment
- Photography & Videography
- Floral Arrangements
- Guest Transportation
- Bridal Makeup & Hair
- Security & Safety
- Invitations & Stationery
- Wedding Cake
- Lighting & AV
