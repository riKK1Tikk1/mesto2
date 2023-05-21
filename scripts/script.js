function openForm() {
  document.getElementById("myForm").style.display = "block";
}

let openForm_bth = document.getElementById("openForm_bth");
openForm_bth.addEventListener("click", openForm);
   
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

let closeForm_bth = document.getElementById("closeForm_bth");
closeForm_bth.addEventListener("click", closeForm);
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
// let addButton = container.querySelector('.btn-save');
// addButton.addEventListener('click', saveForm);

let saveForm_bth = document.getElementById("saveForm_bth");
saveForm_bth.addEventListener("click", saveForm);