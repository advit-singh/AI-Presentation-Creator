import React, { useState } from 'react';
    import { Input } from '@shadcn/ui';

    const ExportSettings = () => {
      const [slideWidth, setSlideWidth] = useState('1024');
      const [slideHeight, setSlideHeight] = useState('768');
      const [resolution, setResolution] = useState('96');

      return (
        <div>
          <h2>Export Settings</h2>
          <Input type="number" value={slideWidth} onChange={(e) => setSlideWidth(e.target.value)} label="Slide Width (pixels)" />
          <Input type="number" value={slideHeight} onChange={(e) => setSlideHeight(e.target.value)} label="Slide Height (pixels)" />
          <Input type="number" value={resolution} onChange={(e) => setResolution(e.target.value)} label="Resolution (DPI)" />
        </div>
      );
    };

    export default ExportSettings;
