import axios from "axios";

export default {
  // Gets all books
  getCustomers: function() {
    return axios.get("/api/customer");
  },
  // Gets the book with the given id
  getCustomer: function(id) {
    return axios.get("/api/customer/" + id);
  },
  // Deletes the book with the given id
  deleteCustomer: function(id) {
    return axios.delete("/api/customer/" + id);
  },
  // Saves a book to the database
  saveCustomer: function(customerData) {
    return axios.post("/api/customer", customerData);
  }
};
