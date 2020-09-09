import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateRawText } from '../../reducers/editor'
import Prism from 'prismjs';
import 'prismjs/components/prism-markdown.js';

const MarkdownContent = () => {

    const highlight = (text) => {
        return Prism.highlight(text, Prism.languages.markdown, 'markdown')
    }

    const {rawText} = useSelector(state => state.editor)

    const dispatch = useDispatch();

    const handleTextAreaChange = (e) => {

        dispatch(updateRawText(e.target.value))
    }
    
    const setPreHTML = (html) =>{
        return {__html: html}
    }

    return(
        <div className="ml-24 h-full relative ">
                
                <pre className="relative m-0 text-md whitespace-pre-wrap pt-12" dangerouslySetInnerHTML={{__html: highlight(rawText)}}>
                    
                </pre>
                <textarea
                    id="area-editor"
                    className="absolute h-full w-full top-0 left-0 bg-transparent outline-none text-md pt-12"
                    spellCheck={false}
                    onChange={handleTextAreaChange}
                    value={rawText}
                >

                </textarea>
        </div>
    )
}

export default MarkdownContent