const URL = "https://randomuser.me/api/";

const getPictureUrl = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    
    // Extract the large picture URL
    const pictureUrl = data.results[0].picture.large;

    // Create a JSON object with the picture URL
    const pictureData = {
      picture: pictureUrl
    };

    console.log(pictureData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Call the function
getPictureUrl();
