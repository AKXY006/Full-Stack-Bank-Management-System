import { useState } from 'react'
import './App.css'

const transactions = [
  { name: 'Salary Credit', date: 'Today, 09:30 AM', amount: '+₹85,000', type: 'credit', icon: '↗' },
  { name: 'Electricity Bill', date: 'Yesterday, 06:15 PM', amount: '-₹2,840', type: 'debit', icon: '⚡' },
  { name: 'Grocery Store', date: '24 Nov, 01:20 PM', amount: '-₹1,650', type: 'debit', icon: '🛒' },
  { name: 'Bank Transfer', date: '23 Nov, 11:05 AM', amount: '-₹12,000', type: 'debit', icon: '↗' },
]

const navItems = [
  { label: 'Overview', icon: '⌂' },
  { label: 'Accounts', icon: '▣' },
  { label: 'Transactions', icon: '⇄' },
  { label: 'Cards', icon: '▭' },
  { label: 'Payments', icon: '₹' },
]

function Icon({ children }) {
  return <span className="nav-icon" aria-hidden="true">{children}</span>
}

function App() {
  const [activeNav, setActiveNav] = useState('Overview')
  const [balanceVisible, setBalanceVisible] = useState(true)

  return (
    <div className="bank-app">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">B</div>
          <span>Bankly</span>
        </div>

        <nav className="main-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <button
              className={activeNav === item.label ? 'nav-item active' : 'nav-item'}
              key={item.label}
              onClick={() => setActiveNav(item.label)}
              type="button"
            >
              <Icon>{item.icon}</Icon>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <button className="profile" type="button">
          <span className="avatar">AS</span>
          <span className="profile-copy">
            <strong>Arjun Sharma</strong>
            <small>Premium Customer</small>
          </span>
          <span className="profile-more">⋯</span>
        </button>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div>
            <p className="eyebrow">Monday, 24 November</p>
            <h1>Good morning, Arjun</h1>
          </div>
          <div className="top-actions">
            <button className="icon-button" type="button" aria-label="Notifications">🔔<span className="notification-dot" /></button>
            <button className="primary-button" type="button">+ New transaction</button>
          </div>
        </header>

        <section className="summary-grid" aria-label="Account summary">
          <article className="balance-card">
            <div className="card-heading">
              <div>
                <p>Total balance</p>
                <button
                  className="eye-button"
                  type="button"
                  onClick={() => setBalanceVisible((visible) => !visible)}
                  aria-label={balanceVisible ? 'Hide balance' : 'Show balance'}
                >
                  {balanceVisible ? '◉' : '◎'}
                </button>
              </div>
              <button className="dots-button" type="button" aria-label="More account options">•••</button>
            </div>
            <strong className="balance">{balanceVisible ? '₹2,48,560.00' : '₹••••••••'}</strong>
            <p className="account-number">Primary Savings •• 4821</p>
            <div className="balance-actions">
              <button type="button"><span>↗</span> Transfer</button>
              <button type="button"><span>＋</span> Add money</button>
            </div>
          </article>

          <article className="stat-card">
            <div className="stat-icon green">↗</div>
            <p>Income this month</p>
            <strong>₹1,24,800</strong>
            <span className="positive">↑ 12.5% <small>vs last month</small></span>
          </article>

          <article className="stat-card">
            <div className="stat-icon coral">↘</div>
            <p>Expenses this month</p>
            <strong>₹68,420</strong>
            <span className="negative">↓ 4.2% <small>vs last month</small></span>
          </article>
        </section>

        <section className="dashboard-grid">
          <article className="panel transactions-panel">
            <div className="panel-heading">
              <div>
                <h2>Recent transactions</h2>
                <p>Your latest account activity</p>
              </div>
              <button type="button">View all <span>→</span></button>
            </div>
            <div className="transaction-list">
              {transactions.map((transaction) => (
                <div className="transaction" key={transaction.name}>
                  <span className={`transaction-icon ${transaction.type}`}>{transaction.icon}</span>
                  <div className="transaction-copy">
                    <strong>{transaction.name}</strong>
                    <small>{transaction.date}</small>
                  </div>
                  <strong className={transaction.type === 'credit' ? 'credit-amount' : ''}>{transaction.amount}</strong>
                </div>
              ))}
            </div>
          </article>

          <article className="panel spending-panel">
            <div className="panel-heading">
              <div>
                <h2>Monthly spending</h2>
                <p>November 2026</p>
              </div>
              <button className="dots-button" type="button" aria-label="More spending options">•••</button>
            </div>
            <div className="chart" aria-label="Monthly spending chart">
              {[58, 72, 48, 88, 64, 78, 52].map((height, index) => (
                <div className="chart-column" key={index}>
                  <div className="bar-track">
                    <div className="bar-fill" style={{ height: `${height}%` }} />
                  </div>
                  <span>{['M', 'T', 'W', 'T', 'F', 'S', 'S'][index]}</span>
                </div>
              ))}
            </div>
            <div className="spending-footer">
              <div>
                <span className="legend-dot" />
                <small>Spent</small>
                <strong>₹68,420</strong>
              </div>
              <div>
                <small>Budget left</small>
                <strong>₹31,580</strong>
              </div>
            </div>
          </article>
        </section>
      </main>
    </div>
  )
}

export default App
