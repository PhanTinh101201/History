import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Outlet, NavLink } from "react-router-dom";
import { getPosts } from "../../../Redux/FetchApis/postSlice";

export default function ManuMinima() {
    const { posts, loading } = useSelector((state) => state.post);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getPosts());
    }, []);
    return (
      <div>
        <div className="Arrival">
        Bộ Sưu Tập Dép Nanu Minimal 
        </div>
        <div className="new__Arrical__content">
          {posts.map((item) => {
            if (item.type === "dep")
              return (
                <div key={item.id} className="product__items">
                  <img src={item.img} />
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
        <p className='details'> Click Xem tất cả Dép Nanu Minimal </p>
      </div>
    );
  }
  