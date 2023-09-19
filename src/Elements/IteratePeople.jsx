import PersonCard from "./PersonCard";

const IteratePeople = ({ people }) => {
  // console.log("People", people);
  return (
    <div>
      {people.map((person, i) => <PersonCard key={person.personId} person={person} i={i} /> )}
    </div>
  );
};

export default IteratePeople;
