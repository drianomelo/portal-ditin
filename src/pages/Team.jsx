import { useLocation } from "react-router-dom";
import { Header } from "../components/Header";

export const Team = () => {
  const location = useLocation();
  const team = location.state?.team;

  console.log(team);

  if (!team) {
    return <p>Equipe não encontrado.</p>;
  }
  return (
    <>
      <div
        className="flex flex-col w-full relative"
        style={{ minHeight: "calc(100vh + 1px)" }}
      >
        <Header interno={true} />

        <div className="w-full h-30 bg-gradient-to-b from-[#010614]  absolute z-10"></div>

        <img
          src={team.img}
          alt="Equipe da Ditin"
          className="bottom-0 absolute w-full opacity-20"
        />

        <div className="absolute z-10 left-2/4 top-2/4 -translate-2/4">
          <h1 className="text-[200px] font-black uppercase">{team.slug}</h1>
        </div>
      </div>
    </>
  );
};
