

export const getGifs = async (category) => {

    const limite = 10;
    const apiKey = 'RJ05eUrXk5oZjhaPpCn1hNSFvJMzxmhH';

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${limite}&api_key=${apiKey}`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;

};

/* getGifs(); */

export default getGifs;