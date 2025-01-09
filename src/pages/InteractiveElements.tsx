import React from 'react';
    import SimulatedVideoEmbed from '@/components/InteractiveElements/SimulatedVideoEmbed';
    import SimulatedPoll from '@/components/InteractiveElements/SimulatedPoll';
    import ClickableLink from '@/components/InteractiveElements/ClickableLink';
    import SimulatedSlideTransition from '@/components/InteractiveElements/SimulatedSlideTransition';

    const InteractiveElementsPage = () => {
      return (
        <div className="p-4">
          <h1>Interactive Elements</h1>
          <SimulatedVideoEmbed videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ" /> {/* Replace with your video URL */}
          <SimulatedPoll question="What is your favorite color?" options={['Red', 'Green', 'Blue']} />
          <ClickableLink href="https://www.example.com" text="Click here!" />
          <SimulatedSlideTransition />
        </div>
      );
    };

    export default InteractiveElementsPage;
