import React from 'react';

const LogoIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg
        className={className}
        viewBox="0 0 165 165"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M141.5 58.5C141.5 45 130 30 115 23.5C97.5 16 78 20.5 63.5 35.5C52.5 46.5 47 62.5 49.5 77.5C40 73 30.5 74.5 22.5 82C14.5 89.5 12.5 99.5 15.5 108C18.5 116.5 26.5 122.5 35 123.5C37.5 130 42.5 141 53 146.5C62.4 151.4 73.5 149.5 80.5 143.5L84.5 150.5C87.5 153.5 95.5 153.5 98.5 150L87 134.5L96 130.5L102.5 141.5L108 138.5L105.5 130L114.5 139.5L118 136.5L112.5 128.5L122.5 135L125.5 132L119 125L129.5 129.5L132 126.5L123.5 120C132.3 111.6 137.5 100 138 89C138.167 82.1667 137.5 70.1 141.5 58.5Z"
            fill="currentColor"
        />
        <path d="M78 68L87.5 60.5L93 68L84.5 75.5L78 68Z" className="fill-white dark:fill-space-black" />
    </svg>
);

const Logo: React.FC = () => (
    <div className="flex items-center space-x-3">
        <LogoIcon className="h-10 w-auto text-slate-900 dark:text-white" />
        <div className="flex flex-col justify-center">
            <span className="font-orbitron font-bold text-xl leading-tight tracking-[0.15em] text-slate-900 dark:text-white">OKAPI</span>
            <span style={{color: '#6366F1'}} className="font-bai font-semibold text-xs leading-tight tracking-[0.2em] -mt-1">CODE FORGE®</span>
        </div>
    </div>
);

export default Logo;