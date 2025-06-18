# EduLearn Content Generator

EduLearn Content Generator is a web-based tool that helps educators create high-quality educational materials such as lesson plans, quizzes, and study guides tailored to specific topics and audiences. Powered by advanced AI language models, it generates clear, engaging, and informative content designed to support teaching and learning.

---

## Features

- Generate educational content based on topic, audience, and content type
- Supports lesson plans, quizzes, and study guides
- Interactive and easy-to-use web interface
- Download generated content as PDF
- Loading spinner for better user experience during generation

---

## Technologies Used

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express
- AI Integration: Gemini API (via OpenRouter)
- PDF Generation: jsPDF library

---

## Setup & Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Ditshego21/Educational-Generator-EduLearn.git
   cd edulearn-content-generator
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the root directory:

   ```
   GEMINI_API_KEY=your_gemini_api_key_here
   API_URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent
   PORT=3000
   ```

4. **Run the server**

   ```bash
   node server.js
   ```

5. **Open the app**

   Visit `http://localhost:3000` in your browser.

---

## Usage

1. Enter the topic you want to generate content for.
2. Specify the audience (e.g., Grade 8 learners).
3. Choose the content type: Lesson Plan, Quiz, or Study Guide.
4. Click **Generate** and wait for the AI to create your content.
5. Optionally, download the content as a PDF.

---

## Project Structure

```
/public
  ├── index.html
  ├── style.css
  └── script.js
/server
  └── server.js
.env
package.json
README.md
```

---

## Notes

- Ensure you have a valid Gemini API key and set it in the `.env` file.
- The project uses ES modules (`import/export`) syntax — run with Node.js v14+ or configure accordingly.
- The app currently supports only English content generation.

---

## License

MIT License © [Ditshego]

---

## Contact

If you have any questions or want to contribute, feel free to open an issue or submit a pull request!

---

*Happy teaching and learning!* 📚✨
