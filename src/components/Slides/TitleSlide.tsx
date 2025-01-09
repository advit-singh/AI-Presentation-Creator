import React from 'react';
    import { DragHandleVertical } from '@radix-ui/react-icons';
    import { useDrag } from 'react-beautiful-dnd';

    interface TitleSlideProps {
      id: string;
      title: string;
      index: number;
    }

    const TitleSlide: React.FC<TitleSlideProps> = ({ id, title, index }) => {
      const [{ isDragging }, drag] = useDrag({
        type: 'slide',
        item: { id, index },
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
        }),
      });

      return (
        <div ref={drag} className={`relative ${isDragging ? 'opacity-50' : ''}`}>
          <div className="absolute top-0 left-0 p-2">
            <DragHandleVertical />
          </div>
          <h1 className="text-4xl font-bold">{title}</h1>
        </div>
      );
    };

    export default TitleSlide;
