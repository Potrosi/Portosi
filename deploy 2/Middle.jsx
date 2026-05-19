// Middle sections: facts, audience, program structure, lectures, cases, outcomes

function Facts() {
  return (
    <section>
      <div className="gax-container">
        <div className="facts">
          {window.PROGRAM_DATA.facts.map((f, i) => (
            <div key={i} className="facts__item">
              <div className="facts__num"><em>{f.num}</em>{f.suffix}</div>
              <div className="facts__label">{f.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Audience() {
  return (
    <section className="section section--alt" id="audience">
      <div className="gax-container">
        <div className="section__head">
          <div>
            <div className="section__eyebrow">Кому буде корисно</div>
            <h2 className="section__title">Для тих, хто хоче зайти в <span className="accent">AI Product</span> раніше за ринок</h2>
          </div>
          <p className="section__sub">
            Два сегменти молодого продуктового IT — студенти 2-4 курсів профільних спеціальностей і early-career спеціалісти (0-2 роки досвіду). Об'єднує цікавість до AI без обов'язкового ML-бекграунду.
          </p>
        </div>
        <div className="aud">
          {window.PROGRAM_DATA.audiences.map((a, i) => (
            <div key={i} className="aud__card">
              <div className="aud__num">{a.n}</div>
              <h3 className="aud__name">{a.name}</h3>
              <p className="aud__copy">{a.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgrammeStructure() {
  const d = window.PROGRAM_DATA.dates;
  return (
    <section className="section" id="program">
      <div className="gax-container">
        <div className="section__head">
          <div>
            <div className="section__eyebrow">Структура програми</div>
            <h2 className="section__title">3 тижні. <span className="accent">Week → Challenge → Demo Day.</span></h2>
          </div>
          <p className="section__sub">
            Двоступеневий вхід: <b>Week</b> відкритий для всіх — від нуля до working прототипу. <b>Challenge</b> з відбором — індивідуальний формат на реальних кейсах Genesis-екосистеми.
          </p>
        </div>

        <div className="timeline">
          <div className="timeline__line"></div>
          <div className="timeline__grid">

            <div className="tl-block">
              <span className="tl-block__chip">Без відбору</span>
              <div className="tl-block__num">Block 01 · Week</div>
              <h3 className="tl-block__title">AI Agents <span className="o">Week</span></h3>
              <div className="tl-block__dates">{d.weekStart} — {d.weekEnd} · 10 днів · online</div>
              <p className="tl-block__copy">
                Відкриті онлайн-лекції від практиків Genesis-екосистеми. Рівень — від нуля до working прототипу. Фокус — практичне застосування, не академічна глибина.
              </p>
              <ul className="tl-block__list">
                <li>10 лекцій · 90 хв кожна</li>
                <li>Foundations + Applied Genesis-кейси</li>
                <li>Записи доступні всім</li>
              </ul>
            </div>

            <div className="tl-block tl-block--accent">
              <span className="tl-block__chip is-orange">З відбором</span>
              <div className="tl-block__num">Block 02 · Challenge</div>
              <h3 className="tl-block__title">AI Agents <span className="o">Challenge</span></h3>
              <div className="tl-block__dates">{d.challengeStart} — {d.challengeEnd} · 10 днів · індивідуально</div>
              <p className="tl-block__copy">
                З відбором за мотиваційною заявкою. Кожен учасник обирає один з трьох кейсів і будує власне AI-рішення. Ментори через Slack, Anthropic API надається.
              </p>
              <ul className="tl-block__list">
                <li>3 кейси від компаній Genesis</li>
                <li>Mid-check на Day 5 + Day 8</li>
                <li>Working demo як deliverable</li>
              </ul>
            </div>

            <div className="tl-block">
              <span className="tl-block__chip">Журі CPO</span>
              <div className="tl-block__num">Block 03 · Demo Day</div>
              <h3 className="tl-block__title">Demo <span className="o">Day</span></h3>
              <div className="tl-block__dates">{d.demoDay} · online · публічний</div>
              <p className="tl-block__copy">
                Журі — CPO та Head of Product компаній-замовників кейсів. Топ-3 учасники отримують fast-track до співбесіди в компанії, чий кейс вирішували.
              </p>
              <ul className="tl-block__list">
                <li>Пітч 5 хв + Q&A</li>
                <li>Fast-track оффер для топ-3</li>
                <li>Сертифікат завершення</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function LectureGrid() {
  const f = window.PROGRAM_DATA.weekFoundations;
  const a = window.PROGRAM_DATA.weekApplied;
  return (
    <section className="section section--alt" id="lectures">
      <div className="gax-container">
        <div className="section__head">
          <div>
            <div className="section__eyebrow">AI Agents Week</div>
            <h2 className="section__title">10 лекцій. <span className="accent">Foundations + Applied Genesis-кейси.</span></h2>
          </div>
          <p className="section__sub">
            Тиждень 1 — фундаментальні концепти AI Agents від no-code до LLM API. Тиждень 2 — як це працює у реальних продуктах OBRIO, AMO, SKELAR, Universe Group.
          </p>
        </div>

        <div className="week-tag"><b>Week 1</b> · Foundations · 14-18 вересня</div>
        <div className="lectures">
          {f.map((l, i) => (
            <article key={i} className="lecture">
              <span className="lecture__num">{l.n}</span>
              <h4 className="lecture__title">{l.title}</h4>
              <span className="lecture__speaker">{l.speaker}</span>
            </article>
          ))}
        </div>

        <div className="week-tag"><b>Week 2</b> · Applied Genesis-кейси · 21-25 вересня</div>
        <div className="lectures">
          {a.map((l, i) => (
            <article key={i} className="lecture lecture--prep">
              <span className="lecture__num">{l.n}</span>
              <h4 className="lecture__title">{l.title}</h4>
              <span className="lecture__speaker">{l.speaker}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cases() {
  const caseIcon = (name) => {
    switch (name) {
      case "users": return "users";
      case "chart": return "chart";
      case "spark": return "spark";
      default: return "spark";
    }
  };
  return (
    <section className="section" id="cases">
      <div className="gax-container">
        <div className="section__head">
          <div>
            <div className="section__eyebrow">Challenge Cases</div>
            <h2 className="section__title">3 продуктові кейси — обирай <span className="accent">один.</span></h2>
          </div>
          <p className="section__sub">
            Кейси прийшли від компаній Genesis-екосистеми. Кожен — реальна продуктова задача, не академічна вправа. Кожен учасник Challenge обирає <b>один кейс</b> та будує власне AI-рішення.
          </p>
        </div>
        <div className="cases">
          {window.PROGRAM_DATA.cases.map((c, i) => (
            <article key={i} className="case-card">
              <div className="case-card__icon"><Icon name={caseIcon(c.icon)} size={28}/></div>
              <div>
                <div className="case-card__company">Кейс · {c.company}</div>
                <h3 className="case-card__title">{c.title}</h3>
              </div>
              <p className="case-card__copy">{c.copy}</p>
              <div className="case-card__metric">
                <span>Цільова метрика</span>
                <b>{c.metric}</b>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Outcomes() {
  return (
    <section className="section section--alt" id="outcomes">
      <div className="gax-container">
        <div className="section__head">
          <div>
            <div className="section__eyebrow">Що ти отримаєш</div>
            <h2 className="section__title">Не сертифікат. <span className="accent">Working AI-агент</span> і шанс на оффер.</h2>
          </div>
        </div>
        <div className="outcomes">
          {window.PROGRAM_DATA.outcomes.map((o, i) => (
            <div key={i} className="outcome">
              <div className="outcome__icon"><Icon name={o.icon} size={20}/></div>
              <h3 className="outcome__title">{o.title}</h3>
              <p className="outcome__copy">{o.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Facts = Facts;
window.Audience = Audience;
window.ProgrammeStructure = ProgrammeStructure;
window.LectureGrid = LectureGrid;
window.Cases = Cases;
window.Outcomes = Outcomes;
