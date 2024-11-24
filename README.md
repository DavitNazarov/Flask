
# Flask-React Application

This project is a full-stack web application built with **Flask** for the backend and **React.js** (using Vite) for the frontend. The project demonstrates a simple integration of a Python-based API with a modern JavaScript framework.

## Project Structure

The project has two main directories:

- **`backend/`**: Contains the Flask API code.
- **`frontend/`**: Contains the React.js frontend application.

## Features

### Backend
- Built with Flask and supports CORS for cross-origin requests.
- Provides simple endpoints:
  - **`/`**: Returns a welcome message.
  - **`/api/data`**: Returns a JSON object with a custom message.

### Frontend
- Built with React.js and Vite for a fast and modern development experience.
- Contains components and routes to interact with the Flask API.

## Setup and Installation

### Backend

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install Python dependencies:
   ```bash
   pip install flask flask-cors
   ```
3. Run the Flask server:
   ```bash
   python app.py
   ```
   The server will run at `http://127.0.0.1:5000`.

### Frontend

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install Node.js dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   The frontend will run at `http://127.0.0.1:5173`.

## API Endpoints

| Endpoint       | Method | Description                  |
|----------------|--------|------------------------------|
| `/`            | GET    | Returns a welcome message.  |
| `/api/data`    | GET    | Returns a JSON response.    |

## How to Use

- Start the Flask backend server.
- Start the React.js frontend server.
- Access the frontend at the development server URL.
- Interact with the API via the frontend or directly through a tool like Postman or a browser.

## Contributing

Contributions are welcome! Feel free to fork this repository and create a pull request with improvements.

## License

This project is open-source and available under the [MIT License](LICENSE).
