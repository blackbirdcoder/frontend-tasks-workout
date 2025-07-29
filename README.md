# You need to implement 3 pages
Page - form for creating a product (Name, description, price)

Page - Table of created products (id, name, price, delete button, edit button)

Product edit page - the same as creation, only when saving, the created product should be edited, not created

Pages can have separate script files and be separated from each other

Data transfer between pages should occur through localStorage

In localStorage, you will have 2 data items

Array of product objects

The selectedProductID field - where the id of the selected product will be stored for the edit product page. On the product creation page, there should be a check of inputs for correct input,

when clicking the create button, the data should first be written to localStorage and only then redirect the user to the product list page

On the product list page, display a list of products, the newest ones on top.

When you click on the Edit button of a specific product in the product table, you need to write the product ID to the selectedProductID field in localStorage and then open the product edit page.

Use bootstrap for layout, no need to bother, the interface can be simple, and just implement what is described above.
