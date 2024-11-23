document.addEventListener("DOMContentLoaded", () => {
    // Step 2: Get the elements
    const boxContainer = document.getElementById("box-container");
    const newBoxButton = document.getElementById("new-box-button");
    const colorForm = document.getElementById("color-form");
    const colorInput = document.getElementById("color-input");

    // Step 3: Variables for box color and counter
    let boxColor = "green"; // Default color
    let boxCounter = 1;

    // Step 4: Update the box color and all existing boxes
    colorForm.addEventListener("submit", (e) => {
        e.preventDefault();
        boxColor = colorInput.value || "green"; // Default to green if input is empty
        const boxes = document.querySelectorAll(".box");
        boxes.forEach(box => box.style.backgroundColor = boxColor);
        colorInput.value = ""; // Reset input field
    });

    // Step 5: Function to add a new box
    const addBox = () => {
        const newBox = document.createElement("div");
        newBox.className = "box";
        newBox.style.backgroundColor = boxColor;
        newBox.textContent = boxCounter;
        newBox.dataset.id = boxCounter; // Store ID as data attribute
        boxContainer.appendChild(newBox);
        boxCounter++; // Increment the counter
    };

    // Step 6: Add box when the button is clicked
    newBoxButton.addEventListener("click", addBox);

    // Step 7: Remove a box on double-click
    document.addEventListener("dblclick", (e) => {
        if (e.target.classList.contains("box")) {
            e.target.remove();
        }
    });

    // Step 8: Display box's coordinates on hover
    document.addEventListener("mouseover", (e) => {
        if (e.target.classList.contains("box")) {
            const { pageX, pageY } = e;
            e.target.textContent = `(${pageX}, ${pageY})`;
        }
    });

    // Step 9: Revert to ID on mouse out
    document.addEventListener("mouseout", (e) => {
        if (e.target.classList.contains("box")) {
            e.target.textContent = e.target.dataset.id;
        }
    });

    // Step 10: Add box with the 'N' key
    document.addEventListener("keydown", (e) => {
        if ((e.key === "N" || e.key === "n") && e.target !== colorInput) {
            addBox();
        }
    });
});
