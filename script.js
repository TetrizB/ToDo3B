function log(message) {
    console.log('> ' + message)
}

const cards = document.querySelectorAll ('.card')
const dropzones = document.querySelectorAll ('.dropzone')

cards.forEach(card => {
    card.addEventListener('dragstart' , dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
})


function dragstart(){
    dropzones.forEach(dropzone => dropzone.classList.add('highlight'))

    this.classList.add('is-dragging')
}
function drag(){

}
function dragend(){
    dropzones.forEach(dropzone => dropzone.classList.remove('highlight'))
    this.classList.remove('is-dragging')
}

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)
})

function dragenter(){

}
function dragover (){
    this.classList.add("over")

    const cardBeingDragged = document.querySelector('.is-dragging')

    this.appendChild(cardBeingDragged)
}
function dragleave (){
    this.classList.remove("over")

}
function drop(){
    this.classList.remove("over")
}





  
  function toggleCreateComponent() {
    var createComponentForm = document.getElementById("createComponentForm");

    if (createComponentForm.style.display === "none") {
      createComponentForm.style.display = "block";
    } else {
      createComponentForm.style.display = "none";
      clearForm(); // Limpar os campos ao fechar
    }
  }

  function saveComponent() {
    // Aqui você pode escrever o código para salvar o componente criado.
    // Você pode acessar os valores dos campos usando document.getElementById('id-do-elemento').value
    // Por exemplo: var nome = document.getElementById('nome').value;
    // Depois de salvar, você pode limpar o formulário ou fazer qualquer outra ação necessária.
    alert("Componente salvo com sucesso!");
    toggleCreateComponent(); // Fechar a tela de criação após salvar
    clearForm(); // Limpar os campos após salvar
  }

  function cancelComponent() {
    toggleCreateComponent(); // Fechar a tela de criação ao clicar em "Fechar"
    clearForm(); // Limpar os campos ao fechar
  }

  function clearForm() {
    document.getElementById('nome').value = ""; // Limpar campo de nome
    document.getElementById('selectedDateInicio').value = ""; // Limpar campo de data de início
    document.getElementById('selectedDateLimite').value = ""; // Limpar campo de data limite

  }

  function selectColor(color) {
    var importanciaInput = document.getElementById('importancia');
    importanciaInput.value = color;
  }


  function toggleDatePicker(datePickerId) {
    var datePicker = document.getElementById(datePickerId);
    datePicker.style.display = datePicker.style.display === "block" ? "none" : "block";
  }

  function selectDate(dateType) {
    var selectedDate;
    if (dateType === "dataInicio") {
      selectedDate = document.getElementById("selectedDateInicio").value;
    } else if (dateType === "dataLimite") {
      selectedDate = document.getElementById("selectedDateLimite").value;
    }
    console.log(dateType + ":", selectedDate);
  }



