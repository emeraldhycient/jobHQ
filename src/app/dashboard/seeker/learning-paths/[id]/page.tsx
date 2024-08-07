'use client'
import React, { useState, useCallback } from 'react';
import ReactFlow, {
    Background,
    Controls,
    MiniMap,
    addEdge,
    applyEdgeChanges,
    applyNodeChanges,
    Edge,
    NodeChange,
    Connection,
    ReactFlowInstance,
    Node,
    EdgeChange,
} from 'reactflow';
import 'reactflow/dist/style.css';

type NodeType = Node<{
    label: string;
}>;

type EdgeType = Edge<{
    animated?: boolean;
}>;

const initialNodes: NodeType[] = [
    { id: '1', position: { x: 250, y: 0 }, data: { label: 'Software Engineering' }, type: 'default' },
    { id: '2', position: { x: 100, y: 100 }, data: { label: 'Basic Programming and Problem-Solving' }, type: 'default' },
    { id: '3', position: { x: 400, y: 100 }, data: { label: 'Debugging and Unit Testing Skills' }, type: 'default' },
    { id: '4', position: { x: 100, y: 200 }, data: { label: 'Learning a Core Programming Language' }, type: 'default' },
    { id: '5', position: { x: 400, y: 200 }, data: { label: 'Basics of Multithreaded and Concurrent Programming' }, type: 'default' },
    { id: '6', position: { x: 250, y: 300 }, data: { label: 'Software Development Life Cycle' }, type: 'default' },
    { id: '7', position: { x: 50, y: 400 }, data: { label: 'Understanding Various SDLC Models' }, type: 'default' },
    { id: '8', position: { x: 450, y: 400 }, data: { label: 'Role of a Software Engineer in SDLC' }, type: 'default' },
    { id: '9', position: { x: 250, y: 500 }, data: { label: 'Understanding and Using Databases' }, type: 'default' },
    { id: '10', position: { x: 50, y: 600 }, data: { label: 'Working with SQL Database' }, type: 'default' },
    { id: '11', position: { x: 450, y: 600 }, data: { label: 'Working with NoSQL Database' }, type: 'default' },
    { id: '12', position: { x: 250, y: 700 }, data: { label: 'Networking and Computer Systems' }, type: 'default' },
    { id: '13', position: { x: 50, y: 800 }, data: { label: 'Fundamentals of Computer Networks' }, type: 'default' },
    { id: '14', position: { x: 450, y: 800 }, data: { label: 'Protocols of Network Programming' }, type: 'default' },
    { id: '15', position: { x: 250, y: 900 }, data: { label: 'Cybersecurity Principles' }, type: 'default' },
    { id: '16', position: { x: 50, y: 1000 }, data: { label: 'Basics of Information Security' }, type: 'default' },
    { id: '17', position: { x: 450, y: 1000 }, data: { label: 'Web Application Security' }, type: 'default' },
    { id: '18', position: { x: 250, y: 1100 }, data: { label: 'Web Development' }, type: 'default' },
    { id: '19', position: { x: 50, y: 1200 }, data: { label: 'Front-end Development' }, type: 'default' },
    { id: '20', position: { x: 450, y: 1200 }, data: { label: 'Back-end Development' }, type: 'default' },
];

const initialEdges: EdgeType[] = [
    { id: 'e1-2', source: '1', target: '2', animated: true },
    { id: 'e1-3', source: '1', target: '3', animated: true },
    { id: 'e2-4', source: '2', target: '4', animated: true },
    { id: 'e3-5', source: '3', target: '5', animated: true },
    { id: 'e2-6', source: '2', target: '6', animated: true },
    { id: 'e3-6', source: '3', target: '6', animated: true },
    { id: 'e6-7', source: '6', target: '7', animated: true },
    { id: 'e6-8', source: '6', target: '8', animated: true },
    { id: 'e6-9', source: '6', target: '9', animated: true },
    { id: 'e9-10', source: '9', target: '10', animated: true },
    { id: 'e9-11', source: '9', target: '11', animated: true },
    { id: 'e9-12', source: '9', target: '12', animated: true },
    { id: 'e12-13', source: '12', target: '13', animated: true },
    { id: 'e12-14', source: '12', target: '14', animated: true },
    { id: 'e12-15', source: '12', target: '15', animated: true },
    { id: 'e15-16', source: '15', target: '16', animated: true },
    { id: 'e15-17', source: '15', target: '17', animated: true },
    { id: 'e15-18', source: '15', target: '18', animated: true },
    { id: 'e18-19', source: '18', target: '19', animated: true },
    { id: 'e18-20', source: '18', target: '20', animated: true },
];

const Roadmap: React.FC = () => {
    const [nodes, setNodes] = useState<NodeType[]>(initialNodes);
    const [edges, setEdges] = useState<EdgeType[]>(initialEdges);

    const onNodesChange = useCallback(
        (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
        []
    );

    const onEdgesChange = useCallback(
        (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        []
    );

    const onConnect = useCallback(
        (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
        []
    );

    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                fitView
                style={{ background: '#282c34' }}
            >
                <Controls />
                {/* <MiniMap /> */}
                {/* <Background variant="dots" gap={12} size={1} /> */}
            </ReactFlow>
        </div>
    );
};

export default Roadmap;
