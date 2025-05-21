# Budget Hub

BudgetHub is a modern, responsive web application designed to help individuals and families collaboratively track income, expenses, and financial goals. It enables multi-user shared budgeting through “account books,” visual reporting, and a secure authentication system.

## Product Requirements Document

### Goals

🎯 Primary Goals
- Enable users to track personal and shared (family) expenses
- Allow multiple users to collaborate in a shared budget
- Provide insights and visualizations for better financial decisions
- Prioritize scalability, security, and maintainability

### Target Users

| User Type | Description |
|-----------|-------------|
| Individual User | Tracks personal income and expenses |
| Family Member | Part of a shared family account book |
| Account Book Owner | Creates and manages family books and member roles |

### Core Features

#### 4.1 Authentication & Access
- Firebase Authentication: Email/password and Google Sign-in
- AuthGuard-protected routes
- JWT/ID token handling for API access

#### 4.2 Account Books (Personal / Family)
- Create personal or family account books
- Invite users to a family account book (via email or UID)
- Assign member roles: owner, editor, viewer
- Switch between account books

**AccountBook Schema:**
```ts
interface AccountBook {
  id: string;
  name: string;
  type: 'personal' | 'family';
  ownerId: string;
  members?: MemberRole[];
}
```

#### 4.3 Transactions
- Add/edit/delete income and expense records
- Assign category, note, date
- Support recurring tags (optional)
- Display filters by date/category/account book

**Transaction Schema:**
```ts
interface Transaction {
  id: string;
  accountBookId: string;
  type: 'income' | 'expense';
  amount: number;
  category: string;
  note?: string;
  date: string;
  createdBy: string;
}
```

#### 4.4 Dashboard
- Total balance (calculated by book)
- Monthly summary (income vs. expenses)
- Recent transactions
- Graphs (optional): spending by category, trends over time

#### 4.5 Reporting (Charts & Analysis)
- Pie chart: Expenses by category
- Line chart: Monthly trend
- Budget progress bar (optional)

#### 4.6 Notifications & Reminders (Optional Phase)
- Due bill notifications
- Budget threshold alerts (e.g. “80% of groceries budget used”)

### Technical Stack

| Layer | Stack |
|-------|-------|
| Frontend | Angular 19 + Vite, SCSS, TailwindCSS |
| Auth | Firebase Authentication |
| Backend | Spring Boot (microservices), REST APIs |
| Database | PostgreSQL |
| DevOps | Docker, Docker Compose |
| State Mgmt | Signals, RxJS, or NgRx (optional) |
| Charts | Chart.js or ngx-charts |

### Project Structure (Frontend)
```txt
budget-hub/
├── frontend/
│   ├── src/app/
│   │   ├── auth/
│   │   ├── dashboard/
│   │   ├── account-book/
│   │   ├── transaction/
│   │   ├── shared/
│   │   ├── core/
│   │   └── app.config.ts
│   ├── assets/
│   ├── styles.scss
│   └── index.html
```

### User Flow

➤ First-Time User
	1.	Visit homepage → redirected to login
	2.	Register/login via Firebase
	3.	Default personal account book created
	4.	Sees dashboard with empty state
	5.	Can add transactions, switch to creating a family account

### Non-Functional Requirements

| Category | Requirement |
|----------|-------------|
| Performance | Page loads < 2s, Vite-based fast reload |
| Security | Firebase Auth + JWT validation on backend |
| Accessibility | WCAG-compliant component styling |
| Responsiveness | Fully responsive on mobile and tablet |
| Maintainability | Modular architecture, reusable services & components |


### Stretch Goals (Optional Phases)
- Budget goal-setting & enforcement
- CSV import/export
- Recurring transactions
- Dark mode
- Multi-currency support
- PWA/offline support

### Milestones / MVP Breakdown

| Phase | Features |
|-------|----------|
| MVP 1 | Login, Dashboard (mock), Add/View transactions |
| MVP 2 | Account book switching, Family invite system |
| MVP 3 | Reports (charts), Tailwind polish, mock backend |
| Post-MVP | Firebase data sync, actual backend APIs |
