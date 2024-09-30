import { ServerService } from "../../../shared/services";

class RegisterServerManager {
    async registerServer(inputs, navigate) {
        return await ServerService.registerServer(inputs, navigate);
    }
}

export default new RegisterServerManager();