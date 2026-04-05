import Joi from "joi";

export const blogValidation = Joi.object({
  title: Joi.string().trim().min(5).max(150).required(),

  slug: Joi.string().trim().lowercase().optional(),

  excerpt: Joi.string().min(10).max(200).required(),

  content: Joi.string().min(20).required(),

  thumbnail: Joi.string().uri().required(),

  category: Joi.string()
    .valid("UPSC", "UPPCS", "SSC", "Current Affairs", "Strategy")
    .required(),

  author: Joi.object({
    name: Joi.string().required(),
    avatar: Joi.string().uri().optional(),
  }),

  readTime: Joi.string().optional(),

  tags: Joi.array().items(Joi.string()),

  isFeatured: Joi.boolean().optional(),

  isPublished: Joi.boolean().optional(),
});