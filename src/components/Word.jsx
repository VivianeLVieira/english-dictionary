
const Word = ({word}) => {

    return (
        <div>
            {word &&
            <div>
                <p class="word" >{word.name.toLowerCase()}:</p>
                <spam>{word.meaning}</spam>
            </div>
            }
        </div>
    )
}

export default Word