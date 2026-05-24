# RC Events Design System

## Brand Identity

RC Events is an **AI-powered Event Operations Platform** for professional wedding planners and event management companies. The design system embodies:

- **Operational Command Center** — Dashboard-first, data-driven interface
- **Premium Enterprise SaaS** — Professional, sophisticated aesthetics
- **AI-Native Platform** — Conversational interactions, intelligent insights
- **Minimal & Focused** — Clean, uncluttered, purpose-driven design

### NOT a decorative wedding app
This is a B2B operational tool, not a consumer social platform. Avoid:
- Decorative flourishes or wedding-themed illustrations
- Pastel palettes or overly soft aesthetics
- Social media-style interactions
- Unnecessary animations or distractions

---

## Design Philosophy

### Kinetic Enterprise
Combines **editorial clarity** with **kinetic responsiveness**:
- Real-time data visualization
- Responsive status updates
- Motion that communicates state changes
- Clean, high-contrast typography for operational readability

### Dark Mode First
The platform supports both light and dark modes, but **dark mode is optimized for extended dashboard monitoring** during event operations.

---

## Color System

### Brand Colors

```css
--brand-primary: #4F46E5      /* Indigo - primary actions, AI features */
--brand-secondary: #7C3AED    /* Purple - secondary emphasis */
--brand-accent: #06B6D4       /* Cyan - highlights, links */
```

### Operational Status Colors

```css
/* Success States */
--status-success: #10B981     /* Green - completed, approved, on-track */
--status-success-light: #D1FAE5
--status-success-dark: #065F46

/* Warning States */
--status-warning: #F59E0B     /* Amber - pending, attention needed */
--status-warning-light: #FEF3C7
--status-warning-dark: #92400E

/* Error/Critical States */
--status-error: #EF4444       /* Red - blocked, overdue, critical */
--status-error-light: #FEE2E2
--status-error-dark: #991B1B

/* Info/Neutral States */
--status-info: #3B82F6        /* Blue - informational, in-progress */
--status-info-light: #DBEAFE
--status-info-dark: #1E3A8A

/* Pending/Draft States */
--status-pending: #6B7280     /* Gray - not started, draft */
--status-pending-light: #F3F4F6
--status-pending-dark: #374151
```

### Readiness Levels

Use gradient representations for operational readiness:

- **0-30%** — Error red (`--status-error`)
- **31-60%** — Warning amber (`--status-warning`)
- **61-85%** — Info blue (`--status-info`)
- **86-100%** — Success green (`--status-success`)

### Semantic Colors

```css
/* AI Assistant */
--ai-primary: #8B5CF6        /* Purple - AI responses */
--ai-background: #F5F3FF     /* Light purple tint */
--ai-border: #DDD6FE

/* Approval System */
--approval-pending: #F59E0B
--approval-approved: #10B981
--approval-rejected: #EF4444

/* Budget & Finance */
--budget-allocated: #3B82F6
--budget-paid: #10B981
--budget-overdue: #EF4444
```

---

## Typography

### Font Stack

```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 
             'Inter', 'Roboto', 'Helvetica Neue', sans-serif;
```

**Principle**: Clean, highly legible sans-serif optimized for dashboards and data-dense interfaces.

### Type Scale

```css
--text-xs: 0.75rem     /* 12px - labels, metadata */
--text-sm: 0.875rem    /* 14px - body text, table data */
--text-base: 1rem      /* 16px - default body */
--text-lg: 1.125rem    /* 18px - section headers */
--text-xl: 1.25rem     /* 20px - card titles */
--text-2xl: 1.5rem     /* 24px - page headers */
--text-3xl: 1.875rem   /* 30px - dashboard titles */
--text-4xl: 2.25rem    /* 36px - hero headings */
```

### Font Weights

```css
--font-regular: 400
--font-medium: 500      /* Default for UI elements */
--font-semibold: 600    /* Headers, emphasis */
--font-bold: 700        /* Critical status, CTAs */
```

### Usage Guidelines

- **Dashboard Headers**: `text-2xl`, `font-semibold`
- **Card Titles**: `text-xl`, `font-medium`
- **Body Text**: `text-base`, `font-regular`
- **Metadata/Labels**: `text-sm`, `font-medium`, `text-muted-foreground`
- **Status Badges**: `text-xs`, `font-semibold`, uppercase
- **AI Responses**: `text-base`, `font-regular`, natural casing

---

## Spacing System

```css
--spacing-xs: 0.25rem   /* 4px */
--spacing-sm: 0.5rem    /* 8px */
--spacing-md: 1rem      /* 16px */
--spacing-lg: 1.5rem    /* 24px */
--spacing-xl: 2rem      /* 32px */
--spacing-2xl: 3rem     /* 48px */
--spacing-3xl: 4rem     /* 64px */
```

### Layout Spacing

- **Component padding**: `spacing-md` to `spacing-lg`
- **Card gaps**: `spacing-lg`
- **Section spacing**: `spacing-2xl`
- **Page margins**: `spacing-xl`

---

## Components

### Status Badge

**Purpose**: Display operational status at a glance

**Variants**:
- `success` — Green, completed/approved
- `warning` — Amber, pending/attention
- `error` — Red, blocked/overdue
- `info` — Blue, in-progress
- `pending` — Gray, not started

**Visual Style**:
```tsx
// Small pill shape, uppercase text, icon optional
<Badge variant="success">
  <CheckCircle size={12} />
  COMPLETED
</Badge>
```

**Properties**:
- Font: `text-xs`, `font-semibold`, uppercase
- Padding: `px-2 py-1`
- Border radius: `rounded-full`
- Icon size: `12px` or `14px`

---

### Progress Bar

**Purpose**: Show completion percentage for events, tasks, or budgets

**Visual Style**:
- Height: `h-2` (8px) for compact, `h-3` (12px) for prominent
- Background: `bg-muted`
- Fill: Dynamic color based on percentage (see Readiness Levels)
- Border radius: `rounded-full`

**With Label**:
```tsx
<div>
  <div className="flex justify-between mb-2">
    <span className="text-sm font-medium">Event Readiness</span>
    <span className="text-sm font-semibold text-status-success">78%</span>
  </div>
  <div className="h-2 bg-muted rounded-full overflow-hidden">
    <div className="h-full bg-status-info" style={{ width: '78%' }} />
  </div>
</div>
```

---

### Dashboard Card

**Purpose**: Container for operational metrics, charts, or content sections

**Visual Style**:
- Background: `bg-card`
- Border: `border border-border`
- Padding: `p-6`
- Border radius: `rounded-lg`
- Shadow: Subtle elevation `shadow-sm`

**Header Pattern**:
```tsx
<div className="bg-card border border-border rounded-lg p-6">
  <div className="flex items-center justify-between mb-4">
    <h3 className="text-xl font-medium">Event Readiness</h3>
    <Badge variant="info">IN PROGRESS</Badge>
  </div>
  {/* Card content */}
</div>
```

---

### AI Chat Message

**Purpose**: Display AI assistant responses with clear differentiation from user messages

**Visual Style**:

**User Message**:
- Align: Right
- Background: `bg-brand-primary`
- Text: `text-white`
- Border radius: `rounded-2xl rounded-br-sm`
- Padding: `px-4 py-3`
- Max width: `max-w-[80%]`

**AI Message**:
- Align: Left
- Background: `bg-ai-background` (light purple tint)
- Border: `border border-ai-border`
- Text: `text-foreground`
- Border radius: `rounded-2xl rounded-bl-sm`
- Padding: `px-4 py-3`
- Max width: `max-w-[80%]`
- Icon: Purple sparkle/star icon for AI indicator

---

### Action Button

**Purpose**: Primary user interactions

**Variants**:

**Primary** (main actions):
- Background: `bg-brand-primary`
- Text: `text-white`
- Hover: Slight darken, scale 1.02
- Padding: `px-4 py-2`
- Border radius: `rounded-md`

**Secondary** (supporting actions):
- Background: `transparent`
- Border: `border-2 border-brand-primary`
- Text: `text-brand-primary`
- Hover: `bg-brand-primary/10`

**Destructive** (delete, reject):
- Background: `bg-status-error`
- Text: `text-white`
- Hover: Darken

**Ghost** (tertiary actions):
- Background: `transparent`
- Text: `text-foreground`
- Hover: `bg-accent`

---

### Quick Action Chip

**Purpose**: Inline action buttons in AI responses or dashboards

**Visual Style**:
- Background: `bg-secondary`
- Text: `text-secondary-foreground`
- Padding: `px-3 py-1.5`
- Border radius: `rounded-full`
- Font: `text-sm font-medium`
- Icon: 14px, left-aligned
- Hover: `bg-secondary/80`

Example:
```tsx
<button className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-secondary/80">
  <Plus size={14} />
  Create Task
</button>
```

---

### Data Table

**Purpose**: Display operational data (vendors, tasks, approvals)

**Visual Style**:
- Header: `bg-muted`, `text-sm`, `font-semibold`, uppercase
- Rows: Alternating `bg-card` / `bg-muted/30`
- Borders: `border-b border-border`
- Padding: `px-4 py-3`
- Hover: `hover:bg-accent/50`

**Key Patterns**:
- Status column: Use status badges
- Actions column: Icon buttons (ghost variant)
- Date column: Consistent format (e.g., "May 23, 2026")
- Money column: Right-aligned, monospaced font

---

### Timeline View

**Purpose**: Show event schedules, task sequences, or approval flows

**Visual Style**:
- Vertical line: `border-l-2 border-border`
- Nodes: Circular indicators with status colors
- Content: Cards attached to timeline nodes
- Spacing: `gap-6` between items

**Node States**:
- Completed: Filled circle with checkmark, `bg-status-success`
- In Progress: Pulsing circle, `bg-status-info`
- Pending: Outlined circle, `border-2 border-status-pending`
- Blocked: X icon, `bg-status-error`

---

### Approval Card

**Purpose**: Display approval requests with context and actions

**Visual Style**:
- Container: Dashboard card base
- Header: Item name + status badge
- Content: Details, requestor, date
- Actions: Approve (success) / Reject (destructive) buttons
- Footer: Comments or notes section

**States**:
- Pending: Warning badge, actions enabled
- Approved: Success badge, read-only, approval metadata
- Rejected: Error badge, read-only, rejection reason

---

## Layout Patterns

### Dashboard Grid

**Structure**: 12-column responsive grid

**Breakpoints**:
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3-4 columns

**Card Sizes**:
- Full width: 12 columns (hero metrics)
- Half: 6 columns (charts, lists)
- Third: 4 columns (KPIs, stats)
- Quarter: 3 columns (compact metrics)

---

### Mobile-First Navigation

**Bottom Tab Bar** (Mobile):
- Fixed bottom position
- 4-5 primary items
- Icons + labels
- Active state: Brand primary color
- Items: Chat, Events, Calendar, Alerts, Profile

**Sidebar** (Desktop):
- Collapsible left sidebar
- Organization switcher at top
- Main navigation sections
- User profile at bottom

---

### Chat Interface Layout

**Structure**:
- Header: Event context selector
- Message area: Scrollable, bottom-anchored
- Input: Fixed bottom, multi-line support
- Quick actions: Horizontal scrollable chips above input

---

## Data Visualization

### Chart Colors

Use the chart color tokens for consistency:
- `--chart-1` through `--chart-5` for multi-series data
- Status colors for single-metric visualizations

### Recommended Chart Types

**Event Readiness**: Radial progress gauge
**Budget Tracking**: Horizontal stacked bar chart
**Timeline**: Gantt-style horizontal bars
**Vendor Performance**: Scatter plot or rating badges
**Task Completion**: Vertical bar chart or progress list

### Chart Library

Use **Recharts** for all data visualizations. Maintain consistent:
- Grid colors: `stroke="var(--border)"`
- Font size: `text-sm`
- Tooltips: Card-style with status colors

---

## Iconography

### Icon Library

Use **Lucide React** for all icons.

### Icon Sizing

```css
--icon-xs: 14px    /* Inline with text */
--icon-sm: 16px    /* Buttons, badges */
--icon-md: 20px    /* Default UI */
--icon-lg: 24px    /* Headers, prominent actions */
--icon-xl: 32px    /* Hero icons, empty states */
```

### Key Icons

- **Events**: Calendar, CalendarCheck, CalendarClock
- **Tasks**: CheckSquare, ListTodo, ClipboardList
- **AI**: Sparkles, MessageCircle, Zap
- **Status**: CheckCircle, AlertCircle, XCircle, Clock
- **Vendors**: Users, Briefcase, Truck
- **Budget**: DollarSign, CreditCard, TrendingUp
- **Approvals**: ThumbsUp, ThumbsDown, FileCheck
- **Alerts**: Bell, AlertTriangle, Info

---

## Motion & Interaction

### Animation Principles

- **Purposeful**: Motion communicates state changes
- **Subtle**: Avoid distracting animations
- **Responsive**: Quick, snappy interactions (200-300ms)
- **Status-driven**: Pulse for in-progress, bounce for updates

### Common Animations

**Button Hover**: Scale 1.02, 200ms ease
**Card Hover**: Subtle shadow increase, 200ms ease
**Badge Pulse**: Opacity pulse for "in-progress" states
**Toast Notifications**: Slide in from top-right
**Loading States**: Skeleton screens, not spinners

---

## Accessibility

### Contrast Requirements

- **Normal text**: Minimum 4.5:1 contrast ratio
- **Large text** (18px+): Minimum 3:1 contrast ratio
- **UI components**: Minimum 3:1 contrast ratio

### Focus States

- Visible focus rings on all interactive elements
- Use `ring-2 ring-ring ring-offset-2`
- Never remove focus indicators

### Screen Reader Support

- Meaningful alt text for icons used without labels
- ARIA labels for status badges
- Proper heading hierarchy (h1 > h2 > h3)
- Semantic HTML (button, nav, main, aside)

---

## Responsive Design

### Mobile Optimization

- Touch targets minimum 44x44px
- Generous spacing for fat fingers
- Bottom sheet modals (not centered popups)
- Swipe gestures for common actions

### Desktop Enhancements

- Keyboard shortcuts for power users
- Multi-column layouts
- Hover states and tooltips
- Right-click context menus

---

## Writing Style

### Tone

- **Professional**: Not casual or playful
- **Direct**: Clear, action-oriented language
- **Confident**: Avoid hedging ("maybe", "might")
- **Concise**: Respect the user's time

### UI Copy Patterns

**Button Labels**: Verb + noun (e.g., "Create Event", "Approve Budget")
**Status Messages**: Present tense, active voice (e.g., "Preparing event", "Waiting for approval")
**Error Messages**: State the problem + suggest solution (e.g., "Vendor not found. Try searching by category.")
**Empty States**: Explain + CTA (e.g., "No events yet. Create your first event to get started.")

### AI Response Style

- Natural, conversational tone
- Structured with bullet points or numbered lists
- Include actionable insights
- Surface critical information first
- Use status indicators and metrics prominently

---

## Implementation Notes

### CSS Custom Properties

All design tokens should be defined as CSS custom properties in `src/styles/theme.css` for easy theming and dark mode support.

### Component Library

Use **Radix UI** primitives + **Material UI** components where appropriate. Build custom RC Events components on top of these foundations.

### Tailwind Utilities

Leverage Tailwind's utility classes for rapid development while maintaining design system consistency through the custom theme configuration.

---

## Summary

RC Events is a **premium, operational-first platform** that prioritizes:

1. **Clarity** — Clean layouts, high contrast, readable typography
2. **Efficiency** — Quick actions, keyboard shortcuts, responsive interactions
3. **Intelligence** — AI-powered insights, predictive recommendations
4. **Reliability** — Real-time status, operational visibility, risk indicators

Every design decision should support professional event operations teams in executing flawless events.
