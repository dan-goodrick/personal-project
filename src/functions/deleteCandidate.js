import axios from "axios";

// might not be able to keep here because I may need access to state
const destroyCandidate = async (id) => { 
  const { data } = await axios.delete(`/api/candidate/auth/${id}`);
  console.log(`deleted %{id}`, data);
}

export default destroyCandidate