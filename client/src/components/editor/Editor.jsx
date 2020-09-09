import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { togglePreview } from '../../reducers/editor'
import HTMLContent from './HTMLContent'
import MarkdownContent from './MarkdownContent'

const Editor = () => {
    
    const {showPreview} = useSelector(state => state.editor)

    const dispatch = useDispatch()

    const handlePreviewClick = () =>{
        dispatch(togglePreview())
    }

    return(
        <>
            <div className="w-8/12 h-screen text-gray-300 flex flex-col">
                <div className="h-8 w-full bg-teal-300 flex items-center">
                    <button className="bg-red-300" onClick={handlePreviewClick}>CLICK</button>
                </div>
                {showPreview
                ? <HTMLContent />
                : <MarkdownContent />
                }
            </div>
            
        </>
        
    )
}

export default Editor