import { DetailedImageProps, UtilitiesProp } from "../types";
import { images } from "../assets/images";

export const data = [
    {
        id: 1,
        image: images.hotel1,
        name: "The Aston Vill Hotel",
        rating: "5.0",
        address: "Alice Springs NT 0870, Australia",
        price: 200
    },
    {
        id: 2,
        image: images.hotel2,
        name: "The Aston Vill Hotel",
        rating: "5.0",
        address: "Alice Springs NT 0870, Australia",
        price: 150
    },
    {
        id: 3,
        image: images.hotel3,
        name: "The Aston Vill Hotel",
        rating: "5.0",
        address: "Alice Springs NT 0870, Australia",
        price: 30
    },
    {
        id: 4,
        image: images.hotel4,
        name: "The Aston Vill Hotel",
        rating: "5.0",
        address: "Alice Springs NT 0870, Australia",
        price: 75
    },
    {
        id: 5,
        image: images.hotel4,
        name: "The Aston Vill Hotel",
        rating: "5.0",
        address: "Alice Springs NT 0870, Australia",
        price: 75
    },
    {
        id: 6,
        image: images.hotel4,
        name: "The Aston Vill Hotel",
        rating: "5.0",
        address: "Alice Springs NT 0870, Australia",
        price: 75
    },
    {
        id: 7,
        image: images.hotel4,
        name: "The Aston Vill Hotel",
        rating: "5.0",
        address: "Alice Springs NT 0870, Australia",
        price: 75
    },
];

export const popular = [
    {
        id: 1,
        image: images.hotel6,
        price: 45,
        address: "Alice Springs NT 0870, Australia",
        name: "The Aston Vill Hotel",
        rating: "5.0"
    },
    {
        id: 2,
        image: images.hotel5,
        price: 35,
        address: "Alice Springs NT 0870, Australia",
        name: "The Aston Vill Hotel",
        rating: "5.0"
    },
    {
        id: 3,
        image: images.hotel4,
        price: 85,
        address: "Alice Springs NT 0870, Australia",
        name: "The Aston Vill Hotel",
        rating: "5.0"
    },
    {
        id: 4,
        image: images.hotel3,
        price: 150,
        address: "Alice Springs NT 0870, Australia",
        name: "The Aston Vill Hotel",
        rating: "5.0"
    }
]

export const imagesData: DetailedImageProps = [
    { id: 1, image: images.hotel1 },
    { id: 2, image: images.hotel2 },
    { id: 3, image: images.hotel3 },
    { id: 4, image: images.hotel4 },
    { id: 5, image: images.hotel5 },
    //   { id: 6, image: images.hotel6 },
];

export const utilities: UtilitiesProp = [
    { id: 1, name: "wifi", type: "utility" },
    { id: 2, name: "breakfast", type: "service" },
    { id: 3, type: "rating", name: "5.0" },
];

export const description = {
    descExcert: "Aston Hotel, Alice Springs NT 0870, Australia is a modern hotel. elegant 5 star hotel overlooking the sea. perfect for a romantic, charming",
    mainContent: "lorem Aston Hotel, Alice Springs NT 0870, Australia is a modern hotel. elegant 5 star hotel overlooking the sea. perfect for a romantic, charming lorem, ipsum. Dolor something around the corner says I should be watching a movies right now."
}