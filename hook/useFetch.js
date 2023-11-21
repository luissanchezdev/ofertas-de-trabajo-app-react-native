import {  useState, useEffect } from 'react'
import axios from 'axios'


const rapidApiKey = '9807f354e2msh3f56788396ed595p1da3b0jsn7954b68b7df0'

const useFetch = ( endpoint, query ) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${ endpoint }`,
    params: { ...query },
    headers: {
      'X-RapidAPI-Key': rapidApiKey,
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };

  const fetchData = async () => {
    setIsLoading(true)

    try {
      const response = await axios.request(options)
      setData(response.data.data)
      setIsLoading(false)
    } catch (error) {
      setError(error)
      alert('Ha ocurrido un error')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  },[])

  const refetch = () => {
    setIsLoading(true)
    fetchData()
  }

  console.log(data[1])

  return { data, isLoading, error, refetch }
}

export default useFetch