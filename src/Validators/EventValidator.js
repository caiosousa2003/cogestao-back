const { default: mongoose } = require("mongoose");
const { z } = require("zod");
const { validateRequest } = require("zod-express-middleware");

const create = validateRequest({
    body:z.object({
        title: z.string({ required_error:"O título é obrigatório"}),
        description: z.string({required_error: "A descrição é obrigatória"}),
        category: z.string({required_error: "A categoria é obrigatória"}),
        image: z.string({required_error: "A imagem é obrigatória"}).url("O URL não é válido"),
    }),

});

const destroy = validateRequest({
    params: z.object({
        id: z.custom(mongoose.isValidObjectId,"O id não é válido"),
    }),
});

const update = validateRequest({
    body: z.object({
        title: z.string().optional(),
        description: z.string().optional(),
        category: z.string().optional(),
        image: z.string().url("O URL não é válido").optional(),
    }),
    params: z.object({
        id: z.custom(mongoose.isValidObjectId,"O id não é válido"),
    }),
});

module.exports={
    create,
    destroy,
    update,
};