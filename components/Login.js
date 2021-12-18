import Image from "next/image";
import { useMoralis } from "react-moralis";

const Login = () => {
  const { authenticate } = useMoralis();
  return (
    <div className="bg-black relative">
      <div className="flex flex-col absolute z-50 h-2/3 w-full items-center justify-center space-y-4">
        <Image
          className="object-cover rounded-full"
          src="https://chayugadesigns.com/images/profile-2.jpg"
          width={200}
          height={200}
        />

        <button
          onClick={authenticate}
          className="flex bg-yellow-500 rounded-lg p-2 font-bold animate-pulse items-center justify-center"
        >
          Login to the METAVERSE
          <Image
            className="m-2 animate-spin"
            src="https://chayugadesigns.com/images/bitcoin.png"
            width={50}
            height={50}
          />
        </button>
      </div>
      <div className="w-full h-screen">
        <Image
          src="https://chayugadesigns.com/images/cryptocurrency-concept.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Login;
