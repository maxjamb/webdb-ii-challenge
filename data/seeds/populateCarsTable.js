exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          VIN: "123456789",
          make: "opel",
          model: "corsa",
          mileage: "54323"
        },
        {
          VIN: "4126789",
          make: "bmw",
          model: "mercedes",
          mileage: "12452",
          transmissionType: "awesome",
          statusOfTitle: "clean"
        },
        {
          VIN: "14326789",
          make: "ferrari",
          model: "f1",
          mileage: "75462",
          transmissionType: "cool",
          statusOfTitle: "trash"
        }
      ]);
    });
};
