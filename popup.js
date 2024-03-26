document.addEventListener('DOMContentLoaded', function() {
    const replaceButton = document.getElementById('replaceButton');
    const imageUrlInput = document.getElementById('imageUrlInput');
  
    replaceButton.addEventListener('click', function() {
      const imageUrl = imageUrlInput.value;
  
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.scripting.executeScript({
          target: {tabId: tabs[0].id},
          function: replaceImages,
          args: [imageUrl]
        });
      });
    });
  
    function replaceImages(imageUrl) {
      const images = document.querySelectorAll('img');
      images.forEach(image => {
        image.src = imageUrl;
      });
    }
  });
  