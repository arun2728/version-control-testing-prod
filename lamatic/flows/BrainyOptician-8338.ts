const flowConfig = {
  "id": "69b5e37e-0e9f-4f8d-9329-cb31021f911d",
  "name": "Index",
  "nodes": [
    {
      "id": "triggerNode_1",
      "data": {
        "modes": {},
        "nodeId": "graphqlNode",
        "schema": {
          "sampleOutput": "string"
        },
        "values": {
          "nodeName": "API Request",
          "responeType": "realtime",
          "advance_schema": "{\"sampleInput\":\"string\"}"
        },
        "trigger": true
      },
      "type": "triggerNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "selected": false
    },
    {
      "id": "codeNode_224",
      "data": {
        "logic": [],
        "modes": {},
        "nodeId": "codeNode",
        "schema": {
          "texts": "array",
          "metadata": "array"
        },
        "values": {
          "id": "codeNode_224",
          "code": "// Assign the value you want to return from this code node to `output`. \n// The `output` variable is already declared.\n\nconst texts = [\n  \"hey I am Arun\",\n  \"I work at lamatic\",\n  \"My role is Founding engineer at lamatic\"\n];\n\noutput = {\n  texts,\n  metadata: texts.map((text) => ({\n    text: text,\n    file_id: \"123\"\n  }))\n};",
          "nodeName": "Code"
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 0,
        "y": 130
      },
      "selected": false,
      "draggable": false
    },
    {
      "id": "vectorizeNode_846",
      "data": {
        "logic": [],
        "modes": {},
        "nodeId": "vectorizeNode",
        "schema": {
          "_meta": "object",
          "vectors": "object"
        },
        "values": {
          "id": "vectorizeNode_846",
          "nodeName": "Vectorize",
          "inputText": "{{codeNode_224.output.texts}}",
          "embeddingModelName": {
            "type": "embedder/text",
            "params": {},
            "model_name": "text-embedding-ada-002",
            "credentialId": "c9828672-f799-4217-b954-fbc44ac44c85",
            "provider_name": "openai",
            "credential_name": "OpenAI Testing"
          }
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 0,
        "y": 260
      },
      "selected": false,
      "draggable": false
    },
    {
      "id": "vectorNode_534",
      "data": {
        "logic": [],
        "modes": {},
        "nodeId": "vectorNode",
        "schema": {
          "message": "string",
          "recordsIndexed": "string",
          "duplicateRecordsDeleted": "string"
        },
        "values": {
          "id": "vectorNode_534",
          "limit": 20,
          "action": "index",
          "filters": "",
          "nodeName": "VectorDB",
          "vectorDB": "TestingIndexing",
          "primaryKeys": [
            "file_id"
          ],
          "vectorsField": "{{vectorizeNode_846.output.vectors}}",
          "metadataField": "{{codeNode_224.output.metadata}}",
          "duplicateOperation": "overwrite"
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 0,
        "y": 390
      },
      "selected": false,
      "draggable": false
    },
    {
      "id": "searchNode_384",
      "data": {
        "label": "dynamicNode node",
        "logic": [],
        "modes": {},
        "nodeId": "searchNode",
        "values": {
          "id": "searchNode_384",
          "limit": "3",
          "filters": "[]",
          "nodeName": "Vector Search",
          "vectorDB": "TestingIndexing",
          "certainty": "0.85",
          "searchQuery": "what is lamatic",
          "embeddingModelName": {
            "type": "embedder/text",
            "params": {},
            "model_name": "text-embedding-ada-002",
            "credentialId": "3a46e042-9ced-4784-b392-fc240a0c58ec",
            "provider_name": "openai",
            "credential_name": "OpenAI"
          }
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 0,
        "y": 520
      },
      "selected": false
    },
    {
      "id": "responseNode_triggerNode_1",
      "data": {
        "label": "Response",
        "modes": {},
        "nodeId": "graphqlResponseNode",
        "schema": {},
        "values": {
          "id": "responseNode_triggerNode_1",
          "headers": "{\"content-type\":\"application/json\"}",
          "retries": "0",
          "nodeName": "API Response",
          "webhookUrl": "",
          "retry_delay": "0",
          "outputMapping": "{\n  \"data\": \"{{vectorNode_534.output}}\"\n}"
        },
        "isResponseNode": true
      },
      "type": "responseNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 0,
        "y": 650
      },
      "selected": false
    }
  ],
  "edges": [
    {
      "id": "triggerNode_1-codeNode_224",
      "type": "defaultEdge",
      "source": "triggerNode_1",
      "target": "codeNode_224",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "codeNode_224-vectorizeNode_846",
      "type": "defaultEdge",
      "source": "codeNode_224",
      "target": "vectorizeNode_846",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "vectorizeNode_846-vectorNode_534",
      "type": "defaultEdge",
      "source": "vectorizeNode_846",
      "target": "vectorNode_534",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "vectorNode_534-searchNode_384",
      "type": "defaultEdge",
      "source": "vectorNode_534",
      "target": "searchNode_384",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "searchNode_384-responseNode_triggerNode_1",
      "type": "defaultEdge",
      "source": "searchNode_384",
      "target": "responseNode_triggerNode_1",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "response-responseNode_triggerNode_1",
      "type": "responseEdge",
      "source": "triggerNode_1",
      "target": "responseNode_triggerNode_1",
      "sourceHandle": "to-response",
      "targetHandle": "from-trigger"
    }
  ],
  "status": "active",
  "created_at": "2026-02-02T06:07:10.280043+00:00"
};

export async function getNodesAndEdges(): Promise<{
    nodes: Record<string, any>[],
    edges: Record<string, any>[],
}> {
    return {
        nodes: flowConfig.nodes,
        edges: flowConfig.edges,
    }
}

export async function getFlowConfig(): Promise<Record<string, any>> {
    return flowConfig;
}