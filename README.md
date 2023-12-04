# PhotoSearch App

## About
PhotoSearch is a dynamic web application that allows users to explore and search for high-quality images. It interfaces with the Unsplash API to fetch and display images based on user-defined tags as search criteria.

### Features
- **Trending Page**: A dedicated page that displays trending photos.
- **Tag Page**: Allows users to search for photos by tags. Users can enter a tag to view all relevant photos associated with that particular tag.

## Getting Started

Follow these instructions to set up the PhotoSearch app on your local machine for development and testing purposes.

### Prerequisites
Before you begin, ensure you have the following installed:
- Node.js (v20) and npm (v10)

### Installation

1. **Clone the Repository**
   
   Clone the project to your local machine. Open your terminal and run:

   ```bash
   git clone https://github.com/alejandrogh97/unsplash-app.git
   ```

2. **Navigate to the Project Directory**

   After cloning, move into the project directory:

   ```bash
   cd unsplash-app
   ```

3. **Install Dependencies**

   Install the necessary npm packages:

   ```bash
   npm install
   ```

4. **Environment Setup**

   Create a `.env` file in the root directory of the project and add the Unsplash API token:

   ```
   VITE_UNSPLASH_API_TOKEN=Your_Unsplash_API_Key_Here
   ```

   Replace `Your_Unsplash_API_Key_Here` with your actual API key from Unsplash.

### Running the Application

Once the setup is complete, you can start the application by running:

```bash
npm run dev
```

This will launch the app in development mode. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.
