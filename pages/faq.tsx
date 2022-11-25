import { Collapse } from 'antd';
import React from 'react';

const { Panel } = Collapse;

const Faq = () => {
	return (
		<>
			<h2>Dúvidas frequentes</h2>

			<Collapse>
				<Panel header="This is panel header 1" key="1">
					<p>
						A dog is a type of domesticated animal. Known for its loyalty and
						faithfulness, it can be found as a welcome guest in many households
						across the world.
					</p>
				</Panel>
				<Panel header="This is panel header 2" key="2">
					<p>
						A dog is a type of domesticated animal. Known for its loyalty and
						faithfulness, it can be found as a welcome guest in many households
						across the world.
					</p>
				</Panel>
				<Panel header="This is panel header 3" key="3">
					<p>
						A dog is a type of domesticated animal. Known for its loyalty and
						faithfulness, it can be found as a welcome guest in many households
						across the world.
					</p>
				</Panel>
			</Collapse>
		</>
	);
};

export default Faq;
