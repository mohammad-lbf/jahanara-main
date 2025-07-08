import React, { useEffect, useState } from 'react';
import mammoth from 'mammoth';

const WordPreview = ({ fileUrl }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchWordContent = async () => {
      const response = await fetch(fileUrl);
      const arrayBuffer = await response.arrayBuffer();
      const result = await mammoth.extractRawText({ arrayBuffer });
      setContent(result.value);
    };

    fetchWordContent();
  }, [fileUrl]);

  return (
    <div style={{ whiteSpace: 'pre-wrap', padding: '20px', border: '1px solid #ddd' }}>
      {content || 'Loading...'}
    </div>
  );
};

export default WordPreview;
