/*  Modal is triggered by edit button, that logic is found in create-_todo.js.
 * */

// Prevent modal from appearing on load
$( '.modal' ).toggle()

/* prioritize button*/
$( '#checkbox-modal' ).click( function () {
  const todo_id     = $( '.modal' ).attr( 'data-current-todo' )
  const parent_todo = $( `#todo-${ todo_id }` )
  const clone       = parent_todo.clone( true, true )
  
  $( this ).toggleClass( 'checked' )
  
  if ( $( this ).hasClass( 'checked' ) ) {
    clone.attr( 'data-checked', 'true' )
    clone.children().first().addClass( 'checked' )
    parent_todo.slideUp( 200, function () { $( this ).detach()} )
    $( '.todo-container' ).prepend( clone )
    clone.toggle().slideDown( 200 )
  } else {
    clone.attr( 'data-checked', 'false' )
    clone.children().first().removeClass( 'checked' )
    parent_todo.slideUp( 200, function () {
      $( this ).detach()
    } )
    $( `.todo-container .todo[data-checked='true']` ).last().after( clone )
    clone.toggle().slideDown( 200 )
  }
} )


/* delete button */
$( '#delete-btn' ).click( function () {
  const todo_id = $( '.modal' ).attr( 'data-current-todo' )
  $( '.modal, .modal-coverup' ).fadeOut( 200 )
  $( `#todo-${ todo_id }` ).slideUp( 200, function () { $( this ).remove() } )
} )

/* complete button */
$( '#complete-btn' ).click( function () {
  const todo_id      = $( '.modal' ).attr( 'data-current-todo' )
  const current_todo = $( `#todo-${ todo_id }` )
  const clone        = current_todo.clone( true, true )
  
  current_todo.slideUp( 200, function () { $( this ).toggleClass( 'completed' ) } )
  clone.attr( 'id', `todo-completed-${ todo_id }` )
  $( '#completed-container' ).prepend( clone )
  clone.toggleClass( 'completed' ).toggle().slideDown( 200 )
  $( `#todo-${ todo_id }` ).slideUp( 200, function () {
    $( this ).detach()
    $( `#edit-btn-${ todo_id }, #checkbox-${ todo_id }` ).off().css( 'cursor', 'default' )
  } )
  $( '.modal-coverup, .modal' ).fadeOut( 200 )
} )

/* edit button */
$( '#btn-edit' ).click( function () {
  const todo_id     = $( this ).parents().eq( 3 ).attr( 'data-current-todo' )
  const new_title   = $( '#title-edit' ).val()
  const new_content = $( '#content-edit' ).val()
  
  $( `#title-${ todo_id }` ).text( new_title )
  $( `#content-${ todo_id }` ).text( new_content )
  if ( $( `#checkbox-modal` ).hasClass( 'checked' ) ) {
    $( `#checkbox-${ todo_id }` ).addClass( 'checked' )
  }
  $( '.modal, .modal-coverup' ).fadeOut( 200 )
} )
