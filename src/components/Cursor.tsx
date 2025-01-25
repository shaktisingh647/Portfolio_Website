import { useEffect } from "react";
import anime from "animejs";
import "./styles/Cursor.css";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const cursorInner = document.querySelector(".cursor-inner");
    const cursorOuter = document.querySelector(".cursor-outer");

    document.addEventListener("mousemove", (e) => {
      anime({
        targets: cursor,
        translateX: e.clientX,
        translateY: e.clientY,
        duration: 100,
        easing: "easeOutQuad",
      });
    });

    document.addEventListener("mousemove", (e) => {
      anime({
        targets: cursorInner,
        translateX: e.clientX,
        translateY: e.clientY,
        duration: 100,
        easing: "easeOutQuad",
      });
      anime({
        targets: cursorOuter,
        translateX: e.clientX,
        translateY: e.clientY,
        duration: 200,
        easing: "easeOutQuad",
      });
    });

    document.addEventListener("mousedown", () => {
      anime({
        targets: cursorInner,
        scale: 0.8,
        duration: 100,
        easing: "easeOutQuad",
      });
    });

    document.addEventListener("mouseup", () => {
      anime({
        targets: cursorInner,
        scale: 1,
        duration: 100,
        easing: "easeOutQuad",
      });
    });
  }, []);

  return (
    <>
      <div className="cursor">
        <div className="cursor-inner"></div>
        <div className="cursor-outer"></div>
      </div>
    </>
  );
};

export default Cursor;
