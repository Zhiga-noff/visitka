import {api} from "./api.services";

export const getInfiniteNewsServices = async (
    url: string,
    page = 1,
    size = 4,
) => {
    const newUrl = url.replace('?page=1', '')
    const {data} = await api.get(newUrl, {
        params: {
            page,
            size,
        },
    });
    return data;
};