import React, { useState, useEffect, useRef } from 'react';
import { X, Terminal as TerminalIcon } from 'lucide-react';
import { useTerminal } from './TerminalContext';

interface CommandOutput {
    id: string;
    command: string;
    output: React.ReactNode;
}

const TerminalOverlay: React.FC = () => {
    const { isTerminalOpen, closeTerminal } = useTerminal();
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<CommandOutput[]>([]);
    const bottomRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isTerminalOpen) {
            document.body.style.overflow = 'hidden';
            // Auto focus after a short delay to allow transition
            setTimeout(() => inputRef.current?.focus(), 100);

            // Welcome message
            if (history.length === 0) {
                setHistory([
                    {
                        id: 'welcome',
                        command: '',
                        output: (
                            <div className="mb-4">
                                <div className="text-primary font-bold">Welcome to AI-Portfolio Terminal v1.0.0</div>
                                <div className="text-muted-foreground mt-1">Type 'help' to see a list of available commands.</div>
                            </div>
                        ),
                    },
                ]);
            }
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isTerminalOpen, history.length]);

    useEffect(() => {
        // Scroll to bottom whenever history changes
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isTerminalOpen) {
                closeTerminal();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isTerminalOpen, closeTerminal]);

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        let output: React.ReactNode = null;
        const cmd = input.trim().toLowerCase();

        switch (cmd) {
            case 'help':
                output = (
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li><span className="font-bold text-primary">about</span> - Brief description of who I am.</li>
                        <li><span className="font-bold text-primary">skills</span> - Overview of my technical skills.</li>
                        <li><span className="font-bold text-primary">projects</span> - View my top projects.</li>
                        <li><span className="font-bold text-primary">contact</span> - Find ways to reach me.</li>
                        <li><span className="font-bold text-primary">ls</span> - List major website sections.</li>
                        <li><span className="font-bold text-primary">cat [section]</span> - Display section details.</li>
                        <li><span className="font-bold text-primary">clear</span> - Clear the terminal window.</li>
                        <li><span className="font-bold text-primary">exit</span> - Close the terminal.</li>
                    </ul>
                );
                break;
            case 'about':
                output = "Hi, I'm Rakib Uddin, an AI & ML Engineer. I have a passion for blending software engineering with artificial intelligence to create unique digital experiences.";
                break;
            case 'skills':
                output = "Python, TensorFlow, PyTorch, React, TypeScript, Next.js, Node.js, C++...";
                break;
            case 'projects':
                output = "1. AI Chess Engine\n2. Real-time Object Detection\n3. This Portfolio (obviously!)";
                break;
            case 'contact':
                output = "Email: rakibuddinraki2003@gmail.com\nGitHub: github.com/MDrakib-uddin\nLinkedIn: linkedin.com/in/rakib-uddin-4050381b4/";
                break;
            case 'ls':
                output = (
                    <div className="flex space-x-4 text-blue-400">
                        <span>about.txt</span>
                        <span>skills.json</span>
                        <span>projects.md</span>
                        <span>contact.cfg</span>
                    </div>
                );
                break;
            case 'cat about.txt':
                output = "Hi, I'm Rakib Uddin, an AI & ML Engineer. I have a passion for blending software engineering with artificial intelligence to create unique digital experiences.";
                break;
            case 'cat skills.json':
                output = "{\n  \"languages\": [\"Python\", \"JavaScript\", \"TypeScript\", \"C++\"],\n  \"frameworks\": [\"React\", \"Next.js\", \"TensorFlow\", \"PyTorch\"]\n}";
                break;
            case 'cat projects.md':
                output = "# Projects\n- AI Chess Engine\n- Real-time Object Detection\n- AI-Portfolio";
                break;
            case 'cat contact.cfg':
                output = "email=rakibuddinraki2003@gmail.com\ngithub=MDrakib-uddin";
                break;
            case 'sudo':
                output = <span className="text-red-500 font-bold">Nice try! You do not have root privileges on this portfolio.</span>;
                break;
            case 'clear':
                setHistory([]);
                setInput('');
                return;
            case 'exit':
                closeTerminal();
                setInput('');
                return;
            default:
                if (cmd.startsWith('cat ')) {
                    output = `cat: ${cmd.substring(4)}: No such file or directory`;
                } else {
                    output = `Command not found: ${input}. Type 'help' for a list of commands.`;
                }
        }

        setHistory((prev) => [
            ...prev,
            {
                id: Date.now().toString(),
                command: input,
                output: output,
            },
        ]);
        setInput('');
    };

    if (!isTerminalOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8"
            onClick={closeTerminal}
        >
            <div
                className="relative w-full max-w-4xl h-[80vh] bg-black/95 border border-primary/30 rounded-lg shadow-[0_0_30px_rgba(var(--primary),0.2)] flex flex-col overflow-hidden font-mono text-sm sm:text-base text-green-400"
                onClick={(e) => e.stopPropagation()} // Prevent clicks inside terminal from closing it
            >
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-2 bg-zinc-900 border-b border-primary/30 select-none">
                    <div className="flex items-center space-x-2">
                        <TerminalIcon className="w-4 h-4 text-primary" />
                        <span className="text-zinc-400 text-xs">AI-Portfolio Terminal</span>
                    </div>
                    <button
                        onClick={closeTerminal}
                        className="p-1 hover:bg-zinc-800 rounded-md transition-colors text-zinc-400 hover:text-white"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>

                {/* Terminal Body */}
                <div
                    className="flex-1 overflow-y-auto p-4 sm:p-6"
                    onClick={() => inputRef.current?.focus()}
                >
                    {history.map((item) => (
                        <div key={item.id} className="mb-4">
                            {item.command && (
                                <div className="flex items-center">
                                    <span className="text-primary mr-2">guest@ai-portfolio:~$</span>
                                    <span>{item.command}</span>
                                </div>
                            )}
                            {item.output && (
                                <div className="mt-1 text-gray-300 whitespace-pre-wrap">
                                    {item.output}
                                </div>
                            )}
                        </div>
                    ))}

                    {/* Input Line */}
                    <form onSubmit={handleCommand} className="flex items-center">
                        <span className="text-primary mr-2">guest@ai-portfolio:~$</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="flex-1 bg-transparent border-none outline-none text-green-400 w-full"
                            autoComplete="off"
                            spellCheck="false"
                            autoFocus
                        />
                    </form>
                    <div ref={bottomRef} />
                </div>
            </div>
        </div>
    );
};

export default TerminalOverlay;
