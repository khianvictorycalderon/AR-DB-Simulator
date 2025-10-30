function App() {
  
  return `
    <div>
      <h1>Artificial React Database Simulator</h1>
      <p>Put all your codes in assets/script.js</p>

      <br/><br/>

      <p>Data:</p>
      <ul>
        ${sampleData.map(item => (
          `
          <li>
            <h2>${item.title}</h2>
            <p>${item.description}</p>
            <br/>
          </li>
          `
          // joins removes the comma
        )).join("")}
      <ul>
    </div>
  `;
}

// Render the content
document.getElementById("root").innerHTML = App();