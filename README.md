# Nasa-apod

This React application fetches and displays NASA's Astronomy Picture of the Day (APOD), including its description, using the NASA APOD API.

## Project Setup

1. **Clone the repository:** `git clone https://github.com/FunChosa/nasa-apod.git`
2. **Navigate to the project directory:** `cd nasa-apod`
3. **Install dependencies:** `npm install`
4. **Configure API Key:**  Set the `VITE_NASA_API_KEY` environment variable in your `vite.config.js` (or similar) with your NASA API key.  **Do not commit your API key to version control.** Example:
5. Start the development server: npm run dev

## Features
Displays Current APOD: Shows the current Astronomy Picture of the Day image and its description.

## Technology Stack
- React: ^18.3.1
- Vite: ^5.4.10
- fetch API
- CSS

## State Management
The application uses the useState hook to manage the application’s state, including the APOD data, loading status, and any error messages.

## API Interaction
The application fetches data from the NASA APOD API endpoint on initial load and caches the response in localStorage using the current date as a key. This improves performance by avoiding redundant API requests. Error handling is currently implemented by logging the error to the console.

## Image Display
The fetched APOD image is displayed using the standard < img > tag.

## Deployment
Deployed on Netlify: https://funchosa-nasa-apod.netlify.app

## Future Enhancements
Implement functionality to view past APODs.
Improve error handling to provide more informative messages to the user.
Enhance the user interface with styling and improved layout.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.