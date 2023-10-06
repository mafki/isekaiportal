import React from "react";

/**
 * 
 * this is a compoment for the comment in side section  for the home page  
 */
export default function SideComment(){
    const t='#'
    const e='#'
    return(
        <div className="product__sidebar__comment">
                            <div className="section-title">
                                <h5>New Comment</h5>
                            </div>
                            <div className="product__sidebar__comment__item">
                                <div className="product__sidebar__comment__item__pic">
                                    <img src="../img/sidebar/comment-1.jpg" alt="" />
                                </div>
                                <div className="product__sidebar__comment__item__text">
                                    <ul>
                                        <li>Active</li>
                                        <li>Movie</li>
                                    </ul>
                                    <h5><a href={t}>The Seven Deadly Sins: Wrath of the Gods</a></h5>
                                    <span><i className="fa fa-eye"></i> 19.141 Viewes</span>
                                </div>
                            </div>
                            <div className="product__sidebar__comment__item">
                                <div className="product__sidebar__comment__item__pic">
                                    <img src="../img/sidebar/comment-2.jpg" alt="" />
                                </div>
                                <div className="product__sidebar__comment__item__text">
                                    <ul>
                                        <li>Active</li>
                                        <li>Movie</li>
                                    </ul>
                                    <h5><a href={t}>Shirogane Tamashii hen Kouhan sen</a></h5>
                                    <span><i className="fa fa-eye"></i> 19.141 Viewes</span>
                                </div>
                            </div>
                            <div className="product__sidebar__comment__item">
                                <div className="product__sidebar__comment__item__pic">
                                    <img src="../img/sidebar/comment-3.jpg" alt="" />
                                </div>
                                <div className="product__sidebar__comment__item__text">
                                    <ul>
                                        <li>Active</li>
                                        <li>Movie</li>
                                    </ul>
                                    <h5><a href={t}>Kizumonogatari III: Reiket su-hen</a></h5>
                                    <span><i className="fa fa-eye"></i> 19.141 Viewes</span>
                                </div>
                            </div>
                            <div className="product__sidebar__comment__item">
                                <div className="product__sidebar__comment__item__pic">
                                    <img src={e} alt="" />
                                </div>
                                <div className="product__sidebar__comment__item__text">
                                    <ul>
                                        <li>Active</li>
                                        <li>Movie</li>
                                    </ul>
                                    <h5><a href={t}>Monogatari Series: Second Season</a></h5>
                                    <span><i className="fa fa-eye"></i> 19.141 Viewes</span>
                                </div>
                            </div>
                        </div>
    )
}