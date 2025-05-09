import { useState } from "react"

const SearchWord = ({searchWordInDictionary}) => {

    const [newWord, setNewWord] = useState("") 

    const handleChange = (event) => {
            setNewWord(event.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        if(newWord !== ""){
            searchWordInDictionary(newWord)
        }
        setNewWord("")
    }

    return(
        <div>
            <form class="search-form"onSubmit={handleSubmit}>
                <input placeholder="Search English"
                type="text"
                id="word"
                onChange={handleChange}
                value={newWord}
                />
                <input type="submit" value="Search"/>
            </form> 
        </div>
    )
}

export default SearchWord