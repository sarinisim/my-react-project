function BooksTable() {
  const books = [
    {
      id: 1,
      title: "הארי פוטר ואבן החכמים",
      author: "ג'יי קיי רולינג",
      year: 1997,
      pages: 223,
      genre: "פנטזיה"
    },
    {
      id: 2,
      title: "הנסיך הקטן",
      author: "אנטואן דה סנט-אכזופרי",
      year: 1943,
      pages: 96,
      genre: "קלאסיקה"
    },
    {
      id: 3,
      title: "1984",
      author: "ג'ורג' אורוול",
      year: 1949,
      pages: 328,
      genre: "דיסטופיה"
    }
  ];

  return (
    <div>
      <h2>רשימת ספרים</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>שם הספר</th>
            <th>מחבר</th>
            <th>שנת הוצאה</th>
            <th>מספר עמודים</th>
            <th>ז'אנר</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.year}</td>
              <td>{book.pages}</td>
              <td>{book.genre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BooksTable;