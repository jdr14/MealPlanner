cmake_minimum_required(VERSION 3.10)

# Set the project name and version
project(MealPlanner VERSION 1.0)

# Set the C++ standard
set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED True)

# Specify the source files
set(SOURCES
    server.cpp
)

# Add an executable target
add_executable(MealPlanner ${SOURCES})

# Specify the path to the Crow header file
set(CMAKE_SOURCE_DIR "~/programming/Crow/include")
include_directories(${CMAKE_SOURCE_DIR})

# Find Boost libraries
find_package(Boost REQUIRED COMPONENTS system)

if(Boost_FOUND)
    include_directories(${Boost_INCLUDE_DIRS})
    target_link_libraries(MealPlanner ${Boost_LIBRARIES})
endif()

# Add pthread library for multithreading support
find_package(Threads REQUIRED)
target_link_libraries(MealPlanner Threads::Threads)
