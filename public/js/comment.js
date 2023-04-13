const commentHandler = async (event) => {
    event.preventDefault();
    
    const name = document.querySelector('#post-name').value.trim();
    const description = document.querySelector('#post-desc').value.trim();

    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');

      const response = await fetch(`/api/post/${id}`, {
        method: 'COMMENT',
      });

      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to comment on post');
      }
    }
  };

  document
  .querySelector('.post-list')
  .addEventListener('click', commentHandler);
