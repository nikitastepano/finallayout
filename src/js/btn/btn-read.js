const  toggleButton = document.getElementById('toggleButton')

const brendContents = document.getElementById('brend__content-hiden2')
const  brendContentt = document.getElementById('brend__content-hiden3')
const  brendContentn = document.getElementById('brend__content-hiden4')

toggleButton.addEventListener('click', function () {
  if (toggleButton.textContent === 'Показать все') {
    brendContents.style.display = 'flex'
    brendContentt.style.display = 'flex'
    brendContentn.style.display = 'flex'
    toggleButton.textContent = 'Скрыть'
  } else {
    toggleButton.textContent = 'Показать все'
    brendContents.style.display = 'none'
    brendContentt.style.display = 'none'
    brendContentn.style.display = 'none'
  }
})
