
export const getAnimes = () => {
    return fetch('https://api.jikan.moe/v4/anime')
        .then(response => response.json())
        .then(res => {
            const { data } = res

            const animes = data.map(img => ({
                id: img.mal_id,
                title: img.title,
                url: img.url

            }))

            console.log(animes)
            return {
                animes
            }

        })



}