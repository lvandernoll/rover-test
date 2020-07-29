import React from 'react';

interface SubtitleProps {
  as?: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ as = 'p', children }) =>
  React.createElement(as, { className: 'subtitle' }, [children]);

export default Subtitle;
