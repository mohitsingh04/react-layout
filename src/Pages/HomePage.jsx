import React, { useEffect, useState } from 'react';
import HomeLayout from '../Layout/HomeLayout';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const response = await fetch("https://dummyjson.com/recipes");
        const jsonData = await response.json();
        setData(jsonData.recipes)
      } catch (error) {
        console.log(error.message)
      } finally {
        setLoading(false)
      }
    }

    getRecipes();
  }, []);

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <HomeLayout>
        <div className="container my-5">
          <h5 className='my-3'>All Recepies</h5>
          <div className="row">
            {data.map((items) => (
              <div className="col-md-4" key={items.id}>
                <div class="card" style={{ width: "18rem" }}>
                  <img src={items.image} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{items.name}</h5>
                    <p class="card-text">{items.instructions}</p>
                    <Link to="#" class="btn btn-primary">View</Link>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </HomeLayout>
    </>
  )
}
