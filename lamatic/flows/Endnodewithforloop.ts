const flowConfig = {
  "id": "38d5fdf6-85ab-4cac-9307-04c12ef8bff1",
  "name": "End node with for loop",
  "nodes": [
    {
      "id": "triggerNode_1",
      "data": {},
      "type": "triggerNode",
      "position": {
        "x": 0,
        "y": 0
      }
    }
  ],
  "edges": [],
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