import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import styled, { css } from "styled-components";


async function getPost(id) {
    const response = await fetch(`/json/post-${id}.json`)
    return await response.json()
}

const PostDetails = () => {
    const [post, setPost] = useState({})

    const { id } = useParams()

    useEffect(() => {
        async function fetchData() {
            const post = await getPost(id)
            setPost(post.data)
        }

        fetchData()
    }, [id])

    return (
        <Section red>
            <Link to='/'>Voltar para os posts</Link>
            <div>
                <Img src={post.image} alt={post.title} />
                <h2>{post.title}</h2>
                <p>{post.text}</p>
            </div>
        </Section>
    )
}

const Section = styled.section`
    background-color: blue;
    ${(props) =>
        props.red &&
        css`
            background-color: red;
        `}
    padding: 50px;
`;

const Img = styled.img`
    width: 100%;
`;

export { PostDetails }

// o styled-components é uma biblioteca que permite escrever estilos CSS dentro de componentes JavaScript, facilitando a criação de estilos dinâmicos e reutilizáveis em aplicações React. com ele é possível definir estilos diretamente nos componentes, utilizando template literals para incorporar lógica condicional e temas, promovendo uma abordagem mais modular e organizada para o design de interfaces. para utilizar o styled-components é preciso selecionar o elemento HTML ou componente React que se deseja estilizar e aplicar a função styled seguida do nome do elemento ou componente, utilizando template literals para definir os estilos CSS desejados.