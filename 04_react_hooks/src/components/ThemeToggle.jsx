import { useState } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
    setIsDark((mode) => !mode);
  };
  return (
    <div
      style={{
        height: "100vh",
        background: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
      }}
    >
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed laboriosam
        excepturi ullam unde minima sunt, quae a asperiores voluptates corporis
        quibusdam dolorem nemo sit omnis aspernatur ipsum iusto fugit. Deserunt!
      </h2>
      <button onClick={toggleTheme}>
        切换到{isDark ? "白天" : "暗黑"}模式
      </button>
    </div>
  );
};

export default ThemeToggle;
