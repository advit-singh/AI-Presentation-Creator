import React from 'react';
    import SimulatedSlideImprovements from '@/components/AI/SimulatedSlideImprovements';
    import SimulatedKeywordOptimization from '@/components/AI/SimulatedKeywordOptimization';
    import SimulatedExampleSlides from '@/components/AI/SimulatedExampleSlides';

    const AIEnhancementsPage = () => {
      return (
        <div className="p-4">
          <h1>AI Enhancements</h1>
          <SimulatedSlideImprovements />
          <SimulatedKeywordOptimization />
          <SimulatedExampleSlides />
        </div>
      );
    };

    export default AIEnhancementsPage;
