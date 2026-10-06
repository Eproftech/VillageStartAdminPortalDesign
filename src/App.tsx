import { useState, type Dispatch, type ReactNode, type SetStateAction } from "react"
import villageStartLogo from "./assets/village-start-logo.png"

type IconName = "home" | "people" | "files" | "training" | "hiring" | "referrals" | "settings" | "help" | "search" | "bell" | "chevron" | "arrow" | "clock" | "check" | "warning" | "more" | "plus" | "upload" | "download" | "calendar" | "briefcase" | "user" | "lock" | "logout" | "menu" | "close" | "external" | "document" | "trash"

const paths: Record<IconName, ReactNode> = {
  home: (
    <>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5M9 21v-7h6v7" />
    </>
  ),
  people: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="8.5" cy="7" r="4" />
      <path d="M17 11a4 4 0 0 0 0-8M23 21v-2a4 4 0 0 0-3-3.87" />
    </>
  ),
  files: (
    <>
      <path d="M3 7.5h7l2 2h9v11H3z" />
      <path d="M3 7.5V4h7l2 2h6v3.5" />
    </>
  ),
  training: (
    <>
      <path d="m2 9 10-5 10 5-10 5z" />
      <path d="M6 11v5c3 3 9 3 12 0v-5M22 9v6" />
    </>
  ),
  hiring: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" />
    </>
  ),
  referrals: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12h8M12 8l4 4-4 4" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1 1.55V21h-4v-.08A1.7 1.7 0 0 0 9 19.37a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.63 15a1.7 1.7 0 0 0-1.55-1H3v-4h.08A1.7 1.7 0 0 0 4.63 9a1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 9 4.63a1.7 1.7 0 0 0 1-1.55V3h4v.08A1.7 1.7 0 0 0 15 4.63a1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.37 9a1.7 1.7 0 0 0 1.55 1H21v4h-.08A1.7 1.7 0 0 0 19.4 15Z" />
    </>
  ),
  help: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.7 9a2.4 2.4 0 1 1 3.2 2.26c-.9.4-.9 1.04-.9 1.74M12 17h.01" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </>
  ),
  bell: (
    <>
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" />
    </>
  ),
  chevron: <path d="m9 18 6-6-6-6" />,
  arrow: (
    <>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  warning: (
    <>
      <path d="M10.3 3.4 2.1 18a2 2 0 0 0 1.7 3h16.4a2 2 0 0 0 1.7-3L13.7 3.4a2 2 0 0 0-3.4 0Z" />
      <path d="M12 9v4M12 17h.01" />
    </>
  ),
  more: (
    <>
      <circle cx="5" cy="12" r="1" />
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  upload: (
    <>
      <path d="M12 16V4M7 9l5-5 5 5M4 16v4h16v-4" />
    </>
  ),
  download: (
    <>
      <path d="M12 4v12M7 11l5 5 5-5M4 20h16" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V4h6v3M3 12h18" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>
  ),
  lock: (
    <>
      <rect x="4" y="10" width="16" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </>
  ),
  logout: (
    <>
      <path d="M10 17l5-5-5-5M15 12H3M15 4h5v16h-5" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  external: (
    <>
      <path d="M14 4h6v6M20 4l-9 9" />
      <path d="M18 13v7H4V6h7" />
    </>
  ),
  document: (
    <>
      <path d="M6 2h8l4 4v16H6z" />
      <path d="M14 2v5h5M9 12h6M9 16h6" />
    </>
  ),
  trash: (
    <>
      <path d="M4 7h16M9 7V4h6v3M7 7l1 14h8l1-14" />
      <path d="M10 11v6M14 11v6" />
    </>
  ),
}

function Icon({ name, size = 19 }: { name: IconName size?: number }) {
  return (
    <svg
      aria-hidden="true"
      className="icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  )
}

function Button({
  children,
  variant = "primary",
  icon,
  onClick,
  className = "",
}: {
  children?: ReactNode
  variant?: "primary" | "secondary" | "ghost" | "icon"
  icon?: IconName
  onClick?: () => void
  className?: string
}) {
  return (
    <button className={`btn btn-${variant} ${className}`} onClick={onClick}>
      {icon && <Icon name={icon} size={17} />}
      {children}
    </button>
  )
}

function Brand({ full = false }: { full?: boolean }) {
  if (full) {
    return (
      <img
        className="brand-full"
        src={villageStartLogo}
        alt="Village Start MIHP — Maternal Infant Health Program"
      />
    )
  }
  return (
    <div className="brand">
      <div className="brand-logo-crop">
        <img src={villageStartLogo} alt="" />
      </div>
      <div>
        <strong>Village Start</strong>
        <span>MIHP</span>
      </div>
    </div>
  )
}

const adminNav: { label: string icon: IconName }[] = [
  { label: "Home", icon: "home" },
  { label: "Staff", icon: "people" },
  { label: "Clients", icon: "user" },
  { label: "Pay ops", icon: "briefcase" },
  { label: "Company files", icon: "files" },
  { label: "Trainings", icon: "training" },
  { label: "Hiring", icon: "hiring" },
  { label: "Referrals", icon: "referrals" },
]
const staffNav: { label: string icon: IconName }[] = [
  { label: "My home", icon: "home" },
  { label: "Timesheets", icon: "clock" },
  { label: "My trainings", icon: "training" },
]

function Sidebar({
  page,
  setPage,
  role,
  open,
  close,
}: {
  page: string
  setPage: (v: string) => void
  role: "admin" | "staff"
  open: boolean
  close: () => void
}) {
  const nav = role === "admin" ? adminNav : staffNav
  return (
    <aside className={`sidebar ${open ? "is-open" : ""}`}>
      <div className="sidebar-top">
        <Brand />
        <Button
          variant="icon"
          icon="close"
          onClick={close}
          className="mobile-close"
        />
      </div>
      <nav className="nav-list">
        {nav.map((item) => (
          <button
            key={item.label}
            className={`nav-item ${page === item.label ? "active" : ""}`}
            onClick={() => {
              setPage(item.label)
              close()
            }}
          >
            <Icon name={item.icon} />
            <span>{item.label}</span>
            {item.label === "Referrals" && <em>4</em>}
          </button>
        ))}
      </nav>
      <div className="sidebar-bottom">
        {role === "admin" && (
          <button className="nav-item" onClick={() => setPage("Settings")}>
            <Icon name="settings" />
            <span>Settings</span>
          </button>
        )}
        <button className="nav-item" onClick={() => setPage("Portal guide")}>
          <Icon name="help" />
          <span>Portal guide</span>
        </button>
        <div className="sidebar-person">
          <div className="avatar small">DH</div>
          <div>
            <strong>Denise Harris</strong>
            <span>
              {role === "admin"
                ? "Owner & administrator"
                : "Family Support Specialist"}
            </span>
          </div>
          <Icon name="more" />
        </div>
      </div>
    </aside>
  )
}

function Header({
  title,
  menu,
  notifications,
  setNotifications,
}: {
  title: string
  menu: () => void
  notifications: boolean
  setNotifications: (v: boolean) => void
}) {
  return (
    <header className="topbar">
      <div className="topbar-title">
        <Button
          variant="icon"
          icon="menu"
          onClick={menu}
          className="mobile-menu"
        />
        <span>{title}</span>
      </div>
      <div className="header-actions">
        <label className="searchbox">
          <Icon name="search" size={18} />
          <input placeholder="Search portal" />
        </label>
        <div className="notification-wrap">
          <Button
            variant="icon"
            icon="bell"
            onClick={() => setNotifications(!notifications)}
          />
          <i />
          {notifications && (
            <div className="notification-menu">
              <div className="notification-head"><strong>Notifications</strong><Badge tone="gold">4 new</Badge></div>
              <div className="notification-item reminder"><div className="activity-dot"><Icon name="bell" size={14} /></div><div><strong>Reminder: Timesheets due Friday</strong><span>March 1–15 pay period · in 4 days</span></div></div>
              <div className="notification-item"><div className="activity-dot green"><Icon name="training" size={14} /></div><div><strong>2 certificates are ready for review</strong><span>Janelle Brooks and Marcus Lee</span></div></div>
              <div className="notification-item"><div className="activity-dot cream"><Icon name="calendar" size={14} /></div><div><strong>Interview tomorrow at 10:00 AM</strong><span>Lauren Bell · Google Meet</span></div></div>
              <button className="notification-all">View all notifications</button>
            </div>
          )}
        </div>
        <div className="avatar">DH</div>
      </div>
    </header>
  )
}

function Badge({
  children,
  tone = "sage",
}: {
  children: ReactNode
  tone?: "sage" | "gold" | "red" | "gray" | "green"
}) {
  return <span className={`badge ${tone}`}>{children}</span>
}

function SectionTitle({
  title,
  subtitle,
  action,
}: {
  title: string
  subtitle?: string
  action?: ReactNode
}) {
  return (
    <div className="section-title">
      <div>
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </div>
      {action}
    </div>
  )
}

function PortalFormDialog({ type, onClose, clients = savedClients }: { type: string; onClose: () => void; clients?: ClientRecord[] }) {
  const titles: Record<string,string> = { "add-staff":"Add staff member", "create-training":"Create training", "assign-training":"Assign training", "log-payment":"Log contractor payment", "log-hours":"Log hours / edit timesheet", "add-candidate":"Add candidate", "new-opening":"New job opening", "opening-status":"Pause or close job opening", "add-referral":"Add referral", "iris-upload":"Upload IRS IRIS template" }
  return <div className="modal-layer"><section className={`portal-form-dialog dialog-${type}`}><div className="viewer-head"><div><span>VILLAGE START MIHP</span><strong>{titles[type]}</strong></div><Button variant="icon" icon="close" onClick={onClose} /></div><div className="portal-form-body">
    {type === "add-staff" && <><div className="form-grid"><label>FIRST NAME<input placeholder="First name" /></label><label>LAST NAME<input placeholder="Last name" /></label><label>WORK EMAIL<input type="email" placeholder="name@villagestart.org" /></label><label>ROLE<select><option>Community Health Worker</option><option>Registered Nurse</option><option>Social Worker</option><option>Family Support Specialist</option></select></label><label>PAY TYPE<select><option>Hourly contractor</option><option>Employee</option></select></label><label>HOURLY RATE<input type="number" placeholder="0.00" /></label><label>START DATE<input type="date" /></label></div><label className="toggle-row"><div><strong>Send portal invite</strong><span>Email a secure password-setup link after saving.</span></div><span className="switch"><input type="checkbox" defaultChecked /><i /></span></label></>}
    {type === "create-training" && <><div className="form-grid"><label>TRAINING TITLE<input placeholder="Training title" /></label><label>PROVIDER<input placeholder="Organization or provider" /></label><label>CONTENT TYPE<select><option>Outside link</option><option>Upload PDF</option><option>Upload Word file</option></select></label><label>TRAINING LINK<input type="url" placeholder="https://" /></label></div><div className="upload-zone"><Icon name="upload" /><strong>Upload PDF or Word training</strong><span>PDF, DOC, or DOCX · up to 25 MB</span></div><label className="toggle-row"><div><strong>Certificate required</strong><span>Staff must upload a certificate before marking this training done.</span></div><span className="switch"><input type="checkbox" defaultChecked /><i /></span></label></>}
    {type === "assign-training" && <div className="form-grid"><label>TRAINING<select><option>Infant Safe Sleep Practices</option><option>Mandated Reporter Training</option><option>MIHP Cultural Humility</option></select></label><label>ASSIGN TO<select><option>Alicia Carter</option><option>Janelle Brooks</option><option>Marcus Lee</option></select></label><label>DUE DATE <span>OPTIONAL</span><input type="date" /></label></div>}
    {type === "log-payment" && <><div className="form-grid"><label>CONTRACTOR<select><option>Marcus Lee</option><option>Janelle Brooks</option><option>Renee Jackson</option></select></label><label>PAY PERIOD<select><option>March 1–15, 2025</option><option>February 16–28, 2025</option></select></label><label>AMOUNT<input defaultValue="1360.00" /></label><label>PAID DATE<input type="date" defaultValue="2025-03-19" /></label><label>METHOD<select><option>ACH</option><option>Check</option><option>Bank transfer</option></select></label><label>REFERENCE<input placeholder="ACH or check number" /></label></div><div className="suggested-total"><Icon name="check" /><span>Suggested from 42.5 approved hours at $32.00/hour</span><strong>$1,360.00</strong></div><label className="dialog-field">NOTES <span>OPTIONAL</span><textarea placeholder="Internal payment note" /></label></>}
    {type === "log-hours" && <div className="form-grid"><label>STAFF MEMBER<select><option>Marcus Lee</option><option>Janelle Brooks</option><option>Alicia Carter</option></select></label><label>PAY PERIOD<select><option>March 1–15, 2025</option><option>March 16–31, 2025</option></select></label><label>DATE<input type="date" defaultValue="2025-03-14" /></label><label>CLIENT<select><option>Select saved client</option><option>Client not on the list</option><option>No client / internal work</option>{clients.map((client) => <option key={client.id}>{client.firstName} {client.lastName}</option>)}</select></label><label>HOURS<input type="number" step="0.25" /></label><label>COUNTY<select><option>Wayne County</option><option>Oakland County</option><option>Genesee County</option></select></label><label>CITY<select><option>Detroit</option><option>Dearborn</option><option>Livonia</option></select></label><label className="full-field">NOTES <span>OPTIONAL</span><textarea placeholder="Visit notes or internal context" /></label></div>}
    {type === "add-candidate" && <><div className="form-grid"><label>FULL NAME<input placeholder="Candidate name" /></label><label>ROLE SOUGHT<select><option>Maternal Health Nurse</option><option>Community Health Worker</option><option>Social Worker</option></select></label><label>LINKED OPENING<select><option>Maternal Health Nurse · Open</option><option>Community Health Worker · Paused</option></select></label><label>SOURCE<select><option>Careers page</option><option>Employee referral</option><option>Community partner</option><option>Other</option></select></label><label>COUNTY<select><option>Wayne County</option><option>Oakland County</option><option>Genesee County</option></select></label></div><div className="upload-zone"><Icon name="upload" /><strong>Resume and other files</strong><span>Add PDF, Word, or image files</span></div></>}
    {type === "new-opening" && <div className="form-grid"><label>ROLE TITLE<input placeholder="Role title" /></label><label>LOCATION<input defaultValue="Detroit, Michigan" /></label><label>ENGAGEMENT<select><option>Contractor</option><option>Employee</option></select></label><label>STATUS<select><option>Open</option><option>Paused</option></select></label><label className="full-field">PUBLIC DESCRIPTION<textarea placeholder="Describe the role shown on the careers page" /></label></div>}
    {type === "opening-status" && <div className="status-confirm"><div className="delete-icon"><Icon name="warning" /></div><h2>Change opening status</h2><p>Pausing stops new applications while preserving the opening. Closing ends recruiting and removes it from the public careers page.</p><label><input type="radio" name="opening-status" defaultChecked /> Pause opening</label><label><input type="radio" name="opening-status" /> Close opening</label></div>}
    {type === "add-referral" && <div className="form-grid"><label>REFERRAL TYPE<select><option>Family</option><option>Partner</option><option>General message</option></select></label><label>NAME<input placeholder="Contact name" /></label><label>EMAIL<input type="email" /></label><label>PHONE<input /></label><label>ORGANIZATION<input placeholder="If applicable" /></label><label>COUNTY<select><option>Wayne County</option><option>Oakland County</option><option>Genesee County</option></select></label><label className="full-field">WHAT DO THEY NEED?<textarea placeholder="Describe the inquiry or support requested" /></label><label>ASSIGN TO<select><option>Unassigned</option><option>Janelle Brooks</option><option>Marcus Lee</option></select></label></div>}
    {type === "iris-upload" && <><div className="upload-zone"><Icon name="upload" /><strong>Upload the current IRS IRIS CSV template</strong><span>CSV file · Keep the IRS column headers unchanged</span></div><div className="info-callout"><Icon name="warning" /><div><strong>Template validation</strong><p>Village Start will validate the uploaded columns before preparing contractor rows.</p></div></div></>}
    <div className="dialog-footer"><Button variant="secondary" onClick={onClose}>Cancel</Button><Button onClick={onClose}>{type === "opening-status" ? "Update status" : type === "iris-upload" ? "Upload template" : "Save"}</Button></div>
  </div></section></div>
}

const tasks = [
  {
    icon: "training" as IconName,
    count: 2,
    title: "Certificates to review",
    text: "Janelle and Marcus submitted certificates",
    cta: "Review certificates",
    tone: "gold",
  },
  {
    icon: "clock" as IconName,
    count: 3,
    title: "Timesheets need approval",
    text: "For the March 1–15 pay period",
    cta: "Review timesheets",
    tone: "sage",
  },
  {
    icon: "user" as IconName,
    count: 1,
    title: "Onboarding in progress",
    text: "Alicia has 4 of 7 steps complete",
    cta: "View onboarding",
    tone: "cream",
  },
]

type UpcomingEvent = { id: number; title: string; date: string; detail: string; time?: string }

const initialUpcomingEvents: UpcomingEvent[] = [
  { id: 1, title: "Timesheets due", date: "2025-03-21", detail: "March 1–15 pay period", time: "5:00 PM" },
  { id: 2, title: "Infant safety training", date: "2025-03-28", detail: "6 assignments due", time: "All day" },
]

function Dashboard({ navigate }: { navigate: (v: string) => void }) {
  const [upcomingMenu, setUpcomingMenu] = useState(false)
  const [upcomingView, setUpcomingView] = useState<"calendar" | "add" | "reminders" | null>(null)
  const [upcomingEvents, setUpcomingEvents] = useState(initialUpcomingEvents)
  const [reminders, setReminders] = useState<Record<number, boolean>>({ 1: true, 2: true })
  const [portalDialog, setPortalDialog] = useState<string | null>(null)
  const openUpcoming = (view: "calendar" | "add" | "reminders") => {
    setUpcomingView(view)
    setUpcomingMenu(false)
  }
  return (
    <div className="page">
      <div className="welcome">
        <div>
          <span className="eyebrow">MONDAY, MARCH 17</span>
          <h1>Good morning, Denise.</h1>
          <p>Here’s what needs your attention at Village Start today.</p>
        </div>
        <Button icon="plus" onClick={() => setPortalDialog("add-staff")}>
          Add staff member
        </Button>
      </div>
      <SectionTitle
        title="Needs your attention"
        subtitle="A clear view of the work that’s waiting on you."
      />
      <div className="attention-grid">
        {tasks.map((task) => (
          <article className="attention-card" key={task.title}>
            <div className={`task-icon ${task.tone}`}>
              <Icon name={task.icon} />
            </div>
            <div className="attention-copy">
              <div>
                <span className="count">{task.count}</span>
                <h3>{task.title}</h3>
              </div>
              <p>{task.text}</p>
              <button
                className="text-link"
                onClick={() =>
                  navigate(
                    task.title.includes("Certificate") ? "Trainings" : "Staff",
                  )
                }
              >
                {task.cta}
                <Icon name="arrow" size={16} />
              </button>
            </div>
          </article>
        ))}
      </div>
      <div className="dashboard-columns">
        <section className="panel">
          <SectionTitle
            title="Organization snapshot"
            action={
              <button className="text-link" onClick={() => navigate("Staff")}>
                View staff
              </button>
            }
          />
          <div className="stats">
            <div>
              <strong>12</strong>
              <span>Active team members</span>
            </div>
            <div>
              <strong>9</strong>
              <span>Contractors</span>
            </div>
            <div>
              <strong>3</strong>
              <span>Employees</span>
            </div>
          </div>
          <div className="divider" />
          <div className="mini-heading">
            <span>ONBOARDING PROGRESS</span>
            <span>82% complete</span>
          </div>
          <div className="progress">
            <i className="progress-82" />
          </div>
          <p className="muted">
            2 team members are still completing onboarding.
          </p>
        </section>
        <section className="panel upcoming-panel">
          <SectionTitle
            title="Upcoming"
            action={<div className="upcoming-actions"><Button variant="icon" icon="more" onClick={() => setUpcomingMenu(!upcomingMenu)} />{upcomingMenu && <div className="upcoming-menu"><button onClick={() => openUpcoming("calendar")}><Icon name="calendar" />View calendar</button><button onClick={() => openUpcoming("add")}><Icon name="plus" />Add upcoming item</button><button onClick={() => openUpcoming("reminders")}><Icon name="bell" />Manage reminders</button></div>}</div>}
          />
          {upcomingEvents.slice(0, 3).map((event, index) => <div className="event" key={event.id}><div className="date"><strong>{Number(event.date.slice(-2))}</strong><span>{new Date(`${event.date}T12:00:00`).toLocaleString("en-US", { month: "short" }).toUpperCase()}</span></div><div><strong>{event.title}</strong><span>{event.detail}{event.time ? ` · ${event.time}` : ""}</span></div>{index === 0 && <Badge tone="gold">4 days</Badge>}</div>)}
        </section>
      </div>
      <section className="panel recent-panel">
        <SectionTitle
          title="Recent activity"
          action={<button className="text-link">View all activity</button>}
        />
        <div className="activity">
          <div className="activity-dot">
            <Icon name="upload" size={16} />
          </div>
          <div>
            <strong>Janelle Brooks uploaded a certificate</strong>
            <span>Infant Safe Sleep Practices · 42 minutes ago</span>
          </div>
          <button className="text-link" onClick={() => navigate("Trainings")}>
            Review
          </button>
        </div>
        <div className="activity">
          <div className="activity-dot green">
            <Icon name="check" size={16} />
          </div>
          <div>
            <strong>Marcus Lee submitted his timesheet</strong>
            <span>March 1–15 pay period · 2 hours ago</span>
          </div>
          <button className="text-link">Open</button>
        </div>
        <div className="activity">
          <div className="activity-dot cream">
            <Icon name="document" size={16} />
          </div>
          <div>
            <strong>Alicia Carter signed her contractor agreement</strong>
            <span>Onboarding · Yesterday</span>
          </div>
          <button className="text-link" onClick={() => navigate("Staff")}>
            View profile
          </button>
        </div>
      </section>
      {upcomingView && <UpcomingWorkspace view={upcomingView} events={upcomingEvents} reminders={reminders} onClose={() => setUpcomingView(null)} onAdd={(event) => { setUpcomingEvents((current) => [...current, { ...event, id: Math.max(0, ...current.map((item) => item.id)) + 1 }].sort((a, b) => a.date.localeCompare(b.date))); setUpcomingView(null) }} onReminder={(id, enabled) => setReminders((current) => ({ ...current, [id]: enabled }))} />}
      {portalDialog && <PortalFormDialog type={portalDialog} onClose={() => setPortalDialog(null)} />}
    </div>
  )
}

function UpcomingWorkspace({ view, events, reminders, onClose, onAdd, onReminder }: { view: "calendar" | "add" | "reminders"; events: UpcomingEvent[]; reminders: Record<number, boolean>; onClose: () => void; onAdd: (event: Omit<UpcomingEvent, "id">) => void; onReminder: (id: number, enabled: boolean) => void }) {
  const [title, setTitle] = useState("")
  const [date, setDate] = useState("2025-03-24")
  const [time, setTime] = useState("09:00")
  const [detail, setDetail] = useState("")
  const calendarCells = [...Array(6).fill(null), ...Array.from({ length: 31 }, (_, index) => index + 1)]
  const heading = view === "calendar" ? "March 2025 calendar" : view === "add" ? "Add upcoming item" : "Upcoming reminders"
  return <div className="modal-layer"><section className={`upcoming-dialog upcoming-${view}`}><div className="viewer-head"><div><span>UPCOMING</span><strong>{heading}</strong></div><Button variant="icon" icon="close" onClick={onClose} /></div>{view === "calendar" && <div className="calendar-body"><div className="calendar-toolbar"><Button variant="icon">‹</Button><h2>March 2025</h2><Button variant="icon">›</Button></div><div className="calendar-grid calendar-weekdays">{["SUN","MON","TUE","WED","THU","FRI","SAT"].map((day) => <span key={day}>{day}</span>)}</div><div className="calendar-grid">{calendarCells.map((day, index) => <div className={`calendar-day ${day === 17 ? "today" : ""}`} key={index}>{day && <><span>{day}</span>{events.filter((event) => Number(event.date.slice(-2)) === day).map((event) => <button key={event.id}><i />{event.title}</button>)}</>}</div>)}</div><div className="calendar-legend"><span><i />Today</span><span><i />Upcoming item</span></div></div>}{view === "add" && <div className="upcoming-form"><label>ITEM TITLE<input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="What is coming up?" /></label><div><label>DATE<input type="date" value={date} onChange={(e) => setDate(e.target.value)} /></label><label>TIME<input type="time" value={time} onChange={(e) => setTime(e.target.value)} /></label></div><label>DETAILS<textarea value={detail} onChange={(e) => setDetail(e.target.value)} placeholder="Add helpful context for the team" /></label><label className="reminder-check"><input type="checkbox" defaultChecked /> Send an administrator reminder one day before</label><div className="signature-actions"><Button variant="secondary" onClick={onClose}>Cancel</Button><Button onClick={() => title.trim() && onAdd({ title: title.trim(), date, detail: detail.trim() || "Organization reminder", time: new Date(`2025-03-17T${time}`).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }) })}>Add upcoming item</Button></div></div>}{view === "reminders" && <div className="reminder-body"><div className="reminder-intro"><Icon name="bell" /><div><strong>Choose what should remind you</strong><span>Reminders appear in the portal. Calendar-connected items can also appear in Google Calendar.</span></div></div>{events.map((event) => <div className="reminder-row" key={event.id}><div className="date"><strong>{Number(event.date.slice(-2))}</strong><span>MAR</span></div><div><strong>{event.title}</strong><span>{event.detail}</span></div><select defaultValue="1 day before" disabled={!reminders[event.id]}><option>At time of event</option><option>1 hour before</option><option>1 day before</option><option>3 days before</option><option>1 week before</option></select><label className="switch"><input type="checkbox" checked={Boolean(reminders[event.id])} onChange={(e) => onReminder(event.id, e.target.checked)} /><i /></label></div>)}<div className="reminder-footer"><span>Reminder preferences save automatically.</span><Button onClick={onClose}>Done</Button></div></div>}</section></div>
}

const people = [
  {
    name: "Janelle Brooks",
    initials: "JB",
    role: "Maternal Infant Health Specialist",
    location: "Detroit / Wayne",
    status: "Active",
    onboarding: 100,
    email: "janelle@villagestart.org",
  },
  {
    name: "Marcus Lee",
    initials: "ML",
    role: "Family Support Specialist",
    location: "Southfield / Oakland",
    status: "Active",
    onboarding: 100,
    email: "marcus@villagestart.org",
  },
  {
    name: "Alicia Carter",
    initials: "AC",
    role: "Community Health Worker",
    location: "Dearborn / Wayne",
    status: "Onboarding",
    onboarding: 57,
    email: "alicia@villagestart.org",
  },
  {
    name: "Tanya Williams",
    initials: "TW",
    role: "Registered Nurse",
    location: "Flint / Genesee",
    status: "Active",
    onboarding: 100,
    email: "tanya@villagestart.org",
  },
  {
    name: "Renee Jackson",
    initials: "RJ",
    role: "Lactation Consultant",
    location: "Detroit / Wayne",
    status: "Active",
    onboarding: 86,
    email: "renee@villagestart.org",
  },
]

const michiganLocations: Record<string, string[]> = {
  "Wayne County": ["Detroit", "Dearborn", "Livonia", "Westland"],
  "Oakland County": ["Southfield", "Pontiac", "Troy", "Royal Oak"],
  "Genesee County": ["Flint", "Grand Blanc", "Burton", "Flushing"],
  "Macomb County": ["Warren", "Sterling Heights", "Roseville", "Mount Clemens"],
  "Washtenaw County": ["Ann Arbor", "Ypsilanti", "Saline", "Chelsea"],
}

type ClientRecord = { id: number; firstName: string; lastName: string; county: string; city: string }

const savedClients: ClientRecord[] = [
  { id: 1, firstName: "Nicole", lastName: "Sanders", county: "Wayne County", city: "Detroit" },
  { id: 2, firstName: "Danielle", lastName: "Morris", county: "Oakland County", city: "Southfield" },
  { id: 3, firstName: "Elaine", lastName: "Turner", county: "Wayne County", city: "Dearborn" },
  { id: 4, firstName: "Briana", lastName: "Coleman", county: "Genesee County", city: "Flint" },
]

function StaffDirectory({
  openProfile,
}: {
  openProfile: (name: string) => void
}) {
  const [query, setQuery] = useState("")
  const [addingStaff, setAddingStaff] = useState(false)
  const filtered = people.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.role.toLowerCase().includes(query.toLowerCase()),
  )
  return (
    <div className="page">
      <div className="page-heading">
        <div>
          <h1>Staff directory</h1>
          <p>Manage your team, onboarding, documents, and pay details.</p>
        </div>
        <Button icon="plus" onClick={() => setAddingStaff(true)}>Add staff member</Button>
      </div>
      <div className="toolbar">
        <label className="searchbox wide">
          <Icon name="search" size={18} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or role"
          />
        </label>
        <button className="filter">
          All staff <Icon name="chevron" size={15} />
        </button>
        <button className="filter">
          All roles <Icon name="chevron" size={15} />
        </button>
      </div>
      <section className="table-card">
        <div className="table-head">
          <span>TEAM MEMBER</span>
          <span>ROLE & SERVICE AREA</span>
          <span>ONBOARDING</span>
          <span>STATUS</span>
          <span />
        </div>
        {filtered.map((person) => (
          <button
            className="table-row"
            key={person.name}
            onClick={() => openProfile(person.name)}
          >
            <span className="person-cell">
              <span
                className={`avatar avatar-${person.initials.toLowerCase()}`}
              >
                {person.initials}
              </span>
              <span>
                <strong>{person.name}</strong>
                <small>{person.email}</small>
              </span>
            </span>
            <span>
              <strong>{person.role}</strong>
              <small>{person.location}</small>
            </span>
            <span className="onboard-cell">
              <span>{person.onboarding}%</span>
              <span className="progress small">
                <i className={`progress-${person.onboarding}`} />
              </span>
            </span>
            <span>
              <Badge tone={person.status === "Active" ? "green" : "gold"}>
                {person.status}
              </Badge>
            </span>
            <span>
              <Icon name="chevron" />
            </span>
          </button>
        ))}
      </section>
      <p className="table-count">
        Showing {filtered.length} of {people.length} team members
      </p>
      {addingStaff && <PortalFormDialog type="add-staff" onClose={() => setAddingStaff(false)} />}
    </div>
  )
}

function Clients({ clients, setClients }: { clients: ClientRecord[]; setClients: Dispatch<SetStateAction<ClientRecord[]>> }) {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [editingId, setEditingId] = useState<number | "new" | null>(null)
  const [deletingId, setDeletingId] = useState<number | null>(null)
  const [actionClientId, setActionClientId] = useState<number | null>(null)
  const [query, setQuery] = useState("")
  const [form, setForm] = useState({ firstName: "", lastName: "", county: "Wayne County", city: "Detroit" })
  const selected = clients.find((client) => client.id === selectedId)
  const deleting = clients.find((client) => client.id === deletingId)
  const openCreate = () => { setForm({ firstName: "", lastName: "", county: "Wayne County", city: "Detroit" }); setEditingId("new") }
  const openEdit = (id: number) => {
    const client = clients.find((item) => item.id === id)
    if (!client) return
    setForm({ firstName: client.firstName, lastName: client.lastName, county: client.county, city: client.city })
    setEditingId(id)
  }
  const save = () => {
    if (!form.firstName.trim() || !form.lastName.trim()) return
    if (editingId === "new") {
      const id = Math.max(0, ...clients.map((client) => client.id)) + 1
      setClients((current) => [...current, { id, ...form }])
      setSelectedId(id)
    } else if (typeof editingId === "number") {
      setClients((current) => current.map((client) => client.id === editingId ? { ...client, ...form } : client))
    }
    setEditingId(null)
  }
  const filtered = clients.filter((client) => `${client.firstName} ${client.lastName} ${client.county} ${client.city}`.toLowerCase().includes(query.toLowerCase()))
  return <div className="page"><div className="page-heading"><div><h1>Clients</h1><p>Keep the client list used when staff record timesheet hours.</p></div><Button icon="plus" onClick={openCreate}>Add client</Button></div><div className="client-match-notice"><Icon name="warning" /><div><strong>7 timesheet entries have a client name that isn’t on this list yet</strong><span>Add those names as clients to keep reporting consistent.</span></div><Button variant="secondary" onClick={openCreate}>Add them as clients</Button></div><div className="client-stats"><div><strong>{clients.length}</strong><span>Saved clients</span></div><div><strong>{new Set(clients.map((client) => client.county)).size}</strong><span>Michigan counties</span></div><div><strong>{clients.filter((client) => client.county === "Wayne County").length}</strong><span>In Wayne County</span></div></div><div className="toolbar"><label className="searchbox wide"><Icon name="search" /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search clients by name, county, or city" /></label><button className="filter">All counties <Icon name="chevron" size={15} /></button></div><section className="table-card client-table"><div className="table-head"><span>CLIENT</span><span>COUNTY</span><span>CITY</span><span>UPDATED</span><span /></div>{filtered.map((client) => <div className="table-row" key={client.id}><button className="person-cell client-name-button" onClick={() => setSelectedId(client.id)}><span className="avatar">{client.firstName[0]}{client.lastName[0]}</span><span><strong>{client.firstName} {client.lastName}</strong><small>Client #{String(client.id).padStart(4, "0")}</small></span></button><span><strong>{client.county}</strong></span><span><strong>{client.city}</strong></span><span><small>March 17, 2025</small></span><span className="client-row-actions"><Button variant="icon" icon="more" onClick={() => setActionClientId(actionClientId === client.id ? null : client.id)} />{actionClientId === client.id && <span className="client-action-menu"><button onClick={() => { setSelectedId(client.id); setActionClientId(null) }}><Icon name="user" size={15} />View client</button><button onClick={() => { openEdit(client.id); setActionClientId(null) }}><Icon name="document" size={15} />Edit client</button><button className="danger" onClick={() => { setDeletingId(client.id); setActionClientId(null) }}><Icon name="trash" size={15} />Delete client</button></span>}</span></div>)}</section>
    {selected && <div className="modal-layer"><section className="client-detail-dialog"><div className="viewer-head"><div><span>CLIENT RECORD</span><strong>{selected.firstName} {selected.lastName}</strong></div><Button variant="icon" icon="close" onClick={() => setSelectedId(null)} /></div><div className="client-detail-body"><div className="avatar profile-avatar">{selected.firstName[0]}{selected.lastName[0]}</div><h2>{selected.firstName} {selected.lastName}</h2><Badge tone="green">Saved client</Badge><div className="detail-grid"><div><span>FIRST NAME</span><strong>{selected.firstName}</strong></div><div><span>LAST NAME</span><strong>{selected.lastName}</strong></div><div><span>COUNTY</span><strong>{selected.county}</strong></div><div><span>CITY</span><strong>{selected.city}</strong></div></div><div className="client-detail-actions"><Button variant="secondary" onClick={() => { setSelectedId(null); setDeletingId(selected.id) }}>Delete client</Button><Button onClick={() => { setSelectedId(null); openEdit(selected.id) }}>Edit client</Button></div></div></section></div>}
    {editingId !== null && <div className="modal-layer"><section className="client-form-dialog"><div className="viewer-head"><div><span>{editingId === "new" ? "NEW CLIENT" : "EDIT CLIENT"}</span><strong>{editingId === "new" ? "Add a client" : "Update client details"}</strong></div><Button variant="icon" icon="close" onClick={() => setEditingId(null)} /></div><div className="client-form"><label>FIRST NAME<input value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} placeholder="First name" /></label><label>LAST NAME<input value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} placeholder="Last name" /></label><label>COUNTY<select value={form.county} onChange={(e) => { const county = e.target.value; setForm({ ...form, county, city: michiganLocations[county][0] }) }}>{Object.keys(michiganLocations).map((county) => <option key={county}>{county}</option>)}</select></label><label>CITY<select value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })}>{michiganLocations[form.county].map((city) => <option key={city}>{city}</option>)}</select></label><p>City choices are based on the selected Michigan county.</p><div className="signature-actions"><Button variant="secondary" onClick={() => setEditingId(null)}>Cancel</Button><Button onClick={save}>{editingId === "new" ? "Create client" : "Save changes"}</Button></div></div></section></div>}
    {deleting && <div className="modal-layer"><section className="delete-dialog"><div className="delete-icon"><Icon name="warning" /></div><h2>Delete {deleting.firstName} {deleting.lastName}?</h2><p>This removes the client from future timesheet selectors. Existing timesheet records keep the client name that was recorded.</p><div><Button variant="secondary" onClick={() => setDeletingId(null)}>Cancel</Button><Button onClick={() => { setClients((current) => current.filter((client) => client.id !== deleting.id)); setDeletingId(null) }}>Delete client</Button></div></section></div>}
  </div>
}

const profileTabs = [
  "Overview",
  "Onboarding",
  "Trainings",
  "Timesheets",
  "Documents",
  "Pay & tax",
]

function AgreementDetail({ onBack }: { onBack: () => void }) {
  const [countersigned, setCountersigned] = useState(true)
  return <div className="page"><button className="back-link" onClick={onBack}>‹ Back to Alicia Carter</button><div className="page-heading"><div><Badge tone={countersigned ? "green" : "gold"}>{countersigned ? "Fully signed" : "Awaiting company signature"}</Badge><h1 className="detail-page-title">Independent Contractor Agreement</h1><p>Alicia Carter · Agreement version 2025.1</p></div><div className="button-pair"><Button variant="secondary" icon="download">Download PDF</Button><Button variant="secondary" icon="arrow">Copy secure link</Button>{!countersigned && <Button onClick={() => setCountersigned(true)}>Countersign</Button>}</div></div><div className="agreement-detail-layout"><section className="document-viewer agreement-document"><div className="viewer-tools"><span>Page 1 of 6</span><Button variant="ghost" icon="download">Download</Button></div><div className="agreement-paper"><div className="document-letterhead"><Brand /></div><h1>Independent Contractor Agreement</h1><p>This Independent Contractor Agreement is entered into by Village Start MIHP, LLC and Alicia Carter.</p><h2>1. Services</h2><p>The Contractor will provide community health worker and maternal infant health support services, including home visits, care coordination, documentation, and community outreach.</p><h2>2. Compensation</h2><p>Village Start will compensate the Contractor at a rate of $32.00 per hour for approved services.</p><h2>3. Confidentiality</h2><p>The Contractor will protect participant information and comply with all applicable privacy and MIHP requirements.</p><div className="agreement-signatures"><div><span>CONTRACTOR</span><strong className="signature-classic">Alicia Carter</strong><small>Signed March 14, 2025 · 10:42 AM ET</small></div><div><span>VILLAGE START MIHP, LLC</span><strong className="signature-classic">{countersigned ? "Denise Harris" : "Pending"}</strong><small>{countersigned ? "Signed March 14, 2025 · 2:16 PM ET" : "Company signature required"}</small></div></div></div></section><aside><section className="panel signature-status"><SectionTitle title="Signature status" /><div className="signature-party complete"><i><Icon name="check" /></i><div><strong>Alicia Carter</strong><span>Contractor · Signed March 14</span></div></div><div className={`signature-party ${countersigned ? "complete" : ""}`}><i>{countersigned && <Icon name="check" />}</i><div><strong>Denise Harris</strong><span>Company · {countersigned ? "Countersigned March 14" : "Signature pending"}</span></div></div>{!countersigned && <Button onClick={() => setCountersigned(true)}>Countersign agreement</Button>}</section><section className="panel link-panel"><Icon name="lock" /><div><strong>Secure signed copy</strong><p>The contractor can use this link to open or download their fully executed copy.</p></div><Button variant="secondary" icon="arrow">Copy link</Button><Button variant="ghost" icon="arrow">Resend signed copy</Button></section></aside></div></div>
}

function StaffEditDialog({ type, onClose }: { type: string; onClose: () => void }) {
  const titles: Record<string, string> = { contact: "Edit contact details", pay: "Edit pay rate", bank: "Update bank details", tax: "W-9 and tax information", upload: "Upload staff document", rename: "Rename staff document" }
  return <div className="modal-layer"><section className="staff-edit-dialog"><div className="viewer-head"><div><span>STAFF PROFILE</span><strong>{titles[type] || "Update staff record"}</strong></div><Button variant="icon" icon="close" onClick={onClose} /></div><div className="staff-edit-body">
    {type === "contact" && <div className="form-grid"><label>WORK EMAIL<input defaultValue="alicia@villagestart.org" /></label><label>PHONE<input defaultValue="(313) 555-0184" /></label><label>STREET ADDRESS<input defaultValue="4812 Oakman Blvd" /></label><label>CITY<input defaultValue="Dearborn" /></label><label>COUNTY<select defaultValue="Wayne County"><option>Wayne County</option><option>Oakland County</option></select></label><label>ZIP CODE<input defaultValue="48126" /></label></div>}
    {type === "pay" && <div className="form-grid"><label>PAY TYPE<select defaultValue="Hourly contractor"><option>Hourly contractor</option><option>Salaried employee</option></select></label><label>HOURLY RATE<input type="number" defaultValue="32.00" /></label><label>EFFECTIVE DATE<input type="date" defaultValue="2025-03-10" /></label></div>}
    {type === "bank" && <><div className="secure-note"><Icon name="lock" /><div><strong>Current account ending in 2841</strong><span>Full bank details are never displayed after saving.</span></div></div><div className="form-grid secure-form"><label>ROUTING NUMBER<input placeholder="9 digits" /></label><label>ACCOUNT NUMBER<input placeholder="Enter new account number" /></label><label>ACCOUNT TYPE<select><option>Checking</option><option>Savings</option></select></label><label>ACCOUNT HOLDER<input defaultValue="Alicia Carter" /></label></div></>}
    {type === "tax" && <div className="form-grid"><label>FEDERAL TAX CLASSIFICATION<select defaultValue="Individual / sole proprietor"><option>Individual / sole proprietor</option><option>Single-member LLC</option><option>S corporation</option></select></label><label>TIN ON FILE<input value="•••-••-4821" readOnly /></label><label>W-9 STATUS<select defaultValue="Complete"><option>Complete</option><option>Needs new form</option></select></label><label>LAST SIGNED<input value="March 13, 2025" readOnly /></label></div>}
    {type === "upload" && <><div className="upload-zone"><Icon name="upload" /><strong>Choose a PDF, Word file, or image</strong><span>Up to 20 MB</span></div><div className="form-grid"><label>DISPLAY NAME<input placeholder="Document name" /></label><label>GROUP<select><option>Onboarding</option><option>Agreement</option><option>Tax</option><option>Credentials</option></select></label></div></>}
    {type === "rename" && <><label className="dialog-field">DISPLAY NAME<input defaultValue="Professional license image" /></label><div className="original-name"><Icon name="lock" /><div><span>ORIGINAL FILE</span><strong>IMG_4028.jpeg</strong></div></div></>}
    <div className="signature-actions"><Button variant="secondary" onClick={onClose}>Cancel</Button><Button onClick={onClose}>Save changes</Button></div>
  </div></section></div>
}

function StaffProfile({ back, clients }: { back: () => void; clients: ClientRecord[] }) {
  const [tab, setTab] = useState("Overview")
  const [countersigning, setCountersigning] = useState(false)
  const [adminName, setAdminName] = useState("Denise Harris")
  const [adminAcknowledged, setAdminAcknowledged] = useState(false)
  const [adminAckError, setAdminAckError] = useState(false)
  const [combiningFiles, setCombiningFiles] = useState(false)
  const [agreementDetail, setAgreementDetail] = useState(false)
  const [staffDialog, setStaffDialog] = useState<string | null>(null)
  const [trainingDialog, setTrainingDialog] = useState(false)
  const [actionsOpen, setActionsOpen] = useState(false)
  if (agreementDetail) return <AgreementDetail onBack={() => setAgreementDetail(false)} />
  return (
    <div className="page">
      <button className="back-link" onClick={back}>
        ‹ Back to staff directory
      </button>
      <div className="profile-hero">
        <div className="avatar profile-avatar">AC</div>
        <div className="profile-main">
          <div>
            <h1>Alicia Carter</h1>
            <Badge tone="gold">Onboarding</Badge>
          </div>
          <p>Community Health Worker · Contractor</p>
          <span>
            <Icon name="briefcase" size={16} /> Dearborn / Wayne County
          </span>
        </div>
        <div className="staff-actions-wrap"><Button variant="secondary" icon="more" onClick={() => setActionsOpen(!actionsOpen)}>Actions</Button>{actionsOpen && <div className="staff-actions-menu"><button><Icon name="check" />Mark active</button><button><Icon name="clock" />Place on leave</button><button onClick={() => setTab("Trainings")}><Icon name="training" />Assign training</button><button onClick={() => setTab("Documents")}><Icon name="upload" />Upload document</button><button className="danger"><Icon name="lock" />Block portal access</button></div>}</div>
      </div>
      <div className="tabs">
        {profileTabs.map((item) => (
          <button
            className={tab === item ? "active" : ""}
            onClick={() => setTab(item)}
            key={item}
          >
            {item}
            {item === "Onboarding" && <i>3</i>}
          </button>
        ))}
      </div>
      {tab === "Overview" && (
        <div className="profile-grid">
          <div>
            <section className="panel detail-panel">
              <SectionTitle
                title="Contact details"
                action={<button className="text-link" onClick={() => setStaffDialog("contact")}>Edit</button>}
              />
              <div className="detail-grid">
                <div>
                  <span>EMAIL</span>
                  <strong>alicia@villagestart.org</strong>
                </div>
                <div>
                  <span>PHONE</span>
                  <strong>(313) 555-0184</strong>
                </div>
                <div>
                  <span>ADDRESS</span>
                  <strong>
                    4812 Oakman Blvd
                    <br />
                    Dearborn, MI 48126
                  </strong>
                </div>
                <div>
                  <span>START DATE</span>
                  <strong>March 10, 2025</strong>
                </div>
              </div>
            </section>
            <section className="panel detail-panel">
              <SectionTitle title="Current assignments" />
              <div className="assignment">
                <div className="task-icon sage">
                  <Icon name="training" />
                </div>
                <div>
                  <strong>3 trainings assigned</strong>
                  <span>Next due March 28</span>
                </div>
                <button
                  className="text-link"
                  onClick={() => setTab("Trainings")}
                >
                  View trainings
                </button>
              </div>
              <div className="assignment">
                <div className="task-icon cream">
                  <Icon name="document" />
                </div>
                <div>
                  <strong>Contractor agreement</strong>
                  <span>Signed March 14, 2025</span>
                </div>
                <Button variant="ghost" onClick={() => setAgreementDetail(true)}>Open agreement</Button>
              </div>
            </section>
          </div>
          <aside>
            <section className="panel portal-access-card">
              <div className="access-status"><Icon name="user" /><div><strong>Portal access</strong><span>Invite not yet accepted</span></div></div>
              <label>WORK EMAIL<input defaultValue="alicia@villagestart.org" /></label>
              <Button icon="arrow">Resend portal invite</Button>
              <details className="extra-access"><summary>Extra page access</summary><label><input type="checkbox" /> Company files</label><label><input type="checkbox" /> Referrals</label><label><input type="checkbox" /> Hiring</label></details>
              <Button variant="ghost" icon="lock">Block access</Button>
              <small>Invited March 14 by Denise Harris</small>
            </section>
            <section className="panel onboarding-card">
              <span className="eyebrow">ONBOARDING</span>
              <div className="ring">
                <strong>
                  4<span>/7</span>
                </strong>
                <small>steps done</small>
              </div>
              <div className="check-row done">
                <i>
                  <Icon name="check" size={14} />
                </i>
                Offer accepted
              </div>
              <div className="check-row done">
                <i>
                  <Icon name="check" size={14} />
                </i>
                Work email created
              </div>
              <div className="check-row done">
                <i>
                  <Icon name="check" size={14} />
                </i>
                W-9 on file
              </div>
              <div className="check-row">
                <i />
                Joined the portal
              </div>
              <div className="check-row">
                <i />
                Bank account on file
              </div>
              <Button variant="secondary" onClick={() => setTab("Onboarding")}>
                View full checklist
              </Button>
            </section>
          </aside>
        </div>
      )}
      {tab === "Onboarding" && (
        <SimpleTab
          title="Onboarding checklist"
          subtitle="4 of 7 steps completed"
        >
          <Checklist />
        </SimpleTab>
      )}
      {tab === "Trainings" && (
        <SimpleTab
          title="Assigned trainings"
          subtitle="Assign catalog training and monitor confirmation."
          action={<Button icon="plus" onClick={() => setTrainingDialog(true)}>Assign training</Button>}
        >
          <AssignedTrainingRows />
        </SimpleTab>
      )}
      {tab === "Timesheets" && <StaffTimesheetHistory clients={clients} />}
      {tab === "Documents" && (
        <SimpleTab
          title="Staff documents"
          subtitle="Select PDFs or images from this profile and combine them into one PDF."
          action={<div className="button-pair"><Button variant="secondary" icon="download" onClick={() => setCombiningFiles(true)}>Combine selected as PDF</Button><Button icon="upload" onClick={() => setStaffDialog("upload")}>Upload document</Button></div>}
        >
          <FileRows personal onRename={() => setStaffDialog("rename")} />
        </SimpleTab>
      )}
      {tab === "Pay & tax" && (
        <div className="profile-grid">
          <section className="panel detail-panel">
            <SectionTitle
              title="Contractor pay"
              action={<button className="text-link" onClick={() => setStaffDialog("pay")}>Edit</button>}
            />
            <div className="detail-grid">
              <div>
                <span>PAY TYPE</span>
                <strong>Hourly contractor</strong>
              </div>
              <div>
                <span>RATE</span>
                <strong>$32.00 / hour</strong>
              </div>
              <div>
                <span>TAX FORM</span>
                <strong>W-9 · Individual / sole proprietor</strong>
              </div>
              <div>
                <span>AGREEMENT</span>
                <strong>Fully signed March 14, 2025</strong>
              </div>
            </div>
            <div className="record-actions">
              <Button variant="secondary" icon="document">Open signed W-9</Button>
              <Button variant="secondary" icon="document">Open signed agreement</Button>
              <Button variant="ghost" icon="arrow" onClick={() => setStaffDialog("tax")}>Send new W-9</Button>
              <Button variant="ghost" icon="arrow" onClick={() => setAgreementDetail(true)}>Send new agreement</Button>
              <Button variant="primary" icon="document" onClick={() => setCountersigning(true)}>Countersign agreement</Button>
            </div>
          </section>
          <section className="panel detail-panel">
            <SectionTitle
              title="Bank details"
              action={<button className="text-link" onClick={() => setStaffDialog("bank")}>Update securely</button>}
            />
            <div className="secure-note">
              <Icon name="lock" />
              <div>
                <strong>Bank account ending in 2841</strong>
                <span>Chase · Checking</span>
              </div>
            </div>
            <p className="muted">
              Sensitive banking information is encrypted and only visible to
              owners.
            </p>
          </section>
        </div>
      )}
      {countersigning && <div className="modal-layer"><section className="signature-dialog"><div className="viewer-head"><div><span>COMPANY COUNTERSIGNATURE</span><strong>Independent Contractor Agreement · Alicia Carter</strong></div><Button variant="icon" icon="close" onClick={() => setCountersigning(false)} /></div><div className="signature-dialog-body"><div className="info-callout"><Icon name="check" /><div><strong>Contractor signed first</strong><p>Alicia Carter signed on March 14, 2025 at 10:42 AM ET.</p></div></div><label>YOUR LEGAL NAME<input value={adminName} onChange={(e) => setAdminName(e.target.value)} /></label><SignatureStylePicker name={adminName} /><label className={`signature-check ${adminAckError ? "has-error" : ""}`}><input type="checkbox" checked={adminAcknowledged} onChange={(e) => { setAdminAcknowledged(e.target.checked); if (e.target.checked) setAdminAckError(false) }} /> I am authorized to sign for Village Start MIHP, LLC and intend this selection to be my electronic signature.</label>{adminAckError && <div className="ack-error" role="alert"><Icon name="warning" size={15} /><span>You must check the acknowledgement box before countersigning.</span></div>}<div className="signature-actions"><Button variant="secondary" onClick={() => setCountersigning(false)}>Cancel</Button><Button onClick={() => { if (!adminAcknowledged) { setAdminAckError(true); return } setCountersigning(false) }}>Countersign agreement</Button></div></div></section></div>}
      {combiningFiles && <CombineFilesDialog context="Alicia Carter documents" onClose={() => setCombiningFiles(false)} />}
      {staffDialog && <StaffEditDialog type={staffDialog} onClose={() => setStaffDialog(null)} />}
      {trainingDialog && <PortalFormDialog type="assign-training" onClose={() => setTrainingDialog(false)} />}
    </div>
  )
}

function SimpleTab({
  title,
  subtitle,
  action,
  children,
}: {
  title: string
  subtitle: string
  action?: ReactNode
  children: ReactNode
}) {
  return (
    <section className="panel tab-content">
      <SectionTitle title={title} subtitle={subtitle} action={action} />
      {children}
    </section>
  )
}
function Checklist() {
  return (
    <div className="checklist">
      {[
        "Offer accepted|Complete",
        "Work email created|Complete",
        "Joined the portal|Invite sent",
        "W-9 on file|Complete",
        "Bank account on file|Waiting on staff",
        "Contractor agreement signed|Complete",
        "MIHP training assigned|2 of 3 confirmed",
        "Professional license verified|Not required for this role",
        "BLS / CPR current|Optional · registered nurses only",
      ].map((x) => {
        const [a, b] = x.split("|")
        return (
          <div key={a}>
            <i className={b === "Complete" ? "complete" : ""}>
              {b === "Complete" && <Icon name="check" size={14} />}
            </i>
            <strong>{a}</strong>
            <span>{b}</span>
            <Button variant="icon" icon="more" />
          </div>
        )
      })}
    </div>
  )
}

function StaffTimesheetHistory({ clients }: { clients: ClientRecord[] }) {
  const [selectedPeriod, setSelectedPeriod] = useState("March 1–15, 2025")
  const [creating, setCreating] = useState(false)
  const [entries, setEntries] = useState([
    { date: "Mar 3", client: "Nicole Sanders", work: "Home visit · Wayne County", hours: "7.5" },
    { date: "Mar 4", client: "Danielle Morris", work: "Care coordination and documentation", hours: "6.0" },
  ])
  const periods = [
    { period: "March 1–15, 2025", hours: "42.5", amount: "$1,360.00", status: "Submitted", date: "Submitted Mar 16", created: "Mar 3, 2025 at 8:14 AM", updated: "Mar 16, 2025 at 6:42 PM" },
    { period: "February 16–28, 2025", hours: "39.5", amount: "$1,264.00", status: "Paid", date: "Paid Mar 5", created: "Feb 17, 2025 at 7:55 AM", updated: "Mar 5, 2025 at 2:18 PM" },
    { period: "February 1–15, 2025", hours: "41.0", amount: "$1,312.00", status: "Approved", date: "Approved Feb 18", created: "Feb 3, 2025 at 9:06 AM", updated: "Feb 18, 2025 at 11:30 AM" },
    { period: "January 16–31, 2025", hours: "37.0", amount: "$1,184.00", status: "Sent back", date: "Correction requested Feb 2", created: "Jan 17, 2025 at 8:31 AM", updated: "Feb 2, 2025 at 10:12 AM" },
  ]
  const active = periods.find((period) => period.period === selectedPeriod) || periods[0]
  return <><div className="timesheet-profile-layout"><section className="panel timesheet-history"><SectionTitle title="Timesheet history" subtitle="Every pay period for Alicia Carter." action={<Button icon="plus" onClick={() => setCreating(true)}>Create timesheet</Button>} /><div className="history-summary"><div><span>YEAR TO DATE HOURS</span><strong>286.5</strong></div><div><span>YEAR TO DATE PAY</span><strong>$9,168.00</strong></div><div><span>HOURLY RATE</span><strong>$32.00</strong></div></div><div className="period-list">{periods.map((period) => <button className={selectedPeriod === period.period ? "active" : ""} onClick={() => setSelectedPeriod(period.period)} key={period.period}><div><strong>{period.period}</strong><span>{period.date} · Updated {period.updated.split(" at ")[0]}</span></div><div><strong>{period.hours} hrs</strong><span>{period.amount}</span></div><Badge tone={period.status === "Paid" || period.status === "Approved" ? "green" : period.status === "Sent back" ? "red" : "gold"}>{period.status}</Badge><Icon name="chevron" size={16} /></button>)}</div></section><aside className="panel period-detail"><div className="period-detail-head"><div><span>SELECTED PAY PERIOD</span><h2>{active.period}</h2></div><Badge tone={active.status === "Paid" || active.status === "Approved" ? "green" : active.status === "Sent back" ? "red" : "gold"}>{active.status}</Badge></div><div className="timesheet-audit"><div><span>CREATED</span><strong>{active.created}</strong></div><div><span>LAST UPDATED</span><strong>{active.updated}</strong></div></div><div className="period-totals"><div><span>HOURS</span><strong>{active.hours}</strong></div><div><span>GROSS PAY</span><strong>{active.amount}</strong></div></div><div className="detail-entry"><span>Nicole S. · Home visits</span><strong>29.5 hrs</strong></div><div className="detail-entry"><span>Danielle M. · Care coordination</span><strong>8.0 hrs</strong></div><div className="detail-entry"><span>Community outreach · No client</span><strong>5.0 hrs</strong></div><div className="reviewer-note"><span>STAFF NOTE · OPTIONAL</span><p>Two visits were rescheduled because of weather. I completed follow-up calls and added the visit notes to the family records.</p></div><div className="period-actions"><Button variant="secondary">Open full timesheet</Button>{active.status === "Submitted" && <><Button variant="ghost">Send back</Button><Button>Approve</Button></>}</div></aside></div>
    {creating && <div className="modal-layer"><section className="admin-timesheet-dialog"><div className="viewer-head"><div><span>ADMINISTRATOR ENTRY</span><strong>Create timesheet for Alicia Carter</strong></div><Button variant="icon" icon="close" onClick={() => setCreating(false)} /></div><div className="admin-timesheet-body"><div className="admin-entry-note"><Icon name="user" /><div><strong>You’re entering time on behalf of Alicia Carter</strong><span>The audit history will show that Denise Harris created these entries.</span></div></div><div className="timesheet-form-head"><label>PAY PERIOD<select defaultValue="March 16–31, 2025"><option>March 16–31, 2025</option><option>April 1–15, 2025</option></select></label><div><span>HOURLY RATE</span><strong>$32.00</strong></div></div><div className="entry-editor-head"><span>DATE</span><span>CLIENT</span><span>WORK PERFORMED</span><span>HOURS</span><span /></div>{entries.map((entry, index) => <div className="entry-editor" key={`${entry.date}-${index}`}><input value={entry.date} onChange={(e) => setEntries((current) => current.map((item, i) => i === index ? { ...item, date: e.target.value } : item))} /><select value={entry.client} onChange={(e) => setEntries((current) => current.map((item, i) => i === index ? { ...item, client: e.target.value } : item))}><option value="">Select client</option><option value="No client">No client / internal work</option>{clients.map((client) => <option key={client.id} value={`${client.firstName} ${client.lastName}`}>{client.firstName} {client.lastName} · {client.city}</option>)}</select><input value={entry.work} onChange={(e) => setEntries((current) => current.map((item, i) => i === index ? { ...item, work: e.target.value } : item))} /><input value={entry.hours} onChange={(e) => setEntries((current) => current.map((item, i) => i === index ? { ...item, hours: e.target.value } : item))} /><Button variant="icon" icon="close" onClick={() => setEntries((current) => current.filter((_, i) => i !== index))} /></div>)}<Button variant="ghost" icon="plus" onClick={() => setEntries((current) => [...current, { date: "Mar 5", client: "", work: "", hours: "" }])}>Add another entry</Button><div className="admin-timesheet-total"><span>TOTAL ENTERED</span><strong>{entries.reduce((sum, entry) => sum + (Number(entry.hours) || 0), 0).toFixed(1)} hours</strong></div></div><footer className="admin-timesheet-footer"><span>Saving does not approve the timesheet.</span><div><Button variant="secondary" onClick={() => setCreating(false)}>Cancel</Button><Button variant="secondary" onClick={() => setCreating(false)}>Save draft</Button><Button onClick={() => setCreating(false)}>Save and submit</Button></div></footer></section></div>}
  </>
}

function AssignedTrainingRows() {
  const [removed, setRemoved] = useState(false)
  return (
    <div className="list-rows">
      {!removed && (
        <div className="list-row assignment-row">
          <div className="file-icon"><Icon name="training" /></div>
          <div className="grow"><strong>Infant Safe Sleep Practices</strong><span>Certificate uploaded · waiting for admin confirmation</span></div>
          <Badge tone="gold">To confirm</Badge>
          <Button variant="ghost" onClick={() => setRemoved(true)}>Take back</Button>
        </div>
      )}
      <div className="list-row assignment-row">
        <div className="file-icon"><Icon name="training" /></div>
        <div className="grow"><strong>Mandated Reporter Training</strong><span>Assigned · due April 4</span></div>
        <Badge tone="sage">In progress</Badge>
        <Button variant="ghost">Take back</Button>
      </div>
      <div className="list-row assignment-row locked">
        <div className="file-icon"><Icon name="check" /></div>
        <div className="grow"><strong>HIPAA Privacy & Security</strong><span>Confirmed by Denise Harris on March 12</span></div>
        <Badge tone="green">Complete</Badge>
        <span className="locked-label"><Icon name="lock" size={13} /> Cannot take back</span>
      </div>
      <div className="rule-note"><Icon name="warning" size={16} /><span>MIHP training assigned completes only when every assigned training is confirmed. Assigning another training reopens this onboarding step.</span></div>
    </div>
  )
}

const trainingData = [
  {
    title: "Infant Safe Sleep Practices",
    provider: "Michigan Department of Health",
    assigned: "6 staff",
    due: "Mar 28",
    status: "2 to review",
    type: "PDF",
  },
  {
    title: "Mandated Reporter Training",
    provider: "Michigan DHHS",
    assigned: "10 staff",
    due: "Apr 4",
    status: "8 complete",
    type: "Word",
  },
  {
    title: "MIHP Cultural Humility",
    provider: "Village Start MIHP",
    assigned: "3 staff",
    due: "Apr 12",
    status: "1 complete",
    type: "PDF",
  },
  {
    title: "HIPAA Privacy & Security",
    provider: "HHS Learning Portal",
    assigned: "12 staff",
    due: "May 1",
    status: "12 complete",
    type: "Outside site",
  },
]
function TrainingRows({ compact = false }: { compact?: boolean }) {
  return (
    <div className="list-rows">
      {trainingData.slice(0, compact ? 3 : 4).map((t, idx) => (
        <div className="list-row" key={t.title}>
          <div className="file-icon">
            <Icon name="training" />
          </div>
          <div className="grow">
            <strong>{t.title}</strong>
            <span>
              {t.provider} · {t.type}
            </span>
          </div>
          <div>
            <span className="meta-label">DUE</span>
            <strong>{t.due}</strong>
          </div>
          <div>
            <Badge tone={idx === 0 ? "gold" : idx === 3 ? "green" : "sage"}>
              {t.status}
            </Badge>
          </div>
          <Button variant="icon" icon="more" />
        </div>
      ))}
    </div>
  )
}

function Trainings() {
  const [catalog, setCatalog] = useState("Assignments")
  const [viewer, setViewer] = useState<string | null>(null)
  const [dialog, setDialog] = useState<string | null>(null)
  return (
    <div className="page">
      <div className="page-heading">
        <div>
          <h1>Trainings</h1>
          <p>
            Assign learning, review certificates, and keep the team compliant.
          </p>
        </div>
        <div className="button-pair"><Button variant="secondary" icon="plus" onClick={() => setDialog("assign-training")}>Assign training</Button><Button icon="plus" onClick={() => setDialog("create-training")}>Create training</Button></div>
      </div>
      <div className="tabs page-tabs">
        {["Assignments", "Training catalog", "Certificates to review"].map(
          (x) => (
            <button
              key={x}
              className={catalog === x ? "active" : ""}
              onClick={() => setCatalog(x)}
            >
              {x}
              {x === "Certificates to review" && <i>2</i>}
            </button>
          ),
        )}
      </div>
      {catalog === "Certificates to review" ? (
        <div className={`workbench ${viewer ? "viewer-open" : ""}`}>
          <section className="panel tab-content">
            <SectionTitle
              title="Certificates awaiting review"
              subtitle="Confirm each certificate before the training is marked complete."
            />
            <Certificate name="Janelle Brooks" training="Infant Safe Sleep Practices" date="Submitted 42 minutes ago" onView={() => setViewer("Janelle Brooks")} />
            <Certificate name="Marcus Lee" training="Mandated Reporter Training" date="Submitted yesterday" onView={() => setViewer("Marcus Lee")} />
          </section>
          {viewer && <DocumentViewer title={`${viewer} · Safe Sleep Certificate`} onClose={() => setViewer(null)} />}
        </div>
      ) : (
        <section className="panel tab-content">
          <div className="toolbar inset">
            <label className="searchbox wide">
              <Icon name="search" />
              <input placeholder="Find a training" />
            </label>
            <button className="filter">
              All status <Icon name="chevron" size={15} />
            </button>
          </div>
          <TrainingRows />
        </section>
      )}
      {dialog && <PortalFormDialog type={dialog} onClose={() => setDialog(null)} />}
    </div>
  )
}
function Certificate({
  name,
  training,
  date,
  onView,
}: {
  name: string
  training: string
  date: string
  onView: () => void
}) {
  return (
    <div className="certificate">
      <div className="file-preview">
        <Icon name="document" size={25} />
        <span>PDF</span>
      </div>
      <div className="grow">
        <strong>{training}</strong>
        <span>
          {name} · {date}
        </span>
        <small>Certificate required · Not complete until approved</small>
      </div>
      <Button variant="secondary" onClick={onView}>View certificate</Button>
      <Button>Confirm completion</Button>
    </div>
  )
}

function DocumentViewer({ title, onClose }: { title: string; onClose: () => void }) {
  return <aside className="document-viewer">
    <div className="viewer-head"><div><span>CERTIFICATE</span><strong>{title}</strong></div><Button variant="icon" icon="close" onClick={onClose} /></div>
    <div className="viewer-tools"><span>Page 1 of 1</span><Button variant="ghost" icon="download">Download</Button></div>
    <div className="paper"><div className="certificate-seal"><Icon name="training" size={28} /></div><span>CERTIFICATE OF COMPLETION</span><h2>Infant Safe Sleep Practices</h2><p>This certifies that</p><h3>{title.split(" · ")[0]}</h3><p>completed Michigan’s infant safe sleep learning module on March 17, 2025.</p><div className="signature-line">Michigan Department of Health and Human Services</div></div>
  </aside>
}

const fileData = [
  [
    "2025 MIHP Policies & Procedures",
    "Original: VS_MIHP_Policies_2025_FINAL.pdf · 4.8 MB",
    "Operations",
    "Updated Mar 12",
  ],
  ["Contractor Handbook", "Original: contractor_handbook_v3.pdf · 2.1 MB", "People & HR", "Updated Mar 4"],
  [
    "Home Visit Safety Checklist",
    "Original: HomeVisitSafetyChecklist.docx · 128 KB",
    "Field resources",
    "Updated Feb 26",
  ],
  [
    "March Community Partner List",
    "Original: March_Community_Partners.xlsx · 84 KB",
    "Referrals",
    "Updated Feb 20",
  ],
  [
    "Eastside Resource Fair Photo",
    "Original: IMG_2841.jpg · 3.2 MB",
    "Field resources",
    "Updated Feb 18",
  ],
]
function FileRows({ personal = false, onRename, displayNames = {}, query = "" }: { personal?: boolean; onRename?: (file: string[]) => void; displayNames?: Record<string, string>; query?: string }) {
  const sourceRows = personal
    ? [
        ["Signed contractor agreement", "Original: Alicia_Carter_Agreement_signed.pdf · 1.2 MB", "Agreement", "Mar 14"],
        ["W-9 tax form", "Original: W9_Alicia_Carter.pdf · 840 KB", "Tax", "Mar 13"],
        [
          "Background check authorization",
          "Original: background_auth_ac.pdf · 520 KB",
          "Onboarding",
          "Mar 11",
        ],
        ["Professional license image", "Original: IMG_4028.jpeg · 2.4 MB", "Credentials", "Mar 10"],
      ]
    : fileData
  const rows = sourceRows.filter((f) => `${displayNames[f[1]] || f[0]} ${f[1]}`.toLowerCase().includes(query.toLowerCase()))
  return (
    <div className="list-rows">
      {rows.map((f) => (
        <div className="list-row selectable" key={f[0]}>
          <input type="checkbox" aria-label={`Select ${f[0]}`} />
          <div className="file-icon">
            <Icon name="document" />
          </div>
          <div className="grow">
            <strong>{displayNames[f[1]] || f[0]}</strong>
            <span>{f[1]}</span>
          </div>
          <div>
            <span className="meta-label">GROUP</span>
            <strong>{f[2]}</strong>
          </div>
          <div>
            <span className="meta-label">MODIFIED</span>
            <strong>{f[3]}</strong>
          </div>
          {onRename ? <Button variant="ghost" onClick={() => onRename([displayNames[f[1]] || f[0], ...f.slice(1)])}>Rename</Button> : <Button variant="icon" icon="more" />}
        </div>
      ))}
    </div>
  )
}

function CombineFilesDialog({ context, onClose }: { context: string; onClose: () => void }) {
  const [files, setFiles] = useState([
    { id: 1, name: "Signed contractor agreement", original: "Alicia_Carter_Agreement_signed.pdf", type: "PDF", pages: 4 },
    { id: 2, name: "Professional license image", original: "IMG_4028.jpeg", type: "Image", pages: 1 },
    { id: 3, name: "W-9 tax form", original: "W9_Alicia_Carter.pdf", type: "PDF", pages: 1 },
  ])
  const [selected, setSelected] = useState(1)
  const [outputName, setOutputName] = useState("Alicia Carter — complete document packet")
  const [draggedId, setDraggedId] = useState<number | null>(null)
  const move = (index: number, direction: -1 | 1) => {
    const nextIndex = index + direction
    if (nextIndex < 0 || nextIndex >= files.length) return
    const next = [...files]
    ;[next[index], next[nextIndex]] = [next[nextIndex], next[index]]
    setFiles(next)
  }
  const remove = (id: number) => {
    const next = files.filter((file) => file.id !== id)
    setFiles(next)
    if (selected === id && next[0]) setSelected(next[0].id)
  }
  const addFile = () => {
    const id = Math.max(0, ...files.map((file) => file.id)) + 1
    setFiles([...files, { id, name: "Home visit authorization", original: "home_visit_auth.png", type: "Image", pages: 1 }])
    setSelected(id)
  }
  const dropAt = (targetId: number) => {
    if (draggedId === null || draggedId === targetId) return
    const fromIndex = files.findIndex((file) => file.id === draggedId)
    const targetIndex = files.findIndex((file) => file.id === targetId)
    if (fromIndex < 0 || targetIndex < 0) return
    const next = [...files]
    const [dragged] = next.splice(fromIndex, 1)
    next.splice(targetIndex, 0, dragged)
    setFiles(next)
    setSelected(dragged.id)
    setDraggedId(null)
  }
  const active = files.find((file) => file.id === selected) || files[0]
  const totalPages = files.reduce((sum, file) => sum + file.pages, 0)
  return <div className="modal-layer"><section className="combine-dialog"><div className="viewer-head"><div><span>COMBINE AS ONE PDF</span><strong>{context}</strong></div><Button variant="icon" icon="close" onClick={onClose} /></div><div className="combine-layout"><div className="combine-order"><div className="combine-heading"><div><h2>Arrange files</h2><p>Drag files into any position, or use Move up and Move down. Position 1 will be at the top of the PDF.</p></div><Button variant="secondary" icon="plus" onClick={addFile}>Add files</Button></div><div className="ordered-files">{files.map((file, index) => <article className={`${selected === file.id ? "selected" : ""} ${draggedId === file.id ? "dragging" : ""}`} key={file.id} draggable onDragStart={(e) => { setDraggedId(file.id); e.dataTransfer.effectAllowed = "move" }} onDragEnd={() => setDraggedId(null)} onDragOver={(e) => { e.preventDefault(); e.dataTransfer.dropEffect = "move" }} onDrop={(e) => { e.preventDefault(); dropAt(file.id) }} onClick={() => setSelected(file.id)}><span className="drag-handle" title="Drag to rearrange"><Icon name="more" size={17} /></span><span className="order-number">{index + 1}</span><div className={`merge-thumb ${file.type === "Image" ? "image" : ""}`}><Icon name={file.type === "Image" ? "files" : "document"} /></div><div className="grow"><strong>{file.name}</strong><span>{file.original} · {file.pages} {file.pages === 1 ? "page" : "pages"}</span>{index === 0 && <Badge tone="gold">Top of PDF</Badge>}</div><div className="reorder-buttons"><button onClick={(e) => { e.stopPropagation(); move(index, -1) }} disabled={index === 0}>Move up</button><button onClick={(e) => { e.stopPropagation(); move(index, 1) }} disabled={index === files.length - 1}>Move down</button></div><Button variant="icon" icon="close" onClick={() => remove(file.id)} /></article>)}</div></div><aside className="merge-preview"><div className="merge-preview-head"><span>PREVIEW</span><strong>{active?.name}</strong></div><div className={`merge-page ${active?.type === "Image" ? "image" : ""}`}><Icon name={active?.type === "Image" ? "files" : "document"} size={34} /><strong>{active?.type === "Image" ? "Image fills this PDF page" : active?.name}</strong><span>Position {files.findIndex((file) => file.id === active?.id) + 1} · Page 1 of {active?.pages}</span></div><small>Click a file in the list to preview it.</small></aside></div><footer className="combine-footer"><label>PDF FILE NAME<input value={outputName} onChange={(e) => setOutputName(e.target.value.replace(/\.pdf$/i, ""))} /><span>.pdf</span></label><div><span>{files.length} files · {totalPages} total pages</span><Button variant="secondary" onClick={onClose}>Cancel</Button><Button icon="download" onClick={onClose}>Combine and download</Button></div></footer></section></div>
}

function CompanyFiles() {
  const [uploading, setUploading] = useState(false)
  const [renaming, setRenaming] = useState<string[] | null>(null)
  const [displayName, setDisplayName] = useState("")
  const [displayNames, setDisplayNames] = useState<Record<string, string>>({})
  const [query, setQuery] = useState("")
  const [combiningFiles, setCombiningFiles] = useState(false)
  return (
    <div className="page">
      <div className="page-heading">
        <div>
          <h1>Company files</h1>
          <p>One secure home for policies, forms, and team resources.</p>
        </div>
        <Button icon="upload" onClick={() => setUploading(true)}>Upload files</Button>
      </div>
      <div className="folder-grid">
        {[
          "Operations|18 files",
          "People & HR|12 files",
          "Field resources|24 files",
          "Referrals|9 files",
        ].map((x) => {
          const [a, b] = x.split("|")
          return (
            <div className="folder" key={a}>
              <Icon name="files" size={25} />
              <div>
                <strong>{a}</strong>
                <span>{b}</span>
              </div>
              <Button variant="icon" icon="more" />
            </div>
          )
        })}
      </div>
      <section className="panel tab-content">
        <SectionTitle
          title="All files"
          action={
            <div className="button-pair">
              <Button variant="secondary" icon="download" onClick={() => setCombiningFiles(true)}>
                Combine selected as PDF
              </Button>
              <Button variant="secondary" icon="plus">
                New group
              </Button>
            </div>
          }
        />
        <div className="toolbar inset">
          <label className="searchbox wide">
            <Icon name="search" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search display or original filename" />
          </label>
          <button className="filter">
            All groups <Icon name="chevron" size={15} />
          </button>
        </div>
        <FileRows query={query} displayNames={displayNames} onRename={(file) => { setRenaming(file); setDisplayName(file[0]) }} />
      </section>
      {uploading && <div className="modal-layer"><section className="upload-dialog"><div className="viewer-head"><div><span>ADD COMPANY FILE</span><strong>Review before saving</strong></div><Button variant="icon" icon="close" onClick={() => setUploading(false)} /></div><div className="upload-layout"><div className="image-preview"><Icon name="document" size={38} /><strong>Community outreach flyer</strong><span>Preview of page 1</span></div><div className="upload-fields"><label>DISPLAY NAME<input defaultValue="Community Outreach Flyer — Spring 2025" /></label><label>ORIGINAL FILE<input value="VS_outreach_flyer_FINAL.pdf" readOnly /></label><label>GROUP<select defaultValue="Field resources"><option>Field resources</option><option>Operations</option><option>People & HR</option></select></label><p>The display name can change later. The original uploaded filename is always preserved.</p><div><Button variant="secondary" onClick={() => setUploading(false)}>Cancel</Button><Button onClick={() => setUploading(false)}>Save file</Button></div></div></div></section></div>}
      {renaming && <div className="modal-layer"><section className="rename-dialog"><div className="viewer-head"><div><span>EDIT SAVED FILE</span><strong>Rename display name</strong></div><Button variant="icon" icon="close" onClick={() => setRenaming(null)} /></div><div className="rename-body"><label>DISPLAY NAME — NO FILE EXTENSION<input value={displayName} onChange={(e) => setDisplayName(e.target.value.replace(/\.[^/.]+$/, ""))} /></label><div className="original-name"><Icon name="lock" size={15} /><div><span>ORIGINAL UPLOADED FILENAME</span><strong>{renaming[1].replace("Original: ", "").split(" · ")[0]}</strong></div></div><p>The original filename and extension are permanent. Search finds this file using either name.</p><div className="signature-actions"><Button variant="secondary" onClick={() => setRenaming(null)}>Cancel</Button><Button onClick={() => { setDisplayNames((current) => ({ ...current, [renaming[1]]: displayName })); setRenaming(null) }}>Save display name</Button></div></div></section></div>}
      {combiningFiles && <CombineFilesDialog context="Company files" onClose={() => setCombiningFiles(false)} />}
    </div>
  )
}

function StaffHome({ navigate }: { navigate: (v: string) => void }) {
  return (
    <div className="page">
      <div className="welcome">
        <div>
          <span className="eyebrow">MONDAY, MARCH 17</span>
          <h1>Good morning, Denise.</h1>
          <p>Thank you for supporting Michigan families today.</p>
        </div>
        <Button icon="plus" onClick={() => navigate("Timesheets")}>
          Add hours
        </Button>
      </div>
      <div className="staff-summary">
        <article>
          <div className="task-icon sage">
            <Icon name="clock" />
          </div>
          <div>
            <span>CURRENT PAY PERIOD</span>
            <strong>42.5 hours</strong>
            <small>March 1–15 · Draft</small>
          </div>
          <button className="text-link" onClick={() => navigate("Timesheets")}>
            Open timesheet <Icon name="arrow" size={15} />
          </button>
        </article>
        <article>
          <div className="task-icon gold">
            <Icon name="training" />
          </div>
          <div>
            <span>MY TRAININGS</span>
            <strong>2 due soon</strong>
            <small>Next due March 28</small>
          </div>
          <button
            className="text-link"
            onClick={() => navigate("My trainings")}
          >
            View assignments <Icon name="arrow" size={15} />
          </button>
        </article>
      </div>
      <section className="panel tab-content">
        <SectionTitle
          title="Your week"
          subtitle="A simple view of what’s ahead."
        />
        <div className="staff-task">
          <div className="date">
            <strong>18</strong>
            <span>MAR</span>
          </div>
          <div>
            <strong>Team case review</strong>
            <span>10:00 AM · Virtual</span>
          </div>
          <Badge>Tomorrow</Badge>
        </div>
        <div className="staff-task">
          <div className="date">
            <strong>21</strong>
            <span>MAR</span>
          </div>
          <div>
            <strong>Timesheet due</strong>
            <span>Submit March 1–15 hours</span>
          </div>
          <Badge tone="gold">4 days</Badge>
        </div>
      </section>
    </div>
  )
}

function Timesheets({ clients }: { clients: ClientRecord[] }) {
  const [submitted, setSubmitted] = useState(false)
  const [notes, setNotes] = useState("")
  const [addingEntry, setAddingEntry] = useState(false)
  const staffPeriods = [
    { period: "March 1–15, 2025", hours: "42.5", status: submitted ? "Submitted" : "Draft", amount: "", created: "Mar 3, 2025", updated: submitted ? "Mar 17, 2025 · just now" : "Mar 17, 2025 · 9:42 AM" },
    { period: "February 16–28, 2025", hours: "39.5", status: "Paid", amount: "$1,264.00", created: "Feb 17, 2025", updated: "Mar 5, 2025 · 2:18 PM" },
    { period: "February 1–15, 2025", hours: "41.0", status: "Approved", amount: "$1,312.00", created: "Feb 3, 2025", updated: "Feb 18, 2025 · 11:30 AM" },
    { period: "January 16–31, 2025", hours: "37.0", status: "Sent back", amount: "", created: "Jan 17, 2025", updated: "Feb 2, 2025 · 10:12 AM" },
  ]
  return (
    <div className="page">
      <div className="page-heading">
        <div>
          <h1>Timesheets</h1>
          <p>Record your hours and submit them for approval.</p>
        </div>
        <Button icon="plus" onClick={() => setAddingEntry(true)}>Add time entry</Button>
      </div>
      <section className="panel timesheet-card">
        <div className="pay-period">
          <button>‹</button>
          <div>
            <span>PAY PERIOD</span>
            <h2>March 1–15, 2025</h2>
            <p>
              {submitted ? "Submitted for approval" : "Draft · Due March 21"}
            </p>
            <small className="current-timesheet-audit">Created Mar 3, 2025 · Last updated {submitted ? "just now" : "today at 9:42 AM"}</small>
          </div>
          <button>›</button>
        </div>
        <div className="hours-total">
          <span>TOTAL HOURS</span>
          <strong>42.5</strong>
        </div>
        <div className="timesheet-head">
          <span>DATE</span>
          <span>CLIENT</span>
          <span>WORK</span>
          <span>HOURS</span>
          <span />
        </div>
        {[
          ["Mon, Mar 3", "Nicole S.", "Home visit · Wayne County", "7.5"],
          ["Tue, Mar 4", "Danielle M.", "Home visit · Oakland County", "8.0"],
          ["Wed, Mar 5", "Nicole S.", "Documentation & care coordination", "7.0"],
          ["Thu, Mar 6", "Elaine T.", "Home visit · Wayne County", "8.0"],
          ["Fri, Mar 7", "No client", "Team meeting & outreach", "6.0"],
          ["Mon, Mar 10", "Danielle M.", "Home visit · Wayne County", "6.0"],
        ].map((r) => (
          <div className="timesheet-row" key={r[0]}>
            <strong>{r[0]}</strong>
            <span>{r[1]}</span>
            <span>{r[2]}</span>
            <strong>{r[3]}</strong>
            <Button variant="icon" icon="more" />
          </div>
        ))}
        <div className="timesheet-notes">
          <label htmlFor="staff-timesheet-notes">
            Notes <span>Optional</span>
          </label>
          <p>Share visit follow-up, scheduling context, or anything else the company should know about this pay period.</p>
          <textarea id="staff-timesheet-notes" value={notes} onChange={(e) => setNotes(e.target.value)} disabled={submitted} maxLength={1000} placeholder="Add a note for the administrator reviewing your timesheet…" />
          <small>{notes.length} / 1,000</small>
        </div>
        <div className="submit-bar">
          <div>
            <Icon name="warning" />
            <span>
              Review your hours before submitting. You won’t be able to edit
              them afterward.
            </span>
          </div>
          <Button onClick={() => setSubmitted(true)}>
            {submitted ? "Submitted" : "Submit timesheet"}
          </Button>
        </div>
      </section>
      <section className="panel staff-timesheet-history">
        <SectionTitle title="My submitted timesheets" subtitle="Track review status and see the amount after an administrator approves it." />
        <div className="staff-history-head"><span>PAY PERIOD</span><span>HOURS</span><span>STATUS</span><span>AMOUNT</span><span>RECORD ACTIVITY</span><span /></div>
        {staffPeriods.map((period) => {
          const amountVisible = period.status === "Approved" || period.status === "Paid"
          return <button className="staff-history-row" key={period.period}><span><strong>{period.period}</strong><small>Created {period.created}</small></span><strong>{period.hours}</strong><Badge tone={period.status === "Approved" || period.status === "Paid" ? "green" : period.status === "Sent back" ? "red" : period.status === "Draft" ? "gray" : "gold"}>{period.status}</Badge><span className={amountVisible ? "approved-amount" : "pending-amount"}>{amountVisible ? period.amount : "Available after approval"}</span><span><small>Last updated</small><strong>{period.updated}</strong></span><Icon name="chevron" size={16} /></button>
        })}
        <div className="amount-note"><Icon name="lock" size={14} /><span>Timesheet amounts are calculated and shown to you only after an administrator approves the timesheet.</span></div>
      </section>
      {addingEntry && <div className="modal-layer"><section className="time-entry-dialog"><div className="viewer-head"><div><span>NEW TIME ENTRY</span><strong>Add hours to a timesheet</strong></div><Button variant="icon" icon="close" onClick={() => setAddingEntry(false)} /></div><div className="time-entry-form"><label>PAY PERIOD<select defaultValue="March 1–15, 2025"><option>March 1–15, 2025</option><option>March 16–31, 2025</option></select></label><label>DATE<input type="date" defaultValue="2025-03-11" /></label><label>CLIENT<select defaultValue=""><option value="" disabled>Select a saved client</option><option value="not-listed">Client not on the list</option><option value="none">No client / internal work</option>{clients.map((client) => <option key={client.id} value={client.id}>{client.firstName} {client.lastName} · {client.city}</option>)}</select><small>Choose “Client not on the list” to preserve the entered name for administrator review.</small></label><label>HOURS<input type="number" min="0" step="0.25" placeholder="0.00" /></label><label>COUNTY<select defaultValue="Wayne County">{Object.keys(michiganLocations).map((county) => <option key={county}>{county}</option>)}</select></label><label>CITY<select defaultValue="Detroit">{michiganLocations["Wayne County"].map((city) => <option key={city}>{city}</option>)}</select></label><label>WORK PERFORMED<textarea placeholder="Briefly describe the work completed" /></label><label>ENTRY NOTES <span>Optional</span><textarea placeholder="Add visit context or anything the company should know" /></label><div className="signature-actions"><Button variant="secondary" onClick={() => setAddingEntry(false)}>Cancel</Button><Button onClick={() => setAddingEntry(false)}>Add to timesheet</Button></div></div></section></div>}
    </div>
  )
}

function MyTrainings() {
  const [opened, setOpened] = useState<number | null>(null)
  const [uploaded, setUploaded] = useState(false)
  const [done, setDone] = useState(false)
  if (opened !== null) return <div className="page"><button className="back-link" onClick={() => setOpened(null)}>‹ Back to my trainings</button><div className="learning-layout"><section className="panel learning-content"><Badge tone="gold">Due {opened === 0 ? "March 28" : "April 4"}</Badge><h1>{opened === 0 ? "Infant Safe Sleep Practices" : "Mandated Reporter Training"}</h1><p className="muted-copy">Michigan Department of Health and Human Services</p>{opened === 1 ? <div className="word-fallback"><Icon name="document" size={42} /><h2>This Word file can’t be shown here</h2><p>Download it to read the training in Microsoft Word or another compatible app.</p><Button icon="download">Download training.docx</Button></div> : <><div className="embedded-document"><Icon name="document" size={34} /><h2>Safe Sleep for Michigan Infants</h2><p>Place babies on their backs for every sleep. Use a firm, flat sleep surface with no blankets, pillows, or toys.</p><div className="doc-page">1 / 8</div></div><div className="viewer-tools"><span>PDF opens securely inside the portal</span><Button variant="ghost" icon="download">Download</Button></div></>}</section><aside className="panel completion-panel"><h2>Complete this training</h2><p>Finish the material, then upload your certificate before marking it done.</p><div className={`upload-zone ${uploaded ? "complete" : ""}`}><Icon name={uploaded ? "check" : "upload"} /><strong>{uploaded ? "training-certificate.pdf" : "Upload certificate"}</strong><span>{uploaded ? "Uploaded just now" : "PDF, JPG or PNG · up to 10 MB"}</span></div><Button variant="secondary" icon="upload" onClick={() => setUploaded(true)}>{uploaded ? "Replace certificate" : "Choose file"}</Button><Button onClick={() => uploaded && setDone(true)}>{done ? "Waiting for admin confirmation" : uploaded ? "Mark training done" : "Certificate required first"}</Button>{done && <div className="rule-note"><Icon name="clock" /><span>Your work is submitted. This becomes complete after an administrator confirms it.</span></div>}</aside></div></div>
  return (
    <div className="page">
      <div className="page-heading">
        <div>
          <h1>My trainings</h1>
          <p>
            Complete the learning assigned to you and share your certificates.
          </p>
        </div>
      </div>
      <div className="training-cards">
        {trainingData.slice(0, 3).map((t, i) => (
          <article key={t.title}>
            <div className="training-card-top">
              <Badge tone={i === 2 ? "green" : i === 0 ? "gold" : "sage"}>
                {i === 2 ? "Complete" : `Due ${t.due}`}
              </Badge>
              <Icon name={t.type === "PDF" ? "document" : "external"} />
            </div>
            <h3>{t.title}</h3>
            <p>{t.provider}</p>
            <div className="requirement">
              <Icon name={i === 2 ? "check" : "upload"} />
              <span>
                {i === 2 ? "Certificate confirmed" : "Certificate required"}
              </span>
            </div>
            <Button
              variant={i === 2 ? "secondary" : "primary"}
              icon={i === 2 ? "check" : "external"}
              onClick={() => i !== 2 && setOpened(i)}
            >
              {i === 2 ? "View completion" : "Open training"}
            </Button>
            {i !== 2 && (
              <Button variant="ghost" icon="upload">
                Upload certificate
              </Button>
            )}
          </article>
        ))}
      </div>
      <div className="info-callout">
        <Icon name="lock" />
        <div>
          <strong>How completion works</strong>
          <p>
            For trainings that require a certificate, upload it after finishing.
            An administrator will review it before your training is marked
            complete.
          </p>
        </div>
      </div>
    </div>
  )
}

function PayOps() {
  const [tab, setTab] = useState("Hours to review")
  const [approved, setApproved] = useState(false)
  const [year, setYear] = useState("2025")
  const [dialog, setDialog] = useState<string | null>(null)
  return <div className="page"><div className="page-heading"><div><h1>Pay operations</h1><p>Review contractor hours, log payments, and prepare year-end reporting.</p></div><div className="pay-heading-actions"><div className="year-switcher">{["2026","2025","2024"].map((item) => <button className={year === item ? "active" : ""} onClick={() => setYear(item)} key={item}>{item}</button>)}</div><Button icon="plus" onClick={() => setDialog("log-payment")}>Log payment</Button></div></div><div className="tabs page-tabs">{["Hours to review", "Payments", "Year-end 1099s"].map((x) => <button key={x} className={tab === x ? "active" : ""} onClick={() => setTab(x)}>{x}{x === "Hours to review" && !approved && <i>3</i>}</button>)}</div>
    {tab === "Hours to review" && <><section className="panel tab-content"><SectionTitle title="Submitted hours" subtitle="March 1–15 pay period" /><div className="review-summary"><div><span>CONTRACTOR</span><strong>Marcus Lee</strong><small>Family Support Specialist</small></div><div><span>SUBMITTED</span><strong>42.5 hours</strong><small>$1,360.00 at $32/hr</small></div><div><span>STATUS</span><Badge tone={approved ? "green" : "gold"}>{approved ? "Approved" : "Needs review"}</Badge></div><div className="button-pair"><Button variant="secondary">Send back</Button><Button onClick={() => setApproved(true)}>{approved ? "Approved" : "Approve hours"}</Button></div></div><div className="hours-breakdown">{["Nicole Sanders · Home visits|29.5","Danielle Morris · Care coordination|8.0","No client · Team meeting & outreach|5.0"].map((r) => { const [a,b]=r.split("|"); return <div key={a}><span>{a}</span><strong>{b} hrs</strong></div> })}</div></section><section className="panel recorded-hours"><SectionTitle title="Recorded hours" subtitle={`All approved and submitted entries for ${year}.`} action={<Button variant="secondary" icon="plus" onClick={() => setDialog("log-hours")}>Log hours</Button>} /><div className="recorded-head"><span>DATE</span><span>CONTRACTOR</span><span>CLIENT</span><span>WORK</span><span>HOURS</span><span>STATUS</span></div>{[["Mar 14","Marcus Lee","Nicole Sanders","Home visit","7.5","Submitted"],["Mar 13","Janelle Brooks","Danielle Morris","Care coordination","6.0","Approved"],["Mar 12","Renee Jackson","No client","Community outreach","4.0","Approved"]].map((row) => <div className="recorded-row" key={row.join("-")}>{row.slice(0,5).map((cell) => <span key={cell}>{cell}</span>)}<Badge tone={row[5] === "Approved" ? "green" : "gold"}>{row[5]}</Badge></div>)}</section></>}
    {tab === "Payments" && <section className="panel tab-content"><SectionTitle title="Payment ledger" subtitle="Payments logged against each contractor." action={<Button icon="plus" onClick={() => setDialog("log-payment")}>Log payment</Button>} /><div className="ledger-head"><span>CONTRACTOR</span><span>PERIOD</span><span>AMOUNT</span><span>PAID</span><span>REFERENCE</span></div>{[["Janelle Brooks","Mar 1–15","$1,488.00","Mar 18","ACH 6348"],["Marcus Lee","Feb 16–28","$1,264.00","Mar 5","ACH 6291"],["Renee Jackson","Feb 16–28","$960.00","Mar 5","Check 1048"]].map((r)=><div className="ledger-row" key={r[0]}>{r.map((x)=><span key={x}>{x}</span>)}</div>)}</section>}
    {tab === "Year-end 1099s" && <section className="panel tab-content"><SectionTitle title={`${year} contractor reporting`} subtitle="Prepare Copy B delivery and IRS IRIS filing." action={<Button variant="secondary" icon="upload" onClick={() => setDialog("iris-upload")}>Upload IRIS template</Button>} /><div className="year-end-grid"><div><span className="eyebrow">COPY B</span><h2>Email contractor copies</h2><p>9 contractors · payer identity verified</p><Button icon="arrow">Review and email</Button></div><div><span className="eyebrow">IRS FILING</span><h2>Export IRIS CSV</h2><p>Formatted for the IRS Information Returns Intake System.</p><Button variant="secondary" icon="download">Export IRIS CSV</Button></div></div><div className="readiness-list"><div className="readiness-head"><strong>Contractor readiness</strong><span>Tax information must be complete before filing.</span></div>{[["Janelle Brooks","Ready","W-9 and TIN verified"],["Marcus Lee","Missing info","Tax classification required"],["Renee Jackson","Ready","W-9 and TIN verified"],["Alicia Carter","Missing info","Signed W-9 required"]].map(([name,status,note]) => <div key={name}><div className="avatar small">{name.split(" ").map((part) => part[0]).join("")}</div><div className="grow"><strong>{name}</strong><span>{note}</span></div><Badge tone={status === "Ready" ? "green" : "red"}>{status}</Badge>{status !== "Ready" && <Button variant="ghost">Resolve</Button>}</div>)}</div></section>}
    {dialog && <PortalFormDialog type={dialog} onClose={() => setDialog(null)} />}
  </div>
}

type HiringCandidate = { id: number; name: string; stage: string; role: string }

function CandidateDetail({ candidate, onBack }: { candidate: HiringCandidate; onBack: () => void }) {
  const [tab, setTab] = useState("Profile")
  const [actionsOpen, setActionsOpen] = useState(false)
  const [scheduling, setScheduling] = useState(false)
  const [interviews, setInterviews] = useState([{ date: "March 20, 2025 · 10:00 AM", people: "Denise Harris, Monica Green", type: "Video interview", link: "meet.google.com/vsm-care-214" }])
  const tabs = ["Profile", "Documents", "Interviews", "Offers", "History"]
  return <div className="page candidate-detail-page"><button className="back-link" onClick={onBack}>‹ Back to candidate pipeline</button><div className="profile-hero candidate-hero"><div className="avatar profile-avatar">{candidate.name.split(" ").map((part) => part[0]).join("")}</div><div className="profile-main"><div><h1>{candidate.name}</h1><Badge tone={candidate.stage === "Accepted" ? "green" : "gold"}>{candidate.stage}</Badge></div><p>{candidate.role} · Detroit, Michigan</p><span><Icon name="briefcase" size={16} /> Maternal Health Nurse opening</span></div><div className="candidate-actions-wrap"><Button variant="secondary" icon="more" onClick={() => setActionsOpen(!actionsOpen)}>Actions</Button>{actionsOpen && <div className="candidate-action-menu"><button><Icon name="arrow" />Move to next stage</button><button><Icon name="document" />Add note</button><button><Icon name="calendar" />Schedule interview</button><button className="danger"><Icon name="trash" />Turn down candidate</button></div>}</div></div><div className="tabs">{tabs.map((item) => <button className={tab === item ? "active" : ""} onClick={() => setTab(item)} key={item}>{item}</button>)}</div>
    {tab === "Profile" && <div className="profile-grid"><section className="panel detail-panel"><SectionTitle title="Candidate profile" action={<button className="text-link">Edit</button>} /><div className="detail-grid"><div><span>EMAIL</span><strong>{candidate.name.toLowerCase().replace(" ", ".")}@email.com</strong></div><div><span>PHONE</span><strong>(313) 555-0189</strong></div><div><span>COUNTY</span><strong>Wayne County</strong></div><div><span>SOURCE</span><strong>Village Start careers page</strong></div><div><span>APPLIED</span><strong>March 8, 2025</strong></div><div><span>REFERRED BY</span><strong>Brightmoor Community Center</strong></div></div></section><aside className="panel candidate-summary"><span className="eyebrow">PIPELINE PROGRESS</span>{["First contact","Screening","Interview","References","Offer","Accepted"].map((stage) => <div className={`candidate-stage ${stage === candidate.stage ? "current" : ""}`} key={stage}><i>{stage === candidate.stage && <Icon name="check" size={12} />}</i><span>{stage}</span></div>)}</aside></div>}
    {tab === "Documents" && <section className="panel tab-content"><SectionTitle title="Candidate documents" action={<Button icon="upload">Upload file</Button>} /><div className="list-row"><div className="file-icon"><Icon name="document" /></div><div className="grow"><strong>{candidate.name.replace(" ","_")}_Resume.pdf</strong><span>Resume · PDF · 482 KB</span></div><Button variant="secondary">Preview</Button><Button variant="icon" icon="download" /></div><div className="list-row"><div className="file-icon"><Icon name="document" /></div><div className="grow"><strong>Michigan_RN_License.pdf</strong><span>Credential · PDF · 190 KB</span></div><Button variant="secondary">Preview</Button><Button variant="icon" icon="download" /></div></section>}
    {tab === "Interviews" && <section className="panel tab-content"><SectionTitle title="Interviews" subtitle="Google Meet links are created automatically for video interviews." action={<Button icon="plus" onClick={() => setScheduling(true)}>Schedule interview</Button>} />{interviews.map((interview) => <div className="interview-row" key={interview.date}><div className="date"><strong>20</strong><span>MAR</span></div><div className="grow"><strong>{interview.type}</strong><span>{interview.date} · 45 minutes</span><small>{interview.people}</small></div><div className="meet-link"><Icon name="external" /><span>{interview.link}</span></div><Button variant="icon" icon="more" /></div>)}{scheduling && <div className="inline-schedule-form"><h3>Schedule interview</h3><div className="form-grid"><label>DATE<input type="date" defaultValue="2025-03-25" /></label><label>TIME<input type="time" defaultValue="10:00" /></label><label>DURATION<select defaultValue="45 minutes"><option>30 minutes</option><option>45 minutes</option><option>60 minutes</option></select></label><label>INTERVIEWERS<input defaultValue="Denise Harris, Monica Green" /></label></div><div className="auto-meet"><Icon name="external" /><span>A Google Meet link will be created and included in the candidate email.</span></div><div className="signature-actions"><Button variant="secondary" onClick={() => setScheduling(false)}>Cancel</Button><Button onClick={() => { setInterviews([...interviews, { date: "March 25, 2025 · 10:00 AM", people: "Denise Harris, Monica Green", type: "Video interview", link: "meet.google.com/vsm-new-825" }]); setScheduling(false) }}>Schedule and send</Button></div></div>}</section>}
    {tab === "Offers" && <section className="panel tab-content"><SectionTitle title="Offers" action={<Button icon="plus">Create offer</Button>} /><div className="offer-card"><div className="file-icon"><Icon name="document" /></div><div className="grow"><strong>Community Health Worker contractor offer</strong><span>Sent March 14 · $32.00/hour · Start April 1</span></div><Badge tone={candidate.stage === "Accepted" ? "green" : "gold"}>{candidate.stage === "Accepted" ? "Accepted" : "Awaiting response"}</Badge><Button variant="secondary">Open offer</Button></div>{candidate.stage === "Accepted" && <div className="convert-panel"><div className="task-icon sage"><Icon name="check" /></div><div><h2>Offer accepted</h2><p>Create the staff record and begin onboarding without re-entering candidate information.</p></div><Button>Convert to staff</Button></div>}</section>}
    {tab === "History" && <section className="panel tab-content"><SectionTitle title="Candidate history" /><div className="history-timeline">{[["Mar 14","Offer sent","Denise Harris sent the Community Health Worker offer."],["Mar 12","References completed","Two references marked complete by Monica Green."],["Mar 10","Interview completed","Video interview held with Denise and Monica."],["Mar 8","Application promoted","Application moved into the candidate pipeline."]].map(([date,title,text]) => <div key={title}><i /><span>{date}</span><div><strong>{title}</strong><p>{text}</p></div></div>)}</div></section>}
  </div>
}

function ApplicationDetail({ name, onBack, onPromote }: { name: string; onBack: () => void; onPromote: () => void }) {
  return <div className="page"><button className="back-link" onClick={onBack}>‹ Back to applications</button><div className="page-heading"><div><Badge tone="gold">New application</Badge><h1 className="detail-page-title">{name}</h1><p>Maternal Health Nurse · Applied March 15, 2025</p></div><div className="button-pair"><Button variant="secondary">Turn down</Button><Button onClick={onPromote}>Promote to pipeline</Button></div></div><div className="application-layout"><div><section className="panel detail-panel"><SectionTitle title="Applicant information" /><div className="detail-grid"><div><span>EMAIL</span><strong>{name.toLowerCase().replace(" ",".")}@email.com</strong></div><div><span>PHONE</span><strong>(734) 555-0148</strong></div><div><span>COUNTY</span><strong>Washtenaw County</strong></div><div><span>CITY</span><strong>Ypsilanti</strong></div><div><span>SOURCE</span><strong>Village Start careers page</strong></div><div><span>LICENSE</span><strong>Michigan RN · Active</strong></div></div></section><section className="panel application-answers"><SectionTitle title="Application answers" />{[["Why are you interested in Village Start?","I want to support families during pregnancy and infancy with care that respects their goals, culture, and community."],["Describe your home-visiting experience.","I have four years of maternal-child nursing experience, including two years providing in-home postpartum support."],["Are you available for travel in Wayne and Oakland counties?","Yes. I have reliable transportation and can travel throughout both service areas."]].map(([q,a]) => <div key={q}><strong>{q}</strong><p>{a}</p></div>)}</section></div><aside className="panel resume-preview"><div className="viewer-head"><div><span>RESUME</span><strong>{name.replace(" ","_")}_Resume.pdf</strong></div><Button variant="icon" icon="download" /></div><div className="resume-paper"><h2>{name}</h2><span>REGISTERED NURSE</span><hr /><h3>Experience</h3><strong>Maternal-Child Nurse</strong><p>Michigan Family Care · 2021–Present</p><p>Provided home-based postpartum assessments, education, and care coordination.</p><h3>Education</h3><strong>Bachelor of Science in Nursing</strong><p>Eastern Michigan University</p></div></aside></div></div>
}

function Hiring() {
  const [view, setView] = useState("Candidate pipeline")
  const [withdrawn, setWithdrawn] = useState(false)
  const stageNames = ["First contact", "Screening", "Interview", "References", "Offer", "Accepted"]
  const [candidates, setCandidates] = useState([
    { id: 1, name: "Monique Davis", stage: "First contact", role: "Maternal Health Nurse" },
    { id: 2, name: "Kiara Johnson", stage: "Screening", role: "Community Health Worker" },
    { id: 3, name: "Lauren Bell", stage: "Interview", role: "Maternal Health Nurse" },
    { id: 4, name: "Aisha Grant", stage: "References", role: "Social Worker" },
    { id: 5, name: "Noah Williams", stage: "Accepted", role: "Family Support Specialist" },
  ])
  const [draggedCandidate, setDraggedCandidate] = useState<number | null>(null)
  const [dropStage, setDropStage] = useState<string | null>(null)
  const [candidateDetailId, setCandidateDetailId] = useState<number | null>(null)
  const [applicationDetail, setApplicationDetail] = useState<string | null>(null)
  const [applicationQuery, setApplicationQuery] = useState("")
  const [dialog, setDialog] = useState<string | null>(null)
  const moveCandidate = (stage: string) => {
    if (draggedCandidate === null) return
    setCandidates((current) => current.map((candidate) => candidate.id === draggedCandidate ? { ...candidate, stage } : candidate))
    setDraggedCandidate(null)
    setDropStage(null)
  }
  if (candidateDetailId !== null) { const candidate = candidates.find((item) => item.id === candidateDetailId); if (candidate) return <CandidateDetail candidate={candidate} onBack={() => setCandidateDetailId(null)} /> }
  if (applicationDetail) return <ApplicationDetail name={applicationDetail} onBack={() => setApplicationDetail(null)} onPromote={() => { setCandidates((current) => [...current, { id: Math.max(...current.map((item) => item.id)) + 1, name: applicationDetail, stage: "First contact", role: "Maternal Health Nurse" }]); setApplicationDetail(null); setView("Candidate pipeline") }} />
  return <div className="page"><div className="page-heading"><div><h1>Hiring</h1><p>Move people from an open role into the Village Start team.</p></div><div className="button-pair"><Button variant="secondary" icon="plus" onClick={() => setDialog("add-candidate")}>Add candidate</Button><Button icon="plus" onClick={() => setDialog("new-opening")}>New job opening</Button></div></div><div className="tabs page-tabs">{["Candidate pipeline","Job openings","Applications","History"].map((x)=><button className={view===x?"active":""} onClick={()=>setView(x)} key={x}>{x}{x==="Applications"&&<i>7</i>}{x==="History"&&withdrawn&&<i>1</i>}</button>)}</div>
    {view==="Candidate pipeline" && <><div className="pipeline-help"><Icon name="more" /><span>Drag a candidate card into another column to update their stage.</span></div><div className="pipeline">{stageNames.map((stage) => { const stageCandidates = candidates.filter((candidate) => candidate.stage === stage); return <section className={dropStage === stage ? "drop-target" : ""} key={stage} onDragOver={(e) => { e.preventDefault(); setDropStage(stage); e.dataTransfer.dropEffect = "move" }} onDragLeave={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node)) setDropStage(null) }} onDrop={(e) => { e.preventDefault(); moveCandidate(stage) }}><div><strong>{stage}</strong><span>{stageCandidates.length}</span></div>{stageCandidates.length ? stageCandidates.map((candidate) => <article className={draggedCandidate === candidate.id ? "dragging" : ""} key={candidate.id} draggable onDragStart={(e) => { setDraggedCandidate(candidate.id); e.dataTransfer.effectAllowed = "move" }} onDragEnd={() => { setDraggedCandidate(null); setDropStage(null) }}><div className="candidate-drag"><Icon name="more" size={15} /><span>Drag</span></div><div className="avatar small">{candidate.name.split(" ").map(x=>x[0]).join("")}</div><h3>{candidate.name}</h3><p>{candidate.role}</p><small>{stage==="Accepted"?"Ready to become staff":"Updated just now"}</small><Button variant="secondary" onClick={() => setCandidateDetailId(candidate.id)}>Open profile</Button>{stage==="Accepted"?<Button>Convert to staff</Button>:<div className="candidate-actions"><Button variant="ghost">Turn down</Button>{candidate.name==="Monique Davis"&&<Button variant="ghost" onClick={() => { setWithdrawn(true); setCandidates((current) => current.filter((item) => item.id !== candidate.id)) }}>Record withdrawal</Button>}</div>}</article>) : <p className="empty-stage">Drop candidate here</p>}</section> })}</div></>}
    {view==="Job openings" && <section className="panel tab-content"><SectionTitle title="Job openings" subtitle="Published roles appear on the public careers page." />{[["Maternal Health Nurse","Open","12 applicants"],["Community Health Worker","Paused","8 applicants"],["Lactation Consultant","Closed","24 applicants"]].map((r)=><div className="opening-row" key={r[0]}><div className="file-icon"><Icon name="briefcase" /></div><div className="grow"><strong>{r[0]}</strong><span>Detroit, Michigan · Contractor</span></div><Badge tone={r[1]==="Open"?"green":r[1]==="Paused"?"gold":"gray"}>{r[1]}</Badge><strong>{r[2]}</strong><Button variant="ghost" onClick={() => setDialog("opening-status")}>{r[1] === "Open" ? "Pause / close" : "Change status"}</Button></div>)}</section>}
    {view==="Applications" && <section className="panel tab-content"><SectionTitle title="Applications" subtitle="Review public careers-page submissions before promoting them." /><div className="toolbar inset"><label className="searchbox wide"><Icon name="search" /><input value={applicationQuery} onChange={(e) => setApplicationQuery(e.target.value)} placeholder="Search applicants" /></label><button className="filter">All statuses <Icon name="chevron" size={15} /></button></div>{["Imani Reed","Sharon Fields","Danielle Price","Jordan Matthews","Camille Brown"].filter((name) => name.toLowerCase().includes(applicationQuery.toLowerCase())).map((n,index)=><div className="opening-row application-list-row" key={n}><div className="avatar">{n.split(" ").map(x=>x[0]).join("")}</div><button className="grow applicant-name" onClick={() => setApplicationDetail(n)}><strong>{n}</strong><span>Applied for {index % 2 ? "Community Health Worker" : "Maternal Health Nurse"} · {index + 1} days ago</span></button><Badge tone={index === 4 ? "sage" : "gold"}>{index === 4 ? "Reviewed" : "New"}</Badge><Button variant="secondary" onClick={() => setApplicationDetail(n)}>Review</Button></div>)}</section>}
    {view==="History" && <section className="panel tab-content"><SectionTitle title="Candidate history" subtitle="Turned-down and withdrawn candidates remain here and cannot continue through the pipeline." /><div className="opening-row"><div className="avatar">RM</div><div className="grow"><strong>Rachel Moore</strong><span>Community Health Worker · Team decision on March 2</span></div><Badge tone="red">Turned down</Badge><Button variant="secondary">View application</Button></div>{withdrawn&&<div className="opening-row"><div className="avatar">MD</div><div className="grow"><strong>Monique Davis</strong><span>Maternal Health Nurse · Candidate withdrew today</span></div><Badge tone="gray">Withdrawn</Badge><Button variant="secondary">View history</Button></div>}</section>}
    {dialog && <PortalFormDialog type={dialog} onClose={() => setDialog(null)} />}
  </div>
}

function Referrals() {
  const [filter, setFilter] = useState("All")
  const [selected, setSelected] = useState<string[] | null>(null)
  const [adding, setAdding] = useState(false)
  const rows=[["Danielle Morris","Family","Prenatal support · Detroit","New","Unassigned"],["Brightmoor Community Center","Partner","Program partnership inquiry","In progress","Marcus Lee"],["Elaine Turner","General","Question about service area","New","Unassigned"],["Nicole Sanders","Family","Newborn home visit · Southfield","Closed","Janelle Brooks"]]
  return <div className="page"><div className="page-heading"><div><h1>Incoming referrals</h1><p>Website inquiries from families, partners, and community members.</p></div><Button icon="plus" onClick={() => setAdding(true)}>Add referral</Button></div><div className="toolbar"><label className="searchbox wide"><Icon name="search" /><input placeholder="Search referrals" /></label>{["All","Family","Partner","General"].map(x=><button key={x} className={`filter ${filter===x?"selected":""}`} onClick={()=>setFilter(x)}>{x}</button>)}</div><div className={`referral-workspace ${selected ? "detail-open" : ""}`}><section className="table-card referral-table"><div className="table-head"><span>NAME</span><span>TYPE & MESSAGE</span><span>STATUS</span><span>ASSIGNED TO</span><span /></div>{rows.filter(r=>filter==="All"||r[1]===filter).map(r=><button className={`table-row ${selected?.[0] === r[0] ? "selected" : ""}`} key={r[0]} onClick={() => setSelected(r)}><span className="person-cell"><span className="avatar">{r[0].split(" ").map(x=>x[0]).join("").slice(0,2)}</span><strong>{r[0]}</strong></span><span><strong>{r[1]}</strong><small>{r[2]}</small></span><span><Badge tone={r[3]==="New"?"gold":r[3]==="Closed"?"gray":"sage"}>{r[3]}</Badge></span><span><strong>{r[4]}</strong></span><span><Icon name="chevron" /></span></button>)}</section>{selected && <aside className="panel referral-detail-panel"><div className="viewer-head"><div><span>{selected[1]} REFERRAL</span><strong>{selected[0]}</strong></div><Button variant="icon" icon="close" onClick={() => setSelected(null)} /></div><div className="referral-detail-body"><div className="referral-detail-status"><Badge tone={selected[3] === "New" ? "gold" : selected[3] === "Closed" ? "gray" : "sage"}>{selected[3]}</Badge><span>Received March 17, 2025 · 9:14 AM</span></div><div className="detail-grid"><div><span>EMAIL</span><strong>danielle.morris@email.com</strong></div><div><span>PHONE</span><strong>(313) 555-0162</strong></div><div><span>COUNTY</span><strong>Wayne County</strong></div><div><span>SOURCE</span><strong>Village Start website</strong></div></div><div className="referral-message"><span>WHAT THEY NEED</span><p>I’m expecting my first baby in May and would like to learn more about home-visiting support and eligibility.</p></div><label className="dialog-field">ASSIGNED TO<select defaultValue={selected[4]}><option>Unassigned</option><option>Marcus Lee</option><option>Janelle Brooks</option><option>Alicia Carter</option></select></label><div className="referral-detail-actions"><Button variant="secondary">Close referral</Button><Button>{selected[3] === "New" ? "Start referral" : "Save changes"}</Button></div></div></aside>}</div>{adding && <PortalFormDialog type="add-referral" onClose={() => setAdding(false)} />}</div>
}

const emailTemplates = [
  { id: "invite", name: "Portal invite", audience: "New team member", subject: "You’re invited to the Village Start MIHP portal", eyebrow: "WELCOME TO THE TEAM", title: "Your Village Start portal is ready", intro: "Denise Harris invited you to join Village Start MIHP as a Community Health Worker.", button: "Choose a password", expiry: "This secure invitation expires March 20, 2025 at 5:00 PM ET.", note: "After you activate your account, sign in using your Village Start work email: alicia@villagestart.org.", details: [["ROLE", "Community Health Worker"], ["WORK EMAIL", "alicia@villagestart.org"]] },
  { id: "reset", name: "Password reset", audience: "Portal user", subject: "Reset your Village Start portal password", eyebrow: "PASSWORD HELP", title: "Choose a new password", intro: "We received a request to reset the password for your Village Start MIHP portal account.", button: "Reset password", expiry: "This secure reset link expires March 17, 2025 at 3:30 PM ET.", note: "If you did not request a password reset, ignore this email. Your current password will stay the same.", details: [] },
  { id: "agreement", name: "Sign contractor agreement", audience: "Contractor", subject: "Review and sign your Village Start contractor agreement", eyebrow: "ACTION REQUIRED", title: "Your contractor agreement is ready", intro: "Please review the Independent Contractor Agreement and add your electronic signature.", button: "Review and sign agreement", expiry: "This secure signing link expires in 7 days.", note: "Questions about the agreement? Contact your Village Start administrator, Denise Harris, at denise@villagestart.org in a new email.", details: [["DOCUMENT", "Independent Contractor Agreement"], ["CONTRACTOR", "Alicia Carter"]] },
  { id: "signed-agreement", name: "Signed agreement copy", audience: "Contractor", subject: "Your fully signed contractor agreement", eyebrow: "FULLY EXECUTED", title: "Your agreement is complete", intro: "Village Start MIHP has countersigned your Independent Contractor Agreement. The agreement is now fully executed.", button: "Download signed agreement", expiry: "The secure download link remains available for one year.", note: "Keep this signed PDF with your business records.", attachment: "Alicia_Carter_Contractor_Agreement_Signed.pdf", details: [["CONTRACTOR SIGNED", "March 14, 2025"], ["COMPANY COUNTERSIGNED", "March 14, 2025"]] },
  { id: "w9", name: "Complete Form W-9", audience: "Contractor", subject: "Complete and sign your Form W-9", eyebrow: "TAX INFORMATION", title: "Complete your Form W-9", intro: "Village Start MIHP needs a completed Form W-9 for contractor tax reporting. Enter your information and add your electronic signature.", button: "Complete Form W-9", expiry: "This secure form link expires in 7 days.", note: "Your signed answers will update the tax profile Village Start uses for year-end reporting.", details: [["REQUESTED FOR", "Alicia Carter"], ["REQUESTED BY", "Village Start MIHP"]] },
  { id: "signed-w9", name: "Signed W-9 copy", audience: "Contractor", subject: "Your signed Form W-9 is ready", eyebrow: "FORM COMPLETE", title: "Your W-9 has been completed", intro: "Your signed Form W-9 is now on file with Village Start MIHP. You can download a copy for your records.", button: "Download signed W-9", note: "This message confirms that Village Start received your completed form.", attachment: "Alicia_Carter_Form_W9_Signed.pdf", details: [] },
  { id: "interview", name: "Video interview", audience: "Job candidate", subject: "Video interview with Village Start MIHP — March 24", eyebrow: "INTERVIEW CONFIRMATION", title: "We look forward to meeting you", intro: "Your video interview for the Maternal Health Nurse role is confirmed.", button: "Join Google Meet", note: "Please join five minutes early and test your camera and microphone before the interview.", details: [["WHEN", "Monday, March 24 · 10:00 AM ET"], ["LENGTH", "45 minutes"], ["YOU’LL MEET", "Denise Harris and Monica Green"], ["GOOGLE MEET", "meet.google.com/vsm-mihp-care"]] },
  { id: "1099", name: "1099-NEC Copy B", audience: "Contractor", subject: "Your 2025 Form 1099-NEC Copy B", eyebrow: "YEAR-END TAX DOCUMENT", title: "Your 2025 1099-NEC is attached", intro: "Your signed Form 1099-NEC Copy B is attached for your records.", note: "Village Start MIHP files the official information return with the IRS separately. This copy is for your tax records.", attachment: "Village_Start_2025_1099NEC_Alicia_Carter.pdf", details: [["TAX YEAR", "2025"], ["NONEMPLOYEE COMPENSATION", "$18,640.00"]] },
]

function EmailTemplates() {
  const [selectedId, setSelectedId] = useState("invite")
  const template = emailTemplates.find((item) => item.id === selectedId) || emailTemplates[0]
  return <div className="email-template-layout"><aside className="email-template-list"><span className="eyebrow">AUTOMATED MESSAGES</span><p>All messages are sent from no-reply@villagestartmihp.com.</p>{emailTemplates.map((item) => <button className={selectedId === item.id ? "active" : ""} onClick={() => setSelectedId(item.id)} key={item.id}><div className="email-list-icon"><Icon name={item.id === "interview" ? "calendar" : item.id === "reset" ? "lock" : "document"} size={16} /></div><span><strong>{item.name}</strong><small>{item.audience}</small></span><Icon name="chevron" size={14} /></button>)}</aside><section className="email-preview-area"><div className="email-metadata"><div><span>FROM</span><strong>Village Start MIHP &lt;no-reply@villagestartmihp.com&gt;</strong></div><div><span>SUBJECT</span><strong>{template.subject}</strong></div></div><div className="email-browser"><div className="email-canvas"><header><img src={villageStartLogo} alt="Village Start MIHP" /></header><main><span className="email-eyebrow">{template.eyebrow}</span><h1>{template.title}</h1><p>{template.intro}</p>{template.details.length > 0 && <div className="email-details">{template.details.map(([label,value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>}{template.attachment && <div className="email-attachment"><div><Icon name="document" /><span>PDF</span></div><p><strong>{template.attachment}</strong><span>Signed PDF · Attached to this email</span></p><Icon name="download" /></div>}{template.button && <button className="email-cta">{template.button} <Icon name="arrow" size={16} /></button>}{template.expiry && <div className="email-expiry"><Icon name="clock" size={16} /><span>{template.expiry}</span></div>}<p className="email-note">{template.note}</p></main><footer><div className="email-footer-brand"><div className="brand-logo-crop"><img src={villageStartLogo} alt="" /></div><div><strong>Village Start MIHP</strong><span>Maternal Infant Health Program</span></div></div><p>This is an automated message from no-reply@villagestartmihp.com. This inbox is not monitored. Please do not reply.</p><span>Supporting healthy beginnings across Michigan.</span></footer></div></div></section></div>
}

function AgreementTemplateEditor({ onBack }: { onBack: () => void }) {
  const [version, setVersion] = useState("2025.1")
  return <div className="page template-editor-page"><button className="back-link" onClick={onBack}>‹ Back to Agreement template</button><div className="page-heading"><div><Badge tone="green">Published version {version}</Badge><h1 className="detail-page-title">Independent Contractor Agreement</h1><p>Edit the template and publish a new version for future agreements.</p></div><Button>Publish new version</Button></div><div className="template-editor-layout"><section className="panel rich-editor"><div className="editor-toolbar"><button><strong>B</strong></button><button><em>I</em></button><button>H1</button><button>H2</button><button>• List</button><button>1. List</button><span /><button>Undo</button><button>Redo</button></div><div className="merge-field-bar"><span>INSERT MERGE FIELD</span>{["Contractor name","Hourly rate","Start date","Company signer"].map((field) => <button key={field}>{"{{"}{field}{"}}"}</button>)}</div><article contentEditable suppressContentEditableWarning><h1>Independent Contractor Agreement</h1><p>This Independent Contractor Agreement is entered into between <strong>Village Start MIHP, LLC</strong> and <mark>{"{{Contractor name}}"}</mark>.</p><h2>1. Services</h2><p>The Contractor will provide maternal and infant health support services in accordance with Village Start policies and Michigan MIHP requirements.</p><h2>2. Compensation</h2><p>The Contractor will be paid <mark>{"{{Hourly rate}}"}</mark> for approved services beginning <mark>{"{{Start date}}"}</mark>.</p><h2>3. Independent relationship</h2><p>The Contractor is an independent contractor and is responsible for applicable federal, state, and local taxes.</p><h2>4. Confidentiality</h2><p>The Contractor will protect confidential participant and organization information.</p></article></section><aside className="panel version-list"><SectionTitle title="Version history" /><button className={version === "2025.1" ? "active" : ""} onClick={() => setVersion("2025.1")}><strong>Version 2025.1</strong><span>Published Mar 1, 2025</span><Badge tone="green">Current</Badge></button><button onClick={() => setVersion("2024.2")}><strong>Version 2024.2</strong><span>Published Sep 12, 2024</span><Badge tone="gray">Archived</Badge></button><button onClick={() => setVersion("2024.1")}><strong>Version 2024.1</strong><span>Published Jan 8, 2024</span><Badge tone="gray">Archived</Badge></button><div className="version-note"><Icon name="warning" /><p>Publishing creates a new version. Existing agreements keep the version originally sent.</p></div></aside></div></div>
}

function InterfaceStates() {
  const [toast, setToast] = useState<"success" | "error" | null>("success")
  const [emptyType, setEmptyType] = useState("Clients")
  return <div className="state-showcase"><SectionTitle title="Interface states" subtitle="Reusable feedback and list states across the portal." /><div className="state-grid"><section><span className="eyebrow">EMPTY LISTS</span><div className="state-tabs">{["Clients","Applications","Referrals","Trainings","Files"].map((item) => <button className={emptyType === item ? "active" : ""} onClick={() => setEmptyType(item)} key={item}>{item}</button>)}</div><div className="empty-state"><div className="placeholder-icon"><Icon name={emptyType === "Files" ? "files" : emptyType === "Trainings" ? "training" : "people"} /></div><h2>No {emptyType.toLowerCase()} yet</h2><p>{emptyType === "Clients" ? "Add the first client so staff can select them on a timesheet." : `New ${emptyType.toLowerCase()} will appear here.`}</p><Button icon="plus">Add {emptyType.slice(0,-1).toLowerCase()}</Button></div></section><section><span className="eyebrow">PAGE LOADING</span><div className="loading-state"><div className="loading-heading"><i /><i /></div>{[1,2,3,4].map((item) => <div className="loading-row" key={item}><i /><span><i /><i /></span><i /></div>)}</div></section></div><div className="toast-controls"><Button variant="secondary" onClick={() => setToast("success")}>Show success toast</Button><Button variant="secondary" onClick={() => setToast("error")}>Show error toast</Button></div>{toast && <div className={`portal-toast ${toast}`}><Icon name={toast === "success" ? "check" : "warning"} /><div><strong>{toast === "success" ? "Changes saved" : "Something went wrong"}</strong><span>{toast === "success" ? "The portal record was updated successfully." : "We couldn’t save your changes. Try again."}</span></div><Button variant="icon" icon="close" onClick={() => setToast(null)} /></div>}</div>
}

function Settings() {
  const [section,setSection]=useState("Company profile")
  const [templateEditor, setTemplateEditor] = useState(false)
  const [calendarState, setCalendarState] = useState<"connected" | "disconnected" | "not-configured">("connected")
  const items=["Company profile","1099 payer identity","Agreement template","Team access","Google Calendar","Email templates","Interface states"]
  if (templateEditor) return <AgreementTemplateEditor onBack={() => setTemplateEditor(false)} />
  return <div className="page"><div className="page-heading"><div><h1>Organization settings</h1><p>Manage Village Start’s identity, documents, access, and connections.</p></div></div><div className="settings-layout"><nav>{items.map(x=><button className={section===x?"active":""} onClick={()=>setSection(x)} key={x}><Icon name={x==="Team access"?"lock":x==="Google Calendar"?"calendar":"settings"} />{x}</button>)}</nav><section className="panel settings-content"><SectionTitle title={section} subtitle={section==="Team access"?"Control who can open sensitive areas of the portal.":"Keep organization details accurate and ready to use."} />
    {section==="Company profile"&&<FormGrid fields={[["Legal name","Village Start MIHP, LLC"],["Public name","Village Start MIHP"],["Phone","(313) 555-0142"],["Service area","Wayne, Oakland & Genesee counties"]]} />}
    {section==="1099 payer identity"&&<FormGrid fields={[["Payer legal name","Village Start MIHP, LLC"],["Federal TIN","••-•••4821"],["Payer address","2200 Woodward Ave, Detroit, MI 48201"],["Contact","Denise Harris"]]} />}
    {section==="Agreement template"&&<div className="template-card"><Icon name="document" size={30}/><div><strong>Independent Contractor Agreement — 2025</strong><span>Used when sending a new agreement for contractor signature, then company countersignature.</span></div><Button variant="secondary" onClick={() => setTemplateEditor(true)}>Edit template</Button></div>}
    {section==="Team access"&&<div className="access-matrix"><div><strong>Denise Harris</strong><span>Owner</span><Badge tone="green">All areas</Badge></div><div><strong>Monica Green</strong><span>Administrator</span><Badge>Staff, files, trainings, hiring, referrals</Badge></div><div><strong>Marcus Lee</strong><span>Staff</span><Badge tone="gray">Own home, timesheets, trainings, guide</Badge></div></div>}
    {section==="Google Calendar"&&<div className="calendar-settings"><div className="state-preview-tabs">{["connected","disconnected","not-configured"].map((state) => <button className={calendarState === state ? "active" : ""} onClick={() => setCalendarState(state as typeof calendarState)} key={state}>{state === "not-configured" ? "Not configured" : state === "disconnected" ? "Not connected" : "Connected"}</button>)}</div>{calendarState === "connected" && <div className="connection-card"><div className="task-icon sage"><Icon name="calendar"/></div><div><strong>Google Calendar</strong><span>Connected as denise@villagestart.org · Last synced 4 minutes ago</span></div><Badge tone="green">Connected</Badge><Button variant="secondary" onClick={() => setCalendarState("disconnected")}>Disconnect</Button></div>}{calendarState === "disconnected" && <div className="connection-empty"><div className="task-icon gold"><Icon name="calendar" /></div><h2>Google Calendar is not connected</h2><p>Connect an authorized Village Start Google account to create Meet links and sync interviews.</p><Button onClick={() => setCalendarState("connected")}>Connect Google Calendar</Button></div>}{calendarState === "not-configured" && <div className="connection-empty"><div className="task-icon cream"><Icon name="settings" /></div><h2>Google Calendar has not been configured</h2><p>An owner must add the Google Workspace client ID and authorized redirect URL before anyone can connect.</p><Button variant="secondary">View setup instructions</Button></div>}</div>}
    {section==="Email templates"&&<EmailTemplates />}
    {section==="Interface states"&&<InterfaceStates />}
    {section !== "Email templates" && section !== "Interface states" && <div className="settings-save"><Button>Save changes</Button></div>}</section></div></div>
}

function FormGrid({fields}:{fields:string[][]}) { return <div className="form-grid">{fields.map(([label,value])=><label key={label}>{label.toUpperCase()}<input defaultValue={value}/></label>)}</div> }

function SignatureStylePicker({ name }: { name: string }) {
  const [style, setStyle] = useState("classic")
  const options = [
    ["classic", "Classic script"],
    ["modern", "Modern script"],
    ["formal", "Formal signature"],
  ]
  return <fieldset className="signature-picker"><legend>CHOOSE HOW YOUR SIGNATURE WILL APPEAR</legend><p>Select a style for your typed name. This visual style does not change the legal meaning of your electronic signature.</p><div>{options.map(([value,label]) => <label className={`signature-option ${style === value ? "selected" : ""}`} key={value}><input type="radio" name="signature-style" value={value} checked={style === value} onChange={() => setStyle(value)} /><span className={`signature-preview signature-${value}`}>{name || "Your name"}</span><small>{label}</small><i>{style === value && <Icon name="check" size={13} />}</i></label>)}</div></fieldset>
}

function PortalGuide() {
  const chapters = [
    { title: "Sign in and who sees what", intro: "Portal access follows a person’s role. Owners and administrators operate the organization; staff work only with their own records.", sections: [
      ["Owners and administrators", "They can open the organization home, staff records, pay operations, company files, trainings, hiring, referrals, settings, and this guide."],
      ["Staff members", "Staff see only My home, Timesheets, My trainings, and this guide. They cannot open administrator tools or another person’s records."],
      ["Account access", "Use Sign out from the profile menu when leaving a shared device. Forgot password sends a secure reset email. A new team member uses the invite link to choose a password and join the portal."],
    ]},
    { title: "Referrals", intro: "Website inquiries arrive as a family, partner, or general message and move through a simple shared queue.", sections: [
      ["Review new inquiries", "Open every New referral, confirm its type, read the message, and check the contact details supplied on the Village Start website."],
      ["Assign and follow up", "Assign the referral to the team member responsible for the response. Change the status to In progress once outreach begins."],
      ["Close the loop", "Use Closed when the inquiry has been answered, connected to services, or otherwise resolved. Closed referrals stay available in the record."],
    ]},
    { title: "Hiring", intro: "Hiring starts with a public role and ends when an accepted candidate becomes a staff record.", sections: [
      ["Manage roles", "Open a role to receive applications on the public careers page. Pause it to stop new applications temporarily, or close it when hiring has ended."],
      ["Review and promote", "Review each application before promoting it into the pipeline: First contact, Screening, Interview, References, Offer, then Accepted."],
      ["End a candidacy", "Turn down a candidate when Village Start decides not to proceed. Record Withdrawn when the candidate chooses to leave. Both remain in History and cannot continue toward an offer."],
      ["Create staff", "After the candidate accepts the offer, convert the accepted candidate into a staff record and begin onboarding."],
    ]},
    { title: "Staff", intro: "A staff profile holds access, employment details, onboarding, documents, and assigned learning in one place.", sections: [
      ["Invite and record details", "Record contact details, work email, hourly rate, bank details, and tax classification. Send the portal invite when the work email is ready."],
      ["Complete onboarding", "Track Offer accepted, Work email created, Joined the portal, W-9 on file, Bank account on file, Contractor agreement signed, and MIHP training assigned. Nurses and social workers also require license verification; BLS / CPR is optional for registered nurses."],
      ["Collect signatures", "Send the contractor a W-9 first, then the agreement. The contractor signs the agreement before the company countersigns. Fully signed documents remain available as individual records."],
      ["Manage training", "Assign from the catalog. An unfinished assignment or one awaiting confirmation can be taken back; a confirmed assignment cannot. MIHP training assigned completes only when every assignment is confirmed, and a new assignment reopens that check."],
      ["Combine documents", "Select profile PDFs and images in any combination, arrange them, and download one combined PDF without changing the source files."],
    ]},
    { title: "Pay ops", intro: "Pay operations is visible only to owners and administrators.", sections: [
      ["Review hours", "Open submitted contractor hours, compare the entries with the pay period, then approve them or send them back with a correction request."],
      ["Log payments", "After payment is issued, log the amount, payment date, covered period, and reference against the contractor."],
      ["Prepare year-end forms", "Review payer and contractor tax details, email each contractor their 1099 Copy B, and export the IRIS CSV used for IRS filing."],
    ]},
    { title: "Company files", intro: "Company files keeps the organization’s shared source documents searchable while preserving every original upload.", sections: [
      ["Name and group files", "Every file has an extension-free display name, an unchanging original uploaded filename with its extension, and a group. Search checks both names."],
      ["Rename safely", "Change the display name after saving whenever a clearer label is needed. The stored original filename never changes and remains visible in the file record."],
      ["Preview and combine", "Preview a file before saving it. To make a packet, select PDFs and images from any groups, arrange them, and download one combined PDF. Source files remain separate and unchanged."],
    ]},
    { title: "Trainings", intro: "Owners and administrators maintain the training catalog, assign learning to staff, and confirm completion when evidence is required.", sections: [
      ["Build the catalog", "Add trainings as outside links, PDFs, or Word files. Keep the title, provider, instructions, certificate requirement, and source material clear so staff know exactly what to complete."],
      ["Open training materials", "Outside links open the provider’s site. PDF and Word training files open inside the portal when they can be shown there. If a Word file cannot be displayed, staff can download it and read it in a compatible application."],
      ["Submit required evidence", "When a certificate is required, the staff member completes the training, uploads the certificate, and then marks the assignment done. Marking done is blocked until the required certificate is present."],
      ["Review and confirm", "A submitted assignment remains Waiting for confirmation. An administrator can open the entire certificate in the portal or download it, then confirm the training to mark it Complete."],
      ["Manage assignments", "An unfinished assignment or one waiting for confirmation can be taken back. A confirmed training cannot. MIHP training assigned completes only when every training assigned to that person is confirmed; assigning another training clears that onboarding check until the new assignment is confirmed."],
    ]},
    { title: "Settings", intro: "Owners and administrators use Settings to maintain organization-wide information, templates, access, and connections.", sections: [
      ["Company profile", "Keep Village Start’s legal and public names, contact information, address, and service area current. These details support consistent records throughout the portal."],
      ["1099 payer identity", "Maintain the payer legal name, federal tax identification number, payer address, and contact used for contractor 1099 reporting and IRIS exports."],
      ["Agreement template", "Keep the contractor agreement template used when a new agreement is sent. Review the language before sending; the contractor signs first and the company countersigns afterward."],
      ["Team access", "Decide which parts of the portal each person can open. Owners and administrators receive only the organization tools appropriate to their responsibilities, while staff remain limited to their own home, timesheets, trainings, and the guide."],
      ["Google Calendar", "Connect or manage the organization’s Google Calendar connection so approved portal scheduling can stay coordinated with the team’s calendar."],
    ]},
  ]
  const [index,setIndex]=useState(0)
  const chapter = chapters[index]
  return <div className="page guide-page"><div className="page-heading"><div><h1>Portal guide</h1><p>Practical guidance for using Village Start’s daily tools.</p></div></div><div className="guide-layout"><nav>{chapters.map((x,i)=><button className={i===index?"active":""} onClick={()=>setIndex(i)} key={x.title}><span>{i+1}</span>{x.title}</button>)}</nav><article className="panel guide-article"><span className="eyebrow">CHAPTER {index+1} OF {chapters.length}</span><h1>{chapter.title}</h1><p>{chapter.intro}</p><div className="guide-sections">{chapter.sections.map(([title,body],i)=><section key={title}><span>{String(i+1).padStart(2,"0")}</span><div><h2>{title}</h2><p>{body}</p></div></section>)}</div><div className="guide-nav"><Button variant="secondary" onClick={()=>setIndex(Math.max(0,index-1))} className={index===0?"is-disabled":""}>Previous chapter</Button><span>{index+1} / {chapters.length}</span><Button onClick={()=>setIndex(Math.min(chapters.length-1,index+1))} className={index===chapters.length-1?"is-disabled":""}>Next chapter <Icon name="arrow" size={15}/></Button></div></article></div></div>
}

function PlaceholderPage({ page }: { page: string }) {
  const content: Record<string, [string, string, IconName]> = {
    Hiring: [
      "Hiring pipeline",
      "Track candidates from first conversation through onboarding.",
      "hiring",
    ],
    Referrals: [
      "Incoming referrals",
      "Coordinate new family referrals across Wayne, Oakland, and Genesee counties.",
      "referrals",
    ],
    Settings: [
      "Organization settings",
      "Manage portal access, team roles, notifications, and organization details.",
      "settings",
    ],
    "Portal guide": [
      "Village Start portal guide",
      "Step-by-step help for administrators and staff.",
      "help",
    ],
  }
  const [title, text, icon] = content[page] || [page, "", "home"]
  return (
    <div className="page">
      <div className="page-heading">
        <div>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
        <Button icon="plus">
          {page === "Hiring"
            ? "Add candidate"
            : page === "Referrals"
              ? "Add referral"
              : "Get help"}
        </Button>
      </div>
      <section className="panel placeholder">
        <div className="placeholder-icon">
          <Icon name={icon} size={30} />
        </div>
        <h2>
          {page === "Hiring"
            ? "3 candidates in progress"
            : page === "Referrals"
              ? "4 new referrals need review"
              : "Everything your team needs"}
        </h2>
        <p>
          {page === "Hiring"
            ? "One candidate is ready for a final interview this week."
            : page === "Referrals"
              ? "Review eligibility and assign each family to the right team member."
              : "Choose a topic to view guidance and organization preferences."}
        </p>
        <Button variant="secondary">View details</Button>
      </section>
    </div>
  )
}

function Login({ onLogin }: { onLogin: (role: "admin" | "staff") => void }) {
  const [role, setRole] = useState<"admin" | "staff">("admin")
  const [screen, setScreen] = useState<"signin" | "forgot" | "reset" | "invite" | "w9" | "agreement" | "signed" | "signed-w9">("signin")
  if (screen !== "signin") return <StandaloneScreen screen={screen} setScreen={setScreen} onLogin={() => onLogin("staff")} />
  return (
    <main className="login-page">
      <section className="login-brand">
        <Brand full />
        <div>
          <span className="eyebrow">CARE STARTS WITH CONNECTION</span>
          <h1>Supporting the people who support Michigan families.</h1>
          <p>A secure home for the Village Start MIHP team.</p>
        </div>
        <footer>Maternal & Infant Health Program · Michigan</footer>
      </section>
      <section className="login-panel">
        <div className="login-card">
          <h2>Welcome back</h2>
          <p>Sign in to your Village Start portal.</p>
          <label>
            Email address
            <input
              type="email"
              defaultValue={
                role === "admin"
                  ? "denise@villagestart.org"
                  : "staff@villagestart.org"
              }
            />
          </label>
          <label>
            Password
            <input type="password" defaultValue="village-start" />
          </label>
          <div className="login-options">
            <label>
              <input type="checkbox" defaultChecked /> Remember me
            </label>
            <button onClick={() => setScreen("forgot")}>Forgot password?</button>
          </div>
          <div className="role-demo">
            <span>Preview as</span>
            <button
              className={role === "admin" ? "active" : ""}
              onClick={() => setRole("admin")}
            >
              Administrator
            </button>
            <button
              className={role === "staff" ? "active" : ""}
              onClick={() => setRole("staff")}
            >
              Staff member
            </button>
          </div>
          <Button onClick={() => onLogin(role)}>Sign in securely</Button>
          <small>
            <Icon name="lock" size={14} /> Your information is protected and
            encrypted.
          </small>
          <div className="outside-links"><span>SCREEN PREVIEWS</span><button onClick={() => setScreen("invite")}>Accept invite</button><button onClick={() => setScreen("reset")}>New password</button><button onClick={() => setScreen("w9")}>Contractor documents</button></div>
        </div>
      </section>
    </main>
  )
}

function StandaloneScreen({ screen, setScreen, onLogin }: { screen: "forgot" | "reset" | "invite" | "w9" | "agreement" | "signed" | "signed-w9"; setScreen: (s: "signin" | "forgot" | "reset" | "invite" | "w9" | "agreement" | "signed" | "signed-w9") => void; onLogin: () => void }) {
  if (screen === "w9" || screen === "agreement" || screen === "signed" || screen === "signed-w9") return <ContractorDocument screen={screen} setScreen={setScreen} />
  const copy = {
    forgot: ["Reset your password", "Enter your work email and we’ll send a secure reset link.", "Send reset link"],
    reset: ["Choose a new password", "This secure link was sent to alicia@villagestart.org.", "Save new password"],
    invite: ["Join Village Start", "Denise invited you to the staff portal as a Community Health Worker.", "Accept invite"],
  }[screen]
  return <main className="standalone-page"><div className="standalone-brand"><Brand /><span>SECURE TEAM PORTAL</span></div><section className="login-card standalone-card"><button className="back-link" onClick={() => setScreen("signin")}>‹ Back to sign in</button><div className="standalone-icon"><Icon name={screen === "forgot" ? "arrow" : "lock"} size={25} /></div><h2>{copy[0]}</h2><p>{copy[1]}</p>{screen === "forgot" ? <label>WORK EMAIL<input type="email" defaultValue="alicia@villagestart.org" /></label> : <><label>NEW PASSWORD<input type="password" placeholder="At least 10 characters" /></label><label>CONFIRM PASSWORD<input type="password" placeholder="Enter it again" /></label><div className="password-rules"><span>At least 10 characters</span><span>One number or symbol</span></div></>}<Button onClick={screen === "invite" ? onLogin : () => setScreen("signin")}>{copy[2]}</Button>{screen === "invite" && <small>By continuing, you agree to use this portal only for authorized Village Start work.</small>}</section></main>
}

function ContractorDocument({ screen, setScreen }: { screen: "w9" | "agreement" | "signed" | "signed-w9"; setScreen: (s: "signin" | "forgot" | "reset" | "invite" | "w9" | "agreement" | "signed" | "signed-w9") => void }) {
  const agreement = screen === "agreement"
  const [signatureName, setSignatureName] = useState("Alicia Carter")
  const [w9Acknowledged, setW9Acknowledged] = useState(false)
  const [agreementAcknowledged, setAgreementAcknowledged] = useState(false)
  const [w9AckError, setW9AckError] = useState(false)
  const [agreementAckError, setAgreementAckError] = useState(false)
  if (screen === "signed-w9") return <main className="document-page"><header><Brand /><div><Badge tone="green">Signed copy</Badge><Button variant="secondary" icon="download">Download PDF</Button></div></header><section className="signed-record"><div className="record-stamp"><Icon name="check" size={28} /></div><span className="eyebrow">YOUR SECURE SIGNED COPY</span><h1>Form W-9</h1><p>Alicia Carter · Completed March 13, 2025</p><div className="signed-copy-file"><Icon name="document" size={28} /><div><strong>Alicia_Carter_Form_W9_Signed.pdf</strong><span>Signed PDF · 840 KB</span></div><Button icon="download">Download PDF</Button></div><div className="email-expiry"><Icon name="clock" /><span>This secure copy link expires March 13, 2026. Download the PDF for your records.</span></div><div className="record-actions"><Button variant="secondary" onClick={() => setScreen("signed")}>Open signed agreement</Button><Button onClick={() => setScreen("signin")}>Done</Button></div></section></main>
  if (screen === "signed") return <main className="document-page"><header><Brand /><div><Badge tone="green">Fully signed</Badge><Button variant="secondary" icon="download">Download PDF</Button></div></header><section className="signed-record"><div className="record-stamp"><Icon name="check" size={28} /></div><span className="eyebrow">PERMANENT SIGNED RECORD</span><h1>Independent Contractor Agreement</h1><p>Alicia Carter and Village Start MIHP, LLC</p><div className="signature-audit"><div><span>CONTRACTOR SIGNED</span><strong>Alicia Carter</strong><small>March 14, 2025 · 10:42 AM ET</small></div><div><span>COMPANY COUNTERSIGNED</span><strong>Denise Harris, Owner</strong><small>March 14, 2025 · 2:16 PM ET</small></div></div><div className="record-actions"><Button variant="secondary" onClick={() => setScreen("signed-w9")}>Open signed W-9</Button><Button onClick={() => setScreen("signin")}>Done</Button></div></section></main>
  return <main className="document-page"><header><Brand /><div><span>Secure document for Alicia Carter</span><Button variant="ghost" onClick={() => setScreen("signin")}>Exit</Button></div></header><div className="document-shell"><aside><span className="eyebrow">YOUR ONBOARDING</span><div className="document-step complete"><Icon name="check" /> Identity confirmed</div><button className={`document-step ${!agreement ? "active" : "complete"}`} onClick={() => setScreen("w9")}><Icon name={!agreement ? "document" : "check"} /> Complete W-9</button><button className={`document-step ${agreement ? "active" : ""}`} onClick={() => setScreen("agreement")}><Icon name="document" /> Sign agreement</button><p>Questions? Contact Denise at denise@villagestart.org.</p></aside><section className="legal-form">{agreement ? <><span className="eyebrow">INDEPENDENT CONTRACTOR AGREEMENT</span><h1>Review and sign</h1><p>This agreement is between Village Start MIHP, LLC and Alicia Carter for community health worker services.</p><div className="legal-copy"><h2>1. Services</h2><p>The contractor will provide maternal and infant health support, care coordination, documentation, and related services in accordance with MIHP requirements.</p><h2>2. Independent contractor relationship</h2><p>The contractor controls the manner of work and is responsible for applicable federal, state, and local taxes.</p><h2>3. Confidentiality</h2><p>Protected health and personal information must be handled according to Village Start policy and applicable law.</p></div><label>TYPE YOUR LEGAL NAME<input value={signatureName} onChange={(e) => setSignatureName(e.target.value)} /></label><SignatureStylePicker name={signatureName} /><label className={`signature-check ${agreementAckError ? "has-error" : ""}`}><input type="checkbox" checked={agreementAcknowledged} onChange={(e) => { setAgreementAcknowledged(e.target.checked); if (e.target.checked) setAgreementAckError(false) }} /> I have read this agreement and intend this entry to be my electronic signature.</label>{agreementAckError && <div className="ack-error" role="alert"><Icon name="warning" size={15} /><span>You must check the acknowledgement box before signing this agreement.</span></div>}<Button onClick={() => { if (!agreementAcknowledged) { setAgreementAckError(true); return } setScreen("signed") }}>Sign contractor agreement</Button><small>Village Start will countersign after you. You’ll receive a link to the fully signed record.</small></> : <><span className="eyebrow">IRS FORM W-9</span><h1>Request for Taxpayer Identification Number</h1><p>Complete and sign this secure form. Village Start uses it only for contractor tax reporting.</p><div className="form-grid"><label>LEGAL NAME<input value={signatureName} onChange={(e) => setSignatureName(e.target.value)} /></label><label>BUSINESS NAME, IF DIFFERENT<input /></label><label>FEDERAL TAX CLASSIFICATION<select defaultValue="Individual / sole proprietor"><option>Individual / sole proprietor</option><option>LLC — C corporation</option><option>LLC — S corporation</option><option>LLC — Partnership</option></select></label><label>SSN OR EIN<input defaultValue="•••-••-4821" /></label><label className="full-field">ADDRESS<input defaultValue="4812 Oakman Blvd, Dearborn, MI 48126" /></label></div><SignatureStylePicker name={signatureName} /><label className={`signature-check ${w9AckError ? "has-error" : ""}`}><input type="checkbox" checked={w9Acknowledged} onChange={(e) => { setW9Acknowledged(e.target.checked); if (e.target.checked) setW9AckError(false) }} /> Under penalties of perjury, I certify this information is correct and authorize my electronic signature.</label>{w9AckError && <div className="ack-error" role="alert"><Icon name="warning" size={15} /><span>You must check the acknowledgement box before signing the W-9.</span></div>}<Button onClick={() => { if (!w9Acknowledged) { setW9AckError(true); return } setScreen("agreement") }}>Sign W-9 and continue</Button></>}</section></div></main>
}

export default function App() {
  const [signedIn, setSignedIn] = useState(true)
  const [role, setRole] = useState<"admin" | "staff">("admin")
  const [page, setPage] = useState("Home")
  const [profile, setProfile] = useState(false)
  const [mobileNav, setMobileNav] = useState(false)
  const [notifications, setNotifications] = useState(false)
  const [clients, setClients] = useState<ClientRecord[]>(savedClients)
  if (!signedIn)
    return (
      <Login
        onLogin={(nextRole) => {
          setRole(nextRole)
          setPage(nextRole === "admin" ? "Home" : "My home")
          setSignedIn(true)
        }}
      />
    )
  const navigate = (next: string) => {
    setPage(next)
    setProfile(false)
  }
  let content: ReactNode
  if (profile) content = <StaffProfile back={() => setProfile(false)} clients={clients} />
  else if (role === "admin" && page === "Home")
    content = <Dashboard navigate={navigate} />
  else if (page === "Staff")
    content = <StaffDirectory openProfile={() => setProfile(true)} />
  else if (page === "Clients") content = <Clients clients={clients} setClients={setClients} />
  else if (page === "Pay ops") content = <PayOps />
  else if (page === "Trainings") content = <Trainings />
  else if (page === "Company files") content = <CompanyFiles />
  else if (page === "Hiring") content = <Hiring />
  else if (page === "Referrals") content = <Referrals />
  else if (page === "Settings") content = <Settings />
  else if (page === "Portal guide") content = <PortalGuide />
  else if (page === "My home") content = <StaffHome navigate={navigate} />
  else if (page === "Timesheets") content = <Timesheets clients={clients} />
  else if (page === "My trainings") content = <MyTrainings />
  else content = <PlaceholderPage page={page} />
  return (
    <div className="app-shell">
      <Sidebar
        page={page}
        setPage={navigate}
        role={role}
        open={mobileNav}
        close={() => setMobileNav(false)}
      />
      {mobileNav && (
        <button
          className="scrim"
          onClick={() => setMobileNav(false)}
          aria-label="Close navigation"
        />
      )}
      <div className="main-shell">
        <Header
          title={profile ? "Staff profile" : page}
          menu={() => setMobileNav(true)}
          notifications={notifications}
          setNotifications={setNotifications}
        />
        {content}
        <div className="demo-switch">
          <span>DEMO VIEW</span>
          <button
            onClick={() => {
              const next = role === "admin" ? "staff" : "admin"
              setRole(next)
              setPage(next === "admin" ? "Home" : "My home")
              setProfile(false)
            }}
          >
            {role === "admin" ? "Switch to staff" : "Switch to admin"}
          </button>
          <button onClick={() => setSignedIn(false)}>
            <Icon name="logout" size={15} /> Sign out
          </button>
        </div>
      </div>
    </div>
  )
}
