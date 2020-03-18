// document.querySelectorAll( '.checkbox' ).forEach( checkbox => {
//   console.log( 'I tagged a checkbox!' )
//   checkbox.addEventListener( 'click', () => {
//     checkbox.classList.toggle( 'checked' )
//   } )
// } )
$( '#prioritize-option' ).click( function () {
  $( this ).toggleClass( 'checked' )
} )
