import React from 'react';
    import { Card, Button } from '@shadcn/ui';


    interface Template {
      id: string;
      name: string;
      thumbnail: string;
    }


    const templates: Template[] = [
      { id: 'template1', name: 'Corporate Template', thumbnail: '/thumbnails/corporate.png' },
      { id: 'template2', name: 'Educational Template', thumbnail: '/thumbnails/educational.png' },
      { id: 'template3', name: 'Creative Template', thumbnail: '/thumbnails/creative.png' },
      // Add more templates here
    ];


    interface TemplateSelectorProps {
      onTemplateSelected: (templateId: string) => void;
    }


    const TemplateSelector: React.FC<TemplateSelectorProps> = ({ onTemplateSelected }) => {
      return (
        <div role="region" aria-label="Template Selection" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {templates.map((template) => (
            <Card key={template.id} className="p-4" role="option" aria-checked={false} tabIndex={0} >
              <div className="relative">
                <img src={template.thumbnail} alt={template.name} className="max-w-full h-auto rounded-lg" />
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-gray-800 bg-opacity-50 text-white text-center rounded-b-lg">
                  {template.name}
                </div>
              </div>
              <Button onClick={() => onTemplateSelected(template.id)} className="mt-2">Use Template</Button>
            </Card>
          ))}
        </div>
      );
    };


    export default TemplateSelector;
