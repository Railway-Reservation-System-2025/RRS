import https from 'https';
import API_CONFIG from '../config/api.js'; // Import the API configuration

// Function to fetch train information between two stations
export const getTrainBetweenStations = (fromStationCode, toStationCode, dateOfJourney) => {
    return new Promise((resolve, reject) => {
        const options = {
            method: 'GET',
            hostname: API_CONFIG.trainApi.hostname,
            path: `${API_CONFIG.trainApi.path}?fromStationCode=${fromStationCode}&toStationCode=${toStationCode}&dateOfJourney=${dateOfJourney}`,
            headers: API_CONFIG.trainApi.headers,
        };

        const req = https.request(options, (res) => {
            const chunks = [];

            res.on('data', (chunk) => {
                chunks.push(chunk);
            });

            res.on('end', () => {
                const body = Buffer.concat(chunks).toString();
                resolve(body);
            });
        });

        req.on('error', (error) => {
            reject(error);
        });

        req.end();
    });
};

// Function to fetch PNR status
export const getPnrStatus = (pnrNumber) => {
    return new Promise((resolve, reject) => {
        const options = {
            method: 'GET',
            hostname: API_CONFIG.pnrApi.hostname,
            path: `${API_CONFIG.pnrApi.path}?pnrNumber=${pnrNumber}`,
            headers: API_CONFIG.pnrApi.headers,
        };

        const req = https.request(options, (res) => {
            const chunks = [];

            res.on('data', (chunk) => {
                chunks.push(chunk);
            });

            res.on('end', () => {
                const body = Buffer.concat(chunks).toString();
                resolve(body);
            });
        });

        req.on('error', (error) => {
            reject(error);
        });

        req.end();
    });
};
