import PersonData from "./PersonData";


export default function EditPerson({ person, setEditPerson, setNewPerson}) {

  // console.log("EditPerson", person);
  return (
    <>
        <PersonData person={person} setEditPerson={setEditPerson} setNewPerson={setNewPerson} />:
    </>
  );
}

