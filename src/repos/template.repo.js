import Template from '../models/template.model.js'

class TemplateRepo {

    async create(template) {
        return await Template.create(template);
    }

    async findOne(query) {
        const template = await Template.findOne(query).lean();
        return template;
    }

    async find(query, page, limit) {
        return await Template.paginate(query, {
            page,
            limit,
            lean: true,
            select: ['-created_by']
        });
    }

    async updateOne(query, newTemplate) {
        return await Template.updateOne(query, newTemplate);
    }

    async deleteOne(query) {
        return await Template.deleteOne(query);
    }

    async deleteMany(ids) {
        return await Template.deleteMany({
            _id: {
                $in: ids
            }
        })
    }
}

const templateRepo = new TemplateRepo();

export default templateRepo;