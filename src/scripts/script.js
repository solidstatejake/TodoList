let title   = $('#title')
let content = $('#content')
let valid   = {
  title:   'NA',
  content: 'NA',
  both:    'NA'
}

console.log($('.main-container').width())

const red    = '#ba4e4e',
      green  = '#339635',
      blue   = '#3267b8',
      orange = '#bc8640'

/* _todo */


/* Button */

const determine_input_validity = () => {
  if (valid.title === 'yes' && valid.content === 'yes') valid.both = 'yes'
  else if (valid.title === 'no' || valid.content === 'no') valid.both = 'no'
  else if (valid.title === 'NA' && valid.content === 'NA') valid.both = 'NA'
  else valid.both = 'incomplete'
}

const update_btn_styles = () => {
  let style = { background: '', color: '' }
  determine_input_validity()
  switch (valid.both) {
    case 'yes':
      style.background = green
      break
    case 'incomplete':
      style.background = orange
      break
    case 'no':
      style.background = red
      break
    case 'NA':
    default:
      style.background = blue
  }
  $('.btn').css('background', style.background)
}

/* Keyboard input */

const handle_title_keyup = () => {
  if (
    0 < title.val().length &&
    ( title.val().length < 3 || title.val().length > 10 )
  ) {
    title.addClass('invalid')
    title.removeClass('valid')
    title.removeClass('NA')
    $('.first-icon').css('color', red)
    valid.title = 'no'
  }
  else if (3 <= title.val().length && title.val().length <= 10) {
    title.removeClass('invalid')
    title.addClass('valid')
    title.removeClass('NA')
    $('.first-icon').css('color', green)
    valid.title = 'yes'
  }
  else if (title.val().length === 0) {
    title.removeClass('invalid')
    title.removeClass('valid')
    title.addClass('NA')
    $('.first-icon').css('color', blue)
    valid.title = 'NA'
  }
  update_btn_styles()
}

const handle_content_keyup = () => {
  if (
    0 < content.val().length &&
    ( content.val().length < 3 || content.val().length > 100 )
  ) {
    content.addClass('invalid')
    content.removeClass('valid')
    content.removeClass('NA')
    $('.second-icon').css('color', red)
    valid.content = 'no'
  }
  else if (3 <= content.val().length && content.val().length <= 100) {
    content.removeClass('invalid')
    content.addClass('valid')
    content.removeClass('NA')
    $('.second-icon').css('color', green)
    valid.content = 'yes'
  }
  else if (content.val().length === 0) {
    content.removeClass('invalid')
    content.removeClass('valid')
    content.addClass('NA')
    $('.second-icon').css('color', blue)
    valid.content = 'NA'
  }
  update_btn_styles()
}

title.keyup(handle_title_keyup)
content.keyup(handle_content_keyup)

