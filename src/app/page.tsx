import { DropDown, OperatorBlock } from "./components";
import { filter_icon } from "./data";

const Home: React.FC = () => {
  return (
    <main className="min-h-screen p-5">

      <div>
        <h1 className="text-2xl font-bold">Ferry operators</h1>
        <p className="text-base text-shadow-neutral-600">Discover the <span className="font-semibold">57 ferry operators</span> we work with</p>
      </div>

      <div>
        <DropDown
          trigger="Operators"
          icon={filter_icon}
          componentToRender={() => <div>Operators List</div>}
        />
      </div>

      <div>
        <OperatorBlock />
      </div>

    </main>
  );
}

export default Home;