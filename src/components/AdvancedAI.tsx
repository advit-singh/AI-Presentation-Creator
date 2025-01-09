import React, { useState } from 'react';
    import { Button, Input } from '@shadcn/ui';
    import { useAtom } from 'jotai';
    import { presentationAtom } from '@/store/presentation'; // Import your presentation atom
    import { generateAISlideContent, generateAIDesignSuggestions } from '@/utils/api'; // Import your API utility


    const AdvancedAI: React.FC = () => {
      const [presentation, setPresentation] = useAtom(presentationAtom);
      const [topic, setTopic] = useState('');
      const [generating, setGenerating] = useState(false);
      const [generationError, setGenerationError] = useState('');
      const [suggestions, setSuggestions] = useState<string[]>([]);


      const handleGenerateContent = async () => {
        setGenerating(true);
        setGenerationError('');
        try {
          const newContent = await generateAISlideContent(topic); // Replace with your actual API call
          const updatedSlides = [...presentation.slides, { id: Date.now().toString(), type: 'bullet', content: newContent }];
          setPresentation({ ...presentation, slides: updatedSlides });
          setSuggestions([]); // Clear previous suggestions
        } catch (error: any) {
          setGenerationError(error.message || 'Failed to generate content.');
          console.error('Failed to generate AI slide content:', error);
        } finally {
          setGenerating(false);
        }
      };


      const handleGenerateSuggestions = async () => {
        setGenerating(true);
        setGenerationError('');
        try {
          const newSuggestions = await generateAIDesignSuggestions(topic); // Replace with your actual API call
          setSuggestions(newSuggestions);
        } catch (error: any) {
          setGenerationError(error.message || 'Failed to generate suggestions.');
          console.error('Failed to generate AI design suggestions:', error);
        } finally {
          setGenerating(false);
        }
      };


      return (
        <div>
          <h2>Advanced AI Features</h2>
          {generationError && <p className="text-red-500">{generationError}</p>}
          <h3>Generate Slide Content</h3>
          <Input value={topic} onChange={(e) => setTopic(e.target.value)} label="Topic" />
          <Button onClick={handleGenerateContent} disabled={generating}>
            {generating ? 'Generating...' : 'Generate Content'}
          </Button>
          <h3>Generate Design Suggestions</h3>
          <Button onClick={handleGenerateSuggestions} disabled={generating}>
            {generating ? 'Generating...' : 'Generate Suggestions'}
          </Button>
          {suggestions.length > 0 && (
            <ul>
              {suggestions.map((suggestion, index) => (
                <li key={index}>{suggestion}</li>
              ))}
            </ul>
          )}
        </div>
      );
    };


    export default AdvancedAI;
