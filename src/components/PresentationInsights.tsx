import React from 'react';
    import { useAtom } from 'jotai';
    import { presentationAtom } from '@/store/presentation'; // Import your presentation atom


    const PresentationInsights: React.FC = () => {
      const [presentation] = useAtom(presentationAtom);


      // Helper function to calculate word count
      const calculateWordCount = (text: string | undefined): number => {
        if (!text) return 0;
        return text.trim().split(/\s+/).length;
      };


      // Helper function to calculate average sentence length
      const calculateAverageSentenceLength = (text: string | undefined): number => {
        if (!text) return 0;
        const sentences = text.split(/[.?!]/);
        const totalWords = sentences.reduce((sum, sentence) => sum + calculateWordCount(sentence), 0);
        return totalWords / sentences.length;
      };


      const totalWordCount = presentation.slides.reduce((sum, slide) => sum + calculateWordCount(slide.content), 0);
      const totalSlideCount = presentation.slides.length;
      const averageSentenceLength = calculateAverageSentenceLength(presentation.slides.map((slide) => slide.content).join(' '));


      return (
        <div>
          <h2>Presentation Insights</h2>
          <p>Total Word Count: {totalWordCount}</p>
          <p>Total Slide Count: {totalSlideCount}</p>
          <p>Average Sentence Length: {averageSentenceLength.toFixed(1)}</p>
        </div>
      );
    };


    export default PresentationInsights;
