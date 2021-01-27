import tw from "tailwind-styled-components";

const Container = tw.div`
  border-2
  border-gray-100
  py-2
  transition
  duration-300
  ease-in-out
  hover:bg-gray-500
  w-full
  my-1
  flex
`;

const Name = tw.div`
  m-auto
`;

function Team({name}) {
  return (
    <Container>
      <Name>{name}</Name>
    </Container>
  );
}

export default Team;
