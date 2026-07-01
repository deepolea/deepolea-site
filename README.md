# DeepOlea Web Platform

DeepOlea is a technology company based in Gaziantep, Turkey, specializing in transforming artificial intelligence and machine learning into real-world IT solutions. 

This repository contains the source code for the DeepOlea corporate and academic portfolio website. It features a custom-built, lightweight internationalization (i18n) system, responsive design, and a clean architectural separation between commercial projects and academic research.

## 📂 Project Structure

The project follows a clean, modular folder structure to maintain the "Don't Repeat Yourself" (DRY) principle:

    deepolea/
    │
    ├── index.html              # Main landing page
    ├── js/
    │   └── main.js             # Centralized JavaScript (i18n, scroll animations, copy functions)
    ├── lang/
    │   ├── tr.json             # Turkish translation dictionary
    │   └── en.json             # English translation dictionary
    ├── lab/
    │   ├── index.html          # DeepOlea Lab (Academic Works & Papers)
    │   └── fisformer.html      # Academic Project detail page (e.g., FISformer)
    ├── projects/
    │   └── index.html          # Corporate & Commercial Projects
    └── images/                 # Global assets, logos, and project figures

## Key Features

* **Dynamic i18n (Bilingual Support):** Fully supports Turkish (TR) and English (EN). Translations are fetched asynchronously from JSON files, enabling instant language switching without page reloads. Language preferences are stored in the browser's `localStorage`.
* **FOUC Prevention:** Includes a custom CSS/JS fade-in mechanism to prevent the "Flash of Unstyled Content" (FOUC) during language loads, ensuring a smooth user experience.
* **DeepOlea Lab:** A dedicated sub-directory (`/lab`) showcasing academic research, published papers, and experimental deep learning models (e.g., FISformer), complete with BibTeX citation copy functionality.
* **Corporate Projects:** A separate sub-directory (`/projects`) strictly focused on commercial, AI-supported IT solutions.
* **Vanilla Stack:** Built with pure HTML, CSS, and Vanilla JavaScript. No heavy frameworks, ensuring lightning-fast load times and easy maintenance.

## How to Add a New Page or Project

1. **Create the HTML File:** Place the new HTML file in either the `/projects/` or `/lab/` folder depending on its context.
2. **Add the Script Tag:** Ensure the centralized `main.js` is linked at the bottom of the body. Since it's in a sub-folder, use the relative path:
    `<script src="../js/main.js"></script>`
3. **Use Data Attributes for Text:** Do not hardcode text. Use the `data-i18n` attribute for all text elements.
    `<h1 data-i18n="new_project_title">Default Title</h1>`
4. **Update JSON Dictionaries:** Add the corresponding key-value pairs to the bottom of both `lang/tr.json` and `lang/en.json`.
5. **Add Images:** Place all related `.jpg` or `.png` files into the root `/images/` folder and link them using `../images/filename.jpg`.

## While Testing

Due to the Fetch API used for the JSON translation files, this project must be run on a local web server (opening the HTML file directly via `file://` protocol will cause CORS errors for the language files). 

If you are using Visual Studio Code:
1. Install the **Live Server** extension.
2. Right-click `index.html` and select **"Open with Live Server"**.
3. The site will open at `http://127.0.0.1:5500`.

---
*© 2026 DeepOlea · [deepolea.com]*