type OverlayProps = {
	onClick?: () => void;
};

const Overlay = ({ onClick }: OverlayProps) => {
	return (
		<div
			className='fixed inset-0 w-full h-full bg-black opacity-30 z-20'
			onClick={onClick}
		/>
	);
};

export default Overlay;
