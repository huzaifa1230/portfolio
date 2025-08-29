export const projects = [


  {
    id: 1,
    title: "LLM Chat - AI chatbot with advanced features",
    description:
      "I developed a feature-rich LLM-based web application designed to offer multi-model AI conversations through an intuitive and secure user interface. The platform begins with a secure authentication system, supporting both login and signup processes with OTP validation to ensure user verification. At the heart of the application is its support for multiple AI models, including ChatGPT, Grok, Claude, DeepSeek, Perplexity, and others. Users can select one or more models to generate responses simultaneously. The system allows attachments such as images, DOCX, and PDF files, enhancing prompt input flexibility. Two advanced features include Web Search and Deep Thinking, which users can enable to augment prompt context before submitting. A standout capability is Response Merging, which operates in two modes: automatic merging (enabled via toggle) where each response includes a unified answer from all selected models, and manual merging, where users can choose to merge responses after they’re generated. Prompts are editable post-submission to refine inputs. The application supports persistent conversations, where each conversation contains multiple AI responses with contextual memory limited to that thread. This enables meaningful follow-ups and coherent discussions with selected models. A credit-based system governs model usage. Each model and prompt type (e.g., Web Search, Deep Thinking, or standard chat) has configurable credit deductions, managed dynamically through the admin panel. Pricing is fine-tuned for each model and scenario. Subscription management is integrated with Stripe, offering a free tier with limited credits and two paid tiers – Basic and Standard – differing in access levels, token limits, and pricing. Stripe handles secure checkout, subscription lifecycle, and auto-renewals. The system also includes a referral feature, allowing users to refer others and earn bonus credits, promoting organic growth and user engagement. For platform control, a robust Admin Panel was built, providing tools to: Manage users (soft delete, manually assign subscriptions) Configure subscription plans Add/edit API keys for all supported models (including cost per input/output token) View sales and subscription transactions Update admin credentials via settings",
    working:
      "I worked as full stack developer on this project. Handled the entire project alone including frontend & backend development.",
    techStack: [
      "Next.js",
      "PostgreSql",
      "Express",
      "Prisma",
      "OpenAi",
      "JWT",
      "Tailwind",
    ],
    cover: "/projectsCover/llm.png",
    screenshots: [
      "/projectsCover/llm/llm2.png",
      "/projectsCover/llm/llm3.png",
      "/projectsCover/llm/llm4.png",
    ],
    bgColor: "#2F4F4F",
    recordings: "/projectsCover/recordings/LLMrecord.mp4",
  },
  {
    id: 2,
    title:
      "Interview scheduling system - Admin Dashboard & Backend for mobile app too",
    description:
      "The Interview Scheduling System is a feature-rich web application designed to streamline and automate the hiring process for companies and recruiters. Built using the MERN stack, the platform centers around a highly interactive Admin Dashboard crafted with React, Tailwind CSS, and Framer Motion, offering a smooth and engaging user experience with elegant animations and transitions. The application provides a dynamic analytics dashboard displaying time-series data visualizations such as user growth and platform engagement, helping admins make data-driven decisions. It supports Stripe integration to manage multiple subscription tiers, allowing businesses to scale their usage based on their hiring needs. A standout feature is the automated interview scheduling system, powered by Puppeteer, which not only schedules interviews but also extracts company-related data from external sources, streamlining the pre-screening workflow. For real-time communication, the platform integrates Firebase-powered chat, enabling seamless interaction between candidates and recruiters. Additionally, a community discussion forum fosters networking, collaboration, and shared learning within the hiring ecosystem. To ensure robust security and role separation, the system implements role-based access control, allowing sub-admins to manage specific operations while maintaining data integrity and access boundaries. This project combines operational efficiency, strong UI/UX design, and automation — creating a comprehensive and scalable solution for modern recruitment workflows.",
    techStack: [
      "React.js",
      "Express",
      "PostgreSql",
      "Framer motion",
      "Puppeteer",
      "Stripe",
      "Tailwind",
    ],
    cover: "/projectsCover/hrm.png",
    screenshots: [
      "/projectsCover/hrm/hrm.png",
      "/projectsCover/hrm/hrm2.png",
      "/projectsCover/hrm/hrm3.png",
      "/projectsCover/hrm/hrm4.png",
      "/projectsCover/hrm/hrm5.png",
    ],
    bgColor: "#CD853F",
    recordings:
      "/projectsCover/recordings/Interview sceduling system - admin panel.mp4",
  },
  {
    id: 3,
    title: "CryptoPulse - AI driven market place for price predictions.",
    description:
      "CryptoPulse is a cutting-edge web application designed to empower users with AI-driven insights for cryptocurrency trading. The platform intelligently analyzes real-time market data to identify high-potential coins, specifically those with a projected 2%+ weekly gain, helping users make smarter trading decisions with confidence. Built with a visually stunning React.js frontend, the application integrates Framer Motion animations to deliver a smooth, interactive user experience. From subtle transitions to responsive elements, every aspect of the UI was crafted to ensure a polished and premium feel across all devices. On the backend, the project utilizes Python-based data analysis scripts to ingest, process, and analyze live cryptocurrency data from various sources. The AI algorithms then generate predictions based on historical trends, momentum analysis, and pattern recognition, offering users actionable insights in an easy-to-understand format.",
    techStack: ["Next.js", "Fast Api", "Python", "Framer motion", "Tailwind"],
    cover: "/projectsCover/crypto.png",

    screenshots: [
      "/projectsCover/cryptopulse/crypto.png",
      "/projectsCover/cryptopulse/crypto2.png",
      "/projectsCover/cryptopulse/crypto3.png",
    ],
    bgColor: "#1E90FF",
    recordings: "/projectsCover/recordings/CryptoPulse.mp4",
  },
  {
    id: 4,
    title: "Green-Boom – Recycled Product Web Application",
    description:
      "Green-Boom is a modern and eco-focused web application built to showcase recycled products with a strong emphasis on smooth user experience and dynamic content management. Developed using the MERN stack, I led the full development of this project, including both the frontend and backend systems, as well as the creation of a powerful admin panel for centralized content control. The application includes a secure authentication system for basic login and access control. On the frontend, the site features a clean and intuitive UI, enriched with seamless Framer Motion animations that bring an engaging and smooth feel to user interactions. The platform offers a variety of content-driven sections, including: A Products catalog showcasing eco-friendly, recycled items A Blog section for publishing informative posts A News section for eco-updates and organization activities A Video Gallery embedding YouTube videos for visual content delivery A FAQs section to address common questions Legal Pages like Terms & Conditions and Privacy Policy All of this content is fully dynamic and manageable through the admin panel, giving administrators complete control over product listings, articles, news updates, video embeds, and static content like policies and FAQs — without requiring any code changes. The backend is powered by MongoDB for efficient data storage and scalability. The entire platform was designed with reusability and performance in mind, ensuring fast load times, responsive design, and easy scalability for future features.",
    techStack: [
      "React.js",
      "MongoDB",
      "Framer motion",
      "Express",
      "JWT",
      "Tailwind",
    ],
    cover: "/projectsCover/green.png",

    screenshots: [
      "/projectsCover/green/green1.png",
      "/projectsCover/green/green2.png",
      "/projectsCover/green/green3.png",
      "/projectsCover/green/green4.png",
    ],
    bgColor: "#FF8C00",
    recordings:
      "/projectsCover/recordings/Muhammad Huzaifa Irshad upwork project greenboom.mp4",
  },
  {
    id: 5,
    title: "Robo Taxi – Responsive Web Application (Frontend - Next.js)",
    description:
      "Robo Taxi is a futuristic ride-booking platform designed for autonomous vehicle transportation. Built using Next.js, the web application enables users to easily book robotaxi rides through a seamless and responsive interface. My primary role in this project was to lead the frontend development, focusing on creating an intuitive user experience and a visually polished UI. I implemented authentication flows on the client side and used Tailwind CSS to ensure the layout remained fully responsive across all screen sizes—from mobile to desktop. The project involved translating high-fidelity Figma designs into production-ready code, with special attention to user experience, accessibility, and layout consistency. The user interface was designed to be clean and minimal, while still delivering a modern, high-tech feel appropriate for a cutting-edge mobility service. Animations, component structure, and layout responsiveness were carefully handled to improve user engagement and conversion. This project allowed me to apply and further refine my skills in Next.js, Tailwind CSS, and responsive frontend development, while collaborating closely with designers and backend developers in a real-world product setting.",
    techStack: ["Next.js", "Tailwind"],
    cover: "/projectsCover/weride.png",
    screenshots: [
      "/projectsCover/weride/we1.png",
      "/projectsCover/weride/we2.png",
      "/projectsCover/weride/we3.png",
      "/projectsCover/weride/we4.png",
    ],
    bgColor: "#000000",

    recordings: "/projectsCover/recordings/We ride.mp4",
  },
  {
    id: 6,
    title: "Employee Management System (Frontend only)",
    description:
      "This Leave Management System is a responsive web application designed to streamline attendance tracking and leave management within organizations. I was responsible for building the frontend interface, using React, Tailwind CSS, and ShadCN UI components to create a clean, intuitive, and professional user experience. On the employee side, the system allows users to: Perform daily check-in and check-out Log break times View a monthly attendance summary Apply for leaves directly through the dashboard On the admin side, the dashboard provides a comprehensive view of: Employee attendance records Leave management tools for reviewing and approving/rejecting leave requests The interface was designed with usability and responsiveness in mind, ensuring smooth interaction across all devices. I focused on crafting reusable components, enhancing UX, and aligning closely with real-world HR workflows. This project demonstrates my ability to translate business requirements into a structured, user-friendly frontend while utilizing modern design systems and best practices in UI development.",
    techStack: ["React.js", "ShadCN", "Tailwind"],
    cover: "/projectsCover/leave.png",
    screenshots: [
      "/projectsCover/emp/emp1.png",
      "/projectsCover/emp/emp2.png",
      "/projectsCover/emp/emp3.png",
      "/projectsCover/emp/emp4.png",
    ],
    bgColor: "#87CEEB",
    recordings: "/projectsCover/recordings/Leave management.mp4",
  },
  {
    id: 7,
    title: "Empire Link – Car Rental Application with Admin Management Panel",
    description:
      "Empire Link is a full-stack web application developed using the MERN stack, tailored for a US-based limousine rental service. The platform offers a smooth and responsive client experience for booking luxury vehicles, while the powerful Admin Panel enables seamless management of bookings, vehicles, and users with real-time control and monitoring. The client-facing side allows users to easily browse and book vehicles, view availability, and make payments securely via Stripe integration, ensuring a smooth and trustworthy checkout experience. JWT-based authentication is implemented across the platform to safeguard user sessions and ensure secure access. From the admin perspective, the dashboard enables efficient handling of: Booking details with live updates Vehicle inventory and availability User management including blocking or modifying accounts One of the unique integrations in this project is Leaflet maps, used to enhance location-based functionalities such as vehicle dispatch visibility, route display, or pickup region targeting—providing a better user and admin experience. The UI is fully responsive, built with modern practices to ensure cross-device compatibility, smooth interactions, and intuitive navigation. Real-time feedback and backend optimizations ensure both performance and scalability. This project highlights my expertise across the full development stack, showcasing my ability to build scalable, secure, and user-friendly applications that align with real business needs, incorporating best practices, robust authentication, and payment systems into a cohesive, production-ready product. ",
    techStack: [
      "React.js",
      "Express",
      "MongoDB",
      "Leaflet maps",
      "Stripe",
      "Tailwind",
    ],
    cover: "/projectsCover/empire.png",
    screenshots: [
      "/projectsCover/empire/empire1.png",
      "/projectsCover/empire/empire2.png",
      "/projectsCover/empire/empire3.png",
      "/projectsCover/empire/empire4.png",
      "/projectsCover/empire/empire5.png",
    ],
    bgColor: "#2F4F4F",
    recordings:
      "/projectsCover/recordings/Empire Link car rental MERN Stack.mp4",
    // recordings: "../../public/projectsCover/recordings/We ride.mp4",
  },
];
