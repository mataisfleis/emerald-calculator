const form = document.getElementById('emerald_form')
console.log(form)
const handleSubmit = (e) => {
  e.preventDefault()
  const entry = form.querySelector('.text-box').value
  const result = calculateEmerald(entry)
  const resultParagraph = document.createElement('p')
  resultParagraph.innerHTML = `You need ${result} logs.`
  document.body.appendChild(resultParagraph)
}
const calculateEmerald = (n) => {
  return n * 4
}
form.addEventListener('submit', handleSubmit)