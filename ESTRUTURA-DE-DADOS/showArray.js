`use strict`

const showArray= (array, element, title="Array") => {
    //Selecionando um elemento no DOM
    const container = document.querySelector(element)
    // Criando um novo elemento, DIV
    const div = document.createElement('div')
    // Adiciona uma classe na DIV criada
    div.classList.add('numbers-containers')
    
    // Populando a DIV nova com os elementos Array
    div.innerHTML = `
        <h2>${title}</h2>
        <div class="numbers-item">
            ${array.join('</div><div class="numbers-item">')}
        </div>
    `
    // Inserindo o novo elemento (div) no DOM 
    container.appendChild(div);

}

export {
    showArray
}