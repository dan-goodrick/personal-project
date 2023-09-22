import PersonCard from "./PersonCard";

const ShowPeople = ({ people, updateDb }) => {
  const handleEditPerson = (values) => { 
    const updatedPerson = { ...person, ...values };
    if (updateDb){
        axios.put(`/api/person/auth/${values.personId}`,values)
        .then((candidate) => {
          setPersonCopy(values)
          console.log("updated candidate:", candidate);
        })
        .catch((error) => {
          console.error(`Unable to update Candidate ${values}`, error);
        });
    } else {
      const updatedPeople = people.map((person) => {
        if (person.personId === values.personId) {
          console.log(`Updated ${person.personId} with ${values}`);
          return values;
        }
        return person;
      });
  setPeopleArr(updatedPeople)
  setEditPerson(false)
  }
}
  return (
    <div>
      {people.map((person, i) => <PersonCard key={i} person={person} i={i} handleEditPerson={handleEditPerson} /> )}
    </div>
  );
};

export default ShowPeople;
