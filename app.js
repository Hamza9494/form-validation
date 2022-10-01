const form = document.querySelector('.form')
const username = document.querySelector('#username')

form.addEventListener('submit', function (e) {
  //   e.preventDefault()
  const userData = username.value.trim()
  if (userData === '') {
    username.parentElement.classList.add('error')
    console.log(username.parentElement.classList)
  }
})
