#define CROW_MAIN
#include "../Crow/include/crow.h"
#include <iostream>
#include <string>
// #include <crow/json/json.h>

int main()
{
    crow::SimpleApp app;

    // Define a POST endpoint
    CROW_ROUTE(app, "/api/endpoint").methods(crow::HTTPMethod::POST)
    ([](const crow::request& req) {
        auto data = crow::json::load(req.body);
        if (!data) {
            return crow::response(400, "Invalid JSON");
        }

        std::string key1 = data["key1"].s();
        std::string key2 = data["key2"].s();

        crow::json::wvalue response;
        response["message"] = "Data received successfully";
        response["receivedData"]["key1"] = key1;
        response["receivedData"]["key2"] = key2;

        return crow::response(response);
    });

    app.port(4000).multithreaded().run();
}


// wget https://github.com/CrowCpp/Crow/releases/download/v0.3%2B1/crow_all.h
// Mac: brew install boost
// To Compile:  g++ -o server server.cpp -lboost_system -lpthread
