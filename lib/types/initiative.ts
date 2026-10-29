export interface CurriculumTrack {
  id: string
  title: string
  ageGroup: string
  prerequisites: string
  coreTopics: string[]
  handsOnProject: {
    title: string
    description: string
    feasibilityNote: string
  }
}

export interface LaunchMilestone {
  phase: string
  title: string
  status: "COMPLETED" | "CURRENT_ASSESSMENT" | "UPCOMING"
  description: string
  deliverables: string[]
}

export interface ProposedInitiative {
  id: string
  slug: string
  title: string
  leadSponsor: string
  stage: "CONCEPT" | "BASELINE_AUDIT" | "PILOT_DESIGN" | "PARTNER_CONSULTATION" | "READY_FOR_LAUNCH"
  summary: string
  targetBeneficiaries: string
  currentAssessmentProgress: string
}
