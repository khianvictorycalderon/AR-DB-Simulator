function App() {

  const users = [
    { user_id: 1, first_name: "Alice", last_name: "Johnson", address: "123 Elm St" },
    { user_id: 2, first_name: "Bob", last_name: "Smith", address: "456 Oak Ave" },
    { user_id: 3, first_name: "Carol", last_name: "Anderson", address: "789 Pine Rd" },
    { user_id: 4, first_name: "David", last_name: "Lee", address: "321 Maple Blvd" },
    { user_id: 5, first_name: "Ella", last_name: "Martinez", address: "654 Cedar Ln" },
    { user_id: 6, first_name: "Frank", last_name: "Harris", address: "987 Walnut Way" },
    { user_id: 7, first_name: "Grace", last_name: "Clark", address: "222 Birch Dr" },
    { user_id: 8, first_name: "Henry", last_name: "Davis", address: "333 Cherry St" },
    { user_id: 9, first_name: "Ivy", last_name: "Nguyen", address: "555 Poplar Ct" },
    { user_id: 10, first_name: "Jack", last_name: "Wilson", address: "777 Ash Ave" },
  ];

  const orders = [
    { order_id: 1, order: "Soap", by: 3 },
    { order_id: 2, order: "Shampoo", by: 7 },
    { order_id: 3, order: "Toothpaste", by: 1 },
    { order_id: 4, order: "Conditioner", by: 5 },
    { order_id: 5, order: "Body Lotion", by: 2 },
    { order_id: 6, order: "Face Wash", by: 9 },
    { order_id: 7, order: "Detergent", by: 4 },
  ];

  return `
    <div>
      <h1>Artificial React Database Simulator</h1>
      <p>Put all your codes in assets/script.js</p>
    </div>
  `;
}

// Render the content
document.getElementById("root").innerHTML = App();