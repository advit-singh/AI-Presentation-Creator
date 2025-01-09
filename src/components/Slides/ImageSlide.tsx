import React, { useState } from 'react';
    import { DragHandleVertical } from '@radix-ui/react-icons';
    import { useDrag } from 'react-beautiful-dnd';
    import { useAtom } from 'jotai';
    import { presentationAtom } from '@/store/presentation'; // Import your presentation atom
    import ImageUpload from '../ImageUpload'; // Import the ImageUpload component


    interface ImageSlideProps {
      id: string;
      imageUrl?: string;
      index: number;
    }


    const ImageSlide: React.FC<ImageSlideProps> = ({ id, imageUrl, index }) => {
      const [{ isDragging }, drag] = useDrag({
        type: 'slide',
        item: { id, index },
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
        }),
      });
      const [, setPresentation] = useAtom(presentationAtom);


      const handleImageSelected = (newImageUrl: string) => {
        const updatedSlides = presentation.slides.map((slide, i) => {
          if (i === index) {
            return { ...slide, imageUrl: newImageUrl };
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
          {imageUrl ? (
            <img src={imageUrl} alt="Slide Image" className="max-w-full h-auto" />
          ) : (
            <ImageUpload slideId={id} />
          )}
        </div>
      );
    };


    export default ImageSlide;
