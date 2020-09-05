import React, { useState, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-markdown.js';


const Editor = () => {
    const [rawText, setRawText] = useState('')
    const [highlightText, setHighlightText] = useState('')
    const preRef = useRef(null)

    const handleTextAreaChange = (e) => {
        const highlight = Prism.highlight(e.target.value, Prism.languages.markdown, 'markdown');
        setHighlightText(highlight)
        setRawText(e.target.value)
        
    }
    
    const setPreHTML = (html) =>{
        return {__html: html}
    }


    return(
        <div className="w-8/12 h-screen text-gray-300">
            <div className="w-10/12 h-full mx-auto relative">
                <pre className="relative m-0 text-md whitespace-pre-wrap" ref={preRef} dangerouslySetInnerHTML={setPreHTML(highlightText)}>
                    
                </pre>
                <textarea
                    id="area-editor"
                    className="absolute h-full w-full top-0 left-0 bg-transparent outline-none text-md"
                    spellCheck={false}
                    onChange={handleTextAreaChange}
                    value={rawText}
                >

                </textarea>
            </div>
        </div>
    )
}

export default Editor