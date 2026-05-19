// Action Plan teaser, Risk Matrix teaser, Metrics, FAQ, Footer

function ActionPlan({ onNotion }) {
  const phases = window.PROGRAM_DATA.phases;
  const total = phases.reduce((s, p) => s + p.count, 0);
  return (
    <section className="section" id="plan">
      <div className="gax-container">
        <div className="section__head">
          <div>
            <div className="section__eyebrow">Execution · Action Plan</div>
            <h2 className="section__title">Запуск за <span className="accent">5 фаз</span>. Усе синхронізовано з Notion.</h2>
          </div>
          <p className="section__sub">
            {total} задач у 5 фазах, від ініціації до пост-програмної ретроспективи. Кожна задача має відповідального, дедлайн і критерій готовності. Нижче — короткий огляд; повний live-плану зі статусами тримаю в Notion.
          </p>
        </div>

        <div className="plan">
          <div className="plan__phases">
            {phases.map((p, i) => (
              <div key={i} className="phase">
                <span className="phase__num">{p.n}</span>
                <h4 className="phase__name">{p.name}</h4>
                <span className="phase__dates">{p.dates}</span>
                <p className="phase__tasks">{p.tasks}</p>
                <div className="phase__count">
                  <span>{p.owner}</span>
                  <b>{p.count} задач</b>
                </div>
              </div>
            ))}
          </div>

          <div className="plan__cta">
            <div className="plan__cta-text">
              <b>Повний Action Plan у Notion</b>
              {total} задач з відповідальними, дедлайнами, статусами та критеріями готовності. Views: timeline, by-phase, by-owner. Синхронізується з командним трекером Genesis Education.
            </div>
            <button className="btn-notion" onClick={onNotion}>
              <span className="btn-notion__mark">N</span>
              Детальний Action Plan в Notion
              <svg className="btn-notion__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3h7v7M10 14L21 3M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function RiskMatrix({ onNotion }) {
  const risks = window.PROGRAM_DATA.risks;
  const sum = window.PROGRAM_DATA.riskSummary;
  return (
    <section className="section section--alt" id="risks">
      <div className="gax-container">
        <div className="section__head">
          <div>
            <div className="section__eyebrow">Risk Management</div>
            <h2 className="section__title">Матриця ризиків — <span className="accent">12 ризиків, 6 фаз.</span></h2>
          </div>
          <p className="section__sub">
            Кожен ризик з превентивними діями і планом відповіді, якщо стався. Нижче — топ-5 critical-path ризиків з матриці; повну версію з ймовірністю × impact-оцінкою тримаю в Notion.
          </p>
        </div>

        <div className="risk-summary">
          {sum.map((s, i) => (
            <div key={i} className="risk-summary__card">
              <div className={"risk-summary__num " + s.cls}>
                <em>{s.num}</em>
              </div>
              <div className="risk-summary__label">{s.label}</div>
              <div className="risk-summary__sub">{s.sub}</div>
            </div>
          ))}
        </div>

        <div className="risk-table">
          <div className="risk-row risk-row--head">
            <div className="risk-cell">Фаза</div>
            <div className="risk-cell">Ризик</div>
            <div className="risk-cell">Превентивні дії / план відповіді</div>
            <div className="risk-cell">Priority</div>
          </div>
          {risks.map((r, i) => (
            <div key={i} className="risk-row">
              <div className="risk-cell">
                <div className="risk-cell__phase">
                  {r.phase}
                  <small>{r.sub}</small>
                </div>
              </div>
              <div className="risk-cell risk-cell__risk">{r.risk}</div>
              <div className="risk-cell risk-cell__mitig">{r.mitig}</div>
              <div className="risk-cell">
                <span className={"risk-pill risk-pill--" + r.level}>
                  <span className="risk-pill__dot"></span>
                  {r.level === "high" ? "High" : r.level === "med" ? "Medium" : "Low"}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="plan__cta" style={{marginTop: 32}}>
          <div className="plan__cta-text">
            <b>Повна матриця ризиків у Notion</b>
            Усі 12 ризиків з оцінкою probability × impact, власниками mitigation і trigger-точками для plan B. Live-документ — апдейтиться щотижня.
          </div>
          <button className="btn-notion" onClick={onNotion}>
            <span className="btn-notion__mark">N</span>
            Матриця ризиків в Notion
            <svg className="btn-notion__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3h7v7M10 14L21 3M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  return (
    <section className="section" id="metrics">
      <div className="gax-container">
        <div className="section__head">
          <div>
            <div className="section__eyebrow">Метрики успіху</div>
            <h2 className="section__title">Що міряємо <span className="accent">після Demo Day.</span></h2>
          </div>
          <p className="section__sub">
            Цільові показники узгоджені з Head of External Education. Funnel — реєстрації → attendance → заявки → когорта → демо → fast-track. NPS вимірюється окремо по Week і Challenge.
          </p>
        </div>
        <div className="metrics">
          {window.PROGRAM_DATA.metrics.map((m, i) => (
            <div key={i} className="metric">
              <div className="metric__label">{m.label}</div>
              <div className="metric__target">
                {m.target}<em>{m.em}</em>
              </div>
              <div className="metric__desc">{m.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = React.useState(0);
  return (
    <section className="section section--alt" id="faq">
      <div className="gax-container">
        <div className="section__head" style={{justifyContent: "center", textAlign: "center", flexDirection: "column", alignItems: "center"}}>
          <div className="section__eyebrow">FAQ</div>
          <h2 className="section__title">Часті <span className="accent">питання</span></h2>
        </div>
        <div className="faq">
          {window.PROGRAM_DATA.faq.map((item, i) => (
            <div key={i} className={"faq__item" + (open === i ? " is-open" : "")}>
              <div className="faq__q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span className="faq__q-text">{item.q}</span>
                <span className="faq__q-toggle">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>
                </span>
              </div>
              <div className="faq__a">{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="gax-container">
        <div className="footer__grid">
          <div>
            <div className="footer__logo">
              <img src="assets/genesis-academy-logo.png" alt="Genesis Academy"/>
              <span className="footer__cross">×</span>
              <span className="footer__kse">KSE</span>
            </div>
            <p className="footer__tag">
              AI Agents Intensive — перше офіційне AI Product-партнерство Genesis Academy з українським університетом. 3 тижні, 10 лекцій, 3 кейси, fast-track до Genesis-компаній.
            </p>
          </div>
          <div className="footer__col">
            <h4>Програма</h4>
            <a href="#program">Структура</a>
            <a href="#lectures">10 лекцій Week</a>
            <a href="#cases">3 Challenge-кейси</a>
            <a href="#outcomes">Learning outcomes</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="footer__col">
            <h4>Pitch-документи</h4>
            <a href="#plan">Action Plan</a>
            <a href="#risks">Матриця ризиків</a>
            <a href="#metrics">Метрики успіху</a>
            <a href="#audience">Цільова аудиторія</a>
          </div>
          <div className="footer__col">
            <h4>Контакти</h4>
            <a href="mailto:academy@gen.tech">academy@gen.tech</a>
            <span style={{color: "rgba(255,255,255,0.55)"}}>Telegram · @Genesis_Academy</span>
            <span style={{color: "rgba(255,255,255,0.55)"}}>Instagram · @genesis_academy_ua</span>
          </div>
        </div>
        <div className="footer__bottom">
          <div>© 2026 Genesis. Захист тестового завдання · Educational Project Specialist · Genesis Academy.</div>
          <div>Дизайн-система: Genesis Academy DS</div>
        </div>
      </div>
    </footer>
  );
}

function Toast({ visible, message }) {
  return (
    <div className={"toast" + (visible ? " is-visible" : "")}>
      <Icon name="open" size={16}/>
      {message}
    </div>
  );
}

window.ActionPlan = ActionPlan;
window.RiskMatrix = RiskMatrix;
window.Metrics = Metrics;
window.FAQ = FAQ;
window.Footer = Footer;
window.Toast = Toast;
