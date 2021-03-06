//creates table, schema
exports.up = function(knex) {
  // don't forget the return statement
  return knex.schema.createTable("cars", tbl => {
    // creates a primary key called id
    tbl.increments();
    // creates a text field called name which is both required and unique
    tbl
      .text("name", 128)
      .unique()
      .notNullable();
    table.text("VIN").notNullable();
    table.text("make").notNullable();
    table.text("model").notNullable();
    table.text("mileage").notNullable();
    table.text("transmissionType");
    table.text("statusOfTitle");
    // creates a numeric field called budget which is required
    tbl.decimal("budget").notNullable();
  });
};

//option to delete
exports.down = function(knex) {
  // drops the entire table
  return knex.schema.dropTableIfExists("cars");
};
