const flowConfig = {
  "id": "85b6afdd-2b55-46e4-8603-5d73d4cae1a2",
  "name": "Batch",
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
      "id": "apiNode_807",
      "data": {
        "label": "New",
        "logic": [],
        "modes": {},
        "nodeId": "apiNode",
        "values": {
          "id": "apiNode_807",
          "url": "https://webhook.site/e7fe24c7-a575-440e-94b2-f000a5a6e7da",
          "body": "{{batchNode_692.output}}",
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
        "y": 260
      },
      "selected": false
    },
    {
      "id": "batchEndNode_757",
      "data": {
        "label": "batchEndNode node",
        "modes": {},
        "nodeId": "batchEndNode",
        "values": {
          "nodeName": "Batch End",
          "connectedTo": "batchNode_692"
        }
      },
      "type": "batchEndNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 0,
        "y": 390
      }
    },
    {
      "id": "batchNode_692",
      "data": {
        "label": "batchNode node",
        "modes": {},
        "nodeId": "batchNode",
        "values": {
          "id": "batchNode_692",
          "endValue": 10,
          "nodeName": "Batch",
          "increment": 1,
          "connectedTo": "batchEndNode_757",
          "iterateOver": "range",
          "initialValue": "1",
          "iteratorValue": "[]",
          "concurrencyLimit": "2"
        }
      },
      "type": "batchNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 0,
        "y": 130
      },
      "selected": true
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
          "outputMapping": "{\n  \"data\": \"{{batchEndNode_757.output.batchOutput}}\"\n}"
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
    },
    {
      "id": "plus-node-addNode_236641",
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
        "y": 520
      }
    }
  ],
  "edges": [
    {
      "id": "triggerNode_1-batchNode_692-777",
      "type": "defaultEdge",
      "source": "triggerNode_1",
      "target": "batchNode_692",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "batchEndNode_757-plus-node-addNode_236641-385",
      "type": "defaultEdge",
      "source": "batchEndNode_757",
      "target": "plus-node-addNode_236641",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "plus-node-addNode_236641-responseNode_triggerNode_1-665",
      "type": "defaultEdge",
      "source": "plus-node-addNode_236641",
      "target": "responseNode_triggerNode_1",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "batchNode_692-apiNode_807-914",
      "data": {
        "condition": "Batch Start",
        "invisible": true
      },
      "type": "conditionEdge",
      "source": "batchNode_692",
      "target": "apiNode_807",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "apiNode_807-batchEndNode_757-710",
      "type": "defaultEdge",
      "source": "apiNode_807",
      "target": "batchEndNode_757",
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
    },
    {
      "id": "batchNode_692-batchEndNode_757-693",
      "data": {
        "condition": "Batch"
      },
      "type": "loopEdge",
      "source": "batchNode_692",
      "target": "batchEndNode_757",
      "selected": false,
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "batchEndNode_757-batchNode_692-406",
      "data": {
        "condition": "Batch",
        "invisible": true
      },
      "type": "loopEdge",
      "source": "batchEndNode_757",
      "target": "batchNode_692",
      "sourceHandle": "bottom",
      "targetHandle": "top"
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