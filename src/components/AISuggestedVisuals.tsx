import React from 'react';
    import { fetchSlideSuggestions } from '@/utils/api'; // Import your API utility

    interface AISuggestedVisualsProps {
      content: string;
      onVisualSelected: (imageUrl: string) => void;
    }

    const AISuggestedVisuals: React.FC<AISuggestedVisualsProps> = ({ content, onVisualSelected }) => {
      const [visuals, setVisuals] = React.useState<string[]>([]);

      React.useEffect(() => {
        const fetchAndDisplayVisuals = async () => {
          const suggestedVisuals = await fetchSlideSuggestions(content); // Replace with actual API call
          setVisuals(suggestedVisuals.map((visual) => visual.imageUrl || '')); // Handle potential missing URLs
        };

        fetchAndDisplayVisuals();
      }, [content]);

      return (
        <div>
          <h2>AI Suggested Visuals</h2>
          {visuals.map((visual, index) => (
            <div key={index} onClick={() => onVisualSelected(visual)}>
              <img src={visual} alt={`Visual ${index + 1}`} style={{ maxWidth: '100px' }} />
            </div>
          ))}
        </div>
      );
    };

    export default AISuggestedVisuals;
