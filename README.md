# Project_Traker-API

API Endpoints
List of available routes on: https://project-management-tracker-api.onrender.com

Auth routes:
POST /user - register (params in body - username, password)
POST /signin- login  (params in body - username, password)

Project routes:
GET -  /api/product- get all projects (token)
POST - /api/product - (token, body -name)
DELETE - /api/product/:projId - (token)
UPDATE - /api/product/:projId - (token, body -name)

Updates route
GET - /api/update - get all updates (token)
GET - /api/update/:updateId get specific update (token)
POST - api/update - post an update to project (token, body(title,body, productId))
UPDATE - api/update/:updateId - update an update of project (token, body(title))
DELETE - api/update/:updateId - delete the update
