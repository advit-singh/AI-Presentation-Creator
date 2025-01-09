import React from 'react';
    import { DragHandleVertical } from '@radix-ui/react-icons';
    import { useDrag } from 'react-beautiful-dnd';
    import { useAtom } from 'jotai';
    import { presentationAtom } from '@/store/presentation'; // Import your presentation atom


    interface BulletPointSlideProps {
      id: string;
      content: string;
      index: number;
    }


    const BulletPointSlide: React.FC<BulletPointSlideProps> = ({ id, content, index }) => {
      const [{ isDragging }, drag] = useDrag({
        type: 'slide',
        item: { id, index },
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
        }),
      });
      const [, setPresentation] = useAtom(presentationAtom);


      const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const updatedSlides = presentation.slides.map((slide, i) => {
          if (i === index) {
            return { ...slide, content: event.target.value };
          }
          return slide;
        });
        setPresentation({ ...presentation, slides: updatedSlides });
      };


      return (
        <div
          ref={drag}
          className={`relative bg-white p-4 border border-gray-300 rounded mb-4 ${isDragging ? 'opacity-50' : ''}`}
        >
          <div className="absolute top-0 left-0 p-2">
            <DragHandleVertical />
          </div>
          <textarea
            value={content}
            onChange={handleContentChange}
            placeholder="Enter bullet points here..."
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      );
    };


    export default BulletPointSlide;
