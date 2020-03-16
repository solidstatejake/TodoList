let title_input, content_input, prioritized

/*
 We don't have to subtract 1 from the count because count begins before
 new _todo is created.
 */
const count_todos = () => {
  return $('.todo').length
}

const todo = (title, content, prioritized) => {
  const n = count_todos() + 1
  return (
    `<div id="todo-${ n }" class="todo" >
<!-- checkbox -->
<div id="checkbox-${ n }" class="checkbox ${ prioritized ? 'checked' : '' } m-l-2"></div>
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

$('.modal-coverup').click(function () {
  $('.modal').fadeOut()
  $(this).fadeOut()
})

$('.btn').click(() => {
  title_input = $('#title').val()
  content_input = $('#content').val()
  prioritized = $('#prioritize-option').hasClass('checked')
  $('.todo-container').append(todo(title_input, content_input, prioritized))
  const todo_count = count_todos() // used to identify the _todo and its children

  $(`#checkbox-${ todo_count }`).click(function () {
    $(`#checkbox-${ todo_count }`).toggleClass('checked')
  })

  $(`#complete-btn-${ todo_count }`).click(function () {
    $(`#todo-${ todo_count }`).toggleClass('completed')
  })

  $(`#delete-btn-${ todo_count }`).click(function () {
    $(`#todo-${ todo_count }`).slideUp(200)
  })

  $(`#edit-btn-${ todo_count }`).click(function (todo_count) {
    const todo_id = $(this).parents().eq(2).attr('id').replace('todo-', '')
    $('#title-edit').val($(`#title-${ todo_id }`).html())          //update title
    $('#content-edit').val($(`#content-${ todo_id }`).html())      //update content
    if ($(`#checkbox-${ todo_id }`).hasClass('checked')) {
      $('#checkbox-modal').addClass('checked')
    }
    else $('#checkbox-modal').removeClass('checked')
    $('.modal-coverup').fadeIn()
    $('.modal').attr('data-current-todo', todo_id).fadeIn()
  })

  // toggle before slidedown so that element appears, not disappears.
  $('.todo-container .todo:last-of-type').toggle().slideDown(200)
})
