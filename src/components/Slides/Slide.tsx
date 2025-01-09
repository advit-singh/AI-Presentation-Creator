import React from 'react';
    import { DragHandleVertical } from '@radix-ui/react-icons';
    import { useDrag } from 'react-beautiful-dnd';


    interface SlideProps {
      id: string;
      type: 'title' | 'bullet' | 'image';
      title?: string;
      content?: string;
      imageUrl?: string;
      index: number;
    }


    const Slide: React.FC<SlideProps> = ({ id, type, title, content, imageUrl, index }) => {
      const [{ isDragging }, drag] = useDrag({
        type: 'slide',
        item: { id, index },
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
        }),
      });


      const renderContent = () => {
        switch (type) {
          case 'title':
            return <h1 className="text-4xl font-bold">{title}</h1>;
          case 'bullet':
            return (
              <ul>
                {content?.split('\n').map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            );
          case 'image':
            return <img src={imageUrl} alt={title || 'Slide Image'} className="max-w-full h-auto" />;
          default:
            return <p>Unknown slide type</p>;
        }
      };


      return (
        <div
          ref={drag}
          className={`relative bg-white p-4 border border-gray-300 rounded mb-4 ${isDragging ? 'opacity-50' : ''}`}
        >
          <div className="absolute top-0 left-0 p-2">
            <DragHandleVertical />
          </div>
          {renderContent()}
        </div>
      );
    };


    export default Slide;
