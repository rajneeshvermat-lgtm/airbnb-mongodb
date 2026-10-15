# Airbnb-Inspired Lodging Marketplace

A web application inspired by Airbnb that allows users to explore property listings, view home details, manage hosted properties, and add or remove favourite homes. Built using Node.js, Express.js, MongoDB, and EJS.

## Features

- Browse available homes and property listings
- View individual property details
- Add new home listings
- Edit existing home details
- Add homes to favourites
- Remove homes from favourites
- Server-side rendering using EJS templates
- Responsive user interface with CSS and Tailwind CSS

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Templating Engine:** EJS
- **Frontend:** HTML, CSS, Tailwind CSS
- **Development Tools:** npm, Nodemon

## Project Structure

```text
lec-16-airbnb-mongodb/
├── controllers/
├── data/
├── models/
├── public/
├── routes/
├── utils/
├── views/
├── app.js
├── nodemon.json
├── package.json
└── .gitignore
```

## Installation and Setup

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Navigate to the project folder

```bash
cd lec-16-airbnb-mongodb
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure MongoDB

Create a `.env` file in the project root and add your MongoDB connection string:

```env
MONGO_URL=your_mongodb_connection_string
```

Make sure your MongoDB database and network access are configured correctly.

Update your database connection code to read the environment variable using `process.env.MONGO_URL`. If needed, install and configure `dotenv` to load the `.env` file.

### 5. Run the application

```bash
npm start
```

Open your browser and visit:

http://localhost:3000

## Environment Variables

| Variable | Description |
|---|---|
| `MONGO_URL` | MongoDB connection string |

**Security:** Never commit your `.env` file, database password, or other secret credentials to GitHub.

## Future Improvements

- User authentication and authorization
- Property booking functionality
- Search and filtering options
- Image upload functionality
- User reviews and ratings

## Author

**Rajneesh Verma**

B.Tech Computer Science and Engineering Student

## License

This project is created for learning and educational purposes.
