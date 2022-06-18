import React from "react";
import ReactDOM from "react-dom";
import "reflect-metadata";
import "antd/dist/antd.css";
import "react-toastify/dist/ReactToastify.css";
import { App } from "./App";

declare global {
    interface Window {
        require: any;
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
