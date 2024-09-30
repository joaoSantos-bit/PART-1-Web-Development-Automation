import checkServerManager from '../managers/checkServerManager';
import { useState, useEffect } from 'react';

function useCheckServer() {
    const [servers, setServers] = useState([]);
    
    useEffect(() => {
        getServers();

        const intervalId = setInterval(getServers, 10000);
        return () => clearInterval(intervalId);
    }, []);
    
    const getServers = async () => {
        const query = "SELECT * FROM server_item";
  
        const serverItems = await checkServerManager.getServers(query);
        setServers(serverItems);
    };

    return { servers }
};

export default useCheckServer;