import PersonCard from "./PersonCard";

const ShowPeople = ({ people }) => {
  // console.log("People", people);
  return (
    <div>
      {people.map((person, i) => <PersonCard key={i} person={person} i={i} /> )}
    </div>
  );
};

export default ShowPeople;
