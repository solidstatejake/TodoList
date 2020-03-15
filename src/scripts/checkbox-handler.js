let checked = false
$('.checkbox').click(() => {
  $('.checkbox').toggleClass('checked')
  checked = !checked
})
