let title_input, content_input, prioritized

$('.modal-container').toggle()
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

// const handle_btn_edit_click = function (todo_count, prioritized) {
//   let title   = $(`#title-${ todo_count }`)
//   let content = $(`#content-${ todo_count }`)
//
//   const current_todo = $(`#todo-${ todo_count }`)
//   let old_todo = current_todo.clone(true, true)
//
//   current_todo.replaceWith(`
//        <div id="todo-${ todo_count }" class="todo">
//           <!-- checkbox -->
//           <div id="checkbox-${ todo_count }"
//                class="checkbox ${ prioritized ? 'checked' : '' } m-l-2" ></div>
//           <div class="todo-container-info-edit">
//             <div class="todo-container-info-edit">
//               <!-- edit title-->
//               <div class="input-container-edit">
//                   <label class="input-label-edit" for="title-edit">Task</label>
//                   <input id="title-edit-${ todo_count }" class="input-edit NA" type="text" value="${ title.html() }">
//                   <i class='fas fa-circle input-icon-edit'
//                      id="first-icon-edit-${ todo_count }"></i>
//               </div>
//               <!-- edit content -->
//               <div class="input-container-edit">
//                   <label class="input-label-edit" for="content-edit">Task</label>
//                   <input id="content-edit-${ todo_count }" class="input-edit NA" type="text" value="${ content.html() }">
//                   <i class='fas fa-circle input-icon-edit'
//                      id="second-icon-edit-${ todo_count }"></i>
//               </div>
//
//               <div id="btn-edit-${ todo_count }" class="btn-edit">Edit</div>
//
//               </div>
//           </div>
//           <!-- options -->
//           <div class="todo-container-option">
//              <span class="todo-option-complete">
//                   <i id="complete-btn-${ todo_count }" class="fas fa-check"></i>
//              </span>
//              <span class="todo-option-delete">
//                   <i id="delete-btn-${ todo_count }" class="fas fa-times"></i>
//              </span>
//              <span class="todo-option-edit">
//                   <i id="edit-btn-${ todo_count }" class="fas fa-pen"></i>
//              </span>
//           </div>
//       </div>`)
//   $(`#checkbox-${ todo_count }`).click(function () {
//     $(`#checkbox-${ todo_count }`).toggleClass('checked')
//   })
//
//   $(`#complete-btn-${ todo_count }`).click(function () {
//     $(`#todo-${ todo_count }`).addClass('completed')
//   })
//
//   $(`#delete-btn-${ todo_count }`).click(function () {
//     $(`#todo-${ todo_count }`).slideUp(500)
//   })
//
//   $(`#edit-btn-${ todo_count }`).click(() => handle_btn_edit_click(todo_count))
//
//   const edited_title = $(`#title-edit-${todo_count}`)
//   const edited_content = $(`#content-edit-${todo_count}`)
//   console.dir("edited_title.val(): " +edited_title.val())
//   console.dir("edited_title.html(): " +edited_title.html())
//   console.dir("edited_title.text(): " +edited_title.text())
//   $(`#btn-edit-${ todo_count }`).click(() => {
//     // const prioritized = $(`checkbox-${ todo_count }`).hasClass('checked')
//     $(`#title-${ todo_count }`).val($(`#title-edit-${todo_count}`).val())
//     $(`#content-${ todo_count }`).val($(`#content-edit-${todo_count}`).val())
//     $(`#todo-${ todo_count }`).replaceWith(old_todo)
//   })
// }

$('.modal-coverup').click(function() {
  $('.modal-container').fadeOut()
  // .animate({
  //   height: 0,
  //   opacity: 0,
  //   top:0
  // }, 750);
  $(this).fadeOut()
})

$('.btn').click(() => {
  title_input   = $('#title').val()
  content_input = $('#content').val()
  prioritized   = $('#prioritize-option').hasClass('checked')
  $('.todo-container').append(todo(title_input, content_input, prioritized))
  const todo_count = count_todos() // used to identify the _todo and its children

  $(`#checkbox-${ todo_count }`).click(function () {
    $(`#checkbox-${ todo_count }`).toggleClass('checked')
  })

  $(`#complete-btn-${ todo_count }`).click(function () {
    $(`#todo-${ todo_count }`).addClass('completed')
  })

  $(`#delete-btn-${ todo_count }`).click(function () {
    $(`#todo-${ todo_count }`).slideUp(200)
  })

  $(`#edit-btn-${ todo_count }`).click(function () {
    $('.modal-coverup').fadeIn()
    $('.modal-container').fadeIn()
  })

  // toggle before slidedown so that element appears, not disappears.
  $('.todo-container .todo:last-of-type').toggle().slideDown(200)
})
