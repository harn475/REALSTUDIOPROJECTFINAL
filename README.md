# Link to final project 
https://harn475.github.io/REALSTUDIOPROJECTFINAL/

# Art by Rule – Interactive Drawing Instructions
<img width="420" alt="Screenshot 2025-02-21 at 5 31 52 PM" src="https://github.com/user-attachments/assets/d218fb27-ea3d-44b3-acb5-ee6e615c57e6" />

<img width="445" alt="Screenshot 2025-02-21 at 5 31 44 PM" src="https://github.com/user-attachments/assets/6edf1c3e-bd6a-4175-86ea-ccae853647d9" />

<img width="445" alt="Screenshot 2025-02-21 at 5 31 44 PM" src="https://github.com/user-attachments/assets/5d311956-cbe2-4a0c-9f9d-09af1b49ab6c" />

*(These images capture the initial sketches and brainstorming phase.)*

## Overview

This project embodies the concept of **“art by rule”**—a process where creativity is guided by a set of clear, predefined instructions. Users can explore four distinct sets of drawing instructions, each represented by a button that opens a separate repository. While this idea was partly inspired by conceptual artists who emphasize the power of instructions (like Sol LeWitt), the focus here is on how **coding and interactive design** can be leveraged to facilitate rule-based art in the browser.

## Project Highlights

1. **Four Repositories for Four Themes**  
   - **Creative**  
   - **Patient**  
   - **Minimal**  
   - **Conceptual**  
   
   Each theme has its own repository and unique p5.js sketch, allowing for easier maintenance, version control, and experimentation.

2. **Interactive Canvas**  
   - **p5.js** forms the backbone of the drawing experience, handling custom fonts, images, and user interactions.  
   - Hovering over a button changes the canvas background to match that theme’s mood.  
   - Clicking a button opens a new tab with detailed instructions (stored in a separate repo).

3. **Pop-Up Instructions**  
   A simple pop-up (using HTML and CSS) appears on load, guiding users on how to navigate the four themes and choose the instructions that resonate with them.

4. **Custom Fonts & Images**  
   - Each button is styled with a dedicated font to reinforce the unique feel of its theme.  
   - Background images are loaded for each theme, providing instant visual feedback on hover.

## Coding Process & Technical Details

- **p5.js Setup:**  
  - The `preload()` function loads custom fonts and background images.  
  - The `setup()` function initializes the canvas, pop-up instructions, and buttons.  
  - The `draw()` loop checks for button hover states to update the background image dynamically.

- **Button Creation:**  
  - Each button is styled and positioned in the `setup()` function, referencing unique fonts and a target URL.  
  - The mouse events (`mouseOver()`, `mouseOut()`, `mousePressed()`) control background switching and link navigation.

- **Project Structure:**  
  - **`index.html`** includes p5.js, the main sketch, and references to custom fonts.  
  - **`sketch.js`** holds the p5.js logic for the canvas and buttons.  
  - **`images/`** contains the theme-based background images.  
  - **Separate Repositories** house the individual instruction sets for each theme.

## Overcoming Challenges

Initially, integrating custom fonts, dynamic backgrounds, and interactive elements in p5.js was tricky. Two YouTube tutorials were especially helpful:

- [Intro to p5.js by ColorfulCoding](https://www.youtube.com/watch?v=gG7aq6ccR8Q&t=200s&ab_channel=ColorfulCoding)  
- [Drawing with p5.js – A Deeper Dive](https://youtu.be/0V3uYA1hafk?si=iRZteS8T9vaM0ugq)

These resources clarified how to load assets, handle mouse events, and structure the overall code. Through them, I resolved common pitfalls with asynchronous loading and styling in p5.js.

## How to Use This Project

1. **Clone or Download**  
   - Clone or download this repository and the four theme-specific repositories.
2. **Install p5.js**  
   - Ensure `p5.js` is accessible (either locally or via CDN in your `index.html`).
3. **Open `index.html`**  
   - Launch your preferred web browser and open the `index.html` file.  
   - A pop-up will appear, explaining how to interact with the canvas.
4. **Hover & Click**  
   - Hover over each button to see its background image preview.  
   - Click a button to open the corresponding drawing instructions in a new tab.

## Why “Art by Rule”?

By codifying the creative process into a set of **rules or instructions**, the project explores how **systematic constraints** can unlock new forms of expression. Each theme (Creative, Patient, Minimal, and Conceptual) showcases a different angle on how these rules can shape the artistic outcome—leading to diverse interpretations and final results.

## Future Directions

- **Enhanced User Input:**  
  Add text fields or sliders for users to modify parameters (e.g., stroke weight, color, or geometry).  
- **Collaboration:**  
  Invite others to add their own themes and instruction sets as separate repositories.  
- **Gallery of Outputs:**  
  Incorporate a gallery or screenshot tool to showcase how different users interpret the same instructions.
- **More Creativity in instructions:**
  I would like to really expand on my work by looking at creating a database of instructions, this would then align with my four chosen categories, providing the user with a new experience every time they chose a link. 

## Credits & Acknowledgments

- **p5.js** – The library that made this interactive canvas possible.  
- **Tutorial Creators** – Their videos demystified p5.js functionality.  
- **Conceptual Influence** – While this project takes cues from conceptual artists’ (Sol Lewitt) use of instructions, it focuses on the power of **coding and user interaction** to bring “art by rule” to life in the browser.

