import TeammateCard from '../TeammateCard';
import SmallBall from '../SmallBall';
import SecttinName from '../SectionName';
function TeamList(props) {
  const team = [
    {
      id: 1,
      name: 'Alex Alexsov',
      photo: '1',
      description:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    },
    {
      id: 2,
      name: 'Alex Alexsov',
      photo: '1',
      description:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock',
    },
    {
      id: 3,
      name: 'Alex Alexsov',
      photo: '1',
      description:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock',
    },
    {
      id: 4,
      name: 'Alex Alexsov',
      photo: '1',
      description:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock',
    },
    {
      id: 5,
      name: 'Alex Alexsov',
      photo: '1',
      description:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock',
    },
    {
      id: 6,
      name: 'Alex Alexsov',
      photo: '1',
      description:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock',
    },
  ];

  const teamlist = team.map((teammate) => (
    <TeammateCard key={teammate.id} user={teammate} />
  ));

  return (
    <section className=" md:ml-60 my-32 p-5">
      <SecttinName text={'Команда'}/>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 grid-rows-2 gap-y-10 justify-items-center my-10 overflow-x-clip max-h-[530px]">
        {teamlist}
      </div>
      <div className="flex flex-row justify-center gap-3">
        <SmallBall />
        <SmallBall />
        <SmallBall />
      </div>
    </section>
  );
}

export default TeamList;
