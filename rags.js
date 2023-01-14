      // Create an object to store the categories
      const categories = {
        red: [],
        green: [],
        blue: [],
        brown: [],
        white: [],
        green: [],
        beige: [],
        other: [],
      };

      // Get the form and catalogue elements
      const form = document.querySelector("#form");
      const catalogue = document.querySelector("#catalogue");

      // Add a submit event listener to the form
      form.addEventListener("submit", (event) => {
        // Prevent the form from submitting
        event.preventDefault();

        // Get the type and color input values
        const type = document.querySelector("#type").value;
        const color = document.querySelector("#color").value;

        // Add the clothing to the appropriate category
        if (color in categories) {
          categories[color].push(type);
        } else {
          categories.other.push(type);
        }

        // Clear the form input values
        document.querySelector("#type").value = "";
        document.querySelector("#color").value = "";

        // Update the catalogue
        catalogue.innerHTML = `
          <p>Red clothing: ${categories.red.join(", ")}</p>
          <p>Green clothing: ${categories.green.join(", ")}</p>
          <p>Blue clothing: ${categories.blue.join(", ")}</p>
          <p>Brown clothing: ${categories.brown.join(", ")}</p>
          <p>White clothing: ${categories.white.join(", ")}</p>
          <p>Green clothing: ${categories.green.join(", ")}</p>
          <p>Beige clothing: ${categories.beige.join(", ")}</p>
          <p>Other clothing: ${categories.other.join(", ")}</p>
        `;
      });