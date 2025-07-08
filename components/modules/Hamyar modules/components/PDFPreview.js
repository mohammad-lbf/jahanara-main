import React from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PDFPreview = ({ fileUrl }) => {
    if (!fileUrl) {
        return <p>فایلی برای نمایش وجود ندارد.</p>;
    }

    return (
        <Worker workerUrl="/pdf.worker.min.js">
            <div style={{ height: '500px' }}>
                <Viewer fileUrl={fileUrl} />
            </div>
        </Worker>
    );
};

export default PDFPreview;
