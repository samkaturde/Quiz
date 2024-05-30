# Quiz-App

This is a simple Quiz application built with React for the frontend and Node.js for the backend. The application presents a series of Yes/No questions to the user, calculates the score based on their answers, and displays the score along with the average score of all runs.

## Features

- Presents a list of Yes/No questions to the user.
- Calculates the score based on the number of "Yes" answers.
- Displays the user's score for the current run.
- Displays the average score for all runs.
- Stores scores persistently using `node-persist`.

## Installation

### Prerequisites

- Node.js (v14 or higher recommended)
- npm (v6 or higher recommended)

### Clone the Repository

```sh
git clone https://github.com/samkaturde/Quiz.git
cd Quiz-App

cd backend
npm install

cd frontend
npm install

# Make sure you are in the backend directory and start the server:
node server.js

# Open another terminal, navigate to the frontend directory, and start the React development server:
npm start

The application will start running on http://localhost:3000


