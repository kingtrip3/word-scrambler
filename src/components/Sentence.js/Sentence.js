import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Sentence() {
    const url = 'https://api.hatchways.io/assessment/sentences/1';
    const [sentence, setSentence] = useState(null)

    useEffect(() => {
        axios.get(url)
        .then(response => {
            setSentence(response.data)
        })
    }, [url])
    return (
        <div>
            <h1>{sentence}</h1>
        </div>
    )
}

export default Sentence
