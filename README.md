

# Chrome Extension - Time Tracker  

The Time Tracker Chrome Extension is a productivity tool designed to help users monitor and analyze the time spent on various websites. This application provides valuable insights into browsing habits, enabling better time management through detailed logs and visualizations.

## Features  
- Logs time spent on each website.  
- Displays logs in a dynamic table.  
- Visualizes data with a pie chart for easy analysis.  
- Backend powered by Node.js and MongoDB for data storage.  
- Frontend integrated into `index.html` for seamless display.  

## Technologies Used  
- **Frontend**: HTML, CSS, JavaScript, Chart.js  
- **Backend**: Node.js, Express.js, MongoDB  
- **Chrome Extension**: Content Scripts, Background Scripts, Manifest v3  

## How It Works  
1. The extension tracks active tab URLs and usage time.  
2. Logs are saved in MongoDB through API endpoints.  
3. A dynamic dashboard displays the data with charts for analysis.  

## Installation  
1. Clone the repository:  
   ```bash  
   git clone https://github.com/BhavanaRangarao19/CHROME_EXTENSION_TIME_TRACKER-4.git  
   ```  
2. Navigate to the directory and install dependencies:  
   ```bash  
   cd time-tracker-extension  
   npm install  
   ```  
3. Start the backend server:  
   ```bash  
   node server.js  
   ```  
4. Load the extension in Chrome:  
   - Open Chrome → Extensions → Load unpacked.  
   - Select the `extension` folder.  

## API Endpoints  
- **GET `/api/logs`**: Fetch all logs.  
- **POST `/api/logs`**: Save a new log entry.  

## License  
This project is licensed under the MIT License.  

## Screenshots:

![Image](https://github.com/user-attachments/assets/1d28f86b-40df-478e-a33a-f86a60f27710)
![Image](https://github.com/user-attachments/assets/ac9274fa-0180-4103-acbc-87559e4004a4)
![Image](https://github.com/user-attachments/assets/4716e4e9-bc93-4da2-afae-baa4d4b6ebc8)
![Image](https://github.com/user-attachments/assets/49ad4975-79f0-4415-8aff-09c544bed585)
