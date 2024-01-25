import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import TaskBoard from "./task/TaskBoard";

const App = () => {
  return (
    <div>
      <Header></Header>
      <div className="flex flex-col justify-center items-center">
      <HeroSection></HeroSection>
      <TaskBoard></TaskBoard>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;