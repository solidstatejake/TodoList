//Use a set to keep track of _todo ids. Should not be more than one of each.
let todos = new Set()
//Complete todo is leaving behind a ghost todo in .todo-container.
/*
 We don't have to subtract 1 from the count because count begins before
 new _todo is created.
 */
const count_todos = () => {
  return $( ".todo" ).length
}

const generate_todo = ( title, content, prioritized ) => {
  const n = count_todos() + 1
  return (
      `<div id="todo-${ n }" class="todo" > 

<!-- checkbox -->
<div id="checkbox-${ n }" class="checkbox ${ prioritized ? "checked" : "" } m-l-2"></div>

<!-- title -->
<div class="todo-container-info">
    <div class="todo-container-title">
        <span id="title-${ n }" class='todo-title'>${ title }</span>
    </div>
</div>

<!-- content -->
<div class="todo-container-content">
      <p id="content-${ n }" class="todo-content">
        ${ content }
      </p>
</div>

<!-- options -->
<div class="todo-container-option">
   <span class="todo-option-complete">
     <i id="complete-btn-${ n }" class="fas fa-check"></i>
   </span>
   <span class="todo-option-delete">
     <i id="delete-btn-${ n }" class="fas fa-times"></i>
    </span>
    <span class="todo-option-edit">
        <i id="edit-btn-${ n }" class="fas fa-pen"></i>
    </span>
</div>
</div>` )
}

const remove_modal = function () {
  $( ".modal" ).fadeOut()
  $( this ).fadeOut()
}

const prioritize_todo = function () {
  $( this ).toggleClass( "checked" )

  const parent_todo = $( this ).parent()
  const clone       = parent_todo.clone( true, true )

  if ( $( this ).hasClass( "checked" ) ) {
    clone.attr( "data-checked", "true" )
    parent_todo.slideUp( 200, function () { $( this ).detach()} )
    $( ".todo-container" ).prepend( clone )
    clone.toggle().slideDown( 200 )
  }
  else {
    clone.attr( "data-checked", "false" )
    parent_todo.slideUp( 200, function () {$( this ).detach()} )
    $( `.todo[data-checked='true']` ).last().after( clone )
    clone.toggle().slideDown( 200 )
  }
}

const complete_todo = function () {
  const todo_id      = $( this ).parents().eq( 2 ).attr( "id" ).replace( "todo-", "" )
  const current_todo = $( `#todo-${ todo_id }` )
  const todo_copy    = current_todo.clone( true, true )

  current_todo.slideUp( 200, function () {current_todo.toggleClass( "completed" )} )

  //setTimeout so _todo doesn't fade before disappearing.
  todo_copy.attr( "id", `todo-completed-${ todo_id }` )
  $( ".completed-container" ).prepend( todo_copy )
  $( `#todo-completed-${ todo_id }` ).toggleClass( "completed" ).toggle().slideDown( 200 )
  $( `#todo-${ todo_id }` ).attr( "id", `todo-completed-${ todo_id }` )
  $( `#sortable  ` ) //
}

const delete_todo = function () {
  const todo_id = $( this ).parents().eq( 2 ).attr( "id" ).replace( "todo-", "" )

  $( `#todo-${ todo_id }` ).slideUp( 200 )
  $( `#todo-completed-${ todo_id }` ).slideUp( 200 )

  setTimeout( () => {
    $( `#todo-${ todo_id }` ).detach()
    $( `#todo-completed-${ todo_id }` ).detach()
  }, 200 )
}

const edit_todo = function () {
  const todo_id = $( this ).parents().eq( 2 ).attr( "id" ).replace( "todo-", "" )
  $( "#title-edit" ).val( $( `#title-${ todo_id }` ).html() )          //update
                                                                       // title
  $( "#content-edit" ).val( $( `#content-${ todo_id }` ).html() )      //update
                                                                       // content
  if ( $( `#checkbox-${ todo_id }` ).hasClass( "checked" ) ) {
    $( "#checkbox-modal" ).addClass( "checked" )
  }
  else {
    $( "#checkbox-modal" ).removeClass( "checked" )
  }
  $( ".modal-coverup" ).fadeIn()
  $( ".modal" ).attr( "data-current-todo", todo_id ).fadeIn()
}

const create_todo = function () {
  /* variables */
  const title_input    = $( "#title" ).val()
  const content_input  = $( "#content" ).val()
  const prioritized    = $( "#prioritize-option" ).hasClass( "checked" )
  const new_todo       = $( generate_todo( title_input, content_input, prioritized ) ),
        todo_container = $( ".todo-container" )

  new_todo.attr( "data-checked", prioritized )

  if ( new_todo.children().first().hasClass( "checked" ) ||
       $( ".todo-container" ).children().length === 0 ||
       $( ".todo-container" ).children().first().attr( "data-checked" ) === "false"
  ) {
    todo_container.prepend( new_todo )
  }
  else {
    $( `.todo[data-checked='true']` ).last().after( new_todo )
  }

  // Must count after the above block to account all todos.
  const current_todo_id = count_todos()

  $( `#checkbox-${ current_todo_id }` ).click( prioritize_todo )

  $( `#complete-btn-${ current_todo_id }` ).click( complete_todo )

  $( `#delete-btn-${ current_todo_id }` ).click( delete_todo )

  $( `#edit-btn-${ current_todo_id }` ).click( edit_todo )

  // toggle before slidedown so that element appears, not disappears.
  new_todo.toggle().slideDown( 200 )
}

$( ".modal-coverup" ).click( remove_modal )

$( ".btn" ).click( create_todo )
