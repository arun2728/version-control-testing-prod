const flowConfig = {
  "id": "69b5e37e-0e9f-4f8d-9329-cb31021f911d",
  "name": "2 - API Basics",
  "nodes": [
    {
      "id": "sticky-note-424",
      "data": {
        "width": 520,
        "height": 429,
        "nodeId": "stickyNoteNode",
        "values": {
          "text": "# **🍱 Lamatic SDK**\n\n---\n\nIntegrate your app to a flow that uses API trigger via **Lamatic SDK**. It provides a simple way to interact with the Lamatic AI platform, allowing you to execute flow and integrate AI capabilities into your applications.\n\n---\n\n**Setup in 3 easy steps:**\n\n1. Install  \n_npm install_ **_lamatic_**\n2. Import  \n_import { lamatic } from \"_ **_lamatic_**_\";_\n3. Integrate  \nconst res = await new **Lamatic**(  \n{apiKey:\"**_your-api-key_**\",  \nprojectId:\"**_your-project-id_**\",  \nendpoint:\"**_your-endpoint_**\"}).executeFlow(\"**_your-flow-id_**\",  \n**{_prompt:\"hey, how are you?\"}_**_);_\n\n---\n\n📖Read Docs - [SDK](https://lamatic.ai/docs/sdk)",
          "color": "blue",
          "nodeId": "stickyNoteNode",
          "nodeName": "Sticky Note",
          "nodeType": "stickyNoteNode"
        }
      },
      "type": "stickyNoteNode",
      "zIndex": -10,
      "dragging": false,
      "measured": {
        "width": 520,
        "height": 429
      },
      "position": {
        "x": -594.764608793465,
        "y": -192.4785440215834
      },
      "selected": false,
      "draggable": true
    },
    {
      "id": "sticky-note-554",
      "data": {
        "width": 306,
        "height": 270,
        "nodeId": "stickyNoteNode",
        "values": {
          "text": "# **⚛️ GraphQL API Request**\n\n---\n\nThe **GraphQL API** enables both synchronous and asynchronous API requests. It uses a configurable schema for input and output responses letting you integrate in type-safe manner.This will always give you consistence, structured response.\n\n---\n\n📖Read Docs - [GraphQL](https://lamatic.ai/docs/interface/graphql)",
          "color": "purple",
          "nodeId": "stickyNoteNode",
          "nodeName": "Sticky Note",
          "nodeType": "stickyNoteNode"
        }
      },
      "type": "stickyNoteNode",
      "zIndex": -10,
      "dragging": false,
      "measured": {
        "width": 306,
        "height": 270
      },
      "position": {
        "x": -16.59170741352483,
        "y": -236.65246967113865
      },
      "selected": false,
      "draggable": true
    },
    {
      "id": "sticky-note-899",
      "data": {
        "width": 482,
        "height": 483,
        "nodeId": "stickyNoteNode",
        "values": {
          "text": "# **▶️Try it out**\n\n---\n\n1. Configure API Request Trigger  \n**👉🏻 Modify the Schema to pass additional input data.**\n2. Configure JSON Generate Node  \n_The Generate JSON Node is a specialized AI component that generates structured JSON data based on user input and predefined schemas. This node is particularly useful for applications requiring consistent data structures, API integrations, and automated data formatting._  \n**👉🏻 Modify the prompt and model to fine tune response**\n3. Return the generated response back to the client  \n**👉🏻 Modify the Schema to pass additional output parameters.**\n4. Run flow by clicking  \n▶️ **Test 👇🏻**\n5. Find Setup instructions to connect flow with your application. You can get the API keys from Settings.  \n**〈〉 Setup 👆🏻**",
          "color": "yellow",
          "nodeId": "stickyNoteNode",
          "nodeName": "Sticky Note",
          "nodeType": "stickyNoteNode"
        }
      },
      "type": "stickyNoteNode",
      "zIndex": -10,
      "dragging": false,
      "measured": {
        "width": 482,
        "height": 483
      },
      "position": {
        "x": 321.66390049677454,
        "y": -44.74250184043521
      },
      "selected": false,
      "draggable": true
    },
    {
      "id": "triggerNode_1",
      "data": {
        "modes": {},
        "nodeId": "graphqlNode",
        "values": {
          "nodeName": "API Request",
          "responeType": "realtime",
          "advance_schema": "{\n  \"destination\": \"string\",\n  \"start_date\": \"string\",\n  \"end_date\": \"string\",\n  \"budget_usd\": \"string\",\n  \"interests\": \"[string]\"\n}"
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
      },
      "selected": false
    },
    {
      "id": "branchNode_579",
      "data": {
        "label": "Branch",
        "modes": [],
        "nodeId": "branchNode",
        "values": {
          "branches": [
            {
              "label": "Branch 1",
              "value": "branchNode_579-addNode_133"
            },
            {
              "label": "Branch 2",
              "value": "branchNode_579-addNode_977"
            }
          ],
          "nodeName": "Branching"
        }
      },
      "type": "branchNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 225,
        "y": 130
      }
    },
    {
      "id": "codeNode_855",
      "data": {
        "label": "New",
        "logic": [],
        "modes": {},
        "nodeId": "codeNode",
        "values": {
          "id": "codeNode_855",
          "code": "output = {\n  data: \"123231\"\n}",
          "nodeName": "Code 2"
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 450,
        "y": 260
      },
      "selected": false
    },
    {
      "id": "codeNode_722",
      "data": {
        "label": "New",
        "logic": [],
        "modes": {},
        "nodeId": "codeNode",
        "values": {
          "id": "codeNode_722",
          "code": "output = {\n  data: \"asdasd\"\n}",
          "nodeName": "Code 1"
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
          "outputMapping": "{\n  \"data\": \"hello\"\n}"
        },
        "isResponseNode": true
      },
      "type": "responseNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 225,
        "y": 390
      },
      "selected": false
    }
  ],
  "edges": [
    {
      "id": "triggerNode_1-branchNode_579",
      "type": "defaultEdge",
      "source": "triggerNode_1",
      "target": "branchNode_579",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "branchNode_579-codeNode_722-200",
      "data": {
        "condition": "Branch 1",
        "branchName": "Branch 1"
      },
      "type": "branchEdge",
      "source": "branchNode_579",
      "target": "codeNode_722",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "codeNode_722-responseNode_triggerNode_1-145",
      "type": "defaultEdge",
      "source": "codeNode_722",
      "target": "responseNode_triggerNode_1",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "branchNode_579-codeNode_855-919",
      "data": {
        "condition": "Branch 2",
        "branchName": "Branch 2"
      },
      "type": "branchEdge",
      "source": "branchNode_579",
      "target": "codeNode_855",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "codeNode_855-responseNode_triggerNode_1-151",
      "type": "defaultEdge",
      "source": "codeNode_855",
      "target": "responseNode_triggerNode_1",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "response-trigger_triggerNode_1",
      "type": "responseEdge",
      "source": "triggerNode_1",
      "target": "responseNode_triggerNode_1",
      "selected": false,
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