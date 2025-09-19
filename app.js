// const accessKey = 'BFkaCUyh7KFQ5xRSq-rxs5Z71DGu5DAf-Oc-bdt9Kq8'; // Replace with your Unsplash Access Key

    async function searchImages() {
      const query = document.getElementById('search-input').value.trim();
      const imageContainer = document.getElementById('image-container');
      imageContainer.innerHTML = ''; // Clear previous results

      if (!query) {
        alert("Please enter a keyword.");
        return;
      }

      try {
        const response = await fetch(`https://searchimageappbackend-2.onrender.com/api/search-images?query=${query}`);
        const data = await response.json();

        if (data.results.length > 0) {
          data.results.forEach(photo => {
            const img = document.createElement('img');
            img.src = photo.urls.regular;
            img.alt = photo.alt_description || 'Unsplash Image';

            const div = document.createElement('div');
            div.className = 'image-item';
            div.appendChild(img);

            imageContainer.appendChild(div);
          });
        } else {
          alert("No images found. Try another keyword.");
        }
      } catch (error) {
        console.error('Error fetching images:', error);
        alert("Something went wrong. Try again.");
      }
    }
    //https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}&per_page=12