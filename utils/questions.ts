import type { Question } from "~/typings/types";

export const questions: Question[] = [
    {
      text: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: 0, // Index of 'Paris'
    },
    {
      text: "Which element has the chemical symbol 'O'?",
      options: ["Gold", "Oxygen", "Silver", "Iron"],
      correctAnswer: 1, // Index of 'Oxygen'
    },
    {
      text: "What year did the Titanic sink?",
      options: ["1912", "1905", "1898", "1923"],
      correctAnswer: 0, // Index of '1912'
    },
    {
      text: "Who wrote 'Macbeth'?",
      options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
      correctAnswer: 0, // Index of 'William Shakespeare'
    }
  ];