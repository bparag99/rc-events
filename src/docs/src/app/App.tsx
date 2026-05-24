import { useState } from 'react';
import {
  Calendar,
  CheckCircle,
  Users,
  DollarSign,
  Plus,
  FileCheck,
  ThumbsUp,
  ThumbsDown,
  TrendingUp,
  AlertTriangle,
  Sparkles,
  LayoutDashboard,
  UserCircle,
  BarChart3
} from 'lucide-react';
import { StatusBadge } from './components/StatusBadge';
import { ProgressBar } from './components/ProgressBar';
import { DashboardCard } from './components/DashboardCard';
import { ChatMessage } from './components/ChatMessage';
import { ActionButton } from './components/ActionButton';
import { QuickActionChip } from './components/QuickActionChip';
import { Timeline } from './components/Timeline';
import { ContactsPage } from './components/ContactsPage';
import { QuickContactWidget } from './components/QuickContactWidget';
import { Contact } from './components/ContactCard';
import { CRMDashboard } from './components/CRMDashboard';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentView, setCurrentView] = useState<'design-system' | 'contacts' | 'dashboard'>('dashboard');

  // Sample contacts for the quick contact widget
  const keyContacts: Contact[] = [
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
      eventPart: 'Mehndi & Reception',
      phone: '+1 (555) 234-5678',
      status: 'success',
    },
    {
      id: '3',
      name: 'James Wilson',
      role: 'DJ & Entertainment',
      eventPart: 'Sangeet & Reception',
      phone: '+1 (555) 456-7890',
      status: 'warning',
    },
  ];

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-background text-foreground">
        {/* Header */}
        <header className="border-b border-border bg-card sticky top-0 z-50">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-2xl font-semibold">RC Events Design System</h1>
                <p className="text-sm text-muted-foreground">AI-Powered Event Operations Platform</p>
              </div>
              <ActionButton
                variant="ghost"
                onClick={() => setDarkMode(!darkMode)}
                icon={darkMode ? '☀️' : '🌙'}
              >
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </ActionButton>
            </div>

            {/* View Toggle */}
            <div className="flex gap-2">
              <ActionButton
                variant={currentView === 'dashboard' ? 'primary' : 'ghost'}
                onClick={() => setCurrentView('dashboard')}
                icon={<BarChart3 size={16} />}
              >
                CRM Dashboard
              </ActionButton>
              <ActionButton
                variant={currentView === 'contacts' ? 'primary' : 'ghost'}
                onClick={() => setCurrentView('contacts')}
                icon={<UserCircle size={16} />}
              >
                Contacts
              </ActionButton>
              <ActionButton
                variant={currentView === 'design-system' ? 'primary' : 'ghost'}
                onClick={() => setCurrentView('design-system')}
                icon={<LayoutDashboard size={16} />}
              >
                Components
              </ActionButton>
            </div>
          </div>
        </header>

        {/* Main Content */}
        {currentView === 'dashboard' ? (
          <CRMDashboard />
        ) : currentView === 'contacts' ? (
          <ContactsPage />
        ) : (
          <div className="container mx-auto px-6 py-8 space-y-12">

          {/* Color Palette */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">Color Palette</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Brand Colors</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <div className="h-24 bg-brand-primary rounded-lg"></div>
                    <p className="text-sm font-medium">Brand Primary</p>
                    <p className="text-xs text-muted-foreground">#4F46E5</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-24 bg-brand-secondary rounded-lg"></div>
                    <p className="text-sm font-medium">Brand Secondary</p>
                    <p className="text-xs text-muted-foreground">#7C3AED</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-24 bg-brand-accent rounded-lg"></div>
                    <p className="text-sm font-medium">Brand Accent</p>
                    <p className="text-xs text-muted-foreground">#06B6D4</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Operational Status Colors</h3>
                <div className="grid grid-cols-5 gap-4">
                  <div className="space-y-2">
                    <div className="h-24 bg-status-success rounded-lg"></div>
                    <p className="text-sm font-medium">Success</p>
                    <p className="text-xs text-muted-foreground">#10B981</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-24 bg-status-warning rounded-lg"></div>
                    <p className="text-sm font-medium">Warning</p>
                    <p className="text-xs text-muted-foreground">#F59E0B</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-24 bg-status-error rounded-lg"></div>
                    <p className="text-sm font-medium">Error</p>
                    <p className="text-xs text-muted-foreground">#EF4444</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-24 bg-status-info rounded-lg"></div>
                    <p className="text-sm font-medium">Info</p>
                    <p className="text-xs text-muted-foreground">#3B82F6</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-24 bg-status-pending rounded-lg"></div>
                    <p className="text-sm font-medium">Pending</p>
                    <p className="text-xs text-muted-foreground">#6B7280</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Status Badges */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">Status Badges</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex flex-wrap gap-3">
                <StatusBadge variant="success">Completed</StatusBadge>
                <StatusBadge variant="warning">Pending Approval</StatusBadge>
                <StatusBadge variant="error">Blocked</StatusBadge>
                <StatusBadge variant="info">In Progress</StatusBadge>
                <StatusBadge variant="pending">Not Started</StatusBadge>
                <StatusBadge variant="success" showIcon={false}>Approved</StatusBadge>
              </div>
            </div>
          </section>

          {/* Progress Bars */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">Progress Bars</h2>
            <div className="bg-card border border-border rounded-lg p-6 space-y-6">
              <ProgressBar label="Event Readiness" percentage={78} />
              <ProgressBar label="Budget Utilization" percentage={45} />
              <ProgressBar label="Task Completion" percentage={92} />
              <ProgressBar label="Vendor Confirmations" percentage={23} />
            </div>
          </section>

          {/* Action Buttons */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">Action Buttons</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex flex-wrap gap-3">
                <ActionButton variant="primary" icon={<Plus size={16} />}>
                  Create Event
                </ActionButton>
                <ActionButton variant="secondary" icon={<Calendar size={16} />}>
                  Schedule Task
                </ActionButton>
                <ActionButton variant="destructive" icon={<AlertTriangle size={16} />}>
                  Delete Event
                </ActionButton>
                <ActionButton variant="ghost" icon={<FileCheck size={16} />}>
                  View Details
                </ActionButton>
              </div>
            </div>
          </section>

          {/* Quick Action Chips */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">Quick Action Chips</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex flex-wrap gap-2">
                <QuickActionChip icon={<Plus size={14} />}>Create Task</QuickActionChip>
                <QuickActionChip icon={<Users size={14} />}>Assign Vendor</QuickActionChip>
                <QuickActionChip icon={<FileCheck size={14} />}>Request Approval</QuickActionChip>
                <QuickActionChip icon={<Calendar size={14} />}>Set Deadline</QuickActionChip>
                <QuickActionChip icon={<DollarSign size={14} />}>Add Budget Item</QuickActionChip>
              </div>
            </div>
          </section>

          {/* Dashboard Cards */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">Dashboard Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <DashboardCard
                title="Event Readiness"
                badge={<StatusBadge variant="info">In Progress</StatusBadge>}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Overall Progress</span>
                    <span className="text-2xl font-semibold">72%</span>
                  </div>
                  <ProgressBar percentage={72} showLabel={false} size="prominent" />
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div>
                      <p className="text-xs text-muted-foreground">Completed</p>
                      <p className="text-lg font-semibold text-status-success">18 tasks</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Pending</p>
                      <p className="text-lg font-semibold text-status-warning">7 tasks</p>
                    </div>
                  </div>
                </div>
              </DashboardCard>

              <DashboardCard
                title="Pending Approvals"
                badge={<StatusBadge variant="warning">3 Pending</StatusBadge>}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-b border-border">
                    <div>
                      <p className="text-sm font-medium">Catering Menu</p>
                      <p className="text-xs text-muted-foreground">Requested 2 days ago</p>
                    </div>
                    <StatusBadge variant="warning" showIcon={false}>Pending</StatusBadge>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-border">
                    <div>
                      <p className="text-sm font-medium">Decor Theme</p>
                      <p className="text-xs text-muted-foreground">Requested 1 day ago</p>
                    </div>
                    <StatusBadge variant="warning" showIcon={false}>Pending</StatusBadge>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <p className="text-sm font-medium">DJ Confirmation</p>
                      <p className="text-xs text-muted-foreground">Requested today</p>
                    </div>
                    <StatusBadge variant="warning" showIcon={false}>Pending</StatusBadge>
                  </div>
                </div>
              </DashboardCard>

              <DashboardCard
                title="Budget Overview"
                badge={<StatusBadge variant="success">On Track</StatusBadge>}
                action={
                  <ActionButton variant="secondary" icon={<TrendingUp size={16} />}>
                    View Full Budget
                  </ActionButton>
                }
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Total Allocated</span>
                    <span className="text-2xl font-semibold">$45,000</span>
                  </div>
                  <ProgressBar label="Budget Used" percentage={68} />
                  <div className="grid grid-cols-3 gap-4 pt-2">
                    <div>
                      <p className="text-xs text-muted-foreground">Allocated</p>
                      <p className="text-sm font-semibold text-budget-allocated">$30,600</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Paid</p>
                      <p className="text-sm font-semibold text-budget-paid">$18,000</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Remaining</p>
                      <p className="text-sm font-semibold">$14,400</p>
                    </div>
                  </div>
                </div>
              </DashboardCard>

              <DashboardCard
                title="Vendor Status"
                badge={<StatusBadge variant="error">2 Delayed</StatusBadge>}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-status-success" />
                      <span className="text-sm">Photographer</span>
                    </div>
                    <StatusBadge variant="success" showIcon={false}>Confirmed</StatusBadge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-status-success" />
                      <span className="text-sm">Decorator</span>
                    </div>
                    <StatusBadge variant="success" showIcon={false}>Confirmed</StatusBadge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <AlertTriangle size={16} className="text-status-error" />
                      <span className="text-sm">DJ</span>
                    </div>
                    <StatusBadge variant="error" showIcon={false}>Delayed</StatusBadge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <AlertTriangle size={16} className="text-status-error" />
                      <span className="text-sm">Catering</span>
                    </div>
                    <StatusBadge variant="error" showIcon={false}>Delayed</StatusBadge>
                  </div>
                </div>
              </DashboardCard>

              <QuickContactWidget
                contacts={keyContacts}
                title="Key Contacts"
                maxContacts={3}
                onViewAll={() => setCurrentView('contacts')}
              />

            </div>
          </section>

          {/* AI Chat Interface */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">AI Chat Interface</h2>
            <div className="bg-card border border-border rounded-lg p-6 space-y-4 max-w-3xl">
              <ChatMessage
                isAI={false}
                content="How is the Mehndi event preparation going?"
              />
              <ChatMessage
                isAI={true}
                content="The Mehndi event is 72% ready. Decor approval and DJ confirmation are pending. Catering preparation is on track. You have 3 tasks due by tomorrow."
              />
              <ChatMessage
                isAI={false}
                content="What are the main blockers?"
              />
              <ChatMessage
                isAI={true}
                content="There are 2 main blockers: 1) DJ vendor hasn't confirmed availability yet (overdue by 2 days), and 2) Decor budget approval is pending from the client. I recommend following up on both today to stay on schedule."
              />

              {/* Chat Input Area */}
              <div className="pt-4 border-t border-border space-y-3">
                <div className="flex gap-2 overflow-x-auto pb-2">
                  <QuickActionChip icon={<Sparkles size={14} />}>Event Status</QuickActionChip>
                  <QuickActionChip icon={<Users size={14} />}>Vendor List</QuickActionChip>
                  <QuickActionChip icon={<Calendar size={14} />}>Timeline</QuickActionChip>
                  <QuickActionChip icon={<DollarSign size={14} />}>Budget</QuickActionChip>
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Ask me anything about your events..."
                    className="flex-1 px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  <ActionButton variant="primary" icon={<Sparkles size={16} />}>
                    Send
                  </ActionButton>
                </div>
              </div>
            </div>
          </section>

          {/* Approval Card Example */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">Approval Card</h2>
            <div className="max-w-2xl">
              <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-medium">Catering Menu Approval</h3>
                  <StatusBadge variant="warning">Pending</StatusBadge>
                </div>

                <div className="space-y-3 py-4 border-y border-border">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Requested by</span>
                    <span className="text-sm font-medium">Sarah Chen (Lead Planner)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Date Submitted</span>
                    <span className="text-sm font-medium">May 21, 2026</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Amount</span>
                    <span className="text-sm font-medium">$12,500</span>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-2">Details</p>
                  <p className="text-sm">Premium 3-course menu for 200 guests including vegetarian and vegan options. Includes appetizers, main course, dessert, and beverages.</p>
                </div>

                <div className="flex gap-3 pt-2">
                  <ActionButton variant="primary" icon={<ThumbsUp size={16} />}>
                    Approve
                  </ActionButton>
                  <ActionButton variant="destructive" icon={<ThumbsDown size={16} />}>
                    Reject
                  </ActionButton>
                  <ActionButton variant="ghost">
                    View Details
                  </ActionButton>
                </div>
              </div>
            </div>
          </section>

          {/* Timeline View */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">Timeline View</h2>
            <div className="max-w-3xl">
              <Timeline
                items={[
                  {
                    id: '1',
                    title: 'Venue Booking Confirmed',
                    description: 'Grand Palace Hotel confirmed for May 30, 2026',
                    status: 'completed',
                    date: 'May 1, 2026',
                    content: (
                      <div className="text-sm text-muted-foreground">
                        Contract signed and deposit paid. Capacity: 200 guests.
                      </div>
                    ),
                  },
                  {
                    id: '2',
                    title: 'Catering Menu Selection',
                    description: 'Reviewing menu options with client',
                    status: 'in-progress',
                    date: 'May 20, 2026',
                    content: (
                      <div className="space-y-2">
                        <ProgressBar label="Menu Review" percentage={65} />
                        <p className="text-sm text-muted-foreground">
                          Awaiting approval on vegetarian options
                        </p>
                      </div>
                    ),
                  },
                  {
                    id: '3',
                    title: 'DJ Vendor Confirmation',
                    description: 'Waiting for availability confirmation',
                    status: 'blocked',
                    date: 'Due: May 21, 2026',
                    content: (
                      <div className="flex items-center gap-2">
                        <AlertTriangle size={16} className="text-status-error" />
                        <span className="text-sm text-status-error">
                          Overdue by 2 days - Follow up required
                        </span>
                      </div>
                    ),
                  },
                  {
                    id: '4',
                    title: 'Photography Package',
                    description: 'Select photography and videography package',
                    status: 'pending',
                    date: 'Due: May 25, 2026',
                  },
                  {
                    id: '5',
                    title: 'Decor Setup',
                    description: 'Final decor installation and setup',
                    status: 'pending',
                    date: 'May 29, 2026',
                  },
                ]}
              />
            </div>
          </section>

          {/* Typography Examples */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">Typography Scale</h2>
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <div>
                <h1 className="mb-2">Heading 1 - Dashboard Title</h1>
                <p className="text-xs text-muted-foreground">text-2xl, font-medium</p>
              </div>
              <div>
                <h2 className="mb-2">Heading 2 - Section Header</h2>
                <p className="text-xs text-muted-foreground">text-xl, font-medium</p>
              </div>
              <div>
                <h3 className="mb-2">Heading 3 - Card Title</h3>
                <p className="text-xs text-muted-foreground">text-lg, font-medium</p>
              </div>
              <div>
                <p className="text-base mb-2">Body Text - Default paragraph content for descriptions and details</p>
                <p className="text-xs text-muted-foreground">text-base, font-regular</p>
              </div>
              <div>
                <p className="text-sm mb-2">Small Text - Metadata and secondary information</p>
                <p className="text-xs text-muted-foreground">text-sm, font-regular</p>
              </div>
              <div>
                <p className="text-xs mb-2">Extra Small - Labels and compact UI elements</p>
                <p className="text-xs text-muted-foreground">text-xs, font-regular</p>
              </div>
            </div>
          </section>

          </div>
        )}
      </div>
    </div>
  );
}
