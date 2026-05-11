import { useRef, useEffect, useState, useMemo, useCallback } from 'react';
import ForceGraph2D, { ForceGraphMethods } from 'react-force-graph-2d';

// Data types for the graph
interface Node {
    id: string;
    name: string;
    val: number;
    color: string;
    category: string;
}

interface Link {
    source: string;
    target: string;
}

interface GraphData {
    nodes: Node[];
    links: Link[];
}

type ActiveSection = 'programming' | 'ai' | 'tools';

export const SkillsNodeGraph = ({
    activeSection,
    hoveredSkillName,
}: {
    activeSection: ActiveSection;
    hoveredSkillName?: string | null;
}) => {
    const fgRef = useRef<ForceGraphMethods>();
    const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
    const containerRef = useRef<HTMLDivElement>(null);

    const activeCategory = useMemo(() => {
        if (activeSection === 'programming') return 'Programming';
        if (activeSection === 'ai') return 'AI';
        return 'Tools';
    }, [activeSection]);

    // Auto-resize graph to fit container
    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                setDimensions({
                    width: containerRef.current.clientWidth,
                    height: Math.min(600, window.innerHeight * 0.6)
                });
            }
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    // Generate Graph Data
    const graphData: GraphData = useMemo(() => {
        const nodes: Node[] = [];
        const links: Link[] = [];

        // Colors mapping
        const CATEGORY_COLORS = {
            Core: '#3b82f6', // blue-500
            Programming: '#10b981', // emerald-500
            AI: '#8b5cf6', // violet-500
            Tools: '#f59e0b', // amber-500
            Concept: '#ec4899', // pink-500
        };

        // Central Node
        nodes.push({ id: 'Rakib', name: 'Rakib Uddin', val: 30, color: CATEGORY_COLORS.Core, category: 'Core' });

        // --- Category Hubs ---
        const hubs = [
            { id: 'Programming', val: 15, color: CATEGORY_COLORS.Programming },
            { id: 'AI / ML', val: 18, color: CATEGORY_COLORS.AI },
            { id: 'Tools & DevOps', val: 12, color: CATEGORY_COLORS.Tools },
        ];
        hubs.forEach(h => {
            nodes.push({ ...h, name: h.id, category: h.id.split(' ')[0] });
            links.push({ source: 'Rakib', target: h.id });
        });

        // --- Programming Skills ---
        const progSkills = [
            { name: 'Python', val: 12 }, { name: 'JavaScript', val: 10 },
            { name: 'TypeScript', val: 9 }, { name: 'C++', val: 10 },
            { name: 'React', val: 10 }, { name: 'Next.js', val: 8 },
            { name: 'Node.js', val: 9 }, { name: 'SQL', val: 8 }
        ];
        progSkills.forEach(skill => {
            const id = skill.name;
            nodes.push({ id, name: id, val: skill.val, color: CATEGORY_COLORS.Programming, category: 'Programming' });
            links.push({ source: 'Programming', target: id });
        });

        // --- AI / ML Skills ---
        const aiSkills = [
            { name: 'Deep Learning', val: 12 }, { name: 'Machine Learning', val: 14 },
            { name: 'Computer Vision', val: 10 }, { name: 'NLP', val: 10 },
            { name: 'LLMs', val: 9 }, { name: 'Reinforcement Learning', val: 8 },
            { name: 'TensorFlow', val: 10 }, { name: 'PyTorch', val: 10 }
        ];
        aiSkills.forEach(skill => {
            const id = skill.name;
            nodes.push({ id, name: id, val: skill.val, color: CATEGORY_COLORS.AI, category: 'AI' });
            links.push({ source: 'AI / ML', target: id });
        });

        // --- Tools & DevOps Skills ---
        const toolSkills = [
            { name: 'Docker', val: 9 }, { name: 'Git', val: 8 },
            { name: 'AWS', val: 8 }, { name: 'MLflow', val: 7 },
            { name: 'Langchain', val: 9 }, { name: 'Pandas', val: 8 }
        ];
        toolSkills.forEach(skill => {
            const id = skill.name;
            nodes.push({ id, name: id, val: skill.val, color: CATEGORY_COLORS.Tools, category: 'Tools' });
            links.push({ source: 'Tools & DevOps', target: id });
        });

        // --- Inter-connections (The cool part) ---
        const crossLinks = [
            { source: 'Python', target: 'Machine Learning' },
            { source: 'Python', target: 'Deep Learning' },
            { source: 'Python', target: 'Pandas' },
            { source: 'JavaScript', target: 'React' },
            { source: 'TypeScript', target: 'React' },
            { source: 'React', target: 'Next.js' },
            { source: 'Deep Learning', target: 'TensorFlow' },
            { source: 'Deep Learning', target: 'PyTorch' },
            { source: 'Machine Learning', target: 'MLflow' },
            { source: 'NLP', target: 'LLMs' },
            { source: 'LLMs', target: 'Langchain' },
            { source: 'Docker', target: 'AWS' },
        ];

        // Convert crossLinks to string IDs
        crossLinks.forEach(link => {
            links.push(link);
        });

        return { nodes, links };
    }, []);

    // Make the graph spin slightly
    useEffect(() => {
        let animationFrameId: number;
        // let angle = 0;

        // Optional: Auto-rotation for 3D graphs, for 2D we usually let the force layout handle it.
        // We'll just rely on the physics engine. We can zoom to fit once it settles.
        if (fgRef.current) {
            // fgRef.current.d3Force('charge')?.strength(-150);
            // Option to disable zoom if needed, but react-force-graph handles it by default usually without explicit .zoomable(true) in the ref methods
            // fgRef.current.zoomable(true);
        }

        // Auto-fit after a slight delay for initial layout simulation
        const timeout = setTimeout(() => {
            if (fgRef.current) {
                fgRef.current.zoomToFit(400, 50);
            }
        }, 1500);

        return () => {
            clearTimeout(timeout);
            if (animationFrameId !== undefined) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);

    // Node drawing functionality
    const paintNode = useCallback((node: Node & { x: number, y: number }, ctx: CanvasRenderingContext2D, globalScale: number) => {
        const isCore = node.category === 'Core';
        const isActive = node.category === activeCategory;
        const isHovered = hoveredSkillName ? node.name === hoveredSkillName : false;

        const dimmed = !isCore && !isActive && !isHovered;
        const alpha = isHovered ? 1 : (dimmed ? 0.18 : 0.92);

        const label = node.name;
        const fontSize = Math.max(12 / globalScale, 4);
        const r = Math.sqrt(Math.max(0, node.val || 1)) * 3;

        ctx.save();
        ctx.globalAlpha = alpha;

        // Draw circle
        ctx.beginPath();
        ctx.arc(node.x, node.y, r, 0, 2 * Math.PI, false);
        ctx.fillStyle = node.color;
        ctx.fill();

        // Add glow effect
        ctx.shadowColor = node.color;
        ctx.shadowBlur = isHovered ? 16 : (isActive || isCore ? 10 : 6);
        ctx.fill();
        ctx.shadowBlur = 0; // reset

        // Draw text
        ctx.font = `${fontSize}px Inter, Sans-Serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';

        // Add a slight dark background pill for text visibility if needed, or just text
        ctx.fillText(label, node.x, node.y + r + fontSize);

        if (isHovered) {
            // Outer ring to make the hovered skill instantly visible
            ctx.lineWidth = Math.max(2 / globalScale, 1);
            ctx.strokeStyle = 'rgba(255,255,255,0.95)';
            ctx.beginPath();
            ctx.arc(node.x, node.y, r + (2 / globalScale), 0, 2 * Math.PI, false);
            ctx.stroke();
        }

        ctx.restore();
    }, [activeCategory, hoveredSkillName]);

    return (
        <div
            ref={containerRef}
            className="w-full rounded-xl overflow-hidden border border-primary/20 bg-background/50 backdrop-blur-sm relative"
            style={{ minHeight: '500px' }}
        >
            <div className="absolute top-4 left-4 z-10 pointer-events-none">
                <h3 className="text-xl font-bold text-foreground">Knowledge Network</h3>
                <p className="text-sm text-muted-foreground">Interactive map of my skills. Drag nodes to explore connections.</p>

                <div className="mt-3 flex flex-wrap gap-2">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-gray-200">
                        <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
                        <span>Active: {activeCategory}</span>
                    </div>
                    {hoveredSkillName && (
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-gray-200">
                            <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.7)]" />
                            <span>Hover: {hoveredSkillName}</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Legend */}
            <div className="absolute top-4 right-4 z-10 p-3 rounded-lg bg-black/40 backdrop-blur border border-white/10 text-xs hidden sm:block pointer-events-none">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div><span className="text-gray-200">Programming</span></div>
                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.8)]"></div><span className="text-gray-200">AI / ML</span></div>
                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]"></div><span className="text-gray-200">Tools</span></div>
                </div>
            </div>

            <ForceGraph2D
                ref={fgRef}
                width={dimensions.width}
                height={dimensions.height}
                graphData={graphData}
                nodeLabel="name"
                nodeColor="color"
                nodeRelSize={6}
                linkColor={() => 'rgba(255, 255, 255, 0.2)'}
                linkWidth={1.5}
                nodeCanvasObject={paintNode}
                nodePointerAreaPaint={(node: Node & { x: number, y: number }, color, ctx) => {
                    // Invisible area for hover/click detection
                    ctx.save();
                    ctx.globalAlpha = 1;
                    ctx.fillStyle = color;
                    const r = Math.sqrt(Math.max(0, node.val || 1)) * 3;
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, r, 0, 2 * Math.PI, false);
                    ctx.fill();
                    ctx.restore();
                }}
                d3VelocityDecay={0.1}
                cooldownTicks={100}
                onEngineStop={() => {
                    if (fgRef.current) {
                        fgRef.current.zoomToFit(400, 50);
                    }
                }}
            // backgroundColor="transparent" // causes issues with react-force-graph typing sometimes, handle via css wrapper
            />
        </div>
    );
};
