import React from "react";
import {
	Sparkle,
	User,
	ShoppingCart,
	Star,
	Gem,
	Crown,
	Heart,
	Gift,
	Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
	{ name: "All Products", to: "/products" },
	{ name: "Serum", to: "/serum" },
	{ name: "Sunscreen", to: "/sunscreen" },
	{ name: "Bundle", to: "/bundle" },
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
							<Link
								to={item.to}
								className="relative px-2 py-1 transition-all duration-300 rounded-lg hover:bg-gradient-to-r hover:from-pink-100/80 hover:to-fuchsia-100/80 hover:text-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-300 dark:hover:bg-pink-900/40 dark:hover:text-pink-300 shadow-md premium-shadow group"
							>
								<span className="inline-flex items-center gap-1">
									{item.name}
									{item.name === "All Products" && (
										<Crown className="inline w-4 h-4 text-yellow-400 ml-1 animate-pulse" />
									)}
								</span>
								<span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-pink-400 to-fuchsia-400 rounded transition-all duration-300 group-hover:w-full"></span>
							</Link>
						</li>
					))}
				</ul>
				<div className="flex items-center gap-3">
					<Link
						to="/like"
						className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-100 to-fuchsia-100 text-pink-500 hover:bg-pink-200 hover:text-pink-700 transition-all duration-200 w-11 h-11 shadow-md premium-shadow"
						title="Like"
					>
						<Heart className="w-6 h-6" />
					</Link>
					<Link
						to="/cart"
						className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-100 to-fuchsia-100 text-pink-500 hover:bg-pink-200 hover:text-pink-700 transition-all duration-200 w-11 h-11 shadow-md premium-shadow"
						title="Cart"
					>
						<ShoppingCart className="w-6 h-6" />
					</Link>
					<Link
						to="/profile"
						className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-100 to-fuchsia-100 text-pink-500 hover:bg-pink-200 hover:text-pink-700 transition-all duration-200 w-11 h-11 shadow-md premium-shadow"
						title="Profile"
					>
						<User className="w-6 h-6" />
					</Link>
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
