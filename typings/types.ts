export type Player = {
    id: number;
    name: string;
    image: string;
};

export type Question = {
    text: string;
    options: string[];
    correctAnswer: number;
 };