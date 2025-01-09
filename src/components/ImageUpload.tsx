import React, { useState } from 'react';
    import { useAtom } from 'jotai';
    import { presentationAtom } from '@/store/presentation'; // Import your presentation atom


    interface ImageUploadProps {
      slideId: string; // ID of the slide to associate the image with
    }


    const ImageUpload: React.FC<ImageUploadProps> = ({ slideId }) => {
      const [selectedImage, setSelectedImage] = useState<File | null>(null);
      const [imageUrl, setImageUrl] = useState('');
      const [uploadError, setUploadError] = useState('');
      const [, setPresentation] = useAtom(presentationAtom);


      const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setUploadError(''); // Clear previous errors
        if (event.target.files && event.target.files[0]) {
          setSelectedImage(event.target.files[0]);
          try {
            const reader = new FileReader();
            reader.onload = (e) => {
              if (e.target?.result) {
                setImageUrl(e.target.result as string);
                // Update presentation state with image URL (replace with your actual update logic)
                updatePresentationWithImageUrl(slideId, e.target.result as string);
              }
            };
            reader.readAsDataURL(event.target.files[0]);
          } catch (error) {
            setUploadError('Image upload failed.');
            console.error('Image upload failed:', error);
          }
        }
      };


      const updatePresentationWithImageUrl = (slideId: string, imageUrl: string) => {
        const updatedSlides = presentation.slides.map((slide) => {
          if (slide.id === slideId) {
            return { ...slide, imageUrl };
          }
          return slide;
        });
        setPresentation({ ...presentation, slides: updatedSlides });
      };


      return (
        <div>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {imageUrl && <img src={imageUrl} alt="Uploaded Image" style={{ maxWidth: '100px' }} />}
          {uploadError && <p className="text-red-500">{uploadError}</p>}
        </div>
      );
    };


    export default ImageUpload;
