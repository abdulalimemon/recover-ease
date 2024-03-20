import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={scrollToTop}
        className={`inline-flex items-center p-2 md:p-3 rounded-full shadow-lg text-base-100 hover:opacity-80 bg-primary transition-opacity overflow-y-auto ${
          isVisible ? "flex" : "hidden"
        }`}
      >
        <ArrowUp
          className="size-6 text-white dark:text-black"
          aria-hidden="true"
        />
      </button>
    </div>
  );
};

export default BackToTop;
