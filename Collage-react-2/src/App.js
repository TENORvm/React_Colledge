import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      console.log(tours);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    const restTour = tours.filter((el) => el.id !== id);
    setTours(restTour);
  };

  if (loading) {
    if (tours.length === 0) {
      return (
        <main>
          <div className="title">
            <h2>no tours left</h2>
            <button className="btn" onClick={fetchTours}>
              Refresh
            </button>
          </div>
        </main>
      );
    }
    return (
      <main>
        <Tours removeTour={removeTour} tours={tours} />
      </main>
    );
  }

  return (
    <main>
      <Loading />
    </main>
  );
}
