export const a_img = (
  anchorClass,
  anchorHref,
  imgClass,
  srcImg,
  altImg
) => {
  return `<a class="${anchorClass}" href="${anchorHref}" target="_blank" rel="noopener noreferrer">
    <img class="${imgClass}" src="${srcImg}" alt="${altImg}">
  </a>`;
};
