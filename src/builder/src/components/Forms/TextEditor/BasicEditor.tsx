import React, {useEffect, useRef} from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

interface BasicEditorInterface {
    defaultValue?:string;
    handleTextChange: (value:string) => void | null;
}

const BasicEditor:React.FC<BasicEditorInterface> = (
    {
        defaultValue,
        handleTextChange
    }
) => {
    const editorRef = useRef<HTMLDivElement  | null>(null);

    const handleValue = (editorValue: string) => {
        const template = document.createElement('template');
        template.innerHTML = editorValue;
        return template.content.firstElementChild.innerHTML;
    }

    useEffect(() => {
        if (editorRef.current as HTMLDivElement && !((editorRef.current as HTMLDivElement).parentElement.querySelector('.ql-toolbar'))) {
            const QuillInstance = new Quill(editorRef.current, {
                theme: 'snow',
                modules: {
                    toolbar: [
                        ['bold', 'italic', 'strike', 'underline', { 'color': [] },  { 'background': [] }]
                    ]
                }
            });

            QuillInstance.on('text-change', () => {
                handleTextChange && handleTextChange(handleValue(QuillInstance.root.innerHTML))
            });

            // Prevent to create new line
            QuillInstance.root.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    const newLine = event.target.querySelectorAll('br, p:last-child');
                    if(newLine.length > 0) {
                        newLine.forEach((htmlElement:HTMLElement) => {
                            const lastParagraph = htmlElement.tagName.toLowerCase() === 'p' && htmlElement || null
                            const firstParagraph =  QuillInstance.root.querySelector('p:first-child');
                            if(lastParagraph && firstParagraph) {
                                const inlineElement = document.createElement('span')
                                inlineElement.innerHTML = lastParagraph.innerHTML
                                firstParagraph.appendChild(inlineElement)
                            }
                            htmlElement.remove()
                        })
                    }

                }
            });

        }
    }, []);

    return <div ref={editorRef} dangerouslySetInnerHTML={{__html: defaultValue || ''}}></div>;
};

export default BasicEditor;
