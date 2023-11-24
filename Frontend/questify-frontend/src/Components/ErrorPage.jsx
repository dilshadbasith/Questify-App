import React, { useEffect } from "react";
import Cycle from "./assets/animation.json";
import { useRef } from "react";
import lottie from "lottie-web";

function ErrorPage() {
  // animation
  const lottieContainer = useRef(null);
  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: lottieContainer.current, // Reference to the container element
      animationData: Cycle, // Your animation JSON data
      loop: true, // Set to true if you want the animation to loop
      autoplay: true, // Set to true if you want the animation to play immediately
    });

    // Optionally, you can control the animation using the animation object:
    // animation.play(); // Play the animation
    // animation.pause(); // Pause the animation
    // animation.stop(); // Stop the animation
    animation.setSpeed(0.9); // Adjust the animation speed

    // Clean up the animation when the component unmounts
    return () => {
      animation.destroy();
    };
  }, []);
  return (
    <div style={{ width: "500px" }} className="mx-auto max-w-screen-md">
      <div className="text-center ">
        <div ref={lottieContainer}></div>
        <h1
          style={{
            color: "red",
            fontSize: "bold",
            marginBottom: "40px",
            textShadow: "inherit",
          }}
          className="text-3xl font-bold text-red-500 mb-4"
        >
          Page not found
        </h1>
        <p style={{ color: "gray" }} className="text-gray-600">
          Oops! It seems like the page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
}

export default ErrorPage;
