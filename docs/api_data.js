define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./docs/main.js",
    "group": "C__Users_Jay_My_Documents_Lambda_Projects_Build_Week_4_FishFriends_back_end_docs_main_js",
    "groupTitle": "C__Users_Jay_My_Documents_Lambda_Projects_Build_Week_4_FishFriends_back_end_docs_main_js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/authRoute/login",
    "title": "Login Existing User",
    "name": "AuthLogin",
    "group": "Register_and_Login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username, unique</p>"
          },
          {
            "group": "Parameter",
            "type": "Password",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Login Request Example:",
          "content": "{\n  \"username\": \"j1\",\n  \"password\": \"pass\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p><code>${username}, welcome back!</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>jsonWebToken</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userObject",
            "description": "<p>Includes username, firstName, lastName, userId</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Login Response",
          "content": "{\n  \"message\": \"j1, welcome back!\",\n  \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJ1c2VybmFtZSI6ImoxIiwiaWF0IjoxNTY5NDI1MjI0LCJleHAiOjE1Njk1MTE2MjR9.qVp-bRGKBVmisLHjh2apYisEEVYzEs3HmxPnJfE0li0\",\n  \"userObject\": {\n    \"username\": \"j1\",\n    \"lastName\": \"W1\",\n    \"firstName\": \"J1\",\n    \"userId\": 1\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/authRoute/authRoute.js",
    "groupTitle": "Register_and_Login"
  },
  {
    "type": "post",
    "url": "/authRoute/register",
    "title": "Register New User",
    "name": "AuthRegister",
    "group": "Register_and_Login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username, unique</p>"
          },
          {
            "group": "Parameter",
            "type": "Password",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>User's first name, not unique</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>User's last name, not unique</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Register Request Example:",
          "content": "{\n  \"username\": \"CharlieB\",\n  \"password\": \"pass\",\n  \"firstName\": \"Charlie\",\n  \"lastName\": \"Brown\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userObject",
            "description": "<p>Includes username, firstName, lastName, userId</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>jsonWebToken</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example-Register-Response",
          "content": "{\n \"userObject\": {\n   \"firstName\": \"Charlie\",\n   \"lastName\": \"Brown\",\n   \"username\": \"CharlieB\",\n   \"userId\": 2\n },\n \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6IkNoYXJsaWVCIiwiaWF0IjoxNTY5NDI1NzYyLCJleHAiOjE1Njk1MTIxNjJ9.wjcFRdHTdgVYyexUntNTg1FBDg-9Vu9SSYW3Pknz4_8\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/authRoute/authRoute.js",
    "groupTitle": "Register_and_Login"
  },
  {
    "type": "post",
    "url": "/logRoute/",
    "title": "Add New Log",
    "name": "PostNewLog",
    "group": "User_Logs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Obj",
            "optional": false,
            "field": "newLog",
            "description": "<p>Object containing new user log, requires all fields listed below (userId is read automatically)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "baitType",
            "description": "<p>Type of bait used</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "waterBodyId",
            "description": "<p>Id of water body</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fishId",
            "description": "<p>Name of the fish (Do NOT send fishId! This is converted on the backend and the fishName is added to 'fish-types' table, if new)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "fishCount",
            "description": "<p>Amount of fish caught</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "timeSpent",
            "description": "<p>Amount of time spent fishing (in hours, decimals OK)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "timeOfDay",
            "description": "<p>Time of day the user fished, include as a string (&quot;6:30 am&quot;)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Post Body:  ",
          "content": "{\n  \"baitType\": \"worms\",\n  \"waterBodyId\": 1,\n  \"fishId\": \"grouper\",\n  \"fishCount\": 3,\n  \"timeSpent\": 1.5,\n  \"timeOfDay\": \"6:30 am\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "logID",
            "description": "<p>ID of newly created log</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successfully posted new user log",
          "content": "HTTP/1.1 200 OK\n\n 5 <--where 5 is the ID of the newly created user log",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "waterBodyNotFound",
            "description": "<p>Could not find a water body with that id: id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": "HTTP/1.1 404 Not Found\n { \n   \"message\": \"Can't find water body with id of 11234\" \n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/logRoute/logRoute.js",
    "groupTitle": "User_Logs"
  },
  {
    "type": "put",
    "url": "/logRoute/user-logs/:id",
    "title": "Update User Log",
    "name": "UpdateLog",
    "description": "<p>Update an existing log. Users must be logged in to update a log and can only update their own logs. NOTE: The &quot;:id&quot; in the url refers to the LOG id (not user or waterBody ID).</p>",
    "group": "User_Logs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "baitType",
            "description": "<p>Type of bait used</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "waterBodyId",
            "description": "<p>REQUIRED: Id of water body</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fishId",
            "description": "<p>REQUIRED: Name of the fish (Do NOT send fishId! This is converted on the backend and the fishName is added to 'fish-types' table, if new)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "fishCount",
            "description": "<p>Amount of fish caught</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "timeSpent",
            "description": "<p>Amount of time spent fishing (in hours, decimals OK)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "timeOfDay",
            "description": "<p>Time of day the user fished, include as a string (&quot;6:30 am&quot;)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example PUT Body:  ",
          "content": "{\n  \"baitType\": \"worms\",\n  \"waterBodyId\": 1,\n  \"fishId\": \"red grouper\",\n  \"fishCount\": 4,\n  \"timeSpent\": 2.0,\n  \"timeOfDay\": \"6:30 am\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "missingFields",
            "description": "<p>Error Updating User Log: the request is missing either the waterBodyId or fishId</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "userIdMismatch",
            "description": "<p>Error Validating User: The userID of current user is different that the userID on the log.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "noCredentials",
            "description": "<p>Error Authorizing User: No Authorization header was included in the request.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "WaterBodyNotFound",
            "description": "<p>No water body could be found with the provided waterBodyId</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Updating User Log:",
          "content": "{\n  \"message\": \"Missing either waterBodyId or fishId\"\n }",
          "type": "json"
        },
        {
          "title": "Error Validating User",
          "content": "HTTP 1.1 403 Forbidden\n  { \n    \"message\": 'UserId mismatch: users can only modify their own posts.'\n  }",
          "type": "json"
        },
        {
          "title": "Error Authorizing User",
          "content": "HTTP 1.1 401 Unauthorized\n  { \n    \"message\": 'No credentials provided. Please login to access this content.'\n  }*",
          "type": "json"
        },
        {
          "title": "Water Body Not Found",
          "content": "HTTP/1.1 404 Not Found\n  { \n     \"message\": \"Can't find water body with id of 112312\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/logRoute/logRoute.js",
    "groupTitle": "User_Logs"
  },
  {
    "type": "delete",
    "url": "/logRoute/user-logs/delete-logs/:id",
    "title": "Delete a user log",
    "name": "deleteUserLog",
    "description": "<p>User must be logged in to delete a log. Users can only delete their own logs.</p>",
    "group": "User_Logs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "logId",
            "description": "<p>Log ID is read from req.params.id (e.g., &quot;/user-logs/delete-logs/2&quot;)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "numberOfRecordsDeleted",
            "description": "<p>Returns the number of records deleted. Expected to be 1.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/logRoute/logRoute.js",
    "groupTitle": "User_Logs"
  },
  {
    "type": "get",
    "url": "//logRoute/all-logs",
    "title": "Get All User Logs",
    "name": "getAllLogs",
    "group": "User_Logs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "userLogs",
            "description": "<p>Returns an array of objects, where each object is a user log.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful GET Response",
          "content": " [\n  {\n    \"username\": \"Leslie\",\n    \"userId\": 10,\n    \"log_id\": 17,\n    \"waterBodyId\": 1,\n    \"fishName\": \"red salmon\",\n    \"fishCount\": 2,\n    \"baitType\": \"worms\",\n    \"timeSpent\": 4,\n    \"timeOfDay\": \"9:00 am\",\n    \"facilityName\": \"Cow Lake\",\n    \"latitude\": 47.135255996919575,\n    \"longitude\": -118.15495300359936\n  },\n  {\n    \"username\": \"Bryan\",\n    \"userId\": 14,\n    \"log_id\": 24,\n    \"waterBodyId\": 1,\n    \"fishName\": \"pink salmon\",\n    \"fishCount\": 1,\n    \"baitType\": \"plastic\",\n    \"timeSpent\": 2,\n    \"timeOfDay\": \"6:30 am\",\n    \"facilityName\": \"Cow Lake\",\n    \"latitude\": 47.135255996919575,\n    \"longitude\": -118.15495300359936\n  }, \n ...\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/logRoute/logRoute.js",
    "groupTitle": "User_Logs"
  },
  {
    "type": "get",
    "url": "/logRoute/user-logs/:id",
    "title": "Get User Logs by User ID",
    "name": "getLogsById",
    "group": "User_Logs",
    "description": "<p>Get user logs for any user in the database. Requires user to be logged in.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User ID is read from req.params.id (e.g., &quot;/logRoute/user-logs/2&quot;).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "logsArray",
            "description": "<p>Returns an array of objects, where each object is a user log. Returns an error message if user is not found or if user has no logs. See errors below.</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "noLogsForUser",
            "description": "<p>This user is in the databse, but has no logs.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example-Response ",
          "content": "[\n  {\n    \"username\": \"j1\",\n    \"userId\": 1,\n    \"log_id\": 1,\n    \"waterBodyId\": 1,\n    \"fishName\": \"red salmon\",\n    \"fishCount\": 3,\n    \"baitType\": \"worms\",\n    \"timeSpent\": 4,\n    \"timeOfDay\": \"9:00 am\",\n    \"facilityName\": \"Cow Lake\",\n    \"latitude\": 47.135255996919575,\n    \"longitude\": -118.15495300359936\n  },\n  {\n    \"username\": \"j1\",\n    \"userId\": 1,\n    \"log_id\": 2,\n    \"waterBodyId\": 1,\n    \"fishName\": \"pink salmon\",\n    \"fishCount\": 1,\n    \"baitType\": \"plastic\",\n    \"timeSpent\": 2,\n    \"timeOfDay\": \"6:30 am\",\n    \"facilityName\": \"Cow Lake\",\n    \"latitude\": 47.135255996919575,\n    \"longitude\": -118.15495300359936\n  }\n]",
          "type": "json"
        },
        {
          "title": "No User Logs Found: ",
          "content": "HTTP 1.1 204 No Content\n {\n   \"message\": \"We couldn't find any logs for this user: 2.\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "userIdNotFound",
            "description": "<p>No user with that ID could be found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Error: ",
          "content": "HTTP 1.1 404 Not Found\n {\n   \"message\": \"UserId 212 can't be found.\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/logRoute/logRoute.js",
    "groupTitle": "User_Logs"
  },
  {
    "type": "get",
    "url": "/logRoute/user-logs",
    "title": "Get User Logs for Current User",
    "name": "getLogsByLoggedInUser",
    "group": "User_Logs",
    "description": "<p>Get User Logs for the Logged In User (e.g., &quot;My Logs&quot;)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userID",
            "description": "<p>ID is read automatically if user is logged in. No need to send anything else.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Request Body",
          "content": "n/a! The userID is read automatically. Just navigate to the /user-logs route!",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "logsArray",
            "description": "<p>Returns an array of objects, where each object is a user log. Returns an empty array if user has no logs.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example-Response ",
          "content": "[\n  {\n    \"username\": \"j1\",\n    \"userId\": 1,\n    \"log_id\": 1,\n    \"waterBodyId\": 1,\n    \"fishName\": \"red salmon\",\n    \"fishCount\": 3,\n    \"baitType\": \"worms\",\n    \"timeSpent\": 4,\n    \"timeOfDay\": \"9:00 am\",\n    \"facilityName\": \"Cow Lake\",\n    \"latitude\": 47.135255996919575,\n    \"longitude\": -118.15495300359936\n  },\n  {\n    \"username\": \"j1\",\n    \"userId\": 1,\n    \"log_id\": 2,\n    \"waterBodyId\": 1,\n    \"fishName\": \"pink salmon\",\n    \"fishCount\": 1,\n    \"baitType\": \"plastic\",\n    \"timeSpent\": 2,\n    \"timeOfDay\": \"6:30 am\",\n    \"facilityName\": \"Cow Lake\",\n    \"latitude\": 47.135255996919575,\n    \"longitude\": -118.15495300359936\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "noCredentials",
            "description": "<p>No credentials provided to see protected content.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example-Error: ",
          "content": "HTTP 1.1 401 Unauthorized\n {\n   \"message\": \"No credentials provided. Please login to view this content.\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/logRoute/logRoute.js",
    "groupTitle": "User_Logs"
  },
  {
    "type": "get",
    "url": "/logRoute/user-logs/waterBody/:id",
    "title": "Get User Logs by Water Body ID",
    "name": "getLogsByWaterBodyId",
    "group": "User_Logs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "logs",
            "description": "<p>User logs for the given water body ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful GET Response",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"username\": \"Leslie\",\n    \"userId\": 10,\n    \"log_id\": 17,\n    \"waterBodyId\": 1,\n    \"fishName\": \"red salmon\",\n    \"fishCount\": 2,\n    \"baitType\": \"worms\",\n    \"timeSpent\": 4,\n    \"timeOfDay\": \"9:00 am\",\n    \"facilityName\": \"Cow Lake\",\n    \"latitude\": 47.135255996919575,\n    \"longitude\": -118.15495300359936\n  },\n  {\n    \"username\": \"Bryan\",\n    \"userId\": 14,\n    \"log_id\": 24,\n    \"waterBodyId\": 1,\n    \"fishName\": \"pink salmon\",\n    \"fishCount\": 1,\n    \"baitType\": \"plastic\",\n    \"timeSpent\": 2,\n    \"timeOfDay\": \"6:30 am\",\n    \"facilityName\": \"Cow Lake\",\n    \"latitude\": 47.135255996919575,\n    \"longitude\": -118.15495300359936\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/logRoute/logRoute.js",
    "groupTitle": "User_Logs"
  },
  {
    "type": "get",
    "url": "/waterBodies/",
    "title": "Get All Water Bodies",
    "name": "getAllWaterBodies",
    "group": "Water_Bodies",
    "version": "0.0.0",
    "filename": "./routes/waterBodyRoute/waterBodyRoute.js",
    "groupTitle": "Water_Bodies"
  },
  {
    "type": "get",
    "url": "/waterBodies/byName/:facilityName",
    "title": "Get Water Body by Name",
    "name": "getWaterBodyByFacilityName",
    "group": "Water_Bodies",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "facilityName",
            "description": "<p>Water Body Name (e.g., &quot;Cow Lake&quot;)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Water Body ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "facilityName",
            "description": "<p>Water Body Name</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "latitude",
            "description": "<p>Latitude</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "longitude",
            "description": "<p>Longitude</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "directions",
            "description": "<p>Directions</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response Ex: ",
          "content": "HTTP/1.1 200 OK\n\n{\n  \"id\": 1,\n   \"facilityName\": \"Cow Lake\",\n   \"latitude\": 47.135255996919575,\n   \"longitude\": -118.15495300359936,\n   \"directions\": \"From Ritzville take Wellsandt Rd to east for 11.8 miles to Cow Lake Rd.  Right on Cow Lake Rd (south) for 1.6 miles.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "waterBodyNotFound",
            "description": "<p>Could not find a facility with that name: name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response Ex:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Could not find a facility with that name: Cow Lake2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/waterBodyRoute/waterBodyRoute.js",
    "groupTitle": "Water_Bodies"
  },
  {
    "type": "get",
    "url": "/waterBodies/:id",
    "title": "Get Water Body by ID",
    "name": "getWaterBodyById",
    "group": "Water_Bodies",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Water Body ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Water Body ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "facilityName",
            "description": "<p>Water Body Name</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "latitude",
            "description": "<p>Latitude</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "longitude",
            "description": "<p>Longitude</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "directions",
            "description": "<p>Directions</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response Ex: ",
          "content": "HTTP/1.1 200 OK\n\n{\n  \"id\": 1,\n   \"facilityName\": \"Cow Lake\",\n   \"latitude\": 47.135255996919575,\n   \"longitude\": -118.15495300359936,\n   \"directions\": \"From Ritzville take Wellsandt Rd to east for 11.8 miles to Cow Lake Rd.  Right on Cow Lake Rd (south) for 1.6 miles.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "waterBodyNotFound",
            "description": "<p>Could not find a facility with that id: id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Water Body Not Found",
          "content": "HTTP/1.1 404 Not Found\n{ \n  \"message\": \"Could not find a facility with that id: 1231\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/waterBodyRoute/waterBodyRoute.js",
    "groupTitle": "Water_Bodies"
  }
] });
