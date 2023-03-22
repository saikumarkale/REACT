import { useState } from "react";

const FormWithFc = () => {
    const [userEmail, setUserEmail] = useState("");
    const [password, setUserPassword] = useState("");
    const [age, setAge] = useState(0);

    return (
        <>
            <input
                type="text"
                placeholder="Enter email"
                onChange={(e) => setUserEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Enter password"
                onChange={(e) => setUserPassword(e.target.value)}
            />
            <input
                type="text"
                placeholder="enter your age"
                onChange={(e) => setAge(e.target.value)}
            />
            <p>UserEmail: {userEmail}</p>
            <p>UserPass: {password}</p>

            <p>UserAge:{age}</p>
        </>
    );
};

export default FormWithFc;
