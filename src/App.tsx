import React from 'react';
import ReactFlow, { 
  Controls, 
  Background,
  MarkerType
} from 'react-flow-renderer';

function App() {
  const nodes = [
    {
      id: '1',
      type: 'input',
      data: { 
        label: 'User Query:\nShow overview of "Credit and Risk" schema\nwith sensitive data elements' 
      },
      position: { x: 250, y: 0 },
      style: { width: 300 }
    },
    {
      id: '2',
      data: { 
        label: 'System Response:\n- Data summary\n- Sensitive elements (GDPR)\n- Classification\n- Download report option' 
      },
      position: { x: 250, y: 100 },
      style: { width: 300 }
    },
    {
      id: '3',
      data: { 
        label: 'User Query:\nRegulations for UK to USA\ndata transfer' 
      },
      position: { x: 250, y: 200 },
      style: { width: 300 }
    },
    {
      id: '4',
      data: { 
        label: 'System Response:\n- Applicable regulations\n- Protection requirements\n- Suggestion for Informatica pipeline' 
      },
      position: { x: 250, y: 300 },
      style: { width: 300 }
    },
    {
      id: '5',
      data: { 
        label: 'User Response:\nYes to pipeline creation' 
      },
      position: { x: 250, y: 400 },
      style: { width: 300 }
    },
    {
      id: '6',
      data: { 
        label: 'System Action:\nGenerate Informatica pipeline\nwith masking policies' 
      },
      position: { x: 250, y: 500 },
      style: { width: 300 }
    },
    {
      id: '7',
      data: { 
        label: 'User Response:\nYes to operationalization' 
      },
      position: { x: 250, y: 600 },
      style: { width: 300 }
    },
    {
      id: '8',
      type: 'output',
      data: { 
        label: 'Final Action:\nProvide Informatica workflow link' 
      },
      position: { x: 250, y: 700 },
      style: { width: 300 }
    }
  ];

  const edges = [
    { id: 'e1-2', source: '1', target: '2', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e2-3', source: '2', target: '3', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e3-4', source: '3', target: '4', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e4-5', source: '4', target: '5', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e5-6', source: '5', target: '6', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e6-7', source: '6', target: '7', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e7-8', source: '7', target: '8', animated: true, markerEnd: { type: MarkerType.ArrowClosed } }
  ];

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow 
        nodes={nodes}
        edges={edges}
        fitView
        attributionPosition="bottom-right"
      >
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}

export default App;