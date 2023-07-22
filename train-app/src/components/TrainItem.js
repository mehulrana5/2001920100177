import React, { useEffect } from 'react'

export default function TrainItem() {
    const authToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTAwNDAzNDksImNvbXBhbnlOYW1lIjoidHJhaW4tYXBwIiwiY2xpZW50SUQiOiJlZjliYTcxNS02YjY2LTRjYWUtODRkYi0xOWJjOWYzZDhhYmMiLCJvd25lck5hbWUiOiIiLCJvd25lckVtYWlsIjoiIiwicm9sbE5vIjoiMjAwMTkyMDEwMDE3NyJ9.XVw2SufARA0V5OrW5rTebghRkC3ZVei6_tBxmWxa7qo"

    const fetchTrainDetails = async () => {
        const response = await fetch(`http://20.244.56.144:80/train/trains`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": authToken
            }
        });
        const json=await response.json()
        console.log(json);
    };

    useEffect(() => {
        fetchTrainDetails();
    }, [])

    return (
        <div className='container'>

        </div>
    )
}
