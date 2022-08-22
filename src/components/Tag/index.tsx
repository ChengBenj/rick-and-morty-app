import Ping from '../Ping';

type TagProps = {
	label: string;
	color?: string;
	pulse?: boolean;
};

const Tag = ({ label, color = 'green', pulse = false }: TagProps) => {
	return (
		<div
			className={`flex flex-row items-center gap-1 text-Alive-600 border rounded-full w-fit px-2 text-sm border-${color}-600 bg-${color}-300`}
		>
			{pulse && (
				<div className='relative'>
					<Ping color={color} />
				</div>
			)}
			{label}
		</div>
	);
};

export default Tag;
