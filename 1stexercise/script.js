const students = [
    { name: "John Doe", photo: "https://via.placeholder.com/50", projectLink: "https://github.com/johndoe" },
    { name: "Jane Smith", photo: "https://via.placeholder.com/50", projectLink: "https://github.com/janesmith" },
    { name: "Alice Johnson", photo: "https://via.placeholder.com/50", projectLink: "https://github.com/alicejohnson" }
];

const tableBody = document.querySelector("#studentTable tbody");

students.forEach((student, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${index + 1}</td>
        <td>${student.name}</td>
        <td><img src="${student.photo}" alt="${student.name}'s Photo"></td>
        <td>
            <input type="file" accept="application/pdf" onchange="uploadCV(event, ${index})">
        </td>
        <td><a href="${student.projectLink}" target="_blank">View Projects</a></td>
    `;

    tableBody.appendChild(row);
});

function uploadCV(event, index) {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
        alert(`CV uploaded successfully for ${students[index].name}`);
    } else {
        alert("Please upload a valid PDF file.");
        event.target.value = "";
    }
}
