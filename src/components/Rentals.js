import React from "react";
import house1 from "../assets/house1.jpg";
import house2 from "../assets/house2.jpg";
import house3 from "../assets/house3.jpg";
import house4 from "../assets/house4.jpg";
import house5 from "../assets/house5.jpg";
import house6 from "../assets/house6.jpg";
import house7 from "../assets/house7.jpg";
import house8 from "../assets/house8.jpg";
import house9 from "../assets/house9.jpg";
import house10 from "../assets/house10.jpg";
import house11 from "../assets/house11.jpg";
import house12 from "../assets/house12.jpg";
import house13 from "../assets/house13.jpg";
import house14 from "../assets/house14.jpg";
import house15 from "../assets/house15.jpg";
import Rental from "./Rental";
import avatar_1 from "../assets/avatar_1.png";
import avatar_2 from "../assets/avatar_2.png";
import avatar_3 from "../assets/avatar_3.png";
import avatar_4 from "../assets/avatar_4.png";
import avatar_5 from "../assets/avatar_5.png";
import avatar_6 from "../assets/avatar_6.png";
import avatar_7 from "../assets/avatar_7.png";
import avatar_8 from "../assets/avatar_8.png";
import avatar_9 from "../assets/avatar_9.png";
import avatar_10 from "../assets/avatar_10.png";
import avatar_11 from "../assets/avatar_11.png";
import avatar_12 from "../assets/avatar_12.png";
import avatar_13 from "../assets/avatar_13.png";
import avatar_14 from "../assets/avatar_14.png";
import avatar_15 from "../assets/avatar_15.png";

const Rentals = () => {
  const rentals = [
    { title: "Atlanta, USA", image: house1, price: "1,112", URL: "www.google.com", desc: "Michael Chang", about: "Offering my studio apartment for rent in Atlanta, close to Georgia tech", avatar: avatar_1, date: "Lease Transfer on 22/10/2023" },
    { title: "Austin, USA", image: house2, price: "1,541", URL: "www.google.com", desc: "Emily Rodriguez", about: "Urgently seeking a lease transfer for my 4b4b house near Columbia University in New York City", avatar: avatar_2, date: "Lease Transfer on 25/10/2023" },
    { title: "Los Angeles, USA", image: house3, price: "782", URL: "www.google.com", desc: "Alex Patel", about: "Posting a new lease for a spacious 2-bedroom house near the University of Chicago", avatar: avatar_3, date: "Lease Transfer on 24/10/2023" },
    { title: "NYC, USA", image: house4, price: "1459", URL: "www.google.com", desc: "Jennifer Smith", about: "Looking for a tenant to take over my lease for a 5-bedroom house near the Texas Medical College , Houston", avatar: avatar_4, date: "Lease Transfer on 23/10/2023" },
    { title: "Boston, USA", image: house5, price: "2100", URL: "www.google.com", desc: "Kevin Turner", about: "Offering my beachfront 4-bedroom house for rent in Miami, ideal for students", avatar: avatar_5, date: "Lease Transfer on 26/10/2023" },
    { title: "Raleigh, USA", image: house6, price: "1890", URL: "www.google.com", desc: "Jonathan Clark", about: "Seeking a lease transfer for his 3-bedroom house in Washington, D.C", avatar: avatar_6, date: "Lease Transfer on 27/10/2023" },
    { title: "Denver, USA", image: house7, price: "1,541", URL: "www.google.com", desc: "David Brown", about: "Posting a new lease for a modern 2-bedroom house conveniently located near Boston University", avatar: avatar_7, date: "Lease Transfer on 28/10/2023" },
    { title: "Miami, USA", image: house8, price: "1,390", URL: "www.google.com", desc: "Samantha Taylor", about: "Urgently looking for someone to take over my lease for a 4-bedroom ideal for students near the University of Denver", avatar: avatar_8, date: "Lease Transfer on 29/10/2023" },
    { title: "Las Vegas, USA", image: house9, price: "1,780", URL: "www.google.com", desc: "Ryan Mitchell", about: "Offering my 2-bedroom house with a great downtown view for rent in Jacksonville-Florida", avatar: avatar_9, date: "Lease Transfer on 30/10/2023" },
    { title: "London, UK", image: house10, price: "1,675", URL: "www.google.com", desc: "Olivia Turner", about: "Seeking a lease transfer for my 3-bedroom house in San Francisco", avatar: avatar_10, date: "Lease Transfer on 31/10/2023" },
    { title: "Dallas, USA", image: house11, price: "1,890", URL: "www.google.com", desc: "Rachel White", about: "Looking for a tenant to take over my lease for a 4-bedroom house near the University of California, Berkeley", avatar: avatar_11, date: "Lease Transfer on 01/11/2023" },
    { title: "Toronto, Canada", image: house12, price: "1,541", URL: "www.google.com", desc: "Brian Foster", about: "Offering my 2-bedroom house for rent in Seattle, close to the University of Washington", avatar: avatar_12, date: "Lease Transfer on 02/11/2023" },
    { title: "Seattle, USA", image: house13, price: "2224", URL: "www.google.com", desc: "Mia Ramirez", about: "Urgently seeking a lease transfer for my 3-bedroom house near the University of California, Los Angeles", avatar: avatar_13, date: "Lease Transfer on 03/11/2023" },
    { title: "Atlanta, USA", image: house14, price: "890", URL: "www.google.com", desc: "Ethan Baker", about: "Posting a new lease for a 4-bedroom house near the University of California, San Diego", avatar: avatar_14, date: "Lease Transfer on 04/11/2023" },
    { title: "Memphis, USA", image: house15, price: "680", URL: "www.google.com", desc: "Jessica Lee", about: "Looking for a tenant to take over my lease for a 3-bedroom house near the University of California, Irvine", avatar: avatar_15, date: "Lease Transfer on 05/11/2023" },
  ];
  return (
    <div className="py-3 sm:py-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-10 ">
        {rentals.map((rental) => (
          <Rental
            title={rental.title}
            image={rental.image}
            price={rental.price}
            URL={rental.URL}
            desc={rental.desc}
            about={rental.about}
            avatar={rental.avatar}
            date={rental.date}
            
          />
        ))}
      </div>
    </div>
  );
};

export default Rentals;