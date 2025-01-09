import React, { useState } from 'react';
    import { Button, Input } from '@shadcn/ui';

    const ShareLink = () => {
      const [link, setLink] = useState('');
      const [linkGenerated, setLinkGenerated] = useState(false);

      const generateLink = () => {
        // Simulate link generation (replace with actual link generation logic)
        const newLink = `https://example.com/presentation/${Math.random().toString(36).substring(7)}`;
        setLink(newLink);
        setLinkGenerated(true);
      };

      return (
        <div>
          <h2>Share Link</h2>
          {!linkGenerated && <Button onClick={generateLink}>Generate Link</Button>}
          {linkGenerated && (
            <div>
              <Input value={link} readOnly label="Shareable Link" />
              {/* Add options for privacy settings here */}
            </div>
          )}
        </div>
      );
    };

    export default ShareLink;
