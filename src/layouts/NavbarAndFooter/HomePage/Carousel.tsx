import React from 'react'
import ReturnGame from './ReturnGame'

function Carousel() {
  return (
    <div className='container mt-5' style={{ height: 550 }}>
    <div className='homepage-carousel-title'>
        <h3>Find your next "I stayed up too late reading" book.</h3>
    </div>
    <div id='carouselExampleControls' className='carousel carousel-dark slide mt-5 
        d-none d-lg-block' data-bs-interval='false'>

        {/* Desktop */}
        <div className='carousel-inner'>
            <div className='carousel-item active'>
                <div className='row d-flex justify-content-center align-items-center'>
                    {books.slice(0, 3).map(book => (
                        <ReturnGame book={book} key ={book.id} />
                    ))}
                </div>
            </div>
            <div className='carousel-item'>
                <div className='row d-flex justify-content-center align-items-center'>
                    {books.slice(3, 6).map(book => (
                        <ReturnGame book={book} key ={book.id} />
                    ))}
                </div>
            </div>
            <div className='carousel-item'>
                <div className='row d-flex justify-content-center align-items-center'>
                    {books.slice(6, 9).map(book => (
                        <ReturnGame book={book} key ={book.id} />
                    ))}
                </div>
            </div>
        </div>
        <button className='carousel-control-prev' type='button'
            data-bs-target='#carouselExampleControls' data-bs-slide='prev'>
            <span className='carousel-control-prev-icon' aria-hidden='true'></span>
            <span className='visually-hidden'>Previous</span>
        </button>
        <button className='carousel-control-next' type='button'
            data-bs-target='#carouselExampleControls' data-bs-slide='next'>
            <span className='carousel-control-next-icon' aria-hidden='true'></span>
            <span className='visually-hidden'>Next</span>
        </button>
    </div>

    {/* Mobile */}
    <div className='d-lg-none mt-3'>
        <div className='row d-flex justify-content-center align-items-center'>
            <ReturnGame book={books[7]} key={books[7].id}/>
        </div>
    </div>
    <div className='homepage-carousel-title mt-3'>
        <Link className='btn btn-outline-secondary btn-lg' to='/search'>View More</Link>
    </div>
</div>
  )
}

export default Carousel