const dummyContacts = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "jo123@gmail.com",
    phone: "1234567890",
    companyName: "NextCode",
    message: "Hello, I am John Doe",
  },
];

for (let i = 2; i < 100; i++) {
  dummyContacts.push({
    id: i,
    firstName: `${i}John`,
    lastName: "Doe",
    email: `dummy${i}@gmail.com`,
    phone: `${i + 1}23456789${i}`,
    companyName: "NextCode",
    message: `Hello, I am ${i}John Doe. I want to know more about your services.`,
  });
}

export default dummyContacts;
