import React, {useState, useEffect} from "react";
import axios from "axios";

const CreateList = () => {
    const [categories, setCategories] = useState([])
    const [randomList, setRandomList] = useState([])

    useEffect(() => {
        getCategories();
    }, [])

    async function getCategories(){
        let response = await axios.get('http://127.0.0.1:8000/api/categories/')
        setCategories(response.data)
        getRandom(categories)
    }

    function getRandom(list) {
        const shuffledList = [...list];
        for (let i = shuffledList.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]];
        }
        setRandomList(shuffledList.slice(0, 12));
      }

    const handleButtonClick = () => {
        getRandom(categories)
      };
    
      
      return (
        <div>
            <h2>Categories</h2>
            <ol>
                {randomList.map(item => (
                <li key={item.id}>{item.category}</li>
                ))}
            </ol>
            <button onClick={handleButtonClick}>Generate List</button>
        </div>
      );

}

export default CreateList;