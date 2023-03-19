# Project_Traker-API

API Endpoints <br />
List of available routes on: https://project-management-tracker-api.onrender.com <br />

Auth routes: <br />
POST /user - register (params in body - username, password)<br />
POST /signin- login  (params in body - username, password)<br />

Project routes:<br />
GET -  /api/product- get all projects (token)<br />
POST - /api/product - (token, body -name)<br />
DELETE - /api/product/:projId - (token)<br />
UPDATE - /api/product/:projId - (token, body -name)<br />

Updates route<br />
GET - /api/update - get all updates (token)<br />
GET - /api/update/:updateId get specific update (token)<br />
POST - api/update - post an update to project (token, body(title,body, productId))<br />
UPDATE - api/update/:updateId - update an update of project (token, body(title))<br />
DELETE - api/update/:updateId - delete the update<br />
