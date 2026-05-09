import { Link } from "@tanstack/react-router";

export interface ButtonProps {
	label: string;
	type?: "primary" | "secondary" | "tertiary";
	size?: "small" | "medium" | "large" | "xlarge";
	startIcon?: React.ReactNode;
	endIcon?: React.ReactNode;
	isDisabled?: boolean;
	isLoading?: boolean;
	fullWidth?: boolean;
	rounded?: boolean;
	onClick?: () => void;
	to?: string;
	className?: string;
	target?: "_blank" | "_self" | "_parent" | "_top";
	ariaLabel?: string;
}

const typeClasses = {
	primary:
		"h-auto bg-(--brand-primary)   font-semibold text-white hover:bg-(--brand-secondary) transition-all duration-300 ease-in-out justify-center items-center gap-1 inline-flex",
	secondary:
		"h-auto bg-white   text-white font-semibold border-2 border-(--brand-primary) hover:bg-(--brand-primary) hover:border-white justify-center items-center gap-1 inline-flex",
	tertiary:
		"h-auto bg-white  font-semibold hover:bg-(--brand-primary) justify-center items-center gap-1 inline-flex",
};

const sizeClasses = {
	small: "min-h-10 px-2 py-2 text-sm",
	medium: "min-h-[50px] px-3 py-3 text-md",
	large: "px-6 py-3 text-lg",
	xlarge: "px-8 py-6 text-xl",
};

const isExternal = (url?: string) => url && /^https?:\/\//.test(url);

const Button: React.FC<ButtonProps> = ({
	label,
	type = "primary",
	size = "medium",
	rounded = false,
	startIcon,
	endIcon,
	isDisabled = false,
	isLoading = false,
	fullWidth = false,
	onClick,
	to,
	className = "",
	target,
	ariaLabel,
}) => {
	const getClassNames = () => {
		// `Link` is an `<a>`; global anchor rules in styles.css beat layered Tailwind unless we use ! utilities.
		const asLink = Boolean(to);
		const linkAnchorReset = asLink
			? [
					"!no-underline",
					type === "primary" && "!text-white hover:!text-white",
					type === "secondary" && "!text-(--brand-primary) hover:!text-white",
					type === "tertiary" &&
						"!text-(--brand-text-primary) hover:!text-white",
				].filter(Boolean)
			: [];

		const classes = [
			"inline-flex items-center justify-center",
			rounded ? "rounded-full" : "rounded-xl",
			fullWidth ? "w-full" : "",
			typeClasses[type],
			sizeClasses[size],
			isDisabled ? "opacity-50 cursor-not-allowed" : "",
			isLoading ? "cursor-wait" : "",
			"font-sans",
			...linkAnchorReset,
			className,
		];

		return classes.filter(Boolean).join(" ");
	};

	const renderContent = () => (
		<>
			{startIcon && (
				<span className="mr-2" aria-hidden="true">
					{startIcon}
				</span>
			)}
			{isLoading ? <span>Loading...</span> : <span>{label}</span>}
			{endIcon && (
				<span className="ml-2" aria-hidden="true">
					{endIcon}
				</span>
			)}
		</>
	);

	const commonProps = {
		className: getClassNames(),
		onClick,
		"aria-disabled": isDisabled || isLoading,
		"aria-label": ariaLabel || label,
		"aria-busy": isLoading,
	};

	if (to && isExternal(to)) {
		return (
			<a
				href={to}
				target={target || "_blank"}
				rel="noopener noreferrer"
				{...commonProps}
			>
				{renderContent()}
			</a>
		);
	}

	if (to) {
		return (
			<Link
				to={to}
				{...commonProps}
				// Avoid default active link className ("active") merging into button styles.
				activeProps={{}}
				inactiveProps={{}}
			>
				{renderContent()}
			</Link>
		);
	}

	return (
		<button type="button" disabled={isDisabled || isLoading} {...commonProps}>
			{renderContent()}
		</button>
	);
};

export default Button;
