import React from 'react'
import marked from 'marked'
import { useSelector } from 'react-redux'

const HTMLContent = () => {

    const {rawText} = useSelector(state => state.editor)

    return(
        <div className="prose ml-24 h-full relative pt-12" dangerouslySetInnerHTML={{__html: marked(rawText)}} />
            
    )
}

export default HTMLContent