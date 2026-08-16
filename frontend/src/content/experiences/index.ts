import type { Experience } from '../types/Experience'

export const experiences: Experience[] = [
  {
    id: 'immersive-software-engineering',
    title: 'BSc (Hons) Immersive Software Engineering',
    organization: 'University',
    location: 'Ireland',
    startDate: '2024-09',
    endDate: '2028-06',
    description:
      'A degree where engineering, design, and creativity meet — building full-stack apps, games, and everything in between while learning how to ship real products.',
  },
  {
    id: 'junior-web-developer',
    title: 'Junior Web Developer',
    organization: 'Placeholder Studio',
    location: 'Dublin',
    startDate: '2025-06',
    endDate: null,
    description:
      'Building and maintaining client websites with Vue and TypeScript, turning loose briefs into polished, accessible interfaces alongside a small design team.',
  },
  {
    id: 'hackathon-participant',
    title: 'Hackathon Participant',
    organization: 'Various Events',
    location: 'Ireland',
    startDate: '2024-02',
    endDate: '2025-11',
    description:
      'Weekend-long sprints where I prototype, pitch, and present — my favourite way to learn new tools fast and meet people who love making things.',
  },
  {
    id: 'design-volunteer',
    title: 'Design Volunteer',
    organization: 'Student Society',
    location: 'Campus',
    startDate: '2023-09',
    endDate: '2024-05',
    description:
      'Designed posters, socials, and merch for campus events, and learned how good feedback turns a draft into a design people actually remember.',
  },
  {
    id: 'secondary-school',
    title: 'Leaving Certificate',
    organization: 'Secondary School',
    location: 'Ireland',
    startDate: '2018-09',
    endDate: '2023-06',
    description:
      'Studied maths, computer science, and design — the combination that convinced me software was the path I wanted to take.',
  },
]

export function getTimelineExperiences(): Experience[] {
  return [...experiences].sort((a, b) => b.startDate.localeCompare(a.startDate))
}
