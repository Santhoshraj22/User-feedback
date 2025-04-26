# User Feedback Application

This is a simple React-based user feedback application where users can submit their feedback, and view all submitted feedbacks. It uses a Node.js/Express backend (not included here) and MongoDB for data storage.

# Features

- Submit feedback (Name, Email, Message)
- View list of submitted feedbacks
- Real-time feedback list updates after submission
- Toast notifications for success and error messages
- Navigation between form and feedback list
- Responsive and user-friendly UI

# Tech Stack

- **Frontend**: React.js, Axios, React Router, Toastify
- **Backend** : Node.js, Express
- **Database** : MongoDB

---

 💻 How to Run the User Feedback Application Locally

This guide will help you set up and run the project on your local machine from scratch.

 🔧 Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js & npm](https://nodejs.org/) (v14 or higher)
- [Git]

 1. Clone the Repository

Open your terminal and run: (Frot End)

```bash
git clone https://github.com/Santhoshraj22/User-feedback.git
cd User-feedback

2. Install Project Dependencies
npm install

 3. Run the Application (for Frontend)
npm run dev 


Open your terminal and run: (Back End)

 Prerequisites

 [Node.js & npm](https://nodejs.org/)
 [MongoDB](https://www.mongodb.com/try/download/community) (or use MongoDB Atlas for online database)

git clone https://github.com/Santhoshraj22/User-feedback.git
cd User-feedback/backend

2. Install Backend Dependencies
This installs the required packages like:

Express
Mongoose (for MongoDB)
Cors
Body-parser
dotenv

3. Database Setup (MongoDB)
Install MongoDB Community Server MongoDB Atlas (online cloud database)
Create a free account at MongoDB Atlas
Create a cluster and get a connection

4. Configure Environment Variables
PORT=5000
MONGO_URI=mongodb://localhost:27017/feedbackDB

5. Start the Backend Server
npm start
✅ Server will run at http://localhost:5000



