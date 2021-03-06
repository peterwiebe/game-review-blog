import {Router} from 'express'
import controller from './post.controller'

const router = Router()

// /api/post
router.route('/')
    .get(controller.getMany)
    .post(controller.createOne)

// /api/post/:id
router.route('/:id')
    .get(controller.getOne)
    .put(controller.updateOne)
    .delete(controller.removeOne)

export default router
