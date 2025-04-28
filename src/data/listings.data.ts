import { StaticImageData } from 'next/image';
import listing_img from '@/assets/images/data_img_1.png';

export interface IListingBlock {
    image: string | StaticImageData;
    title: string;
    rating: number;
    reviewsCount: number;
    operatesIn: string;
    countryCode: string;
    ferryTypes: string;
    description: string;
    popularVessels: string[];
    vessels: number;
    ctaText: string;
}

export const operatorListings: IListingBlock[] = [
    {
        image: listing_img,
        title: "Blue Star Ferries",
        rating: 4.5,
        reviewsCount: 1500,
        operatesIn: "Greece",
        countryCode: "GR",
        ferryTypes: "8 normal",
        vessels: 8,
        description: "Blue Star Ferries is one of the most prominent ferry operators in Greece, offering reliable and comfortable travel across the Aegean Sea. With a modern fleet of vessels, the company connects numerous islands and mainland destinations, ensuring passengers experience a seamless journey. Known for its punctuality and excellent customer service, Blue Star Ferries has become a trusted name for both locals and tourists. The company operates year-round, providing essential transportation services to remote islands and popular tourist destinations alike. Passengers can enjoy a range of amenities on board, including spacious seating, dining options, and entertainment facilities. Blue Star Ferries also prioritizes safety and environmental sustainability, adhering to strict standards to minimize its ecological footprint. Whether you're traveling for leisure or business, Blue Star Ferries offers a dependable and enjoyable way to explore the beauty of Greece.",
        popularVessels: ["Blue Horizon", "Blue Galaxy", "Diagoras"],
        ctaText: "Learn More About Blue Star Ferries"
    },
    {
        image: listing_img,
        title: "Hellenic Seaways",
        rating: 4.2,
        reviewsCount: 900,
        operatesIn: "Afghanistan",
        countryCode: "AF",
        ferryTypes: "5 high-speed, 7 normal",
        vessels: 12,
        description: "Hellenic Seaways is a leading ferry operator in Greece, renowned for its extensive network and high-speed vessels. The company connects the Greek islands with the mainland, offering passengers a convenient and efficient travel experience. With a fleet that includes both high-speed and conventional ferries, Hellenic Seaways caters to a wide range of travel needs. Passengers can expect comfortable seating, onboard dining, and friendly service throughout their journey. The company is committed to maintaining high safety standards and continuously invests in modernizing its fleet. Hellenic Seaways also plays a vital role in supporting local communities by facilitating trade and tourism. Whether you're planning a quick getaway or an extended island-hopping adventure, Hellenic Seaways provides a reliable and enjoyable way to explore the stunning landscapes of Greece.",
        popularVessels: ["Flyingcat 4", "Nissos Mykonos", "Hellenic Highspeed"],
        ctaText: "Explore Hellenic Seaways"
    },
    {
        image: listing_img,
        title: "Minoan Lines",
        rating: 4.3,
        reviewsCount: 1100,
        operatesIn: "Armenia",
        countryCode: "AM",
        ferryTypes: "4 luxury",
        vessels: 4,
        description: "Minoan Lines is synonymous with luxury and comfort, offering premium ferry services between Greece and Italy. The company is known for its state-of-the-art vessels, which feature elegant interiors, spacious cabins, and a wide range of amenities. Passengers can enjoy gourmet dining, shopping, and entertainment options while traveling across the Adriatic Sea. Minoan Lines is dedicated to providing an exceptional travel experience, making it a popular choice for both leisure and business travelers. The company's commitment to quality and customer satisfaction has earned it numerous awards and accolades. In addition to its passenger services, Minoan Lines also operates freight services, supporting trade and commerce between Greece and Italy. Whether you're embarking on a family vacation or a romantic getaway, Minoan Lines ensures a memorable journey with unparalleled comfort and style.",
        popularVessels: ["Knossos Palace", "Festos Palace", "Cruise Europa"],
        ctaText: "Discover Minoan Lines"
    },
    {
        image: listing_img,
        title: "Aegean Speed Lines",
        rating: 4.0,
        reviewsCount: 700,
        operatesIn: "Andorra",
        countryCode: "AD",
        ferryTypes: "3 high-speed",
        vessels: 3,
        description: "Aegean Speed Lines specializes in high-speed ferry services to the Cyclades, offering passengers a fast and efficient way to travel between islands. The company is known for its modern fleet, which combines speed with comfort to ensure a pleasant journey. Passengers can enjoy comfortable seating, air-conditioned interiors, and onboard refreshments during their trip. Aegean Speed Lines is committed to providing reliable and punctual services, making it a trusted choice for both locals and tourists. The company's focus on customer satisfaction is evident in its friendly staff and well-maintained vessels. Whether you're planning a day trip or an extended island-hopping adventure, Aegean Speed Lines offers a convenient and enjoyable way to explore the Cyclades. With its emphasis on speed, safety, and service quality, Aegean Speed Lines continues to set the standard for high-speed ferry travel in Greece.",
        popularVessels: ["Speedrunner III", "Speedrunner IV", "Speedrunner V"],
        ctaText: "Check Aegean Speed Lines"
    },
    {
        image: listing_img,
        title: "SeaJets",
        rating: 3.8,
        reviewsCount: 800,
        operatesIn: "Aruba",
        countryCode: "AW",
        ferryTypes: "10 high-speed",
        vessels: 10,
        description: "SeaJets operates one of the largest high-speed ferry fleets in Greece, connecting popular destinations with quick and reliable service. The company is known for its extensive network, which includes routes to the Cyclades, Crete, and other major islands. SeaJets' modern vessels are designed for speed and comfort, featuring spacious seating, air-conditioned interiors, and onboard amenities. Passengers can enjoy a smooth and efficient travel experience, whether they're heading to a remote island or a bustling tourist hotspot. SeaJets is committed to safety and environmental sustainability, implementing measures to reduce its ecological impact. The company's dedication to innovation and customer satisfaction has made it a popular choice for travelers seeking a fast and convenient way to explore Greece. With its impressive fleet and comprehensive route network, SeaJets continues to play a vital role in Greece's maritime transportation industry.",
        popularVessels: ["WorldChampion Jet", "Tera Jet", "Power Jet"],
        ctaText: "View SeaJets Services"
    },
];