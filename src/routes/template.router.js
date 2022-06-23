import StatusCodes from 'http-status-codes';
import { Router } from 'express';
import templateService from '../services/template.service.js';
import responseFormat from '../shared/responseFormat.js';
import { validate, schemas } from '../middlewares/validation.js';

const router = Router();


//define route


/**
 * Get template by id
 * 
 * GET
 * /api/templates/id
 * 
 */
 router.get('/:id', async (req, res) => {

    const templateId = req.params.id;

    try {
        const template = await templateService.templateFunction(templateId);
        if (!template) 
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(responseFormat(false, { 
                message: 'Không tìm thấy sản phẩm yêu cầu.' 
            }, {})).end();

        return res.status(StatusCodes.OK).json(responseFormat(true, {} , {
            template
        }));

    } catch(e) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(responseFormat(false, { message: e }, {})).end()
    }
});

export default router;