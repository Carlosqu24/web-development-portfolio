import { useState, useEffect } from 'react';

export const useFetch = (url) => {
      const [data, setData] = useState([]);
      const [loading, setLoading] = useState([]);
      const [error, setError] = useState([]);

      const getData = async () => {
           const res = await fetch(url)
           const json = await res.json()

           setData(json)
      }

      getData()

      return { data, loading, error }
}