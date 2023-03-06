export const handleScroll = (section, isMobile) => {
  import('react-scroll').then((scroll) => {
    return scroll.scroller.scrollTo(section, {
      duration: 500,
      smooth: true,
      offset: isMobile ? -60 : -80,
    });
  });
  return;
};