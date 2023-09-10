document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("Questions");
    const table = document.getElementById("Answers");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const profilePic = document.getElementById("profilePic").value;
        const edProgram = document.querySelector('input[name="EdProgram"]:checked').value;
        const degrees = [...document.querySelectorAll('input[name="degrees"]:checked')].map(e => e.value);

        const tableValues = [
            ["Name", name],
            ["Profile Picture", profilePic],
            ["Educational Program", edProgram],
            ["Educational Degrees", degrees.join(", ")]
        ];

        tableValues.forEach(data => {
            const row = document.createElement("tr");
            data.forEach(cellData => {
                const cell = document.createElement("td");
                cell.textContent = cellData;
                row.appendChild(cell);
            });
            table.appendChild(row);
        });
    });
});
