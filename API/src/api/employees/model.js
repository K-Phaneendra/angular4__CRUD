import mongoose, { Schema } from 'mongoose'

const employeesSchema = new Schema({
    name: {
        type: String
    },
    code: {
      type: String
    },
    createdBy: {
      type: Object
    },
    email: {
      type: String
    },
    password: {
      type: String
    }
}, {
    timestamps: true
});

employeesSchema.methods = {
    view (full) {
      const view = {
        id: this.id,
        name: this.name,
        code: this.code,
        createdBy: this.createdBy,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
        email: this.email,
      }

      return full ? {
        ...view
        // add properties for a full view
      } : view
    }
  }

const model = mongoose.model('Employees', employeesSchema)

export const schema = model.schema
export default model