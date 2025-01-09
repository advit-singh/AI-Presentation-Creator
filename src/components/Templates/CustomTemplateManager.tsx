import React, { useState } from 'react';
    import { Input, Button } from '@shadcn/ui';

    const CustomTemplateManager = () => {
      const [customTemplates, setCustomTemplates] = useState<string[]>([]);
      const [newTemplateName, setNewTemplateName] = useState('');

      const addCustomTemplate = () => {
        // Simulate saving a custom template (replace with actual saving logic)
        setCustomTemplates([...customTemplates, newTemplateName]);
        setNewTemplateName('');
      };

      return (
        <div>
          <h2>Manage Custom Templates</h2>
          <ul>
            {customTemplates.map((template, index) => (
              <li key={index}>{template}</li>
            ))}
          </ul>
          <Input value={newTemplateName} onChange={(e) => setNewTemplateName(e.target.value)} placeholder="Enter template name..." />
          <Button onClick={addCustomTemplate}>Save Template</Button>
        </div>
      );
    };

    export default CustomTemplateManager;
