const flowConfig = {
  "id": "1325db37-d329-451a-a190-e1117c2e9b15",
  "name": "3 - Training Data",
  "nodes": [
    {
      "id": "sticky-note-945",
      "data": {
        "width": 536,
        "height": 523,
        "nodeId": "stickyNoteNode",
        "values": {
          "text": "# **▶️Try it out**\n\n---\n\n1. Setup Google Drive Integration  \n   1. Connect your Google Drive  \n   2. Select Folder  \n   3. Setup Schedule / Filters ( Optional )\n2. Configure Code node ( Optional )  \n_You can write custom Javascript to modify data or perform some additional functionality._\n3. Vectorizing Data  \n_You can manipulate data with data nodes like transforming text to vectors_  \n👉🏻 Setup your Embedding Model\n4. Index data to VectorDB  \n👉🏻 Create a new vectorDB and set it for context\n5. Run flow by clicking  \n# ▶️ **Test 👇🏻**\n6. Find Setup instructions to connect flow with your backend.\n\n# **〈〉 Setup 👆🏻**",
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
        "width": 536,
        "height": 523
      },
      "position": {
        "x": 270.415302500764,
        "y": -11.399492082726994
      },
      "selected": false,
      "draggable": true
    },
    {
      "id": "sticky-note-164",
      "data": {
        "width": 544,
        "height": 473,
        "nodeId": "stickyNoteNode",
        "values": {
          "text": "# 🔌 App Integrations\n\n---\n\nApps and Data Sources are the foundational connectors that enable Lamatic Studio to interact with external systems, services, and data repositories. These integrations serve as the data ingestion layer for your AI workflows, allowing you to seamlessly connect to various platforms, databases, and cloud services to feed data into your agentic flows and RAG applications.\n\nLamatic.ai provides a comprehensive suite of pre-built integrations that simplify the process of connecting to popular data sources, enabling you to focus on building intelligent applications rather than managing complex data pipelines.\n\nYou can use app integration as -\n\n1. **Data Loader** \\- Schedule Sync content from Data Integration and push it through the flow. _e.g. fetching files from Google Drive/Sheets_\n2. **Triggers** \\- To initiate a flow based on a certain event. _e.g. when a new email is received / a new record is added._\n3. **Action** \\- Within the flow to perform action externally. eg. Send an email, add data.\n\n---\n\n📖Read Docs - [Integrations](https://lamatic.ai/integrations/apps-data-sources)",
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
        "width": 544,
        "height": 473
      },
      "position": {
        "x": -593.8977823665647,
        "y": -90.4524777962981
      },
      "selected": false,
      "draggable": true
    },
    {
      "id": "sticky-note-600",
      "data": {
        "width": 548,
        "height": 330,
        "nodeId": "stickyNoteNode",
        "values": {
          "text": "# **🗄️ Built in VectorDB**\n\n---\n\nLamatic comes with a built in VectorDB \\[ powered by Weaviate\\] so that you don't to deploy maintain your own infra. This allows to setup custom context within our serverless infra for use with models and various application like RAG, Vector Search and Recommendation Systems.\n\nWith built in VectorDB you can -\n\n1. Add realtime data to your context\n2. Create Memories for personalize conversations\n3. Search using Vector / Keyword / Hybrid Mode\n4. Find Records using Filters\n\n---\n\n📖Read Docs - [VectorDB](https://lamatic.ai/docs/context/vectordb)",
          "color": "green",
          "nodeId": "stickyNoteNode",
          "nodeName": "Sticky Note",
          "nodeType": "stickyNoteNode"
        }
      },
      "type": "stickyNoteNode",
      "zIndex": -10,
      "dragging": false,
      "measured": {
        "width": 548,
        "height": 330
      },
      "position": {
        "x": -594.2276076646461,
        "y": 392.83011862352464
      },
      "selected": false,
      "draggable": true
    },
    {
      "id": "triggerNode_1",
      "data": {
        "modes": {
          "folderUrl": "list"
        },
        "nodeId": "googleDriveNode",
        "values": {
          "id": "triggerNode_1",
          "nodeName": "Google Drive",
          "syncMode": "incremental_append",
          "folderUrl": "https://drive.google.com/drive/folders/1vUrqW5Q1VDd5tN9acm-dQYjrn7F_j59Z",
          "credentials": "Google Drive OAuth",
          "cronExpression": "0 0 00 ? * 1 * UTC"
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
      "id": "plus-node-addNode_466114",
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
      "id": "codeNode_486",
      "data": {
        "label": "New",
        "logic": [],
        "modes": {},
        "nodeId": "codeNode",
        "values": {
          "id": "codeNode_486",
          "code": "output = {{triggerNode_1.output}}",
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
      "selected": true
    }
  ],
  "edges": [
    {
      "id": "triggerNode_1-codeNode_486-626",
      "type": "defaultEdge",
      "source": "triggerNode_1",
      "target": "codeNode_486",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "codeNode_486-plus-node-addNode_466114-190",
      "type": "defaultEdge",
      "source": "codeNode_486",
      "target": "plus-node-addNode_466114",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    }
  ],
  "status": "active",
  "created_at": "2026-02-05T07:23:19.590267+00:00"
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