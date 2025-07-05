const getShortCaption = (caption, maxLength = 100) => {
    if (!caption) return "";
  
    // حذف تگ‌های HTML
    const plainText = caption.replace(/<[^>]+>/g, "").replace(/\n/g, " ");
  
    if (plainText.length <= maxLength) return plainText;
  
    // برش تا آخرین فاصله قبل از محدودیت
    const truncated = plainText.slice(0, maxLength);
    const lastSpace = truncated.lastIndexOf(" ");
    return truncated.slice(0, lastSpace) + "...";
  };
  
  export default getShortCaption;