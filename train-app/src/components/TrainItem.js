import React, { useContext } from 'react';
import TrainContext from '../context/TrainContext';

export default function TrainItem() {
    const context = useContext(TrainContext);

    return (
        <div className='container'>
            {context.trainData.map((train, index) => (
                <div key={index}>
                    <h3>{train.trainName}</h3>
                    <p>Train Number: {train.trainNumber}</p>
                    <p>Departure Time: {train.departureTime.Hours}:{train.departureTime.Minutes}</p>
                    {/* Display other train details */}
                </div>
            ))}
        </div>
    );
}
