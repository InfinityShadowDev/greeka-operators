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
        rating: 4,
        reviewsCount: 1200,
        operatesIn: "Greece",
        countryCode: "GR",
        ferryTypes: "8 normal",
        vessels: 8,
        description: "Blue Star Ferries is one of the most renowned ferry operators in Greece, offering reliable and comfortable travel across the Aegean Sea. With a fleet of modern vessels, they connect numerous islands and mainland destinations, making them a preferred choice for both locals and tourists. Their services are known for punctuality, safety, and excellent onboard amenities, ensuring a pleasant journey for passengers. Whether you're traveling for leisure or business, Blue Star Ferries provides a seamless experience with spacious seating, dining options, and friendly staff. The operator is committed to sustainability and innovation, continuously improving their fleet to meet environmental standards. Popular routes include connections to iconic destinations like Piraeus, Paros, and Naxos, allowing travelers to explore the beauty of the Greek islands effortlessly. With over 1200 positive reviews and a strong reputation, Blue Star Ferries stands out as a trusted name in maritime transportation. Their dedication to customer satisfaction and operational excellence has earned them a loyal customer base. Whether you're planning a short trip or an extended island-hopping adventure, Blue Star Ferries ensures a memorable and enjoyable journey. Discover the charm of Greece with one of the most popular ferry operators in the region.",
        popularVessels: ["Piraeus", "Paros", "Naxos"],
        ctaText: "About Blue Star Ferries"
    },
    {
        image: listing_img,
        title: "Blue Star Ferries",
        rating: 4,
        reviewsCount: 1200,
        operatesIn: "Greece",
        countryCode: "GR",
        ferryTypes: "8 normal",
        vessels: 8,
        description: "Blue Star Ferries is one of the most renowned ferry operators in Greece, offering reliable and comfortable travel across the Aegean Sea. With a fleet of modern vessels, they connect numerous islands and mainland destinations, making them a preferred choice for both locals and tourists. Their services are known for punctuality, safety, and excellent onboard amenities, ensuring a pleasant journey for passengers. Whether you're traveling for leisure or business, Blue Star Ferries provides a seamless experience with spacious seating, dining options, and friendly staff. The operator is committed to sustainability and innovation, continuously improving their fleet to meet environmental standards. Popular routes include connections to iconic destinations like Piraeus, Paros, and Naxos, allowing travelers to explore the beauty of the Greek islands effortlessly. With over 1200 positive reviews and a strong reputation, Blue Star Ferries stands out as a trusted name in maritime transportation. Their dedication to customer satisfaction and operational excellence has earned them a loyal customer base. Whether you're planning a short trip or an extended island-hopping adventure, Blue Star Ferries ensures a memorable and enjoyable journey. Discover the charm of Greece with one of the most popular ferry operators in the region.",
        popularVessels: ["Piraeus", "Paros", "Naxos"],
        ctaText: "About Blue Star Ferries"
    },
    {
        image: listing_img,
        title: "Blue Star Ferries",
        rating: 4,
        reviewsCount: 1200,
        operatesIn: "Greece",
        countryCode: "GR",
        ferryTypes: "8 normal",
        vessels: 8,
        description: "Blue Star Ferries is one of the most renowned ferry operators in Greece, offering reliable and comfortable travel across the Aegean Sea. With a fleet of modern vessels, they connect numerous islands and mainland destinations, making them a preferred choice for both locals and tourists. Their services are known for punctuality, safety, and excellent onboard amenities, ensuring a pleasant journey for passengers. Whether you're traveling for leisure or business, Blue Star Ferries provides a seamless experience with spacious seating, dining options, and friendly staff. The operator is committed to sustainability and innovation, continuously improving their fleet to meet environmental standards. Popular routes include connections to iconic destinations like Piraeus, Paros, and Naxos, allowing travelers to explore the beauty of the Greek islands effortlessly. With over 1200 positive reviews and a strong reputation, Blue Star Ferries stands out as a trusted name in maritime transportation. Their dedication to customer satisfaction and operational excellence has earned them a loyal customer base. Whether you're planning a short trip or an extended island-hopping adventure, Blue Star Ferries ensures a memorable and enjoyable journey. Discover the charm of Greece with one of the most popular ferry operators in the region.",
        popularVessels: ["Piraeus", "Paros", "Naxos"],
        ctaText: "About Blue Star Ferries"
    },
    {
        image: listing_img,
        title: "Blue Star Ferries",
        rating: 4,
        reviewsCount: 1200,
        operatesIn: "Greece",
        countryCode: "GR",
        ferryTypes: "8 normal",
        vessels: 8,
        description: "Blue Star Ferries is one of the most renowned ferry operators in Greece, offering reliable and comfortable travel across the Aegean Sea. With a fleet of modern vessels, they connect numerous islands and mainland destinations, making them a preferred choice for both locals and tourists. Their services are known for punctuality, safety, and excellent onboard amenities, ensuring a pleasant journey for passengers. Whether you're traveling for leisure or business, Blue Star Ferries provides a seamless experience with spacious seating, dining options, and friendly staff. The operator is committed to sustainability and innovation, continuously improving their fleet to meet environmental standards. Popular routes include connections to iconic destinations like Piraeus, Paros, and Naxos, allowing travelers to explore the beauty of the Greek islands effortlessly. With over 1200 positive reviews and a strong reputation, Blue Star Ferries stands out as a trusted name in maritime transportation. Their dedication to customer satisfaction and operational excellence has earned them a loyal customer base. Whether you're planning a short trip or an extended island-hopping adventure, Blue Star Ferries ensures a memorable and enjoyable journey. Discover the charm of Greece with one of the most popular ferry operators in the region.",
        popularVessels: ["Piraeus", "Paros", "Naxos"],
        ctaText: "About Blue Star Ferries"
    },
    {
        image: listing_img,
        title: "Blue Star Ferries",
        rating: 4,
        reviewsCount: 1200,
        operatesIn: "Greece",
        countryCode: "GR",
        ferryTypes: "8 normal",
        vessels: 8,
        description: "Blue Star Ferries is one of the most renowned ferry operators in Greece, offering reliable and comfortable travel across the Aegean Sea. With a fleet of modern vessels, they connect numerous islands and mainland destinations, making them a preferred choice for both locals and tourists. Their services are known for punctuality, safety, and excellent onboard amenities, ensuring a pleasant journey for passengers. Whether you're traveling for leisure or business, Blue Star Ferries provides a seamless experience with spacious seating, dining options, and friendly staff. The operator is committed to sustainability and innovation, continuously improving their fleet to meet environmental standards. Popular routes include connections to iconic destinations like Piraeus, Paros, and Naxos, allowing travelers to explore the beauty of the Greek islands effortlessly. With over 1200 positive reviews and a strong reputation, Blue Star Ferries stands out as a trusted name in maritime transportation. Their dedication to customer satisfaction and operational excellence has earned them a loyal customer base. Whether you're planning a short trip or an extended island-hopping adventure, Blue Star Ferries ensures a memorable and enjoyable journey. Discover the charm of Greece with one of the most popular ferry operators in the region.",
        popularVessels: ["Piraeus", "Paros", "Naxos"],
        ctaText: "About Blue Star Ferries"
    },
];
