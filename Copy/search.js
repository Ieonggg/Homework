window.onload = function () {
    document.getElementById('searchInput').focus();
  };
  
  $('#clearBtn').on('click', () => {
    $('#searchInput').val('');
  });
  
  $('#submitBtn').on('click', () => {
    let searchVal = $('#searchInput').val();
  
    if (searchVal != '') {
      location.replace('https://www.google.com/search?q=' + searchVal);
    } else {
      
    }
  
  });
  
  $('#luckyBtn').on('click', () => {
    let searchVal = $('#searchInput').val();
  
    if (searchVal != '') {
      location.replace('https://' + searchVal + '.com');
    } else {
      location.replace('https://s5e.quahk.com');
    }
  });