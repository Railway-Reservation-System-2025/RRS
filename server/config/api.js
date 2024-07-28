import dotenv from "dotenv";

dotenv.config();
const API_CONFIG = {
    trainApi: {
        hostname: 'irctc1.p.rapidapi.com',
        path: '/api/v3/trainBetweenStations',
        headers: {
            'x-rapidapi-key': process.env.RAPIDAPI_KEY, 
            'x-rapidapi-host': 'irctc1.p.rapidapi.com'
        }
    },
    pnrApi: {
        hostname: 'irctc1.p.rapidapi.com',
        path: '/api/v3/getPNRStatus',
        headers: {
            'x-rapidapi-key': process.env.RAPIDAPI_KEY,
            'x-rapidapi-host': 'irctc1.p.rapidapi.com'
        }
    }
};

export default API_CONFIG;
