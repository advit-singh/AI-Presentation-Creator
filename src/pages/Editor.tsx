import React, { useState } from 'react';
import Editor from '@/components/Editor/Editor';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Button } from '@/components/ui/button'; // Import Button component


const EditorPage = () => {
  const [presentationData, setPresentationData] = useState({ title: 'My Presentation', slides: [] });
  const [slides, setSlides] = useState([{ id: 'slide-1', title: 'Title Slide', content: '' }]); // Initial slide


  const handleOnDragEnd = (result: any) => {
    // Implement drag-and-drop logic here.  This is a placeholder.  You would typically update the `slides` state based on `result`.
    if (!result.destination) return;
    const items = Array.from(slides);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setSlides(items);
  };

  const addSlide = () => {
    const newSlideId = `slide-${slides.length + 1}`;
    setSlides([...slides, { id: newSlideId, title: `Slide ${slides.length + 1}`, content: '' }]);
  };

  return (
    <div className="p-4">
      <div className="max-w-screen-xl mx-auto"> {/* Responsive container */}
        <div>
          <Button onClick={addSlide}>Add Slide</Button>
        </div>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="slides">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {slides.map((slide, index) => (
                  <Draggable key={slide.id} draggableId={slide.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <div>
                          <h3>{slide.title}</h3>
                          {/* Placeholder for slide content.  You'll need to integrate your Editor component here */}
                          <Editor />
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default EditorPage;