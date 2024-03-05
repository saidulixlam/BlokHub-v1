document.addEventListener('DOMContentLoaded', function () {
    var collapseButton = document.getElementById('collapseButton');
    var expandButton = document.getElementById('expandButton');
    var sidebar = document.querySelector('.sidebar');
    var container = document.querySelector('.container');

    collapseButton.addEventListener('click', function () {
        sidebar.classList.toggle('collapsed');
        container.classList.toggle('collapsed');
        collapseButton.style.display = 'none';
        expandButton.style.display = 'inline-block';
    });

    expandButton.addEventListener('click', function () {
        sidebar.classList.toggle('collapsed');
        container.classList.toggle('collapsed');
        collapseButton.style.display = 'inline-block';
        expandButton.style.display = 'none';
    });
});

function toggleList(itemId) {
    var additionalContent = document.getElementById(itemId).querySelector('.additional-content');
    var toggleButtonIcon = document.getElementById(itemId).querySelector('.toggle-button i');

    if (additionalContent.style.display === 'none' || additionalContent.style.display === '') {
      additionalContent.style.display = 'block';
      toggleButtonIcon.className = 'fas fa-caret-down'; // Change the icon to "down"
    } else {
      additionalContent.style.display = 'none';
      toggleButtonIcon.className = 'fas fa-caret-up'; // Change the icon to "up"
    }
  }
