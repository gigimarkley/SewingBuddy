export interface WidgetData {
  id: number;
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}

export interface WikiSubsection {
  id: string;
  title: string;
  content: string;
}

export interface WikiSection {
  id: string;
  title: string;
  content: string;
  subsections?: WikiSubsection[];
  image?: string;
}
