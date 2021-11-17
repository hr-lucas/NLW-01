function populateUFs() {
    
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")

    .then ( res => resizeBy.json() )
    .then ( states => {
        ufSelect.innerHTML = '<option value="1">Teste</option>'
    })
}

populateUFs()

document

   .querySelector("select[name=uf]")
   .addEventListener("change", () => {
     console.log("Alterei")

  })