let employes = [];
let idCounter = 1;

function addUser() {
  const name = document.getElementById('name').value.trim();
  const profession = document.getElementById('profession').value.trim();
  const age = document.getElementById('age').value.trim();
  const message = document.getElementById('message');

  if (!name || !profession || !age) {
    message.textContent =
      'Error : Please Make sure All the fields are filled before adding an employee!';
    message.className = 'error';
    return;
  }

  const newEmployees = {
    id: idCounter++,
    name,
    profession,
    age: Number(age),
  };

  employes.push(newEmployees);
  message.textContent = 'Success : Employee Added!';
  message.className = 'success';
  renderEmployes();

  // Clear input fields
  document.getElementById('name').value = '';
  document.getElementById('profession').value = '';
  document.getElementById('age').value = '';
}

function renderEmployes() {
  const list = document.getElementById('employeeList');
  if (employes.length === 0) {
    list.textContent = 'You have no employees.';
    return;
  }

  list.innerHTML = '';
  employes.forEach((emp) => {
    const div = document.createElement('div');
    div.className = 'employee';
    div.innerHTML = `
      <p>Name: ${emp.name}</p>
      <p>Profession: ${emp.profession}</p>
      <p>Age: ${emp.age}</p>
      <button onclick="deleteUser(${emp.id})">Delete User</button>
    `;
    list.appendChild(div);
  });
}

function deleteUser(id) {
  employes = employes.filter((emp) => emp.id !== id);
  renderEmployes();
}
