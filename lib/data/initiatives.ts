import { CurriculumTrack, LaunchMilestone } from "@/lib/types/initiative"

export const futureLabsTracks: CurriculumTrack[] = [
  {
    id: "track-junior",
    title: "Junior STEM Foundations",
    ageGroup: "Ages 10–13 (Class 5–8)",
    prerequisites: "Curiosity and basic arithmetic. No computer ownership required.",
    coreTopics: [
      "Scientific Inquiry & Hypotheses Testing",
      "Block-Based Programming (Scratch / Blockly)",
      "Computational Thinking & Algorithmic Patterns",
      "Digital Safety, Privacy & Ethical Media Literacy",
    ],
    handsOnProject: {
      title: "Interactive Meitei-Mayek Storybook",
      description:
        "Students build an interactive animated folktale game using block-based logic, introducing foundational branching, loops, and digital art.",
      feasibilityNote: "Requires basic shared desktop/laptop lab with low-spec hardware. Fully offline-capable.",
    },
  },
  {
    id: "track-intermediate",
    title: "Applied Electronics & Microcontrollers",
    ageGroup: "Ages 14–16 (Class 9–10)",
    prerequisites: "Foundational block coding or school mathematics.",
    coreTopics: [
      "Circuitry, Ohm's Law & Breadboard Prototyping",
      "Microcontrollers (Arduino / Raspberry Pi Pico)",
      "Sensors (Ultrasonic, Soil Moisture, Ambient Temperature)",
      "Introduction to Python Syntax & Variables",
    ],
    handsOnProject: {
      title: "Smart Agricultural Soil-Moisture Buzzer",
      description:
        "Students assemble a soil-moisture sensor on a breadboard programmed in Python/C to trigger an audible warning when agricultural beds require watering.",
      feasibilityNote:
        "Uses low-cost battery-operated hardware kits. Safe low-voltage design suitable for classroom environments.",
    },
  },
  {
    id: "track-senior",
    title: "Data Science, Applied AI & Pathways",
    ageGroup: "Ages 17+ (Class 11, 12 & Early College)",
    prerequisites: "Basic programming concepts or school computer science.",
    coreTopics: [
      "Modular Python & Object-Oriented Principles",
      "Real-World Data Processing (CSV, Pandas, Matplotlib)",
      "How Machine Learning Models Work (Supervised Classification)",
      "AI Ethics, Dataset Bias, Cybersecurity & University Entrance Prep",
    ],
    handsOnProject: {
      title: "Local Hydrological & Rain Data Visualizer",
      description:
        "Students take publicly available historical weather and river-level datasets to chart local waterlogging patterns and explain data trends in an academic presentation.",
      feasibilityNote:
        "Utilizes open-source Python libraries. Can run in browser notebooks or local offline distributions.",
    },
  },
]

export const launchMilestones: LaunchMilestone[] = [
  {
    phase: "Phase 1",
    title: "Baseline Facility & Readiness Audit",
    status: "CURRENT_ASSESSMENT",
    description:
      "Documenting computer lab infrastructure, power reliability, broadband access, and teacher availability across Mayang Imphal secondary schools.",
    deliverables: [
      "Audit matrix of local higher secondary schools",
      "Consultation meetings with local educators and school heads",
      "Identification of collaborative opportunities with Atal Tinkering Labs (AIM)",
    ],
  },
  {
    phase: "Phase 2",
    title: "Partner School Pilot Design",
    status: "UPCOMING",
    description:
      "Finalizing an age-appropriate 12-week modular curriculum, safety guidelines, and kit procurement for willing partner schools.",
    deliverables: [
      "12-week printed and digital curriculum modules",
      "Standard operating safety procedures for physical computing labs",
      "Offline downloadable software distribution bundles",
    ],
  },
  {
    phase: "Phase 3",
    title: "Teacher Training & Demonstration Labs",
    status: "UPCOMING",
    description:
      "Equipping local educators with practical pedagogy, troubleshooting guides, and project evaluation rubrics.",
    deliverables: [
      "Hands-on educator workshops",
      "Student project evaluation rubrics focused on demonstrated skills",
      "Screened mentor pairing protocol",
    ],
  },
  {
    phase: "Phase 4",
    title: "Student Project Exhibition & Community Review",
    status: "UPCOMING",
    description:
      "Hosting a public project demonstration day where students explain their prototypes to parents, community elders, and external mentors.",
    deliverables: [
      "Public project showcase day in Mayang Imphal",
      "Screened feedback sessions with diaspora engineers and scientists",
      "Documentation of student learning gains",
    ],
  },
  {
    phase: "Phase 5",
    title: "Independent Evaluation & Staged Expansion",
    status: "UPCOMING",
    description:
      "Publishing attendance, skill gain rubrics, and lessons learned before considering expansion to neighboring cluster schools.",
    deliverables: [
      "Publicly available evaluation report",
      "Retention and progression metrics",
      "Framework for long-term institutional sustainability",
    ],
  },
]
