import { ThemeContext } from "./common";
import { useContext } from "react";

export  function ThemeUseComponent() {
    let value = useContext(ThemeContext);

    return <p style={{ color: value }}>Child Component: My color is {value}</p>;
}