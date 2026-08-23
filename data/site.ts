export const site = {
  name: "Jiaheng Xiao",
  role: "PhD Candidate · University of Nottingham Ningbo China(UNNC)",
  email: "jiaheng.X1406@gmail.com",
  github: "https://github.com/Nodarz",
  location: "Ningbo, China",
  profileImage: "",
  intro: "I study how human-like intelligence can be modelled, tested, and made useful in complex urban mobility systems.",
  bio: [
    "I am a PhD Candidate at UNNC. My current research sits at Agentic City, Intelligent Mobility and Human Behaviour.",
//     "My current research interest is agentic city.",
  ],
};

export const researchPillars = [
  { index: "01", title: "Agentic Mobility", label: "SYSTEM", text: "A day-to-day mobility system populated by LLM-based travellers and traffic managers with distinct roles, memories, actions, and channels for interaction.", tags: ["LLM agents", "MATSim", "mobility simulation"] },
  { index: "02", title: "Human-like Reasoning", label: "AGENT", text: "Generic agent prototypes that combine domain knowledge, personal profiles, memory, environmental perception, and bounded action spaces.", tags: ["memory", "RAG", "personalisation"] },
  { index: "03", title: "Safety in Emergent Systems", label: "EVALUATION", text: "Identifying risky actions and traits by comparing moral and adversarial societies, with inverse reinforcement learning as a lens on collective behaviour.", tags: ["AI safety", "IRL", "emergence"] },
  { index: "04", title: "City-scale Calibration", label: "REALITY", text: "Connecting microscopic agent settings to macroscopic flow patterns so an evolving artificial city remains meaningfully aligned with the real world.", tags: ["calibration", "surrogate learning", "traffic flow"] },
];

export const publications = [
  { year: "2026", venue: "IEEE TNNLS", title: "DPIU: Dynamic Pedestrian Intention Understanding Through Cognitive Decision-Making", authors: "Jiaheng Xiao, Zhihui Li, Mingxin Wang, Yu Xie, Qin Ma, Xin Wang, and Yu Sun", note: "A cognitive, memory-guided framework that connects future pedestrian intentions to historical experience and refines multimodal forecasts with Bayesian density estimation.", doi: "https://doi.org/10.1109/TNNLS.2026.3665567", pdf: "/files/DPIU_TNNLS_2026.pdf" },
//   { year: "2024", venue: "Master's Thesis", title: "Pedestrian Trajectory Prediction and Vehicle Safety Warning Methods in Autonomous Driving", authors: "Jiaheng Xiao", note: "Trajectory forecasting, collision-risk modelling, and safety-aware navigation for mixed pedestrian-vehicle environments." },
];

export const experience = [
    { period: "2026 - present", title: "Agentic City", place: "UNNC · Project Lead", text: "A day-to-day mobility system populated by LLM-based travellers and traffic managers." },
  { period: "2025 - 2026", title: "Hypergraph-Guided Social Interaction Modelling", place: "Jimei University · Project Lead", text: "Modeled high-order pedestrian social relations with hypergraphs and state-space models." },
  { period: "2021 - 2024", title: "Probabilistic Pedestrian Intention Understanding", place: "Jilin University · Project Lead", text: "Developed cognitive and uncertainty-aware models for robust trajectory prediction in long-tail scenarios." },
  { period: "2022", title: "Dynamic Assessment of Road Risk", place: "MPS × Huawei · Key Contributor", text: "Designed operational risk scoring and monitoring logic adopted in a real-world traffic management setting." },
];

export const education = [
  { year: "2026 - Present", degree: "PhD Candidate", supervisor: "Zhengbing He", school: "University of Nottingham Ningbo China" },
  { year: "2024", degree: "M.S. Transportation Information Engineering and Control", supervisor: "Zhaowei Qu", school: "Jilin University" },
  { year: "2020", degree: "B.Eng. Automobile Application Engineering", supervisor: "Zhihui Li", school: "Jilin University" },
];

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
