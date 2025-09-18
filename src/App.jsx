import { Typewriter, TextSlider } from './components/text/TR';

function App() {
       return (
              <>
                     <h1>Text Writer </h1>
                     <hr />
                     <div style={{ paddingBlock: "1rem" }}></div>
                     <Typewriter
                            texts={
                                   [
                                          "Type Writer",
                                          "Text Slider",
                                          "Front-End Developer"
                                   ]
                            }
                            // if not set 'deletingSpeed' or 'typingSpeed' , created random number
                            typingSpeed={50}
                            deletingSpeed={50}
                            delay={1000}
                            pointer={true}
                     />
                     <div style={{ paddingBlock: "1rem" }}></div>
                     <h1>Text Slider </h1>
                     <hr />
                     <div style={{ paddingBlock: "1rem" }}></div>
                     <TextSlider
                            texts={
                                   [
                                          "Type Writer",
                                          "Text Slider",
                                          "Front-End Developer"
                                   ]
                            }
                            duration={2500}
                     />
              </>
       )
}

export default App
