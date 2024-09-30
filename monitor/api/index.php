<?php
 
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    include 'DbConnect.php';
    $objDb = new DbConnect;
    $connection = $objDb->connect();
    
    $method = $_SERVER['REQUEST_METHOD'];

    switch ($method) {
        case "GET":
            if (isset($_GET['query'])) {
                $sql = $_GET['query'];
                $stmt = $connection->prepare($sql);
                $stmt->execute();
                $server_items = $stmt->fetchAll(PDO::FETCH_ASSOC);
                echo json_encode($server_items);
            }

            break;

        case "POST":
            $server_item = json_decode(file_get_contents('php://input'));
            $created_at = date('Y-m-d');
            
            $data = json_decode(file_get_contents('php://input'));
            $table = $data->table;

            if ($table === 'server_item') {
                $sql = "INSERT INTO server_item (server_id, server_name, ip_address, location, os_type, created_at, updated_at) 
                        VALUES (null, :server_name, :ip_address, :location, :os_type, :created_at, :updated_at)";
                $stmt = $connection->prepare($sql);

                $stmt->bindParam(':server_name', $data->server_name);
                $stmt->bindParam(':ip_address', $data->ip_address);
                $stmt->bindParam(':location', $data->location);
                $stmt->bindParam(':os_type', $data->os_type);
                $stmt->bindParam(':created_at', $data->created_at);
                $stmt->bindParam(':updated_at', $data->updated_at);
            
            }

            if ($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record created successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to created record.'];
            }

            break;
    }
?>