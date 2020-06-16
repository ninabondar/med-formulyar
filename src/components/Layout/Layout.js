import React, {useEffect, useState} from "react";

import Header from "../Header";
import Classes from "../Classes";
import api from "../../api"

import "./Layout.scss";
import Search from "../Search";

const Layout = () => {

    const [classes, setClasses] = useState([])

    const mapToClasses = value => value.map(i => ({title: i.name, category: `КЛАС ${i.id}`}))

    useEffect(() => {
        api.getClasses()
            .then(res => res.value)
            .then(mapToClasses)
            .then(setClasses)
    }, [])

    return (
        <div className="layout">
            <Header/>
            <Search />
            <Classes classList={classes}/>
        </div>
    );
};

export default Layout;
