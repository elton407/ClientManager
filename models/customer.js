const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const relationship = require("mongoose-relationship");


const customerSchema = new Schema({
  userId: {type: String},
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  companyName: { type: String, required: true },
  companyAddress: { type: String, required: true },
  companyBudget: { type: String, required: true },
  companyNotes: { type: String, required: true }, 
  dateExpected: { type: Date },
  date: { type: Date, default: Date.now },
  notes: [{ type: Schema.ObjectId, ref: "Note" }]
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;