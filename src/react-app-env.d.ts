/// <reference types="react-scripts" />

interface Book {
    id: string;
    createdAt: string;
    title: string;
    publisher: string;
    price: string;
    image?: string;
    author: string;
}

interface BookFormData {
    createdAt: string | null;
    title: string;
    publisher: string;
    price: string;
    image?: string;
    author: string;
}
