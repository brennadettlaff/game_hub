import React, {useState, useEffect} from "react";
import axios from "axios";

const CreateList = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories();
    }, [])

    async function getCategories(){
        let response = await axios.get('http://127.0.0.1:8000/api/categories/')
        setCategories(response.data)
        console.log("Test", response.data)
    }

}

export default CreateList;