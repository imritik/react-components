import React, { useState, useEffect } from "react";
import "./Skeleton.css";
import dummyData from "./data";
import CardList from "./components/CardList";
import SkeletonCard from "./components/SkeletonCard";
const Skeleton = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setVideos(dummyData);
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="App">
      {loading && <SkeletonCard />}
      {!loading &&
        videos.map((list, index) => {
          return (
            <section key={index}>
              <h2 className="section-title">{list.section}</h2>
              <CardList list={list} />
              <hr />
            </section>
          );
        })}
    </div>
  );
};
export default Skeleton;
