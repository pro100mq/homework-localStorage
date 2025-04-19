const getUserValue = document.querySelector('#localstorage__form');
const deleteInfo = document.querySelector("#btnDelete");
const remainInfo = document.querySelector("#btnRemain");

getUserValue.addEventListener('submit', (e) => {
  e.preventDefault();
  const userName = e.target.elements.username.value
  const userSurname = e.target.elements.usersurname.value
  const userNumber = e.target.elements.usernumber.value
  const userEmail = e.target.elements.useremail.value

  const userInfo = {
    name: userName,
    surname: userSurname,
    number: userNumber,
    email: userEmail,
  };

  const archiveUserInfo = JSON.stringify(userInfo);
  localStorage.setItem('userInformation', archiveUserInfo);

  e.target.elements.username.value = ""
  e.target.elements.usersurname.value =""
  e.target.elements.usernumber.value = ""
  e.target.elements.useremail.value = ""
});

deleteInfo.addEventListener("submit", () => {
    localStorage.clear()
    alert("Дані видалено")
});

remainInfo.addEventListener("submit", (e) => {
    localStorage.removeItem("userInformation")

    e.preventDefault();
    

    const userName = e.target.elements.username.value
    const userSurname = e.target.elements.usersurname.value
    const userNumber = e.target.elements.usernumber.value
    const userEmail = e.target.elements.useremail.value
  
    const newUserInfo = {
      name: userName,
      surname: userSurname,
      number: userNumber,
      email: userEmail,
    };
  
    const archiveNewUserInfo = JSON.stringify(newUserInfo);
    localStorage.setItem('remainUserInformation', archiveNewUserInfo);
  
    e.target.elements.username.value = ""
    e.target.elements.usersurname.value =""
    e.target.elements.usernumber.value = ""
    e.target.elements.useremail.value = ""
  })




