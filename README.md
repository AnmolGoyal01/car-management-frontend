
# Car Management Application

## Overview

This is a responsive Car Management System built using the MERN stack with TypeScript. The application allows users to manage their cars, view available listings, and perform CRUD operations. It also features secure authentication and a modern UI.

You can check out the live demo of the project [here](https://anmolgoyal-car-management.netlify.app/).

## Features

- **User Authentication**: Register, login, logout, password management.
- **Car Management:**: Users can add, update, and delete their car listings.
- **Car Listings**: Users can view all their cars along with other users' cars.
- **Responsive UI**: Fully responsive design for seamless access on all devices.


## Technologies Used

- **Frontend**: React, Vite, Typescript
- **State Management**: Redux Toolkit
- **Backend**: Node js
- **Routing**: React Router DOM
- **Styling**: TailwindCSS
- **Api Calls**: Axios

## Project Setup

1. **Clone the repository**:
   ```sh
   git clone https://github.com/AnmolGoyal01/car-management-frontend
   ```
2. **Navigate to the project directory**:
   ```sh
   cd car-management-frontend
   ```
3. **Install dependencies**:
   ```sh
   npm install
   ```
4. **Create a _redirects file**:
- In the public folder of the project, create a file named _redirects with the following content:
   ```sh
   /* /index.html 200
   ```
5. **Configure Vite**:
- configure vite.config file with the following code (if using my hosted backend on azure):

   ```sh
   import { defineConfig } from "vite";
  import react from "@vitejs/plugin-react";

  export default defineConfig({
    plugins: [react()],
    server: {
      proxy: {
        "/api": "https://anmol-car-management.azurewebsites.net",
      },
    },
  });

   ```
- configure vite.config file with the following code (if you are running my [backend server](https://github.com/AnmolGoyal01/car-management-backend) locally):

   ```sh
   import { defineConfig } from "vite";
  import react from "@vitejs/plugin-react";

  export default defineConfig({
    plugins: [react()],
    server: {
      proxy: {
        "/api": "http://localhost:4000",
      },
    },
  });

   ```

6. - **Run in Development:**:
   ```sh
   npm run dev
   ```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`VITE_API_URL`

## Author

- **Anmol Goyal:** [GitHub](https://github.com/Anmolgoyal01)

## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://anmolgoyal.me/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/anmol-goyal-358804235/)
[![twitter](https://img.shields.io/badge/github-010101?style=for-the-badge&logo=github&logoColor=white)](https://anmolgoyal.me/_next/static/media/github-icon.04fa7de0.svg)
