import Link from "next/link";
import { Button, FormControl, FormSelect } from "react-bootstrap";
export default function Profile() {
  return (

    <div id="wd-profile-screen">
      <h1>Sign in</h1>
      <FormControl id="wd-username"
        placeholder="username"
        defaultValue="alice"
        className="mb-2" />
      <FormControl id="wd-password"
        placeholder="password" type="password"
        className="mb-2" />
        <FormControl id="wd-firstname"
        placeholder="First Name" 
        defaultValue="Alice"
        className="mb-2" />
         <FormControl id="wd-lastname"
        placeholder="Last Name" 
        defaultValue="Wonderland"
        className="mb-2" />

         <FormControl id="wd-dob"
         type="date" 
        defaultValue="2000-01-01"
        className="mb-2" />

         <FormControl id="wd-email"
         type="email"
       
        defaultValue="alice@wonderland"
        className="mb-2" />
        <FormSelect id="wd-role" className="mb-3">
                        <option value="USER" defaultChecked>User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </FormSelect>



      <Button href="signin" variant="danger" className="me-1 float-end" >
        Sign Out
      </Button>


    </div>
  );
}
