import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Overlay from '../Overlay';

type ModalProps = {
	open: boolean;
};

const Modal = ({ open, children }: React.PropsWithChildren<ModalProps>) => {
	const navigation = useNavigate();

	const handleClick = () => {
		navigation(-1);
	};

	return (
		<>
			<motion.div
				animate={{
					opacity: open ? 1 : 0,
				}}
			>
				{open && <Overlay onClick={handleClick} />}
			</motion.div>
			<motion.div
				className='fixed inset-1/4 top-32 min-w-[500px] rounded-2xl bg-white overflow-x-hidden overflow-y-auto'
				animate={{
					y: open ? 0 : 800,
				}}
			>
				{children}
			</motion.div>
		</>
	);
};

export default Modal;
