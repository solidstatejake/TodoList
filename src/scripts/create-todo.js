let title_input, content_input


const big_todo = (title, content, prioritized) => {
  return `<div class="todo">

                <!-- _todo stats -->
                <div class="todo__info-container">

                    <span class='todo__info-title'>${ title }</span>

                    <!-- _todo options -->
                    <div class="todo__option-container">

                        <span class="todo__option-complete">
                          <i class="fas fa-check"></i>
                        </span>

                        <span class="todo__option-delete">
                          <i class="fas fa-times"></i>
                        </span>

                        <div class="checkbox"></div>

                    </div>

                </div>

                <!-- _todo content -->
                <span class="todo__content-container">
                  <p class="todo__content">
                    ${ content }
                  </p>
                </span>
            </div>`
}

const small_todo = (title, content, prioritized) => {
  return `<div class="todo">

                <div class="todo-sm-info-container">

                    <div class="todo-sm-title-container">
                        <span class='todo-sm-title'>${ title }</span>
                        <div class="checkbox ${ prioritized && 'checked' }"></div>
                    </div>

                    <!-- _todo options -->
                    <div class="todo-sm-option-container">

                        <span class="todo__option-complete">
                          <i class="fas fa-check"></i>
                        </span>

                        <span class="todo__option-delete">
                          <i class="fas fa-times"></i>
                        </span>

                    </div>

                </div>

                <span class="todo-sm-content-container">
                  <p class="todo__content">
                    ${ content }
                  </p>
                </span>

            </div> `
}

$('.btn').click((i) => {
  title_input   = $('#title').val()
  content_input = $('#content').val()
  prioritized   = $('#prioritize-option').hasClass('checked')

  $('.todo__container').append(
    content_input.length < 240
    ? small_todo(title_input, content_input, prioritized)
    : big_todo(title_input, content_input)
  )

  // toggle before slidedown so that element appears, not disappears.
  $('.todo__container .todo:last-of-type').toggle().slideDown(600)
})
