import moment from "moment";
import useCheckServer from "../hooks/useCheckServer";
import '../styles/checkServers.css'

const CheckServers = () => {
    const { servers } = useCheckServer();

    const buildServerTable = servers => {
        const sortedServers = servers.sort((a, b) => {
            return new Date(b.updated_at) - new Date(a.updated_at);
        });

        return (
            <table className="table">
                <thead className="table-header">
                    <tr className="table-header-line">
                        <th>Server name</th>
                        <th>Location</th>
                        <th>OS Type</th>
                        <th>IP Address</th>
                        <th>Creation date</th>
                        <th>Last update date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (sortedServers.length > 0) ? servers.map((server, idx) => {
                            return (
                                <tr key={`server_${idx}`}>
                                    <td>{ server.server_name }</td>
                                    <td>{ server.location }</td>
                                    <td>{ server.os_type }</td>
                                    <td>{ server.ip_address }</td>
                                    <td>{ moment(server.created_at).format('lll') }</td>
                                    <td>{ moment(server.updated_at).format('lll') }</td>
                                    <td><button className="detailsBtn">See details</button></td>
                                </tr>
                            );
                        }) : null
                    }
                </tbody>
            </table>
        );
    };

    return (
        <>
            <h1>Check all servers</h1>
            { buildServerTable(servers) }
        </>
    )
}

export default CheckServers;