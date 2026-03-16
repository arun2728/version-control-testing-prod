const flowConfig = {
  "id": "beebd9de-1f12-4ac4-a98e-f4fe18dae2d7",
  "name": "MySQL Data Copy",
  "nodes": [
    {
      "id": "triggerNode_1",
      "data": {
        "modes": {},
        "nodeId": "mysqlNode",
        "values": {
          "id": "triggerNode_1",
          "table": "employees",
          "nodeName": "MySQL",
          "syncMode": "incremental",
          "credentials": "MySQL",
          "cursorField": "hire_date",
          "cronExpression": "0 0 00 1/1 * ? * UTC"
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
      "id": "plus-node-addNode_977966",
      "data": {
        "label": "+",
        "nodeId": "addNode",
        "values": {}
      },
      "type": "addNode",
      "measured": {
        "width": 216,
        "height": 100
      },
      "position": {
        "x": 0,
        "y": 260
      }
    },
    {
      "id": "apiNode_983",
      "data": {
        "label": "New",
        "logic": [],
        "modes": {},
        "nodeId": "apiNode",
        "values": {
          "id": "apiNode_983",
          "url": "https://webhook.site/ed57782c-d49f-4e6a-b751-b8d3a4defa8c",
          "body": "{{triggerNode_1.output}}",
          "method": "POST",
          "headers": "",
          "retries": "0",
          "nodeName": "API",
          "retry_deplay": "0",
          "convertXmlResponseToJson": false
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
      "selected": true
    }
  ],
  "edges": [
    {
      "id": "triggerNode_1-apiNode_983-697",
      "type": "defaultEdge",
      "source": "triggerNode_1",
      "target": "apiNode_983",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "apiNode_983-plus-node-addNode_977966-249",
      "type": "defaultEdge",
      "source": "apiNode_983",
      "target": "plus-node-addNode_977966",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    }
  ],
  "status": "active",
  "created_at": "2026-03-16T14:41:58.744032+00:00"
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