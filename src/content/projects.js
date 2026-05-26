export const projects = [
  {
    slug: 'procureiq',
    name: 'Integrated Demand-Supply Intelligence Platform',
    shortName: 'ProcureIQ',
    tagline: 'Procurement, forecasting & optimization engine for manufacturing',
    role: 'Sole builder',
    duration: '2025',
    cardSummary:
      'End-to-end procurement decision system: forecasts raw-material demand and price, scores supplier risk with SHAP, and recommends optimized order plans using PuLP MILP.',
    techStack: [
      'Python',
      'SQL',
      'XGBoost',
      'Prophet',
      'ARIMA',
      'SHAP',
      'PuLP',
      'AWS',
      'Power BI',
      'Streamlit',
    ],
    problem:
      'Procurement teams juggle volatile raw-material prices, uncertain demand, unreliable suppliers, and tight inventory budgets — usually with disconnected tools. There is no single place that converts a forecast into an actual buying decision.',
    pipeline: [
      { stage: 'Raw shipment data', layer: 'data', detail: 'Public procurement records and shipment-price history enter as the base signal.' },
      { stage: 'Cleaning & validation', layer: 'data', detail: 'Schema checks and freight-aware cleanup remove operational noise before modeling.' },
      { stage: 'Feature engineering', layer: 'features', detail: 'Lead-time, landed-cost, supplier-share, and volatility features shape planning context.' },
      { stage: 'Demand & price forecasting', layer: 'models', detail: 'ARIMA, Prophet, and XGBoost estimate weekly material demand and price movement.' },
      { stage: 'Supplier risk scoring (SHAP)', layer: 'models', detail: 'A transparent risk layer explains which supplier behaviors are driving concern.' },
      { stage: 'PuLP procurement optimizer', layer: 'optimization', detail: 'The forecast is converted into an order recommendation under MOQ and service constraints.' },
      { stage: 'Monte Carlo simulation', layer: 'optimization', detail: 'Scenarios test whether the buying plan holds under shocks in demand and lead-time.' },
      { stage: 'Streamlit dashboard', layer: 'app', detail: 'Decision-makers explore forecasts, risk, and optimized plans through one interface.' },
    ],
    modules: [
      {
        name: 'Data Ingestion',
        file: 'src/data_ingestion.py',
        layer: 'data',
        notes:
          'Loads Kaggle shipment data via API or manual CSV, validates schema, writes clean_base.csv.',
      },
      {
        name: 'Preprocessing',
        file: 'src/preprocessing.py',
        layer: 'data',
        notes:
          'Snake-case columns, date/numeric parsing, handles freight edge cases, flags missing values.',
      },
      {
        name: 'Feature Engineering',
        file: 'src/feature_engineering.py',
        layer: 'features',
        notes:
          'Delivery delay, lead time, landed cost, vendor volume share, vendor price CV, weekly demand aggregates.',
      },
      {
        name: 'Forecasting',
        file: 'src/forecasting.py',
        layer: 'models',
        notes:
          'Naive baseline, ARIMA, Prophet, XGBoost benchmarked with walk-forward CV. WAPE / MAPE / RMSE tracked.',
      },
      {
        name: 'Supplier Risk',
        file: 'src/supplier_risk.py',
        layer: 'models',
        notes:
          'Rule-based risk score + ML late-delivery classifier with SHAP explanation. Outputs risk bands (Low/Med/High).',
      },
      {
        name: 'Optimization',
        file: 'src/optimization.py',
        layer: 'optimization',
        notes:
          'PuLP MILP — minimize purchase + holding + freight + stockout + risk penalty, subject to MOQ, capacity, ABC service levels.',
      },
      {
        name: 'Simulation',
        file: 'src/simulation.py',
        layer: 'optimization',
        notes: 'Monte Carlo with demand, lead-time, price-inflation, freight-shock scenarios.',
      },
      {
        name: 'Streamlit Dashboard',
        file: 'app/streamlit_app.py',
        layer: 'app',
        notes:
          '5 pages: Overview, Forecasting, Supplier Risk, Procurement Optimizer, Scenario Simulator.',
      },
    ],
    impact: [
      { metric: 'Annual savings', value: '₹1 Cr+', progress: 0.9, benchmarkLabel: 'Target savings band' },
      { metric: 'Raw-material cost reduction', value: '8%', progress: 0.72, benchmarkLabel: 'Typical sourcing gain' },
      { metric: 'Inventory holding cut', value: '18%', progress: 0.86, benchmarkLabel: 'Planning benchmark' },
      { metric: 'Forecast MAPE', value: '4.8%', progress: 0.78, benchmarkLabel: 'Accuracy confidence' },
    ],
    pitchShort:
      'ProcureIQ is a Kaggle-based supply-chain intelligence prototype inspired by my Jayanita procurement work. It forecasts demand and price, scores supplier risk with SHAP, and recommends optimized order allocation using PuLP — turning analytics into procurement decisions.',
    pitchLong:
      "At Jayanita, procurement was affected by SKU complexity, raw-material price movement, supplier reliability, and inventory constraints. To demonstrate the problem openly, I built ProcureIQ on public Kaggle shipment-pricing data. I cleaned procurement records, engineered delivery-delay, landed-cost, price-volatility, and supplier-performance features, then forecast weekly demand and price using ARIMA, Prophet, and XGBoost with walk-forward validation. I built a supplier risk score combining late-delivery rate, price volatility, freight volatility, and missing-data signals. Finally I converted the forecast into a PuLP MILP that minimizes purchase, holding, stockout, freight, and supplier-risk penalty under MOQ, capacity, and ABC service-level constraints. Output is a recommended order plan plus a Streamlit dashboard. The point isn't only prediction — it's recommending what procurement should actually do.",
    honestyNote:
      'The business logic is inspired by my real supply-chain analytics work at Jayanita Exports. The GitHub implementation uses public Kaggle shipment-pricing data so the code can be shared openly without exposing company data.',
    repoUrl: 'https://github.com/piyush-kumar/procureiq',
  },
  {
    slug: 'sopnet',
    name: 'Network-Level S&OP Decision Engine',
    shortName: 'SOPNet',
    tagline: 'Hierarchical forecasting, MILP planning, and discrete-event simulation',
    role: 'Sole builder',
    duration: '2025',
    cardSummary:
      'Connects demand forecasting, production planning, logistics, and inventory into one S&OP decision engine for a 3-plant, 5-DC, 50-retail-node network using M5 public data.',
    techStack: [
      'Python',
      'Prophet',
      'LightGBM',
      'XGBoost',
      'PuLP (MILP)',
      'SimPy',
      'OCI Data Science',
      'Streamlit',
    ],
    problem:
      'Large supply chains struggle less with any single forecast and more with keeping demand, production, warehousing, transport, and service-level decisions consistent. Traditional planning runs in silos.',
    pipeline: [
      { stage: 'M5 sales data', layer: 'data', detail: 'Public retail demand serves as the observable market signal for planning.' },
      { stage: 'Weekly demand aggregation', layer: 'data', detail: 'Daily observations are reshaped into a planning cadence that operations teams can use.' },
      { stage: 'Hierarchy builder (SKU → store → state → total)', layer: 'features', detail: 'The demand tree preserves how local behavior rolls into network-level commitments.' },
      { stage: 'Hierarchical forecasting', layer: 'models', detail: 'Multiple model families estimate demand across stores, categories, and network totals.' },
      { stage: 'Forecast reconciliation (bottom-up / top-down / MinT)', layer: 'models', detail: 'Forecasts are forced into cross-level consistency before planning decisions are made.' },
      { stage: 'Synthetic plant–DC–retail network', layer: 'data', detail: 'A realistic network topology adds capacity, transport, and service-level constraints.' },
      { stage: 'MILP production + logistics optimizer', layer: 'optimization', detail: 'Production, inventory, and shipment choices are optimized as one connected plan.' },
      { stage: 'SimPy discrete-event simulation', layer: 'optimization', detail: 'The optimized plan is pressure-tested against stochastic demand and delay.' },
      { stage: 'Streamlit S&OP dashboard', layer: 'app', detail: 'Users compare scenarios, service outcomes, and cost tradeoffs in one view.' },
    ],
    modules: [
      {
        name: 'Data Ingestion',
        file: 'src/data_ingestion.py',
        layer: 'data',
        notes: 'Downloads M5 sample, validates files, writes processed starter CSVs.',
      },
      {
        name: 'Preprocessing',
        file: 'src/preprocessing.py',
        layer: 'data',
        notes:
          'Wide → long sales, calendar + price join, weekly aggregation, event flags, rolling features.',
      },
      {
        name: 'Hierarchy Builder',
        file: 'src/hierarchy_builder.py',
        layer: 'features',
        notes:
          'Builds Total → State → Store → Category → Department → SKU levels for reconciliation.',
      },
      {
        name: 'Forecasting',
        file: 'src/forecasting.py',
        layer: 'models',
        notes:
          'Seasonal naive, ARIMA, Prophet, LightGBM, XGBoost. Walk-forward CV. WAPE primary metric.',
      },
      {
        name: 'Reconciliation',
        file: 'src/reconciliation.py',
        layer: 'models',
        notes:
          'Bottom-up, top-down, middle-out, simplified MinT to keep cross-level forecasts consistent.',
      },
      {
        name: 'Network Generator',
        file: 'src/network_generator.py',
        layer: 'data',
        notes:
          'Synthesizes 3 plants, 5 DCs, retail nodes, lanes, SKU master with ABC + service targets.',
      },
      {
        name: 'MILP Optimization',
        file: 'src/optimization.py',
        layer: 'optimization',
        notes:
          'Produce/setup/ship/inventory/unmet decisions. Minimize total cost subject to capacity, lane, setup, ABC service constraints.',
      },
      {
        name: 'Discrete-Event Simulation',
        file: 'src/simulation.py',
        layer: 'optimization',
        notes:
          'SimPy, 100+ replications, stochastic demand and lead-time, reports service-level CI and stockout cost.',
      },
      {
        name: 'Scenario Analysis',
        file: 'src/scenario_analysis.py',
        layer: 'optimization',
        notes:
          'Base, +20% demand, +30% lead-time delay, +15% transport cost, -25% plant capacity, premium service.',
      },
      {
        name: 'Streamlit Dashboard',
        file: 'app/streamlit_app.py',
        layer: 'app',
        notes: '6 pages: Overview, Forecasting, Network Plan, Optimization, Simulation, Scenarios.',
      },
    ],
    impact: [
      { metric: 'Network scale', value: '3 plants · 5 DCs · 50 nodes', progress: 0.84, benchmarkLabel: 'Coverage readiness' },
      { metric: 'Forecast horizon', value: '4–8 weeks', progress: 0.68, benchmarkLabel: 'Planning window' },
      { metric: 'Simulation replications', value: '100+', progress: 0.88, benchmarkLabel: 'Stress-test depth' },
      { metric: 'Scenarios stress-tested', value: '6', progress: 0.7, benchmarkLabel: 'Scenario breadth' },
    ],
    pitchShort:
      'SOPNet is a network-level S&OP decision engine built on public M5 sales and a synthetic supply network. It forecasts demand hierarchically, reconciles across levels, optimizes production and shipments with MILP, and stress-tests the plan with SimPy simulation.',
    pitchLong:
      'SOPNet demonstrates connected S&OP. I take M5 retail sales, aggregate to weekly demand, and build a hierarchy from total network down to store-item level. I train baseline, statistical, and ML forecasting models with walk-forward validation, then reconcile forecasts so total, category, store, and SKU plans stay consistent. I generate a realistic plant–DC–retail network and build a PuLP MILP that decides production quantity, plant allocation, DC inventory, and shipments while respecting capacity, lane, storage, setup, and service-level constraints. Finally, I use SimPy to test the optimized plan under stochastic demand and lead-time. The Streamlit dashboard exposes forecast accuracy, the optimized network plan, service-level risk, and scenario tradeoffs. The whole point is showing that planning is one connected problem, not five separate ones.',
    honestyNote:
      'Independent public-data prototype. Not a paid client project. Uses Kaggle M5 demand data with a synthetic plant–DC–retail network. The OCI deployment is architecture-level, designed to demonstrate readiness rather than a live production deployment.',
    repoUrl: 'https://github.com/piyush-kumar/sopnet',
  },
]

export const projectPageCopy = {
  challengeLabel: 'The challenge',
  architectureLabel: 'Architecture',
  architectureTitle: 'A connected pipeline from raw signal to action.',
  modulesLabel: 'Modules',
  modulesTitle: 'How the system is broken down in code.',
  impactLabel: 'Impact',
  impactTitle: 'Signal, scale, and decision value.',
  stackLabel: 'Tech stack',
  stackTitle: 'Tools grouped by the role they play.',
  stackDistributionLabel: 'Stack distribution',
  pitchLabel: 'Interview pitch',
  pitchTitle: 'The concise version and the deeper walkthrough.',
  pitchShortTab: '30-second pitch',
  pitchLongTab: '2-minute pitch',
  honestyLabel: 'Honest framing note',
  sectionRail: ['Problem', 'Architecture', 'Modules', 'Impact', 'Tech', 'Pitch'],
  repoLabel: 'View repository',
  scrollLabel: 'Scroll to details',
}
