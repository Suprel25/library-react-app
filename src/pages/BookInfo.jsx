import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft,} from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/ui/Rating";
import Price from "../components/ui/Price";
import Book from "../components/ui/Book";



const BookInfo = ({ books,addToCart, cart}) => {
  const { id } = useParams();
  const book = books.find((book) => +book.id === +id);
  

  function addBookToCart (book) {
    addToCart (book) 
  }

  function bookExistsOnCart () {
    return  cart.find(book => book.id === +id )
  }


  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selcted--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon={faArrowLeft} />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--top--title">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src={book.url} alt="" className="book__selected--img" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">
                  {" "}
                  Crack the Codeing Interview
                </h2>
                <Rating rating="4" />
                <div className="book__selected--price">
                  <Price originalPrice={50} salePrice={null} />
                </div>
                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Aut aperiam rerum nisi. Dolorem quia libero a optio qui,
                    esse ducimus nam fugiat sint, deleniti quas excepturi dicta
                    autem commodi illo.
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Aut aperiam rerum nisi. Dolorem quia libero a optio qui,
                    esse ducimus nam fugiat sint, deleniti quas excepturi dicta
                    autem commodi illo.
                  </p>
                </div>
                 {
                  bookExistsOnCart ()? 
                  (<Link to={`/cart`} className="book_link" >
                    <button className="btn">Checkout</button>
                    </Link>) : 
                  <button className="btn" onClick={() => addBookToCart(book)} >Add to Cart</button>
                 }
              </div>
            </div>
          </div>
        </div>
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">Recommended Books</h2>
            </div>
            <div className="books">
              {books
                .filter((book) => book.rating === 5 && +book.id !== +id)
                .slice(0, 4)
                .map((book) => (
                  <Book book={book} key={book.id} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
