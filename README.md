# Coffee Translates

## Project Overview

Team Name : Codekaar
Team Members: Mayank Sahu, Shivi Tiwari, Diya Verma, Yashvardhan Sharma.

The **Coffee Translates** is a web application designed to streamline the process of creating multilingual blogs. The platform allows users to input text and video content, automatically transcribe videos to text, edit them on the go and translate content into 10 regional Indian languages, and publish SEO-optimized blogs.

### Objective
To provide a seamless and efficient way for users to create, translate, and publish blogs in multiple languages, promoting accessibility and inclusivity in content creation.

### Technology Stack
- **Frontend**: Next.js, TypeScript
- **Backend**: Node.js, REST APIs
- **AI Models**: Asembly AI, Llama 3.0, Groq , DataStax , OpenAI
- **Deployment**: Vercel, AWS
- **DataBase**: AstraDB , LangFlow

---

## Key Features

### Input Options
- **Text Input**:
  - Direct text input.
  - File uploads (.txt, .docx).
- **Video Input**:
  - Upload videos (.mp4, .mov) for transcription.
  - Speech-to-text conversion in English.

### Transcription
- AI-powered transcription of video content into English text.
- Review and edit transcription results before translation.

### Translation
- Translate English text into 10 regional Indian languages:
  - Hindi, Marathi, Gujarati, Tamil, Kannada, Telugu, Bengali, Malayalam, Punjabi, Odia.
- Ensure high accuracy using BLEU and ROUGE scores.

### Blog Publishing
- Generate SEO-optimized blog drafts for each language.
- Dynamic routing for language-specific URLs (e.g., `/blog-title-hindi`, `/blog-title-tamil`).
- Metadata, structured data, and language tags for search engine optimization.

### Dashboard Features
- User-friendly interface for:
  - Uploading and managing text and video content.
  - Reviewing and editing transcriptions and translations.
  - Managing published blogs (edit, delete, or update).
- Display translation accuracy metrics.
- Blog analytics (views, engagement metrics).

### Blog Portal
- Dedicated section for browsing blogs.
- Categories, tags, and filters for easier discovery.
- Multilingual support for readers.

---

## Technical Architecture

### High-Level Workflow
1. **Input Handling**:
   - Text and video files are uploaded via the dashboard.
2. **Transcription**:
   - Videos are transcribed into English text using AI models.
3. **Translation**:
   - English text is translated into 10 regional languages according to the user choice.
4. **Publishing**:
   - Translations are reviewed, edited, and published with dynamic URLs and SEO optimizations.

### Backend
- API endpoints handle:
  - File uploads.
  - Transcription and translation processes.
  - Blog publishing and management.

### Frontend
- Built with Next.js, TypeScript to leverage server-side rendering (SSR) for fast page loads and improved SEO.
- Intuitive UI for seamless user interaction.

### Third-Party Services
- **Google Speech-to-Text**: For video transcription.
- **AWS Translate**: For high-quality language translation.
- **OpenAI**: To enhance NLP capabilities.

---

## Success Metrics

### Accuracy
- Achieve ≥ 85% translation accuracy for all languages.

### Performance
- Transcription and translation completed within ≤ 10 seconds per language.

### Engagement
- Measure blog engagement through:
  - Unique visitors.
  - Language-based readership.
  - Average session duration.

### Usability
- Ensure a seamless workflow with an intuitive interface and minimal errors.

---

## Future Enhancements

### Scalability
- Expand support to additional languages and regions.

### Feature Upgrades
- Integrate sentiment analysis for blog content.
- Add support for live transcription and translation.

### AI Model Improvements
- Upgrade to more advanced transcription and translation models for better accuracy.

---

## Installation and Setup

### Prerequisites
- Node.js (v16 or above)
- npm or yarn

### Steps to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/blog-dashboard.git
   ```
2. Navigate to the project directory:
   ```bash
   cd blog-dashboard
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open the application in your browser:
   ```
   http://localhost:3000
   ```

---

## Acknowledgments
- DataStax for History saving.
- AWS Translate for multilingual translation capabilities.
- OpenAI for NLP enhancements.

---


