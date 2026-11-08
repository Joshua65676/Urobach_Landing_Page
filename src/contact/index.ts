import { Architect, Furniture, Home } from "../assets";

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