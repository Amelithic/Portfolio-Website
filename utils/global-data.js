export const getGlobalData = () => {
  // SET GLOBAL VARS HERE
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Amelithic.com';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Portfolio website based on Next.js';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'All rights reserved.';

  return {
    //RETURN ALL GLOBAL VARS
    name,
    blogTitle,
    footerText,
  };
};
