import PersonData from "./PersonData";


export default function EditPerson({ person, setEditPerson }) {

  // console.log("EditPerson", person);
  return (
    <>
        <PersonData key={person.personId} person={person} setEditPerson={setEditPerson} />:
    </>
  );
}

