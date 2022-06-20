module.exports = (model, populateList = []) => {
  return {

    createOne: (entity) => {
      model.insertOne(entity)
      const newEntry = new model(entity)
      return newEntry.save()
    },

    findAll: () => model.find({}).populate(...populateList),

    findOne: (id) => model.findById(id).populate(...populateList),

    updateOne: async (id, entity) => {
      const newEntity = new model(entity)
      const error = newEntity.validateSync()
      if (!error) {
        return model.findByIdAndUpdate(id, entity, { new: true })
      }
      throw new Error(error)
    },

    deleteOne: (id) => model.findByIdAndRemove(id)
  }

}

// jók így ezek a metódusok? a visszatérési értékek?