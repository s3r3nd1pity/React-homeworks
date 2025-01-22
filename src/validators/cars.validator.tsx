import * as Joi from "joi";

export const carsValidator = Joi.object(
    {
        brand: Joi.string().pattern(new RegExp('^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$')).min(1).max(20).messages(
            {'string.pattern.base': 'You can use only eng/ukr chars and min is 1 char, and max is 20 chars'},
        ).required(),
        price: Joi.number().min(0).max(1000000).messages(
            {
                'number.min': 'Min price is 0',
                'number.max': 'Max price is 1000000'
            }
        ).required(),
        year: Joi.number().max(2024).min(1990).messages(
            {
                'number.min': 'Min year is 1990',
                'number.max': 'Max year is 2024'
            }
        ).required()

    }
)