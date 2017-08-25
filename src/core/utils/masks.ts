import { Injectable } from '@angular/core';

@Injectable()
export class Masks {
    /**
     * CEP
     */
    public zipCode = {
        mask: [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/],
        showMask: true,
        pattern: /\d{5}\-\d{3}/
    };

    /**
     * CPF
     */
    public cpf = {
        mask: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/],
        showMask: true,
        pattern: /\d{3}\.\d{3}\.\d{3}\-\d{2}/
    };

    /**
     * CNPJ
     */
    public cnpj = {
        mask: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/],
        showMask: true,
        pattern: /\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}/
    };

    /**
     * Número de telefone
     */
    public phoneNumber = {
        mask: function mask(userInput) {
            let numbers = userInput.match(/\d/g);
            let length = 0;

            if (numbers)
                length = numbers.join("").length;

            if (length > 8)
                return [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
            else
                return [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        },
        showMask: true,
        pattern: /\d{4,5}\-\d{4}/
    };

    /**
     * DDD
     */
    public phoneAreaCode = {
        mask: [/\d/, /\d/],
        showMask: true,
        pattern: /\d{2}/
    };

    /**
     * Número de telefone com DDD
     */
    public phoneNumberWithAreaCode = {
        mask: function mask(userInput) {
            let numbers = userInput.match(/\d/g);
            let length = 0;

            if (numbers)
                length = numbers.join("").length;

            if (length > 10)
                return ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
            else
                return ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        },
        showMask: true,
        pattern: /\(\d{2}\)\s\d{4,5}\-\d{4}/
    };

    /**
     * Dia
     */
    public date = {
        mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
        showMask: true,
        pattern: /\d{2}\/\d{2}\/\d{4}/
    };

    /**
     * Hora
     */
    public time = {
        mask: [/\d/, /\d/, ':', /\d/, /\d/],
        showMask: true,
        pattern: /\d{2}\:\d{2}/
    };
}