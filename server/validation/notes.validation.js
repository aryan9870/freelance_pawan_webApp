import Joi from "joi";

const notesValidationSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    subject: Joi.string().required(),
    category: Joi.string().required(),
    isFree: Joi.boolean(),
});

export default notesValidationSchema;