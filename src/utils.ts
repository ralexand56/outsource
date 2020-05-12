import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { DefaultTheme } from "styled-components";

export const baseUrl = "";

const baseTheme = {
  borderRadius: "0.5rem",
  dropShadow: `0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07)`,
};

export const greenTheme: DefaultTheme = {
  ...baseTheme,
  name: "Green",
  colors: {
    main: "#506b63",
    secondary: "#d8e6cb",
    alternate: "hsl(162, 15%, 30%)",
  },
};

export const blueTheme: DefaultTheme = {
  ...baseTheme,
  name: "Blue",
  colors: {
    main: "#3D6B9B",
    secondary: "#B2C8E6",
    alternate: "hsl(211, 44%, 35%)",
  },
};

export const themes: DefaultTheme[] = [blueTheme, greenTheme];

export const getFormattedHireText = (hireType: "contract" | "direct") =>
  hireType === "contract" ? "CONTRACT TO HIRE" : "DIRECT HIRE";

export const getFormattedDuration = (months: number) => {
  const baseText = "with Outsource";
  if (months < 12) {
    return `${months} months ${baseText}`;
  }

  return `${(months / 12).toLocaleString(undefined, {
    maximumFractionDigits: 1,
  })} years ${baseText}`;
};

export const navLinks: LinkType[] = [
         { to: "", title: "Home", icon: "home", isHorizontal: true },
         {
           to: "jobs",
           title: "Jobs",
           icon: "id-card",
           isHorizontal: true,
           childLinks: [
             {
               to: "job_board",
               title: "Job Board",
               icon: "home",
               isHorizontal: true,
             },
             {
               to: "why_work",
               title: "Why Work Here?",
               icon: "home",
               isHorizontal: true,
             },
           ],
         },
         {
           to: "training",
           title: "Training",
           icon: "chalkboard-teacher",
           isHorizontal: true,
         },
         {
           to: "resources",
           title: "Employee Resources",
           icon: "dolly",
           isHorizontal: true,
         },
         {
           to: "locations",
           title: "Locations",
           icon: "map",
           isHorizontal: true,
           childLinks: [
             {
               to: "az",
               title: "Arizona",
               icon: "home",
               isHorizontal: true,
             },
             {
               to: "ca",
               title: "California",
               icon: "home",
               isHorizontal: true,
               childLinks: [
                 {
                   to: "la",
                   title: "Los Angeles",
                   icon: "home",
                   isHorizontal: false,
                 },
                 {
                   to: "sf",
                   title: "San Francisco",
                   icon: "home",
                   isHorizontal: false,
                 },
               ],
             },
           ],
         },
         { to: "about", title: "About", icon: "info", isHorizontal: true },
         {
           to: "contact",
           title: "Contact",
           icon: "address-book",
           isHorizontal: true,
         },
         {
           to: "login",
           title: "Time Entry Login",
           icon: "clock",
           isHorizontal: true,
         },
       ];

export const positions: WorkPosition[] = [
  {
    id: "1",
    title: "Controls Estimator",
    source: "Outsource",
    city: "Hayward",
    state: "CA",
    isNew: true,
    availability: new Date(),
    hireType: "direct",
  },
  {
    id: "2",
    title: "Lenel Certified Programmer",
    source: "Outsource",
    city: "Virginia Beach",
    state: "VA",
    isNew: true,
    availability: new Date(),
    hireType: "direct",
  },
  {
    id: "3",
    title: "Sprinkler Designer",
    source: "Outsource",
    city: "Falls Church",
    state: "VA",
    isNew: true,
    availability: new Date(),
    hireType: "direct",
  },
  {
    id: "4",
    title: "Residential Security Technician",
    source: "Outsource",
    city: "Baltimore",
    state: "MD",
    isNew: false,
    availability: new Date(),
    hireType: "contract",
  },
  {
    id: "5",
    title: "Sprinkler Service Technician",
    source: "Outsource",
    city: "McLean",
    state: "VA",
    isNew: false,
    availability: new Date(),
    hireType: "contract",
  },
  {
    id: "6",
    title: "Software Development Director",
    source: "Outsource",
    city: "McClean",
    state: "VA",
    isNew: false,
    availability: new Date(),
    hireType: "direct",
  },
  {
    id: "7",
    title: "Fire Alarm Technician",
    source: "Outsource",
    city: "Hayward",
    state: "VA",
    isNew: true,
    availability: new Date(),
    hireType: "contract",
  },
  {
    id: "8",
    title: "Security Install Technician",
    source: "Outsource",
    city: "Virginia Beach",
    state: "VA",
    isNew: true,
    availability: new Date(),
    hireType: "contract",
  },
  {
    id: "9",
    title: "Lead AV Technician",
    source: "Outsource",
    city: "Greenbelt",
    state: "MD",
    isNew: true,
    availability: new Date(),
    hireType: "contract",
  },
];

export const people: Person[] = [
  {
    id: "1",
    name: "Kenneth C.",
    months: 36,
    title: "Project Manager",
    description: `Outsource supplies Project Managers like Kenneth on a temp and perm basis`,
    src: `https://manofmany.com/wp-content/uploads/2019/04/David-Gandy.jpg`,
  },
  {
    id: "2",
    name: "Darren C.",
    months: 14,
    title: "Journeyman Electrician",
    description: `Outsource supplies Electricians like Darren on a temp basis. 
           Darren has been with Oursource for half a year`,
    src: `https://fashionablymale.files.wordpress.com/2015/08/andres-velencoso-segura-robb-report-september-2015-editorial-005.jpg`,
  },
  {
    id: "3",
    name: "Carlos J.",
    months: 24,
    title: "Foreman",
    description: `Outsource supplies Foremen like Carlos on a temp and perm basis. 
           Carlos has led crews on cabling products for 2 years with Outsource`,
    src: `https://d.wattpad.com/story_parts/368018408/images/149ff92ecf2a06d1449892043594.jpg`,
  },
];

export const services: WorkService[] = [
  {
    id: "1",
    name: "Cabling",
    icon: "home",
    link: "cabling",
    src: "/images/cabling.jpg",
  },
  {
    id: "2",
    name: "Electrical",
    icon: "home",
    link: "electrical",
    src: "/images/electrical.jpg",
  },
  {
    id: "3",
    name: "Fire Alarm",
    icon: "home",
    link: "fire",
    src: "/images/fire.jpg",
  },
  {
    id: "4",
    name: "Security",
    icon: "home",
    link: "security",
    src: "/images/security.jpg",
  },
  {
    id: "5",
    name: "Audio/Visual",
    icon: "home",
    link: "audio",
    src: "/images/audio.jpg",
  },
  {
    id: "6",
    name: "Data Center",
    icon: "home",
    link: "data",
    src: "/images/data.jpeg",
  },
];

export interface WorkService {
  id: string;
  name: string;
  icon: IconProp;
  link: string;
  src: string;
}

export interface WorkPosition {
  id: string;
  title: string;
  source: string;
  city: string;
  state: string;
  isNew: boolean;
  availability: Date;
  hireType: "direct" | "contract";
}

export interface Person {
  id: string;
  name: string;
  months: number;
  title: string;
  description: string;
  src: string;
  isVertical?: boolean;
}

export interface LinkType {
  to: string;
  title: string;
  icon: IconProp;
  isHorizontal: boolean;
  childLinks?: LinkType[];
}
