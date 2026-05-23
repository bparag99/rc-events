# RC Events - AI-Powered Event Operations Platform

## Overview

RC Events is a comprehensive design system and component library for building an operational command center for professional wedding planners and event management companies.

## What's Included

### 1. Complete Design System
- **Brand Colors** - Indigo primary, purple secondary, cyan accent
- **Operational Status Colors** - Success (green), Warning (amber), Error (red), Info (blue), Pending (gray)
- **Typography Scale** - Professional sans-serif with clear hierarchy
- **Spacing System** - Consistent spacing tokens
- **Dark Mode** - Full dark mode support optimized for dashboard monitoring

### 2. Core Components

#### Layout & Structure
- **DashboardCard** - Container for metrics, charts, and content sections
- **StatusBadge** - Visual status indicators with icons
- **ProgressBar** - Auto-colored progress tracking based on percentage
- **Timeline** - Event timeline with status nodes

#### User Actions
- **ActionButton** - Primary, secondary, destructive, and ghost variants
- **QuickActionChip** - Inline action buttons with icons

#### Communication
- **ChatMessage** - AI assistant and user message components
- **AI Integration** - Purple-themed AI assistant with sparkle icon

#### Contact Management
- **ContactCard** - Full contact card with call/WhatsApp/email actions
- **ContactsPage** - Complete contact management page with search and filtering
- **QuickContactWidget** - Dashboard widget for key contacts
- **ContactListItem** - Compact and full list item variants

### 3. Contact Management Features

The contacts page includes:
- ✅ **Search** - Real-time search by name, role, or event part
- ✅ **Filter** - Dropdown to filter by event category
- ✅ **Call Action** - One-tap calling via phone dialer
- ✅ **WhatsApp Action** - Direct WhatsApp chat integration
- ✅ **Email Action** - Email client integration
- ✅ **Status Indicators** - Visual confirmation status
- ✅ **Statistics** - Total contacts, confirmed vendors, pending confirmations
- ✅ **Grouped Display** - Contacts organized by event part
- ✅ **Responsive Design** - Mobile-first, scales to desktop

### 4. Documentation

- **`/guidelines/Guidelines.md`** - Complete design system guidelines (color, typography, components, patterns)
- **`DESIGN_SYSTEM.md`** - Quick reference for developers
- **`CONTACTS_PAGE.md`** - Detailed contact management documentation

## Getting Started

The application has two main views accessible via the header toggle:

1. **Contacts Page** (default) - Full contact management interface
2. **Design System** - Showcase of all components and patterns

### Toggle Dark Mode
Click the sun/moon button in the header to toggle between light and dark modes.

## Component Usage

### Basic Contact Card
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

### Dashboard with Contacts Widget
```tsx
import { QuickContactWidget } from './components/QuickContactWidget';

<QuickContactWidget
  contacts={keyContacts}
  title="Key Contacts"
  maxContacts={5}
  onViewAll={() => navigateToContacts()}
/>
```

### Status Badge
```tsx
import { StatusBadge } from './components/StatusBadge';

<StatusBadge variant="success">Completed</StatusBadge>
<StatusBadge variant="warning">Pending</StatusBadge>
<StatusBadge variant="error">Blocked</StatusBadge>
```

### Progress Bar
```tsx
import { ProgressBar } from './components/ProgressBar';

<ProgressBar label="Event Readiness" percentage={78} />
```

## File Structure

```
src/
├── app/
│   ├── components/
│   │   ├── ActionButton.tsx         # Button component with variants
│   │   ├── ChatMessage.tsx          # AI and user chat messages
│   │   ├── ContactCard.tsx          # Full contact card
│   │   ├── ContactListItem.tsx      # Compact contact list item
│   │   ├── ContactsPage.tsx         # Complete contacts page
│   │   ├── DashboardCard.tsx        # Card container component
│   │   ├── ProgressBar.tsx          # Progress indicator
│   │   ├── QuickActionChip.tsx      # Inline action chips
│   │   ├── QuickContactWidget.tsx   # Dashboard contact widget
│   │   ├── StatusBadge.tsx          # Status indicator badges
│   │   └── Timeline.tsx             # Event timeline
│   └── App.tsx                      # Main application
└── styles/
    ├── theme.css                    # Design tokens & CSS variables
    ├── fonts.css                    # Font imports (Inter)
    └── globals.css                  # Global styles
```

## Technology Stack

- **React 18.3.1** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS 4.1** - Styling
- **Lucide React** - Icon library
- **Radix UI** - Accessible component primitives
- **Vite** - Build tool

## Design Principles

### 1. Operational First
The design prioritizes operational visibility and workflow efficiency over decorative elements.

### 2. Professional Aesthetic
Premium B2B SaaS look - not a consumer wedding app.

### 3. AI-Native
Purple-themed AI assistant integrated throughout the platform.

### 4. Mobile-Responsive
Touch-friendly design that scales from mobile to desktop.

### 5. Accessibility
WCAG AA compliant with proper contrast, focus states, and semantic HTML.

## Key Features Demonstrated

### Contact Management
- Search and filter contacts
- One-tap call and WhatsApp actions
- Email integration
- Status tracking
- Event part categorization
- Statistics dashboard

### Operational Dashboard
- Event readiness tracking
- Budget overview
- Vendor status
- Approval management
- Timeline visualization

### AI Chat Interface
- Conversational UI
- Quick action chips
- User and AI message differentiation
- Input with suggestions

## Color Palette

### Brand Colors
- **Primary (Indigo)**: `#4F46E5` - Main actions, branding
- **Secondary (Purple)**: `#7C3AED` - Secondary emphasis, AI features
- **Accent (Cyan)**: `#06B6D4` - Highlights, links

### Status Colors
- **Success (Green)**: `#10B981` - Completed, approved, confirmed
- **Warning (Amber)**: `#F59E0B` - Pending, attention needed
- **Error (Red)**: `#EF4444` - Blocked, overdue, critical
- **Info (Blue)**: `#3B82F6` - In progress, informational
- **Pending (Gray)**: `#6B7280` - Not started, draft

### Special Colors
- **AI Purple**: `#8B5CF6` - AI assistant features
- **WhatsApp Green**: `#25D366` - WhatsApp integration

## Next Steps

To integrate with a real backend:

1. **Replace sample data** with API calls
2. **Add authentication** for user management
3. **Implement real-time updates** via WebSocket/SSE
4. **Connect to WhatsApp Business API** for automated messaging
5. **Add analytics** for operational insights

## Sample Data

The application includes realistic sample data:
- 10 sample contacts across different event roles
- Multiple event parts (Mehndi, Sangeet, Wedding, Reception)
- Various vendor types (Planner, Catering, DJ, Photography, etc.)
- Different confirmation statuses

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This design system is part of the RC Events platform.

---

**Built with** ❤️ **using the RC Events Design System**
