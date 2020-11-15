

export const getGifs = async(category) => {

    const urlBase = `https://api.giphy.com/v1/gifs/search`;
    const apiKey = 'ashrfuaHLR0qXnanAxW5Khu9LC2apMv4';
    const url =`${urlBase}?q=${encodeURI(category)}&limit=10&api_key=${apiKey}`;
    const resp = await fetch(url);

    const {data} = await resp.json();

    const gifs = data.map(img=>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;


}
