let title        = $( '#title' )
let content      = $( '#content' )
let title_edit   = $( '#title-edit' )
let content_edit = $( '#content-edit' )
let valid        = {
  title  : 'NA',
  content: 'NA',
  both   : 'NA'
}
let valid_edit   = {
  title  : 'NA',
  content: 'NA',
  both   : 'NA'
}
const red        = '#ba4e4e',
      green      = '#339635',
      blue       = '#3267b8',
      orange     = '#bc8640'


const determine_input_validity = () => {
  if ( valid.title === 'yes' && valid.content === 'yes' ) {
    valid.both = 'yes'
  } else if ( valid.title === 'no' || valid.content === 'no' ) {
    valid.both = 'no'
  } else if ( valid.title === 'NA' && valid.content === 'NA' ) {
    valid.both = 'NA'
  } else {
    valid.both = 'incomplete'
  }
}


const update_btn_styles = () => {
  let styles = { background: '', cursor: '' }
  determine_input_validity()
  switch ( valid.both ) {
    case 'yes':
      styles.background = green
      styles.cursor     = 'pointer'
      break
    case 'incomplete':
      styles.background = orange
      styles.cursor     = 'not-allowed'
      break
    case 'no':
      styles.background = red
      styles.cursor     = 'not-allowed'
      break
    case 'NA':
    default:
      styles.background = blue
      styles.cursor     = 'not-allowed'
  }
  $( '.btn' ).css( styles )
}

/* Keyboard input */
const handle_title_keyup = () => {
  const parent = title.parent()
  const val    = title.val()
  if ( 0 < val.length && ( val.length < 3 || val.length > 10 ) ) {
    parent.addClass( 'invalid' )
    parent.removeClass( 'valid' )
    parent.removeClass( 'NA' )
    $( '#first-icon' ).css( 'color', red )
    valid.title = 'no'
  } else if ( 3 <= val.length && val.length <= 10 ) {
    parent.removeClass( 'invalid' )
    parent.addClass( 'valid' )
    parent.removeClass( 'NA' )
    $( '#first-icon' ).css( 'color', green )
    valid.title = 'yes'
  } else if ( val.length === 0 ) {
    parent.removeClass( 'invalid' )
    parent.removeClass( 'valid' )
    parent.addClass( 'NA' )
    $( '#first-icon' ).css( 'color', blue )
    valid.title = 'NA'
  }
  update_btn_styles()
}

const handle_content_keyup = () => {
  const parent = content.parent()
  const val    = content.val()
  if ( 0 < val.length && ( val.length < 3 || val.length > 100 ) ) {
    parent.addClass( 'invalid' )
    parent.removeClass( 'valid' )
    parent.removeClass( 'NA' )
    $( '#second-icon' ).css( 'color', red )
    valid.content = 'no'
  } else if ( 3 <= val.length && val.length <= 100 ) {
    parent.removeClass( 'invalid' )
    parent.addClass( 'valid' )
    parent.removeClass( 'NA' )
    $( '#second-icon' ).css( 'color', green )
    valid.content = 'yes'
  } else if ( val.length === 0 ) {
    parent.removeClass( 'invalid' )
    parent.removeClass( 'valid' )
    parent.addClass( 'NA' )
    $( '#second-icon' ).css( 'color', blue )
    valid.content = 'NA'
  }
  update_btn_styles()
}

/* _todo edit input*/
const determine_input_edit_validity = () => {
  if ( valid_edit.title === 'yes' && valid_edit.content === 'yes' ) {
    valid_edit.both = 'yes'
  } else if ( valid_edit.title === 'no' || valid_edit.content === 'no' ) {
    valid_edit.both = 'no'
  } else if ( valid_edit.title === 'NA' && valid_edit.content === 'NA' ) {
    valid_edit.both = 'NA'
  } else {
    valid_edit.both = 'incomplete'
  }
}

const update_btn_edit_styles = () => {
  let styles = { background: '', cursor: '' }
  determine_input_edit_validity()
  switch ( valid_edit.both ) {
    case 'yes':
      styles.background = green
      styles.cursor     = 'pointer'
      break
    case 'incomplete':
      styles.background = orange
      styles.cursor     = 'not-allowed'
      break
    case 'no':
      styles.background = red
      styles.cursor     = 'not-allowed'
      break
    case 'NA':
    default:
      styles.background = blue
      styles.cursor     = 'not-allowed'
  }
  $( '#btn-edit' ).css( styles )
}

const handle_title_edit_keyup = () => {
  const parent = title_edit.parent()
  const val    = title_edit.val()
  if ( 0 < val.length && ( val.length < 3 || val.length > 10 ) ) {
    parent.addClass( 'invalid' )
    parent.removeClass( 'valid' )
    parent.removeClass( 'NA' )
    $( '#first-icon-edit' ).css( 'color', red )
    valid_edit.title = 'no'
  } else if ( 3 <= val.length && val.length <= 10 ) {
    parent.removeClass( 'invalid' )
    parent.addClass( 'valid' )
    parent.removeClass( 'NA' )
    $( '#first-icon-edit' ).css( 'color', green )
    valid_edit.title = 'yes'
  } else if ( val.length === 0 ) {
    parent.removeClass( 'invalid' )
    parent.removeClass( 'valid' )
    parent.addClass( 'NA' )
    $( '#first-icon-edit' ).css( 'color', blue )
    valid_edit.title = 'NA'
  }
  update_btn_edit_styles()
}

const handle_content_edit_keyup = () => {
  const parent = content_edit.parent()
  const val    = content_edit.val()
  if ( 0 < val.length && ( val.length < 3 || val.length > 100 ) ) {
    parent.addClass( 'invalid' )
    parent.removeClass( 'valid' )
    parent.removeClass( 'NA' )
    $( '#second-icon-edit' ).css( 'color', red )
    valid_edit.content = 'no'
  } else if ( 3 <= val.length && val.length <= 100 ) {
    parent.removeClass( 'invalid' )
    parent.addClass( 'valid' )
    parent.removeClass( 'NA' )
    $( '#second-icon-edit' ).css( 'color', green )
    valid_edit.content = 'yes'
  } else if ( val.length === 0 ) {
    parent.removeClass( 'invalid' )
    parent.removeClass( 'valid' )
    parent.addClass( 'NA' )
    $( '#second-icon-edit' ).css( 'color', blue )
    valid_edit.content = 'NA'
  }
  update_btn_edit_styles()
}

handle_title_keyup()
handle_content_keyup()
title.keyup( handle_title_keyup )
content.keyup( handle_content_keyup )


title_edit.keyup( handle_title_edit_keyup )
content_edit.keyup( handle_content_edit_keyup )

export { handle_title_edit_keyup, handle_content_edit_keyup }
