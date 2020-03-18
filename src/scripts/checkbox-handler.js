document.querySelectorAll( '.checkbox' ).forEach( checkbox => {
    checkbox.addEventListener( 'click', () => {
        checkbox.classList.toggle( 'checked' )
    } )
} )
