import React from 'react';
    import { Select } from '@shadcn/ui';

    const themes = [
      { value: 'corporate', label: 'Corporate' },
      { value: 'educational', label: 'Educational' },
      { value: 'creative', label: 'Creative' },
    ];

    const ThemeSelector = () => {
      return (
        <Select options={themes} label="Select Theme" />
      );
    };

    export default ThemeSelector;
