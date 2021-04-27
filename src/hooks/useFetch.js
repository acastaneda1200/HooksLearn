import { useEffect, useRef, useState } from 'react'
export const useFetch = (url) => {

    const [data, setData] = useState({ data: null, loading: true })

    const isMounted = useRef(true)

    useEffect(() => {

        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {

        setData({ data: null, loading: true })
        const getQoutes = async () => {
            try {
                const api = await fetch(url);
                const res = await api.json();



                setTimeout(() => {

                    if (isMounted.current) {
                        setData({
                            loading: false,
                            data: res
                        });

                    } else {
                        console.log('No se monto el componente');
                    }
                }, 2000);

            } catch (error) {
                console.log(error);
            }


        }
        getQoutes();

    }, [url])



    return data;


}
