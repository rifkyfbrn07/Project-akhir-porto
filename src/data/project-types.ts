export interface ProjectCaseStudy {
  category: string;
  year?: string;
  role?: string;
  overview: string;
  problemStatement?: string;
  proposedSolution?: string;
  developmentProcess?: string;
  challenges?: string;
  myRole?: string;
  features?: readonly string[];
  whatBuilt?: readonly string[];
  details?: readonly { label: string; value: string }[];
  gallery?: readonly { src: string; alt: string }[];
}

export interface PortfolioProject {
  title: string;
  href?: string;
  dates?: string;
  active?: boolean;
  status?: string;
  category?: string;
  role?: string;
  projectType?: string;
  description: string;
  caseStudy?: ProjectCaseStudy;
  technologies: readonly string[];
  links: readonly { type: string; href: string }[];
  image: string;
  video?: string;
}
