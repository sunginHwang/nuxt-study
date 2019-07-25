export const KOLLUS_SECRET_KEY = 'fa0cefd06c15389ef3251ba885c3722d83144d786ca177d5bf7bd8b1e35bee96';
export const KOLLUS_CUSTOM_KEY = 'https://v.kr.kollus.com';

export const getClipVideoUrl = (mediaToken) => {
  return `${KOLLUS_CUSTOM_KEY}/s?jwt=${mediaToken}&custom_key=${KOLLUS_SECRET_KEY}&s=0`;
};
