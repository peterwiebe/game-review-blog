export const createOne = model => async (req, res) => {
    try {
        const doc = await model.create(req.body)
        res.status(201).json(doc)
    } catch (e) {
        console.error(e)
        res
            .status(400)
            .json({status: 400})
    }
}

export const getMany = model => async (req, res) => {
    try {
        const docs = await model
            .find()
            .lean()
            .exec()

        res.status(200).json(docs)
    } catch (e) {
        console.error(e)
        res
            .status(400)
            .json({status: 400})
    }
}

export const getOne = model => async (req, res) => {
    try {
        const doc = await model
            .findOne({_id: req.params.id})
            .lean()
            .exec()

        res.status(200).json(doc)
    } catch (e) {
        console.error(e)
        res
            .status(400)
            .json({status: 400})
    }
}

export const removeOne = model => async (req, res) => {
    try {
        const removed = await model.fineOneAndRemove({
            _id: req.params.id
        })

        if (!removed) {
            return res
                .status(400)
                .json({status: 400})
        }

        return res.status(200).json(removed)
    } catch (e) {
        console.error(e)
        res
            .status(400)
            .json({status: 400})
    }
}

export const updateOne = model => async (req, res) => {
    try {
        const updated = await model
            .findOneAndUpdate(
                {
                    _id: req.params.id
                },
                req.body,
                {new: true}
            )
            .lean()
            .exec()

        if (!updated) {
            return res
                .status(400)
                .json({status: 400})
        }

        res.status(200).json(udpated)
    } catch (e) {
        console.error(e)
        res
            .status(400)
            .json({status: 400})
    }
}

export const baseController = model => ({
    createOne: createOne(model),
    getMany: getMany(model),
    getOne: getOne(model),
    removeOne: removeOne(model),
    updateOne: updateOne(model)
})
