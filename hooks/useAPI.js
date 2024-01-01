import { useEffect, useState } from "react";

const useAPI = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    async function getData(url) {
        const response = await fetch(url);
        if (response.status === 200 || response.status === 201) {
            return response.json()
        }
        throw new Error(response.status)
    }

    useEffect(() => {
        const fetchReq = async () => {
            try {
                const res = await getData(url);
                setData(res)
                setLoading(false)

            } catch (error) {
                setError(error.message)
                setLoading(false)
            }
        }
        fetchReq()
    }, [url])

    return { data, loading, error }
}

export default useAPI