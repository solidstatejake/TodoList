let checked = false

// couldn't get jQuery $(this) to work.
document.querySelectorAll('.checkbox').forEach(checkbox => {
  checkbox.addEventListener('click', () => {
    checkbox.classList.toggle('checked')
    checked = !checked
  })
})
