import procureiqStoryMarkdown from '../../procureiq.md?raw'
import sopnetStoryMarkdown from '../../sopnet.md?raw'

export const projects = [
  {
    slug: 'procureiq',
    name: 'Integrated Demand-Supply Intelligence Platform',
    shortName: 'ProcureIQ',
    tagline: 'Procurement, forecasting & optimization engine for manufacturing',
    thumbnailGradient: 'from-blue-600 via-violet-600 to-indigo-800',
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
    plainEnglish: {
      eyebrow: 'My take',
      title: 'How I think about ProcureIQ',
      description:
        'If I had to explain this project quickly, this is how I would frame it.',
      summary:
        'I built ProcureIQ to close the gap between a forecast and an actual buying decision.',
      cards: [
        {
          title: 'The real job here',
          text:
            'The project looks at past demand, pricing, and supplier behavior, then turns that into a suggested procurement plan instead of stopping at charts or model scores.',
        },
        {
          title: 'Why that matters',
          text:
            'In procurement, small mistakes show up quickly. Buy too much and cash gets stuck in inventory. Buy too little and service suffers. Pick the wrong supplier and delays become everyone else’s problem.',
        },
        {
          title: 'Simple example',
          text:
            'Say a factory needs steel, packaging, and chemicals for next month. A buyer cannot just ask who is cheapest. They also need to know how much material will be needed, which supplier is likely to delay, and how to place orders without overstocking. That is the kind of decision this project is trying to support.',
        },
        {
          title: 'How I read the output',
          text:
            'The output tells me the logic is stronger than a cheapest-supplier-only approach. I would not treat the savings as a business promise, but I would treat the planning approach as directionally better.',
        },
      ],
    },
    storyMarkdown: procureiqStoryMarkdown,
    honestyNote:
      'This is an independent project I built on my own using public Kaggle data. It is not a company project, and it does not use any private business data. The ideas come from real supply-chain problems, but the implementation here is a personal prototype made for learning, experimentation, and showing how I think through procurement decisions.',
    repoUrl: 'https://github.com/piyushkumar-pk007/ProcureIQ-Integrated-Demand-Supply-Intelligence-Platform',
  },
  {
    slug: 'sopnet',
    name: 'Network-Level S&OP Decision Engine',
    shortName: 'SOPNet',
    tagline: 'Hierarchical forecasting, MILP planning, and discrete-event simulation',
    thumbnailGradient: 'from-emerald-600 via-teal-600 to-cyan-800',
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
    plainEnglish: {
      eyebrow: 'My take',
      title: 'How I think about SOPNet',
      description:
        'If I had to explain this project quickly, this is the version I would use.',
      summary:
        'I built SOPNet to show that forecasting is only one part of planning; the harder part is deciding how the network should respond.',
      cards: [
        {
          title: 'The real job here',
          text:
            'The project connects forecast output with production, inventory, shipment, and service decisions across a multi-node supply chain.',
        },
        {
          title: 'Why that matters',
          text:
            'A good forecast does not automatically create a good plan. Teams still have to decide what to make, where to send it, and how much risk they are willing to carry.',
        },
        {
          title: 'Simple example',
          text:
            'Imagine three factories and five warehouses serving many stores. If demand rises in one region, the team has to decide which factory should produce more, which warehouse should receive it, and how to move stock without creating shortages somewhere else. That is the kind of network decision this project is built to handle.',
        },
        {
          title: 'How I read the output',
          text:
            'The optimized plan looked better than the simpler baselines, and the simulation helped me check whether that plan still holds up once uncertainty is introduced.',
        },
      ],
    },
    storyMarkdown: sopnetStoryMarkdown,
    honestyNote:
      'This is also an independent project built by me using public M5 demand data and a synthetic supply network. It is not based on a company’s live planning system. I created it to show how forecasting, planning, optimization, and simulation can work together in one flow, using assumptions that are clear and safe to share publicly.',
    repoUrl: 'https://github.com/piyushkumar-pk007/SOPNet-Network-Level-S-OP-Decision-Engine',
  },
]

export const projectPageCopy = {
  challengeLabel: 'The challenge',
  architectureLabel: 'Architecture',
  architectureTitle: 'A connected pipeline from raw signal to action.',
  impactLabel: 'Impact',
  impactTitle: 'Signal, scale, and decision value.',
  stackLabel: 'Tech stack',
  stackTitle: 'Tools grouped by the role they play.',
  stackDistributionLabel: 'Stack distribution',
  honestyLabel: 'Honest framing note',
  sectionRail: ['Story', 'Problem', 'Architecture', 'Impact', 'Tech'],
  repoLabel: 'View repository',
  scrollLabel: 'Scroll to details',
}
