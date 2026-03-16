const flowConfig = {
  "id": "85b6afdd-2b55-46e4-8603-5d73d4cae1a2",
  "name": "SQL",
  "nodes": [
    {
      "id": "triggerNode_1",
      "data": {
        "modes": {},
        "nodeId": "graphqlNode",
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
      "id": "mysqlNode_749",
      "data": {
        "label": "dynamicNode node",
        "logic": [],
        "modes": {},
        "nodeId": "mysqlNode",
        "values": {
          "id": "mysqlNode_749",
          "query": "select * from employees",
          "action": "runQuery",
          "nodeName": "MySQL",
          "credentials": "MySQL"
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
      "selected": false
    },
    {
      "id": "responseNode_triggerNode_1",
      "data": {
        "label": "Response",
        "nodeId": "graphqlResponseNode",
        "values": {
          "id": "responseNode_triggerNode_1",
          "headers": "{\"content-type\":\"application/json\"}",
          "retries": "0",
          "nodeName": "API Response",
          "webhookUrl": "",
          "retry_delay": "0",
          "outputMapping": "{\n  \"data\": \"{{mysqlNode_749.output}}\"\n}"
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
        "y": 260
      },
      "selected": true
    }
  ],
  "edges": [
    {
      "id": "triggerNode_1-mysqlNode_749",
      "type": "defaultEdge",
      "source": "triggerNode_1",
      "target": "mysqlNode_749",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "mysqlNode_749-responseNode_triggerNode_1",
      "type": "defaultEdge",
      "source": "mysqlNode_749",
      "target": "responseNode_triggerNode_1",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "response-trigger_triggerNode_1",
      "type": "responseEdge",
      "source": "triggerNode_1",
      "target": "responseNode_triggerNode_1",
      "sourceHandle": "to-response",
      "targetHandle": "from-trigger"
    }
  ],
  "status": "active",
  "created_at": "2026-03-12T15:23:50.235814+00:00"
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