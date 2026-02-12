# Character Counter Lab

An interactive character counter application that demonstrates state management and event handling in React. The application allows users to input text and see real-time statistics about their input, including character count, word count, and reading time. It focuses on state management, event handling, and component interaction using React hooks.

## Features
* **Real-time Analysis**: Instantly calculates character count, word count, and estimated reading time as you type.

* **Word Limit Feedback**: Visual indicators (Green/Red) when the text exceeds the specific word limit.

* **Conditional Rendering**: Hides the "Reading Time" card if disabled via props.

* **Responsive UI**: Styled with Tailwind CSS for a clean, mobile-friendly interface.

## Tech Stack
* React 
* TypeScript
* Vite 

## Installation & Setup 

1. **Fork the Repository**
   Click the **Fork** button in the top-right corner of this page to create a copy of this repository in your own GitHub account.


2. **Clone your Fork**

  bash 
  git clone https://github.com/YOUR-USERNAME/character-counter.git

2. **Install dependencies:**

  bash
  cd character-counter 
  or 
  ls 
  then 
  cd theFolderName
  + 
  npm ci


3. **Start the development server:**

    bash
    npm run dev

4. **Open in Browser:** 

    Navigate to the URL shown in the terminal 
    ```
    http: //localhost: 5173


## 📂 Project Structure

```text
src/
├── components/
│   ├── CharacterCounter/   # Parent component (manages State & Logic)
│   ├── StatsDisplay/       # Display component (Conditional Rendering)
│   └── TextInput/          # Input component (Event Handling)
├── types/
│   └── index.ts            # TypeScript interfaces (Prop definitions)
└── App.tsx                 # Entry point




