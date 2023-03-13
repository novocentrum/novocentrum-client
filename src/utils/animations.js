export const opacityAnimation = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {delay: 0.3},
  }
};

export const objectsAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: custom => ({
    opacity: 1,
    transition: {delay: 0.2 + (custom * 0.25)},
  })
};

export const leftAnimation = {
  hidden: {
    x: -1000,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 45,
      delay: 0.45
    }
  }
};

export const rightAnimation = {
  hidden: {
    x: 1000,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 45,
      delay: 0.7
    }
  }
};

export const imageAnimation = {
  hidden: { opacity: 0 },
  visible: custom => ({
    opacity: 1,
    transition: {
      delay: 1 + (custom * 0.25)
    }
  })
};