import { useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import { Box } from "./Box/Box";
import { Center } from "./Center/Center";
import { Color } from "./color";
import { NavBar } from "./NavBar/NavBar";
import { About } from "./Pages/About/About";
import { Home } from "./Pages/Home/Home";

const NAVBAR_DATA = [
    {
        title: "Home",
        path: "/",
        shortcut: "h",
    },
    {
        title: "About me",
        path: "/about",
        shortcut: "a",
    },
    {
        title: "Source",
        path: "https://github.com/BalintCsala/website",
        shortcut: "s",
    },
    {
        title: "Support me",
        path: "https://www.patreon.com/balintshaders",
        shortcut: "m"
    }
]

export function App() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const listener = () => {
            if (!ref.current)
                return;

            ref.current.style.fontSize = `${Math.floor(Math.min(window.innerWidth, 950) / 80)}px`;
        };
        listener();
        window.addEventListener("resize", listener);
        return () => window.removeEventListener("resize", listener);
    }, []);

    return (
        <div className={styles.app} ref={ref}>
            <Box width={80} height={60} className={styles.crt}>
                <Box width={80} height={3} padded background={Color.Teal}>
                    <Center>
                        Bálint Csala - Copyright © 2022
                    </Center>
                </Box>
                <NavBar pages={NAVBAR_DATA} />
                <Box width={80} height={1} background={Color.Gray} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
                <Box width={80} height={3} background={Color.Teal} padded>
                    <span>F1 = Help, Alt + &lt;key&gt; = Shortcut</span>
                </Box>
            </Box>
        </div>
    );
}