import React, { useState, useCallback } from 'react';
    import { Slate, Editable, withReact } from '@slatejs/react';
    import { createEditor } from 'slate';
    import { ReactEditor } from 'slate-react';
    import { useMemo } from 'react';
    import { useAtom } from 'jotai';
    import { presentationAtom } from '@/store/presentation';


    const Editor: React.FC = () => {
      const [presentation, setPresentation] = useAtom(presentationAtom);
      const editor = useMemo(() => withReact(createEditor()), []);
      const [value, setValue] = useState([{ type: 'paragraph', children: [{ text: '' }] }]);


      const renderElement = useCallback((props) => {
        const { element, attributes, children } = props;
        switch (element.type) {
          case 'heading-one':
            return <h1 {...attributes}>{children}</h1>;
          case 'heading-two':
            return <h2 {...attributes}>{children}</h2>;
          case 'list-item':
            return <li {...attributes}>{children}</li>;
          case 'bulleted-list':
            return <ul {...attributes}>{children}</ul>;
          case 'numbered-list':
            return <ol {...attributes}>{children}</ol>;
          default:
            return <p {...attributes}>{children}</p>;
        }
      }, []);


      const renderLeaf = useCallback((props) => {
        const { leaf, attributes, children } = props;
        if (leaf.bold) {
          children = <strong>{children}</strong>;
        }
        if (leaf.italic) {
          children = <em>{children}</em>;
        }
        if (leaf.underline) {
          children = <u>{children}</u>;
        }
        return <span {...attributes}>{children}</span>;
      }, []);


      const handleOnChange = useCallback((newValue) => {
        setValue(newValue);
        setPresentation({ ...presentation, slides: [{ type: 'paragraph', children: [{ text: newValue[0].children[0].text }] }] });
      }, [presentation, setPresentation]);


      return (
        <div className="editor">
          <Slate editor={editor} value={value} onChange={handleOnChange}>
            <Editable
              renderElement={renderElement}
              renderLeaf={renderLeaf}
              placeholder="Enter your presentation content here..."
              onKeyDown={(event) => {
                if (!event.ctrlKey) return;
                switch (event.key) {
                  case 'b':
                    event.preventDefault();
                    editor.toggleMark('bold');
                    break;
                  case 'i':
                    event.preventDefault();
                    editor.toggleMark('italic');
                    break;
                  case 'u':
                    event.preventDefault();
                    editor.toggleMark('underline');
                    break;
                }
              }}
            />
          </Slate>
        </div>
      );
    };

    export default Editor;
