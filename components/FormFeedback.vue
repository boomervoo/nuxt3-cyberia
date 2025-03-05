<script setup lang="ts">
import { sendFeedback } from '~/api/feedback';
import useVuelidate from '@vuelidate/core';
import { required, email, helpers } from '@vuelidate/validators';

const form = reactive({
    name: '',
    email: '',
    phone: '',
    message: '',
    agreement: false,
});
const resetForm = () => {
    form.name = '';
    form.email = '';
    form.phone = '';
    form.message = '';
    form.agreement = false;
};

const rules = {
    email: {
        required: helpers.withMessage('Поле обязательно', required),
        email: helpers.withMessage('Некорректный email', email),
    },
    phone: {
        required: helpers.withMessage('Поле обязательно', required),
        phoneFormat: helpers.withMessage(
            'Введите корректный номер',
            (value: string) => {
                return /^\+?\d{10,11}$/.test(value);
            }
        ),
    },
    name: {
        required: helpers.withMessage('Поле обязательно', required),
    },

    message: {
        required: helpers.withMessage('Поле обязательно', required),
    },
    agreement: {
        required: helpers.withMessage(
            'Поле обязательно',
            (value: boolean) => value === true
        ),
    },
};

const v$ = useVuelidate(rules, form);

const onSubmit = () => {
    v$.value.$validate();

    if (!v$.value.$error) {
        const formData = new FormData();
        formData.append('name', form.name);
        formData.append('phone', form.phone);
        formData.append('email', form.email);
        formData.append('message', form.message);
        formData.append('message', form.message);

        sendFeedback(formData);
        console.log('Форма успешно отправлена:', form);
        resetForm();
        v$.value.$reset();
    }
};
const nameError = computed(() => v$.value.name.$errors[0]?.$message);
const emailError = computed(() => v$.value.email.$errors[0]?.$message);
const phoneError = computed(() => v$.value.phone.$errors[0]?.$message);
const messageError = computed(() => v$.value.message.$errors[0]?.$message);
const agreementError = computed(() => v$.value.agreement.$errors[0]?.$message);
</script>

<template>
    <section class="feedback">
        <div class="container">
            <h2 class="title feedback__title">
                Расскажите о&nbsp;вашем проекте:
            </h2>
            <form @submit.prevent="onSubmit" action="" class="form">
                <div class="form__block">
                    <div class="form__input-wrapper">
                        <input
                            v-model="form.name"
                            type="text"
                            class="form__input"
                            placeholder=""
                            id="name"
                        />
                        <label for="name" class="form__label">Имя</label>
                        <span v-if="v$.name.$error" class="error">
                            {{ nameError }}
                        </span>
                    </div>
                    <div class="form__input-wrapper">
                        <input
                            v-model="form.email"
                            type="email"
                            class="form__input"
                            placeholder=""
                            id="email"
                        />
                        <label for="email" class="form__label">Email</label>
                        <span v-if="v$.email.$error" class="error">
                            {{ emailError }}
                        </span>
                    </div>
                    <div class="form__input-wrapper">
                        <input
                            v-model="form.phone"
                            type="number"
                            id="phone"
                            class="form__input"
                            placeholder=""
                        />
                        <span v-if="v$.phone.$error" class="error">
                            {{ phoneError }}
                        </span>

                        <label for="phone" class="form__label">Телефон</label>
                    </div>

                    <div class="form__message-wrapper">
                        <textarea
                            v-model="form.message"
                            type="text"
                            id="message"
                            placeholder=""
                            class="form__message-textarea"
                        ></textarea>
                        <label for="message" class="form__label">
                            Сообщение
                        </label>
                        <span v-if="v$.message.$error" class="error">
                            {{ messageError }}
                        </span>
                    </div>
                </div>
                <div class="form__send">
                    <label for="checkbox" class="form__checkbox">
                        <input
                            v-model="form.agreement"
                            class="checkbox__input"
                            id="checkbox"
                            type="checkbox"
                            value="false"
                        />
                        <span class="checkbox__span"
                            >Согласие на обработку персональных данных</span
                        >
                        <span v-if="v$.message.$error" class="error">
                            {{ agreementError }}
                        </span>
                    </label>
                    <div class="button">
                        <button
                            id="project-button"
                            type="submit"
                            class="checkbox__btn"
                        >
                            Обсудить проект
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>

<style lang="scss">
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: #fff;
}

@mixin spanPosition {
    position: relative;
    top: 9px;
    left: 25px;
    padding: 0 5px;
    background: #2f2f3c;
    font-family: var(--font-family);
    font-weight: 300;
    font-size: 16px;
    color: #eff3ff;
    transition: 0.2s;
    pointer-events: none;
}

.feedback {
    &__title {
        margin-bottom: 72px;
        max-width: 385px;
        font-weight: 600;
        font-size: 40px;
        line-height: 56px;
        letter-spacing: 0.7px;
        color: #eff3ff;
    }
}

.form__input-wrapper {
    position: relative;
}

.form__input {
    color: #eff3ff;
    background: transparent;
    border: 1px solid #9aa8ba;
    border-radius: 8px;
    outline: none;
    padding: 15px 0 15px 10px;
    transition: border-color 0.2s;
    width: 100%;
}

.form__label {
    padding: 1px 15px;
    background-color: #2f2f3d;
    position: absolute;
    left: 10px;
    top: -6px;
    color: #eff3ff;
    transition: top 0.6s ease-in-out;
}

//.form__input:focus + .form__label {
//    top: -10px;
//}
//.form__input:not(:placeholder-shown) + .form__label {
//    top: -10px;
//}

.form__message-wrapper {
    width: 100%;
    border: 1px solid #9aa8ba;
    border-radius: 8px;
    margin: 0 0 30px;
    min-height: 210px;
    position: relative;
}
.form__message-textarea {
    color: #eff3ff;
    position: relative;
    resize: none;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: 400;
    padding: 10px 0 20px 20px;
    width: 100%;
    height: 100%;
    max-height: 120px;
}

.form {
    position: relative;
    width: 100%;
    padding-bottom: 100px;

    &__block {
        position: relative;
        margin-bottom: 21px;
        display: flex;
        gap: 40px;
    }

    &__input {
        width: 100%;
        padding: 21px 15px;
        border: 1.5px solid #9aa8ba;
        border-radius: 8px;
        font-family: var(--font-family);
        font-weight: 300;
        font-size: 16px;
        color: #eff3ff;
        transition: border 0.3s ease-in-out;

        &__input:focus {
            border: 2px solid #2e76f9;
        }

        &__input:hover {
            border: 2px solid #2e76f9;
        }

        &__input:active {
            border: 2px solid #2e76f9;
        }
    }

    &__textarea {
        margin: 0;
        padding: 21px 15px;
        width: 100%;
        height: 139px;
        border: 1.5px solid #9aa8ba;
        border-radius: 8px;
        font-family: var(--font-family);
        font-weight: 300;
        font-size: 16px;
        color: #eff3ff;

        &__message {
            position: relative;
        }
    }

    &__send {
        padding-top: 39px;
    }
}

.label__span {
    @include spanPosition;
}

.span {
    &__name {
        padding: 0 15px;
    }

    &__email {
        padding: 0px 12px;
    }

    &__number {
        padding: 0px 12px;
    }
}

.span__textarea {
    position: relative;
    top: 10px;
    left: 26px;
    padding: 0 10px;
}

.checkbox {
    &__input {
        position: absolute;
        z-index: -1;
        opacity: 0;
    }

    &__span {
        cursor: pointer;
        display: flex;
        align-items: center;
        font-weight: 300;
        font-size: 16px;
        letter-spacing: 0.16px;
        color: #eff3ff;
    }

    &__input + &__span::before {
        content: '';
        display: inline-flex;
        width: 23px;
        height: 23px;
        flex-shrink: 0;
        flex-grow: 0;
        border: 1.5px solid #eff3ff;
        border-radius: 2px;
        margin-right: 10px;
        background-repeat: no-repeat;
        background-position: center center;
        transition: border-color 0.3s ease-in-out; /* добавляем плавный переход */
        user-select: none;
    }

    &__input:checked + &__span::before {
        border-color: #2e76f9; /* изменяем цвет рамки при активации */
        background-image: url('data:image/svg+xml;utf8,<svg fill="%232e76f9" height="25" viewBox="0 0 20 20" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M7.629 14.278l-3.748-3.75 1.133-1.133 2.614 2.614L15.5 5.464l1.133 1.133z"/></svg>'); /* добавляем изображение галочки */
    }

    &__input:focus + &__span::before {
        outline: 2px solid #2e76f9; /* добавляем outline при фокусе */
    }

    &__btn {
        --opacity: 1;
        --opacityColor: 1;
        cursor: pointer;
        border: 1px solid #2d76f9;
        border-radius: 85px;
        padding: 20px 55px;
        background: #2d76f9;
        font-weight: 400;
        font-size: 18px;
        color: #fff;
        opacity: var(--opacity);
        transition:
            opacity 0.3s ease-in-out,
            color 0.3s ease-in-out;

        &:hover {
            --opacity: 0.7;
        }
        &:active {
            --opacity: 0.9;
        }
    }
}

.error {
    left: 0px;
    bottom: 0px;
    position: relative;
    color: red;
    font-size: 0.875em;
}

.error-agreement {
    left: 0px;
    bottom: 0px;
    position: relative;
    color: red;
    font-size: 0.875em;
}

.error-message {
    left: 0px;
    bottom: 0px;
    position: relative;
    color: red;
    font-size: 0.875em;
}

.button {
    display: flex;
    justify-content: center;
    padding-top: 63px;
}

@media (max-width: 768px) {
    .form {
        padding-bottom: 80px;

        &__block {
            flex-direction: column;
        }

        &__label {
            position: relative;
            width: 100%;
        }
    }

    .label__span {
        position: absolute;
        font-weight: 400;
        font-size: 13px;
        color: #eef3ff;
        top: 20px;
        left: 0px;
        letter-spacing: 0.3px;
        background: none;
    }

    .span__textarea {
        top: -115px;
        left: 3px;
    }
}

@media (max-width: 375px) {
    .feedback {
        padding-bottom: 15px;

        &__title {
            margin-bottom: 34px;
            position: relative;
            padding-left: 103px;
            padding-top: 61px;
            font-weight: 500;
            font-size: 24px;
            color: #eef3ff;
            line-height: 29px;
            letter-spacing: 0.5px;

            &::before {
                position: absolute;
                content: '';
                background-image: url('../img/planet.svg');
                width: 76px;
                height: 70px;
                left: 0px;
                bottom: -1px;
            }
        }
    }

    .form {
        &__input {
            padding: 16px 15px;
        }

        &__block {
            margin-bottom: 24px;
            gap: 22px;
        }

        &_label {
            position: relative;
        }
    }

    .label__span {
        position: absolute;
        font-weight: 400;
        font-size: 13px;
        color: #eef3ff;
        top: 20px;
        left: 0px;
        letter-spacing: 0.3px;
    }

    .span__textarea {
        top: -115px;
        left: 3px;
    }

    .checkbox__span {
        display: none;
    }

    .checkbox__btn {
        padding: 14px 125px;
        font-weight: 400;
        font-size: 15px;
        letter-spacing: 0.5px;
        color: #fff;
    }

    .form__send {
        padding-top: 38px;
    }

    .button {
        padding: 0;

        &::after {
            position: absolute;
            bottom: 16px;
            content: 'Нажимая “Отправить”, Вы даете согласие на обработку персональных данных';
            font-family: var(--second-family);
            font-weight: 400;
            font-size: 13px;
            text-align: center;
            line-height: 19px;
            color: #eef3ff;
        }
    }
}
</style>
