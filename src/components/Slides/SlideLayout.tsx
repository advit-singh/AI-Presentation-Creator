import React from 'react';
    import { useDrop } from 'react-beautiful-dnd';

    interface SlideLayoutProps {
      id: string;
      children: React.ReactNode;
      index: number;
    }

    const SlideLayout: React.FC<SlideLayoutProps> = ({ id, children, index }) => {
      const [{ isOver }, drop] = useDrop({
        accept: 'slide',
        drop: (provided) => ({
          result: {
            destination: index,
            source: provided.source,
          },
        }),
        collect: (monitor) => ({
          isOver: !!monitor.isOver(),
        }),
      });

      return (
        <div ref={drop} className={`${isOver ? 'bg-gray-200' : ''} p-4 border border-gray-300 rounded-md mb-4`}>
          {children}
        </div>
      );
    };

    export default SlideLayout;
