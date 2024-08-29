$(document).ready(function() {
    let activeIndex = null;
  
    $('.image-container').click(function() {
      const index = $(this).data('index');
      if (activeIndex === index) {
        // If the clicked index is the active one, deactivate it
        $(this).find('.text-overlay').removeClass('active');
        $(this).find('img').hide();
        activeIndex = null;
      } else {
        // Deactivate the previously active one
        if (activeIndex !== null) {
          $(`.image-container[data-index="${activeIndex}"]`).find('.text-overlay').removeClass('active');
          $(`.image-container[data-index="${activeIndex}"]`).find('img').hide();
        }
  
        // Activate the new one
        $(this).find('.text-overlay').addClass('active');
        $(this).find('img').show();
        activeIndex = index;
      }
    });
  
    // Initialize: hide all images initially
    $('.image-style').hide();
  });
  