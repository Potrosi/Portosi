// Top of page: pitch band, nav, hero, partnership band

function PitchBand() {
  return (
    <div className="pitch-band">
      <div className="gax-container pitch-band__inner">
        <span><span className="pitch-band__dot"></span>Тестове завдання · <b>Educational Project Specialist</b> · Genesis Academy</span>
        <span className="pitch-band__right">
          <span>Task 1 · Концепція освітньої програми</span>
          <span>Травень 2026</span>
        </span>
      </div>
    </div>
  );
}

function TopNav({ onRegister, onPlan }) {
  const links = [
    { href: "#program", label: "Програма" },
    { href: "#cases", label: "Кейси" },
    { href: "#plan", label: "Action Plan" },
    { href: "#risks", label: "Ризики" },
    { href: "#faq", label: "FAQ" },
  ];
  return (
    <header className="gax-nav">
      <div className="gax-container gax-nav__inner">
        <div className="gax-nav__brand">
          <img src="assets/genesis-academy-logo.png" alt="Genesis Academy" />
          <span className="gax-nav__cross">×</span>
          <span className="gax-nav__kse">
            <span className="gax-nav__kse-mark">KSE</span>
            <span className="gax-nav__kse-sub">Kyiv School of Economics</span>
          </span>
        </div>
        <nav className="gax-nav__links">
          {links.map((l) => (
            <a key={l.href} className="gax-nav__link" href={l.href}>{l.label}</a>
          ))}
        </nav>
        <a className="gax-nav__cta" href="#" onClick={(e) => { e.preventDefault(); onRegister(); }}>
          Зареєструйся
          <Icon name="arrow-right" size={13}/>
        </a>
      </div>
    </header>
  );
}

function Hero({ onRegister }) {
  const d = window.PROGRAM_DATA.dates;
  return (
    <section className="hero">
      <div className="gax-container">
        <div className="hero__grid">
          <div>
            <div className="hero__eyebrow">
              <b>Genesis Academy × KSE</b>
              <span className="sep">·</span>
              <span>Week + Challenge</span>
              <span className="sep">·</span>
              <span>Online</span>
            </div>
            <h1 className="hero__title">
              AI&nbsp;Agents<br/>
              <span className="accent">Intensive</span>
            </h1>
            <p className="hero__sub">
              Навчися будувати AI-агентів для особистої продуктивності та <b>реальних продуктових задач</b>, переймаючи досвід практиків Genesis-екосистеми. Найкращі учасники отримають запрошення на співбесіди в IT-компанії Genesis.
            </p>
            <div className="hero__cta-row">
              <button className="btn btn--primary btn--lg" onClick={onRegister}>
                Зареєструйся до 7 вересня
                <Icon name="arrow-right" size={14}/>
              </button>
              <a className="btn btn--ghost btn--lg" href="#program">
                Дивитися програму
              </a>
            </div>

            <div className="hero__meta">
              <div className="hero__meta-item">
                <span className="hero__meta-label">Week — без відбору</span>
                <span className="hero__meta-value">{d.weekStart} — {d.weekEnd}</span>
              </div>
              <div className="hero__meta-item">
                <span className="hero__meta-label">Challenge — з відбором</span>
                <span className="hero__meta-value">{d.challengeStart} — {d.challengeEnd}</span>
              </div>
              <div className="hero__meta-item">
                <span className="hero__meta-label">Demo Day</span>
                <span className="hero__meta-value">{d.demoDay}</span>
              </div>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__planet-wrap">
              <div className="planet">
                <div className="ring ring--3"></div>
                <div className="ring ring--2"></div>
                <div className="ring ring--1"></div>
                <div className="body"></div>
                <div className="dot"></div>
              </div>
              <div className="hero__badge">AI Agents · 2026 cohort</div>
              <div className="hero__corner">powered by<br/><b>Genesis Education</b></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnerBand() {
  return (
    <section className="partner-band">
      <div className="gax-container">
        <div className="partner-band__grid">
          <div className="partner-band__cobrand">
            <img src="assets/genesis-academy-mark.png" alt="" style={{height: 32, filter: "brightness(1.05)"}}/>
            <span className="partner-band__lockup">
              Genesis Academy
              <small>External Education</small>
            </span>
            <span className="x">×</span>
            <span className="partner-band__lockup">
              KSE
              <small>Kyiv School of Economics</small>
            </span>
          </div>
          <p className="partner-band__copy">
            Genesis Academy і KSE мають <b>8 років спільної історії</b> — School of Digital Business збирає 1700+ заявок щороку, паралельно діє вбудований minor у навчальний план KSE.
            AI Agents Intensive — перше офіційне <b>AI Product-партнерство</b> в українському продуктовому IT на рівні Genesis-екосистеми.
          </p>
          <div>
            <div className="partner-band__stat"><em>1500+</em></div>
            <div className="partner-band__stat-label">студентів профільних спеціальностей KSE — пряма цільова аудиторія програми</div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.PitchBand = PitchBand;
window.TopNav = TopNav;
window.Hero = Hero;
window.PartnerBand = PartnerBand;
