export const animateBox = (element) => {
  anime({
    targets: element,
    rotate: {
      value: 360,
      opacity: [0, 1],
      duration: 750,
      easing: 'easeOutSine'
    }    
  });
};

