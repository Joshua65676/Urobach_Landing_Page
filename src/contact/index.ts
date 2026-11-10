import { Architect, Facebook, Furniture, Home, Instagram, LinkedIn, ProfilePics, Project1, Project2, Review } from "../assets";

export const NavList = [
    {name: "Our Services", link: "/services"},
    {name: "About Us", link: "/about"},
    {name: "Our Portfolio", link: "/portfolio"},
    {name: "Testimonials", link: "/testimonials"},
];

export const HeroList =[
    {years: "10+", description: "Years of Architecture"},
    {years: "40+", description: "Projects Completed"},
    {years: "300+", description: "Concepts Refined"},
];

export const AboutList = [
    {years: "2500+", description: "Successful designs"},
    {years: "2000+", description: "Happy clients"},
    {years: "100%", description: "Clients satisfaction"},
];

export const ServiceList = [
    {
     name: "Architectural Design",
     description: "Our architectural design ethos innovates sustainability and client satisfaction from inception to realization",
     image: Architect
    },
    {
     name: "Interior Design",
     description: "Elevate your interior design with our bespoke design service tailored to your unique style  and needs ",
     image: Furniture
    },
    {
     name: "Exterior Design",
     description: "From landscaping to architectural detailing, our exterior design service crafts outdoors space that captivates ",
     image: Home
    },
];

export const Portfolios = [
    {name: "House Architecture Design in Ohio", image: Project1, link: "/"},
    {name: "Interior Design in Ohio", image: Project2, link: "/"},
]

export const Reviews = [
    {
     name: "James Allen",
     image: Review,
     description: "They truly listened to our needs and brought our vision to life in ways we never imagined. The attention to detail, creativity, and professionalism throughout the entire process was outstanding. Our new space is not only beautiful but perfectly functional — it feels like it was made just for us.",
     profile: ProfilePics,
     location: "Monroe, Ohio"
    }
]

export const SocialLink = [
    {icon: Facebook, link: "/"},
    {icon: Instagram, link: "/"},
    {icon: LinkedIn, link: "/"}
]

export const FooterLink = [
    {name: "Home", link: "/home"},
    {name: "Our Services", link: "/services"},
    {name: "About Us", link: "/about"},
    {name: "Our Portfolio", link: "/portfolio"},
    {name: "Testimonials", link: "/testimonials"},
]