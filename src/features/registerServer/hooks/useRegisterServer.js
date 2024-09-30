import registerServerManager from "../managers/registerServerManager";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function useRegisterServer() {
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();

    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;

        setInputs(values => ({ ...values, [name]: value }));
    };
    
    const handleOnSubmit = async e => {
        e.preventDefault();
        await registerServerManager.registerServer({ ...inputs, table: 'server_item'}, navigate);
    };

    return { handleChange, handleOnSubmit };
}

export default useRegisterServer;