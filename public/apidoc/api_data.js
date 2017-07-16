define({ "api": [
  {
    "type": "get",
    "url": "/",
    "title": "API Status",
    "group": "Status",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Mensagm de status da APi</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": " \t\tHTTp/1.1 200 OK\n\t\t{\"status\": \"Ntask API\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Status",
    "name": "Get"
  }
] });
