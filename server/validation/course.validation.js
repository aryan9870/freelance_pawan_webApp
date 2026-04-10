import Joi from "joi";

export const courseValidation = Joi.object({
  title: Joi.string().trim().min(3).max(100).required(),

  subtitle: Joi.string().allow(""),

  description: Joi.string().min(10).required(),

  price: Joi.number().min(0).required(),

  discountPrice: Joi.number().min(0).less(Joi.ref("price")).optional(),

  category: Joi.string().required(),

  instructor: Joi.string().required(),

  rating: Joi.number().forbidden(),
  totalReviews: Joi.number().forbidden(),
  totalStudents: Joi.number().forbidden(),

  duration: Joi.string()
    .pattern(/^\d+\s?(day|days|week|weeks|month|months|year|years)$/i)
    .optional(),

  lectures: Joi.array()
    .items(
      Joi.object({
        title: Joi.string().required(),
        videoUrl: Joi.string().uri().required(),
        duration: Joi.string().required(),
      }),
    )
    .optional(),

  whatYouWillLearn: Joi.array().items(Joi.string()).optional(),

  requirements: Joi.array().items(Joi.string()).optional(),

  isFeatured: Joi.boolean().optional(),
});
