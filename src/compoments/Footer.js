import React from "react";
import '../compoments-css/footer.css'

function Footer() {
    const t = '#'
    const a="https://github.com/mafki"
    const smoothScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return (
        <footer class="footer">
            <div class="page-up">
                <button
                    id="scrollToTopButton"
                    onClick={smoothScrollToTop}
                    aria-label="Scroll to top"

                >
                    <span className="arr2"><i className='bx bx-chevron-up'></i></span>
                </button>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-3">
                        <div class="footer__logo">
                            <a href={t} ><img src="img/logo.png" alt="" /></a>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="footer__nav">
                            <ul>
                                <li class="active"><a href={t}>Homepage</a></li>
                                <li><a href={t}>Categories</a></li>
                                <li><a href={t} >Our Blog</a></li>
                                <li><a href={t}>Contacts</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 mafki2">
                        <p>
                            Copyright &copy;2023 All rights reserved | This template is made with <i class="fa fa-heart" aria-hidden="true"></i> by <a href={a} target="_blank" rel="noopener noreferrer">MaFki</a>
                        </p>

                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;
