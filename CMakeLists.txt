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
set(CMAKE_SOURCE_DIR "/opt/homebrew/include")
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

# Finally add Crow support for this API routing
find_package(Crow)
target_link_libraries(MealPlanner Crow::Crow) # may have to be PUBLIC


find_package(ZLIB)
find_package(OpenSSL)

if(OPENSSL_FOUND)
    include_directories(${OPENSSL_INCLUDE_DIR})
endif()

if (NOT CMAKE_BUILD_TYPE)
    message(STATUS "No build type selected, default to Release")
    set(CMAKE_BUILD_TYPE "Release")
endif()

if (MSVC)
    set(Boost_USE_STATIC_LIBS "On")
    find_package( Boost 1.70 COMPONENTS system thread regex REQUIRED )
else()
    find_package( Boost 1.70 COMPONENTS system thread REQUIRED )
endif()

