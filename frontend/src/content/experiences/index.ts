import type { Experience } from '../types/Experience'

export const experiences: Experience[] = [
  {
    id: 'immersive-software-engineering-ul',
    title: 'BSc (Hons) Immersive Software Engineering',
    organization: 'University of Limerick',
    location: 'Ireland',
    startDate: '2025-09',
    endDate: '2029-06',
    description:
      "A hands-on software engineering degree that blends immersive industry experiences with academic learning, to achieve a Master's qualification in only 4 years.",
  },
  {
    id: 'mbryonics-internship',
    title: 'Software Intern - Visualisation',
    organization: 'MBRYONICS',
    location: 'Galway',
    startDate: '2026-06',
    endDate: null,
    description:
      'Building a clean 3D web visualisation frontend using Three.js, Vue and TypeScript.',
  },
  {
    id: 'creative-computing-setu',
    title: 'Creative Computing',
    organization: 'SETU Waterford',
    location: 'Ireland',
    startDate: '2024-09',
    endDate: '2025-05',
    description:
      'Studied subjects such as creative programming for the web, 3D modelling and animation, photography, UI/UX design, and the basics of computer systems.'
  },
  {
    id: 'graphic-design-plc',
    title: 'QQI Level 5 in Graphic Design',
    organization: 'Dungarvan College',
    location: 'Ireland',
    startDate: '2023-09',
    endDate: '2024-05',
    description:
      'A year completing projects related to drawing, painting, multimedia, graphic design, printmaking, and art history.',
  },
]

export function getTimelineExperiences(): Experience[] {
  return [...experiences].sort((a, b) => b.startDate.localeCompare(a.startDate))
}
