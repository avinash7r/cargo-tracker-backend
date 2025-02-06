# Cargo Tracker Backend

## Environment Variables

Create a `.env` file in the root directory with the following variables:

| Variable Name | Description | Example Value |
|--------------|-------------|---------------|
| `PORT` | Port number the server will run on | `3000` |
| `MONGODB_URL` | Connection string for MongoDB database | `mongodb://localhost:27017/cargotracker` |

## API Routes

### Shipment Routes

All routes are prefixed with `/api`

| HTTP Method | Route | Description | Parameters |
|------------|-------|-------------|------------|
| `GET` | `/shipments` | Retrieve all shipments | - |
| `GET` | `/shipment/:id` | Get details of a specific shipment | `id`: Shipment ID |
| `GET` | `/shipment/:id/eta` | Get estimated time of arrival for a shipment | `id`: Shipment ID |
| `POST` | `/shipment/:id/update-location` | Update current location of a shipment | `id`: Shipment ID, Location data in request body |
| `POST` | `/shipment` | Create a new shipment | Shipment details in request body |

## Setup and Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file with the required environment variables
4. Start the server: `npm start`

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose