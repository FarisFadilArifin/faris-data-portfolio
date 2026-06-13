const contact = {
  name: "Faris Fadil Arifin",
  role: "Data Scientist and Data Analyst Internship Portfolio",
  email: "farisfadilarifin@gmail.com",
  linkedin: "https://www.linkedin.com/in/faris-fadil-arifin/",
  github: "https://github.com/FarisFadilArifin",
  cv: "assets/faris-fadil-arifin-cv-june-2026-intern.pdf"
};

const projects = [
  {
    title: "Fraud Detection Machine Learning Pipeline",
    shortTitle: "Fraud Detection ML Pipeline",
    year: "2026",
    tags: ["Classification", "Imbalance", "Optuna", "Stacking"],
    repoUrl: "https://github.com/FarisFadilArifin/fraud-detection",
    objective: "Detect risky online transactions from highly imbalanced fraud data.",
    story: {
      problem: "Fraud teams need to find rare risky transactions without relying on misleading accuracy.",
      method: "Built time-based validation, behavior features, tuned boosting models, and stacked predictions.",
      result: "Reached 0.90269 ROC-AUC and 0.78136 Macro-F1 with a tuned 0.46 threshold.",
      value: "Turns messy transaction data into a practical risk-scoring workflow."
    },
    dataset: "590,540 merged transaction and identity rows. Target: isFraud. Fraud rate: about 3.5%.",
    approach: "Time-based validation, behavioral feature engineering, categorical encoding, model tuning, and stacked predictions.",
    models: "XGBoost, LightGBM, CatBoost, and a linear stacking model.",
    evaluation: "ROC-AUC for ranking quality. Macro-F1 and threshold tuning for the imbalanced target.",
    results: [
      ["ROC-AUC", "0.90269"],
      ["Macro-F1", "0.78136"],
      ["Threshold", "0.46"],
      ["Features", "493 model features kept"]
    ],
    insights: "Validation strategy, behavior features, and threshold tuning mattered more than default accuracy.",
    limitations: "Turn the notebook into a pipeline, add SHAP, calibrate probabilities, and test a scoring API."
  },
  {
    title: "Stacked Ensemble Weather Forecasting Bot for Prediction Market",
    shortTitle: "Stacked Ensemble Weather Forecasting Bot",
    year: "2026",
    tags: ["Forecasting", "ML Calibration", "Stacking", "Dashboard"],
    repoUrl: "https://github.com/FarisFadilArifin/weather-research",
    visual: "assets/weather-dashboard-polymarket-original.png",
    visualFit: "contain",
    visualCaption: "Original project dashboard preview supplied for the portfolio.",
    objective: "Improve daily airport high-temperature forecasts with station-specific ML calibration.",
    story: {
      problem: "Raw forecast providers can have higher MAE and station-level bias, making daily-high forecasts misleading.",
      method: "Trained station-level ML models and a Ridge stack using raw forecasts, observations, calendar signals, and lag features.",
      result: "Reduced 2026 holdout MAE to 1.574F, with 72.1% within 2F and 87.5% within 3F.",
      value: "Turns raw weather feeds into calibrated, decision-ready temperature forecasts."
    },
    dataset: "Airport weather history, forecast snapshots, 11 AM observations, calendar features, lagged highs, and resolved actual highs.",
    approach: "Built station-level features, trained ensemble regressors, evaluated forecast error, and added dashboard monitoring.",
    models: "Raw GFS/HRRR baselines, XGBoost, LightGBM, CatBoost, and Ridge stacking.",
    evaluation: "MAE, RMSE, bias, within 1F/2F/3F accuracy, and bucket accuracy for temperature ranges.",
    results: [
      ["MAE", "1.574F holdout"],
      ["Within 2F", "72.1%"],
      ["Within 3F", "87.5%"],
      ["Bias", "-0.07F"]
    ],
    insights: "Station-specific ML calibration reduced raw forecast error and made temperature estimates more reliable.",
    limitations: "Add uncertainty intervals, expand across more seasons, compare neural forecast fusion, and keep station-level monitoring."
  },
  {
    title: "Quantitative ML Research Framework",
    shortTitle: "Quantitative ML Research Framework",
    year: "2026",
    tags: ["Quant Research", "Time-Series ML", "XGBoost", "Validation"],
    repoUrl: "https://github.com/FarisFadilArifin/quant-research",
    visual: "assets/quant-equity-overview-mean-reversion-v2.png",
    visualFit: "chart-fit",
    visualCaption: "Real equity overview chart from the quant research project artifacts.",
    objective: "Build a reusable ML research framework for futures financial instruments.",
    story: {
      problem: "Futures time-series research can look strong in-sample but break on unseen market regimes.",
      method: "Designed walk-forward experiments with feature engineering, research labels, XGBoost scoring, baselines, and robustness checks.",
      result: "The holdout study showed that accuracy alone was not enough; stability and calibration mattered more.",
      value: "Creates a disciplined framework for testing quantitative hypotheses before production use."
    },
    dataset: "Local intraday futures data from 2019-2026 with validation folds and a 2025 final holdout.",
    approach: "Built a reusable experiment pipeline for labels, features, model scoring, benchmark comparison, and stress testing.",
    models: "XGBoost classifier compared with rule-based and passive research baselines.",
    evaluation: "Probability quality, calibration, period stability, benchmark comparison, and Monte Carlo robustness.",
    results: [
      ["Core lesson", "Accuracy was not enough"],
      ["Validation", "Walk-forward holdout"],
      ["Output", "Reusable research pipeline"],
      ["Next focus", "Calibrated probabilities"]
    ],
    insights: "The research showed that a useful quantitative framework must evaluate stability, calibration, and robustness, not just classification score.",
    limitations: "Improve probability calibration, add broader regime tests, refine labels, and expand robustness diagnostics."
  }
];

const slides = [
  { type: "hero" },
  { type: "profile" },
  { type: "index" },
  { type: "projectSnapshot", project: 0 },
  { type: "projectSnapshot", project: 1 },
  { type: "projectSnapshot", project: 2 },
  { type: "contact" }
];

const stage = document.getElementById("deckStage");
const progressFill = document.getElementById("progressFill");
const slideCounter = document.getElementById("slideCounter");
let currentSlide = 0;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderMeta(index) {
  return `
    <div class="meta-row">
      <span>Faris Fadil Arifin - Data Scientist / Data Analyst Portfolio</span>
      <span class="page-number">${String(index + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}</span>
    </div>
  `;
}

function tagRow(tags) {
  return `<div class="tag-row">${tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>`;
}

function actionLinks() {
  return `
    <div class="title-actions">
      <a class="action-link primary" href="mailto:${contact.email}">Email</a>
      <a class="action-link" href="${contact.linkedin}" target="_blank" rel="noreferrer">LinkedIn</a>
      <a class="action-link" href="${contact.github}" target="_blank" rel="noreferrer">GitHub</a>
      <a class="action-link" href="${contact.cv}" target="_blank" rel="noreferrer">CV PDF</a>
    </div>
  `;
}

function renderHero(index) {
  return `
    <section class="slide title-slide" data-slide="${index}">
      <div>
        <div class="slide-kicker">Data science portfolio</div>
        <h1>${contact.name}</h1>
        <p class="lead">Information Systems student building practical data science and analytics projects.</p>
        ${actionLinks()}
      </div>
      <aside class="title-card">
        <strong>Portfolio in 7 slides.</strong>
        <span>Who I am, what I build, and the results behind each project.</span>
        <div class="terminal-card" aria-hidden="true">
          <div class="terminal-bar"><i class="dot"></i><i class="dot"></i><i class="dot"></i></div>
          <div class="terminal-body">
            <div>$ focus <b>data-science-intern</b></div>
            <div>$ projects <b>fraud weather quant</b></div>
            <div>$ evidence <b>metrics + repo links</b></div>
          </div>
        </div>
      </aside>
      ${renderMeta(index)}
    </section>
  `;
}

function renderProfile(index) {
  return `
    <section class="slide about-slide" data-slide="${index}">
      <div>
        <div class="slide-kicker">About me</div>
        <h2>I am Faris, an Information Systems student building practical ML projects.</h2>
        <p class="lead">I enjoy the full data science loop: cleaning messy data, designing honest validation, comparing models, and turning results into dashboards, reports, and repo-ready experiments.</p>
        <div class="about-pills">
          <span>Telkom University - Information Systems undergraduate</span>
          <span>I like translating ambiguous questions into measurable experiments, then explaining the result clearly</span>
          <span>Python, SQL, pandas, scikit-learn, XGBoost, LightGBM, CatBoost</span>
        </div>
        <div class="about-actions">
          <a class="action-link primary" href="${contact.github}" target="_blank" rel="noreferrer">View GitHub projects</a>
        </div>
      </div>
      <aside class="portrait-card">
        <img src="assets/faris-openai-codex-photo-cropped.jpeg" alt="Faris Fadil Arifin standing beside an OpenAI Codex banner">
      </aside>
      ${renderMeta(index)}
    </section>
  `;
}

function renderIndex(index) {
  return `
    <section class="slide project-index" data-slide="${index}">
      <div class="index-header">
        <div>
          <div class="slide-kicker">Featured work</div>
          <h2>Three projects, one pattern: model the decision.</h2>
        </div>
        <p class="lead">Fraud, weather forecasting, and quant research.</p>
      </div>
      <div class="project-cards">
        ${projects.map((project, i) => `
          <article class="project-card glass-card">
            <div class="project-number">0${i + 1}</div>
            <h3>${escapeHtml(project.shortTitle)}</h3>
            <p>${escapeHtml(project.tags.slice(0, 3).join(" / "))}</p>
            ${tagRow(project.tags)}
            <a class="action-link" style="margin-top: 34px;" href="${project.repoUrl}" target="_blank" rel="noreferrer">Open repo</a>
          </article>
        `).join("")}
      </div>
      ${renderMeta(index)}
    </section>
  `;
}

function renderMetricGrid(project) {
  return `
    <div class="metric-grid">
      ${project.results.map(([label, value]) => `
        <article class="metric-card">
          <strong>${escapeHtml(label)}</strong>
          <span>${escapeHtml(value)}</span>
        </article>
      `).join("")}
    </div>
  `;
}

function renderValueFlow(project) {
  const steps = [
    ["Problem", project.story.problem],
    ["Method", project.story.method],
    ["Result", project.story.result],
    ["Why it matters", project.story.value]
  ];

  return `
    <div class="value-flow">
      ${steps.map(([label, text]) => `
        <article class="value-step">
          <strong>${escapeHtml(label)}</strong>
          <p>${escapeHtml(text)}</p>
        </article>
      `).join("")}
    </div>
  `;
}

function renderProjectIntro(index, projectIndex) {
  const project = projects[projectIndex];
  return `
    <section class="slide case-study" data-slide="${index}">
      <div>
        <div class="slide-kicker">${escapeHtml(project.year)} case study</div>
        <h2 class="case-title">${escapeHtml(project.title)}</h2>
        <div class="field-label">Objective</div>
        <p class="case-lead">${escapeHtml(project.objective)}</p>
        ${tagRow(project.tags)}
        <div class="case-grid">
          <article class="case-panel">
            <strong>Dataset</strong>
            <p>${escapeHtml(project.dataset)}</p>
          </article>
          <article class="case-panel">
            <strong>Approach</strong>
            <p>${escapeHtml(project.approach)}</p>
          </article>
        </div>
      </div>
      ${project.visual ? renderImagePanel(project) : renderFraudPanel()}
      ${renderMeta(index)}
    </section>
  `;
}

function renderProjectSnapshot(index, projectIndex) {
  const project = projects[projectIndex];
  const metrics = project.results.slice(0, 4);
  const projectNumber = String(projectIndex + 1).padStart(2, "0");
  const visualClass = ["snapshot-image", project.visualFit].filter(Boolean).join(" ");
  return `
    <section class="slide project-snapshot" data-slide="${index}">
      <div class="snapshot-copy">
        <div class="snapshot-topline">
          <div class="slide-kicker">${escapeHtml(project.year)} project</div>
          <div class="project-page-number" aria-label="Project ${projectNumber}">${projectNumber}</div>
        </div>
        <h2 class="case-title">${escapeHtml(project.title)}</h2>
        <p class="case-lead">${escapeHtml(project.objective)}</p>
        ${tagRow(project.tags)}

        ${renderValueFlow(project)}
      </div>

      <aside class="snapshot-card">
        ${project.visual ? `
          <img class="${escapeHtml(visualClass)}" src="${escapeHtml(project.visual)}" alt="${escapeHtml(project.shortTitle)} visual">
        ` : ""}
        <div class="compact-metrics">
          ${metrics.map(([label, value]) => `
            <div class="mini-stat">
              <strong>${escapeHtml(label)}</strong>
              <span>${escapeHtml(value)}</span>
            </div>
          `).join("")}
        </div>
        <div class="takeaway">
          <strong>Technical proof</strong>
          <p>${escapeHtml(project.models)}</p>
        </div>
        <a class="action-link primary" href="${project.repoUrl}" target="_blank" rel="noreferrer">Open project repo</a>
      </aside>
      ${renderMeta(index)}
    </section>
  `;
}

function renderImagePanel(project) {
  const images = [project.visual, project.secondaryVisual].filter(Boolean);
  return `
    <aside class="media-panel">
      <div class="image-stack ${images.length > 1 ? "multi" : ""}">
        ${images.map((image) => `<img src="${escapeHtml(image)}" alt="${escapeHtml(project.shortTitle)} project visual">`).join("")}
      </div>
      <p class="media-caption">${escapeHtml(project.visualCaption || "Project evidence from local research artifacts.")}</p>
    </aside>
  `;
}

function renderFraudPanel() {
  return `
    <aside class="media-panel">
      <div class="metric-grid">
        <article class="metric-card"><strong>590,540</strong><span>merged training rows</span></article>
        <article class="metric-card"><strong>3.499%</strong><span>fraud rate</span></article>
        <article class="metric-card"><strong>493</strong><span>model features kept</span></article>
        <article class="metric-card"><strong>0.46</strong><span>best Macro-F1 threshold</span></article>
        <article class="metric-card"><strong>0.90269</strong><span>stacked ROC-AUC</span></article>
        <article class="metric-card"><strong>0.78136</strong><span>stacked Macro-F1</span></article>
      </div>
      <p class="media-caption">Fraud visual is a real metric panel from the documented notebook run, not a fake screenshot.</p>
    </aside>
  `;
}

function renderProjectMethod(index, projectIndex) {
  const project = projects[projectIndex];
  return `
    <section class="slide case-study wide-copy" data-slide="${index}">
      <div>
        <div class="slide-kicker">${escapeHtml(project.shortTitle)}</div>
        <h2 class="case-title">Method, models, and evaluation.</h2>
        <p class="case-lead">The portfolio version focuses on the scientific decisions: what was predicted, what baselines mattered, and which metrics matched the problem.</p>
      </div>
      <div class="case-grid">
        <article class="case-panel full">
          <strong>Models Used</strong>
          <p>${escapeHtml(project.models)}</p>
        </article>
        <article class="case-panel full">
          <strong>Evaluation</strong>
          <p>${escapeHtml(project.evaluation)}</p>
        </article>
        <article class="case-panel full">
          <strong>Repository</strong>
          <p><a href="${project.repoUrl}" target="_blank" rel="noreferrer">${escapeHtml(project.repoUrl)}</a></p>
        </article>
      </div>
      ${renderMeta(index)}
    </section>
  `;
}

function renderProjectResults(index, projectIndex) {
  const project = projects[projectIndex];
  return `
    <section class="slide project-summary-slide" data-slide="${index}">
      <div>
        <div class="slide-kicker">${escapeHtml(project.shortTitle)}</div>
        <h2 class="case-title">Models, metrics, takeaway.</h2>
        <div class="summary-panels">
          <article class="case-panel">
            <strong>Models Used</strong>
            <p>${escapeHtml(project.models)}</p>
          </article>
          <article class="case-panel">
            <strong>Evaluation</strong>
            <p>${escapeHtml(project.evaluation)}</p>
          </article>
        </div>
        <div class="result-list">
          ${project.results.map(([label, value]) => `
            <div><strong>${escapeHtml(label)}</strong><span>${escapeHtml(value)}</span></div>
          `).join("")}
        </div>
      </div>
      <div class="result-stack">
        <div class="insight-box"><b>Key insight.</b> ${escapeHtml(project.insights)}</div>
        <div class="insight-box"><b>Next step.</b> ${escapeHtml(project.limitations)}</div>
        <a class="action-link primary" href="${project.repoUrl}" target="_blank" rel="noreferrer">Open project repo</a>
      </div>
      ${renderMeta(index)}
    </section>
  `;
}

function renderContact(index) {
  return `
    <section class="slide contact-slide" data-slide="${index}">
      <div>
        <div class="slide-kicker">Contact</div>
        <h1>Let us turn data into decisions.</h1>
        <p class="lead">I am looking for Data Scientist and Data Analyst internship opportunities where I can turn raw data into reliable insights, clear experiments, and practical tools.</p>
        ${actionLinks()}
      </div>
      <aside class="contact-card glass-card">
        <strong>Portfolio focus</strong>
        <div class="contact-list">
          <a class="contact-item" href="mailto:${contact.email}"><span>Email</span>${contact.email}</a>
          <a class="contact-item" href="${contact.linkedin}" target="_blank" rel="noreferrer"><span>LinkedIn</span>linkedin.com/in/faris-fadil-arifin</a>
          <a class="contact-item" href="${contact.github}" target="_blank" rel="noreferrer"><span>GitHub</span>github.com/FarisFadilArifin</a>
          <a class="contact-item" href="${contact.cv}" target="_blank" rel="noreferrer"><span>Resume</span>Download CV PDF</a>
        </div>
      </aside>
      ${renderMeta(index)}
    </section>
  `;
}

function renderSlide(slide, index) {
  if (slide.type === "hero") return renderHero(index);
  if (slide.type === "profile") return renderProfile(index);
  if (slide.type === "index") return renderIndex(index);
  if (slide.type === "projectSnapshot") return renderProjectSnapshot(index, slide.project);
  if (slide.type === "projectIntro") return renderProjectIntro(index, slide.project);
  if (slide.type === "projectResults") return renderProjectResults(index, slide.project);
  return renderContact(index);
}

function renderSlides() {
  stage.innerHTML = slides.map(renderSlide).join("");
}

function getSlideIndexFromHash() {
  const match = window.location.hash.match(/slide-(\d+)/);
  if (!match) return null;
  return Number(match[1]) - 1;
}

function showSlide(index, updateHash = true) {
  const allSlides = Array.from(document.querySelectorAll(".slide"));
  currentSlide = Math.max(0, Math.min(index, allSlides.length - 1));
  allSlides.forEach((slide, i) => {
    slide.classList.toggle("active", i === currentSlide);
    slide.classList.toggle("visible", i === currentSlide);
  });
  slideCounter.textContent = `${currentSlide + 1} / ${allSlides.length}`;
  progressFill.style.width = `${((currentSlide + 1) / allSlides.length) * 100}%`;
  if (updateHash) {
    const nextHash = `#slide-${currentSlide + 1}`;
    if (window.location.hash !== nextHash) window.location.hash = nextHash;
  }
}

function setupStageScale() {
  const scale = () => {
    const isMobile = window.innerWidth <= 720;
    document.body.classList.toggle("mobile-deck", isMobile);
    if (isMobile) {
      stage.style.transform = "none";
      return;
    }
    const factor = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
    const x = (window.innerWidth - 1920 * factor) / 2;
    const y = (window.innerHeight - 1080 * factor) / 2;
    stage.style.transform = `translate(${x}px, ${y}px) scale(${factor})`;
  };
  scale();
  window.addEventListener("resize", scale);
}

function setupNavigation() {
  document.getElementById("prevBtn").addEventListener("click", () => showSlide(currentSlide - 1));
  document.getElementById("nextBtn").addEventListener("click", () => showSlide(currentSlide + 1));

  window.addEventListener("keydown", (event) => {
    if (["ArrowRight", " ", "PageDown", "Enter"].includes(event.key)) {
      event.preventDefault();
      showSlide(currentSlide + 1);
    }
    if (["ArrowLeft", "PageUp", "Backspace"].includes(event.key)) {
      event.preventDefault();
      showSlide(currentSlide - 1);
    }
    if (event.key === "Home") showSlide(0);
    if (event.key === "End") showSlide(slides.length - 1);
  });

  let touchStartX = 0;
  window.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].screenX;
  }, { passive: true });

  window.addEventListener("touchend", (event) => {
    const deltaX = event.changedTouches[0].screenX - touchStartX;
    if (Math.abs(deltaX) < 52) return;
    showSlide(deltaX < 0 ? currentSlide + 1 : currentSlide - 1);
  }, { passive: true });

  let wheelLock = false;
  window.addEventListener("wheel", (event) => {
    if (wheelLock || Math.abs(event.deltaY) < 20) return;
    wheelLock = true;
    showSlide(event.deltaY > 0 ? currentSlide + 1 : currentSlide - 1);
    window.setTimeout(() => { wheelLock = false; }, 450);
  }, { passive: true });

  window.addEventListener("hashchange", () => {
    const slideIndex = getSlideIndexFromHash();
    if (slideIndex !== null) showSlide(slideIndex, false);
  });
}

renderSlides();
setupStageScale();
setupNavigation();
showSlide(getSlideIndexFromHash() ?? 0, !window.location.hash);
