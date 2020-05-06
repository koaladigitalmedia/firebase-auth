const guidesList = document.querySelector('.guides');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');

const setupUI = (user) => {
  if (user) {
    loggedInLinks.forEach((item) => (item.style.display = 'block'));
    loggedOutLinks.forEach((item) => (item.style.display = 'none'));
  } else {
    loggedInLinks.forEach((item) => (item.style.display = 'none'));
    loggedOutLinks.forEach((item) => (item.style.display = 'block'));
  }
};

const setupGuides = (data) => {
  let html = '';
  data.forEach((doc) => {
    const guide = doc.data();
    const li = `
    <li>
      <div class="collapsible-header grey lighten-4">${guide.title}</div>
      <div class="collapsible-body white">${guide.content}</div>
    </li>
    `;
    html += li;
  });
  guidesList.innerHTML = html;
};

// setup materialize components
document.addEventListener('DOMContentLoaded', function () {
  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);
});
