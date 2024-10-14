import { useState, useEffect } from "react";

export default function useThemeSwitcher() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        // executa apenas no cliente
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem("theme") as 'light' | 'dark';
            if (savedTheme) {
                setTheme(savedTheme);
            }
        }
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem("theme", theme);
            if (theme === "dark") {
                document.body.classList.add("dark");
            } else {
                document.body.classList.remove("dark");
            }
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return { theme, toggleTheme };
}
