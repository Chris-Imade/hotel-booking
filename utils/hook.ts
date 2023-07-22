import axios, { AxiosResponse } from "axios";
import React, { useState, useEffect } from "react";
import { FetchResult } from "../types";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";

const useFetch = <T>(url: string): FetchResult<T> => {
    const [error, setError] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [responseData, setResponseData] = useState<T | null>(null);
    const token = useSelector((state: RootState) => state.data.token);

    useEffect(() => {
        const fetchData = async (): Promise<void> => {
          setLoading(true);
          try {
            const config = {
              headers: {
                Authorization: `Token ${token}`,
              },
            };
    
            let response: AxiosResponse<T> | undefined = await axios.get(url, config);
    
            // @ts-ignore
            setResponseData(response?.data);
          } catch (error) {
            setError(error);
          }
          setLoading(false);
        };
    
        fetchData();
      }, [url]);

    const reFetch = async () => {
        setLoading(true);
        try {
            const config = {
                headers: {
                    Authorization: `Token ${token}`,
                },
            }
            const res = await axios.get(url, config);
            setResponseData(res.data);
        } catch (error: any) {
            setError(error);
        }
        setLoading(false);
    }
    // @ts-ignore
    return { responseData, loading, error, reFetch };
}

export default useFetch; 