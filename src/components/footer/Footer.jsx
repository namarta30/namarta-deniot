import React from 'react'

const Footer = () => {
    return (
        <div className='footer-outer  p-5 text-white '>
            <div>
                <div className='p-5 d-flex justify-content-center text-white'>
                    <img src="https://admin.deniot.com/app/uploads/2021/02/vignette-homepage-projects@320w.jpg" />
                    <p className='para-foot'>Interior Design</p>

                </div>
                <div>
                    <div className="d-flex gap-md-2 flex-wrap justify-content-center">
                        <p className='page-links'>Books</p>
                        <p className='page-links'>Press Room</p>
                        <p className='page-links'>Private</p>
                        <p className='page-links' >Legal Notice</p>
                        <p className='page-links' >Instagram</p>
                        <p className='page-links' >Contact</p>
                    </div>
                </div>
                <div>
                    <p className='text-white text-center mt-3 f-14'>Created by 14.8</p>
                </div>

            </div>

        </div>
    )
}

export default Footer