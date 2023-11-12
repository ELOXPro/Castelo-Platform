import { useEffect, useRef } from "react";

function useDragger(id) {
  const isPressed = useRef(false);
  const coords = useRef({ startX: 0, startY: 0, lastX: 0, lastY: 0 });

  useEffect(() => {
    const target = document.getElementById(id);

    if (!target) throw new Error("Element with given id doesn't exist");

    const container = target.parentElement;

    if (!container) throw new Error("target element must have a parent");

    const startDrag = (clientX, clientY) => {
      isPressed.current = true;
      coords.current = { startX: clientX, startY: clientY, lastX: target.offsetLeft, lastY: target.offsetTop };
    };

    const drag = (clientX, clientY) => {
      if (!isPressed.current) return;
      const nextX = clientX - coords.current.startX + coords.current.lastX;
      const nextY = clientY - coords.current.startY + coords.current.lastY;
      target.style.top = `${nextY}px`;
      target.style.left = `${nextX}px`;
    };

    const endDrag = () => {
      isPressed.current = false;
    };

    const onMouseDown = (e) => startDrag(e.clientX, e.clientY);
    const onMouseMove = (e) => drag(e.clientX, e.clientY);
    const onMouseUp = () => endDrag();

    const onTouchStart = (e) => {
      const touch = e.touches[0];
      startDrag(touch.clientX, touch.clientY);
    };

    const onTouchMove = (e) => {
      const touch = e.touches[0];
      drag(touch.clientX, touch.clientY);
    };

    const onTouchEnd = () => endDrag();

    target.addEventListener("mousedown", onMouseDown);
    target.addEventListener("mousemove", onMouseMove);
    target.addEventListener("mouseup", onMouseUp);

    target.addEventListener("touchstart", onTouchStart);
    target.addEventListener("touchmove", onTouchMove);
    target.addEventListener("touchend", onTouchEnd);

    const cleanup = () => {
      target.removeEventListener("mousedown", onMouseDown);
      target.removeEventListener("mousemove", onMouseMove);
      target.removeEventListener("mouseup", onMouseUp);

      target.removeEventListener("touchstart", onTouchStart);
      target.removeEventListener("touchmove", onTouchMove);
      target.removeEventListener("touchend", onTouchEnd);
    };

    return cleanup;
  }, [id]);
}

export default useDragger;
