const contactButton = document.querySelector('.contact-button');

contactButton.addEventListener('mousemove', (e) => {
  const buttonRect = contactButton.getBoundingClientRect();
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const offset = 50; // Distance the button moves away from the mouse

  if (
    mouseX > buttonRect.left - offset &&
    mouseX < buttonRect.right + offset &&
    mouseY > buttonRect.top - offset &&
    mouseY < buttonRect.bottom + offset
  ) {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Calculate new position
    let newLeft = buttonRect.left + (buttonRect.left - mouseX);
    let newTop = buttonRect.top + (buttonRect.top - mouseY);
    
    // Ensure the button stays within the viewport
    if (newLeft < 0) newLeft = 0;
    if (newLeft + buttonRect.width > windowWidth) newLeft = windowWidth - buttonRect.width;
    if (newTop < 0) newTop = 0;
    if (newTop + buttonRect.height > windowHeight) newTop = windowHeight - buttonRect.height;

    // Apply new position
    contactButton.style.position = 'absolute';
    contactButton.style.left = `${newLeft}px`;
    contactButton.style.top = `${newTop}px`;
  }
});