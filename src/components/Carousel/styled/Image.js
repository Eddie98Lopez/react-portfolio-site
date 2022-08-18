import styled from 'styled-components'

const Image = styled.div`
  width: 100%;
  height: inherit;
  overflow: hidden;
  color: white;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  transition: 1s ease-in-out;
  filter:none;
  /* ${props=>props.filter && `mix-blend-mode:hard-light;`} */

  & img {
    object-fit: ${props=> props.fit || 'cover'};
    width: inherit;
    height: inherit;
    object-position:${props=> props.position || 'auto'};
    ${props=> props.filter && `filter: grayscale(90%) contrast(1.5);`}
  }

  ${(props) =>
    props.counter == props.id &&
    `
transition: 1s ease-in-out;
opacity:1;
`}
`;

export default Image