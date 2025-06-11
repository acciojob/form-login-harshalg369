function getFormvalue(event) {
  event.preventDefault(); // prevent form from refreshing the page

  const fname = document.querySelector('[name="fname"]').value.trim();
  const lname = document.querySelector('[name="lname"]').value.trim();

  if (fname === "" && lname === "") {
    alert("Please enter your name.");
  } else {
    alert(`${fname} ${lname}`.trim());
  }
}
