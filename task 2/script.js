function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value.trim();

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const phoneError = document.getElementById("phoneError");
  const passwordError = document.getElementById("passwordError");

  let valid = true;

  nameError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";
  passwordError.textContent = "";

  const namePattern = /^[A-Za-z ]+$/;
  const phonePattern = /^[0-9]{10}$/;
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

  if (!namePattern.test(name)) {
    nameError.textContent = "Name should contain only letters and spaces.";
    valid = false;
  }

  if (!email.includes("@") || !email.includes(".")) {
    emailError.textContent = "Enter a valid email.";
    valid = false;
  }

  if (!phonePattern.test(phone)) {
    phoneError.textContent = "Phone should be 10 digits only.";
    valid = false;
  }

  if (!passwordPattern.test(password)) {
    passwordError.textContent = "Password must include uppercase, lowercase, special char, and be at least 8 chars.";
    valid = false;
  }

  if (valid) {
    alert("Success! Form submitted.");
    document.getElementById("formPage").style.display = "none";
    document.getElementById("todoPage").style.display = "flex";
  }
}

function addTodo() {
  const taskInput = document.getElementById("todoInput");
  const task = taskInput.value.trim();
  if (task === "") return;

  const li = document.createElement("li");
  li.className = "todo-item";

  const span = document.createElement("span");
  span.textContent = task;
  span.className = "task-text";

  // Clicking the task will remove it
  span.onclick = () => li.remove();

  li.appendChild(span);
  document.getElementById("todoList").appendChild(li);
  taskInput.value = "";
}

