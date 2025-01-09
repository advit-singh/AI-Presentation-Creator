import React, { useState } from 'react';
    import { Button, RadioGroup } from '@shadcn/ui';

    interface SimulatedPollProps {
      question: string;
      options: string[];
    }

    const SimulatedPoll: React.FC<SimulatedPollProps> = ({ question, options }) => {
      const [selectedOption, setSelectedOption] = useState('');

      const handleSubmit = () => {
        // Simulate poll submission (replace with actual submission logic)
        console.log('Selected option:', selectedOption);
      };

      return (
        <div>
          <h2>Simulated Poll</h2>
          <p>{question}</p>
          <RadioGroup value={selectedOption} onChange={setSelectedOption}>
            {options.map((option) => (
              <RadioGroup.Item key={option} value={option}>
                {option}
              </RadioGroup.Item>
            ))}
          </RadioGroup>
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      );
    };

    export default SimulatedPoll;
