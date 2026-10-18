import { useState } from "react"
import type { FormEvent } from "react"

type IconName = "grid" | "chart" | "flag" | "layers" | "activity" | "book" | "file" | "settings" | "help" | "chevron" | "arrow" | "plus" | "search" | "bell" | "download" | "calendar" | "check" | "people" | "school" | "close" | "logout" | "menu" | "target"
function Icon({
  name,
  size = 20,
  ...props
}: {
  name: IconName
  size?: number
  className?: string
}) {
  const paths: Record<IconName, React.ReactNode> = {
    grid: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </>
    ),
    chart: (
      <>
        <path d="M4 3v17h17M8 15v-4m5 4V6m5 9V9" />
      </>
    ),
    flag: (
      <>
        <path d="M5 21V4m0 0c5-5 9 5 15 0v10c-6 5-10-5-15 0" />
      </>
    ),
    layers: (
      <>
        <path d="m12 3 10 5-10 5L2 8l10-5Zm-9 9 9 5 9-5M3 17l9 5 9-5" />
      </>
    ),
    activity: (
      <>
        <path d="M3 12h4l3-8 4 16 3-8h4" />
      </>
    ),
    book: (
      <>
        <path d="M12 5v16M3 4c4-1 6 0 9 2 3-2 5-3 9-2v15c-4-1-6 0-9 2-3-2-5-3-9-2V4Z" />
      </>
    ),
    file: (
      <>
        <path d="M14 3H5v18h14V8l-5-5Zm0 0v6h5M8 13h8m-8 4h5" />
      </>
    ),
    settings: (
      <>
        <path d="m10 3-1 3-3 1-3 3 2 3-1 4 4 1 3 3 3-2 4 1 1-4 3-3-2-3 1-4-4-1-3-2-3 2Z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
    help: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M9 9a3 3 0 1 1 5 2c-2 1-2 2-2 3m0 3h.01" />
      </>
    ),
    chevron: <path d="m9 5 7 7-7 7" />,
    arrow: <path d="M4 12h16m-6-6 6 6-6 6" />,
    plus: <path d="M12 5v14M5 12h14" />,
    search: (
      <>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m16 16 5 5" />
      </>
    ),
    bell: (
      <>
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" />
      </>
    ),
    download: <path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5" />,
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M7 3v4m10-4v4M3 11h18" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    people: (
      <>
        <circle cx="9" cy="7" r="3" />
        <path d="M3 21v-4a6 6 0 0 1 12 0v4m2-17a3 3 0 0 1 0 6m2 4a5 5 0 0 1 3 5v2" />
      </>
    ),
    school: (
      <>
        <path d="m2 9 10-6 10 6-10 6L2 9Zm4 3v6l6 3 6-3v-6M22 9v8" />
      </>
    ),
    close: <path d="m6 6 12 12M6 18 18 6" />,
    logout: <path d="M9 3H3v18h6m0-9h12m-5-5 5 5-5 5" />,
    menu: <path d="M4 6h16M4 12h16M4 18h16" />,
    target: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" />
      </>
    ),
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {paths[name]}
    </svg>
  )
}

const dimensions = [
  "Governance & Management",
  "Basic Education Curriculum",
  "Teacher Development",
  "Learner Development",
]
const dimensionShort = [
  "Governance",
  "Curriculum",
  "Teacher Development",
  "Learner Development",
]
type Intervention = {
  id: string
  title: string
  dimension: number
  owner: string
  initials: string
  progress: number
  status: string
  due: string
  baseline: number
  target: number
  actual: number
  concern?: string
}
const initialInterventions: Intervention[] = [
  {
    id: "INT-001",
    title: "Reading proficiency enhancement program",
    dimension: 3,
    owner: "Dr. Maria Santos",
    initials: "MS",
    progress: 72,
    status: "On track",
    due: "Jun 30, 2025",
    baseline: 58,
    target: 85,
    actual: 76,
  },
  {
    id: "INT-002",
    title: "Faculty digital pedagogy training",
    dimension: 2,
    owner: "Prof. Jose Reyes",
    initials: "JR",
    progress: 65,
    status: "On track",
    due: "Jul 15, 2025",
    baseline: 42,
    target: 90,
    actual: 73,
  },
  {
    id: "INT-003",
    title: "Curriculum alignment and review",
    dimension: 1,
    owner: "Dr. Ana Dela Cruz",
    initials: "AC",
    progress: 38,
    status: "At risk",
    due: "Jun 20, 2025",
    baseline: 52,
    target: 90,
    actual: 64,
  },
  {
    id: "INT-004",
    title: "School governance capacity building",
    dimension: 0,
    owner: "Dr. Roberto Lim",
    initials: "RL",
    progress: 100,
    status: "Completed",
    due: "May 28, 2025",
    baseline: 60,
    target: 85,
    actual: 89,
  },
  {
    id: "INT-005",
    title: "Learner numeracy support initiative",
    dimension: 3,
    owner: "Prof. Elena Garcia",
    initials: "EG",
    progress: 24,
    status: "On track",
    due: "Aug 10, 2025",
    baseline: 48,
    target: 80,
    actual: 56,
  },
]
const navItems: { label: string icon: IconName count?: number }[] = [
  { label: "Overview", icon: "grid" },
  { label: "Education Analytics", icon: "chart" },
  { label: "Educational Concerns", icon: "flag", count: 12 },
  { label: "Interventions", icon: "layers" },
  { label: "Monitoring & Evaluation", icon: "activity" },
  { label: "Research Utilization", icon: "book" },
  { label: "Reports", icon: "file" },
]
const concerns = [
  {
    name: "Below-target reading comprehension",
    dimension: 3,
    severity: "High",
    source: "Academic achievement assessment",
    status: "Intervention active",
  },
  {
    name: "Limited adoption of digital teaching tools",
    dimension: 2,
    severity: "High",
    source: "Faculty development survey",
    status: "Intervention active",
  },
  {
    name: "Gaps in competency-based curriculum alignment",
    dimension: 1,
    severity: "High",
    source: "Curriculum review findings",
    status: "Needs attention",
  },
  {
    name: "Inconsistent school improvement planning",
    dimension: 0,
    severity: "Medium",
    source: "Governance assessment",
    status: "Resolved",
  },
  {
    name: "Low foundational numeracy performance",
    dimension: 3,
    severity: "Medium",
    source: "Learner baseline assessment",
    status: "Intervention active",
  },
]

function Badge({ text }: { text: string }) {
  return (
    <span
      className={`badge ${
        text === "At risk" || text === "High" || text === "Needs attention"
          ? "amber"
          : text === "Completed" || text === "Resolved"
            ? "blue"
            : "green"
      }`}
    >
      <i />
      {text}
    </span>
  )
}
function Dimension({ index }: { index: number }) {
  return (
    <span className={`dimension dim-${index}`}>
      <i />
      {dimensionShort[index]}
    </span>
  )
}
function App() {
  const [page, setPage] = useState("Overview")
  const [period, setPeriod] = useState("This semester")
  const [dimension, setDimension] = useState("All dimensions")
  const [items, setItems] = useState(
    initialInterventions.map((item, index) => ({
      ...item,
      concern: concerns[index].name,
    })),
  )
  const [search, setSearch] = useState("")
  const [modal, setModal] = useState<"new" | "notifications" | "help" | null>(
    null,
  )
  const [selected, setSelected] = useState<Intervention | null>(null)
  const [toast, setToast] = useState("")
  const [mobileNav, setMobileNav] = useState(false)
  const [statusFilter, setStatusFilter] = useState("All statuses")
  const [reportType, setReportType] = useState("Institutional overview")
  const notify = (text: string) => {
    setToast(text)
    window.setTimeout(() => setToast(""), 4500)
  }
  const navigate = (label: string) => {
    setPage(label)
    setSearch("")
    setMobileNav(false)
  }
  const filtered = items.filter(
    (i) =>
      (dimension === "All dimensions" ||
        dimensions[i.dimension] === dimension) &&
      (statusFilter === "All statuses" || i.status === statusFilter) &&
      `${i.title} ${i.owner} ${i.id}`
        .toLowerCase()
        .includes(search.toLowerCase()),
  )
  const download = () => {
    const rows = [
      [
        "ID",
        "Intervention",
        "Linked concern",
        "Dimension",
        "Owner",
        "Status",
        "Progress (%)",
        "Baseline",
        "Target",
        "Actual",
      ],
      ...filtered.map((i) => [
        i.id,
        i.title,
        i.concern ?? "",
        dimensions[i.dimension],
        i.owner,
        i.status,
        i.progress,
        i.baseline,
        i.target,
        i.actual,
      ]),
    ]
    const blob = new Blob(
      [
        rows
          .map((row) =>
            row.map((v) => `"${String(v).replaceAll('"', '""')}"`).join(","),
          )
          .join("\n"),
      ],
      { type: "text/csv;charset=utf-8;" },
    )
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `BukSU-EduInsight-${reportType.toLowerCase().replaceAll(" ", "-")}.csv`
    a.click()
    URL.revokeObjectURL(url)
    notify("Your demonstration report has been downloaded.")
  }
  const addIntervention = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const owner = String(data.get("owner"))
    setItems((prev) => [
      ...prev,
      {
        id: `INT-${String(prev.length + 1).padStart(3, "0")}`,
        title: String(data.get("title")),
        concern: String(data.get("concern")),
        dimension: Number(data.get("dimension")),
        owner,
        initials: owner
          .split(" ")
          .map((x) => x[0])
          .slice(0, 2)
          .join(""),
        progress: 0,
        status: "On track",
        due: new Date(String(data.get("due")) + "T12:00:00").toLocaleDateString(
          "en-US",
          { month: "short", day: "numeric", year: "numeric" },
        ),
        baseline: Number(data.get("baseline")),
        target: Number(data.get("target")),
        actual: Number(data.get("baseline")),
      },
    ])
    setModal(null)
    notify("Intervention created. Your session data has been updated.")
    setPage("Interventions")
  }
  const table = (compact = false) => (
    <div className="table-scroll">
      <table>
        <thead>
          <tr>
            <th>Intervention</th>
            <th>Dimension</th>
            <th>Responsible personnel</th>
            <th>Progress</th>
            <th>Status</th>
            {!compact && <th>Due date</th>}
            <th />
          </tr>
        </thead>
        <tbody>
          {filtered.slice(0, compact ? 4 : undefined).map((i) => (
            <tr
              key={i.id}
              onClick={() => setSelected(i)}
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setSelected(i)}
              aria-label={`View ${i.title}`}
            >
              <td>
                <strong>{i.title}</strong>
                <small>{i.id}</small>
              </td>
              <td>
                <Dimension index={i.dimension} />
              </td>
              <td>
                <span className="person">
                  <span className={`avatar avatar-${i.dimension}`}>
                    {i.initials}
                  </span>
                  {i.owner}
                </span>
              </td>
              <td>
                <div className="table-progress">
                  <div>
                    <i style={{ width: `${i.progress}%` }} />
                  </div>
                  <span>{i.progress}%</span>
                </div>
              </td>
              <td>
                <Badge text={i.status} />
              </td>
              {!compact && <td className="muted">{i.due}</td>}
              <td>
                <Icon name="chevron" size={16} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {!filtered.length && (
        <div className="empty-state">
          <Icon name="search" size={30} />
          <h3>No matching interventions</h3>
          <p>Try a different search or dimension.</p>
        </div>
      )}
    </div>
  )
  return (
    <div className="app-shell">
      {mobileNav && (
        <div className="sidebar-scrim" onClick={() => setMobileNav(false)} />
      )}
      <aside className={`sidebar ${mobileNav ? "open" : ""}`}>
        <a
          className="brand"
          href="#"
          onClick={(e) => {
            e.preventDefault()
            navigate("Overview")
          }}
        >
          <span className="brand-mark">
            <Icon name="school" size={29} />
          </span>
          <span>
            BukSU <b>EduInsight</b>
            <small>RESEARCH INTO ACTION</small>
          </span>
        </a>
        <div className="institution">
          <span className="institution-logo">
            <Icon name="school" size={22} />
          </span>
          <div>
            <strong>Bukidnon State University</strong>
            <span>Malaybalay City, Bukidnon</span>
          </div>
          <Icon name="chevron" size={14} />
        </div>
        <div className="nav-label">WORKSPACE</div>
        <nav>
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`nav-item ${page === item.label ? "active" : ""}`}
              onClick={() => navigate(item.label)}
            >
              <Icon name={item.icon} size={19} />
              <span>{item.label}</span>
              {item.count && <span className="nav-count">{item.count}</span>}
            </button>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="research-note">
            <span>
              <Icon name="book" size={18} />
              From evidence to impact
            </span>
            <p>
              Turning educational research into meaningful institutional action.
            </p>
            <button onClick={() => navigate("Research Utilization")}>
              Explore the framework <Icon name="arrow" size={14} />
            </button>
          </div>
          <button
            className={`nav-item ${page === "Settings" ? "active" : ""}`}
            onClick={() => navigate("Settings")}
          >
            <Icon name="settings" size={19} />
            Settings
          </button>
          <button className="nav-item" onClick={() => setModal("help")}>
            <Icon name="help" size={19} />
            Help & support
            <Icon name="chevron" size={14} />
          </button>
          <div className="sidebar-footer">
            <span className="tiny-dot" />
            Proof of concept <span>v2.0</span>
          </div>
        </div>
      </aside>
      <div className="main-shell">
        <header className="topbar">
          <div className="breadcrumb">
            <button
              className="mobile-menu icon-button"
              onClick={() => setMobileNav(true)}
              aria-label="Open navigation"
            >
              <Icon name="menu" />
            </button>
            <span>Workspace</span>
            <Icon name="chevron" size={13} />
            <strong>{page}</strong>
          </div>
          <div className="topbar-right">
            <span className="demo-pill">
              <i />
              Demo workspace
            </span>
            <button
              className="notification-button icon-button"
              aria-label="Notifications"
              onClick={() => setModal("notifications")}
            >
              <Icon name="bell" />
              <i />
            </button>
            <span className="topbar-divider" />
            <button
              className="user-profile"
              onClick={() => navigate("Settings")}
            >
              <span className="user-avatar">AD</span>
              <span>
                <strong>Alex Dela Cruz</strong>
                <small>System Administrator</small>
              </span>
              <span className="down-chevron">⌄</span>
            </button>
          </div>
        </header>
        <main>
          <div className="page-heading">
            <div>
              <div className="eyebrow">BUKSU EDUINSIGHT</div>
              <h1>{page === "Overview" ? "Institutional overview" : page}</h1>
              <p>
                {page === "Overview"
                  ? "A clearer view of education. A stronger path to impact."
                  : page === "Interventions"
                    ? "Transform educational concerns into coordinated, measurable action."
                    : page === "Monitoring & Evaluation"
                      ? "Connect baseline evidence, institutional targets, and actual outcomes."
                      : page === "Educational Concerns"
                        ? "Identify what needs attention. Connect every concern to action."
                        : page === "Research Utilization"
                          ? "Follow the journey from research findings to institutional impact."
                          : page === "Education Analytics"
                            ? "Understand performance across the four educational dimensions."
                            : page === "Reports"
                              ? "Turn institutional information into decision-ready reports."
                              : "Manage your demonstration workspace and preferences."}
              </p>
            </div>
            <div className="heading-actions">
              <button className="button secondary" onClick={download}>
                <Icon name="download" size={16} />
                Export report
              </button>
              <button
                className="button primary"
                onClick={() => setModal("new")}
              >
                <Icon name="plus" size={17} />
                New intervention
              </button>
            </div>
          </div>
          {page === "Overview" && (
            <div className="welcome-banner">
              <div className="welcome-copy">
                <span className="banner-label">
                  <span className="tiny-dot" />
                  RESEARCH-DRIVEN. ACTION-ORIENTED.
                </span>
                <h2>Good research deserves real-world impact.</h2>
                <p>
                  Monitor educational progress, coordinate interventions, and
                  make
                  <br className="desktop-break" /> evidence-based decisions—all
                  in one connected workspace.
                </p>
                <button onClick={() => navigate("Research Utilization")}>
                  View research-to-action framework{" "}
                  <Icon name="arrow" size={16} />
                </button>
              </div>
              <div className="banner-art" aria-hidden="true">
                <div className="art-orbit orbit-one" />
                <div className="art-orbit orbit-two" />
                <div className="art-leaf leaf-one" />
                <div className="art-leaf leaf-two" />
                <div className="art-leaf leaf-three" />
                <div className="art-line" />
                <div className="art-card card-back">
                  <Icon name="book" size={26} />
                  <span />
                  <span />
                </div>
                <div className="art-card card-front">
                  <span className="art-check">
                    <Icon name="check" size={17} />
                  </span>
                  <div className="art-bars">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                  <span className="art-card-line" />
                </div>
                <div className="art-spark">+</div>
              </div>
            </div>
          )}
          {!["Settings", "Reports", "Research Utilization"].includes(page) && (
            <div className="filter-row">
              <div className="section-context">
                <span className="live-dot" />
                {page === "Overview"
                  ? "Your institution at a glance"
                  : "Institutional performance"}
                <span className="last-updated">Updated June 16, 2025</span>
              </div>
              <div className="filters">
                <div className="select-wrap">
                  <Icon name="calendar" size={15} />
                  <select
                    aria-label="Reporting period"
                    value={period}
                    onChange={(e) => setPeriod(e.target.value)}
                  >
                    <option>This semester</option>
                    <option>Previous semester</option>
                    <option>Academic year 2024–2025</option>
                  </select>
                </div>
                <div className="select-wrap">
                  <Icon name="layers" size={15} />
                  <select
                    aria-label="Educational dimension"
                    value={dimension}
                    onChange={(e) => setDimension(e.target.value)}
                  >
                    <option>All dimensions</option>
                    {dimensions.map((d) => (
                      <option key={d}>{d}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}
          {["Overview", "Education Analytics"].includes(page) && (
            <>
              <div className="stats-grid">
                {[
                  {
                    label: "Educational concerns",
                    value:
                      dimension === "All dimensions"
                        ? period === "Previous semester"
                          ? "21"
                          : "24"
                        : "6",
                    icon: "flag" as IconName,
                    color: "sage",
                    detail: "12 require attention",
                    trend: "Across all four dimensions",
                    type: "",
                  },
                  {
                    label: "Active interventions",
                    value:
                      dimension === "All dimensions"
                        ? String(18 + items.length - 5)
                        : String(
                            filtered.filter((i) => i.status !== "Completed")
                              .length + 2,
                          ),
                    icon: "layers" as IconName,
                    color: "blue",
                    detail: "+4 this semester",
                    trend: "Turning insights into action",
                    type: "positive",
                  },
                  {
                    label: "Completion rate",
                    value: period === "Previous semester" ? "62%" : "78%",
                    icon: "check" as IconName,
                    color: "purple",
                    detail: "↑ 12% vs. last semester",
                    trend: "Of planned intervention activities",
                    type: "positive",
                  },
                  {
                    label: "Research utilization",
                    value: period === "Previous semester" ? "71%" : "86%",
                    icon: "book" as IconName,
                    color: "gold",
                    detail: "↑ 8% vs. last semester",
                    trend: "Findings translated into action",
                    type: "positive",
                  },
                ].map((s) => (
                  <div className="stat-card" key={s.label}>
                    <div className="stat-top">
                      <span>{s.label}</span>
                      <span className={`stat-icon ${s.color}`}>
                        <Icon name={s.icon} size={18} />
                      </span>
                    </div>
                    <div className="stat-number">
                      {s.value}
                      <span className={s.type}>{s.detail}</span>
                    </div>
                    <p>{s.trend}</p>
                  </div>
                ))}
              </div>
              <div className="analytics-grid">
                <section className="panel dimension-panel">
                  <div className="panel-header">
                    <div>
                      <h2>Performance by dimension</h2>
                      <p>
                        Baseline vs. current achievement across the research
                        framework
                      </p>
                    </div>
                    <button
                      className="text-button"
                      onClick={() =>
                        page === "Overview"
                          ? navigate("Education Analytics")
                          : notify(
                              "Showing all dimension performance for the selected period.",
                            )
                      }
                    >
                      View analytics <Icon name="arrow" size={15} />
                    </button>
                  </div>
                  <div className="chart-legend">
                    <span>
                      <i className="baseline-dot" />
                      Baseline
                    </span>
                    <span>
                      <i className="current-dot" />
                      Current
                    </span>
                    <span className="legend-target">Target: 85%</span>
                  </div>
                  <div className="horizontal-chart">
                    {dimensions.map((d, index) => {
                      const base = [60, 52, 42, 58][index]
                      const value = (
                        period === "Previous semester"
                          ? [66, 57, 61, 68]
                          : [82, 68, 79, 76]
                      )[index]
                      return (
                        <div
                          className={`chart-row ${
                            dimension !== "All dimensions" && dimension !== d
                              ? "chart-muted"
                              : ""
                          }`}
                          key={d}
                        >
                          <div className="chart-label">
                            <span className={`chart-dim-icon dim-${index}`}>
                              <Icon
                                name={
                                  ([
                                    "school",
                                    "book",
                                    "people",
                                    "school",
                                  ] as IconName[])[index]
                                }
                                size={15}
                              />
                            </span>
                            {d}
                          </div>
                          <div className="bar-pair">
                            <div className="bar-track">
                              <div
                                className="baseline-bar"
                                style={{ width: `${base}%` }}
                              />
                              <span style={{ left: `${base}%` }}>{base}%</span>
                            </div>
                            <div className="bar-track">
                              <div
                                className={`current-bar bar-${index}`}
                                style={{ width: `${value}%` }}
                              />
                              <span style={{ left: `${value}%` }}>
                                {value}%
                              </span>
                            </div>
                            <i className="target-marker" />
                          </div>
                        </div>
                      )
                    })}
                    <div className="chart-axis">
                      <span>0%</span>
                      <span>25%</span>
                      <span>50%</span>
                      <span>75%</span>
                      <span>100%</span>
                    </div>
                  </div>
                  <div className="chart-footnote">
                    <Icon name="help" size={13} />
                    Illustrative achievement index ·{" "}
                    {period === "Previous semester" ? "1st" : "2nd"} semester,
                    AY 2024–2025
                  </div>
                </section>
                <section className="panel status-panel">
                  <div className="panel-header">
                    <div>
                      <h2>Intervention status</h2>
                      <p>Moving plans toward measurable results</p>
                    </div>
                    <Icon name="layers" size={18} />
                  </div>
                  <div className="donut-wrapper">
                    <svg
                      className="donut"
                      viewBox="0 0 200 200"
                      aria-label="18 active interventions: 10 on track, 5 completed, 3 at risk"
                    >
                      <circle
                        cx="100"
                        cy="100"
                        r="76"
                        fill="none"
                        stroke="#edf1ef"
                        strokeWidth="22"
                      />
                      <circle
                        cx="100"
                        cy="100"
                        r="76"
                        fill="none"
                        stroke="#247159"
                        strokeWidth="22"
                        strokeDasharray="258 478"
                        strokeDashoffset="0"
                        transform="rotate(-90 100 100)"
                      />
                      <circle
                        cx="100"
                        cy="100"
                        r="76"
                        fill="none"
                        stroke="#9ac9b6"
                        strokeWidth="22"
                        strokeDasharray="126 478"
                        strokeDashoffset="-265"
                        transform="rotate(-90 100 100)"
                      />
                      <circle
                        cx="100"
                        cy="100"
                        r="76"
                        fill="none"
                        stroke="#e9bc67"
                        strokeWidth="22"
                        strokeDasharray="72 478"
                        strokeDashoffset="-398"
                        transform="rotate(-90 100 100)"
                      />
                      <text
                        x="100"
                        y="97"
                        textAnchor="middle"
                        className="donut-value"
                      >
                        18
                      </text>
                      <text
                        x="100"
                        y="120"
                        textAnchor="middle"
                        className="donut-label"
                      >
                        Total interventions
                      </text>
                    </svg>
                  </div>
                  <div className="status-legend">
                    <div>
                      <i className="on-track" />
                      <span>On track</span>
                      <strong>10</strong>
                      <small>56%</small>
                    </div>
                    <div>
                      <i className="completed" />
                      <span>Completed</span>
                      <strong>5</strong>
                      <small>28%</small>
                    </div>
                    <div>
                      <i className="at-risk" />
                      <span>At risk</span>
                      <strong>3</strong>
                      <small>16%</small>
                    </div>
                  </div>
                  <button
                    className="status-link"
                    onClick={() => navigate("Interventions")}
                  >
                    Manage interventions <Icon name="arrow" size={15} />
                  </button>
                </section>
              </div>
            </>
          )}
          {page === "Overview" && (
            <section className="panel interventions-panel">
              <div className="panel-header">
                <div>
                  <h2>
                    Priority interventions{" "}
                    <span className="subtle-count">{items.length}</span>
                  </h2>
                  <p>A closer look at the initiatives making a difference</p>
                </div>
                <button
                  className="text-button"
                  onClick={() => navigate("Interventions")}
                >
                  View all interventions <Icon name="arrow" size={15} />
                </button>
              </div>
              {table(true)}
            </section>
          )}
          {page === "Interventions" && (
            <section className="panel">
              <div className="panel-header">
                <div>
                  <h2>
                    All interventions{" "}
                    <span className="subtle-count">{filtered.length}</span>
                  </h2>
                  <p>Assigned actions across the research framework</p>
                </div>
                <div className="list-tools">
                  <label className="search-input">
                    <Icon name="search" size={17} />
                    <input
                      placeholder="Search interventions..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </label>
                  <select
                    className="standalone-select"
                    aria-label="Status filter"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                  >
                    <option>All statuses</option>
                    <option>On track</option>
                    <option>At risk</option>
                    <option>Completed</option>
                  </select>
                </div>
              </div>
              {table()}
            </section>
          )}
          {page === "Educational Concerns" && (
            <section className="panel">
              <div className="panel-header">
                <div>
                  <h2>Concern registry</h2>
                  <p>
                    Sample concerns derived from the Version 1 research
                    framework
                  </p>
                </div>
                <label className="search-input">
                  <Icon name="search" size={17} />
                  <input
                    placeholder="Search concerns..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </label>
              </div>
              <div className="table-scroll">
                <table>
                  <thead>
                    <tr>
                      <th>Identified concern</th>
                      <th>Dimension</th>
                      <th>Priority</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {concerns
                      .filter(
                        (c) =>
                          (dimension === "All dimensions" ||
                            dimensions[c.dimension] === dimension) &&
                          c.name.toLowerCase().includes(search.toLowerCase()),
                      )
                      .map((c, index) => (
                        <tr key={c.name}>
                          <td>
                            <strong>{c.name}</strong>
                            <small>{c.source}</small>
                          </td>
                          <td>
                            <Dimension index={c.dimension} />
                          </td>
                          <td>
                            <Badge text={c.severity} />
                          </td>
                          <td>
                            <Badge text={c.status} />
                          </td>
                          <td>
                            <button
                              className="text-button"
                              onClick={() => setSelected(items[index])}
                            >
                              View action <Icon name="arrow" size={14} />
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}
          {page === "Monitoring & Evaluation" && (
            <>
              <div className="info-banner">
                <Icon name="activity" size={22} />
                <div>
                  <strong>Measure progress, not just completion.</strong>
                  <p>
                    Compare baseline, target, and actual achievement. Select an
                    intervention to update its progress and evaluation.
                  </p>
                </div>
              </div>
              <div className="evaluation-grid">
                {filtered.map((i) => (
                  <section className="panel evaluation-card" key={i.id}>
                    <div className="eval-top">
                      <Dimension index={i.dimension} />
                      <Badge text={i.status} />
                    </div>
                    <h2>{i.title}</h2>
                    <p className="muted">
                      {i.id} · {i.owner}
                    </p>
                    <div className="eval-metrics">
                      <div>
                        <small>Baseline</small>
                        <strong>{i.baseline}%</strong>
                      </div>
                      <div>
                        <small>Target</small>
                        <strong>{i.target}%</strong>
                      </div>
                      <div>
                        <small>Actual result</small>
                        <strong className="green-text">{i.actual}%</strong>
                      </div>
                    </div>
                    <div className="eval-summary">
                      <span>Target attainment</span>
                      <strong>
                        {Math.round((i.actual / i.target) * 100)}%
                      </strong>
                    </div>
                    <div className="wide-progress">
                      <i
                        style={{
                          width: `${Math.min((i.actual / i.target) * 100, 100)}%`,
                        }}
                      />
                    </div>
                    <button
                      className="text-button"
                      onClick={() => setSelected(i)}
                    >
                      Review & update <Icon name="arrow" size={15} />
                    </button>
                  </section>
                ))}
              </div>
            </>
          )}
          {page === "Research Utilization" && (
            <>
              <section className="panel framework-panel">
                <span className="eyebrow">THE VERSION 2 FRAMEWORK</span>
                <h2>From research findings to lasting change.</h2>
                <p>
                  Operationalizing the multidimensional academic-achievement
                  research through a continuous institutional workflow.
                </p>
                <div className="workflow">
                  {[
                    "Research finding",
                    "Concern",
                    "Intervention",
                    "Implementation",
                    "Monitoring",
                    "Evaluation",
                    "Decision support",
                  ].map((step, i) => (
                    <div className="workflow-step" key={step}>
                      <span>{String(i + 1).padStart(2, "0")}</span>
                      <strong>{step}</strong>
                      {i < 6 && <Icon name="arrow" size={16} />}
                    </div>
                  ))}
                </div>
                <div className="research-source">
                  <Icon name="book" size={25} />
                  <div>
                    <span>RESEARCH BASIS · VERSION 1</span>
                    <h3>
                      Multidimensional Analysis of the Academic Achievement of
                      Basic Education Learners in Northern Mindanao: Its
                      Determinants and Implications to Higher Education
                      Institutions
                    </h3>
                    <p>
                      Bukidnon State University and collaborating State
                      Universities and Colleges
                    </p>
                  </div>
                </div>
              </section>
              <section className="panel">
                <div className="panel-header">
                  <div>
                    <h2>Research-to-action tracking</h2>
                    <p>
                      Demonstration linkages between findings and institutional
                      interventions
                    </p>
                  </div>
                </div>
                <div className="table-scroll">
                  <table>
                    <thead>
                      <tr>
                        <th>Research finding / concern</th>
                        <th>Institutional action</th>
                        <th>Utilization status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {concerns.map((c, index) => (
                        <tr key={c.name}>
                          <td>
                            <strong>{c.name}</strong>
                            <small>{dimensions[c.dimension]}</small>
                          </td>
                          <td>
                            <button
                              className="text-button"
                              onClick={() => setSelected(items[index])}
                            >
                              {items[index].title}
                              <Icon name="arrow" size={14} />
                            </button>
                          </td>
                          <td>
                            <Badge
                              text={
                                items[index].status === "Completed"
                                  ? "Completed"
                                  : "Action in progress"
                              }
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </>
          )}
          {page === "Reports" && (
            <>
              <div className="report-grid">
                {[
                  {
                    title: "Institutional overview",
                    icon: "grid",
                    text: "A consolidated view of educational concerns, interventions, and institutional performance.",
                  },
                  {
                    title: "Intervention progress",
                    icon: "layers",
                    text: "Implementation status, responsible personnel, schedules, and progress updates.",
                  },
                  {
                    title: "Monitoring and evaluation",
                    icon: "activity",
                    text: "Baseline indicators, target achievement, and actual intervention results.",
                  },
                  {
                    title: "Research utilization",
                    icon: "book",
                    text: "Track the translation of research recommendations into institutional action.",
                  },
                ].map((r) => (
                  <button
                    className={`panel report-card ${
                      reportType === r.title ? "chosen" : ""
                    }`}
                    onClick={() => setReportType(r.title)}
                    key={r.title}
                  >
                    <span className="report-icon">
                      <Icon name={r.icon as IconName} size={25} />
                    </span>
                    <h2>{r.title}</h2>
                    <p>{r.text}</p>
                    <span className="text-button">
                      {reportType === r.title
                        ? "Selected report"
                        : "Select report"}
                      <Icon
                        name={reportType === r.title ? "check" : "arrow"}
                        size={17}
                      />
                    </span>
                  </button>
                ))}
              </div>
              <section className="panel export-panel">
                <div>
                  <h2>Export: {reportType}</h2>
                  <p>
                    Download the underlying intervention dataset as a CSV for
                    your selected report.
                  </p>
                  <small>
                    Demonstration data only · {items.length} records · CSV
                    format
                  </small>
                </div>
                <button className="button primary" onClick={download}>
                  <Icon name="download" size={17} />
                  Download report
                </button>
              </section>
            </>
          )}
          {page === "Settings" && (
            <section className="panel settings-panel">
              <h2>Workspace settings</h2>
              <p className="muted">
                Bukidnon State University · Proof of concept
              </p>
              <div className="settings-row">
                <div>
                  <strong>Demonstration profile</strong>
                  <p>Alex Dela Cruz · System Administrator</p>
                </div>
                <span className="user-avatar">AD</span>
              </div>
              <div className="settings-row">
                <div>
                  <strong>Data environment</strong>
                  <p>
                    Sample data is held in this browser session. Refreshing
                    restores the initial dataset.
                  </p>
                </div>
                <span className="demo-pill">Demo only</span>
              </div>
              <div className="settings-row">
                <div>
                  <strong>Institutional access & security</strong>
                  <p>
                    Production authentication, roles, audit logs, and database
                    integrations are not connected.
                  </p>
                </div>
                <Icon name="settings" />
              </div>
              <div className="settings-row">
                <div>
                  <strong>Acquisition strategy</strong>
                  <p>
                    BUILD — Customized Development, based on the
                    four-dimensional research framework.
                  </p>
                </div>
                <Badge text="Planned" />
              </div>
              <button
                className="button secondary"
                onClick={() => setModal("help")}
              >
                <Icon name="help" size={16} />
                View proof-of-concept guide
              </button>
            </section>
          )}
          {page === "Overview" && (
            <div className="bottom-insight">
              <span className="insight-icon">
                <Icon name="target" size={20} />
              </span>
              <div>
                <strong>
                  Every insight is an opportunity for improvement.
                </strong>
                <p>
                  Your research framework connects four dimensions to one goal:
                  better educational outcomes.
                </p>
              </div>
              <button
                className="text-button"
                onClick={() => navigate("Monitoring & Evaluation")}
              >
                Explore monitoring & evaluation
                <Icon name="arrow" size={15} />
              </button>
            </div>
          )}
          <footer className="main-footer">
            <span>
              BukSU EduInsight <i />
              Research. Action. Impact.
            </span>
            <span>
              Proof of concept · Illustrative data, not official university
              records
            </span>
          </footer>
        </main>
      </div>
      {(modal || selected) && (
        <div
          className="modal-overlay"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              setModal(null)
              setSelected(null)
            }
          }}
        >
          <section
            className={`modal ${selected ? "detail-modal" : ""}`}
            role="dialog"
            aria-modal="true"
            aria-label={
              selected
                ? "Intervention details"
                : modal === "new"
                  ? "Create intervention"
                  : modal === "help"
                    ? "Proof of concept guide"
                    : "Notifications"
            }
          >
            <button
              className="modal-close icon-button"
              aria-label="Close dialog"
              onClick={() => {
                setModal(null)
                setSelected(null)
              }}
            >
              <Icon name="close" />
            </button>
            {modal === "new" && (
              <>
                <span className="eyebrow">RESEARCH INTO ACTION</span>
                <h2>Create an intervention</h2>
                <p className="muted">
                  Define a measurable action for your institution.
                </p>
                <form onSubmit={addIntervention}>
                  <label>
                    Intervention title
                    <input
                      autoFocus
                      name="title"
                      required
                      placeholder="e.g. Foundational literacy support program"
                    />
                  </label>
                  <div className="form-grid">
                    <label>
                      Educational dimension
                      <select name="dimension">
                        {dimensions.map((d, i) => (
                          <option value={i} key={d}>
                            {d}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label>
                      Responsible personnel
                      <input name="owner" required placeholder="Full name" />
                    </label>
                  </div>
                  <label>
                    Linked concern
                    <select name="concern">
                      <option>New institutional concern</option>
                      {concerns.map((c) => (
                        <option key={c.name}>{c.name}</option>
                      ))}
                    </select>
                  </label>
                  <div className="form-grid">
                    <label>
                      Baseline (%)
                      <input
                        name="baseline"
                        type="number"
                        min="0"
                        max="100"
                        defaultValue="0"
                        required
                      />
                    </label>
                    <label>
                      Target (%)
                      <input
                        name="target"
                        type="number"
                        min="1"
                        max="100"
                        defaultValue="85"
                        required
                      />
                    </label>
                  </div>
                  <label>
                    Target completion date
                    <input name="due" type="date" required />
                  </label>
                  <div className="form-note">
                    <Icon name="help" size={15} />
                    Demo records are available until you refresh this page.
                  </div>
                  <div className="modal-actions">
                    <button
                      type="button"
                      className="button secondary"
                      onClick={() => setModal(null)}
                    >
                      Cancel
                    </button>
                    <button className="button primary" type="submit">
                      <Icon name="plus" size={16} />
                      Create intervention
                    </button>
                  </div>
                </form>
              </>
            )}
            {selected && (
              <>
                <span className="eyebrow">
                  {selected.id} · INTERVENTION DETAILS
                </span>
                <h2>{selected.title}</h2>
                <div className="detail-meta">
                  <Dimension index={selected.dimension} />
                  <Badge text={selected.status} />
                </div>
                <div className="detail-person">
                  <span className={`avatar avatar-${selected.dimension}`}>
                    {selected.initials}
                  </span>
                  <div>
                    <small>RESPONSIBLE PERSONNEL</small>
                    <strong>{selected.owner}</strong>
                  </div>
                  <div className="detail-due">
                    <small>DUE DATE</small>
                    <strong>{selected.due}</strong>
                  </div>
                </div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    const data = new FormData(e.currentTarget)
                    setItems((prev) =>
                      prev.map((i) =>
                        i.id === selected.id
                          ? {
                              ...i,
                              progress: Number(data.get("progress")),
                              actual: Number(data.get("actual")),
                              status: String(data.get("status")),
                            }
                          : i,
                      ),
                    )
                    setSelected(null)
                    notify("Intervention progress and evaluation updated.")
                  }}
                >
                  <h3>Monitoring & evaluation</h3>
                  <div className="eval-metrics">
                    <div>
                      <small>Baseline</small>
                      <strong>{selected.baseline}%</strong>
                    </div>
                    <div>
                      <small>Target</small>
                      <strong>{selected.target}%</strong>
                    </div>
                    <div>
                      <small>Actual</small>
                      <strong className="green-text">{selected.actual}%</strong>
                    </div>
                  </div>
                  <div className="form-grid">
                    <label>
                      Implementation progress (%)
                      <input
                        name="progress"
                        type="number"
                        min="0"
                        max="100"
                        required
                        defaultValue={selected.progress}
                      />
                    </label>
                    <label>
                      Actual achievement (%)
                      <input
                        name="actual"
                        type="number"
                        min="0"
                        max="100"
                        required
                        defaultValue={selected.actual}
                      />
                    </label>
                  </div>
                  <label>
                    Implementation status
                    <select name="status" defaultValue={selected.status}>
                      <option>On track</option>
                      <option>At risk</option>
                      <option>Completed</option>
                    </select>
                  </label>
                  <div className="form-note">
                    <Icon name="help" size={15} />
                    Changes update this demonstration session only.
                  </div>
                  <div className="modal-actions">
                    <button
                      type="button"
                      className="button secondary"
                      onClick={() => setSelected(null)}
                    >
                      Close
                    </button>
                    <button type="submit" className="button primary">
                      Save progress
                      <Icon name="check" size={16} />
                    </button>
                  </div>
                </form>
              </>
            )}
            {modal === "notifications" && (
              <>
                <span className="eyebrow">WORKSPACE UPDATES</span>
                <h2>Notifications</h2>
                <p className="muted">
                  Sample alerts for your institutional workspace.
                </p>
                <div className="notification-entry">
                  <span className="stat-icon gold">
                    <Icon name="flag" size={18} />
                  </span>
                  <div>
                    <strong>Curriculum review needs attention</strong>
                    <p>
                      Curriculum alignment and review is at risk. Review
                      implementation progress with the responsible personnel.
                    </p>
                    <button
                      className="text-button"
                      onClick={() => {
                        setModal(null)
                        setSelected(items[2])
                      }}
                    >
                      Review intervention
                      <Icon name="arrow" size={14} />
                    </button>
                  </div>
                </div>
                <div className="notification-entry">
                  <span className="stat-icon sage">
                    <Icon name="check" size={18} />
                  </span>
                  <div>
                    <strong>Governance intervention completed</strong>
                    <p>
                      School governance capacity building achieved an 89% result
                      against an 85% target.
                    </p>
                  </div>
                </div>
              </>
            )}
            {modal === "help" && (
              <>
                <span className="eyebrow">BUKSU EDUINSIGHT · VERSION 2</span>
                <h2>Your proof-of-concept guide</h2>
                <p className="muted">
                  Explore how educational research becomes institutional action.
                </p>
                <div className="help-steps">
                  {[
                    "Explore the overview and compare the four research dimensions.",
                    "Open the concern registry to see research-linked institutional needs.",
                    "Create an intervention, assign personnel, and define its baseline and target.",
                    "Select an intervention to update progress, actual achievement, and status.",
                    "Review the research-to-action framework and download demonstration reports.",
                  ].map((text, i) => (
                    <div key={text}>
                      <span>{i + 1}</span>
                      <p>{text}</p>
                    </div>
                  ))}
                </div>
                <div className="form-note">
                  This is an interactive frontend demonstration, not a
                  production SIS or LMS. Data, dates, users, and analytics are
                  illustrative; authentication and persistent storage are not
                  connected.
                </div>
                <button
                  className="button primary"
                  onClick={() => setModal(null)}
                >
                  Start exploring
                  <Icon name="arrow" size={16} />
                </button>
              </>
            )}
          </section>
        </div>
      )}
      {toast && (
        <div className="toast" role="status">
          <span>
            <Icon name="check" size={18} />
          </span>
          {toast}
          <button
            className="icon-button"
            aria-label="Dismiss notification"
            onClick={() => setToast("")}
          >
            <Icon name="close" size={16} />
          </button>
        </div>
      )}
    </div>
  )
}
export default App
