import axios from "axios";
import { useEffect, useState } from "react";


const useFetch = (endpoint, query) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: { ...query },
        headers: {
            'X-RapidAPI-Key': 'f5d5d4876fmsh4bcc02d73ad0e9ep1c3402jsn02b6676e1ea1',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };


    const fetchData = async () => {
        setIsLoading(true)
        try {
            const response = await axios.request(options);
            console.log(response.data);
            setData(response.data.data)
            setIsLoading(false)
        } catch (error) {
            setError(error)
            alert('There is an error')
            console.error(error);
        } finally {
            setIsLoading(false)

        }
    }

    useEffect(() => {
        fetchData();
    }, [])


    const refetchData = () => {
        setIsLoading(true)
        fetchData()
    }

    return { data, isLoading, error, refetchData }
}


export default useFetch