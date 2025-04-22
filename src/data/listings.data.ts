import { StaticImageData } from 'next/image';
import listing_img from '@/assets/images/data_img_1.png';

export interface IListingBlock {
    image: string | StaticImageData;
    title: string;
    rating: number;
    reviewsCount: number;
    operatesIn: string;
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
        ferryTypes: "8 normal",
        vessels: 8,
        description: "Travel comfortably across the Aegean Sea with one of the most popular ferry operators.",
        popularVessels: ["Piraeus", "Paros", "Naxos"],
        ctaText: "About Blue Star Ferries"
    },
    {
        image: listing_img,
        title: "Blue Star Ferries",
        rating: 4,
        reviewsCount: 1200,
        operatesIn: "Greece",
        ferryTypes: "8 normal",
        vessels: 8,
        description: "Travel comfortably across the Aegean Sea with one of the most popular ferry operators.",
        popularVessels: ["Piraeus", "Paros", "Naxos"],
        ctaText: "About Blue Star Ferries"
    },
    {
        image: listing_img,
        title: "Blue Star Ferries",
        rating: 4,
        reviewsCount: 1200,
        operatesIn: "Greece",
        ferryTypes: "8 normal",
        vessels: 8,
        description: "Travel comfortably across the Aegean Sea with one of the most popular ferry operators.",
        popularVessels: ["Piraeus", "Paros", "Naxos"],
        ctaText: "About Blue Star Ferries"
    },
    {
        image: listing_img,
        title: "Blue Star Ferries",
        rating: 4,
        reviewsCount: 1200,
        operatesIn: "Greece",
        ferryTypes: "8 normal",
        vessels: 8,
        description: "Travel comfortably across the Aegean Sea with one of the most popular ferry operators.",
        popularVessels: ["Piraeus", "Paros", "Naxos"],
        ctaText: "About Blue Star Ferries"
    },
];
