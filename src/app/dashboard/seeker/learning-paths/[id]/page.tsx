'use client'
import SkeletonLoader from '@/components/common/skeleton/JobSkeletonLoader';
import learningPath from '@/services/learning-path';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
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



const Roadmap: React.FC = () => {
   
    const { id } = useParams<{ id: string }>();

    const { data, isLoading, error } = useQuery({
        queryKey: ['jobDetails', id],
        queryFn: () => learningPath.one(id),
        refetchOnWindowFocus: false,
    });

    console.log({roadmap:data?.data})

    if (isLoading) {
        return <SkeletonLoader count={1} />;
    }
    return (
        <div style={{ width: '100%', height: '100vh' }}>
            
        </div>
    );
};

export default Roadmap;
