# To-Do List Application

A modern, responsive To-Do List application built with React and Vite. This application allows you to manage your daily tasks with a clean and intuitive interface.

## Features

- ✅ **Add Tasks** - Create new to-do items quickly
- ✅ **Delete Tasks** - Remove tasks you no longer need
- ✅ **Toggle Completion** - Mark tasks as complete or incomplete
- ✅ **Edit Tasks** - Inline editing for easy task updates
- ✅ **Local Storage** - Your tasks are automatically saved to your browser's local storage
- ✅ **Task Counter** - See how many tasks you have remaining
- ✅ **Keyboard Shortcuts** - Press Enter to add or save tasks
- ✅ **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices

## Technologies Used

- **React 19.1.1** - UI library
- **Vite 7.1.7** - Build tool and development server
- **Tailwind CSS 4.1.14** - Utility-first CSS framework
- **ESLint** - Code linting

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd "To-Do List"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

### Building for Production

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

### Linting

Run ESLint to check for code issues:
```bash
npm run lint
```

## Usage

1. **Adding a Task**: Type your task in the input field and click "Add" or press Enter
2. **Completing a Task**: Click the checkbox next to a task to mark it as complete
3. **Editing a Task**: Click the ✏️ icon next to a task to edit it inline
4. **Saving Edits**: Click "Save" or press Enter while editing
5. **Deleting a Task**: Click the "X" button to remove a task

## Project Structure

```
To-Do List/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── App.jsx          # Main application component
│   ├── App.css          # Application styles
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── eslint.config.js     # ESLint configuration
├── index.html           # HTML template
├── package.json         # Project dependencies
├── vite.config.js       # Vite configuration
└── README.md           # This file
```

## Key Features Implementation

- **Local Storage Persistence**: Tasks are automatically saved to `localStorage` and persist across browser sessions
- **State Management**: Uses React hooks (`useState`, `useEffect`, `useRef`) for state management
- **Responsive Design**: Built with Tailwind CSS for a mobile-first, responsive layout
- **Accessibility**: Proper keyboard navigation and disabled states during editing

## License

This project is private and for personal use.

## Author

Created as a React learning project.
