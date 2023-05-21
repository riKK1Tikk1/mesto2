function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function saveForm() {
  // let nameInput = document.querySelector(popup__field_1);
  // let jobInput = document.querySelector(popup__field_2);
  // let profileI = document.querySelector(profile-info);
  // profileI.insertAdjacentHTML('beforeend', `
	// 	<div class="profile-info__top">
  //           <h1 class="profile-info__title">&{nameInput}</h1>
  //           <button class="profile-info__button" onclick="openForm()"></button>
  //           </div>
  //           <p class="profile-info__subtitle">&{jobInput}</p>
  // `);

  document.getElementById("myForm").style.display = "none";
}
let addButton = container.querySelector('.btn-save');
addButton.addEventListener('click', saveForm);