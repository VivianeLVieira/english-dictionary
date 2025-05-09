import Word from "./Word"

const WordList = ({wordList}) => {
    const word = wordList[0]

    return(
        <div >
            {word && 
                <div>
                    <section> 
                        <p class="meaning-word" >meaning of {word.name.toLowerCase()} in English</p>
                        <Word word={word} />
                    </section>
                    { wordList.length > 1 &&
                        <section> 
                            <h1>Recent researched words:</h1>
                            {wordList.slice(1, 5).map((word)=>{
                                return (
                                    <div>
                                        <Word word={word} />
                                    </div>
                                )
                            })}
                        </section>
                    }
                </div>
            }
        </div>
    )
}

export default WordList

