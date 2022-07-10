import axios from 'axios';

//nice to have to import consts


export const getArtworksPage = async (
    page,
    limit
) => {
    console.log(page)
    const response = await axios.get(
        `https://api.artic.edu/api/v1/products?page=${page}&limit=${limit}&fields=id,title,image_url,max_current_price`
    );
    return response.data
}

export const getArtworkById = async (
    id
) => {
    const response = await axios.get(
        `https://api.artic.edu/api/v1/product/${id}`
    );
    return response.data
}
