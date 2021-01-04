import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import DogCard from './DogCard'
import axios from './axios'

function SearchPage() {
    const [petList, setPetList] = useState("")
    useEffect(() => {
        const getPetList = async () => {
            const petList = await axios.get("/pet/pet-list")
            setPetList(petList.data)
        }

        getPetList()
    }, [])
    console.log(petList)
    return (
        <div className="container-search-page">
            <SearchBar />
            <div className="list-dogs">
                {petList && petList.map((dog, index) => (
                    < DogCard key={index} dog={dog} />
                ))}
            </div>

        </div>
    )
}
export default SearchPage;