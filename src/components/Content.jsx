import dictionary from "../assets/dictionary.json"
import { useState } from "react"
import SearchWord from "./SearchWord"
import WordList from "./WordList"


const Content = () => {
    const [wordList, setWordList] = useState([])

    const searchWordInDictionary = (word) => {    
        setWordList((currList) => {
            if(dictionary[word.toUpperCase()]){
                return [{ 
                    name: word,
                    meaning: dictionary[word.toUpperCase()]
                }, 
                ...currList]
            } else { //Add error handler when the word is not in the dictionary
                return currList
            }
        })
    }

    return (
        <div> 
            <SearchWord class="search-word" searchWordInDictionary={searchWordInDictionary} />
            <WordList class="word-list" wordList={wordList} />
        </div>
    )
}

export default Content