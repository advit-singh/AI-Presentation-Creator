import React from 'react';

    interface ClickableLinkProps {
      href: string;
      text: string;
    }

    const ClickableLink: React.FC<ClickableLinkProps> = ({ href, text }) => {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      );
    };

    export default ClickableLink;
