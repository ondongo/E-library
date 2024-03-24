import { books } from "@/data/fakedatas";
import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import BookCard from "./BookCard";
import styles from "./page.module.css";

function BookList() {
  return (
    <Flex direction={"column"} gap={"15px"}>
      <Flex
        color="#0F0F10"
        fontFamily="Inter"
        fontSize="23.005px"
        fontStyle="normal"
        fontWeight="500"
        lineHeight="20.704px"
      >
        Mes Livres
      </Flex>
      <div className={styles.grouper}>
        <ul className={styles.ulGroupStyle}>
          {books.map((book, i) => (
            <motion.li
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
                  coverImage={book.image}
                  description={book.description}
                />
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </Flex>
  );
}

export default BookList;
