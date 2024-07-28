import { getTrainBetweenStations as fetchTrainBetweenStations, getPnrStatus as fetchPnrStatus } from '../service/train.service.js';

export const getTrains = async (req, res) => {
    const { fromStationCode, toStationCode, dateOfJourney } = req.query;

    if (!fromStationCode || !toStationCode || !dateOfJourney) {
        return res.status(400).json({ error: 'Missing fromStationCode, toStationCode, or dateOfJourney' });
    }

    try {
        const trainData = await fetchTrainBetweenStations(fromStationCode, toStationCode, dateOfJourney);
        res.json(JSON.parse(trainData)); // Parse and send the API response
    } catch (error) {
        console.error('Error fetching train information:', error);
        res.status(500).json({ error: 'Error fetching train information' });
    }
};

export const getPnrStatus = async (req, res) => {
    const { pnrNumber } = req.query;

    if (!pnrNumber) {
        return res.status(400).json({ error: 'Missing pnrNumber' });
    }

    try {
        const pnrData = await fetchPnrStatus(pnrNumber);
        res.json(JSON.parse(pnrData)); // Parse and send the API response
    } catch (error) {
        console.error('Error fetching PNR status:', error);
        res.status(500).json({ error: 'Error fetching PNR status' });
    }
};
