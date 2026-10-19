import {
  cloud,
  mongodb,
  qualitasGlobal,
  arcTechnologies,
  drgitr,
  bdce,
  github,
  linkedin,
  twitter,
  instagram,
  prototyping,
  velocity,
  prismInsuranceDashboard,
  netflixSqlAnalysis,
  endToEndBiDashboard,
  python,
  excel,
  powerbi,
  pandas,
  numpy,
  matplotlib,
  seaborn,
  scipy,
  eda,
  etl,
  sql,
  postgresql,
  mysql,
  sqlserver,
  sqlite,
  joins,
  cte,
  subqueries,
  windowFunctions,
  queryOptimization,
  aws,
  azure,
  gcp,
  s3,
  ec2,
  iam,
  rds,
  lambda,
  cloudStorage,
  networking,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects"
  },
  {
    id: "contact",
    title: "Connect",
  },
];

export const socialLinks = [
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/tejas-pocchi-b80a13210/",
    icon: linkedin,
  },
  {
    name: "github",
    url: "https://github.com/tejaspocchi-bit",
    icon: github,
  },
  {
    name: "X",
    url: "https://github.com/tejaspocchi-bit",
    icon: twitter,
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/tejas_pocchi_patil/?hl=en",
    icon: instagram,
  },
];

const services = [
  {
    title: "Data Analyst",
    icon: python,
  },
  {
    title: "SQL & PostgreSQL",
    icon: mongodb,
  },
  {
    title: "Power BI Dashboards",
    icon: prototyping,
  },
  {
    title: "AWS S3 & EC2",
    icon: cloud,
  },
];

const dataAnalyticsTech = [
  {
    id: "analytics-excel",
    name: "Excel",
    icon: excel,
  },
  {
    id: "analytics-advanced-excel",
    name: "Advanced Excel",
    icon: excel,
  },
  {
    id: "analytics-power-bi",
    name: "Power BI",
    icon: powerbi,
  },
  {
    id: "analytics-python",
    name: "Python",
    icon: python,
  },
  {
    id: "analytics-pandas",
    name: "Pandas",
    icon: pandas,
  },
  {
    id: "analytics-numpy",
    name: "NumPy",
    icon: numpy,
  },
  {
    id: "analytics-matplotlib",
    name: "Matplotlib",
    icon: matplotlib,
  },
  {
    id: "analytics-seaborn",
    name: "Seaborn",
    icon: seaborn,
  },
  {
    id: "analytics-scipy",
    name: "SciPy",
    icon: scipy,
  },
  {
    id: "analytics-eda",
    name: "Exploratory Data Analysis (EDA)",
    icon: eda,
  },
  {
    id: "analytics-etl",
    name: "ETL Processes",
    icon: etl,
  },
]

const backendTech = [
  {
    id: "sql-language",
    name: "SQL",
    icon: sql,
  },
  {
    id: "sql-postgresql",
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    id: "sql-mysql",
    name: "MySQL",
    icon: mysql,
  },
  {
    id: "sql-server",
    name: "Microsoft SQL Server",
    icon: sqlserver,
  },
  {
    id: "sql-sqlite",
    name: "SQLite",
    icon: sqlite,
  },
  {
    id: "sql-joins",
    name: "Joins",
    icon: joins,
  },
  {
    id: "sql-ctes",
    name: "CTEs",
    icon: cte,
  },
  {
    id: "sql-subqueries",
    name: "Subqueries",
    icon: subqueries,
  },
  {
    id: "sql-window-functions",
    name: "Window Functions",
    icon: windowFunctions,
  },
  {
    id: "sql-query-optimization",
    name: "Query Optimization",
    icon: queryOptimization,
  },
]

const cloudTech = [
  {
    id: "cloud-aws",
    name: "AWS",
    icon: aws,
  },
  {
    id: "cloud-s3",
    name: "Amazon S3",
    icon: s3,
  },
  {
    id: "cloud-ec2",
    name: "Amazon EC2",
    icon: ec2,
  },
  {
    id: "cloud-iam",
    name: "AWS IAM",
    icon: iam,
  },
  {
    id: "cloud-rds",
    name: "Amazon RDS",
    icon: rds,
  },
  {
    id: "cloud-lambda",
    name: "AWS Lambda",
    icon: lambda,
  },
  {
    id: "cloud-azure",
    name: "Microsoft Azure",
    icon: azure,
  },
  {
    id: "cloud-gcp",
    name: "Google Cloud",
    icon: gcp,
  },
  {
    id: "cloud-storage",
    name: "Cloud Storage",
    icon: cloudStorage,
  },
  {
    id: "cloud-networking",
    name: "Cloud Networking",
    icon: networking,
  },
]

const experiences = [
  {
    title: "Data Annotator",
    company_name: "Qualitas Global",
    icon: qualitasGlobal,
    iconBg: "#E6DEDD",
    date: "July 2026 – Present",
    points: [
      "Annotate image and video data for autonomous driving (ADAS) projects using bounding-box techniques in Labelbox to support computer vision model training.",
      "Label vehicles, pedestrians, lane markings, and traffic signs accurately while following quality guidelines for safety-critical AI applications.",
      "Collaborate with QA teams to resolve labeling errors and consistently meet annotation targets while maintaining precision."
    ],
    type: 1,
  },
  {
    title: "Data Analyst Trainee (Internship)",
    company_name: "ARC Institute & Technology",
    icon: arcTechnologies,
    iconBg: "#E6DEDD",
    date: "Nov 2025 – Jun 2026",
    points: [
      "Completed hands-on data analyst training and internship, developing practical skills in Excel, SQL, Power BI, and Python across the data collection, cleaning, analysis, and reporting workflow.",
      "Cleaned, transformed, and analyzed data using Excel (PivotTables, VLOOKUP, and formulas) and Python (Pandas and NumPy), and wrote SQL queries to extract, filter, and join relational data for reporting.",
      "Designed interactive Power BI dashboards to visualize key metrics and applied statistical and analytical techniques to identify trends, patterns, and insights from raw datasets."
    ],
    type: 1,
  },
  {
    title: "Workshop Coordinator ",
    company_name: "Dr. Rajendra Gode Institute of Technology & Research, Amravati",
    icon: drgitr,
    iconBg: "#E6DEDD",
    date: "Mar 2024",
    points: [
      "Led a web development workshop for 30+ students, delivering hands-on training in HTML, CSS, and JavaScript fundamentals, achieving a 4.7 out of 5 rating for clear explanations and effective teaching methods.",
      "Designed interactive coding sessions, learning materials, and live demos to help beginners build responsive webpages and collaborate through hands-on practice.",
      "Provided individual coding support and troubleshooting, helping 90% of attendees complete all workshop tasks successfully.",
      "Represented the college as a Young Inspirators Network (YIN) leader at a student parliament program in Mumbai, contributing student perspectives and developing leadership, public speaking, teamwork, and decision-making skills."
    ],
    type: 3,
  },
  {
    title: "Festival Committee Incharge",
    company_name: "Dr. Rajendra Gode Institute of Technology & Research, Amravati",
    icon: drgitr,
    iconBg: "#E6DEDD",
    date: "2023 - 2024",
    points: [
      "Supported the planning and coordination of college festivals and cultural events, helping manage event requirements across online and offline formats.",
      "Provided on-site and technical support to help festival activities run smoothly.",
      "Promoted college events through digital campaigns and created banners, posters, leaflets, photo collages, and presentations.",
      "Maintained participation records and verified event certificates for student activities."
    ],
    type: 3,
  },
  {
    title: "Bachelor of Engineering in Computer Science and Engineering",
    company_name: "Dr. Rajendra Gode Institute of Technology & Research, Amravati",
    icon: drgitr,
    iconBg: "#E6DEDD",
    date: "2021 - 2025",
    points: [
      "Completed a four-year undergraduate program in Computer Science and Engineering from 2021 to 2025, building a foundation in the discipline.",
      "Earned the Bachelor of Engineering degree in 2025 from Dr. Rajendra Gode Institute of Technology & Research in Amravati.",
      "Completed the program under SGBA University's academic affiliation.",
      "Graduated with a CGPA of 7.28 across the degree program."
    ],
    type: 2,
  },
];

const testimonials = [
  {
    testimonial:
      "Tejas pocchi is highly knowlegeble about the web. He skillfully made a very good and highly secure website website for my Computer Science education platform TastyPython. It was done within a few days and the website had more features than I could imagine. Nayan's style of work is unique, he will not bother you for small details about the website along the course of development, but ask all questions together initially and at a later stage. This ensures that you arent being bothered too much all the time, and the work is still on. Nayan was kind enough to not only make the website for me, but also taught me how to make a personal blog with a free domain! He ensures that all your doubts are clear, and the website was easy to operate post development.",
    name: "Tejas Kannampuzha",
    designation: "Founder",
    company: "TastyPython",
    url: "https://www.linkedin.com/in/tejas-kannampuzha-141214261/",
  },
  {
    testimonial:
      "In todays' world where companies lack team members who add value to the organisation I must say Tejas pocchi is one of those exceptional individuals who master in deep technical knowledge, communication along with a humble nature. He uses his abilities not only to contribute meaningfully to societal projects but also to address the technical queries of his peers. Since our time in secondary high school, his passion for Postman, APIs and contributions in dynamic workshops has always grabbed attention of various technophiles and educators alike. It became evident early on that he is undoubtedly an undefeated and reliable individual who is sure shot to excel as a fine IT professional regardless of the choosen domain. Having worked with him I can at least remark that collaborating with him was a true pleasure. He effortlessly fulfills the role of a team leader, friend, and mentor - creating a harmonious and productive work environment. Additionally, hosting dynamic workshops to demystify APIs and imparting skills to fellow students showcases his commitment to foster creativity and confidence in software engineering. In essence, Tejas pocchi is a dynamic individual with, a magic in his own right and a highly promising asset.",
    name: "Payal Lenka",
    designation: "Student",
    company: "RNS Institute of Technology",
    url: "https://www.linkedin.com/in/payal-lenka/",
  },
];

const projects = [
  {
    name: "PRISM Insurance Power BI Dashboard",
    description:
      "An interactive Power BI dashboard analyzing active and inactive insurance policies from CSV data. It highlights total policies, premium, coverage and claim amounts, policy-type comparisons, claim status, age-group trends, and detailed policy tables using slicers and DAX measures. Policy status is evaluated against the 10/07/2025 reference date.",
    tags: [
      { name: "Power BI", color: "blue-text-gradient" },
      { name: "DAX", color: "green-text-gradient" },
      { name: "Data Modeling", color: "pink-text-gradient" },
      { name: "CSV", color: "orange-text-gradient" }
    ],
    image: prismInsuranceDashboard,
    source_code_link: "https://github.com/tejaspocchi-bit/powerbi-insurance-analysis",
    demo_code_link: "https://github.com/tejaspocchi-bit/powerbi-insurance-analysis/blob/main/README.md#-prism-insurance-power-bi-dashboard"
  },
  {
    name: "Netflix Movies and TV Shows Data Analysis using PostgreSQL",
    description:
      "Analyzed the Netflix titles dataset using PostgreSQL to answer business questions about movies and TV shows. Explored content types, ratings, release years, countries, genres, durations, directors, and cast, using aggregations, joins, CTEs, window functions, and string/date operations to surface insights.",
    tags: [
      { name: "PostgreSQL", color: "blue-text-gradient" },
      { name: "SQL", color: "green-text-gradient" },
      { name: "Data Analysis", color: "pink-text-gradient" },
      { name: "CTEs & Window Functions", color: "orange-text-gradient" }
    ],
    image: netflixSqlAnalysis,
    source_code_link: "https://github.com/tejaspocchi-bit/PgSQL_Netflix_Project",
    demo_code_link: "https://github.com/tejaspocchi-bit/PgSQL_Netflix_Project/blob/main/README.md#netflix-movies-and-tv-shows-data-analysis-using-pgsql"
  },
  {
    name: "End-to-End BI Project using PostgreSQL & Power BI",
    description:
      "Built an end-to-end business intelligence workflow from raw CSV files to an interactive Power BI dashboard. Imported datasets into PostgreSQL, cleaned and standardized data with SQL, integrated tables using LEFT JOINs, and connected the transformed data to Power BI to create KPI cards, visuals, filters, and slicers for business analysis.",
    tags: [
      { name: "PostgreSQL", color: "blue-text-gradient" },
      { name: "SQL", color: "green-text-gradient" },
      { name: "Power BI", color: "pink-text-gradient" },
      { name: "ETL & Data Modeling", color: "orange-text-gradient" }
    ],
    image: endToEndBiDashboard,
    source_code_link: "https://github.com/tejaspocchi-bit/end-to-end-bi-powerbi-postgres",
    demo_code_link: "https://github.com/tejaspocchi-bit/end-to-end-bi-powerbi-postgres/blob/main/README.md#end-to-end-bi-project-using-postgresql--power-bi"
  },
  
];

export { services, experiences, testimonials, projects, backendTech, dataAnalyticsTech, cloudTech };
