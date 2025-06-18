import React from "react";
import {
	Sparkle,
	User,
	ShoppingCart,
	Star,
	Gem,
	Crown,
	HeartHandshake,
	ShieldCheck,
	Gift,
	Zap,
} from "lucide-react";

const navItems = [
	{ name: "All Products", href: "#" },
	{ name: "Serum", href: "#serum" },
	{ name: "Sunscreen", href: "#sunscreen" },
	{ name: "Bundle", href: "#bundle" },
];

export const Navbar: React.FC = () => {
	return (
		<nav className="w-full bg-white text-foreground border-b border-border premium-shadow sticky top-0 z-50 transition-colors duration-300">
			<div className="container mx-auto flex items-center justify-between py-4 px-6">
				<div className="flex items-center gap-3">
					<span className="inline-flex items-center gap-2 text-2xl font-extrabold tracking-tight text-primary drop-shadow-xl">
						<Sparkle className="w-7 h-7 text-pink-500 animate-bounce" />
						Skincare
						<Gem className="w-5 h-5 text-yellow-400 animate-spin-slow" />
					</span>
				</div>
				<ul className="hidden md:flex gap-8 text-base font-semibold text-muted-foreground">
					{navItems.map((item) => (
						<li key={item.name}>
							<a
								href={item.href}
								className="relative px-2 py-1 transition-all duration-300 rounded-lg hover:bg-gradient-to-r hover:from-pink-100/80 hover:to-fuchsia-100/80 hover:text-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-300 dark:hover:bg-pink-900/40 dark:hover:text-pink-300 shadow-md premium-shadow group"
							>
								<span className="inline-flex items-center gap-1">
									{item.name}
									{item.name === "All Products" && (
										<Crown className="inline w-4 h-4 text-yellow-400 ml-1 animate-pulse" />
									)}
								</span>
								<span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-pink-400 to-fuchsia-400 rounded transition-all duration-300 group-hover:w-full"></span>
							</a>
						</li>
					))}
				</ul>
				<div className="flex items-center gap-3">
					<button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white px-5 py-2 font-bold shadow-md hover:from-pink-600 hover:to-fuchsia-600 transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-pink-300 dark:from-pink-700 dark:to-fuchsia-700 premium-shadow animate-in fade-in slide-in-from-top-4">
						<User className="w-5 h-5" /> Sign In
						<Star className="w-4 h-4 text-yellow-300 animate-pulse" />
					</button>
					<button className="inline-flex items-center gap-2 rounded-lg border-2 border-pink-500 text-pink-600 px-5 py-2 font-bold bg-white hover:bg-pink-50 hover:text-pink-700 transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-pink-300 dark:bg-gray-900 dark:text-pink-300 dark:border-pink-300 dark:hover:bg-gray-800 glass-effect premium-shadow animate-in fade-in slide-in-from-top-4 delay-100">
						<ShoppingCart className="w-5 h-5" /> Sign Up
						<Gift className="w-4 h-4 text-fuchsia-400 animate-bounce" />
					</button>
					<button className="p-2 rounded-lg bg-gradient-to-br from-[#43cea2] to-[#185a9d] text-white shadow-lg hover:scale-110 active:scale-95 transition-transform duration-200 glass-effect premium-shadow animate-in fade-in slide-in-from-top-4 delay-200">
						<HeartHandshake className="w-6 h-6 animate-bounce" />
					</button>
					<button className="p-2 rounded-lg bg-gradient-to-br from-[#f5d020] to-[#f53803] text-white shadow-lg hover:scale-110 active:scale-95 transition-transform duration-200 glass-effect premium-shadow animate-in fade-in slide-in-from-top-4 delay-300">
						<ShieldCheck className="w-6 h-6 animate-pulse" />
					</button>
					<button className="p-2 rounded-lg bg-gradient-to-br from-[#fc575e] to-[#f7b42c] text-white shadow-lg hover:scale-110 active:scale-95 transition-transform duration-200 glass-effect premium-shadow animate-in fade-in slide-in-from-top-4 delay-400">
						<Zap className="w-6 h-6 animate-spin-slow" />
					</button>
				</div>
				<button className="md:hidden p-2 rounded-lg hover:bg-pink-100 dark:hover:bg-pink-900 focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all duration-200 glass-effect premium-shadow">
					<svg
						className="w-7 h-7 text-pink-500"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>
		</nav>
	);
};
