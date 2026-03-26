const flowConfig = {
  "id": "38d5fdf6-85ab-4cac-9307-04c12ef8bff1",
  "name": "End node with for loop",
  "nodes": [
    {
      "id": "forLoopNode_411",
      "data": {
        "modes": {},
        "nodeId": "forLoopNode",
        "schema": {
          "currentValue": "object",
          "intermediateOutput": "object",
          "previousIterationOutput": "object"
        },
        "values": {
          "id": "forLoopNode_411",
          "wait": 0,
          "endValue": "10",
          "nodeName": "Loop",
          "increment": "2",
          "connectedTo": "forLoopEndNode_317",
          "iterateOver": "range",
          "initialValue": "1",
          "iteratorValue": "[]"
        }
      },
      "type": "forLoopNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 225,
        "y": 130
      },
      "draggable": false
    },
    {
      "id": "conditionNode_488",
      "data": {
        "modes": {},
        "nodeId": "conditionNode",
        "schema": {
          "sampleOutput": "string"
        },
        "values": {
          "nodeName": "Condition",
          "conditions": [
            {
              "label": "Condition 1",
              "value": "conditionNode_488-addNode_651",
              "condition": "{\n  \"operator\": null,\n  \"operands\": [\n    {\n      \"name\": \"{{forLoopNode_411.output.currentValue}}\",\n      \"operator\": \">\",\n      \"value\": \"2\"\n    }\n  ]\n}"
            },
            {
              "label": "Else",
              "value": "conditionNode_488-addNode_697",
              "condition": {}
            }
          ],
          "allowMultipleConditionExecution": false
        }
      },
      "type": "conditionNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 225,
        "y": 260
      },
      "draggable": false
    },
    {
      "id": "endNode_322",
      "data": {
        "modes": {},
        "nodeId": "endNode",
        "schema": {},
        "values": {
          "nodeName": "End"
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
      "draggable": false
    },
    {
      "id": "codeNode_107",
      "data": {
        "logic": [],
        "modes": {},
        "nodeId": "codeNode",
        "schema": {},
        "values": {
          "id": "codeNode_107",
          "code": "// Assign the value you want to return from this code node to `output`. \n// The `output` variable is already declared.\n\noutput = {\n  data: \"if\"\n}",
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
        "y": 520
      },
      "draggable": false
    },
    {
      "id": "codeNode_503",
      "data": {
        "logic": [],
        "modes": {},
        "nodeId": "codeNode",
        "schema": {},
        "values": {
          "id": "codeNode_503",
          "code": "// Assign the value you want to return from this code node to `output`. \n// The `output` variable is already declared.\n\noutput = {\n  data: \"else\"\n}",
          "nodeName": "Else"
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 450,
        "y": 520
      },
      "draggable": false
    },
    {
      "id": "plus-node-addNode_607986",
      "data": {
        "modes": {},
        "nodeId": "addNode",
        "values": {}
      },
      "type": "addNode",
      "measured": {
        "width": 216,
        "height": 100
      },
      "position": {
        "x": 225,
        "y": 650
      },
      "draggable": false
    },
    {
      "id": "forLoopEndNode_317",
      "data": {
        "modes": {},
        "nodeId": "forLoopEndNode",
        "schema": {
          "loopOutput": "object"
        },
        "values": {
          "nodeName": "Loop End",
          "connectedTo": "forLoopNode_411"
        }
      },
      "type": "forLoopEndNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 225,
        "y": 780
      },
      "draggable": false
    },
    {
      "id": "codeNode_453",
      "data": {
        "logic": [],
        "modes": {},
        "nodeId": "codeNode",
        "schema": {},
        "values": {
          "id": "codeNode_453",
          "code": "// Assign the value you want to return from this code node to `output`. \n// The `output` variable is already declared.\n\n\noutput = {\n  data: \"adasdasdas\"\n}",
          "nodeName": "Code Final"
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 225,
        "y": 910
      },
      "draggable": false
    },
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
        "x": 225,
        "y": 0
      }
    },
    {
      "id": "responseNode_triggerNode_1",
      "data": {
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
          "outputMapping": "{\n  \"dagta\": \"{{forLoopEndNode_317.output.loopOutput}}\",\n  \"asdsad\": \"{{codeNode_453.output}}\"\n}"
        }
      },
      "type": "responseNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 225,
        "y": 1040
      }
    }
  ],
  "edges": [
    {
      "id": "triggerNode_1-forLoopNode_411",
      "type": "defaultEdge",
      "source": "triggerNode_1",
      "target": "forLoopNode_411",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "forLoopNode_411-conditionNode_488",
      "data": {
        "condition": "Loop Start",
        "invisible": true
      },
      "type": "conditionEdge",
      "source": "forLoopNode_411",
      "target": "conditionNode_488",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "conditionNode_488-endNode_322",
      "data": {
        "condition": "Condition 1"
      },
      "type": "conditionEdge",
      "source": "conditionNode_488",
      "target": "endNode_322",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "conditionNode_488-codeNode_503",
      "data": {
        "condition": "Else"
      },
      "type": "conditionEdge",
      "source": "conditionNode_488",
      "target": "codeNode_503",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "endNode_322-codeNode_107",
      "type": "defaultEdge",
      "source": "endNode_322",
      "target": "codeNode_107",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "codeNode_107-plus-node-addNode_607986",
      "type": "defaultEdge",
      "source": "codeNode_107",
      "target": "plus-node-addNode_607986",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "codeNode_503-plus-node-addNode_607986",
      "type": "defaultEdge",
      "source": "codeNode_503",
      "target": "plus-node-addNode_607986",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "plus-node-addNode_607986-forLoopEndNode_317",
      "type": "defaultEdge",
      "source": "plus-node-addNode_607986",
      "target": "forLoopEndNode_317",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "forLoopEndNode_317-codeNode_453",
      "type": "defaultEdge",
      "source": "forLoopEndNode_317",
      "target": "codeNode_453",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "codeNode_453-responseNode_triggerNode_1",
      "type": "defaultEdge",
      "source": "codeNode_453",
      "target": "responseNode_triggerNode_1",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "forLoopNode_411-forLoopEndNode_317",
      "data": {
        "condition": "Loop",
        "invisible": false
      },
      "type": "loopEdge",
      "source": "forLoopNode_411",
      "target": "forLoopEndNode_317",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "forLoopEndNode_317-forLoopNode_411",
      "data": {
        "condition": "Loop",
        "invisible": true
      },
      "type": "loopEdge",
      "source": "forLoopEndNode_317",
      "target": "forLoopNode_411",
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
  "created_at": "2026-03-26T13:27:11.458348+00:00"
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