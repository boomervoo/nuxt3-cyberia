type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

type FormData = {
    name: string;
    email: string;
    phone: string;
    message: string;
    agreement: boolean;
};

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

export async function sendFeedback(
    payload: FormData,
    method: Method
): Promise<void> {
    const apiUrl = useRuntimeConfig().public.apiBaseUrl;

    try {
        const response = await $fetch(`${apiUrl}feedbacks/`, {
            method: 'POST',
            body: payload,
        });
        console.log('Успешная отправка данных формы', response);
        return response;
    } catch (error) {
        console.error('Ошибка отправки формы', error);
    }
}
