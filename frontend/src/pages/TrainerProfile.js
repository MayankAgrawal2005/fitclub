import { useParams } from "react-router-dom";


export default function TrainerProfile() {
const { id } = useParams();


return (
<div>
<h2>Trainer Profile</h2>
<p>Trainer ID: {id}</p>
<button>Follow</button>
</div>
);
}