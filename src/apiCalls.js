export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        return data
      })
}

export const postUrls = async (newUrl) => {
  console.log(newUrl)
  if(newUrl){
  try {
    const response = await fetch(
      
      `http://localhost:3001/api/v1/urls`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          {
            long_url: newUrl.long_url,
            title: newUrl.title
          }
        ),
      },
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was a problem with the POST request:", error);
    throw error;
  }
}
};

