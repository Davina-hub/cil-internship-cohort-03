{
    "openapi" : "3.0.1",
    "info" : {
      "title" : "Cil_Amarachi_API",
      "version" : "2022-07-13 22:00:08UTC"
    },
    "servers" : [ {
      "url" : "https://d741bgync0.execute-api.us-east-1.amazonaws.com/{basePath}",
      "variables" : {
        "basePath" : {
          "default" : ""
        }
      }
    } ],
    "paths" : {
      "/Cil_Amarachi_Get" : {
        "get" : {
          "responses" : {
            "default" : {
              "description" : "Default response for GET /Cil_Amarachi_Get"
            }
          },
          "x-amazon-apigateway-integration" : {
            "payloadFormatVersion" : "2.0",
            "type" : "aws_proxy",
            "httpMethod" : "POST",
            "uri" : "arn:aws:apigateway:us-east-1:lambda:path/2015-03-31/functions/arn:aws:lambda:us-east-1:736357471058:function:Cil_Amarachi_Lambda/invocations",
            "connectionType" : "INTERNET"
          }
        }
      },
      "/Cil_Amarachi_Head" : {
        "head" : {
          "responses" : {
            "default" : {
              "description" : "Default response for HEAD /Cil_Amarachi_Head"
            }
          },
          "x-amazon-apigateway-integration" : {
            "payloadFormatVersion" : "2.0",
            "type" : "aws_proxy",
            "httpMethod" : "POST",
            "uri" : "arn:aws:apigateway:us-east-1:lambda:path/2015-03-31/functions/arn:aws:lambda:us-east-1:736357471058:function:Cil_Amarachi_Lambda/invocations",
            "connectionType" : "INTERNET"
          }
        }
      },
      "/Cil_Amarachi_Post" : {
        "post" : {
          "responses" : {
            "default" : {
              "description" : "Default response for POST /Cil_Amarachi_Post"
            }
          },
          "x-amazon-apigateway-integration" : {
            "payloadFormatVersion" : "2.0",
            "type" : "aws_proxy",
            "httpMethod" : "POST",
            "uri" : "arn:aws:apigateway:us-east-1:lambda:path/2015-03-31/functions/arn:aws:lambda:us-east-1:736357471058:function:Cil_Amarachi_Lambda/invocations",
            "connectionType" : "INTERNET"
          }
        }
      }
    },
    "x-amazon-apigateway-importexport-version" : "1.0"
  }