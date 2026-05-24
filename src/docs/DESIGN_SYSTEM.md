# RC Events Design System

## Overview

This design system provides a comprehensive set of components, patterns, and guidelines for building the RC Events platform - an AI-powered Event Operations Platform for professional wedding planners and event management companies.

## Quick Start

### Color Usage

```tsx
// Brand colors
className="bg-brand-primary text-white"
className="bg-brand-secondary"
className="bg-brand-accent"

// Status colors
className="bg-status-success"    // Green - completed, approved
className="bg-status-warning"    // Amber - pending, attention needed
className="bg-status-error"      // Red - blocked, overdue, critical
className="bg-status-info"       // Blue - in-progress
className="bg-status-pending"    // Gray - not started
```

### Component Library

All components are located in `src/app/components/`:

#### StatusBadge
```tsx
import { StatusBadge } from './components/StatusBadge';

<StatusBadge variant="success">Completed</StatusBadge>
<StatusBadge variant="warning">Pending</StatusBadge>
<StatusBadge variant="error">Blocked</StatusBadge>
<StatusBadge variant="info">In Progress</StatusBadge>
<StatusBadge variant="pending">Not Started</StatusBadge>
```

#### ProgressBar
```tsx
import { ProgressBar } from './components/ProgressBar';

<ProgressBar label="Event Readiness" percentage={78} />
<ProgressBar percentage={45} showLabel={false} size="prominent" />
```

The progress bar automatically colors based on percentage:
- 0-30%: Red (error)
- 31-60%: Amber (warning)
- 61-85%: Blue (info)
- 86-100%: Green (success)

#### DashboardCard
```tsx
import { DashboardCard } from './components/DashboardCard';

<DashboardCard
  title="Event Readiness"
  badge={<StatusBadge variant="info">In Progress</StatusBadge>}
  action={<ActionButton>View Details</ActionButton>}
>
  {/* Card content */}
</DashboardCard>
```

#### ChatMessage
```tsx
import { ChatMessage } from './components/ChatMessage';

<ChatMessage isAI={false} content="User message" />
<ChatMessage isAI={true} content="AI assistant response" />
```

#### ActionButton
```tsx
import { ActionButton } from './components/ActionButton';

<ActionButton variant="primary">Create Event</ActionButton>
<ActionButton variant="secondary">Cancel</ActionButton>
<ActionButton variant="destructive">Delete</ActionButton>
<ActionButton variant="ghost">View</ActionButton>
```

#### QuickActionChip
```tsx
import { QuickActionChip } from './components/QuickActionChip';

<QuickActionChip icon={<Plus size={14} />}>
  Create Task
</QuickActionChip>
```

#### Timeline
```tsx
import { Timeline } from './components/Timeline';

<Timeline
  items={[
    {
      id: '1',
      title: 'Task Title',
      description: 'Task description',
      status: 'completed', // 'completed' | 'in-progress' | 'pending' | 'blocked'
      date: 'May 23, 2026',
      content: <div>Additional content</div>,
    },
  ]}
/>
```

#### ContactCard
```tsx
import { ContactCard } from './components/ContactCard';

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

#### QuickContactWidget
```tsx
import { QuickContactWidget } from './components/QuickContactWidget';

<QuickContactWidget
  contacts={contactsArray}
  title="Key Contacts"
  maxContacts={5}
  onViewAll={() => navigateToContactsPage()}
/>
```

#### ContactListItem
```tsx
import { ContactListItem } from './components/ContactListItem';

// Compact version
<ContactListItem contact={contact} compact={true} />

// Full version
<ContactListItem contact={contact} compact={false} />
```

#### ContactsPage
```tsx
import { ContactsPage } from './components/ContactsPage';

// Full page component with search, filter, and grouping
<ContactsPage />
```

## Icons

Use Lucide React for all icons:

```tsx
import { Calendar, Users, DollarSign, CheckCircle, AlertTriangle } from 'lucide-react';

<CheckCircle size={16} className="text-status-success" />
<AlertTriangle size={20} className="text-status-error" />
```

Common icon sizes:
- `14px` - Inline with text, chips
- `16px` - Buttons, badges
- `20px` - Default UI
- `24px` - Headers, prominent actions
- `32px` - Hero icons, empty states

## Spacing

```tsx
className="gap-1"    // 4px
className="gap-2"    // 8px
className="gap-4"    // 16px
className="gap-6"    // 24px
className="gap-8"    // 32px
```

## Typography

```tsx
// Headings
<h1>Dashboard Title</h1>           // text-2xl, font-medium
<h2>Section Header</h2>             // text-xl, font-medium
<h3>Card Title</h3>                 // text-lg, font-medium

// Body text
className="text-base"               // 16px - default
className="text-sm"                 // 14px - metadata
className="text-xs"                 // 12px - labels

// Font weights
className="font-normal"             // 400
className="font-medium"             // 500 - default for UI
className="font-semibold"           // 600 - headers
className="font-bold"               // 700 - critical status
```

## Dark Mode

Toggle dark mode by adding the `dark` class to a parent element:

```tsx
<div className={darkMode ? 'dark' : ''}>
  <div className="bg-background text-foreground">
    {/* Content automatically adapts to dark mode */}
  </div>
</div>
```

All design tokens are automatically theme-aware.

## Layout Patterns

### Dashboard Grid

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <DashboardCard>...</DashboardCard>
  <DashboardCard>...</DashboardCard>
  <DashboardCard>...</DashboardCard>
</div>
```

### Chat Interface

```tsx
<div className="space-y-4">
  <ChatMessage isAI={false} content="..." />
  <ChatMessage isAI={true} content="..." />

  {/* Quick Actions */}
  <div className="flex gap-2 overflow-x-auto">
    <QuickActionChip>Action 1</QuickActionChip>
    <QuickActionChip>Action 2</QuickActionChip>
  </div>

  {/* Input */}
  <div className="flex gap-2">
    <input
      type="text"
      className="flex-1 px-4 py-2 bg-input-background border border-border rounded-lg"
    />
    <ActionButton variant="primary">Send</ActionButton>
  </div>
</div>
```

## Data Visualization

Use Recharts for all charts. Apply consistent styling:

```tsx
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

<BarChart data={data}>
  <XAxis stroke="var(--color-muted-foreground)" />
  <YAxis stroke="var(--color-muted-foreground)" />
  <Tooltip />
  <Bar dataKey="value" fill="var(--color-brand-primary)" />
</BarChart>
```

## Best Practices

### 1. Use Semantic Colors
```tsx
// ✅ Good
<div className="bg-status-success">Approved</div>

// ❌ Avoid
<div className="bg-green-500">Approved</div>
```

### 2. Consistent Status Representation
Always use StatusBadge for status indicators:
```tsx
// ✅ Good
<StatusBadge variant="success">Completed</StatusBadge>

// ❌ Avoid
<span className="text-green-500">Completed</span>
```

### 3. Progressive Disclosure
Use cards and sections to organize information:
```tsx
// ✅ Good
<DashboardCard title="Details">
  <div>Summary info</div>
  <ActionButton>View Full Details</ActionButton>
</DashboardCard>
```

### 4. Mobile-First
Design for mobile, enhance for desktop:
```tsx
// ✅ Good
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
```

### 5. Accessibility
- Always provide meaningful alt text
- Use semantic HTML
- Ensure sufficient color contrast
- Never remove focus indicators

## File Structure

```
src/
├── app/
│   ├── components/
│   │   ├── StatusBadge.tsx
│   │   ├── ProgressBar.tsx
│   │   ├── DashboardCard.tsx
│   │   ├── ChatMessage.tsx
│   │   ├── ActionButton.tsx
│   │   ├── QuickActionChip.tsx
│   │   └── Timeline.tsx
│   └── App.tsx
└── styles/
    ├── theme.css       # Design tokens
    ├── fonts.css       # Font imports
    └── globals.css     # Global styles
```

## Contact Management Components

The RC Events platform includes specialized components for contact and vendor management:

### ContactCard
Full-featured contact card with:
- Avatar display
- Name, role, and event part
- Phone and email display
- Call, WhatsApp, and email action buttons
- Status badge indicator

```tsx
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

### QuickContactWidget
Dashboard widget for displaying key contacts:
- Shows top N contacts
- Compact inline call/WhatsApp buttons
- "View All" action to navigate to full contacts page
- Status indicators for pending confirmations

```tsx
<QuickContactWidget
  contacts={keyContactsArray}
  title="Key Contacts"
  maxContacts={5}
  onViewAll={() => navigateToContactsPage()}
/>
```

### ContactsPage
Full-page contact management interface:
- **Search** - Real-time search by name, role, or event part
- **Filter** - Dropdown filter by event part/category
- **Statistics** - Total contacts, confirmed vendors, pending confirmations
- **Grouped Display** - Contacts organized by event part
- **Quick Actions** - Call, WhatsApp, email buttons on each card

### Contact Actions

All contact components support three primary actions:

**Call Action**
```tsx
const handleCall = (phone: string) => {
  window.location.href = `tel:${phone}`;
};
```

**WhatsApp Action**
```tsx
const handleWhatsApp = (phone: string) => {
  const cleanPhone = phone.replace(/\D/g, ''); // Remove formatting
  window.open(`https://wa.me/${cleanPhone}`, '_blank');
};
```

**Email Action**
```tsx
const handleEmail = (email: string) => {
  window.location.href = `mailto:${email}`;
};
```

### Contact Data Model

```typescript
interface Contact {
  id: string;
  name: string;
  role: string;
  eventPart: string;
  phone: string;
  email?: string;
  status?: 'success' | 'warning' | 'error' | 'info' | 'pending';
  avatar?: string;
}
```

See `CONTACTS_PAGE.md` for detailed documentation on contact management features.

## Additional Resources

- **Full Guidelines**: See `/guidelines/Guidelines.md` for comprehensive design system documentation
- **Theme Tokens**: See `/src/styles/theme.css` for all available CSS custom properties
- **Contact Features**: See `/CONTACTS_PAGE.md` for detailed contact management documentation
- **PRD**: See the Product Requirements Document for platform context

## Support

For questions or suggestions about the design system, please refer to the Guidelines.md file or consult with the design team.
