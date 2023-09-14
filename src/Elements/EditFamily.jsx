import EditPerson from "./EditPerson";

const EditFamily = ({ family }) => {
  console.log("family", family);
  return (
    <>
    {family.map((person) => <EditPerson key={person.personId} person={person}/>)}
    </>
  )
};

export default EditFamily;
