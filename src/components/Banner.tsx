import background from "../assets/background-coffe.jpg";
import Button from "./Button";
import { MenuComponenet } from "./Menu";

function Banner() {
  return (
    <div className="grid grid-rows-3 banner-style">
      <MenuComponenet />

      <h1 className="text-7xl titleMenu shadow-lg m-auto p-title">
        COFFE FANTASY
      </h1>

      <div className="grid grid-cols-2">
        <Button text="KNOW MORE" color="#F2EBD5"/>
        <Button text="DRINK ONE" color="#BF8F73"/>
      </div>
    </div>
  );
}

export default Banner;
