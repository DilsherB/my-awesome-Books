class bookShelf {
  constructor() {
    this.bookContainer = document.querySelector('.bookContainer');
  };
  addBook() {
    
  };
  removeBook() {

  };
  populateUI() {
    
  };
};


const bookContainer = document.querySelector('.bookContainer');
const books = JSON.parse(localStorage.getItem('books')) || [];
books.forEach((book) => {
  bookContainer.innerHTML += `
  <div class="innerContainer">
    <p>"${book.title}" by ${book.author}</p>
    <button class="removeBtn" id="${book.id}">Remove</button>
  </div>
`;
});

const addBook = () => {
  const formData = document.querySelectorAll('input');
  const title = formData[0].value;
  const author = formData[1].value;
  if (title.trim() === '' || author.trim() === '') return;
  const id = Date.now().toString();
  books.push({ title, author, id });
  localStorage.setItem('books', JSON.stringify(books));
  window.location.reload();
};

document.querySelector('.addBtn').addEventListener('click', addBook);

const removeBook = (id) => {
  const filteredBooks = books.filter((book) => book.id !== id);
  localStorage.setItem('books', JSON.stringify(filteredBooks));
  window.location.reload();
};
bookContainer.addEventListener('click', (e) => {
  const clickedBtn = e.target.closest('.removeBtn');
  if (!clickedBtn) return;
  const idToRemove = clickedBtn.id;
  removeBook(idToRemove);
});
