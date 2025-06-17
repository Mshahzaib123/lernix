import { FacebookLogo, GoogleLogo, XLogo, LinkedinLogo, StarHalf, MapPin, Envelope, Phone, UserRectangle, FileText, Clock, Star, Medal, Globe } from '@phosphor-icons/react';

import FunFact1 from './assets/funfact1.svg';
import FunFact2 from './assets/funfact2.svg';
import FunFact3 from './assets/funfact3.svg';
import FunFact4 from './assets/funfact4.svg';
import checSvg from './assets/check.svg';
import quoteSvg1 from './assets/quote1.svg';
import quoteSvg2 from './assets/quote2.svg';
import quoteSvg3 from './assets/quote3.svg';
import partner1 from './assets/partner1.svg';
import partner2 from './assets/partner2.svg';
import partner3 from './assets/partner3.svg';
import partner4 from './assets/partner4.svg';
import partner5 from './assets/partner5.svg';
import category1 from './assets/categories1.svg';
import category2 from './assets/categories2.svg';
import category3 from './assets/categories3.svg';
import category4 from './assets/categories4.svg';
import category5 from './assets/categories5.svg';
import category6 from './assets/categories6.svg';
import videoSvg from './assets/video.svg';
import fbSvg from './assets/fb.svg';
import twitterSvg from './assets/twitter.svg';
import linkedInSvg from './assets/linkedin.svg';
import instagramSvg from './assets/instragram.svg';
import headphoneSvg from './assets/headphone.svg';
import documentSvg from './assets/document.svg';

export const menuData = [
    {
        title: "Home",
        path: "/",
        dropdown: [
            { title: "Home Demo - 1", path: "/" },
            { title: "Home Demo - 2", path: "/homepage2" },
            { title: "Home Demo - 3", path: "/homepage3" },
        ]
    },
    {
        title: "Pages",
        path: "/pages",
        dropdown: [
            { title: "About Us", path: "/about" },
            { title: "Our Team", path: "/team" },
            { title: "Our Team Detail", path: "/team-detail" },
            { title: "Privacy Policy", path: "/privacy-policy" },
            { title: "Terms & Conditions", path: "/terms-conditions" },
        ]
    },
    {
        title: "Courses",
        path: "/courses",
        dropdown: [
            { title: "Courses List", path: "/courses-list-view" },
            { title: "Courses Grid", path: "/courses-grid-view" },
            { title: "Courses Detail", path: "/courses-detail" },
            { title: "Courses With Sidebar", path: "/courses-with-sidebar" },
        ]
    },
    {
        title: "Blog",
        path: "/blog",
        dropdown: [
            { title: "Blog Standard", path: "/blog-standard" },
            { title: "Blog Detail", path: "/blog-detail" },
            { title: "Blog With Sidebar", path: "/blog-with-sidebar" },
            { title: "Blog Without Sidebar", path: "/blog-without-sidebar" },
        ]
    },
    {
        title: "Contact Us",
        path: "/contact-us"
    }

]

export const footerNavigationData = [
    {
        heading: "Links",
        menu: [
            { title: "Home", path: "/" },
            { title: "About Us", path: "/about" },
            { title: "Courses", path: "/courses" },
            { title: "Courses Detail", path: "/courses-detail" },
            { title: "Contact", path: "/contact-us" },
        ]
    },
    {
        heading: "Legal",
        menu: [
            { title: "Terms of Uses", path: "/term-use" },
            { title: "Terms & Condition", path: "/terms" },
            { title: "Payment Method", path: "/payment-method" },
            { title: "Privacy Policy", path: "/privacy-policy" },
            { title: "Licensencing", path: "/license" },
        ]
    }
]

export const footerServicesData = [
    {
        heading: "Services",
        menu: [
            { title: "Air Condition", path: "/" },
            { title: "Appliance Repair", path: "/" },
            { title: "Ventilation", path: "/" },
            { title: "Electrical Work", path: "/" },
            { title: "Home Maintenance", path: "/" },
        ]
    }
]

export const footerContactData = [
    {
        heading: "Contact",
        menu: [
            { icon: MapPin, label: "Address", title: "1867 Fire Access, USA" },
            { icon: Envelope, label: "Email", title: "hvacserv@email.com", path: "mailto:hvacserv@email.com" },
            { icon: Phone, label: "Phone", title: "+1 234 5678 900", path: "/" },
        ]
    }
]

export const copyrightMenuData = [
    { title: "Company", path: "/" },
    { title: "Support", path: "/" },
    { title: "Privacy", path: "/" },
    { title: "Conatct", path: "/" }
]

export const socialData2 = [
    {
        icon: fbSvg,
        path: "/",
    },
    {
        icon: twitterSvg,
        path: "/",
    },
    {
        icon: linkedInSvg,
        path: "/",
    },
    {
        icon: instagramSvg,
        path: "/",
    },
]

export const socialData = [
    {
        icon: FacebookLogo,
        path: "/",
    },
    {
        icon: XLogo,
        path: "/",
    },
    {
        icon: LinkedinLogo,
        path: "/",
    },
    {
        icon: GoogleLogo,
        path: "/",
    },
]

export const awardData = [
    {
        icon: checSvg,
        text: "Digital skill empowerment"
    },
    {
        icon: checSvg,
        text: "Expert-led courses"
    },
    {
        icon: checSvg,
        text: "Career-focused education"
    },
    {
        icon: checSvg,
        text: "Supportive learning"
    },
    {
        icon: checSvg,
        text: "Life-changing digital education"
    },
]

export const userProfileData = [
    { img: './src/assets/user1.webp', text: "img" },
    { img: './src/assets/user2.webp', text: "img" },
    { img: './src/assets/user3.webp', text: "img" },
    { img: './src/assets/user4.webp', text: "img" },
    { img: './src/assets/user5.webp', text: "img" },
    { img: './src/assets/user6.webp', text: "img" },
    { img: './src/assets/user7.webp', text: "img" },
    { img: './src/assets/user8.webp', text: "img" },
]

export const progressBarData = [
    { skill: "Skill Mastery Levels", percent: "90%" },
    { skill: "Learning Milestones", percent: "92%" },
    { skill: "Digital Proficiency Journey", percent: "92%" },
]

export const CategoryData = [
    { image: category1, heading: "Web Design", course: "78 Courses" },
    { image: category2, heading: "Digital Marketing", course: "58 Courses" },
    { image: category3, heading: "Data Science", course: "24 Courses" },
    { image: category4, heading: "Software Developement", course: "48 Courses" },
    { image: category5, heading: "Graphic Design", course: "18 Courses" },
    { image: category6, heading: "Network Administration", course: "48 Courses" },
]

export const testimonialData = [
    {
        stdReview: "LEARNIX gave me the tools and confidence I needed to transition into web development. The content is modern, easy to follow, and packed with real examples. Instructors made difficult concepts feel manageable with constant guidance. I loved how each lesson built directly toward creating real-world projects. Their community and mentor support made me feel like I wasn’t alone. Before I finished the course, I had built a full portfolio and got a full-time role. I can’t thank LEARNIX enough for showing me what’s possible.",
        stdImg: './src/assets/testimonial6.webp',
        stdName: "Krystal France",
        status: "Ex-Student"
    },
    {
        stdReview: "Choosing LEARNIX for my data science journey was a game changer. The curriculum is up-to-date and covers the essentials with depth and clarity. The instructors truly care about your growth and make complex topics like machine learning approachable. I appreciated the mix of video lessons, coding labs, and capstone projects. It helped me practice while learning. The career coaching was outstanding—I landed a junior data analyst position shortly after graduating. LEARNIX gave me skills and confidence that truly made a difference.",
        stdImg: './src/assets/testimonial6.webp',
        stdName: "Krystal France",
        status: "Ex-Student"
    },
    {
        stdReview: "LEARNIX stood out from other platforms I tried before. The digital marketing course was packed with value—SEO, analytics, ads, and more. Each topic was broken down in a way that made it practical and easy to apply. The instructors were engaging and quick to help. Their project-based learning helped me build an impressive portfolio. Even before completing all modules, I secured a part-time role with a local agency. LEARNIX turned a casual interest into a promising career path. Highly recommended to anyone serious.",
        stdImg: './src/assets/testimonial6.webp',
        stdName: "Krystal France",
        status: "Ex-Student"
    },
]

export const testimonial2Data = [
    {
        quoteSvg: quoteSvg1,
        heading: "The Best Online Course Provider",
        desc: "Enrolling in courses at LEARNIX was a game-changer for me. The instructors' expertise and personalized support helped me transition smoothly into the digital",
        profileImg: './src/assets/testimonial8.webp',
        userName: "Jean Grey",
        status: "Ex-Student"
    },
    {
        quoteSvg: quoteSvg2,
        heading: "The Best Online Course Provider",
        desc: "Enrolling in courses at LEARNIX was a game-changer for me. The instructors' expertise and personalized support helped me transition smoothly into the digital",
        profileImg: './src/assets/testimonial9.webp',
        userName: "Lillie R. Cherry",
        status: "Ex-Student"
    },
    {
        quoteSvg: quoteSvg2,
        heading: "The Best Online Course Provider",
        desc: "Enrolling in courses at LEARNIX was a game-changer for me. The instructors' expertise and personalized support helped me transition smoothly into the digital",
        profileImg: './src/assets/testimonial10.webp',
        userName: "Morgan Stark",
        status: "Ex-Student"
    },
    {
        quoteSvg: quoteSvg1,
        heading: "The Best Online Course Provider",
        desc: "Enrolling in courses at LEARNIX was a game-changer for me. The instructors' expertise and personalized support helped me transition smoothly into the digital",
        profileImg: './src/assets/testimonial11.webp',
        userName: "Erik Lansher",
        status: "Ex-Student"
    },
    {
        quoteSvg: quoteSvg3,
        heading: "The Best Online Course Provider",
        desc: "Enrolling in courses at LEARNIX was a game-changer for me. The instructors' expertise and personalized support helped me transition smoothly into the digital",
        profileImg: './src/assets/testimonial12.webp',
        userName: "Scott Summers",
        status: "Ex-Student"
    },
]

export const simpleBlogData = [
    {
        id: 'essential-skills',
        path: "/blog-detail",
        blogImg: '../src/assets/blog1.webp',
        user: "Admin",
        datePosted: "Jan 29, 2022",
        heading: "5 Essential Skills Every Digital Marketer Should Master"
    },
    {
        id: 'graphic-design-trend',
        path: "/blog-detail",
        blogImg: '../src/assets/blog2.webp',
        user: "Admin",
        datePosted: "May 13, 2022",
        heading: "Graphic Design Trends Shaping Visual Communication"
    },
    {
        id: 'navigating-the-data',
        path: "/blog-detail",
        blogImg: '../src/assets/blog3.webp',
        user: "Admin",
        datePosted: "Aug 05, 2022",
        heading: "Navigating the Data Science Job Market"
    },
]

export const newsData = [
    {
        id: 'web-development-tools',
        path: "/blog-detail",
        blogImg: '../src/assets/blog4.webp',
        user: "Admin",
        datePosted: "04 April, 2024",
        heading: "Top 10 Web Development Tools You Should Be Using in 2024",
        comment: "05"
    },
    {
        id: 'essential-cyber-security',
        path: "/blog-detail",
        blogImg: '../src/assets/blog5.webp',
        user: "Admin",
        datePosted: "10 May, 2024",
        heading: "Essential Cybersecurity Practices for Protecting Your Online",
        comment: "05"
    },
]

export const categoryBlogData = [
    {
        id: 'top-5-programming-language-to-learn-for-tech-career',
        path: "/blog-detail",
        heading: "Top 5 Programming Languages to Learn for a Thriving Tech Career",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        blogImg: '../src/assets/blog6.webp',
        datePosted: "June 4, 2024",
        field: "Technical"
    },
    {
        id: 'ultimate-guide',
        path: "/blog-detail",
        heading: "The Ultimate Guide to Boosting Your SEO in 2024",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        blogImg: '../src/assets/blog7.webp',
        datePosted: "September 22, 2024",
        field: "Technical"
    },
    {
        id: 'leveraging-social-media',
        path: "/blog-detail",
        heading: "Leveraging Social Media Analytics for Business Growth",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        blogImg: '../src/assets/blog8.webp',
        datePosted: "November 10, 2024",
        field: "Technical"
    },
]

export const categoryBlogData2 = [
    {
        id: 'co-education',
        category: "Education",
        path: "/blog-detail",
        blogImg: '../src/assets/blog9.webp',
        user: "Admin",
        datePosted: "Jan 29, 2024",
        heading: "Co-Education Makes You Respect The People",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took"
    },
    {
        id: 'professional-ceramic',
        category: "Education",
        path: "/blog-detail",
        blogImg: '../src/assets/blog10.webp',
        user: "Admin",
        datePosted: "Jan 29, 2024",
        heading: "Professional Ceramic Maudling for Beginners",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took"
    },
    {
        id: 'education-is-about-create-leader',
        category: "Learning",
        path: "/blog-detail",
        blogImg: '../src/assets/blog11.webp',
        user: "Admin",
        datePosted: "Jan 29, 2024",
        heading: "Education Is About Create Leaders For Tomorrow",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took"
    },
    {
        id: 'education-makes-a-door',
        category: "Business",
        path: "/blog-detail",
        blogImg: '../src/assets/blog12.webp',
        user: "Admin",
        datePosted: "Jan 29, 2024",
        heading: "Education Makes A Door To Bright Future",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took"
    },
    {
        id: 'education-is-best-friend',
        category: "Business",
        path: "/blog-detail",
        blogImg: '../src/assets/blog13.webp',
        user: "Admin",
        datePosted: "Jan 29, 2024",
        heading: "Education Is A Best Friend Goes Lifelong",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took"
    },
    {
        id: 'professional-mobile-painting',
        category: "Business",
        path: "/blog-detail",
        blogImg: '../src/assets/blog14.webp',
        user: "Admin",
        datePosted: "Jan 29, 2024",
        heading: "Professional Mobile Painting and Sculpting",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took"
    },
    {
        id: 'you-have-to-learn',
        category: "Business",
        path: "/blog-detail",
        blogImg: '../src/assets/blog15.webp',
        user: "Admin",
        datePosted: "Jan 29, 2024",
        heading: "You Have To Learn If You Want To Earn",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took"
    },
    {
        id: 'education-is-most-powerful-tool',
        category: "Business",
        path: "/blog-detail",
        blogImg: '../src/assets/blog16.webp',
        user: "Admin",
        datePosted: "Jan 29, 2024",
        heading: "Education Is The Most Powerful Tool",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took"
    },
    {
        id: 'essential-tips-for-building',
        category: "Business",
        path: "/blog-detail",
        blogImg: '../src/assets/blog26.webp',
        user: "Admin",
        datePosted: "Jan 29, 2024",
        heading: "Essential Tips for Building a Responsive Web Design",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took"
    },

]

export const coursesData = [
    {
        id: 'introduction-to-digital-marketing',
        img: '../src/assets/courses1.webp',
        level: "Beginner",
        price: "$27.00",
        heading: "Introduction to Digital Marketing",
        path: "/courses-detail",
        rating: 4.5,
        ratingStar: [
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: StarHalf,
                style: "fill"
            },
        ],
        instructorImg: '../src/assets/courses-user1.webp',
        instructorName: "Prof. Donnie Ball",
        strength: "70+",
    },
    {
        id: 'increasing-engagement-with-instagram-and-facebook',
        img: '../src/assets/courses8.webp',
        level: "Intermediate",
        price: "$33.00",
        heading: "Increasing Engagement with Instagagram & Facebook",
        path: "/courses-detail",
        rating: 4.5,
        ratingStar: [
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: StarHalf,
                style: "fill"
            },
        ],
        instructorImg: '../src/assets/courses-user2.webp',
        instructorName: "Prof. Angela Bryant",
        strength: "1.5k+",
    },
    {
        id: 'full-stack-web-development',
        img: '../src/assets/courses3.webp',
        level: "Beginner",
        price: "$26.00",
        heading: "Full Stack Web Development Bootcamp",
        path: "/courses-detail",
        rating: 4.5,
        ratingStar: [
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: StarHalf,
                style: "fill"
            },
        ],
        instructorImg: '../src/assets/courses-user3.webp',
        instructorName: "Prof. Vivian Farney",
        strength: "5k+",
    },
    {
        id: 'mastering-digital-marketing',
        img: '../src/assets/courses4.webp',
        level: "Beginner",
        price: "$47.00",
        heading: "Mastering Digital Marketing Fundamentals",
        path: "/courses-detail",
        rating: 4.5,
        ratingStar: [
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: StarHalf,
                style: "fill"
            },
        ],
        instructorImg: '../src/assets/courses-user4.webp',
        instructorName: "Prof. Ralph Lyon",
        strength: "1.7k+",
    },
    {
        id: 'python-programming-for-beginners',
        img: '../src/assets/courses5.webp',
        level: "Beginner",
        price: "$55.00",
        heading: "Python Programming for Beginners",
        path: "/courses-detail",
        rating: 4.5,
        ratingStar: [
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: StarHalf,
                style: "fill"
            },
        ],
        instructorImg: '../src/assets/courses-user5.webp',
        instructorName: "Prof. Betty Ortegal",
        strength: "5k+",
    },
    {
        id: 'graphic-design-mastery',
        img: '../src/assets/courses6.webp',
        level: "Beginner",
        price: "$37.00",
        heading: "Graphic Design Mastery: From Concept to Creation",
        path: "/courses-detail",
        rating: 4.5,
        ratingStar: [
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: StarHalf,
                style: "fill"
            },
        ],
        instructorImg: '../src/assets/courses-user6.webp',
        instructorName: "Prof. Scott Stevens",
        strength: "2.3k+",
    },

]

export const coursesListData = [
    {
        id: 'basic-fundamentals-of-interior-design',
        img: '../src/assets/courses13.webp',
        price: "Free",
        heading: "Basic Fundamentals of Interior & Graphics Design",
        path: "/courses-detail",
        ratingStar: [
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            }
        ],
        lessons: "2",
        strength: "4k"
    },
    {
        id: 'increasing-engagement-with-instagram-and-facebook',
        img: '../src/assets/courses14.webp',
        price: "$24.33",
        heading: "Increasing Engagement with Instagram & Facebook",
        path: "/courses-detail",
        ratingStar: [
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            }
        ],
        lessons: "2",
        strength: "4k"
    },
    {
        id: 'introduction-to-color-theory-and-basic-UI-UX',
        img: '../src/assets/courses15.webp',
        price: "$39.99",
        heading: "Introduction to Color Theory & Basic UI/UX",
        path: "/courses-detail",
        ratingStar: [
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            }
        ],
        lessons: "2",
        strength: "4k"
    },
    {
        id: 'financial-security-thinking-and-principles-theory',
        img: '../src/assets/courses16.webp',
        price: "$32.15",
        heading: "Financial Security Thinking and Principles Theory",
        path: "/courses-detail",
        ratingStar: [
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            }
        ],
        lessons: "2",
        strength: "4k"
    },
    {
        id: 'logo-design-from-concept-to-presentation',
        img: '../src/assets/courses17.webp',
        price: "$37.88",
        heading: "Logo Design: From Concept to Presentation",
        path: "/courses-detail",
        ratingStar: [
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            }
        ],
        lessons: "2",
        strength: "4k"
    },
    {
        id: 'professional-ceramic-molding-for-beginners',
        img: '../src/assets/courses18.webp',
        price: "$41.80",
        heading: "Professional Ceramic Molding for Beginners",
        path: "/courses-detail",
        ratingStar: [
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            }
        ],
        lessons: "2",
        strength: "4k"
    },
    {
        id: 'complete-guide-digital-markteting',
        img: '../src/assets/courses25.webp',
        price: "$37.88",
        heading: "The Complete Guide Digital Marketing Course",
        path: "/courses-detail",
        ratingStar: [
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            }
        ],
        lessons: "2",
        strength: "4k"
    },
    {
        id: 'facebook-ads-and-facebook-marketing-mastery',
        img: '../src/assets/courses26.webp',
        price: "$41.80",
        heading: "Facebook Ads & Facebook Marketing MASTERY",
        path: "/courses-detail",
        ratingStar: [
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            }
        ],
        lessons: "2",
        strength: "4k"
    },
    {
        id: 'ultimate-google-ads-training-2021-pay-per-click',
        img: '../src/assets/courses27.webp',
        price: "$37.88",
        heading: "Ultimate Google Ads Training 2021 Pay Per Click",
        path: "/courses-detail",
        ratingStar: [
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            }
        ],
        lessons: "2",
        strength: "4k"
    },
    {
        id: 'learn-complete-guide-to-instagram-growth',
        img: '../src/assets/courses28.webp',
        price: "$41.80",
        heading: "Learn Complete Guide To Instagram Growth",
        path: "/courses-detail",
        ratingStar: [
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            },
            {
                icon: Star,
                style: "fill"
            }
        ],
        lessons: "2",
        strength: "4k"
    },
]

export const featuredCoursesData = [
    {
        id: 'basic-fundamentals-of-interior-and-graphic-design',
        img: '../src/assets/courses7.webp',
        heading: "Basic Fundamentals of Interior & Graphics Design",
        path: "/courses-detail",
        price: "$24.99",
        category: "Art & Design",
        lessons: "2",
        runtime: "2h 30m",
        rating: "4.8"
    },
    {
        id: 'increasing-engagement-with-instagram-and-facebook',
        img: '../src/assets/courses8.webp',
        heading: "Increasing Engagement with Instagram & Facebook",
        path: "/courses-detail",
        price: "Free",
        category: "Marketing",
        lessons: "2",
        runtime: "2h 30m",
        rating: "4.8"
    },
    {
        id: 'introduction-to-color-theory-and-basic-UI-UX',
        img: '../src/assets/courses9.webp',
        heading: "Introduction to Color Theory & Basic UI/UX",
        path: "/courses-detail",
        price: "$41.25",
        category: "Art & Design",
        lessons: "2",
        runtime: "2h 30m",
        rating: "4.8"
    },
    {
        id: 'financial-security-thinking-and-principles-theory',
        img: '../src/assets/courses9.webp',
        heading: "Financial Security Thinking and Principles Theory",
        path: "/courses-detail",
        price: "$24.99",
        category: "Finance",
        lessons: "2",
        runtime: "2h 30m",
        rating: "4.8"
    },
    {
        id: 'logo-design-from-concept-to-presentation',
        img: '../src/assets/courses11.webp',
        heading: "Logo Design: From Concept to Presentation",
        path: "/courses-detail",
        price: "$38.48",
        category: "Art & Design",
        lessons: "2",
        runtime: "2h 30m",
        rating: "4.8"
    },
    {
        id: 'professional-ceramic-molding-for-beginners',
        img: '../src/assets/courses12.webp',
        heading: "Professional Ceramic Molding for Beginners",
        path: "/courses-detail",
        price: "$19.48",
        category: "Art & Design",
        lessons: "2",
        runtime: "2h 30m",
        rating: "4.8"
    },
    {
        id: 'data-science-and-machine-learning-bootcamp',
        img: '../src/assets/courses20.webp',
        heading: "Data Science and Machine Learning Bootcamp",
        path: "/courses-detail",
        price: "$39.28",
        category: "Art & Design",
        lessons: "2",
        runtime: "2h 30m",
        rating: "4.8"
    },
    {
        id: 'hands-on-machine-learning-in-data-science',
        img: '../src/assets/courses21.webp',
        heading: "Hands-On Machine Learning In Data Science",
        path: "/courses-detail",
        price: "$39.28",
        category: "Art & Design",
        lessons: "2",
        runtime: "2h 30m",
        rating: "4.8"
    },
    {
        id: 'flutter-and-dart-the-complete-guide-2024-edition',
        img: '../src/assets/courses22.webp',
        heading: "Flutter & Dart - The Complete Guide [2024 Edition]",
        path: "/courses-detail",
        price: "$19.48",
        category: "Art & Design",
        lessons: "2",
        runtime: "2h 30m",
        rating: "4.8"
    },
    {
        id: 'financial-security-thinking-and-principles-theory',
        img: '../src/assets/courses10.webp',
        heading: "Financial Security Thinking and Principles Theory",
        path: "/courses-detail",
        price: "$24.99",
        category: "Finance",
        lessons: "2",
        runtime: "2h 30m",
        rating: "4.8"
    },
    {
        id: 'ultimate-aws-certified-solutions-architect-associate',
        img: '../src/assets/courses23.webp',
        heading: "Ultimate AWS Certified Solutions Architect Associate",
        path: "/courses-detail",
        price: "$39.28",
        category: "Art & Design",
        lessons: "2",
        runtime: "2h 30m",
        rating: "4.8"
    },
    {
        id: 'complete-digital-marketing-course-12-courses-in-1',
        img: '../src/assets/courses24.webp',
        heading: "Complete Digital Marketing Course - 12 Courses in 1",
        path: "/courses-detail",
        price: "$19.48",
        category: "Art & Design",
        lessons: "2",
        runtime: "2h 30m",
        rating: "4.8"
    },

]

export const lecturersData = [
    {
        id: 'tim-r-moyer',
        img: '../src/assets/team1.webp',
        name: "Tim R. Moyer",
        path: "/team-detail",
        designation: "Lecturer"
    },
    {
        id: 'harold-j-eakes',
        img: '../src/assets/team2.webp',
        name: "Harold J. Eakes",
        path: "/team-detail",
        designation: "Lecturer"
    },
    {
        id: 'ruth-r-scott',
        img: '../src/assets/team1.webp',
        name: "Ruth R. Scott",
        path: "/team-detail",
        designation: "Lecturer"
    },
    {
        id: 'cheryl-j-solomon',
        img: '../src/assets/team12.webp',
        name: "Cheryl J. Solomon",
        path: "/team-detail",
        designation: "Lecturer"
    },
    {
        id: 'julia-b-corbin',
        img: '../src/assets/team13.webp',
        name: "Julia B. Corbin",
        path: "/team-detail",
        designation: "Lecturer"
    },
    {
        id: 'adrian-v-ginsberg',
        img: '../src/assets/team14.webp',
        name: "Adrian V. Ginsberg",
        path: "/team-detail",
        designation: "Lecturer"
    },
    {
        id: 'daniel-c-almonte',
        img: '../src/assets/team15.webp',
        name: "Daniel C. Almonte",
        path: "/team-detail",
        designation: "Lecturer"
    }
]

export const instructorsData = [
    {
        id: 'troy-a-miller',
        img: '../src/assets/team8.webp',
        name: "Troy A. Miller",
        path: "/team-detail",
        designation: "Instructor"
    },
    {
        id: 'michael-d-cornelius',
        img: '../src/assets/team9.webp',
        name: "Michel D. Cornelius",
        path: "/team-detail",
        designation: "Instructor"
    },
    {
        id: 'george-a-cambell',
        img: '../src/assets/team10.webp',
        name: "George A. Cambell",
        path: "/team-detail",
        designation: "Instructor"
    },
    {
        id: 'grace-r-sandoval',
        img: '../src/assets/team11.webp',
        name: "Grace R. Sandoval",
        path: "/team-detail",
        designation: "Instructor"
    },
    {
        id: 'karl-clarkson',
        img: '../src/assets/team4.webp',
        name: "Karl Clarkson",
        path: "/team-detail",
        designation: "Instructor"
    },
    {
        id: 'gloria-bush',
        img: '../src/assets/team5.webp',
        name: "Gloria Bush",
        path: "/team-detail",
        designation: "Instructor"
    },
    {
        id: 'teresa-ransom',
        img: '../src/assets/team6.webp',
        name: "Teresa Ransom",
        path: "/team-detail",
        designation: "Instructor"
    },
    {
        id: 'debra-webster',
        img: '../src/assets/team7.webp',
        name: "Debra Webster",
        path: "/team-detail",
        designation: "Instructor"
    }
]

export const funFactData = [
    {
        bgImage: './src/assets/funfact1.webp',
        image: FunFact1,
        strength: "75 +",
        heading: "Enrolled Students"
    },
    {
        bgImage: './src/assets/funfact1.webp',
        image: FunFact2,
        strength: "324 +",
        heading: "Enrolled Students"
    },
    {
        bgImage: './src/assets/funfact1.webp',
        image: FunFact3,
        strength: "25 K+",
        heading: "Certified Students"
    },
    {
        bgImage: './src/assets/funfact1.webp',
        image: FunFact4,
        strength: "30 +",
        heading: "Skilled Instructors"
    }
]

export const industryData = [
    {
        heading: "Industry Expertise",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
    },
    {
        heading: "Practical Learning Approach",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
    },
    {
        heading: "Supportive Community",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
    }
]

export const partnerData = [
    { image: partner1 },
    { image: partner2 },
    { image: partner3 },
    { image: partner4 },
    { image: partner5 },
]

export const skillLevelData = [
    { text: "All Levels (82)" },
    { text: "Beginner Levels (82)" },
    { text: "Intermediate Levels (82)" },
    { text: "Expert Levels (82)" },
]

export const languageData = ["Spanish Language", "Arabic Language", "United State (US)", "United Kingdom (UK)"]
export const categoryData2 = ["Developement (23)", "Art & Design (45)", "Data Science (14)", "Technology (28)", "IT Management (34)"]
export const relatedCoursesData = [
    {
        heading: "Basic of Designing",
        img: "../src/assets/courses32.webp",
        price: "$38.00"
    },
    {
        heading: "Basic of Designing",
        img: "../src/assets/courses33.webp",
        price: "$38.00"
    },
    {
        heading: "Basic of Designing",
        img: "../src/assets/courses34.webp",
        price: "$38.00"
    },
]
export const courseDetailData = [
    {
        icon: UserRectangle,
        title: "Instructor",
        detail: "Daniel Smith"
    },
    {
        icon: FileText,
        title: "Lectures",
        detail: "23"
    },
    {
        icon: Clock,
        title: "Duration",
        detail: "2Hr 36Minutes"
    },
    {
        icon: Star,
        title: "Enrolled",
        detail: "2k Students"
    },
    {
        icon: Medal,
        title: "Course Level",
        detail: "Intermediate"
    },
    {
        icon: Globe,
        title: "Language",
        detail: "English"
    },
]

export const recentBlogData = [
    {
        id: 'how-to-manage-ads-for-clients-the-right-way',
        path: "/blog-detail",
        title: "How to Manage Ads For Clients The Right Way",
        img: '../src/assets/blog17.webp'
    },
    {
        id: '14-facebook-examples-for-ad-creative',
        path: "/blog-detail",
        title: "14 Facebook Examples for Ad Creative",
        img: '../src/assets/blog18.webp'
    },
    {
        id: 'to-carry-out-put-into-the-perform-to-implement',
        path: "/blog-detail",
        title: "To Carry Out Put Into The Perform To Implement",
        img: '../src/assets/blog19.webp'
    }
]

export const tagsData = ["Business", "Education", "Design", "Students", "Teachers", "Classroom", "Online", "e-Learning", "Book"]

export const instaFeedData = [
    { image: '../src/assets/blog20.webp' },
    { image: '../src/assets/blog21.webp' },
    { image: '../src/assets/blog22.webp' },
    { image: '../src/assets/blog23.webp' },
    { image: '../src/assets/blog24.webp' },
    { image: '../src/assets/blog25.webp' },
]

export const commentsData = [
    {
        tag: "comment",
        img: '../src/assets/blog31.webp',
        name: 'Ronald Smalls',
        datePosted: 'Feb 21, 2024 at 11:00am',
        desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form'
    },
    {
        tag: "reply",
        img: '../src/assets/blog32.webp',
        name: 'Eunice Rosas',
        datePosted: 'Feb 21, 2024 at 11:00am',
        desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form'
    },
    {
        tag: "comment",
        img: '../src/assets/blog33.webp',
        name: 'Ronald Smalls',
        datePosted: 'Feb 21, 2024 at 11:00am',
        desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form'
    }
]

export const courseContentData = [
    {
        heading: "Introduction",
        noOfLec: 3,
        runTime: "34:51 min",
        level: "Intermediate",
        desc: "This tutorial will help you learn quickly and thoroughly. Lorem ipsum is dummy text used in laying out print, graphic or web designs.",
        courseArchive: "2 Videos, 1 Audio, 1 Notebook",
        content: [
            {
                type: videoSvg,
                title: "Video: Getting Started and Introductions",
                preview: true,
                locked: true
            },
            {
                type: videoSvg,
                title: "Video: Getting Started and Introductions",
                preview: true,
                locked: true
            },
            {
                type: headphoneSvg,
                title: "Audio: Connectig Throgh Technology",
                preview: false,
                locked: true
            },
            {
                type: documentSvg,
                title: "Video: Getting Started and Introductions",
                preview: false,
                locked: true
            }
        ]
    },
    {
        heading: "Getting Started",
        noOfLec: 3,
        runTime: "34:51 min",
        level: "Intermediate",
        desc: "This tutorial will help you learn quickly and thoroughly. Lorem ipsum is dummy text used in laying out print, graphic or web designs.",
        courseArchive: "2 Videos, 1 Audio, 1 Notebook",
        content: [
            {
                type: videoSvg,
                title: "Video: Getting Started and Introductions",
                preview: true,
                locked: true
            },
            {
                type: videoSvg,
                title: "Video: Getting Started and Introductions",
                preview: true,
                locked: true
            },
            {
                type: headphoneSvg,
                title: "Audio: Connectig Throgh Technology",
                preview: false,
                locked: true
            },
            {
                type: documentSvg,
                title: "Video: Getting Started and Introductions",
                preview: false,
                locked: true
            }
        ]
    },
    {
        heading: "Start from Sketch Design",
        noOfLec: 3,
        runTime: "34:51 min",
        level: "Intermediate",
        desc: "This tutorial will help you learn quickly and thoroughly. Lorem ipsum is dummy text used in laying out print, graphic or web designs.",
        courseArchive: "2 Videos, 1 Audio, 1 Notebook",
        content: [
            {
                type: videoSvg,
                title: "Video: Getting Started and Introductions",
                preview: true,
                locked: true
            },
            {
                type: videoSvg,
                title: "Video: Getting Started and Introductions",
                preview: true,
                locked: true
            },
            {
                type: headphoneSvg,
                title: "Audio: Connectig Throgh Technology",
                preview: false,
                locked: true
            },
            {
                type: documentSvg,
                title: "Video: Getting Started and Introductions",
                preview: false,
                locked: true
            }
        ]
    },
    {
        heading: "Getting Help & Support in Seller Central",
        noOfLec: 3,
        runTime: "34:51 min",
        level: "Intermediate",
        desc: "This tutorial will help you learn quickly and thoroughly. Lorem ipsum is dummy text used in laying out print, graphic or web designs.",
        courseArchive: "2 Videos, 1 Audio, 1 Notebook",
        content: [
            {
                type: videoSvg,
                title: "Video: Getting Started and Introductions",
                preview: true,
                locked: true
            },
            {
                type: videoSvg,
                title: "Video: Getting Started and Introductions",
                preview: true,
                locked: true
            },
            {
                type: headphoneSvg,
                title: "Audio: Connectig Throgh Technology",
                preview: false,
                locked: true
            },
            {
                type: documentSvg,
                title: "Video: Getting Started and Introductions",
                preview: false,
                locked: true
            }
        ]
    },
];


export const courseReviewData = [
    {
        img: '../src/assets/courses37.webp',
        name: "Daniel Smith",
        datePosted: "Jan 24, 2024",
        desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
    },
    {
        img: '../src/assets/courses38.webp',
        name: "Loara Lissa",
        datePosted: "Jan 24, 2024",
        desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
    }
]