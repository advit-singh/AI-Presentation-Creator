import React, { useState } from 'react';
    import { DragDropContext, Droppable } from 'react-beautiful-dnd';
    import Slide from './Slide';
    import { useAtom } from 'jotai';
    import { presentationAtom } from '@/store/presentation';


    interface SlideData {
      id: string;
      type: 'title' | 'bullet' | 'image';
      title?: string;
      content?: string;
      imageUrl?: string;
    }


    const SlideList: React.FC = () => {
      const [presentation, setPresentation] = useAtom(presentationAtom);
      const [newSlideType, setNewSlideType] = useState<'title' | 'bullet' | 'image'>('title');


      const handleOnDragEnd = (result: any) => {
        if (!result.destination) return;
        const items = Array.from(presentation.slides);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setPresentation({ ...presentation, slides: items });
      };


      const handleAddSlide = () => {
        const newSlide: SlideData = {
          id: `${Date.now()}`,
          type: newSlideType,
          title: newSlideType === 'title' ? 'New Title Slide' : undefined,
          content: newSlideType === 'bullet' ? 'Enter bullet points here...' : undefined,
          imageUrl: newSlideType === 'image' ? '' : undefined,
        };
        setPresentation({ ...presentation, slides: [...presentation.slides, newSlide] });
      };


      return (
        <div>
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="slides">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {presentation.slides.map((slide, index) => (
                    <Slide key={slide.id} {...slide} index={index} />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          <div className="mt-4">
            <select value={newSlideType} onChange={(e) => setNewSlideType(e.target.value as 'title' | 'bullet' | 'image')}>
              <option value="title">Title Slide</option>
              <option value="bullet">Bullet Point Slide</option>
              <option value="image">Image Slide</option>
            </select>
            <button onClick={handleAddSlide}>Add Slide</button>
          </div>
        </div>
      );
    };


    export default SlideList;
