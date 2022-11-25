import styled from 'styled-components';

const Container = styled.div<{
	padding?: string;
	margin?: string;
	direction?: 'row' | 'column';
	align?: 'center' | 'flex-start' | 'flex-end';
	justify?:
		| 'center'
		| 'flex-start'
		| 'flex-end'
		| 'space-between'
		| 'space-around'
		| 'space-evenly';
	gap?: string;
	width?: string;
}>`
	display: flex;
	flex-direction: ${(props) => (props.direction === 'row' ? 'row' : 'column')};
	align-items: ${(props) => props.align || 'center'};
	justify-content: ${(props) => props.justify || 'center'};
	gap: ${(props) => (props.gap ? props.gap : '0')};

	width: ${(props) => props.width || '100%'};

	${(props) => props.padding && `padding: ${props.padding};`}
	${(props) => props.margin && `margin: ${props.margin};`};
`;

export default Container;
