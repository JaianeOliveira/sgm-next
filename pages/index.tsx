import { Steps, Timeline } from 'antd';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import Container from '../components/common/Container';
import MainLayout from '../layout/main';
import { ExternalHomeContainer } from '../styles/_home';

export default function Home() {
	return (
		<MainLayout>
			<ExternalHomeContainer>
				<div>
					<h2>Andamento do processo seletivo</h2>
					<Container margin="2rem 0 0 0">
						<Steps current={1} progressDot>
							<Steps.Step
								title="Publicação dos editais"
								description="13/04 até 28/04"
							/>
							<Steps.Step title="Inscrições" />
							<Steps.Step title="Análise dos documentos" />
							<Steps.Step title="Recurso" />
							<Steps.Step title="Resultado das inscrições" />
							<Steps.Step title="Provas e entrevistas" />
							<Steps.Step title="Resultado" />
						</Steps>
					</Container>
					<Container
						margin="3rem 0"
						align="flex-start"
						justify="flex-start"
						gap="1rem"
					>
						<h2>Sobre a monitoria</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
							ultrices eget enim, sed quis eget. Faucibus accumsan velit rhoncus
							enim ipsum mi ligula ac. Eget sapien iaculis sit egestas
							phasellus. Sed at porttitor volutpat massa ante nulla proin
							turpis. Neque quisque at ut nam nulla faucibus euismod. Massa,
							risus volutpat quisque nec nisi ultrices. Dui ante massa, commodo
							volutpat nulla odio. Sit maecenas pellentesque convallis cursus ac
							aliquam suspendisse sagittis. Cursus id lacinia sem egestas lectus
							nisl blandit id. Felis aliquam facilisis sapien duis aliquam ipsum
							nibh est sit. Convallis maecenas aliquam accumsan elementum
							convallis velit enim. Ac hendrerit et fusce id magna integer in.
						</p>
						<p>
							Mauris at amet vitae commodo diam ut maecenas. Nulla hendrerit
							viverra eleifend sed aliquet aliquam. Lobortis non mauris pretium
							semper enim, purus. Vitae non ac neque ornare scelerisque
							pellentesque purus sem pellentesque. Iaculis turpis habitant id id
							orci cursus ultricies. Nibh morbi diam nunc sit. Faucibus
							vulputate morbi arcu, ornare. Praesent laoreet sollicitudin
							maecenas aliquet nulla in elementum ante. Est dolor in gravida
							nunc. Dictum quis sed semper integer amet lectus lorem risus. Nisi
							vitae et montes, donec ac maecenas urna. Faucibus tincidunt
							eleifend vitae pulvinar suspendisse.
						</p>
					</Container>
				</div>

				<Container gap="1.5rem" align="flex-start" justify="flex-start">
					<h1>Documentos e editais</h1>
					<Timeline>
						<Timeline.Item>
							<a download href="../../../assets/logo.png">
								Edital de abertura
							</a>
						</Timeline.Item>
						<Timeline.Item>
							<a download href="../../../assets/logo.png">
								Resultado das inscrições
							</a>
						</Timeline.Item>
						<Timeline.Item>
							<a download href="../../../assets/logo.png">
								Resultado do recurso
							</a>
						</Timeline.Item>
					</Timeline>
				</Container>
			</ExternalHomeContainer>
		</MainLayout>
	);
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { 'sgm-userRole': userRole } = parseCookies(ctx);

	if (userRole && userRole !== 'student') {
		return {
			redirect: {
				destination: `/${userRole}/dashboard`,
				permanent: false,
			},
		};
	}

	return {
		props: {},
	};
};
