export interface Project {
  name: string;
  slug: string;
  description: string;
  longDescription?: string;
  thumbnail?: string;
  tags?: string[];
  year?: string;
  role?: string;
  challenge?: string;
  solution?: string;
  results?: string;
}

export const projects: Project[] = [
  {
    name: "Fiverr",
    slug: "fiverr",
    description: "Marketplace platform redesign focusing on improved seller workflows and enhanced user trust.",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    longDescription: "A comprehensive redesign of Fiverr's marketplace platform with a focus on improving seller workflows and building user trust. The project involved extensive UX research, user journey mapping, and iterative design improvements.",
    tags: ["Product Design", "UX Flows", "Marketplace"],
    year: "2023",
    role: "Lead Product Designer",
    challenge: "Improving seller onboarding and workflow efficiency while maintaining platform trust.",
    solution: "Redesigned seller dashboard with streamlined workflows, enhanced trust indicators, and improved communication tools.",
    results: "Increased seller satisfaction and improved platform engagement metrics.",
  },
  {
    name: "Just Eat Takeaway",
    slug: "just-eat-takeaway",
    description: "Food delivery platform optimization with emphasis on order tracking and user satisfaction.",
    thumbnail: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&h=600&fit=crop",
    longDescription: "Optimization of the Just Eat Takeaway platform focusing on order tracking, delivery experience, and overall user satisfaction. The redesign improved order visibility and customer communication throughout the delivery process.",
    tags: ["Product Design", "UX Research", "Mobile"],
    year: "2023",
    role: "Product Designer",
    challenge: "Enhancing order tracking experience and reducing customer anxiety during delivery wait times.",
    solution: "Implemented real-time order tracking with clear status updates, estimated delivery times, and proactive communication.",
    results: "Reduced customer support inquiries and improved customer satisfaction scores.",
  },
  {
    name: "SundaySky",
    slug: "sundaysky",
    description: "Video personalization platform with focus on scalable design systems and component libraries.",
    thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
    longDescription: "Design and development of a video personalization platform with emphasis on creating scalable design systems and reusable component libraries. This project involved building a comprehensive design system from the ground up.",
    tags: ["Design System", "Product Design", "B2B"],
    year: "2022",
    role: "Design Systems Lead",
    challenge: "Creating a scalable design system that supports multiple product lines and use cases.",
    solution: "Built a comprehensive design system with reusable components, clear documentation, and flexible theming capabilities.",
    results: "Reduced design and development time by 40% and improved design consistency across products.",
  },
  {
    name: "Elision",
    slug: "elision",
    description: "Fintech dashboard redesign with emphasis on data visualization and role-based permissions.",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    longDescription: "Complete redesign of Elision's fintech dashboard with focus on data visualization, role-based permissions, and complex financial workflows. The project required deep understanding of financial data and user roles.",
    tags: ["Fintech", "Dashboards", "UX Flows"],
    year: "2022",
    role: "Senior Product Designer",
    challenge: "Simplifying complex financial data visualization while maintaining accuracy and compliance.",
    solution: "Redesigned dashboard with intuitive data visualization, clear role-based access controls, and streamlined workflows.",
    results: "Improved user efficiency and reduced errors in financial operations.",
  },
  {
    name: "Strength Athletics",
    slug: "strength-athletics",
    description: "Fitness platform design with focus on workout tracking and user engagement.",
    thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    longDescription: "Design of a comprehensive fitness platform focusing on workout tracking, progress monitoring, and user engagement. The platform helps athletes track their training, set goals, and measure progress over time.",
    tags: ["Product Design", "Mobile", "UX Research"],
    year: "2023",
    role: "Product Designer",
    challenge: "Creating an engaging fitness tracking experience that motivates users to maintain consistent training.",
    solution: "Designed intuitive workout tracking with gamification elements, progress visualization, and social features.",
    results: "Increased user retention and engagement with workout tracking features.",
  },
  {
    name: "Melio",
    slug: "melio",
    description: "B2B payments platform with vendor management and streamlined payment workflows.",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    longDescription: "Design of Melio's B2B payments platform with comprehensive vendor management and streamlined payment workflows. The platform simplifies business payments and vendor relationships for small and medium businesses.",
    tags: ["Fintech", "B2B", "Design System"],
    year: "2023",
    role: "Product Designer",
    challenge: "Simplifying complex B2B payment processes while maintaining security and compliance.",
    solution: "Created streamlined payment workflows with clear vendor management, automated processes, and intuitive interfaces.",
    results: "Reduced payment processing time and improved user satisfaction with payment workflows.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

