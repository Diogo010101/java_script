const btnAdicionarTarefa = document.querySelector('.app__button--add-task');
const formulario = document.querySelector(".app__form-add-task")


btnAdicionarTarefa.addEventListener("click", () =>{
    formulario.classList.toggle('hidden')
})

