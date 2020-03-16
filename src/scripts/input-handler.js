let title        = $('#title')
let content      = $('#content')
let title_edit   = $('#title-edit')
let content_edit = $('#content-edit')

let valid = {
  title:   'NA',
  content: 'NA',
  both:    'NA'
}

let valid_edit = {
  title:   'NA',
  content: 'NA',
  both:    'NA'
}

const red    = '#ba4e4e',
      green  = '#339635',
      blue   = '#3267b8',
      orange = '#bc8640'


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
    $('#first-icon').css('color', red)
    valid.title = 'no'
  }
  else if (3 <= title.val().length && title.val().length <= 10) {
    title.removeClass('invalid')
    title.addClass('valid')
    title.removeClass('NA')
    $('#first-icon').css('color', green)
    valid.title = 'yes'
  }
  else if (title.val().length === 0) {
    title.removeClass('invalid')
    title.removeClass('valid')
    title.addClass('NA')
    $('#first-icon').css('color', blue)
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
    $('#second-icon').css('color', red)
    valid.content = 'no'
  }
  else if (3 <= content.val().length && content.val().length <= 100) {
    content.removeClass('invalid')
    content.addClass('valid')
    content.removeClass('NA')
    $('#second-icon').css('color', green)
    valid.content = 'yes'
  }
  else if (content.val().length === 0) {
    content.removeClass('invalid')
    content.removeClass('valid')
    content.addClass('NA')
    $('#second-icon').css('color', blue)
    valid.content = 'NA'
  }
  update_btn_styles()
}

/* _todo edit input*/

const determine_input_edit_validity = () => {
  if (valid_edit.title === 'yes' && valid_edit.content === 'yes') valid_edit.both = 'yes'
  else if (valid_edit.title === 'no' || valid_edit.content === 'no') valid_edit.both =
    'no'
  else if (valid_edit.title === 'NA' && valid_edit.content === 'NA') valid_edit.both =
    'NA'
  else valid_edit.both = 'incomplete'
}

const update_btn_edit_styles = () => {
  let style = { background: '', color: '' }
  determine_input_edit_validity()
  switch (valid_edit.both) {
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
  $('.btn-edit').css('background', style.background)
}


const handle_title_edit_keyup = () => {
  if (
    0 < title_edit.val().length &&
    ( title_edit.val().length < 3 || title_edit.val().length > 10 )
  ) {
    title_edit.addClass('invalid')
    title_edit.removeClass('valid')
    title_edit.removeClass('NA')
    $('#first-icon-edit').css('color', red)
    valid_edit.title = 'no'
  }
  else if (3 <= title_edit.val().length && title_edit.val().length <= 10) {
    title_edit.removeClass('invalid')
    title_edit.addClass('valid')
    title_edit.removeClass('NA')
    $('#first-icon-edit').css('color', green)
    valid_edit.title = 'yes'
  }
  else if (title_edit.val().length === 0) {
    title_edit.removeClass('invalid')
    title_edit.removeClass('valid')
    title_edit.addClass('NA')
    $('#first-icon-edit').css('color', blue)
    valid_edit.title = 'NA'
  }
  update_btn_edit_styles()
}

const handle_content_edit_keyup = () => {
  if (
    0 < content_edit.val().length &&
    ( content_edit.val().length < 3 || content_edit.val().length > 100 )
  ) {
    content_edit.addClass('invalid')
    content_edit.removeClass('valid')
    content_edit.removeClass('NA')
    $('#second-icon-edit').css('color', red)
    valid_edit.content = 'no'
  }
  else if (3 <= content_edit.val().length && content_edit.val().length <= 100) {
    content_edit.removeClass('invalid')
    content_edit.addClass('valid')
    content_edit.removeClass('NA')
    $('#second-icon-edit').css('color', green)
    valid_edit.content = 'yes'
  }
  else if (content_edit.val().length === 0) {
    content_edit.removeClass('invalid')
    content_edit.removeClass('valid')
    content_edit.addClass('NA')
    $('#second-icon-edit').css('color', blue)
    valid_edit.content = 'NA'
  }
  update_btn_edit_styles()
}
title.keyup(handle_title_keyup)
content.keyup(handle_content_keyup)

title_edit.keyup(handle_title_edit_keyup)
content_edit.keyup(handle_content_edit_keyup)
