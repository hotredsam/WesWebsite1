document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const employeeID = document.getElementById("employee-id").value;
    if (employeeID === "10364") {
        window.location.href = "home.html";
    } else {
        alert("Invalid Employee ID");
    }
});
