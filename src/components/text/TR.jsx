import { useState, useEffect, useRef, memo } from "react";
import styles from "./tr.module.css";

export const Typewriter = memo(({ texts, typingSpeed = 0, deletingSpeed = 0, delay = 1000, pointer = true }) => {
       const [index, setIndex] = useState(0);
       const [subIndex, setSubIndex] = useState(0);
       const [deleting, setDeleting] = useState(false);

       useEffect(() => {
              if (!texts || texts.length === 0) return;

              if (subIndex === texts[index].length + 1 && !deleting) {
                     setTimeout(() => setDeleting(true), delay);
                     return;
              }

              if (subIndex === 0 && deleting) {
                     setDeleting(false);
                     setIndex((prev) => (prev + 1) % texts.length);
                     return;
              }

              if (deletingSpeed === 0) {
                     deletingSpeed = Math.floor(Math.random() * 100)
              }
              if (typingSpeed === 0) {
                     typingSpeed = Math.floor(Math.random() * 100)
              }

              const timeout = setTimeout(() => {
                     setSubIndex((prev) => prev + (deleting ? -1 : 1));
              }, deleting ? deletingSpeed : typingSpeed);

              return () => clearTimeout(timeout);
       }, [subIndex, deleting, texts, index, typingSpeed, deletingSpeed, delay]);

       return (
              <span>
                     <span> {texts[index].substring(0, subIndex)}</span>
                     <span className={`${styles.slideIn} ${pointer ? styles.vv : styles.vh}`}>|</span>
              </span>
       );
})


export const TextSlider = memo(({ texts = null, duration = 1500, childStyle = null }) => {

       const allItems = useRef(null);
       const index = useRef(0);

       if (duration < 600) {
              duration = 600
              console.warn("WARNING : YOU SHOULDN'T GIVE ME ANYTHING LESS THAN 500.")
       }
       if (!texts || texts.length === 0) {
              console.error("ERROR : YOU ARE GIVE ME A NULL VALUE !!")
              return;
       }
       if (texts.length === 1) {
              console.error("ERROR : YOU SHOULD GIVE ME ANYTHING MORE OF ONE ELEMENT")
              return;
       }

       function showText() {
              const textElements = [...allItems.current.children];
              //remove all classes (active & exit)
              textElements.forEach(t => t.classList.remove(styles.active, styles.exit));
              //active text to view port
              textElements[index.current].classList.add(styles.active);
              // exit text from view port
              setTimeout(() => {
                     textElements[index.current].classList.remove(styles.active);
                     textElements[index.current].classList.add(styles.exit);
              }, 200);
              //changing texts
              index.current = (index.current + 1) % textElements.length
       }

       useEffect(() => {
              showText();
              setInterval(showText, duration);
       }, []);

       return (
              <div className={styles.box} ref={allItems}>
                     {
                            texts.map((item, i) => (
                                   <div
                                          key={i}
                                          className={`${styles.text} ${i === 0 && styles.active}`}
                                          style={childStyle}
                                   >
                                          {item}
                                   </div>
                            ))
                     }
              </div>
       );
})

