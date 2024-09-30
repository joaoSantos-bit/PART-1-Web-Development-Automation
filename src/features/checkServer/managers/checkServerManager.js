import { ServerService } from "../../../shared/services";

class CheckServerManager {
    async getServers(query) {
        return await ServerService.getServers(query);
    }
}

export default new CheckServerManager();