import axios from '../api/apiConfig'
import React, { useState,useEffect } from 'react';


export default ()=>{
	const [searchTerm, setSearchTerm] = useState("")
	const [results, setResults] = useState({total:0,businesses:null})
	const searchApi = async () => {
		try {
			setResults({total:0,businesses:null})
			const response = await axios.get('/search', {
				params: {
					limit: 50,
					term: searchTerm,
					location: "san jose"
				}
			})
			console.log(response.data.businesses);
			setResults(response.data)
		}catch(err){
			console.log('err: ', err);

		}
	}

	useEffect(()=>{
		searchApi("pasta")
	},[])

	return [searchApi,results,searchTerm,setSearchTerm]
}