"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Editor, useDomValue } from "reactjs-editor";
import styles from "./book.module.css";
import { books } from "@/data/fakedatas";
import { Button, IconButton } from "@chakra-ui/react";
import { FaDownload, FaInfo, FaShare } from "react-icons/fa";

export default function BookPage() {
  const { id } = useParams();

  const { dom, setDom } = useDomValue();

  const selectedBook = books.filter((book, i) => {
    return id === String(book.id);
  });
  const notify = () => toast("Your changes has been saved!!");

  const handleSave = () => {
    const updatedDomValue = {
      key: dom?.key,
      props: dom?.props,
      ref: dom?.ref,
      type: dom?.type,
    };

    console.log("%j", updatedDomValue);
    localStorage.setItem(
      `dom${selectedBook[0].id}`,
      JSON.stringify(updatedDomValue)
    );
    notify();
  };

  useEffect(() => {
    const savedDom = localStorage.getItem(`dom${selectedBook[0].id}`);
    if (savedDom) {
      setDom(JSON.parse(savedDom));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!selectedBook.length) return <p>Book not found</p>;

  return (
    <motion.div
      transition={{ type: "spring", damping: 40, mass: 0.75 }}
      initial={{ opacity: 0, x: 1000 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <motion.section
        transition={{ type: "spring", damping: 44, mass: 0.75 }}
        initial={{ opacity: 0, y: -1000 }}
        animate={{ opacity: 1, y: 0 }}
        className={styles.appBar}
      >
       
        <div className={styles.title}>
          {" "}
          <h2 className={styles.titleStyles}> Temps de lecture : 00 H : 01 M : 50 S </h2>
        </div>
        <div className={styles.icons}>
          <Button className={styles.saveButton} onClick={handleSave}>
            Sauvegarder les modifications du livre
          </Button>

          <Button className={styles.saveButton} onClick={handleSave}>
            Marquer comme terminé
          </Button>

          <IconButton
            className={styles.saveButton}
            aria-label="Partager"
            icon={<FaDownload />}
          />

          <IconButton
            className={styles.saveButton}
            aria-label="Partager"
            icon={<FaShare />}
          />

          <IconButton
            className={styles.saveButton}
            aria-label="Partager"
            icon={<FaInfo />}
          />
        </div>
      </motion.section>
      
      <Editor
        /** htmlContent accepts only one element. Just wrap everything on one element **/
        htmlContent={`
        <div id="wrapper">
            <div id="container">
                <section class="open-book">
                    <header>
                        <h1 className="center">${selectedBook[0].title}</h1>
                        <span className="center small"> By ${selectedBook[0].author} </span>
                    </header>

                    <article>
                        <h2 class="chapter-title">${selectedBook[0].title}</h2>
                        ${selectedBook[0].content}
                    </article>
            <footer>
                <ol id="page-numbers">
                    <li>1</li>
                    <li>2</li>
                </ol>
            </footer>
        </section>
            </div>
        </div>
        `}
        colors={["green", "gold", "red", "blue"]}
      />

      <ToastContainer />
    </motion.div>
  );
}

const iconStyle = { marginRight: "20px", fontSize: "20px" };
