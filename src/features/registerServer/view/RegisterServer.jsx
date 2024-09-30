import useRegisterServer from '../hooks/useRegisterServer';
import '../styles/registerServer.css';

export default function RegisterServer() {
    const { handleChange, handleOnSubmit } = useRegisterServer();

    return (
        <>
            <h1>Register Server</h1>
            <form onSubmit={handleOnSubmit}>
                <label>Server name:</label>
                <input type="text" name="server_name" onChange={handleChange} />

                <label>IP Address:</label>
                <input type="text" name="ip_address" onChange={handleChange} />

                <label>Location:</label>
                <input type="text" name="location" onChange={handleChange} />

                <label>OS Type:</label>
                <input type="text" name="os_type" onChange={handleChange} />

                <button>Register server</button>
            </form>
        </>
    )
}