#define CROW_MAIN
#include <crow.h>
#include <iostream>
#include <string>

using namespace crow;
using namespace std;

int main() {
    crow::SimpleApp app;
    app.loglevel(crow::LogLevel::Debug);

    // POST endpoint for adding recipe
    CROW_ROUTE(app, "/api/add-recipe").methods(crow::HTTPMethod::POST)
    ([](const crow::request& req) {
        auto data = crow::json::load(req.body);
        if (!data) {
            return crow::response(400, "Invalid JSON");
        }

        std::string recipe_name = data["recipe"].s();
        std::string ingredients_list = data["ingredients"].s();

        crow::json::wvalue response;
        response["message"] = "Data received successfully";
        response["receivedData"]["recipe"] = recipe_name;
        response["receivedData"]["ingredients"] = ingredients_list;
        std::cout << "Recipe received: " << recipe_name << std::endl;

        return crow::response(response);
    });

    app.port(4000).multithreaded().run();
}
