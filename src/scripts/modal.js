/* Since the modal is triggered by edit button, the logic for displaying it
 * is found in create-_todo.js.
 * */

// Prevent modal from appearing on load
$( '.modal' ).toggle()

/* delete button */
$( '#delete-btn' ).click( function () {
  const todo_id = $( this ).parents().eq( 3 ).attr( 'data-current-todo' )
  $( '.modal' ).fadeOut()
  $( '.modal-coverup' ).fadeOut()
  $( `#todo-${ todo_id }` ).slideUp( 200 )
} )

/* complete button */
$( '#complete-btn' ).click( function () {
  const todo_id   = $( this ).parents().eq( 3 ).attr( 'data-current-todo' )
  const todo_copy = $( `#todo-${ todo_id }` ).clone( true, true )
  
  $( `#todo-${ todo_id }` ).slideUp( 200 )
  //setTimeout so _todo doesn't fade before disappearing.
  setTimeout( () => void $( `#todo-${ todo_id }` ).toggleClass( 'completed' ), 200 )
  todo_copy.attr( 'id', `todo-completed-${ todo_id }` )
  $( '.completed-container' ).prepend( todo_copy )
  $( `#todo-completed-${ todo_id }` ).toggleClass( 'completed' ).toggle().slideDown( 200 )
  $( '.modal-coverup, .modal' ).fadeOut()
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
  $( '.modal' ).fadeOut()
  $( '.modal-coverup' ).fadeOut()
  
} )
