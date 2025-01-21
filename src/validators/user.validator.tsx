import * as Joi from "joi";

export const userValidator=Joi.object(
    {
        username:Joi.string().pattern(/\w{4,10}/).required().messages(
            {
                'string.pattern.base':'name must have least 4 char'
            }
        ),

        password:Joi.string().min(3).max(6).required().messages(
            {
                "string.min":"min 3 chars",
                'string.max':'max 6 chars'

            }
        ),

        age:Joi.number().min(18).required()
    }
)