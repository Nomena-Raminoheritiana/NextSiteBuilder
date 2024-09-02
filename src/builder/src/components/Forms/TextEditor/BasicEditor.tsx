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
        const editor = editorRef.current as HTMLDivElement
        const toolbar = editor.parentElement.querySelector('.ql-toolbar');
        const qlContainer = editor.parentElement.querySelector('.ql-container');
        const qlEditor = editor.parentElement.querySelector('.ql-editor');
        toolbar && toolbar.remove()
        qlContainer && qlContainer.classList.remove('ql-container','ql-snow')
        qlEditor && (qlContainer.innerHTML = qlEditor.innerHTML);

        if (editor) {
            const QuillInstance = new Quill(editor, {
                theme: 'snow',
                modules: {
                    toolbar: [
                        ['bold', 'italic', 'strike', 'underline', { 'color': [] },  { 'background': [] }]
                    ]
                }
            });

            const handleTextChangeEvent = () => {
                handleTextChange && handleTextChange(handleValue(QuillInstance.root.innerHTML))
            }
            QuillInstance.on('text-change', handleTextChangeEvent);

            // Prevent to create new line
            const handleKeyDownEvent = (event) => {
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
            }
            QuillInstance.root.addEventListener('keydown', handleKeyDownEvent);
        }
    });

    return <div ref={editorRef} dangerouslySetInnerHTML={{__html: defaultValue || ''}}></div>;
};

export default BasicEditor;
