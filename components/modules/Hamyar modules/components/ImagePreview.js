import Image from 'next/image';

const ImagePreview = ({ fileUrl }) => (
  <div style={{ textAlign: 'center' }}>
    <Image src={fileUrl} alt="Preview" width={500} height={500} />
  </div>
);

export default ImagePreview;
