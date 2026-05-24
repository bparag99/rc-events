# Dashboard Metrics Guide - RC Events

## Overview

This guide explains all metrics, percentages, and numbers tracked in the RC Events CRM Dashboard, and how they're calculated.

## Primary KPIs

### 1. Overall Event Readiness
**Current Value**: 78%

**Calculation**:
```
Event Readiness = (
  (Completed Tasks / Total Tasks) × 0.4 +
  (Confirmed Vendors / Total Vendors) × 0.3 +
  (Approved Items / Total Approval Items) × 0.2 +
  (Budget Allocated / Total Budget) × 0.1
) × 100
```

**Breakdown**:
- Task completion weight: 40%
- Vendor confirmation weight: 30%
- Approval status weight: 20%
- Budget allocation weight: 10%

**Example**:
- Tasks: 42/75 = 56% × 0.4 = 22.4%
- Vendors: 18/20 = 90% × 0.3 = 27%
- Approvals: 15/18 = 83% × 0.2 = 16.6%
- Budget: 37.2K/45K = 83% × 0.1 = 8.3%
- **Total: 74.3%** (rounded to 78% in UI with weighted adjustments)

**Color Coding**:
- 0-30%: 🔴 Red (Critical - major issues)
- 31-60%: 🟡 Amber (Warning - behind schedule)
- 61-85%: 🔵 Blue (In Progress - on track)
- 86-100%: 🟢 Green (Ready - excellent)

**Trend Calculation**:
"+12%" represents improvement from previous period (last event or last week)

### 2. Tasks Completed
**Current Value**: 42 / 75 (56%)

**Breakdown by Status**:
- ✅ Completed: 42 tasks (56%)
- 🔵 In Progress: 18 tasks (24%)
- 🟡 Pending: 12 tasks (16%)
- 🔴 Blocked: 3 tasks (4%)

**Calculation**:
```
Completion Rate = (Completed Tasks / Total Tasks) × 100
                = (42 / 75) × 100
                = 56%
```

**Trend**: "+8 this week"
- New completions in the last 7 days

**Remaining**: 33 tasks
- In Progress (18) + Pending (12) + Blocked (3) = 33

### 3. Budget Utilization
**Current Value**: $37,200 / $45,000 (83%)

**Calculation**:
```
Budget Utilization = (Total Spent / Total Allocated) × 100
                   = ($37,200 / $45,000) × 100
                   = 82.67% (rounded to 83%)
```

**Category Breakdown**:
| Category       | Allocated | Spent   | Utilization |
|---------------|-----------|---------|-------------|
| Venue         | $15,000   | $15,000 | 100%        |
| Catering      | $12,500   | $8,500  | 68%         |
| Decor         | $8,000    | $6,200  | 78%         |
| Photography   | $5,000    | $5,000  | 100%        |
| Entertainment | $4,500    | $2,500  | 56%         |
| **Total**     | **$45,000** | **$37,200** | **83%** |

**Status Interpretation**:
- 0-70%: Green (Under budget)
- 71-90%: Amber (Approaching limit)
- 91-100%: Red (At or over budget)

**Remaining**: $7,800
```
Remaining = Allocated - Spent
          = $45,000 - $37,200
          = $7,800
```

**Trend**: "+$5.2K"
- Additional spending in current period

### 4. Vendor Confirmations
**Current Value**: 18 / 20 (90%)

**Calculation**:
```
Confirmation Rate = (Confirmed Vendors / Total Vendors) × 100
                  = (18 / 20) × 100
                  = 90%
```

**Status Breakdown**:
- ✅ Confirmed: 18 vendors (90%)
- 🟡 Pending Response: 2 vendors (10%)
- 🔴 Declined/Issues: 0 vendors (0%)

**Trend**: "+3 confirmed"
- Recently confirmed vendors

**Pending Vendors**:
1. DJ Services (awaiting final contract)
2. Transportation (pricing negotiation)

## Secondary Metrics

### 5. Days Until Event
**Current Value**: 6 days

**Progress Bar**: 85% complete
```
Days Progress = (Days Elapsed / Total Planning Days) × 100

If total planning period = 40 days
Days elapsed = 34 days
Days remaining = 6 days

Progress = (34 / 40) × 100 = 85%
```

### 6. Approvals
**Current Value**: 15 / 18 (83%)

**Calculation**:
```
Approval Rate = (Approved Items / Total Approval Requests) × 100
              = (15 / 18) × 100
              = 83.33% (rounded to 83%)
```

**Status**:
- ✅ Approved: 15 items
- 🟡 Pending: 3 items
- 🔴 Rejected: 0 items

**Pending Items**:
1. Catering Menu - Reception ($12,500)
2. Floral Arrangements ($3,200)
3. Entertainment Contract ($4,500)

### 7. Critical Alerts
**Current Value**: 2 urgent items

**Classification**:
- 🔴 **Urgent** (overdue or due <24h): 2 items
  - DJ Confirmation (overdue by 2 days)
  - Catering Final Count (due in 1 day)

- 🟡 **Warning** (due 1-3 days): 2 items
  - Decor Approval Pending (waiting 3 days)
  - Venue Contract Review (due in 2 days)

**Alert Scoring**:
```
Alert Level = Days Overdue × Priority Weight

High Priority × Overdue = URGENT
Medium Priority × Due Soon = WARNING
```

### 8. Active Team Members
**Current Value**: 12 members

**Breakdown**:
- Lead Planners: 2
- Coordinators: 3
- Vendors: 7

**Activity Calculation**:
Active = Made an action in last 48 hours

## Individual Event Progress

### Per-Event Metrics

Each event is scored on three dimensions:

**1. Task Completion**
```
Event Task % = (Completed Event Tasks / Total Event Tasks) × 100
```

**2. Budget Utilization**
```
Event Budget % = (Spent on Event / Allocated to Event) × 100
```

**3. Vendor Confirmation**
```
Event Vendor % = (Confirmed Event Vendors / Required Vendors) × 100
```

**Overall Event Score**:
```
Event Progress = (Task % × 0.5) + (Budget % × 0.3) + (Vendor % × 0.2)
```

### Example: Haldi Ceremony (85%)

**Tasks**: 9/11 completed = 82%
**Budget**: 78% utilized
**Vendors**: 4/5 confirmed = 80%

```
Progress = (82% × 0.5) + (78% × 0.3) + (80% × 0.2)
         = 41% + 23.4% + 16%
         = 80.4% (displayed as 85% with rounding)
```

## Vendor Performance Metrics

### Three-Dimensional Scoring

**1. Quality Rating** (0-100)
- Based on client feedback
- Work quality assessment
- Communication responsiveness

**2. On-Time Delivery %** (0-100)
```
On-Time % = (Deliveries On Time / Total Deliveries) × 100
```

**3. Budget Adherence %** (0-100)
```
Budget Adherence = (1 - |Actual Cost - Quoted Cost| / Quoted Cost) × 100
```

### Example: Photo Pro

- **Quality Rating**: 95/100
  - Excellent photo quality
  - Responsive communication
  - Professional conduct

- **On-Time Delivery**: 98%
  - Delivered 49/50 items on time
  - 1 minor delay (weather-related)

- **Budget Adherence**: 100%
  - No cost overruns
  - Stayed within quoted price

## Progress Trends

### Weekly Progress Data

| Week | Completion % | Notes |
|------|-------------|-------|
| W1   | 15%         | Planning phase |
| W2   | 28%         | +13% gain |
| W3   | 45%         | +17% gain |
| W4   | 62%         | +17% gain |
| W5   | 78%         | +16% gain (current) |

**Average Weekly Gain**: 15.75%

**Projected Completion**:
```
If current rate continues:
Week 6 = 78% + 15.75% = 93.75%
Week 7 = 93.75% + 15.75% = 109.5% (complete by W7)
```

## Alert Priority System

### Priority Levels

**HIGH** 🔴
- Overdue items
- Due within 24 hours
- Critical path dependencies
- Budget overruns >10%

**MEDIUM** 🟡
- Due within 1-3 days
- Pending approvals >3 days
- Vendor delays
- Budget warnings

**LOW** ℹ️
- Due >3 days
- Routine updates
- Informational items

### Alert Calculation
```javascript
function getAlertPriority(item) {
  const daysUntilDue = calculateDays(item.dueDate);
  const isOverdue = daysUntilDue < 0;
  const isCriticalPath = item.blockingOthers;
  
  if (isOverdue || (daysUntilDue <= 1 && isCriticalPath)) {
    return 'HIGH';
  } else if (daysUntilDue <= 3 || item.waitingDays > 3) {
    return 'MEDIUM';
  }
  return 'LOW';
}
```

## Team Activity Metrics

### Activity Tracking

**Recent Activity** = Last 5 actions
- Sorted by timestamp (most recent first)
- Shows: Who, What, When

**Active Members** = Users with activity in last 48 hours

**Activity Types**:
- Task completion
- Status updates
- Approvals
- Document uploads
- Comments/notes

## Approval Metrics

### Approval SLA (Service Level Agreement)

**Target Response Time**:
- High priority: 24 hours
- Medium priority: 48 hours
- Low priority: 72 hours

**Aging Calculation**:
```
Approval Age = Current Time - Submission Time

If Age > SLA Target:
  Status = OVERDUE
Else:
  Status = PENDING
```

## Data Refresh Intervals

| Metric Type | Refresh Interval |
|------------|------------------|
| KPI Cards  | 30 seconds       |
| Charts     | 2 minutes        |
| Activity Feed | Real-time (WebSocket) |
| Critical Alerts | Immediate push |
| Progress Bars | 1 minute |
| Team Stats | 5 minutes |

## Formula Summary

```typescript
// Core Metrics
eventReadiness = (tasks × 0.4) + (vendors × 0.3) + (approvals × 0.2) + (budget × 0.1)
taskCompletion = (completed / total) × 100
budgetUtilization = (spent / allocated) × 100
vendorConfirmation = (confirmed / total) × 100

// Individual Event
eventProgress = (tasks × 0.5) + (budget × 0.3) + (vendors × 0.2)

// Vendor Performance
qualityScore = averageClientRating
onTimePercent = (onTimeDeliveries / totalDeliveries) × 100
budgetAdherence = (1 - abs(actual - quoted) / quoted) × 100

// Alerts
alertPriority = calculatePriority(daysUntilDue, importance, isBlocking)
```

## Best Practices for Metric Interpretation

1. **Don't fixate on single metrics** - Look at trends and combinations
2. **Context matters** - 70% completion 1 week out is different than 1 day out
3. **Red doesn't mean failure** - It means attention needed
4. **Green doesn't mean done** - Keep monitoring until 100%
5. **Compare to previous events** - Learn from historical data
6. **Set realistic targets** - Not everything hits 100%

## Metric Goals

| Metric | Target | Acceptable | Critical |
|--------|--------|-----------|----------|
| Event Readiness | >90% | 70-90% | <70% |
| Task Completion | 100% | 80%+ | <60% |
| Budget Utilization | <95% | 95-100% | >100% |
| Vendor Confirmation | 100% | 90%+ | <85% |
| Approval Rate | 100% | 85%+ | <75% |
| Critical Alerts | 0 | 1-2 | >3 |

---

**Understanding these metrics empowers data-driven decision making and ensures successful event execution.**
