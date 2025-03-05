interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
    agreement: boolean;
}

export async function sendFeedback(payload: FormData): Promise<void> {
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
