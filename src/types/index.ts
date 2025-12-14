export interface NavLink {
  name: string;
  href: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  childAge?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

export interface GalleryImage {
  id: number;
  url: string;
  alt: string;
}
