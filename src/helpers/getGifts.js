export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?limit=8&q=${category}&api_key=0FAUWHMsNLzmwzFro6hIvqdcWwJ5VxEj`;
  const data = await fetch(url);
  const resp = await data.json();
  const gifs = resp.data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  return gifs;
};
