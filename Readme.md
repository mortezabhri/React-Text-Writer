# Text Writer (React Component + React CSS Module )

### A simple React component that simulates text being typed out in the browser.

[View Demo](https://text-writer.mbahri.ir/)

### Text Writer :

![Demo](https://mbahri.ir/portfolio-implemented/text-writer/text-writer-1.gif)


---

### how to use it : 

```jsx

<Typewriter
       texts={
              [
                     "Type Writer",
                     "Text Slider",
                     "Front-End Developer"
              ]
       }
       typingSpeed={50}
       deletingSpeed={50}
       delay={1000}
       pointer={true}
/>

```

### Props :

- texts (Required) : Pass your sentences as an array
- typingSpeed (Optional) : Typing speed (random / YourNumber)
- deletingSpeed (Optional) : Deleting speed (random / YourNumber)
- delay (Optional) : Delay before showing the next sentence after deletion (1000ms / YourNumber)
- pointer (Optional) : Show cursor (default: true)


&ensp; 
---

&ensp; 
&ensp; 
&ensp; 

# NEW FEATURE : Text Slider

### Text Slider :

![Demo](https://mbahri.ir/portfolio-implemented/text-writer/text-slider.gif)

---

### how to use it : 

```jsx

<TextSlider
       texts={
              [
                     "Type Writer",
                     "Text Slider",
                     "Front-End Developer"
              ]
       }
       duration={2500}
       childStyle={
              {
                     backgroundColor : "#ccc"
              }
       }
/>

```

### Props :

- texts (Required) : Pass your sentences as an array
- duration (Optional) : Text display duration (1500ms / YourNumber)
- childStyle (Optional) : Style for each sentence 



---

### Requirements

- React js V14 or above
- Vite (optional) 

---

### Features

- Fully open-source
- Simulates text typing with adjustable delay
- Supports text deletion (typing + deleting)
- Easy to integrate into React projects
