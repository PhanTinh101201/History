import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../../../Redux/FetchApis/postSlice";
import {Outlet, NavLink } from "react-router-dom";
import '../style.css'
export default function SandalNam() {
  const { posts, loading } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    <div>
      <div className="new__Arrical__content__navbar">
        {posts.map((item) => {
          if (item.type === "giaynam")
            return (
              <div key={item.id} className="product__items__navbar">
                <img  src={item.img} />
                <div class="middle">
                  <div class="text">Mua</div>
                </div>
                <p className="depcription">{item.depcriptions}</p>
                <p className="price">{item.price}</p>
                <button className="btn-cart">Thêm Vào Giỏ Hàng</button>
              </div>
            );
        })}
      </div>
      <p className='details'> Click Xem tất cả Giày Nam</p>
    </div>
  )
}
