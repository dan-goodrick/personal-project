import Typography from "@mui/material/Typography";

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
  }

  const orderHousehold = (members) =>{
    const i = members.findIndex(member => member.headOfHousehold == true);
    const headOfHousehold = members.splice(i,1)[0]
    members.sort((a, b) => a.dob.localeCompare(b.dob));
    members.unshift(headOfHousehold)
    return members
  }
  const Family = ({ members }) => {
    // I want to print the head of household in a different font at the top of the list
  return (
    <>
      { members[0] ? orderHousehold(members).map((person, i) => (
        <Typography
          variant={i  ? "body2" : "body1"}
          color="text.secondary"
          key={person.personId}
        >
          {person.firstName} {person.lastName}: {getAge(person.dob)}
        </Typography> 
      )): null}
    </>
  );
};

export default Family;


// head of household should be bold

// const i = members.findIndex(member => member.headOfHousehold == true);
//       const headOfHousehold = members.splice(i,1)[0]
//       return headOfHousehold, members
// sort((a,b)=>{a.headOfHousehold ? a 1 : 0}).