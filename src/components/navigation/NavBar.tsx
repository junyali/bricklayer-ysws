import { NavItem } from './NavItem';

export function NavBar() {
	return (
		<nav className="flex gap-3 items-start justify-end">
			<NavItem
				to="https://github.com/junyali/bricklayer-ysws"
				image="/brick_2x2_gh_down.png"
				icon="fa-brands fa-github"
				alt="GitHub"
				external={true}
			/>
			<NavItem
				to="/guide"
				image="/brick_2x2_red_down.png"
				icon="fa-solid fa-book"
				alt="Guide"
				external={false}
			/>
			<NavItem
				to="/canvas"
				image="/brick_2x2_colour_down.png"
				icon="fa-solid fa-brush"
				alt="Canvas"
				external={false}
			/>
		</nav>
	);
}