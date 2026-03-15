const flowConfig = {
  "id": "cc895063-2407-46c7-b6c7-7987dd6bc887",
  "name": "S3 Flow",
  "nodes": [
    {
      "id": "triggerNode_1",
      "data": {
        "modes": {},
        "nodeId": "s3Node",
        "values": {
          "id": "triggerNode_1",
          "globs": [
            "**"
          ],
          "bucket": "airbyte-test-qw12-2",
          "nodeName": "S3",
          "strategy": "auto",
          "syncMode": "incremental",
          "start_date": "",
          "credentials": "S3 - Airbyte New",
          "cronExpression": "0 0 00 ? * 1 * UTC",
          "days_to_sync_if_history_is_full": "3"
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
      "selected": true
    },
    {
      "id": "plus-node-addNode_triggerNode_1340",
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
        "y": 130
      },
      "selected": false
    }
  ],
  "edges": [
    {
      "id": "triggerNode_1-plus-node-addNode_triggerNode_1340",
      "type": "defaultEdge",
      "source": "triggerNode_1",
      "target": "plus-node-addNode_triggerNode_1340",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    }
  ],
  "status": "active",
  "created_at": "2026-03-15T01:29:18.707368+00:00"
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