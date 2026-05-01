const getContacts = (req, res) => {
  res.json([
    {
      firstName: "Eli",
      lastName: "Hansen",
      email: "test@example.com",
      favoriteColor: "Blue",
      birthday: "1999-01-01"
    },
    {
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      favoriteColor: "Red",
      birthday: "1995-05-10"
    }
  ]);
};

module.exports = getContacts;