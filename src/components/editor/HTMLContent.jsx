import React from 'react'
import marked from 'marked'
import { useSelector } from 'react-redux'

const HTMLContent = () => {

    const {rawText} = useSelector(state => state.editor)

    return(
        <div className="prose w-10/12 h-full mx-auto relative pt-12" dangerouslySetInnerHTML={{__html: marked(rawText)}} />
            
    )
}

export default HTMLContent