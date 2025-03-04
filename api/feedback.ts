export async function sendFeedback (payload: {phone: string, email: string, message: string}): Promise<any>{
    const apiUrl = useRuntimeConfig().public.apiBaseUrl;

    try {
        const response = await $fetch(`${apiUrl}feedbacks/`, {
            method: 'POST',
            body: payload,
        })
        console.log('Успешная отправка данных формы', response);
        return response
    } catch (error) {
        console.error('Ошибка отправки формы', error);
    }
}


