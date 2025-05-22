function getFormvalue(event) {
  event.preventDefault(); // Prevent form from reloading the page

  const firstName = document.querySelector('input[name="fname"]').value.trim();
  const lastName = document.querySelector('input[name="lname"]').value.trim();

  if (firstName === '' || lastName === '') {
    alert("Please fill in both First Name and Last Name.");
    return;
  }

  const fullName = `${firstName} ${lastName}`;
  alert(fullName);
}

document.getElementById("nameForm").addEventListener("submit", getFormvalue);
