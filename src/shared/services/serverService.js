import { client } from "../api";

class ServerService {
    async getServers(query) {
        const url = `/monitor/api/?query=${encodeURIComponent(query)}`;
        return await client.get(url).then(result => result.data);
    }

    async registerServer(inputs, navigate) {
        return await client.post('monitor/api/save', inputs).then(() => navigate('/check'));
    }
}

export default new ServerService();