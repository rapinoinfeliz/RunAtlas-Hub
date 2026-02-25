export type Project = {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    tags: string[];
    liveUrl: string;
    sourceUrl: string;
    icon: string; // Name of lucide-react icon
    featured: boolean;
};

export const projects: Project[] = [
    {
        id: "dfa-alpha1",
        title: "DFA-Alpha1 Threshold Analyzer",
        description: "Analyze Garmin .fit files with HRM Pro Plus data to calculate sliding-window DFA alpha1 and estimate aerobic thresholds (LT1/LT2) right in the browser.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Fractal Math", "Sport Science", "Garmin FitSDK"],
        liveUrl: "https://rapinoinfeliz.github.io/DFA-Alpha1-Threshold-Analyzer/", // Placeholder for live if deployed later, else source
        sourceUrl: "https://github.com/rapinoinfeliz/DFA-Alpha1-Threshold-Analyzer",
        icon: "Activity",
        featured: true,
    },
    {
        id: "runweather",
        title: "RunWeather",
        description: "A specialized weather API integration tool for runners aiming to calculate pacing adjustments based on immediate atmospheric conditions.",
        tags: ["Vanilla JS", "Tailwind CSS", "Weather APIs", "Running Pacing"],
        liveUrl: "https://rapinoinfeliz.github.io/RunWeather/",
        sourceUrl: "https://github.com/rapinoinfeliz/RunWeather", // Assuming standard repo name
        icon: "CloudSun",
        featured: true,
    },
    {
        id: "treadmill-rewriter",
        title: "Treadmill FIT Rewriter",
        description: "Privacy-first browser tool to modify Garmin .fit files. Injects speed/distance metadata into indoor runs where watches fail to capture treadmill telemetry.",
        tags: ["Next.js", "FitSDK", "WASM", "Data Processing"],
        liveUrl: "https://rapinoinfeliz.github.io/Treadmill-FIT-Rewriter/",
        sourceUrl: "https://github.com/rapinoinfeliz/Treadmill-FIT-Rewriter", // Assuming standard repo name
        icon: "TrendingUp",
        featured: true,
    },
    {
        id: "gel-calculator",
        title: "Gel Calculator",
        description: "Race-day nutrition planner for marathoners and triathletes. Calculates optimal carb intake and gel frequency based on specific physiology and duration.",
        tags: ["React", "Sports Nutrition", "Vite", "Tailwind CSS"],
        liveUrl: "https://rapinoinfeliz.github.io/Gel-Calculator/",
        sourceUrl: "https://github.com/rapinoinfeliz/Gel-Calculator", // Assuming standard repo name
        icon: "FlaskConical",
        featured: false,
    }
];
