import EditPerson from "./EditPerson";

const EditFamily = ({ family }) => {
  console.log("family", family);
  return (family.map((person) => { 
    console.log("person", person);
    <EditPerson person={person}/>
   }
  ))
};

export default EditFamily;
