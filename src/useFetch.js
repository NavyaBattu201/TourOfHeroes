import { useState, useEffect } from 'react';
const useFetch = (url) => {
    const [info, setInfo] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const abortCont = new AbortController();
        fetch(url, { signal: abortCont.signal }).then(res => {
            if (!res.ok) {
                throw Error("Couldn't able to fetch");
            }
            return res.json();
        }).then(data => {
            setInfo(data);
            setIsPending(false);
            setError(null);
        }).catch(err => {
            if (err.name === 'AbortError') {
                console.log('fetch aborted');
            } else {
                setError(err.message);
                setIsPending(false);
            }
        })
        return () => abortCont.abort();
    }, [url]);
    return { info, isPending, error }
}

export default useFetch;