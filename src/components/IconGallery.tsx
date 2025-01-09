import React from 'react';
    //  Replace with actual icon library integration (e.g., React Icons)
    const icons = [
      { name: 'Icon 1', url: '/icons/icon1.svg' },
      { name: 'Icon 2', url: '/icons/icon2.svg' },
      // more icons can be added
    ];

    const IconGallery = () => {
      return (
        <div>
          {icons.map((icon) => (
            <img key={icon.name} src={icon.url} alt={icon.name} style={{ maxWidth: '50px' }} />
          ))}
        </div>
      );
    };

    export default IconGallery;
