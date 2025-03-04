type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';


export async function projectFetch(url: string, method: Method) {
    const apiUrl = useRuntimeConfig().public.apiBaseUrl;
    const headers: Record<string, string> = {
        'Content-Type': 'application/json',
    };

    try {
        const response = await $fetch(`${apiUrl}${url}`, {
            method,
            headers,
        });
        return response;
    } catch (error) {
        console.log('Ошибка запроса к API', error);
    }
}
