//DELETE FUNCTION DOESN"T BEHAVE AS EXPECTED.

async function deleteFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/posts/${id}`, {
    method: 'DELETE'
  })
  if (response.ok) {
    console.log('deleted post!')
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.btn-danger').addEventListener('click', deleteFormHandler)