import React from 'react';
import PropTypes from 'prop-types';
import {
	Modal as CModal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Divider,
	Button,
	Center,
} from '@chakra-ui/react';

const SizeEnum = {
	XS: 'xs',
	SM: 'sm',
	MD: 'md',
	LG: 'lg',
	XL: 'xl',
	FULL: 'full',
};
const propTypes = {
	hasMask: PropTypes.bool,
	hasCloseButton: PropTypes.bool,
	isOpen: PropTypes.bool,
	isCloseOnOverlayClick: PropTypes.bool,
	isCentered: PropTypes.bool,
	size: PropTypes.oneOf(Object.values(SizeEnum).concat('')),
	onSubmit: PropTypes.func,
	onClose: PropTypes.func,
	onOverlayClick: PropTypes.func,
	headerTitle: PropTypes.string,
	onRenderHeader: PropTypes.func,
	children: PropTypes.node,
	onRenderFooter: PropTypes.func,
	styled: PropTypes.object,
};
const defaultProps = {
	hasMask: true,
	hasCloseButton: true,
	isCloseOnOverlayClick: true,
	isCentered: true,
	headerTitle: 'Title',
	onSubmit: () => {},
	onClose: () => {},
};

function Modal({
	hasMask,
	hasCloseButton,
	isOpen,
	isCloseOnOverlayClick,
	isCentered,
	size,
	onSubmit,
	onClose,
	onOverlayClick,
	headerTitle,
	onRenderHeader,
	children,
	onRenderFooter,
	styled,
}) {
	function _renderOverlay() {
		return <ModalOverlay />;
	}

	function _renderHeader() {
		return (
			<ModalHeader>
				{onRenderHeader ? onRenderHeader() : headerTitle}
			</ModalHeader>
		);
	}

	function _renderCloseButton() {
		return <ModalCloseButton />;
	}

	function _renderFooter() {
		return (
			<ModalFooter>
				{onRenderFooter ? onRenderFooter() :
					<Center w="full">
						<Button colorScheme="blue" mr={3} onClick={onSubmit}>Submit</Button>
						<Button variant="ghost" onClick={onClose}>Cancel</Button>
					</Center>
				}
			</ModalFooter>
		);
	}

	return (
		<CModal
			isOpen={isOpen}
			size={size}
			closeOnOverlayClick={isCloseOnOverlayClick}
			isCentered={isCentered}
			onClose={onClose}
			onOverlayClick={onOverlayClick}
			{...styled}
		>
			{hasMask && _renderOverlay()}
			<ModalContent sx={{
				padding: '5px',
			}}>
				{_renderHeader()}
				{hasCloseButton && _renderCloseButton()}
				<Divider/>
				<ModalBody>
					{children}
				</ModalBody>
				{_renderFooter()}
			</ModalContent>
		</CModal>
	);
}

Modal.SizeEnum = SizeEnum;
Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
