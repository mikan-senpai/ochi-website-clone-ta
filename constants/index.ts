import { capaybilities1, capaybilities2, capaybilities3, capaybilities4, client01, client02, client03, client04, client05, client06, client07, client08, client09, insights1, insights2, insights3, latest1, latest2, nestle, officevibe, phase1, phase2, phase3, phase4, phase5, planetly, project1, project2, project3, project4, project5, project6, project7, project8, project9, publication1, publication2, publication3 } from "@/public";

// Navbar
export const navbarItems = [
   {
      id: 1,
      title: "Services",
      href: "/services",
   },
   {
      id: 2,
      title: "Our work",
      href: "/presentation",
   },
   {
      id: 3,
      title: "About us",
      href: "/ochi-team",
   },
   {
      id: 4,
      title: "Insights",
      href: "/insights",
   },
   {
      id: 5,
      title: "Contact us",
      href: "/contact",
   },
];

// Footer

export const footerItems = [
   {
      id: 1,
      title: "Instagram",
      href: "https://www.instagram.com/",
   },
   {
      id: 2,
      title: "LinkedIn",
      href: "https://www.linkedin.com/",
   },
   {
      id: 3,
      title: "Facebook",
      href: "https://www.facebook.com/",
   },
   {
      id: 4,
      title: "Twitter",
      href: "https://www.twitter.com/",
   },
];

export const footernavbarItems = [
   {
      id: 1,
      title: "Home",
      href: "/",
   },
   {
      id: 2,
      title: "Services",
      href: "services",
   },
   {
      id: 3,
      title: "Our work",
      href: "presentation",
   },
   {
      id: 4,
      title: "About us",
      href: "ochi-team",
   },
   {
      id: 5,
      title: "Insights",
      href: "insights",
   },
   {
      id: 6,
      title: "Contact us",
      href: "contact",
   },
];

export const clientsItem = [
   {
      id: 1,
      website: "TechCorp Solutions",
      href: "https://www.tathyatech.com",
      title: "Services:",
      name: "Rajesh Kumar",
      src: client01,
      review: "Tathya Technologies transformed our entire IT infrastructure. Their server setup and cloud migration services were exceptional. The team provided 24/7 support throughout the process and delivered exactly what we needed. Their expertise in both Windows and Linux environments saved us significant time and resources. Highly recommended for any business looking for reliable IT solutions.",
      links: [
         {
            id: 1,
            title: "server setup",
            href: "/services",
         },
         {
            id: 2,
            title: "cloud migration",
            href: "/services",
         },
      ]
   },
   {
      id: 2,
      website: "Global Communications Ltd",
      href: "https://www.globalcomm.com",
      title: "Services:",
      name: "Priya Sharma",
      src: client02,
      review: "The PBX migration and IP telephony solutions provided by Tathya Technologies exceeded our expectations. They seamlessly migrated our legacy PBX system to a modern IP-based solution with zero downtime. Their team's professionalism and technical expertise made the entire process smooth and efficient. We now have a scalable communication system that grows with our business.",
      links: [
         {
            id: 1,
            title: "PBX migration",
            href: "/services",
         },
         {
            id: 2,
            title: "IP telephony",
            href: "/services",
         },
         {
            id: 3,
            title: "VoIP integration",
            href: "/services",
         },
         {
            id: 4,
            title: "communication systems",
            href: "/services",
         },
      ]
   },
   {
      id: 3,
      website: "DataFlow Enterprises",
      href: "https://www.dataflow.com",
      title: "Services:",
      name: "Amit Patel",
      src: client03,
      review: "Tathya Technologies built our complete data center infrastructure from scratch. Their expertise in hardware procurement, network architecture, and disaster recovery planning was outstanding. The team delivered a robust, scalable solution that perfectly meets our business requirements. Their ongoing support and maintenance services ensure our operations run smoothly 24/7.",
      links: [
         {
            id: 1,
            title: "data center setup",
            href: "/services",
         },
         {
            id: 2,
            title: "network architecture",
            href: "/services",
         },
         {
            id: 3,
            title: "disaster recovery",
            href: "/services",
         },
         {
            id: 4,
            title: "infrastructure management",
            href: "/services",
         },
      ]
   },
   {
      id: 4,
      website: "WebTech Innovations",
      href: "https://www.webtech.com",
      title: "Services:",
      name: "Sneha Gupta",
      src: client04,
      review: "The custom web development and AI integration services from Tathya Technologies revolutionized our online presence. They created a modern, responsive website with intelligent chatbots and automated customer service features. The AI-powered analytics provide valuable insights into user behavior. Their team's creativity and technical skills are truly impressive.",
      links: [
         {
            id: 1,
            title: "web development",
            href: "/services",
         },
         {
            id: 2,
            title: "AI integration",
            href: "/services",
         },
         {
            id: 3,
            title: "automation solutions",
            href: "/services",
         },
      ]
   },
   {
      id: 5,
      website: "CloudFirst Systems",
      href: "https://www.cloudfirst.com",
      title: "Services:",
      name: "Vikram Singh",
      src: client05,
      review: "Tathya Technologies provided exceptional cloud infrastructure services that transformed our business operations. Their multi-cloud deployment strategy and security implementation gave us the scalability and reliability we needed. The migration process was seamless, and their ongoing cloud management services ensure optimal performance and cost efficiency.",
      links: [
         {
            id: 1,
            title: "cloud infrastructure",
            href: "/services",
         },
         {
            id: 2,
            title: "cloud migration",
            href: "/services",
         },
         {
            id: 3,
            title: "multi-cloud deployment",
            href: "/services",
         },
      ]
   },
   {
      id: 6,
      website: "SmartBiz Solutions",
      href: "https://www.smartbiz.com",
      title: "Services:",
      name: "Kavita Joshi",
      src: client06,
      review: "The AI solutions and business automation services from Tathya Technologies have significantly improved our operational efficiency. Their machine learning implementation and predictive analytics tools provide valuable insights for decision-making. The automated workflow systems have streamlined our processes and reduced manual work considerably.",
      links: [
         {
            id: 1,
            title: "AI solutions",
            href: "/services",
         },
         {
            id: 2,
            title: "business automation",
            href: "/services",
         },
         {
            id: 3,
            title: "machine learning",
            href: "/services",
         },
      ]
   },
   {
      id: 7,
      website: "SecureHost Pro",
      href: "https://www.securehost.com",
      title: "Services:",
      name: "Rahul Mehta",
      src: client07,
      review: "Tathya Technologies delivered outstanding email and hosting solutions that gave us complete control over our communication infrastructure. Their custom email server setup and SMTP configuration were flawless. The team's expertise in hosting server management and web application support has been invaluable for our growing business needs.",
      links: [
         {
            id: 1,
            title: "email servers",
            href: "/services",
         },
         {
            id: 2,
            title: "hosting solutions",
            href: "/services",
         },
         {
            id: 3,
            title: "SMTP configuration",
            href: "/services",
         },
         {
            id: 4,
            title: "server management",
            href: "/services",
         },
      ]
   },
   {
      id: 8,
      website: "TechFlow Dynamics",
      href: "https://www.techflow.com",
      title: "Services:",
      name: "Anita Roy",
      src: client08,
      review: "The comprehensive IT infrastructure services provided by Tathya Technologies exceeded all our expectations. From server optimization to security hardening, they covered every aspect of our technology needs. Their 24/7 monitoring and support services give us peace of mind knowing our systems are always protected and running optimally.",
      links: [
         {
            id: 1,
            title: "server optimization",
            href: "/services",
         },
         {
            id: 2,
            title: "security hardening",
            href: "/services",
         },
         {
            id: 3,
            title: "24/7 monitoring",
            href: "/services",
         },
      ]
   },
   {
      id: 9,
      website: "InnovateTech Hub",
      href: "https://www.innovatetech.com",
      title: "Services:",
      name: "Suresh Reddy",
      src: client09,
      review: "Tathya Technologies helped us build a complete technology ecosystem from the ground up. Their expertise in both hardware and software solutions, combined with their innovative approach to problem-solving, made them the perfect partner for our digital transformation journey.",
      links: [
         {
            id: 1,
            title: "digital transformation",
            href: "/services",
         },
         {
            id: 2,
            title: "technology consulting",
            href: "/services",
         },
         {
            id: 3,
            title: "system integration",
            href: "/services",
         },
      ]
   },

];

export const projectItem = [
   {
      id: 1,
      title: "CloudMigrate Pro",
      href: "/case/",
      src: project1,
      links: [
         {
            id: 1,
            title: "cloud migration",
            href: "/services",
         },
         {
            id: 2,
            title: "infrastructure audit",
            href: "/services",
         },
         {
            id: 3,
            title: "server optimization",
            href: "/services",
         },
         {
            id: 4,
            title: "security implementation",
            href: "/services",
         },
      ]
   },
   {
      id: 2,
      title: "DataCenter Build",
      href: "/case/",
      src: project2,
      links: [
         {
            id: 1,
            title: "data center setup",
            href: "/services",
         },
         {
            id: 2,
            title: "network architecture",
            href: "/services",
         },
      ]
   },
   {
      id: 3,
      title: "SmartComm Systems",
      href: "/case/",
      src: project3,
      links: [
         {
            id: 1,
            title: "PBX migration",
            href: "/services",
         },
         {
            id: 2,
            title: "VoIP integration",
            href: "/services",
         },
         {
            id: 3,
            title: "communication systems",
            href: "/services",
         },
      ]
   },
   {
      id: 4,
      title: "AI WebSolutions",
      href: "/case/",
      src: project4,
      links: [
         {
            id: 1,
            title: "web development",
            href: "/services",
         },
         {
            id: 2,
            title: "AI integration",
            href: "/services",
         },
      ]
   },
];


// services page

export const serviceProcessItems = [
   {
      id: 1,
      phase: "01. Phase",
      name: "Analysis & Planning",
      src: phase1,
      review: "We analyze your current IT infrastructure, understand your business requirements, and create a comprehensive plan. Through detailed assessment and consultation, we identify opportunities for improvement and develop a roadmap for implementation.",
      button: "read"
   },
   {
      id: 2,
      phase: "02. Phase",
      name: "Design & Architecture",
      src: phase2,
      review: "Based on the analysis, we design the optimal solution architecture tailored to your needs. We create detailed technical specifications, select appropriate technologies, and plan the implementation strategy to ensure seamless integration with your existing systems.",
      button: "read"
   },
   {
      id: 3,
      phase: "03. Phase",
      name: "Implementation",
      src: phase3,
      review: "We execute the planned solution with precision and expertise. Our team handles all aspects of implementation including hardware setup, software configuration, testing, and optimization to ensure everything works perfectly according to specifications.",
      button: "read"
   },
   {
      id: 4,
      phase: "04. Phase",
      name: "Testing & Validation",
      src: phase4,
      review: "Comprehensive testing ensures all systems function correctly and meet performance requirements. We validate security measures, conduct load testing, and verify all features work as expected before going live.",
      button: "read"
   },
   {
      id: 5,
      phase: "05. Phase",
      name: "Support & Maintenance",
      src: phase5,
      review: "We provide ongoing support and maintenance to ensure optimal performance. Our 24/7 monitoring, regular updates, and proactive maintenance keep your systems running smoothly and securely.",
      button: "read"
   },
];

export const serviceClientsItem = [
   {
      id: 1,
      website: "TechCorp Solutions",
      href: "https://www.tathyatech.com",
      title: "Services:",
      name: "Rajesh Kumar",
      src: client01,
      review: "Tathya Technologies transformed our entire IT infrastructure. Their server setup and cloud migration services were exceptional. The team provided 24/7 support throughout the process and delivered exactly what we needed. Their expertise in both Windows and Linux environments saved us significant time and resources. Highly recommended for any business looking for reliable IT solutions.",
      links: [
         {
            id: 1,
            title: "server setup",
            href: "/services",
         },
         {
            id: 2,
            title: "cloud migration",
            href: "services",
         },
      ]
   },
   {
      id: 2,
      website: "Global Communications Ltd",
      href: "https://www.globalcomm.com",
      title: "Services:",
      name: "Priya Sharma",
      src: client02,
      review: "The PBX migration and IP telephony solutions provided by Tathya Technologies exceeded our expectations. They seamlessly migrated our legacy PBX system to a modern IP-based solution with zero downtime. Their team's professionalism and technical expertise made the entire process smooth and efficient. We now have a scalable communication system that grows with our business.",
      links: [
         {
            id: 1,
            title: "PBX migration",
            href: "/services",
         },
         {
            id: 2,
            title: "IP telephony",
            href: "services",
         },
         {
            id: 3,
            title: "VoIP integration",
            href: "services",
         },
         {
            id: 4,
            title: "communication systems",
            href: "services",
         },
      ]
   },
   {
      id: 3,
      website: "DataFlow Enterprises",
      href: "https://www.dataflow.com",
      title: "Services:",
      name: "Amit Patel",
      src: client03,
      review: "Tathya Technologies built our complete data center infrastructure from scratch. Their expertise in hardware procurement, network architecture, and disaster recovery planning was outstanding. The team delivered a robust, scalable solution that perfectly meets our business requirements. Their ongoing support and maintenance services ensure our operations run smoothly 24/7.",
      links: [
         {
            id: 1,
            title: "data center setup",
            href: "/services",
         },
         {
            id: 2,
            title: "network architecture",
            href: "services",
         },
         {
            id: 3,
            title: "disaster recovery",
            href: "services",
         },
         {
            id: 4,
            title: "infrastructure management",
            href: "services",
         },
      ]
   },
   {
      id: 4,
      website: "WebTech Innovations",
      href: "https://www.webtech.com",
      title: "Services:",
      name: "Sneha Gupta",
      src: client04,
      review: "The custom web development and AI integration services from Tathya Technologies revolutionized our online presence. They created a modern, responsive website with intelligent chatbots and automated customer service features. The AI-powered analytics provide valuable insights into user behavior. Their team's creativity and technical skills are truly impressive.",
      links: [
         {
            id: 1,
            title: "web development",
            href: "/services",
         },
         {
            id: 2,
            title: "AI integration",
            href: "services",
         },
      ]
   },
   {
      id: 5,
      website: "CloudFirst Systems",
      href: "https://www.cloudfirst.com",
      title: "Services:",
      name: "Vikram Singh",
      src: client05,
      review: "Tathya Technologies provided exceptional cloud infrastructure services that transformed our business operations. Their multi-cloud deployment strategy and security implementation gave us the scalability and reliability we needed. The migration process was seamless, and their ongoing cloud management services ensure optimal performance and cost efficiency.",
      links: [
         {
            id: 1,
            title: "cloud infrastructure",
            href: "/services",
         },
         {
            id: 2,
            title: "cloud migration",
            href: "services",
         },
      ]
   },
   {
      id: 6,
      website: "SmartBiz Solutions",
      href: "https://www.smartbiz.com",
      title: "Services:",
      name: "Kavita Joshi",
      src: client06,
      review: "The AI solutions and business automation services from Tathya Technologies have significantly improved our operational efficiency. Their machine learning implementation and predictive analytics tools provide valuable insights for decision-making. The automated workflow systems have streamlined our processes and reduced manual work considerably.",
      links: [
         {
            id: 1,
            title: "AI solutions",
            href: "/services",
         },
      ]
   },
   {
      id: 7,
      website: "SecureHost Pro",
      href: "https://www.securehost.com",
      title: "Services:",
      name: "Rahul Mehta",
      src: client07,
      review: "Tathya Technologies delivered outstanding email and hosting solutions that gave us complete control over our communication infrastructure. Their custom email server setup and SMTP configuration were flawless. The team's expertise in hosting server management and web application support has been invaluable for our growing business needs.",
      links: [
         {
            id: 1,
            title: "email servers",
            href: "/services",
         },
         {
            id: 2,
            title: "hosting solutions",
            href: "services",
         },
         {
            id: 3,
            title: "SMTP configuration",
            href: "services",
         },
         {
            id: 4,
            title: "server management",
            href: "services",
         },
      ]
   },
   {
      id: 8,
      website: "TechFlow Dynamics",
      href: "https://www.techflow.com",
      title: "Services:",
      name: "Anita Roy",
      src: client08,
      review: "The comprehensive IT infrastructure services provided by Tathya Technologies exceeded all our expectations. From server optimization to security hardening, they covered every aspect of our technology needs. Their 24/7 monitoring and support services give us peace of mind knowing our systems are always protected and running optimally.",
      links: [
         {
            id: 1,
            title: "server optimization",
            href: "/services",
         },
         {
            id: 2,
            title: "security hardening",
            href: "services",
         },
      ]
   },
];

export const serviceCapaybilitiesItem = [
   {
      id: 1,
      src1: capaybilities1,
      title1: "INFRASTRUCTURE SOLUTIONS:",
      review: "We build and manage robust IT infrastructure that powers your business growth. From server setup and configuration to complete data center solutions, we provide the foundation your technology needs to thrive. Our expertise in both Windows and Linux environments ensures optimal performance and security.",
      subTitle: "Projects",
      links1: [
         {
            id: 1,
            title: "server setup",
            href: "/"
         },
         {
            id: 2,
            title: "data center solutions",
            href: "/"
         },
         {
            id: 3,
            title: "cloud infrastructure",
            href: "/"
         },
      ],
      src2: capaybilities2,
      title2: "COMMUNICATION SYSTEMS:",
      links2: [
         {
            id: 1,
            title: "PBX systems",
            href: "/"
         },
         {
            id: 2,
            title: "VoIP integration",
            href: "/"
         },
         {
            id: 3,
            title: "IP telephony",
            href: "/"
         },
         {
            id: 4,
            title: "communication migration",
            href: "/"
         },
      ]
   },
   {
      id: 2,
      src1: capaybilities3,
      title1: "WEB & AI SOLUTIONS:",
      review: "We create intelligent web solutions that enhance user experience and automate business processes. Our custom web development combined with AI integration provides modern, responsive websites with smart automation features that drive business growth.",
      subTitle: "Projects",
      links1: [
         {
            id: 1,
            title: "web development",
            href: "/"
         },
         {
            id: 2,
            title: "AI integration",
            href: "/"
         },
         {
            id: 3,
            title: "automation solutions",
            href: "/"
         },
         {
            id: 4,
            title: "responsive design",
            href: "/"
         },
      ],
      src2: capaybilities4,
      title2: "ADDITIONAL SERVICES:",
      links2: [
         {
            id: 1,
            title: "email hosting",
            href: "/"
         },
         {
            id: 2,
            title: "security solutions",
            href: "/"
         },
         {
            id: 3,
            title: "backup & recovery",
            href: "/"
         },
         {
            id: 4,
            title: "24/7 support",
            href: "/"
         },
      ]
   },
];

export const expectationsItems = [
   {
      id: 1,
      title1: "01",
      subTitle1: "Expert Consultation",
      btn: "read",
      para1: "Our experienced team provides comprehensive consultation to understand your unique business requirements. We analyze your current infrastructure, identify improvement opportunities, and recommend the best solutions tailored to your needs. You can expect transparent communication, detailed planning, and expert guidance throughout the entire process.",
   },
   {
      id: 2,
      title1: "04",
      subTitle1: "Dedicated Support",
      btn: "read",
      para1: "Every project is managed by our dedicated team of experts who ensure seamless execution from start to finish. You will have direct access to our technical specialists who understand your business requirements and can provide immediate assistance. Our commitment to excellence means you receive personalized attention and support at every step."
   },
   {
      id: 3,
      title1: "02",
      subTitle1: "Proven Experience",
      btn: "read",
      para1: "Since 2014, we have been delivering reliable IT solutions to businesses across various industries. Our decade of experience has equipped us with deep technical knowledge and practical insights that benefit every client. We have successfully completed hundreds of projects, from simple server setups to complex data center implementations.",
   },
   {
      id: 4,
      title1: "05",
      subTitle1: "Continuous Innovation",
      btn: "read",
      para1: "We stay at the forefront of technology trends and continuously update our skills and services. Our team regularly trains on the latest technologies, security practices, and industry standards. This commitment to innovation ensures that our clients receive cutting-edge solutions that prepare their businesses for future growth and challenges."
   },
   {
      id: 5,
      title1: "03",
      subTitle1: "Comprehensive Solutions",
      btn: "read",
      para1: "We take a holistic approach to IT infrastructure, considering all aspects of your technology ecosystem. From initial assessment to final implementation and ongoing support, we ensure every component works together seamlessly. Our comprehensive solutions eliminate the need for multiple vendors and provide you with a single point of contact for all your IT needs.",
   },
   {
      id: 6,
      title1: "06",
      subTitle1: "Quality Assurance",
      btn: "read",
      para1: "We maintain the highest standards of quality in every project we undertake. Our rigorous testing procedures, security protocols, and performance optimization ensure that your systems operate reliably and efficiently. We believe in delivering solutions that not only meet your current needs but also provide a solid foundation for future growth."
   },
];

export const achiveItems = [
   {
      id: 1,
      title1: ["500+"],
      title2: ["₹50+"],
      subTitle1: "Projects Completed Successfully",
      subTitle2: "Crores in Client Infrastructure Value",
   },
   {
      id: 2,
      title1: ["95%"],
      title2: ["24/7"],
      subTitle1: "Client Satisfaction Rate",
      subTitle2: "Support & Monitoring",
   },
];


// presentation page

export const presentationProjectItem = [
   {
      id: 1,
      title: "CloudMigrate Pro",
      src: project1,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "cloud migration",
            href: "/services",
         },
         {
            id: 2,
            title: "infrastructure audit",
            href: "services",
         },
         {
            id: 3,
            title: "server optimization",
            href: "services",
         },
         {
            id: 4,
            title: "security implementation",
            href: "services",
         },
      ]
   },
   {
      id: 2,
      title: "SmartComm Systems",
      src: project3,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "PBX migration",
            href: "/services",
         },
         {
            id: 2,
            title: "VoIP integration",
            href: "services",
         },
         {
            id: 3,
            title: "communication systems",
            href: "services",
         },
      ]
   },
   {
      id: 3,
      title: "AI WebSolutions",
      src: project4,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "web development",
            href: "/services",
         },
         {
            id: 2,
            title: "AI integration",
            href: "/services",
         },
      ]
   },
   {
      id: 4,
      title: "DataCenter Build",
      src: project5,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "data center setup",
            href: "/services",
         },
         {
            id: 2,
            title: "network architecture",
            href: "/services",
         },
         {
            id: 3,
            title: "infrastructure management",
            href: "/services",
         },
         {
            id: 4,
            title: "disaster recovery",
            href: "/services",
         },
      ]
   },
   {
      id: 5,
      title: "SecureCloud Pro",
      src: project8,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "cloud security",
            href: "/services",
         },
         {
            id: 2,
            title: "security hardening",
            href: "/services",
         },
         {
            id: 3,
            title: "monitoring solutions",
            href: "/services",
         },
      ]
   },
   {
      id: 6,
      title: "Enterprise Hosting",
      src: project2,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "hosting solutions",
            href: "/services",
         },
         {
            id: 2,
            title: "email servers",
            href: "services",
         },
      ]
   },
   {
      id: 7,
      title: "AutomateFlow",
      src: project9,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "business automation",
            href: "/services",
         },
         {
            id: 2,
            title: "workflow optimization",
            href: "/services",
         },
      ]
   },
   {
      id: 8,
      title: "TechSupport 24/7",
      src: project7,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "24/7 support",
            href: "/services",
         },
         {
            id: 2,
            title: "system monitoring",
            href: "/services",
         },
      ]
   },
   {
      id: 9,
      title: "InfraOptimize",
      src: project6,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "performance optimization",
            href: "/services",
         },
         {
            id: 2,
            title: "server maintenance",
            href: "/services",
         },
         {
            id: 3,
            title: "infrastructure upgrade",
            href: "/services",
         },
      ]
   },
];


export const publicationItems = [
   {
      id: 1,
      title: "cloud migration best practices",
      src: publication1
   },
   {
      id: 2,
      title: "data center infrastructure guide",
      src: publication2
   },
   {
      id: 3,
      title: "AI integration in business",
      src: publication3
   },
];

// insights page constants

export const insightsPublicationItems = [
   {
      id: 1,
      title: "Server Security Best Practices",
      src: insights1
   },
   {
      id: 2,
      title: "Cloud Migration Strategies",
      src: insights2
   },
   {
      id: 3,
      title: "AI in Business Automation",
      src: insights3
   },
];

export const latestItemss = [
   {
      id: 1,
      href: "/",
      src: latest1,
      links: [
         {
            id: 1,
            title: "cloud computing"
         },
         {
            id: 1,
            title: "infrastructure"
         },
      ],
      title: "Building Scalable Cloud Infrastructure: <br/> Best Practices and Implementation Guide",
      subTitle: "By Tathya Technologies Team",
      date: "15 Dec 2024"
   },
   {
      id: 2,
      href: "/",
      src: latest2,
      links: [
         {
            id: 1,
            title: "AI solutions"
         },
      ],
      title: "Implementing AI-Powered Business Automation for Modern Enterprises",
      subTitle: "By Tathya Technologies Team",
      date: "28 Nov 2024"
   },
];

// workiz page constants
export const workizItem = [
   {
      id: 1,
      title: "TechSupport 24/7",
      src: project7,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "24/7 support",
            href: "/services",
         },
         {
            id: 2,
            title: "system monitoring",
            href: "/services",
         },
      ]
   },
   {
      id: 2,
      title: "DataCenter Build",
      src: project5,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "data center setup",
            href: "/services",
         },
         {
            id: 2,
            title: "network architecture",
            href: "/services",
         },
         {
            id: 3,
            title: "infrastructure management",
            href: "/services",
         },
         {
            id: 4,
            title: "disaster recovery",
            href: "/services",
         },
      ]
   },
];


// about page constants

export const aboutPartberItems = [
   {
      id: 1,
      src: planetly,
      title: "TechCorp Solutions",
      para: "Tathya Technologies transformed our entire IT infrastructure with their exceptional server setup and cloud migration services. Their team's expertise in both Windows and Linux environments, combined with their 24/7 support, made the entire process seamless. We now have a robust, scalable infrastructure that supports our growing business needs."
   },
   {
      id: 2,
      src: officevibe,
      title: "Global Communications Ltd",
      para: "The PBX migration and IP telephony solutions provided by Tathya Technologies exceeded our expectations. They seamlessly migrated our legacy systems to modern IP-based solutions with zero downtime. Their professionalism and technical expertise made them the perfect partner for our communication infrastructure upgrade."
   },
   {
      id: 3,
      src: nestle,
      title: "DataFlow Enterprises",
      para: "Tathya Technologies built our complete data center infrastructure from scratch. Their expertise in hardware procurement, network architecture, and disaster recovery planning was outstanding. The ongoing support and maintenance services ensure our operations run smoothly 24/7. Highly recommended for enterprise-level infrastructure projects."
   },
];

// contact page constants

export const FaqItems = [
   {
      id: 1,
      question: "What types of server solutions do you provide?",
      title: "Description",
      description: "We provide comprehensive server solutions including Windows and Linux server setup, configuration, maintenance, performance optimization, security hardening, 24/7 monitoring, migration services, and backup solutions. Our team ensures your servers run efficiently and securely.",
      links: [
         {
            id: 1,
            title: 1,
            description: "We handle both physical and virtual server environments, ensuring optimal performance and security for your business applications."
         },
         {
            id: 2,
            title: 2,
            description: "Our server solutions include complete setup, ongoing maintenance, performance monitoring, and disaster recovery planning."
         },
      ],
      button: "read"
   },
   {
      id: 2,
      question: "Do you provide cloud migration services?",
      title: "Description",
      description: "Yes, we specialize in cloud migration services including multi-cloud deployment, security implementation, performance optimization, and cost management. We help businesses transition from on-premises infrastructure to secure, scalable cloud solutions with minimal downtime.",
      links: [
         {
            id: 1,
            title: 1,
            description: "Our cloud migration process includes thorough planning, testing, and gradual migration to ensure business continuity throughout the transition."
         },
      ],
      button: "read"
   },
   {
      id: 3,
      question: "Can you help with PBX system migration?",
      title: "Description",
      description: "Absolutely! We provide complete PBX migration services from legacy systems to modern IP-based solutions. Our services include VoIP integration, call routing setup, multi-site connectivity, and ongoing PBX maintenance and support.",
      links: [
         {
            id: 1,
            title: 1,
            description: "We ensure zero downtime during PBX migration and provide comprehensive training for your team on the new communication systems."
         },
      ],
      button: "read"
   },
   {
      id: 4,
      question: "Do you offer 24/7 support and monitoring?",
      title: "Description",
      description: "Yes, we provide 24/7 monitoring and support services for all our infrastructure solutions. Our team continuously monitors your systems for performance, security, and availability, providing immediate response to any issues that arise.",
      links: [
         {
            id: 1,
            title: 1,
            description: "Our support team is available round-the-clock to handle emergencies, perform maintenance, and ensure your systems operate at peak performance."
         },
         {
            id: 2,
            title: 2,
            description: "We provide proactive monitoring with automated alerts and regular performance reports to keep you informed about your infrastructure status."
         },
      ],
      button: "read"
   },
   {
      id: 5,
      question: "Can you build custom web applications with AI integration?",
      title: "Description",
      description: "Yes, we develop custom web applications with AI integration including intelligent chatbots, automated customer service, predictive analytics, and business intelligence solutions. Our web development team creates modern, responsive applications with cutting-edge AI features.",
      links: [
         {
            id: 1,
            title: 1,
            description: "We specialize in creating AI-powered web applications that enhance user experience, automate business processes, and provide valuable insights through data analytics."
         },
         {
            id: 2,
            title: 2,
            description: "Our AI solutions include machine learning implementation, natural language processing, and intelligent automation systems tailored to your business needs."
         },
      ],
      button: "read"
   },
   {
      id: 6,
      question: "Do you provide data center setup services?",
      title: "Description",
      description: "Yes, we provide complete data center infrastructure services including hardware procurement, installation, network architecture, connectivity solutions, disaster recovery planning, and power/cooling system design. We help businesses build robust, scalable data center infrastructure.",
      links: [
         {
            id: 1,
            title: 1,
            description: "Our data center services cover everything from initial planning and design to implementation and ongoing maintenance, ensuring your infrastructure meets current and future business requirements."
         },
      ],
      button: "read"
   },
];