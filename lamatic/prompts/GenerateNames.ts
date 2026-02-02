const promptConfig = {
  "id": "61e1bbdf-ac93-4468-b3f1-012c9715b8ce",
  "name": "Generate Names",
  "config": {
    "values": {
      "tools": [],
      "prompts": [
        {
          "id": "187c2f4b-c23d-4545-abef-73dc897d6b7b",
          "role": "system",
          "content": "You are an AI Assistant"
        },
        {
          "id": "187c2f4b-c23d-4545-abef-73dc897d6b7d",
          "role": "user",
          "content": "Write your prompt here"
        }
      ],
      "memories": "[]",
      "messages": "[]",
      "nodeName": "Generate Names",
      "attachments": "",
      "credentials": "",
      "generativeModelName": [
        {
          "type": "generator/text",
          "params": {},
          "configName": "configA",
          "provider_name": "",
          "credential_name": ""
        }
      ]
    }
  },
  "type": "LLMNode",
  "status": "inactive",
  "created_at": "2026-02-02T06:21:41.983305+00:00"
};

export async function getPromptConfig(): Promise<Record<string, any>> {
    return promptConfig;
}