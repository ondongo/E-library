"use client";
import { Flex, Image, Text, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import BookCard from "./BookCard";
import styles from "./page.module.css";

export function BooksPopular() {
  return (
    <Flex>
      {booksPopular.map((book, i) => (
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", damping: 50, mass: 0.75 }}
          initial={{ opacity: 0, x: 200 * (i + 1) }}
          animate={{ opacity: 1, x: 0 }}
          key={i}
        >
          <a href={`/book/${book.id}`} style={{ textDecoration: "none" }}>
            <BookCard
              title={book.title}
              coverImage={book.imageSrc}
              description={book.author}
            />
          </a>
        </motion.div>
      ))}
    </Flex>
  );
}

// Assuming you have an array of book data
const booksPopular = [
  {
    id: 1,
    title: "The Subtle Art Of...",
    author: "Mark Manson",
    imageSrc: "Biblio/Livre1.png",
  },
  {
    id: 2,
    title: "Another Book Title",
    author: "Another Author",
    imageSrc: "Biblio/Livre2.png",
  },

  {
    id: 3,
    title: "Rich Father...",
    author: "Mark Manson",
    imageSrc: "Biblio/Livre3.png",
  },

];
