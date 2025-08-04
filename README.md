# AI-Based Interview Prep App

This is an AI-powered application designed to help users prepare for technical interviews. It allows users to create custom mock interviews based on job roles, practice with AI-generated questions, and receive real-time, intelligent feedback on their performance. The application leverages the Google Gemini API for generating questions and providing detailed evaluations.

## ✨ Key Features

*   **Custom Mock Interviews**: Generate tailored interview sessions by providing a job position, description, required years of experience, and relevant tech stacks.
*   **AI-Generated Questions**: Utilizes the Google Gemini API to create a set of 5 relevant, high-quality technical questions and ideal answers based on your input.
*   **Interactive Practice Sessions**: Engage in a simulated interview environment with webcam support and voice-to-text functionality for answering questions.
*   **Real-time Feedback**: After each answer, the AI provides a rating (from 1 to 10) and constructive feedback by comparing your response to the ideal answer.
*   **Personalized Dashboard**: A central hub to manage all your mock interviews. View past sessions, start new ones, or review feedback.
*   **Detailed Feedback Reports**: Access a comprehensive breakdown of your performance for each interview, including an overall rating and question-by-question analysis of your answers, the expected answers, and AI feedback.
*   **Secure Authentication**: User accounts are managed securely with Clerk, ensuring that your interview data is private.
*   **Persistent Storage**: All interview data, user answers, and feedback are saved to Firebase Firestore, allowing you to track your progress over time.

## 🛠️ Tech Stack

*   **Frontend**: React, Vite, TypeScript
*   **UI/Styling**: Tailwind CSS, shadcn/ui, Lucide React
*   **AI Model**: Google Gemini API (`@google/genai`)
*   **Authentication**: Clerk
*   **Database**: Firebase Firestore
*   **Routing**: React Router
*   **Form Management**: React Hook Form with Zod for validation
*   **Speech Recognition**: `react-hook-speech-to-text`

## ⚙️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v18 or higher)
*   npm or yarn

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/mukulsharma1203/ai-based-interview-prep-app.git
    cd ai-based-interview-prep-app
    ```

2.  **Install NPM packages:**
    ```sh
    npm install
    ```

3.  **Set up environment variables:**

    Create a `.env` file in the root of the project and add the following keys. You will need to obtain these from their respective services (Clerk, Firebase, Google AI).

    ```env
    # Clerk
    VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

    # Firebase
    VITE_FIREBASE_API_KEY=your_firebase_api_key
    VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
    VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
    VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
    VITE_FIREBASE_APP_ID=your_firebase_app_id

    # Google Gemini
    VITE_GEMINI_API_KEY=your_gemini_api_key
    ```

4.  **Run the development server:**
    ```sh
    npm run dev
    ```

    The application will be available at `http://localhost:5173`.

## 🚀 How It Works

1.  **Authentication**: The user signs up or logs in using their Clerk account. User data is synced to a `users` collection in Firestore.
2.  **Dashboard**: The user lands on a dashboard displaying all previously created mock interviews.
3.  **Create an Interview**: The user can create a new mock interview by filling out a form with details like "Job Position," "Job Description," "Years of Experience," and "Tech Stacks."
4.  **AI Question Generation**: On form submission, a prompt is sent to the Google Gemini API. The AI generates a JSON array of 5 technical questions and their corresponding ideal answers, which are then stored in the `interviews` collection in Firestore.
5.  **Start Interview**: The user selects an interview to start. They are prompted to enable their webcam and microphone.
6.  **Answering Questions**: The user proceeds through the questions one by one. They can listen to the question being read out loud. To answer, they start recording, and their speech is converted to text in real-time.
7.  **AI Feedback Generation**: After submitting an answer, another prompt containing the question, the ideal answer, and the user's answer is sent to the Gemini API. The AI returns a rating and detailed feedback.
8.  **Save Answer**: The user can save their answer along with the AI-generated rating and feedback. This data is stored in the `userAnswers` collection in Firestore, linked to the specific interview and user.
9.  **Review Feedback**: After completing the interview, the user can navigate to the "Feedback" page. This page provides an overall rating for the interview and an accordion view to review each question, the user's answer, the correct answer, and the specific AI feedback.
