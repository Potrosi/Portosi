// Icon set — minimal outline, similar weight to Akar/Lucide
function Icon({ name, size = 18 }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "arrow-right": return (<svg {...common}><path d="M5 12h14M13 5l7 7-7 7"/></svg>);
    case "arrow-up-right": return (<svg {...common}><path d="M7 17L17 7M8 7h9v9"/></svg>);
    case "plus": return (<svg {...common}><path d="M12 5v14M5 12h14"/></svg>);
    case "calendar": return (<svg {...common}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></svg>);
    case "spark": return (<svg {...common}><path d="M12 3l1.8 5.4L19 10l-5.2 1.6L12 17l-1.8-5.4L5 10l5.2-1.6L12 3z"/></svg>);
    case "users": return (<svg {...common}><circle cx="9" cy="8" r="3.5"/><path d="M3 20c0-3 2.7-5 6-5s6 2 6 5"/><path d="M16 11a3.5 3.5 0 0 0 0-7"/><path d="M21 20c0-2.4-1.6-4.4-4-4.9"/></svg>);
    case "users2": return (<svg {...common}><circle cx="12" cy="7" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/></svg>);
    case "chart": return (<svg {...common}><path d="M4 20h16M7 16V10M12 16V6M17 16v-3"/></svg>);
    case "agent": return (<svg {...common}><rect x="5" y="7" width="14" height="12" rx="2"/><circle cx="9" cy="13" r="1"/><circle cx="15" cy="13" r="1"/><path d="M12 3v4M9 19l-2 3M15 19l2 3"/></svg>);
    case "code": return (<svg {...common}><path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 6l-4 12"/></svg>);
    case "folder": return (<svg {...common}><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"/></svg>);
    case "compass": return (<svg {...common}><circle cx="12" cy="12" r="9"/><path d="M15 9l-2 5-5 2 2-5 5-2z"/></svg>);
    case "rocket": return (<svg {...common}><path d="M5 19c0-3 2-4 4-4 0 2-1 4-4 4z"/><path d="M14 3c4 0 7 3 7 7-3 0-9 4-12 11-7-3-3-9-3-12 4-3 5-6 8-6z"/><circle cx="15" cy="9" r="1.5"/></svg>);
    case "rocket2": return (<svg {...common}><path d="M12 2c3 2 5 5 5 9v6l-2 2h-6l-2-2v-6c0-4 2-7 5-9z"/><circle cx="12" cy="10" r="2"/><path d="M7 17l-3 3M17 17l3 3"/></svg>);
    case "check": return (<svg {...common}><path d="M5 13l4 4 10-10"/></svg>);
    case "lightning": return (<svg {...common}><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/></svg>);
    case "open": return (<svg {...common}><path d="M14 3h7v7M10 14L21 3M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/></svg>);
    default: return null;
  }
}
window.Icon = Icon;
