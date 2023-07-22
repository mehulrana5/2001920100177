import React, { createContext, useState, useEffect } from 'react';

const TrainContext = createContext();

export const TrainDataProvider = ({ children }) => {
    const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTAwNDAzNDksImNvbXBhbnlOYW1lIjoidHJhaW4tYXBwIiwiY2xpZW50SUQiOiJlZjliYTcxNS02YjY2LTRjYWUtODRkYi0xOWJjOWYzZDhhYmMiLCJvd25lck5hbWUiOiIiLCJvd25lckVtYWlsIjoiIiwicm9sbE5vIjoiMjAwMTkyMDEwMDE3NyJ9.XVw2SufARA0V5OrW5rTebghRkC3ZVei6_tBxmWxa7qo";

    const [trainData, setTrainData] = useState([]);

    const fetchTrainDetails = async () => {
        try {
            const response = await fetch(`http://localhost:5000/train/trains`, { // Replace with the correct backend URL
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": authToken
                }
            });
            const json = await response.json();
            setTrainData(json); // Update the state with the fetched data
        } catch (error) {
            console.error("Error fetching train details:", error);
        }
    };

    useEffect(() => {
        fetchTrainDetails(); // Fetch train data when the component mounts
    }, []); // Empty dependency array ensures that the effect runs only once

    return (
        <TrainContext.Provider value={{ fetchTrainDetails, trainData, setTrainData }}>
            {children}
        </TrainContext.Provider>
    );
};

export default TrainContext;
