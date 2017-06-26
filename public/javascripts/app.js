$('#get-dish').on('click', (event) => {
  event.preventDefault()

  let request = $.ajax({
  method: 'GET',
  url: "/dishes/random.json"
  })

  request.done((newOne) => {
    $('#get-dish').text(newOne['dish']);
    alert(`new dish is : ${newOne['dish']}`);
  })
})
